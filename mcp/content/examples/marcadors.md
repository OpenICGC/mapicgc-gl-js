# Marcadors i popups

`addMarker(options)` afegeix un `maplibregl.Marker` amb un popup opcional.
`addPopup(coord, text, popupStyle)` afegeix un popup independent amb un títol i,
opcionalment, una imatge.

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

      const optionsMarker = {
        coord: [2.119, 41.87],
        text: "<h3>Hola Test</h3>",
        textOffset: 25,
        options: { color: "#D08288" },
      };

      map.on("load", () => {
        map.addMarker(optionsMarker);

        // Popup independent amb títol i imatge opcional.
        map.addPopup(
          [1.8436, 41.5923],
          "Informació addicional sobre aquest punt.",
          { title: "Informació:", image: "https://eines.icgc.cat/recursos/logos/icgc_logo_color.png" }
        );
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addMarker.html i Map.js (`addMarker`, `addPopup`).
