
import mapicgcConfig from "../mapicgc-config.json";


export default class LogoControl {
  constructor(options) {
    this.options = options || {};

  }
  onAdd(map) {
    let defaultOptions = mapicgcConfig.defaultOptions
    this._map = map;
    let _this = this;

    this._img1 = document.createElement("img");
    this._img1.className = "maplibregl-ctrl";
    this._img1.src = this.options.color ? defaultOptions.logoIcgcOptions.logoUrlColor : defaultOptions.logoIcgcOptions.logoUrlWhite;

    this._img1.width = defaultOptions.logoIcgcOptions.logoWidth;
    this._img1.title = defaultOptions.logoIcgcOptions.logoTitle;
    
    
    this.link1 = document.createElement("a");
    this.link1.href = defaultOptions.logoIcgcOptions.logoLink; 
    this.link1.target = "_blank"; 
    this.link1.appendChild(this._img1);

    this._container1 = document.createElement("div");
    this._container1.className = "maplibregl-ctrl";
    this._container1.style.width = `${defaultOptions.logoIcgcOptions.logoWidth}px`;
    this._container1.appendChild(this.link1);
    
 
    this._img2 = document.createElement("img");
    this._img2.className = "maplibregl-ctrl";
    this._img2.src = this.options.color ? defaultOptions.logoGencatOptions.logoUrlColor : defaultOptions.logoGencatOptions.logoUrlWhite;  
    this._img2.width = defaultOptions.logoGencatOptions.logoWidth;
    this._img2.title = defaultOptions.logoGencatOptions.logoTitle;
    
    
    this.link2 = document.createElement("a");
    this.link2.href = defaultOptions.logoGencatOptions.logoLink; 
    this.link2.target = "_blank"; 
    this.link2.appendChild(this._img2);

    
    this._container2 = document.createElement("div");
    this._container2.className = "maplibregl-ctrl";
    this._container2.style.width = `${defaultOptions.logoGencatOptions.logoWidth}px`;
    this._container2.appendChild(this.link2);
    

    this._mainContainer = document.createElement("div");
    this._mainContainer.className = "divLogos";
    this._mainContainer.style = "display: flex";
    this._mainContainer.appendChild(this._container1);
    this._mainContainer.appendChild(this._container2);
    
    return this._mainContainer;
}}