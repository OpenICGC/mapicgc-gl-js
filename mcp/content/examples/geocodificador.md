# Geocodificador ICGC

`addGeocoderICGC(options, position)` afegeix un control de cerca d'adreces basat
en l'API Pelias de l'ICGC (`geocoder.peliasUrl1`/`peliasUrl2` de la configuració).

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
        center: [1.8436, 41.5923],
        zoom: 11,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      map.on("load", () => {
        // 'options' es passa directament al control maplibre-gl-geocoder subjacent.
        map.addGeocoderICGC({ zoom: 10 }, "top-right");
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addGeocoderICGC.html i Map.js (`addGeocoderICGC`).
