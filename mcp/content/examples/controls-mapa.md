# Controls habituals del mapa

Resum dels controls més comuns que es poden afegir a un mapa mapicgc-gl-js:
geolocalització, navegació, coordenades del ratolí, pantalla completa i
exportació de la vista actual.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link href="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.css" rel="stylesheet" />
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 0; bottom: 0; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.js"></script>
  <script>
    async function initMap() {
      const data = await mapicgcgl.Config.getConfigICGC();
      const map = new mapicgcgl.Map({
        container: "map",
        style: data.Styles.TOPO,
        center: [2.1464, 41.306],
        zoom: 7.4,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      map.on("load", () => {
        // Geolocalització de l'usuari (embolcall de maplibregl.GeolocateControl).
        map.addGeolocateControl(
          { positionOptions: { enableHighAccuracy: true }, trackUserLocation: true },
          "bottom-right"
        );

        // Zoom i rotació.
        map.addNavigationControl();

        // Exportar la vista actual del mapa a imatge/PDF (@watergis/maplibre-gl-export).
        map.addExportControl();

        // Mostra coordenades (lon/lat i/o UTM) sota el cursor.
        map.addMouseCoordControl({ width: "225px", utm: true, lonlat: true }, "bottom-left");

        map.addFullscreenControl({}, "top-right");

        // També es pot fer servir qualsevol control natiu de maplibre-gl, reexportat
        // com a 'mapicgcgl.maplibregl' per no haver de carregar la llibreria per separat.
        map.addControl(new mapicgcgl.maplibregl.NavigationControl(), "bottom-right");
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config, maplibregl } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addControl.html i test/exemples/addMouseCoordinateControl.html.
