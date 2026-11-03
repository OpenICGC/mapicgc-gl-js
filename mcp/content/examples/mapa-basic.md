# Mapa bàsic amb mapicgc-gl-js

Exemple mínim per crear un mapa centrat a Catalunya amb un estil base de l'ICGC.
Cal carregar primer la configuració amb `Config.getConfigICGC()` per obtenir les
URLs d'estil reals (`data.Styles.<CLAU>`).

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
        style: data.Styles.TOPO, // TOPO, ORTO, ORTO3D, ADMIN, DARK, LIGHT, GEOLOGY, ORTOHYBRID
        center: [2.1464, 41.306],
        zoom: 7.4,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });
    }
    initMap();
  </script>
</body>
</html>
```

Equivalent amb NPM i mòduls ES:

```js
import { Map, Config } from "mapicgc-gl-js";

async function initMap() {
  const data = await Config.getConfigICGC();
  const map = new Map({
    container: "map",
    style: data.Styles.LIGHT,
    center: [1.808, 41.618],
    zoom: 10,
    maxZoom: 19,
    hash: true,
    pitch: 0,
  });
}
initMap();
```

Font: README.md i test/exemples/addMapStyle.html del repositori mapicgc-gl-js.
