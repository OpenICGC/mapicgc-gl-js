# Comparador de dos mapes (`CompareMaps`)

`CompareMaps` (importat juntament amb `Map` i `Config`) crea un control
lliscant que compara dos mapes costat a costat sobre el mateix contenidor.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link href="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.css" rel="stylesheet" />
  <style>
    body { margin: 0; padding: 0; }
    #comparison-container, .map { position: absolute; top: 0; bottom: 0; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="comparison-container">
    <div id="before" class="map"></div>
    <div id="after" class="map"></div>
  </div>
  <script src="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.js"></script>
  <script>
    async function initMap() {
      const data = await mapicgcgl.Config.getConfigICGC();

      const map1 = new mapicgcgl.Map({
        container: "before",
        style: data.Styles.ORTO,
        center: [1.1464, 41.706],
        zoom: 7.4,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      const map2 = new mapicgcgl.Map({
        container: "after",
        style: data.Styles.TOPO,
        center: [1.1464, 41.706],
        zoom: 7.4,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      const container = "#comparison-container";
      new mapicgcgl.CompareMaps(map1, map2, container, {});
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config, CompareMaps } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addCompare.html.
