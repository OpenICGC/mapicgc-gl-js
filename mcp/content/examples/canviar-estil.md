# Canviar d'estil i volar a una ubicació

Pots commutar entre els estils de `data.Styles` amb `map.setStyle(url)`, i moure la
càmera amb `map.flyTo(options)` (animat) o `map.jumpTo(options)` (instantani).

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
        style: data.Styles.ORTO,
        center: [1.1464, 41.706],
        zoom: 7.4,
        hash: true,
        pitch: 0,
      });

      map.on("load", () => {
        // Vola animadament a una nova posició i zoom.
        map.flyTo({ center: [2.812786, 41.98559], zoom: 14 });
      });

      // Commutar l'estil base (p. ex. des d'un menú de ràdio buttons amb els id
      // 'TOPO', 'LIGHT', 'ORTO', 'ORTO3D', 'ADMIN', 'DARK'...)
      window.switchLayer = function (styleKey) {
        map.setStyle(data.Styles[styleKey]);
      };
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM (si fas servir un bundler): `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.` de `Map`/`Config`.

Font: test/exemples/addMapStyle.html i test/exemples/styleOrto3D.html.
