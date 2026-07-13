import { searchApiTerritorialICGC } from "../territorial/searchApiTerritorialICGC";

const DEFAULT_ICON_SVG = `
<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"></circle>
  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
  <circle cx="12" cy="12" r="1.9" fill="currentColor"></circle>
</svg>`;

export default class ApiTerritorialControl {
  constructor(options = {}) {
    this.options = {
      position: "top-right",
      collections: undefined,
      onResult: undefined,
      title: "Informació territorial",
      icon: DEFAULT_ICON_SVG,
      customPosition: undefined,
      iconClassName: "",
      IconButton: true,
      ...options,
    };

    this._active = false;
    this._map = null;
    this._button = null;
    this._container = null;
    this._handleMapClick = this._handleMapClick.bind(this);
  }

  onAdd(map) {
    this._map = map;

    this._container = document.createElement("div");
    const showIconButton = this.options.IconButton !== false;

    if (!showIconButton) {
      this._container.className = "mapicgc-api-territorial-control-hidden";
      this.setActive(true);
      return this._container;
    }

    this._container.className = "maplibregl-ctrl maplibregl-ctrl-group mapicgc-api-territorial-control";

    this._button = document.createElement("button");
    this._button.type = "button";
    this._button.className = "mapicgc-api-territorial-control-button";
    this._button.title = this.options.title;
    this._button.setAttribute("aria-label", this.options.title);
    this._button.setAttribute("aria-pressed", "false");

    if (this.options.iconClassName) {
      this._button.classList.add(this.options.iconClassName);
    }

    this._setButtonIcon(this.options.icon);

    this._button.addEventListener("click", () => {
      this.setActive(!this._active);
    });

    this._container.appendChild(this._button);

    if (this.options.customPosition && this._map?.getContainer) {
      const mapContainer = this._map.getContainer();
      window.requestAnimationFrame(() => {
        if (!this._container) {
          return;
        }

        mapContainer.appendChild(this._container);
        this._applyCustomPosition();
      });
    }

    return this._container;
  }

  onRemove() {
    this.setActive(false);

    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }

    this._map = null;
    this._container = null;
    this._button = null;
  }

  _setButtonIcon(icon) {
    if (!this._button) {
      return;
    }

    this._button.replaceChildren();

    if (icon && typeof icon === "object" && typeof icon.src === "string") {
      const image = document.createElement("img");
      image.className = "mapicgc-api-territorial-control-icon-image";
      image.src = icon.src;
      image.alt = icon.alt || "";
      this._button.appendChild(image);
      return;
    }

    if (typeof icon === "string" && icon.trim().startsWith("<")) {
      this._button.innerHTML = icon;
      return;
    }

    if (typeof icon === "string" && this._looksLikeImageSrc(icon)) {
      const image = document.createElement("img");
      image.className = "mapicgc-api-territorial-control-icon-image";
      image.src = icon;
      image.alt = "";
      this._button.appendChild(image);
      return;
    }

    if (typeof icon === "string" && icon.trim().length > 0) {
      this._button.textContent = icon;
      return;
    }

    this._button.innerHTML = DEFAULT_ICON_SVG;
  }

  _applyCustomPosition() {
    if (!this._container || !this.options.customPosition) {
      return;
    }

    const { top, right, bottom, left, zIndex } = this.options.customPosition;

    this._container.classList.add("mapicgc-api-territorial-control-floating");
    this._container.style.top = top !== undefined ? this._toCssUnit(top) : "";
    this._container.style.right = right !== undefined ? this._toCssUnit(right) : "";
    this._container.style.bottom = bottom !== undefined ? this._toCssUnit(bottom) : "";
    this._container.style.left = left !== undefined ? this._toCssUnit(left) : "";

    if (zIndex !== undefined && zIndex !== null) {
      this._container.style.zIndex = String(zIndex);
    }
  }

  _toCssUnit(value) {
    if (typeof value === "number") {
      return `${value}px`;
    }

    return String(value);
  }

  _looksLikeImageSrc(icon) {
    const value = String(icon || "").trim();
    if (!value) {
      return false;
    }

    if (value.startsWith("data:image/")) {
      return true;
    }

    if (/^https?:\/\//i.test(value)) {
      return true;
    }

    return /\.(svg|png|jpg|jpeg|webp|gif)(\?.*)?$/i.test(value);
  }

  setActive(active) {
    this._active = Boolean(active);

    if (this._button) {
      this._button.setAttribute("aria-pressed", String(this._active));
      this._button.classList.toggle("is-active", this._active);
    }

    if (!this._map) {
      return;
    }

    const canvasContainer = this._map.getCanvasContainer();

    if (this._active) {
      this._map.on("click", this._handleMapClick);
      if (canvasContainer) {
        canvasContainer.style.cursor = "crosshair";
      }
    } else {
      this._map.off("click", this._handleMapClick);
      if (canvasContainer) {
        canvasContainer.style.cursor = "";
      }
    }
  }

  async _handleMapClick(event) {
    const lng = event?.lngLat?.lng;
    const lat = event?.lngLat?.lat;

    if (typeof lng !== "number" || typeof lat !== "number") {
      return;
    }

    const resultat = await searchApiTerritorialICGC(
      lng,
      lat,
      {
        collections: this.options.collections,
        fields: this.options.fields,
      }
    );

    if (typeof this.options.onResult === "function") {
      this.options.onResult.call(this._map, resultat, event.lngLat);
    }
  }
}