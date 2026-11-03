# Selector de mapes base (`addBasemapsICGC`)

`addBasemapsICGC(basesArray)` afegeix un control que permet canviar entre
diversos estils base de l'ICGC amb miniatures. Per fer-ho amb estils propis
(no de l'ICGC), fes servir `addBasemaps(baseLayers)` amb l'estructura
`{ label, image, url }`.

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
        center: [2.1464, 41.306],
        zoom: 7.4,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      map.on("load", () => {
        map.addFullscreenControl();

        // Afegeix diversos basemaps ICGC i genera el selector automàticament.
        const basemapsIcgc = [data.Styles.ORTO, data.Styles.TOPO];
        map.addBasemapsICGC(basemapsIcgc);
      });
    }
    initMap();

    // Per afegir basemaps d'altres fonts, segueix aquesta estructura:
    // const baseLayers = [
    //   {
    //     id: 0,
    //     value: "Mapa estàndard",
    //     label: "icgc_mapa_estandard_general",
    //     url: "https://geoserveis.icgc.cat/styles/mapa-base-topografic.json",
    //     image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_estandard.png",
    //   },
    // ];
    // map.addBasemaps(baseLayers);
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addBasemap.html i Map.js (`addBasemapsICGC`, `addBasemaps`).
