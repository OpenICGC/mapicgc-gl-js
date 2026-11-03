# Exportar el mapa a imatge/PDF

mapicgc-gl-js no té una API de "mapa estàtic" pròpia (sense navegador), però
inclou `addExportControl`, un embolcall de `@watergis/maplibre-gl-export` que
permet a l'usuari exportar la vista actual del mapa a PNG/JPEG/PDF directament
des del navegador.

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
        map.addExportControl();
      });
    }
    initMap();
  </script>
</body>
</html>
```

Si necessites generar una imatge de mapa des del servidor (sense navegador),
hauràs de fer servir directament els serveis WMS de l'ICGC (`GetMap`) com els
que es troben a `data.Layers.WMS` o `data.Layers.Orto`, construint tu mateix la
URL amb els paràmetres `bbox`, `width`, `height`, etc.

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addControl.html i src/map/Map.js (`addExportControl`).
