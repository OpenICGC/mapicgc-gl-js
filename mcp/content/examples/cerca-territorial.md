# Cerca territorial en clicar el mapa (`addApiTerritorialICGC`)

`addApiTerritorialICGC(options, position)` afegeix un botó (o una consulta activa
sense botó) que, en clicar el mapa, interroga `api.icgc.cat/territorial` per les
col·leccions indicades (comarca, municipi, província, parcel·la cadastral...) al
punt clicat, i mostra un panell d'informació. Per cridar-ho directament sense UI,
fes servir la funció `searchApiTerritorialICGC(lng, lat, collectionsOrOptions)`.

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
        center: [1.808, 41.618],
        zoom: 10,
        maxZoom: 19,
        hash: true,
        pitch: 0,
      });

      map.on("load", () => {
        map.addApiTerritorialICGC(
          {
            infoPanel: true, // Mostra un panell lateral amb el resultat.
            IconButton: true, // false = consulta activa sense mostrar cap botó.
            icon: "https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/unknown-map-location-icon.png",
            collections: ["comarques", "municipis", "provincies", "parcelles-cadastre", "arees-basiques-policials"],
            // Camps a conservar per col·lecció; si no apareixen a la resposta, no es mostren.
            fields: {
              default: ["id", "nom"],
              municipis: ["NOMMUNI"],
              comarques: ["NOMCOMAR"],
              provincies: ["NOMPROV"],
              "parcelles-cadastre": ["refcadp"],
            },
            onResult(resultat, lngLat) {
              console.log("Resultat territorial:", resultat, lngLat);
              return resultat;
            },
          },
          "top-right"
        );
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addApiTerritorialICGC.html i
src/territorial/searchApiTerritorialICGC.js.
