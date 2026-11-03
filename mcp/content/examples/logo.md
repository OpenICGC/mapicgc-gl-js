# Afegir un logo al mapa

`addLogo(options)` afegeix una imatge enllaçada (logo) superposada al mapa.

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
        map.addLogo({
          id: "icgcColorLogo",
          url: "https://eines.icgc.cat/recursos/logos/icgc_logo_color.png",
          href: "https://www.icgc.cat",
          height: "80px",
        });
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addLogo.html i Map.js (`addLogo`).
