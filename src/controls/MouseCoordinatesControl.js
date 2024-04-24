import utmObj from "utm-latlng";
export default class MouseCoordinatesControl {
  constructor(options) {
    this.options = options || {};
    this.options.utm = this.options.hasOwnProperty("utm")
      ? this.options.utm
      : true;
    this.options.lonlat = this.options.hasOwnProperty("lonlat")
      ? this.options.lonlat
      : true;
  }
  onAdd(map) {
    const utm = new utmObj();
    this._map = map;
    this._container = document.createElement("div");
    this._container.className = "maplibregl-ctrl coordControl";
    this._container.style.width = `${this.options.width || "225px"}`;
    this._map.on("mousemove", (e) => {
      const auxLat = e.lngLat.lat;
      const auxLon = e.lngLat.lng;
      let utmMsg = "";
      let lonLatMsg = "";
      const auxUTM = utm.convertLatLngToUtm(auxLat, auxLon, 2);
      const hemi = auxLat > 0.00 ? "N": "S";

      if (this.options.utm) {
        utmMsg = `ETRS89 UTM ${auxUTM.ZoneNumber}${hemi} X:<b> ${auxUTM.Easting}</b> Y:<b> ${auxUTM.Northing}</b> <br>`;
      }
      if (this.options.lonlat) {
        lonLatMsg = `WGS 84 Lon:<b> ${auxLon.toFixed(
          5
        )}</b>  Lat:<b> ${auxLat.toFixed(5)}</b>`;
      }
      const msg = `${utmMsg}${lonLatMsg}`;
      this._container.innerHTML = msg;
    });
    return this._container;
  }
  _lookUTM31(x, y) {
    var x0 = 0.0; //0.7525
    var y0 = 0.0; // 40.5263
    var x1 = 6.0; // 3.3563
    var y1 = 84.0; // 42.3748
    if (x >= x0 && x <= x1 && y >= y0 && y <= y1) {
      return true;
    } else {
      return false;
    }
  }
  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}
