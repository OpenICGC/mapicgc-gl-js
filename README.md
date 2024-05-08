<div style="text-align:center">
  <img src="https://tilemaps.icgc.cat/cdn/images/logo2.png"  alt="MapICGC Logo" width="400px">
</div>
<hr/>
<div style="text-align:center">

  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=flat)](LICENSE.txt) 
  [![Version](https://img.shields.io/npm/v/mapicgc-gl-js?style=flat)](https://www.npmjs.com/package/mapicgc-gl-js) 
  [![X](https://img.shields.io/twitter/follow/icgcat?style=social)](https://twitter.com/icgcat) 
  <img src="https://tilemaps.icgc.cat/cdn/images/JS-logo.svg" width="20px"/>
</div>
<hr/>

# MapICGC GL JS


> 🌠 __Based on MapLibre GL JS version:__ 4.1.3 

The MapICGC GL JS library builds upon the  open-source library [**MapLibre GL JS**](https://github.com/maplibre/maplibre-gl-js), exposing its existing capabilities while introducing new features specific to the MapICGC ecosystem. This library is tailored to seamlessly integrate with the MapICGC Cloud service, offering a comprehensive set of data to enhance web mapping experiences, including vector tiles, satellite raster tiles, DEM with Terrain RGB, and customizable styles with an editor.

 Our goal is to simplify the development process for MapICGC developers! With MapICGC GL JS, you won't need to load external plugins for basic functionalities, deal with complex data source URLs, or search for syntax to enable 3D terrain every time you embark on a project. All these features are either built-in, loaded dynamically when necessary, or accessible through straightforward functions. 

Moreover, MapICGC GL JS provides well-documented and user-friendly wrapper functions for MapICGC Cloud API services, including geocoding, static maps, geolocation, and a coordinate reference system search engine for transforming coordinates between different CRSs.




<br>

## Documentation

Full documentation for this library is <a href="https://openicgc.github.io/mapicgc-doc/" target="_blank">available here</a>. 

Check out the features through <a href="https://codepen.io/collection/mrvVZd" target="_blank">examples</a>. 


<br>

## Getting Started

### NPM

1. Install the library:
    ```bash
    npm i mapicgc-gl-js

2. Import the library:
    ```html
    <script>
     import { Map, Config } from "mapicgc-gl-js";
    //import * as mapicgcgl from  "mapicgc-gl-js";
 
      async function initMap() {
          const data = await Config.getConfigICGC(); //load config
          const map = new Map({
            container: "map",
            style: data.Styles.LIGHT,
            center: [1.808, 41.618],
            zoom: 10,
            maxZoom: 19,
            hash: true,
            pitch: 0,
          });
      }
      initMap();
    </script>
   ```
### CDN

1. Include the JavaScript and CSS files in the `<head>` of your HTML file.:
   ```html
   <script src="https://tilemaps.icgc.cat/cdn/mapicgc-gl-js/mapicgc-gl.js"></script>
   <link href="https://tilemaps.icgc.cat/cdn/mapicgc-gl-js/mapicgc-gl.css" rel="stylesheet" />
   ```

2. Include the following code in the `<body>` of your HTML file.:

   ```html
    <div id="map"></div>
    <script>
      async function initMap() {
        const data = await  mapicgcgl.Config.getConfigICGC();
        const map = new mapicgcgl.Map({
          container: "map",
          style: data.Styles.TOPO, // <-- add style basemap here
          center: [2.1464, 41.306],
          zoom: 7.4,
          maxZoom: 19,
          hash: true,
          pitch: 0,
        });
    </script>
   ```

Result: 

   <div align="center">
    <a title="Link to CodePen" href="https://codepen.io/unitatgeostart/pen/eYXWyqd" target="_blank"><img  src="https://tilemaps.icgc.cat/cdn//images/map1.png"></img></a></div>
<br>



## Dependencies

MapICGC GL JS integrates the following libraries: 
- <a href="https://github.com/maplibre/maplibre-gl-compare" target="_blank"> @maplibre/maplibre-gl-compare </a>
- <a href="https://github.com/maplibre/maplibre-gl-geocoder" target="_blank"> @maplibre/maplibre-gl-geocoder </a>
- <a href="https://www.npmjs.com/package/@watergis/maplibre-gl-export" target="_blank"> @watergis/maplibre-gl-export </a>


<br>

## Developed by:

 <a href="https://www.icgc.cat/" target="_blank"><img src="https://tilemaps.icgc.cat/cdn/logos/ICGC_color_norma.svg"  alt="ICGC Logo" width="150"></img></a>



## License
**MAPICGC GL JS** is licensed under the [3-Clause BSD license](./LICENSE.txt).
