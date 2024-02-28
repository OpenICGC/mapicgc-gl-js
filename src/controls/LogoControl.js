
import defaultOptions from "../config.js";
export default class LogoControl {
  constructor(options) {
    this.options = options;
  }
  onAdd(map) {
    this._map = map;
    let _this = this;
    this._img = document.createElement("img");
    this._img.className = "maplibregl-ctrl";
    this._img.src = this.options.color? defaultOptions.logoOptions.logoUrlColor : defaultOptions.logoOptions.logoUrlWhite;
    this._img.width = defaultOptions.logoOptions.logoWidth;
    this._img.title = defaultOptions.logoOptions.logoTitle;
    this.link = document.createElement("a");
    this.link.href = defaultOptions.logoOptions.logoLink; 
    this.link.target = "_blank"; 
    this.link.appendChild(this._img);
    this._container = document.createElement("div");
    this._container.className = "maplibregl-ctrl";
    this._container.style = `width:${defaultOptions.logoOptions.logoWidth}px`,
    this._container.appendChild(this.link);
    return this._container;
  }
  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}
