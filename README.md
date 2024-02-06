<p align="center">
  <img src="https://betaserver.icgc.cat/cdn/mapicgc-gl-js/images/logo2.png" width="400px">
</p>
<p align="center">
  <img src="https://betaserver.icgc.cat/cdn/mapicgc-gl-js/images/JS-logo.svg" width="20px">
  <img src="https://betaserver.icgc.cat//cdn/mapicgc-gl-js/images/TS-logo.svg" width="20px">
  <img src="https://badge.fury.io/js/mapicgc-gl-js.svg"></img>
  <a href="https://twitter.com/icgcat" target="_blank"><img src="https://img.shields.io/twitter/follow/icgcat?style=social"></img></a>
</p>


<br>

Version 0.0.30



The MapICGC GL JS library builds upon the MapLibre GL JS framework, exposing its existing capabilities while introducing new features specific to the MapICGC ecosystem. This library is tailored to seamlessly integrate with the MapICGC Cloud service, offering a comprehensive set of data to enhance web mapping experiences, including vector tiles, satellite raster tiles, DEM with Terrain RGB, and customizable styles with an editor.

 Our goal is to simplify the development process for MapICGC developers! With MapICGC GL JS, you won't need to load external plugins for basic functionalities, deal with complex data source URLs, or search for syntax to enable 3D terrain every time you embark on a project. All these features are either built-in, loaded dynamically when necessary, or accessible through straightforward functions. While the SDK is opinionated, being closely tied to MapICGC Cloud data, its MapLibre core ensures 100% compatibility with other data sources..  

Moreover, MapICGC GL JS provides well-documented and user-friendly wrapper functions for MapICGC Cloud API services, including geocoding, static maps, geolocation, and a coordinate reference system search engine for transforming coordinates between different CRSs.


> 📣 *__Note:__* If you only need the API Client library for headless usage without map display, consider exploring the MapICGC Client JS library for both browser and NodeJS.

<br>

# First steps

1. Import the library:
- NPM
    ```bash
    npm i mapicgc-gl-js
    ```
- CDN

   ```html
   <script src="https://betaserver.icgc.cat/cdn/mapicgc-gl-js/mapicgc-gl.js"></script>
   <link href="https://betaserver.icgc.cat/cdn/mapicgc-gl-js/mapicgc-gl.css" rel="stylesheet" />
   ```

2. In the document body script, declare the map as follows:

   ```html hl_lines="35"
    <div id="map"></div>
    <script>
      import { Map } from 'mapicgc-gl-js'; 

      const map = Map({
        container: 'map',
        style: "Style.Topografic", // style from mapicgc library
        center: [2.1464, 41.306], // starting position [lng, lat]
        zoom: 7.4, //starting zoom 
      });
    </script>
   ```
   <div align="center">
    <a title="Link to CodePen" href="https://codepen.io/unitatgeostart/pen/eYXWyqd" target="_blank"><img  src="https://betaserver.icgc.cat/cdn/mapicgc-gl-js/images/map1.png"></img></a></div>
<br>

# Documentation

Full documentation for this library is <a href="https://autogitlab.icgc.local/geostarters/icgc/mapicgc/mapicgc-doc" target="_blank">available here</a>. 

Check out the features through <a href="https://codepen.io/collection/mrvVZd" target="_blank">examples</a>.


<br>

# License
**MAPICGC GL JS** is licensed under the [3-Clause BSD license](./LICENSE.md).