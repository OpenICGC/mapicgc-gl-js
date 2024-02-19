import maplibregl from "maplibre-gl";
// import flatgeobuf from "flatgeobuf";
import Pitch3DToggleControl from "../controls/Toggle3DControl.js";
// import MeasuresControl from 'maplibre-gl-measures';
import {
  MaplibreExportControl,
  Size,
  PageOrientation,
  Format,
  DPI,
} from "@watergis/maplibre-gl-export";
import "@watergis/maplibre-gl-export/dist/maplibre-gl-export.css";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import Terrains from "../constants/Terrains.js";
import Styles from "../constants/Styles.js";
import Layers from "../constants/Layers.js";
import defaultOptions from "../config.js";
// import "../plugins/maplibre-gl-geocoder.js";

/**
 * Class representing a custom map with additional functions.FVec
 */
export default class Map {
  /**
   * Constructor for the Map class.
   * @param {Object} options - Options to initialize the map.
   */

  constructor(options) {
    let arrayUserOptions = Object.getOwnPropertyNames(options);
    if (arrayUserOptions) {
      // console.log('d44eeee', arrayUserOptions)
      // arrayUserOptions.forEach((el) => {
      //   if (el === "style") {
      //     options[el] = this._dealStyleMaps(options[el]);
      //   } else {
      //     options[el] = options[el];
      //   }
      // });
    }
    if (!options) {
      options = defaultOptions.mapOptions;
    } else {
      for (const key in defaultOptions.mapOptions) {
        let center = [
          defaultOptions.mapOptions.center[0],
          defaultOptions.mapOptions.center[1],
        ];
        defaultOptions.mapOptions.center = center;
        if (!options.hasOwnProperty(key)) {
          options[key] = defaultOptions.mapOptions[key];
        }
      }
    }
    // console.log('dseeee', options)
    options.maxZoom = 18;
    options.maxPitch = 85;
    options.maplibreLogo = false;
    options.attributionControl = false;

    this.map = new maplibregl.Map(options);
    this.map.options = options;

    this.map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
      })
    );
  }

  /**
   * Add geocoder.
   * @function addGeocoderICGC
   * @returns {Object} - The current position of the search result.
   */

  addGeocoderICGC() {
    try {
      // console.log("hello geocoder");

      const urlSearchPelias =
        "https://eines.icgc.cat/geocodificador/autocompletar?text=";

        let options={
          collapsed : true, 
          marker: true,
          popup: true,
          showResultMarkers: true,
          maplibregl: maplibregl,
          showResultsWhileTyping: true,
          minLength: 2,
        };

      const geocoderApi = {
    
        forwardGeocode: async (config) => {
      
          const features = [];
          try {
            const requesst = `https://nominatim.openstreetmap.org/search?q=${config.query}&format=geojson&polygon_geojson=1&addressdetails=1`;
      


            const request =
              urlSearchPelias +
              encodeURIComponent(config.query) +
              "&layers=topo1%2Ctopo2%2Caddress&size=5";
            const response = await fetch(request);
            const geojson = await response.json();

            // console.log('geoj', geojson)
            for (const feature of geojson.features) {
              const center = feature.geometry.coordinates;
              const point = {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: center,
                },
                place_name: feature.properties.label,
                properties: feature.properties,
                text: feature.properties.label,
                place_type: ["place"],
                center,
              };
              features.push(point);
            }
          } catch (e) {
            console.error(`Failed to forwardGeocode with error: ${e}`);
          }

          return {
            features,
          };
        },
        
      };

      // Pass in or define a geocoding API that matches the above
      this.map.addControl(new MaplibreGeocoder(geocoderApi, options));
      let inputsearch = document.getElementsByClassName(
        "maplibregl-ctrl-geocoder--input"
      );
      // console.log('in', inputsearch)
      inputsearch[0].attributes[2].nodeValue = "Cerca...";
inputsearch[0].addEventListener('input', function(event) {

  let word = event.target.value
  if (word.length > 3){
    // console.log('més de 3:', word)
  }
  // Puedes realizar cualquier acción que desees aquí
})


    } catch (error) {
      console.error(`Error adding ICGC geocoder: ${error.message}`);
    }
  }

  //geocoder ends

  /**
   * Retrieves the current style of the map.
   * @function getStyle
   * @returns {Object} - The current style of the map.
   */
  getStyle() {
    try {
      this.map.getStyle();
    } catch (error) {
      console.error(`Error getting style: ${error.message}`);
    }
  }

  /**
   * Retrieves the available base styles from default options.
   * @function getConfigStyles
   * @returns {Array} - Array containing the names of available base styles.
   */
  getConfigStyles() {
    try {
      let stylesArray = [];
      for (const style of Styles) {
        stylesArray.push(style.name);
      }
      // console.log(stylesArray)
      return stylesArray;
    } catch (error) {
      console.error(`Error retrieving base styles: ${error.message}`);
    }
  }
  /**
   * Retrieves the available WMS image layers from default options.
   * @function getConfigWMSLayers
   * @returns {Array} - Array containing the keys of available WMS image layers.
   */
  getConfigWMSLayers() {
    try {
      let imageArray = [];
      for (const key in Layers.WMS) {
        if (Layers.WMS.hasOwnProperty(key)) {
          imageArray.push(key);
        }
      }
      // console.log('arrayLayers', imageArray)
      return imageArray;
    } catch (error) {
      console.error(`Error retrieving WMS layers: ${error.message}`);
    }
  }
  /**
   * Retrieves the available orto image layers from default options.
   * @function getConfigOrtoLayers
   * @returns {Array} - Array containing the keys of available image layers.
   */
  getConfigOrtoLayers() {
    try {
      let imageArray = [];
      for (const key in Layers.Orto) {
        if (Layers.Orto.hasOwnProperty(key)) {
          imageArray.push(key);
        }
      }
      // console.log('arrayLayers', imageArray)
      return imageArray;
    } catch (error) {
      console.error(`Error retrieving orto image layers: ${error.message}`);
    }
  }
  /**
   * Retrieves the available vector layers from default options.
   * @function getConfigVectorLayers
   * @returns {Array} - Array containing the keys of available vector layers.
   */
  getConfigVectorLayers() {
    try {
      let vectorArray = [];
      for (const key in Layers.Vector) {
        if (Layers.Vector.hasOwnProperty(key)) {
          vectorArray.push(key);
        }
      }

      return vectorArray;
    } catch (error) {
      console.error(`Error retrieving vector layers: ${error.message}`);
    }
  }
  /**
   * Retrieves the available vector layers from default options.
   * @function getConfigVectorAdminLayers
   * @returns {Array} - Array containing the keys of available vectorAdmin layers.
   */
  getConfigVectorAdminLayers() {
    try {
      let vectorArray = [];
      for (const key in Layers.VectorAdmin) {
        if (Layers.VectorAdmin.hasOwnProperty(key)) {
          vectorArray.push(key);
        }
      }

      return vectorArray;
    } catch (error) {
      console.error(`Error retrieving vectorAdmin layers: ${error.message}`);
    }
  }
  /**
   * Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type.
   * @param {string} url - The URL to fetch GeoJSON data from.
   * @param {string} name - The geometry name (e.g., 'buildings').
   * @param {Object} options - Additional options for configuring the layer.
   */

  async fetchData(url, name, options) {
    try {
      const response = await fetch(url);
      const geojson = await response.json();

      let type = geojson.features[0].geometry.type;

      if (type.includes("ine")) {
        //line

        map.addLayer({
          id: name,
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            visibility: "visible",
          },
          paint: options,
        });
      }
      if (type.includes("olygon")) {
        //polygon

        map.addLayer({
          id: name,
          type: "fill",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            visibility: "visible",
          },
          // paint: {
          //   'line-color': element.color,
          //   'line-width': element.width,
          //   'line-opacity': element.opacity

          // },
        });
      }
      if (type.includes("oint")) {
        //point

        map.addLayer({
          id: name,
          type: "circle",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            visibility: "visible",
          },
          paint: {
            "circle-color": "yellow",
            "circle-opacity": 0.5,
          },
        });
      }
      // map.addFeatureQuery(name)
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }

  /**
   * Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type and adds to the Menu as a checkbox item.
   * @param {string} url - The URL to fetch GeoJSON data from.
   * @param {string} name - The geometry name (e.g., 'buildings').
   * @param {Object} options - Additional options for configuring the layer.
   */

  async fetchDataAndMenu(url, name, options) {
    try {
      const response = await fetch(url);
      const geojson = await response.json();

      let type = geojson.features[0].geometry.type;
      if (type.includes("ine")) {
        //line

        map.addLayer({
          id: name,
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            visibility: "visible",
          },
          paint: options,
        });
      }
      if (type.includes("olygon")) {
        //polygon

        map.addLayer({
          id: name,
          type: "fill",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            visibility: "visible",
          },
          // paint: {
          //   'line-color': element.color,
          //   'line-width': element.width,
          //   'line-opacity': element.opacity

          // },
        });
      }
      if (type.includes("oint")) {
        //point

        map.addLayer({
          id: name,
          type: "circle",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            visibility: "visible",
          },
          paint: {
            "circle-color": "yellow",
            "circle-opacity": 0.5,
          },
        });
      }
      // geojsonStore  = geojson
      // map.addLayerTree(geojson);
      map.addMenuItem(name);
      //add feature queries
      // map.addFeatureQuery(name);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }

  async geocodeAddress() {
    try {
      var inputElement = document.getElementById("addressInput");
      var address = inputElement.value;
      const response = await fetch(url);
      const geojson = await response.json();
      var resultsContainer = document.getElementById("results");
      resultsContainer.innerHTML = ""; // Limpiar resultados anteriores

      function geocode(address) {
        var result = turf.filter(geojson, "address", address);
        return result.features.slice(0, 5);
      }

      var results = geocode(address);

      if (results.length > 0) {
        results.forEach(function (feature) {
          var coordinates = feature.geometry.coordinates;
          var address = feature.properties.address;

          var resultItem = document.createElement("div");
          resultItem.innerHTML =
            "<strong>" +
            address +
            "</strong><br>Coordenadas: " +
            coordinates.join(", ");

          resultsContainer.appendChild(resultItem);
        });
      } else {
        resultsContainer.innerHTML =
          "No se encontraron resultados para la dirección: " + address;
      }
    } catch (error) {}
  }
  /**
   * Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type.
   * @param {string} url - The URL to fetch GeoJSON data from.
   * @param {string} type - The geometry type (e.g., 'line', 'polygon', 'point').
   * @param {string} name - The geometry name (e.g., 'buildings').
   * @param {Object} options - Additional options for configuring the layer.
   */

  async fetchDataWithSearchbox(url, type, name, optionsGeo, options) {
    try {
      const response = await fetch(url);
      const geojson = await response.json();

      function geocode(address) {
        var result = turf.filter(geojson, "address", address);
        return result.features.slice(0, 5);
      }
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }

  /**
   * Adds an event listener to the map.
   * @function on
   * @param {string} type - The type of the event.
   * @param {Function} func - The callback function to be executed when the event occurs.
   */
  on(type, func) {
    try {
      this.map.on(type, func);
    } catch (error) {
      console.error(`Error adding event listener: ${error.message}`);
    }
  }

  /**
   * Retrieves the specified source from the map.
   * @function getSource
   * @param {string} source - The ID of the source to retrieve.
   */
  getSource(source) {
    try {
      this.map.getSource(source);
    } catch (error) {
      console.error(`Error getting source: ${error.message}`);
    }
  }
  /**
   * Adds a source to the map.
   * @function addSource
   * @param {string} source - The ID of the source to add.
   * @param {object} options - The source options.
   */
  addSource(source, options) {
    try {
      this.map.addSource(source, options);
    } catch (error) {
      console.error(`Error adding source: ${error.message}`);
    }
  }
  /**
   * Sets the style of the map.
   * @function setStyle
   * @param {string} style - Name of the map style.
   * @param {Object} [options] - Options for setting the style.
   */

  setStyle(style, options) {
    try {
      console.log("kk", style);
      for (const key of Styles) {
        if (Styles.hasOwnProperty(key)) {
          const styl = Styles[key];
          if (styl.key === style) {
            style = styl.url;
            // break; //
          }
        }
      }
      console.log("base", style);

      if (options !== undefined) {
        this.map.setStyle(style, options);
      } else {
        this.map.setStyle(style);
      }
    } catch (error) {
      console.error(`Error setting style: ${error.message}`);
    }
  }

  /**
   * Retrieves the layer with the specified ID from the map.
   * @function getLayer
   * @param {string} layerId - The ID of the layer to retrieve.
   */

  getLayer(layerId) {
    try {
      this.map.getLayer(layerId);
    } catch (error) {
      console.error(`Error getting layer: ${error.message}`);
    }
  }
  /**
   * Jumps to the specified coordinates and zoom on the map.
   * @function jumpTo
   * @param {Object} options - Coordinates and options to jump to: { center: [coordx, coordy], zoom: zoom, essential: true }.
   */
  jumpTo(options) {
    try {
      this.map.jumpTo(options);
    } catch (error) {
      console.error(`Error jumping to ${options}: ${error.message}`);
    }
  }

  /**
   * Sets layout property for a layer on the map.
   * @function setLayoutProperty
   * @param {Object} object - Object containing layer ID and property to set.
   */
  setLayoutProperty(object) {
    try {
      this.map.setLayoutProperty(object);
    } catch (error) {
      console.error(`Error setting layout property: ${error.message}`);
    }
  }
  /**
   * Adds a control to the map with the specified position.
   * @function addControl
   * @param {Object} control - The control to add.
   * @param {string} [position='top-right'] - Position to add the control on the map.
   */

  addControl(control, position) {
    try {
      if (position === undefined) {
        position = "top-right";
      }
      this.map.addControl(control, position);
    } catch (error) {
      console.error(`Error adding control: ${error.message}`);
    }
  }

  /**
   * Retrieves the current zoom level of the map.
   * @function getZoom
   * @returns {number} - The current zoom level.
   */
  getZoom() {
    try {
      return this.map.getZoom();
    } catch (error) {
      console.error(`Error getting zoom level: ${error.message}`);
    }
  }

  /**
   * Adds a mouse coordinate control to the map.
   * @function addMouseCoordControl
   */
  addMouseCoordControl() {
    try {
      this.map.on("mousemove", function (e) {
        const auxLat = e.lngLat.lat;
        const auxLon = e.lngLat.lng;

        const msg =
          "Lon/Lat (WGS 84)   Lon: " +
          auxLon.toFixed(6) +
          "  Lat: " +
          auxLat.toFixed(6);
        const divInfo = document.getElementById("divInfo");
        const div = document.createElement("div");
        div.className = "coordControl";
        div.innerHTML = msg + " - ZL: " + map.getZoom().toFixed(1);
        divInfo.appendChild(div);
      });
    } catch (error) {
      console.error(`Error adding mouse coordinate control: ${error.message}`);
    }
  }

  /**
   * Adds a geolocate control to the map.
   * @function addGeolocateControl
   * @param {Object} options - Options for the geolocate control.
   * @param {string} [position='top-right'] - Position to add the control on the map.
   */
  addGeolocateControl(options, position) {
    try {
      if (position === undefined) {
        position = "top-right";
      }
      if (options === undefined) {
        this.map.addControl(
          new maplibregl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }),
          position
        );
      } else {
        this.map.addControl(new maplibregl.GeolocateControl(options), position);
      }
    } catch (error) {
      console.error(`Error adding geolocate control: ${error.message}`);
    }
  }
  /**
   * Retrieves the bounds of the map.
   * @function getBounds
   */
  getBounds() {
    try {
      return this.map.getBounds();
      //  this.map.getZoom();
    } catch (error) {
      console.error(`Error getting bounds: ${error.message}`);
    }
  }
  /**
   * Retrieves the center coordinates of the map.
   * @function getCenter
   * @returns {LngLat} - The center coordinates of the map.
   */
  getCenter() {
    try {
      return this.map.getCenter();
      //  this.map.getZoom();
    } catch (error) {
      console.error(`Error getting center: ${error.message}`);
    }
  }
  /**
   * Sets terrain options for the map.
   * @function setTerrain
   * @param {Object} options - Options for the terrain.
   * @returns {Object} - Result of setting the terrain options.
   */
  setTerrain(options) {
    try {
      this.map.on("load", () => {
        return this.map.setTerrain(options);
      });
      //  this.map.getZoom();
    } catch (error) {
      console.error(`Error setting terrain: ${error.message}`);
    }
  }

  /**
   * Retrieves the canvas of the map.
   * @function getCanvas
   */
  getCanvas() {
    try {
      return this.map.getCanvas();
    } catch (error) {
      console.error(`Error getting canvas: ${error.message}`);
    }
  }

  /**
   * Sets the center of the map to the provided coordinates.
   * @function setCenter
   * @param {Array} coordinates - Coordinates to center the map: [1.3119, 41.489]
   */
  setCenter(coordinates) {
    try {
      return this.map.setCenter(coordinates);
    } catch (error) {
      console.error(`Error setting center: ${error.message}`);
    }
  }

  /**
   * Adds a layer to the map.
   * @function addLayer
   * @param {Object} layer - Options for the layer to add.
   */
  addLayer(layer) {
    try {
      this.map.addLayer(layer);
    } catch (error) {
      console.error(`Error adding layer: ${error.message}`);
    }
  }

  /**
   * Adds a GeoJSON layer to the map.
   * @function addLayerGeoJSON
   * @param {Object} layer - Options for the GeoJSON layer to add.
   * @param {string} layer.id - Unique identifier for the layer.
   * @param {string} layer.type - Type of layer ('geojson').
   * @param {Object} layer.data - GeoJSON data for the layer.
   * @param {string} layer.layerType - Map layer type (e.g., 'symbol', 'circle', 'fill').
   * @param {Object} layer.layout - Layer layout configuration.
   * @param {Object} layer.paint - Layer paint configuration.
   */
  addLayerGeoJSON(layer) {
    try {
      this.map.on("load", () => {
        this.map.addSource(`${layer.id}-sourceIcgcMap`, {
          type: "geojson",
          data: layer.data,
        });

        this.map.addLayer({
          id: `${layer.id}-layerIcgcMap`,
          type: layer.layerType,
          source: `${layer.id}-sourceIcgcMap`,
          layout: layer.layout,
          paint: layer.paint,
        });
      });
    } catch (error) {
      console.error(`Error adding GeoJSON layer: ${error.message}`);
    }
  }

  /**
   * Adds a WMS layer to the map.
   * @function addLayerWMS
   * @param {Object} layer - Options for the WMS layer to add.
   * @param {string} layer.id - Unique identifier for the layer.
   * @param {string} layer.type - Type of layer ('raster').
   * @param {string[]} layer.tiles - Tiles for the raster layer.
   */
  addLayerWMS(layer) {
    try {
      this.map.on("load", () => {
        console.log("holaaddlayerwms", layer);
        this.map.addSource(`${layer.id}-sourceIcgcMap`, {
          type: "raster",
          tiles: [layer.tiles],
          tileSize: 256,
        });
        this.map.addLayer({
          id: `${layer.id}-layerIcgcMap`,
          type: "raster",
          source: `${layer.id}-sourceIcgcMap`,
          paint: {},
        });
      });
    } catch (error) {
      console.error(`Error adding WMS layer: ${error.message}`);
    }
  }

  /**
   * Removes a control from the map.
   * @function removeControl
   * @param {Object} control - The control to remove.
   */
  removeControl(control) {
    try {
      this.map.removeControl(control);
    } catch (error) {
      console.error(`Error removing control: ${error.message}`);
    }
  }
  /**
   * Removes a layer from the map.
   * @function removeLayer
   * @param {string} layerId - Identifier of the layer to remove.
   */
  removeLayer(layerId) {
    try {
      this.map.removeLayer(layerId);
    } catch (error) {
      console.error(`Error removing layer: ${error.message}`);
    }
  }
  /**
   * Removes a source from the map.
   * @function removeSource
   * @param {string} layerId - Identifier of the source to remove.
   */
  removeSource(sourceId) {
    try {
      this.map.removeSource(sourceId);
    } catch (error) {
      console.error(`Error removing source: ${error.message}`);
    }
  }

  /**
   * Adds a logo to the map.
   * @function addLogo
   * @param {Object} options - Options for the logo to add.
   * @param {string} options.id - Unique identifier for the logo.
   * @param {string} options.url - URL of the logo image.
   * @param {string} options.href - URL to navigate to when the logo is clicked.
   */
  addLogo(options) {
    try {
      const img = document.createElement("img");
      img.src = options.url;
      img.style.height = "62px";
      const logos = document.getElementById("logos");
      const link = document.createElement("a");
      link.id = options.id;
      link.href = options.href;
      link.target = "_blank";
      link.style.position = "relative";
      link.style.bottom = "1px";

      link.appendChild(img);
      logos.appendChild(link);
    } catch (error) {
      console.error(`Error adding logo: ${error.message}`);
    }
  }
  /**
   * Adds base layers to the map.
   * @function addBasemapsICGC
   * @param {Object[]} baseLayers - Array of base layer objects.
   */
  addBasemapsICGC(basesArray) {
    try {
      // console.log('bases', basesArray)
      const handleClick = (base) => {
        // console.log('baseCLIK', base)
        this.map.setStyle(base);
      };

      const basemapGroup = document.getElementById("basemap-group");
      this.map.on("load", () => {
        for (const url of basesArray) {
          for (const key of Object.keys(defaultOptions.baseStyles)) {
            const item = defaultOptions.baseStyles[key];
            if (url === item.url) {
              const div = document.createElement("div");
              div.className = "basemap-item";
              div.title = item.key;
              div.style.backgroundImage = `url('${item.image}')`;
              basemapGroup.appendChild(div);
              div.addEventListener("click", () => handleClick(item.url));
            }
          }
        }
      });
    } catch (error) {
      console.error(`Error adding basemaps: ${error.message}`);
    }
  }
  /**
   * Adds base layers to the map.
   * @function addBasemaps
   * @param {Object[]} baseLayers - Array of base layer objects.
   * @param {string} baseLayers.label - Label for the base layer.
   * @param {string} baseLayers.image - URL of the image representing the base layer.
   * @param {string} baseLayers.url - URL of the base layer style.
   */
  addBasemaps(baseLayers) {
    try {
      const handleClick = (base) => {
        console.log("base", base);
        this.map.setStyle(base.url);
      };

      const basemapGroup = document.getElementById("basemap-group");
      this.map.on("load", () => {
        baseLayers.forEach((base) => {
          const div = document.createElement("div");
          div.className = "basemap-item";
          div.title = base.label;
          div.style.backgroundImage = `url('${base.image}')`;
          basemapGroup.appendChild(div);
          div.addEventListener("click", () => handleClick(base));
        });
      });
    } catch (error) {
      console.error(`Error adding basemaps: ${error.message}`);
    }
  }
  /**
   * Adds feature query function to a layer.
   * @function addFeatureQuery
   * @param {string} layerName - name of the layer
   * @param {objetc} options - optional indications for the popup
   */

  addFeatureQuery(layerName, options) {
    try {
      let description;

      this.map.on("load", () => {
        // console.log('layer', layerName, options)
        this.map.on("mouseenter", layerName, () => {
          this.map.getCanvas().style.cursor = "pointer";
        });

        this.map.on("mouseleave", layerName, () => {
          this.map.getCanvas().style.cursor = "";
        });
        this.map.on("click", (e) => {
          let features = this.map.queryRenderedFeatures(e.point);
          if (features && features[0].source === layerName) {
            let coordinates = [e.lngLat.lng, e.lngLat.lat];

            if (options !== undefined && options.length > 0) {
              if (options !== null) {
                let text = "";
                options.forEach((prop) => {
                  let pr = features[0].properties[prop];

                  text = text + `<h4>${pr}</h4>`;
                });
                description = text;
                map.addPopup(coordinates, description);
              }
            } else {
              // console.log('hello')
              let text = "";
              for (const key in features[0].properties) {
                //  console.log('key', key)

                text +=
                  "<b>" + key + "</b>:" + features[0].properties[key] + "<br>";
              }

              description = text;
              map.addPopup(coordinates, description);
              // popup.setLngLat(e.lngLat)
              //   .setHTML(text)
              //   .addTo(map);

              // });
            }
          }
        });
      });
    } catch (error) {
      console.error(`Error adding feature query: ${error.message}`);
    }
  }

  /**
   * Adds a scale control to the map.
   *  * @function addScaleControl
   * @param {Object} options - Options for configuring the scale control.
   * @param {string} position - The position on the map to place the scale control (e.g., 'top-left', 'bottom-right').
   */

  addScaleControl(options, position) {
    try {
      var scale = new maplibregl.ScaleControl(options);

      this.map.addControl(scale, position);
    } catch (error) {
      console.error(`Error adding scale: ${error.message}`);
    }
  }
  /**
   * Removes the measure control from the map.
   * @function removeMeasureControl
   */
  removeMeasureControl() {
    try {
      const removeMeasure = document.getElementById("xButton");
      const distanceContainer = document.getElementById("distance");
      distanceContainer.innerHTML = "";

      let layers = this.map.getStyle().layers;

      for (let i = 0; i < layers.length; i++) {
        if (layers[i].id.includes("measure")) {
          this.map.removeLayer(layers[i].id);
        }
      }
    } catch (error) {
      console.error(`Error removing measure control: ${error.message}`);
    }
  }

  /**
   * Adds a measure control to the map.
   * @function addMeasureControl
   */
  addMeasureControl() {
    try {
      const distanceContainer = document.getElementById("distance");
      const distanceContainerT = document.getElementById("distanceTotal");
      let endMeasure = false;
      let measureOn = false;
      var clickTimer;

      const rulerButton = document.createElement("div");
      rulerButton.id = "rulerButton";

      rulerButton.onclick = () => {
        try {
          if (!measureOn) {
            document.getElementById("rulerButton").style.backgroundColor =
              "#41b883";
          } else {
            document.getElementById("rulerButton").style.backgroundColor =
              "#ff597a";
          }
          measureOn = !measureOn;
        } catch (error) {
          console.error(`Error adding measure control: ${error.message}`);
        }
      };
      distanceContainerT.appendChild(rulerButton);

      // GeoJSON object to hold our measurement features
      const geojson = {
        type: "FeatureCollection",
        features: [],
      };

      // Used to draw a line between points
      const linestring = {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [],
        },
      };

      this.map.on("load", () => {
        this.map.addSource("geojson", {
          type: "geojson",
          data: geojson,
        });

        // Add styles to the map
        this.map.addLayer({
          id: "measure-points",
          type: "circle",
          source: "geojson",
          paint: {
            "circle-radius": 5,
            "circle-color": "#000",
          },
          filter: ["in", "$type", "Point"],
        });
        this.map.addLayer({
          id: "measure-lines",
          type: "line",
          source: "geojson",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#000",
            "line-width": 2.5,
          },
          filter: ["in", "$type", "LineString"],
        });
      });

      this.map.on("click", (e) => {
        clearTimeout(clickTimer);
        if (!endMeasure && measureOn) {
          clickTimer = setTimeout(() => {
            handleSingleClick(e, this.map);
          }, 50);
        }
      });

      this.map.on("dblclick", (e) => {
        if (measureOn) {
          clearTimeout(clickTimer);
          handleDoubleClick(e, this.map);
        }
      });

      this.map.on("mousemove", (e) => {
        if (!endMeasure && measureOn) {
          const features = this.map.queryRenderedFeatures(e.point, {
            layers: ["measure-points"],
          });
          // UI indicator for clicking/hovering a point on the map

          this.map.getCanvas().style.cursor = features.length
            ? "pointer"
            : "crosshair";
        } else {
          this.map.getCanvas().style.cursor = "grab";
        }
      });

      function handleSingleClick(e, map) {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["measure-points"],
        });

        // Remove the linestring from the group
        // So we can redraw it based on the points collection
        if (geojson.features.length > 1) geojson.features.pop();

        // Clear the Distance container to populate it with a new value
        distanceContainerT.innerHTML = "";

        // If a feature was clicked, remove it from the map
        if (features.length) {
          const id = features[0].properties.id;
          geojson.features = geojson.features.filter((point) => {
            return point.properties.id !== id;
          });
        } else {
          const point = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [e.lngLat.lng, e.lngLat.lat],
            },
            properties: {
              id: String(new Date().getTime()),
            },
          };

          geojson.features.push(point);
        }

        // if (geojson.features.length > 0) {
        linestring.geometry.coordinates = geojson.features.map((point) => {
          return point.geometry.coordinates;
        });

        geojson.features.push(linestring);

        // Populate the distanceContainer with total distance
        const value = document.createElement("pre");
        // console.log('kk', linestring.geometry.coordinates)
        value.textContent = `Distància total: ${turf
          .length(linestring)
          .toLocaleString()}km`;
        distanceContainerT.appendChild(value);

        const xButton = document.createElement("div");
        xButton.id = "xButton";
        xButton.textContent = "X";
        xButton.onclick = () => {
          try {
            const removeMeasure = document.getElementById("xButton");
            const distanceContainer = document.getElementById("distance");
            distanceContainer.innerHTML = "";

            let layers = map.getStyle().layers;

            for (let i = 0; i < layers.length; i++) {
              if (layers[i].id.includes("measure")) {
                map.removeLayer(layers[i].id);
              }
            }
          } catch (error) {
            console.error(`Error adding measure control: ${error.message}`);
          }
        };
        distanceContainerT.appendChild(xButton);

        map.getSource("geojson").setData(geojson);
      }

      function handleDoubleClick(e, map) {
        map.getCanvas().style.cursor = "grab";
        endMeasure = true;
      }
    } catch (error) {}
  }

  /**
   * Adds an export control to the map with the provided options and position.
   * @function addExportControl
   * @param {Object|string} options - Options for the export control or position if provided as a string.
   * @param {string} [position] - Position to place the export control (e.g., 'top-right').
   */
  addExportControl(options, position) {
    try {
      if (typeof options === "string") {
        position = options;
        options = undefined;
      }
      if (options === undefined) {
        options = {
          PageSize: Size.A4,
          PageOrientation: PageOrientation.Landscape,
          Format: Format.PNG,
          DPI: DPI[300],
          Crosshair: true,
          PrintableArea: true,
        };
        position = "top-right";
      }

      map.addControl(new MaplibreExportControl(options), position);
    } catch (error) {
      console.error(`Error adding export control: ${error.message}`);
    }
  }
  /**
   * Adds a popup to the map.
   * @function addPopup
   * @param {array} coordinates - Coordinates of the popup .
   * @param {string} text - Text content for the popup.
   */
  addPopup(coordinates, text) {
    try {
      this.map.on("load", () => {
        new maplibregl.Popup()
          .setLngLat(coordinates)
          .setHTML(text)
          .addTo(this.map);
      });
    } catch (error) {}
  }

  /**
   * Adds a marker to the map.
   * @function addMarker
   * @param {Object} options - Options for the marker to add.
   * @param {string} options.text - Text content for the marker popup.
   * @param {Object} options.options - Marker options.
   * @param {LngLatLike} options.coord - Coordinates for placing the marker.
   * @param {Object} options.textOffset - Text offset for the marker popup.
   * @returns {Object} - Instance of the added marker.
   */

  addMarker(options) {
    try {
      let marker;
      let popup;
      if (options.text === undefined) {
        marker = new maplibregl.Marker(options.options)
          .setLngLat(options.coord)
          .addTo(this.map);
      } else {
        popup = new maplibregl.Popup({ offset: options.textOffset }).setText(
          options.text
        );
        marker = new maplibregl.Marker()
          .setLngLat(options.coord)
          .setPopup(popup)
          .addTo(this.map);
      }
      return marker;
    } catch (error) {
      console.error(`Error adding marker: ${error.message}`);
      return null;
    }
  }

  /**
   * Adds a popup to the map.
   * @function addPopup
   * @param {Object} options - Options for the popup to add.
   * @param {LngLatLike} coord - Coordinates for placing the popup.
   * @param {string} text - HTML content for the popup.
   * @returns {Object} - Instance of the added popup.
   */
  addPopup(coord, text) {
    try {
      let popup = new maplibregl.Popup()
        .setLngLat(coord)
        .setHTML(text)
        .addTo(this.map);
      return popup;
    } catch (error) {
      console.error(`Error adding popup: ${error.message}`);
      return null;
    }
  }

  /**
   * Adds a fullscreen control to the map.
   * @function addFullScreen
   */
  addFullScreen(position) {
    try {
      if (position === undefined) {
        position = "top-right";
      }
      this.map.addControl(new maplibregl.FullscreenControl(), position);
    } catch (error) {
      console.error(`Error adding fullscreen control: ${error.message}`);
    }
  }

  /**
   * Adds a menu item with a checkbox for controlling the visibility of a layer on the map.
   * @function addMenuItem
   * @param {string} name - The name of the layer corresponding to the menu item.
   */
  addMenuItem(name) {
    try {
      const menuGroup = document.getElementById("menu-group");

      const input = document.createElement("input");

      input.type = "checkbox";
      input.id = name;
      input.checked = true;

      menuGroup.appendChild(input);

      const label = document.createElement("label");
      label.setAttribute("for", name);
      label.textContent = name;
      menuGroup.appendChild(label);

      input.addEventListener("change", (e) => {
        this.map.setLayoutProperty(
          name,
          "visibility",
          e.target.checked ? "visible" : "none"
        );
      });
    } catch (error) {
      console.error(`Error adding menu item: ${error.message}`);
    }
  }

  /**
   * Adds a layer tree to the map.
   * @function addLayerTree
   * @param {Object} options - Options for the layer tree to add.
   * @param {Object} options.features - Features for the layer tree.
   * @param {string} options.id - Unique identifier for the layer tree.
   * @param {string} options.type - Type of layer tree ('geojson', 'raster', etc.).
   */
  addLayerTree(options) {
    try {
      let places = options.features;

      const filterGroup = document.getElementById("filter-group");
      this.map.on("load", () => {
        const layers = this.map.getStyle().layers;
        let firstSymbolId;
        for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === "symbol") {
            firstSymbolId = layers[i].id;
            break;
          }
        }
        this.map.addSource(`${options.id}-source`, {
          type: options.type,
          data: places,
        });
        places.features.forEach((feature) => {
          const symbol = feature.properties["icon"];
          const layerID = `poi-${symbol}`;

          if (!this.map.getLayer(layerID)) {
            this.map.addLayer(
              {
                id: layerID,
                type: "circle",
                source: `${options.id}-source`,
                paint: {
                  "circle-radius": 6,
                  "circle-color": "#B42222",
                },
                filter: ["==", "icon", symbol],
              },
              firstSymbolId
            );

            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = layerID;
            input.checked = true;
            filterGroup.appendChild(input);

            const label = document.createElement("label");
            label.setAttribute("for", layerID);
            label.textContent = symbol;
            filterGroup.appendChild(label);

            input.addEventListener("change", (e) => {
              this.map.setLayoutProperty(
                layerID,
                "visibility",
                e.target.checked ? "visible" : "none"
              );
            });
          }
        });
      });
    } catch (error) {
      console.error(`Error adding layer tree: ${error.message}`);
    }
  }

  /**
   * Creates a navigation control with the provided options.
   * @function createNavigationControl
   * @param {Object} options - Options for the navigation control.
   * @param {string} [position='top-right'] - Position to add the control on the map.
   * @returns {Object} - Instance of the created navigation control.
   */
  createNavigationControl(options, position) {
    try {
      if (position === undefined) {
        position = "top-right";
      }
      this.map.addControl(new maplibregl.NavigationControl(options), position);
    } catch (error) {
      console.error(`Error creating navigation control: ${error.message}`);
      return null;
    }
  }

  /**
   * Adds a navigation control to the map with the provided options.
   * @function addNavigationControl
   * @param {Object} options - Options for the navigation control.
   * @param {string} [position='top-right'] - Position to add the control on the map.
   */
  addNavigationControl(options, position) {
    try {
      if (position === undefined) {
        position = "top-right";
      }
      this.map.addControl(new maplibregl.NavigationControl(options), position);
    } catch (error) {
      console.error(`Error adding navigation control: ${error.message}`);
    }
  }

  /**
   * Adds an attribution control to the map with the provided options.
   * @function addAttributionControl
   * @param {Object} options - Options for the attribution control.
   */
  addAttributionControl(options) {
    try {
      this.map.addControl(
        new maplibregl.AttributionControl(options.options),
        options.position
      );
    } catch (error) {
      console.error(`Error adding attribution control: ${error.message}`);
    }
  }

  /**
   * Internal method to handle map styles.
   * @function _dealStyleMaps
   * @param {string} name - Name of the map style.
   * @returns {string} - URL of the map style.
   */
  _dealStyleMaps(name) {
    try {
      if (name && name.indexOf("icgc.cat") != -1) {
        for (const key in Styles) {
          if (Styles.hasOwnProperty(key)) {
            const style = Styles[key];
            if (key === name) {
              return style; //
            }
          }
        }
        return Styles[0];
      } else {
        return name;
      }
    } catch (error) {
      console.error(`Error dealing with map styles: ${error.message}`);
      return null;
    }
  }

  /**
   * Adds an ICGC image layer to the map based on the specified name and year.
   * @function addImageLayerICGC
   * @param {string} name - The name of the layer. Mandatory. options: 'orto', 'geo', 'slope', 'dem', 'relleu', etc.
   * @param {integer} year - The year of the image layer (optional, applicable only for certain layers like 'orto').
   */
  addImageLayerICGC(name) {
    try {
      console.log("name", name);

      let idName = null;
      function findImageType(url, var1, var2, var3, var4) {
        console.log("hola", name);
        const vectors = [var1, var2, var3, var4];
        for (const vector of vectors) {
          for (const [key, value] of Object.entries(vector)) {
            if (value === url) {
              return key;
            }
          }
        }
        return null; //
      }

      idName = findImageType(
        name,
        Layers.Orto,
        Layers.VectorAdmin,
        Layers.WMS,
        Layers.Vector
      );

      console.log("op", idName);
      if (!idName) {
        console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          name,
          "font-weight: bold; font-style: italic;"
        );
      }

      let sourceWMS = {
        id: idName,
        tiles: name,
      };
      console.log("source", sourceWMS);
      this.addLayerWMS(sourceWMS);
      // } else {
      //   let sourceWMS = {
      //     id: name + "Actual",
      //     tiles:
      //       "https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/orto/GRID3857/{z}/{x}/{y}.png",
      //   };
      //   this.addLayerWMS(sourceWMS);
      // }
      // }
      //if not orto

      // if (name.includes("relleu")) {
      //   let sourceWMS = {
      //     id: name + "Actual",
      //     tiles:
      //       "https://tilemaps.icgc.cat/mapfactory/wmts/relleu/CAT3857/{z}/{x}/{y}.png",
      //   };
      //   this.addLayerWMS(sourceWMS);
      // }
      // if (name.includes("geol")) {
      //   let sourceWMS = {
      //     id: name + "Actual",
      //     tiles:
      //       "https://tilemaps.icgc.cat/mapfactory/wmts/geologia/MON3857NW/{z}/{x}/{y}.png",
      //   };
      //   this.addLayerWMS(sourceWMS);
      // }
      // } else {
      //   //if not includes geol, orto, relleu...
      //   console.log(
      //     "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
      //     "font-weight: bold; font-style: italic;",
      //     "font-weight: normal; font-style: normal; color: red;",
      //     name,
      //     "font-weight: bold; font-style: italic;"
      //   );
      // }
    } catch (error) {
      console.error(`Error adding ICGC image layer: ${error.message}`);
    }
  }

  /**
   * Adds an ICGC vector layer to the map based on the specified name and year.
   * @function addVectorLayerICGC
   * @param {string} url - The url of the vector layer.
   * @param {string} year - The year associated with the vector layer (optional).
   */
  async addVectorLayerICGC(layerUrl, name, year) {
    try {
      function getKeyByUrl(url) {
        for (const key in Layers.VectorAdmin) {
          // console.log('key', key, Layers.VectorAdmin.hasOwnProperty(key), Layers.VectorAdmin[key] )
          if (
            Layers.VectorAdmin.hasOwnProperty(key) &&
            Layers.VectorAdmin[key] === url
          ) {
            // console.log('entro', key)
            return key; // Retorna la clave si encuentra la URL
          }
        }
        return null; // Retorna null si no se encuentra la URL en el objeto
      }

      let name = getKeyByUrl(layerUrl);
      // console.log('name', name)

      if (name === null) {
        // let op = Layers.VectorAdmin.find((objeto) =>
        //   objeto.key.includes(name)
        // );
        // if (!op) {
        // console.log(`❌ The layer: <i><b>${name}</b></i> does not exist in the ICGC DB. Consult the documentation.`)
        console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          name,
          "font-weight: bold; font-style: italic;"
        );
      } else {
        // layerUrl = op.url;

        const response = await fetch(layerUrl);
        this.map.on("load", async () => {
          const fc = { type: "FeatureCollection", features: [] };
          for await (const f of flatgeobuf.deserialize(response.body))
            fc.features.push(f);
          let src = op.name + "-source";

          this.map.addSource(src, {
            type: "geojson",
            data: fc,
          });
          this.map.addLayer({
            id: op.name + "-fill",
            type: "fill",
            source: src,
            paint: {
              "fill-color": "#0000FF",
              "fill-opacity": 0,
            },
          });
          this.map.addLayer({
            id: op.name + "-line",
            type: "line",
            source: src,
            paint: {
              "line-color": "#FFFFFF",
              "line-opacity": 0.49,
              "line-width": 1,
            },
          });
        });
      }
    } catch (error) {
      console.error(`Error adding ICGC vector layer: ${error.message}`);
    }
  }

  /**
   * Adds 3D terrain to the map using hillshade.
   * @function addTerrainICGC
   * @param {string} resolution - resolution of the terrain data: 2m or 5m.
   * @param {string} [positionButton='top-right'] - Position to add the button on the map.
   */
  addTerrainICGC(resolution, positionButton) {
    this.map.on("load", () => {
      try {
        // let op = Terrains.find(
        //   (objeto) => objeto.name === resolution
        // );
        let op;
        for (const key in Terrains) {
          if (Terrains.hasOwnProperty(key)) {
            const objeto = Terrains[key];

            if (objeto === resolution) {
              op = objeto;
              // Si encontramos el objeto, podemos salir del bucle
            }
          }
        }

        let urlTerrainICGC = op;

        // Add terrain source
        this.map.addSource("terrainICGC-src", {
          type: "raster-dem",
          tiles: [urlTerrainICGC],
          tileSize: 512,
          maxzoom: 16,
        });

        // Add terrain layer
        // this.map.setTerrain({
        //   source: "terrainMapZen",
        //   exaggeration: 1.5,
        // });
        this.map.setTerrain({
          source: "terrainICGC-src",
          exaggeration: 1.5,
        });

        if (positionButton === undefined) {
          positionButton = "top-right";
        }
        // this.map.addControl(
        //   new maplibregl.TerrainControl({
        //     source: "terrainICGC-src",
        //     exaggeration: 1.5,
        //   }), positionButton
        // );
        this.map.addControl(
          new Pitch3DToggleControl({
            pitch: 90,
            bearing: null,
            minpitchzoom: null,
          }),
          positionButton
        );
      } catch (error) {
        console.error(`Error adding 3D terrain: ${error.message}`);
      }
    }); //'load end
  }
}
