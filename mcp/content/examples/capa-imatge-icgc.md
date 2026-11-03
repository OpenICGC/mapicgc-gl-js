# Capa d'imatge ICGC (ortofoto / WMS)

`addImageLayerICGC(url, idLayer, options)` afegeix una capa ràster (WMS) de l'ICGC,
com ara una sèrie d'ortofoto històrica. Les URLs reals surten de
`data.Layers.Orto.<clau>` (p. ex. `ortofotoColor2014`, `ortofotoColorVigent`).

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
        map.addImageLayerICGC(data.Layers.Orto.ortofotoColorVigent, "orto-vigent", {
          type: "raster",
          layout: { visibility: "visible" },
          paint: { "raster-opacity": 1 },
          layerPosition: "labels",
        });
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Internament, `addImageLayerICGC` valida la URL contra `Layers.Orto` / `Layers.VectorAdmin`
/ `Layers.WMS` / `Layers.Vector` i crida `addLayerWMS` per afegir la capa ràster.

Font: test/exemples/addImageLayerICGC.html i Map.js (`addImageLayerICGC`, `addLayerWMS`).
