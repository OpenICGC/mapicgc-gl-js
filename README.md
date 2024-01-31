<p align="center">
  <img src="https://betaserver.icgc.cat/cdn/mapicgc-gl-js/images/logo2.png" width="400px">
</p>
<p align="center">
  <img src="https://betaserver.icgc.cat/cdn/mapicgc-gl-js/images/JS-logo.svg" width="20px">
  <img src="https://betaserver.icgc.cat//cdn/mapicgc-gl-js/images/TS-logo.svg" width="20px">
  <img src="https://img.shields.io/npm/v/@unitatgeostart/mapicgc-gl-js"></img>
  <a href="https://twitter.com/icgcat" target="_blank"><img src="https://img.shields.io/twitter/follow/icgcat?style=social"></img></a>
</p>

<br>
Version 0.0.25

# What and why?
The MapICGC GL JS library builds upon the MapLibre GL JS framework, exposing its existing capabilities while introducing new features specific to the MapICGC ecosystem. This library is tailored to seamlessly integrate with the MapICGC Cloud service, offering a comprehensive set of data to enhance web mapping experiences, including vector tiles, satellite raster tiles, DEM with Terrain RGB, and customizable styles with an editor.

**Why did we develop a new library?** Our goal is to simplify the development process for MapICGC developers! With MapICGC GL JS, you won't need to load external plugins for basic functionalities, deal with complex data source URLs, or search for syntax to enable 3D terrain every time you embark on a project. All these features are either built-in, loaded dynamically when necessary, or accessible through straightforward functions. While the SDK is opinionated, being closely tied to MapICGC Cloud data, its MapLibre core ensures 100% compatibility with other data sources..  

Moreover, MapICGC GL JS provides well-documented and user-friendly wrapper functions for MapICGC Cloud API services, including geocoding, static maps, geolocation, and a coordinate reference system search engine for transforming coordinates between different CRSs.


> 📣 *__Note:__* If you only need the API Client library for headless usage without map display, consider exploring the MapICGC Client JS library for both browser and NodeJS.

# Install
```shell
npm install --save @mapicgc-gl-js
```

# API documentation
In addition to the details and examples provided in this readme, check out:

- [Documentació de les funcions del Mapa (docu_Map.md)](docu_Map.md)
- [Documentació del plugin CompareMaps (docu_CompareMaps.md)](docu_CompareMaps.md)



### Com afegir la biblioteca a un projecte propi?

1. Instal·lar la biblioteca:

    ```bash
    npm i mapicgc-gl-js
    ```

2. Afegir les següents línies de codi JS i CSS a l'encapçalament del teu HTML:

    ```html
   
    <script src="https://www.unpkg.com/@watergis/maplibre-gl-export@3.0.1/dist/maplibre-gl-export.umd.js"></script>

    <link href="https://www.unpkg.com/@watergis/maplibre-gl-export@3.0.1/dist/maplibre-gl-export.css" rel="stylesheet" />
    ```

3. En el script del cos del document, declarar el mapa de la següent manera:

    ```javascript
    import { Map } from 'mapicgc-gl-js'; 

    const map = (window.map = new Map({
      style: "topografic",
    }));
    ```

### Funcionalitats

- Mapa per defecte: Topogràfic ICGC
- Fons de mapes: Topogràfic, Orto, Híbrid, Gris, Fosc

- Afegir capes GeoJson i WMS

- Markers

- Control Basemaps

- Control atribució

- Control Capes

- Control print

- Popups

