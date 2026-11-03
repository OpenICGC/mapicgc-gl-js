# Terreny 3D (hillshade)

`addTerrainICGC(url, controlPosition)` carrega un terreny "raster-dem" i afegeix
(opcionalment) un botó per activar/desactivar la inclinació 3D. Les claus vàlides
per `url` són `data.Terrains.ICGC5M` (5m, només Catalunya) i `data.Terrains.WORLD30M`
(cobertura mundial, Mapterhorn).

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link href="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.css" rel="stylesheet" />
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 0; bottom: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%); }
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
        style: data.Styles.ORTO,
        center: [0.959, 42.201],
        zoom: 13,
        maxZoom: 19,
        hash: true,
        pitch: 80,
        bearing: 40,
      });

      const controlPosition = "bottom-right"; // posa null per no mostrar el botó

      map.on("load", () => {
        map.addTerrainICGC(data.Terrains.WORLD30M, controlPosition);
      });
    }
    initMap();
  </script>
</body>
</html>
```

Per al terreny d'alta resolució (5 m) de Catalunya, fes servir
`data.Terrains.ICGC5M` en lloc de `WORLD30M`.

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addICGCTerrain.html i Map.js (`addTerrainICGC`).
