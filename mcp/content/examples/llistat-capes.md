# Llistat de capes amb casella de selecció (`addLayerTree`)

`addLayerTree(options)` crea un petit panell HTML amb una casella per capa,
agrupant els punts d'una col·lecció GeoJSON per la seva propietat `icon`.

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
        zoom: 6.4,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      const options = {
        id: "testLayer",
        type: "geojson",
        features: {
          type: "FeatureCollection",
          features: [
            { type: "Feature", properties: { icon: "Rubí" }, geometry: { type: "Point", coordinates: [2.0119, 41.489] } },
            { type: "Feature", properties: { icon: "Moià" }, geometry: { type: "Point", coordinates: [2.119, 41.87] } },
            { type: "Feature", properties: { icon: "Berga" }, geometry: { type: "Point", coordinates: [1.83, 42.163] } },
          ],
        },
      };

      map.on("load", () => {
        map.addLayerTree(options);
      });
    }
    initMap();
  </script>
</body>
</html>
```

Nota: `addLayerTree` crea el seu `<nav id="filter-group">` dins del contenidor
amb id `map`, així que cal que el DOM tingui un element `#map`.

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addLayerTree.html i Map.js (`addLayerTree`).
