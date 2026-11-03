# Afegir una capa GeoJSON pròpia

`addLayerGeoJSON(layer, layerPosition)` afegeix dades GeoJSON pròpies (no de
l'ICGC) com a font i capa de MapLibre en un sol pas.

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
        center: [1.001, 41.759],
        zoom: 7.4,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      map.on("load", () => {
        const geojsonLayer = {
          id: "geojsonTest",
          data: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [[
                [1.3119, 41.489],
                [1.0119, 41.489],
                [1.0119, 42.0489],
                [1.3119, 42.0489],
              ]],
            },
          },
          type: "fill",
          layout: {},
          paint: { "fill-color": "#088", "fill-opacity": 0.8 },
        };

        const layerPosition = "labels"; // 'top', 'lines' o 'labels'
        map.addLayerGeoJSON(geojsonLayer, layerPosition);
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addLayerGeojson.html i Map.js (`addLayerGeoJSON`).
