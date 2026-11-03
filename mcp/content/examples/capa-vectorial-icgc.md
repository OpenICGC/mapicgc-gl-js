# Capa vectorial de l'ICGC (`addVectorLayerICGC`)

`addVectorLayerICGC(url, idLayer, options)` afegeix una capa vectorial de l'ICGC
(límits administratius, cobertes del sòl...). Les URLs reals surten de
`data.Layers.VectorAdmin.<clau>` o `data.Layers.Vector.<clau>`.

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
        const optionsVectorAdmin = {
          type: "line",
          layout: { visibility: "visible" },
          paint: { "line-color": "#4832a8", "line-opacity": 1, "line-width": 1 },
          layerPosition: "top", // 'top', 'lines' o 'labels'
        };

        map.addVectorLayerICGC(
          data.Layers.VectorAdmin.seccionsCensals2023,
          "municipisVigent",
          optionsVectorAdmin
        );
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addVectorLayerICGC.html i Map.js (`addVectorLayerICGC`).
