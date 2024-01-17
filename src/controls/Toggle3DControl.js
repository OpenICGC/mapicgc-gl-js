export default class Pitch3DToggle {

    constructor() {
        this._bearing = 0;
        this._pitch = 60;
        this._minpitchzoom = null;
    }

    onAdd(map) {
        this._map = map;
        let _this = this;

        this._btn = document.createElement('button');
        this._btn.className = 'maplibregl-ctrl-icon maplibregl-ctrl-pitchtoggle-3d';
        this._btn.id = 'bt3D';

        this._btn.type = 'button';
        this._btn['aria-label'] = 'Vista 3D';
        this._btn.onclick = function () {
            if (_this._btn.className.indexOf("3d") != -1) {
                let options = { pitch: _this._pitch, bearing: _this._bearing };
                if (_this._minpitchzoom && map.getZoom() > _this._minpitchzoom) {
                    options.zoom = _this._minpitchzoom;
                }
                var x0 = 0.0000; //0.7525
                var y0 = 38.5000; // 40.5263
                var x1 = 6.0000; // 3.3563
                var y1 = 62.3300; // 42.3748
                var { longitude, latitude } = map.getCenter();

                if (map.getZoom() < 10) {
                    map.setTerrain({
                        'source': 'terrainMapZen',
                        'exaggeration': 1.5
                    });
                } else if (longitude >= x0 && longitude <= x1 && latitude >= y0 && latitude <= y1) {
                    map.setTerrain({
                        'source': 'terrainICGC',
                        'exaggeration': 1.2
                    });
                } else {
                    map.setTerrain({
                        'source': 'terrainMapZen',
                        'exaggeration': 1.5
                    });
                }



                map.easeTo(options);
                _this._btn.className = 'maplibregl-ctrl-icon maplibregl-ctrl-pitchtoggle-2d';
            } else {
                map.setTerrain(null);
                map.easeTo({ pitch: 0, bearing: 0 });
                _this._btn.className = 'maplibregl-ctrl-icon maplibregl-ctrl-pitchtoggle-3d';
            }
        };


        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl maplibregl-ctrl-group';
        this._container.title = 'Vista 3D';
        this._container.appendChild(this._btn);

        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }

}
