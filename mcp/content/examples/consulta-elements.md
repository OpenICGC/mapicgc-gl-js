# Carregar dades externes i consultar elements amb popup

`fetchData(url, idLayer, options)` descarrega GeoJSON extern i l'afegeix com a
capa. `addFeatureQuery(idLayer, queryFields, popupStyle)` hi afegeix un popup
d'informació en clicar cada element.

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
        const paintOptions = {
          layout: { visibility: "visible" },
          paint: { "line-color": "red", "line-width": 2, "line-opacity": 1 },
          layerPosition: "top",
        };

        map.fetchData(
          "https://analisi.transparenciacatalunya.cat/resource/pzaa-n72w.geojson",
          "RutesMontserrat",
          paintOptions
        );

        const popupStyle = {
          title: "Informació:",
          image: "https://eines.icgc.cat/recursos/logos/icgc_logo_color.png",
        };
        // Camps concrets a mostrar al popup; buit = mostra totes les propietats.
        const queryFields = [];
        map.addFeatureQuery("RutesMontserrat", queryFields, popupStyle);
      });
    }
    initMap();
  </script>
</body>
</html>
```

Per agrupar les dades sota un menú de capes amb caselles de selecció, fes servir
`fetchDataAndMenu(url, idLayer, filterField, options)` en lloc de `fetchData`.

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addFeatureQuery.html i test/exemples/fetchData.html.
