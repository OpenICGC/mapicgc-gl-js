# Estil RELIEF personalitzat

A banda dels estils base de l'ICGC, pots definir un estil `RELIEF` totalment
personalitzat passant un objecte `{ source, colorRelief }` com a `style` del mapa:
una font `raster-dem` (p. ex. terrarium) i una rampa de colors per elevació.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link href="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.css" rel="stylesheet" />
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 0; bottom: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%); }
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
        style: {
          source: {
            type: "raster-dem",
            tiles: ["https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png"],
            encoding: "terrarium",
            tileSize: 256,
            maxzoom: 20,
          },
          colorRelief: [
            "interpolate",
            ["linear"],
            ["elevation"],
            -50, "rgb(30, 70, 130)",
            0, "rgb(120, 180, 210)",
            500, "rgb(245, 220, 110)",
            1400, "rgb(230, 140, 80)",
            2400, "rgb(180, 150, 130)",
            3600, "rgb(255, 255, 255)",
          ],
        },
        center: [1.3237, 42.1995],
        zoom: 11.05,
        maxZoom: 19,
        hash: true,
        pitch: 72,
        bearing: 26.3,
      });

      map.on("load", () => {
        map.addTerrainICGC(data.Terrains.WORLD30M);

        // Es pot superposar una ortofoto semitransparent per donar context.
        map.addImageLayerICGC(data.Layers.Orto.ortofotoColor2014, "orto2014", {
          type: "raster",
          layout: { visibility: "visible" },
          paint: { "raster-opacity": 0.26 },
          layerPosition: "labels",
        });
      });
    }
    initMap();
  </script>
</body>
</html>
```

Amb NPM: `import { Map, Config } from "mapicgc-gl-js";` i treu el prefix `mapicgcgl.`.

Font: test/exemples/addReliefStyle.html.
