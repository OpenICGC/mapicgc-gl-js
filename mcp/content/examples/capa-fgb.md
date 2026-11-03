# Capa FlatGeobuf (FGB) de l'ICGC

`addFGBLayerICGC(url, idLayer, options)` descarrega i afegeix una capa en format
FlatGeobuf (`.fgb`), molt més lleuger que GeoJSON per a grans volums de dades.
Les URLs reals surten de `data.Layers.FGBAdmin.<clau>`.

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
        center: [1.808, 41.618],
        zoom: 10,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      map.on("load", () => {
        map.addFGBLayerICGC(data.Layers.FGBAdmin.comarquesVigent, "Comarques", {
          type: "line", // "auto" | "line" | "fill" | "circle"
          layout: { visibility: "visible" },
          paint: { "line-color": "grey", "line-width": 2 },
          layerPosition: "top",
        });
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/fetchDataAndMenu.html i Map.js (`addFGBLayerICGC`).
