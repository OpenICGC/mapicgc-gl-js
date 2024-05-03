export default class LegendControl {
  constructor(options) {
    this.options = options || {};
   
  }
  onAdd(map) {
    this._map = map;
    let _this = this;

    this._img1 = document.createElement("img");
    this._img1.src = this.options.name;

    this._img1.width = 150;
    this._img1.title = 300;

    this.controlContainer = document.createElement("div");
    this.controlContainer.classList.add("maplibregl-ctrl");
    this.controlContainer.classList.add("maplibregl-ctrl-group");
    this.legendContainer = document.createElement("div");
    this.legendContainer.classList.add("maplibregl-legend-list");
    this.legendButton = document.createElement("button");
    this.legendButton.classList.add("maplibregl-ctrl-icon");
    this.legendButton.classList.add("maplibregl-legend-switcher");
    this.legendButton.addEventListener("click", () => {
      this.legendButton.style.display = "none";
      this.legendContainer.style.display = "block";
    });
    document.addEventListener("click", this.onDocumentClick);
    this.controlContainer.appendChild(this.legendButton);
    this.controlContainer.appendChild(this.legendContainer);

    this.closeButton = document.createElement("button");
    this.closeButton.textContent = "x";
    this.closeButton.classList.add("maplibregl-legend-close-button");
    this.closeButton.addEventListener("click", () => {
      this.legendButton.style.display = "block";
      this.legendContainer.style.display = "none";
    });
    this.legendContainer.appendChild(this.closeButton);
    const legendLabel = document.createElement("label");
    legendLabel.classList.add("maplibregl-legend-title-label");
    legendLabel.textContent = this.options.idLayer || "Llegenda";
    this.legendContainer.appendChild(legendLabel);
    this.legendContainer.appendChild(document.createElement("br"));
    this.legendContainer.appendChild(this._img1);

    return this.controlContainer;
  }
}
