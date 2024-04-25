import maplibregl from "maplibre-gl";

import { deserialize } from 'flatgeobuf/lib/mjs/geojson.js'
import Pitch3DToggleControl from "../controls/Toggle3DControl.js";

import { MapboxLayer } from "@deck.gl/mapbox";
import { Tile3DLayer } from "@deck.gl/geo-layers";
import { Tiles3DLoader } from "@loaders.gl/3d-tiles";
import { AmbientLight, LightingEffect } from "@deck.gl/core";

import {
  MaplibreExportControl,
  Size,
  PageOrientation,
  Format,
  DPI,
} from "@watergis/maplibre-gl-export";
import "@watergis/maplibre-gl-export/dist/maplibre-gl-export.css";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import LogoControl from "../controls/LogoControl.js";
import MouseCoordinatesControl from "../controls/MouseCoordinatesControl.js";
import Terrains from "../constants/Terrains.js";
import Styles from "../constants/Styles.js";
import Layers from "../constants/Layers.js";
import defaultOptions from "../config.js";


/**
 * Class representing a custom map with additional functions.FVec
 */
export default class Map {
  /**
   * Constructor for the Map class.
   * @param {Object} options - Options to initialize the map.
   */

  constructor(options) {

this.initTheMap(options)
  
  }

initTheMap(options){
  // console.log('entropros')
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

  options.maxPitch = 85;
  options.maplibreLogo = false;
  options.attributionControl = false;
// console.log('OPT', options)
  this.map = new maplibregl.Map(options);
  this.map.options = options;

  this.map.addControl(
    new maplibregl.AttributionControl({
      compact: true,
    })
  );
// console.log('thismap', this.map)
  this.map.on("load", async () => {
    const nameStyle = this.map.getStyle().name;
    const urlName = this.map.options.style;
    if (window.document.querySelector(".maplibregl-compact-show")) {
      var element = window.document.querySelector(".maplibregl-compact-show");
      element.classList.remove("maplibregl-compact-show");
    }
    this.map.addControl(
      new LogoControl({
        color:  urlName.indexOf("orto") === -1 ? true : false,
        defaultOptions: defaultOptions
        // color: orto
      }),
      "bottom-left"
    );
    this._dealOrto3dStyle(nameStyle);
  });
}
  /**
   * Add geocoder.
   * @function addGeocoderICGC
   * @returns {Object} - The current position of the search result.
   */

  addGeocoderICGC(position) {
    try {
      // console.log("hello geocoder");
      if (position === undefined) {
        position = "top-right";
      }
     
      let options = {
        collapsed: true,
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
            const request =
              defaultOptions.geocoder.peliasUrl1 +
              encodeURIComponent(config.query) +
              defaultOptions.geocoder.peliasUrl2;
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
      this.map.addControl(new MaplibreGeocoder(geocoderApi, options), position);
      let inputsearch = document.getElementsByClassName(
        "maplibregl-ctrl-geocoder--input"
      );
      // console.log('in', inputsearch)
      inputsearch[0].attributes[2].nodeValue = "Cerca...";
      inputsearch[0].addEventListener("input", function (event) {
        let word = event.target.value;
        if (word.length > 3) {
          // console.log('més de 3:', word)
        }
        // Puedes realizar cualquier acción que desees aquí
      });
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
      return this.map.getStyle();
    } catch (error) {
      console.error(`Error getting style: ${error.message}`);
    }
  }

  /**
   * Load image to layer symbol as icon-image.
   * @function loadImage
   * @param {string} urlImage - The url image png or jpep.
   * @returns {image} - The image.
   */
  async loadImage(urlImage) {
    try {
      return this.map.loadImage(urlImage);
    } catch (error) {
      console.error(`Error getting loadImage: ${error.message}`);
    }
  }

  /**
   * Add image to mapstyle.
   * @function addImage
   * @param {string} imageName - The url image png or jpep.
   * @param {image} imageData - The image.data from return of loadImage function.
   * @returns {image} - The image.
   */
  addImage(imageName, imageData) {
    try {
      return this.map.addImage(imageName, imageData);
    } catch (error) {
      console.error(`Error getting addImage: ${error.message}`);
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
 * Retrieves the available fgb layers from default options.
 * @function getConfigFGBAdminLayers
 * @returns {Array} - Array containing the keys of available fgbadmin layers.
 */
  getConfigFGBAdminLayers() {
    try {
      let vectorArray = [];
      for (const key in Layers.FGBAdmin) {
        if (Layers.FGBAdmin.hasOwnProperty(key)) {
          vectorArray.push(key);
        }
      }

      return vectorArray;
    } catch (error) {
      console.error(`Error retrieving FGBAdmin layers: ${error.message}`);
    }
  }
  /**
   * Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type.
   * @param {string} url - The URL to fetch GeoJSON data from.
   * @param {string} name - The geometry name (e.g., 'buildings').
   * @param {string} position - Position of the layer: 'top', below 'labels' or below 'lines'.
   * @param {Object} options - Additional options for configuring the layer.
   */
  async fetchData(url, name, position, options) {
    try {
      // console.log('fetch', url)
      if (url.includes('.fgb')){
      // console.log('is FGB')
          this.addFGBLayerICGC(url, position,null,options)
      }else{

      const response = await fetch(url);
      const geojson = await response.json();
      let nameUser = name 

      let keyLayer = ''
      if (position === 'labels'){
        keyLayer = this._firstSymbolLayer()
      }
      if (position === 'lines'){
        keyLayer =  this._firstLineLayer()
      }

      let type = geojson.features[0].geometry.type;
      if (type.includes("ine")) {
        //line
        if (options !== undefined) {
          map.addLayer({
            id: nameUser,
            type: "line",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              visibility: "visible",
            },
            paint: options,
          }, keyLayer );
        } else {
          map.addLayer({
            id: nameUser,
            type: "line",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              visibility: "visible",
            },
            paint: {
              "line-color": "black",
              "line-width": 2,
              "line-opacity": 1,
            },
          }, keyLayer);
        }
      }
      if (type.includes("olygon")) {
        //polygon
        if (options !== undefined) {
          map.addLayer({
            id: nameUser,
            type: "fill",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              visibility: "visible",
            },
            paint: options,
          }, keyLayer);
        } else {
          map.addLayer({
            id: nameUser,
            type: "fill",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              visibility: "visible",
            },
            paint: {
              "fill-color": "blue",
              "fill-opacity": 0.6,
            },
          }, keyLayer);
        }
      }
      if (type.includes("oint")) {
        //point
        if (options !== undefined) {
          map.addLayer({
            id: nameUser,
            type: "circle",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              visibility: "visible",
            },
            paint: options,
          }, keyLayer);
        } else {
          map.addLayer({
            id: nameUser,
            type: "circle",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              visibility: "visible",
            },
            paint: {
              "circle-color": "red",
              "circle-opacity": 0.85,
            },
          },keyLayer);
        }
      }
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
   * @param {string} featureTree - Import all features as unique or group based on a field ('all', 'field').
   * @param {string} position - Position of the layer: 'top', below 'labels' or below 'lines'. 
  * @param {Object} options - Additional options for configuring the layer.
   */

  async fetchDataAndMenu(url, name, featureTree, position, options) {
    try {
      const menuGroup = document.getElementById("menu-group");
      let visibleLabel = "visible";

      let keyLayer = '';

      if (position === 'labels'){
        keyLayer = this._firstSymbolLayer()
      }
      if (position === 'lines'){
        keyLayer =  this._firstLineLayer()
      }
      let geojson

      if (url.includes('.fgb')){
        // console.log('is FGB menu')

        function getKeyByUrl(url) {
          for (const key in Layers.FGBAdmin) {
            // console.log('key', key, Layers.VectorAdmin.hasOwnProperty(key), Layers.VectorAdmin[key] )
            if (
              Layers.FGBAdmin.hasOwnProperty(key) &&
              Layers.FGBAdmin[key] === url
            ) {
              // console.log('entro', key)
              return key; // Retorna la clave si encuentra la URL
            }
          }
          return null; // Retorna null si no se encuentra la URL en el objeto
        }
    
        let name = getKeyByUrl(url);

        if (name === null) {
          name='userFGB'
          // let op = Layers.VectorAdmin.find((objeto) =>
          //   objeto.key.includes(name)
          // );
          // if (!op) {
          // console.log(`❌ The layer: <i><b>${name}</b></i> does not exist in the ICGC DB. Consult the documentation.`)
          // console.log(
          //   "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          //   "font-weight: bold; font-style: italic;",
          //   "font-weight: normal; font-style: normal; color: red;",
          //   name,
          //   "font-weight: bold; font-style: italic;"
          // );
        } else {
        }
          const response = await fetch(url);



          const fc = { type: "FeatureCollection", features: [] };
    
    // console.log('fetc', fc)
          for await (const f of deserialize(response.body))
            fc.features.push(f);
    // console.log('feat', fc)
    geojson = fc
    
          let src = name ;
          // let src = name + "-userSource";
          this.map.addSource(src, {
            type: "geojson",
            data: fc,
          });
    
          if (url.includes('text')) {
            // console.log('entro', name)
            this.map.addLayer({
              id: name,
              type: "symbol",
              source: src,
              layout: {
                "text-letter-spacing": 0.1,
                "text-size": { "base": 1.2, "stops": [[8, 0], [12, 14], [15, 15]] },
                "text-font": ["FiraSans-Regular"],
                "text-field": ["get", "NOM_AC"],
                "text-transform": "none",
                "text-max-width": 25,
                "visibility": visibleLabel,
                "text-justify": "right",
                "text-anchor": "top",
                "text-allow-overlap": false,
                "symbol-spacing": 2,
                "text-line-height": 1
              },
              paint: { "text-halo-blur": 0.5, "text-color": "rgba(90, 7, 7, 1)", "text-halo-width": 2, "text-halo-color": "rgba(255, 255, 255,0.8)" }
            }, keyLayer);
          } else {
           
            let textLayer = name + "Text"
            this.map.addLayer({
              id: textLayer,
              type: "symbol",
              source: src,
              layout: {
                "text-letter-spacing": 0.1,
                "text-size": { "base": 1.2, "stops": [[8, 0], [12, 14], [15, 15]] },
                "text-font": ["FiraSans-Regular"],
                "text-field": ["get", "NOM_AC"],
                "text-transform": "none",
                "text-max-width": 25,
                "visibility": visibleLabel,
                "text-justify": "right",
                "text-anchor": "top",
                "text-allow-overlap": false,
                "symbol-spacing": 2,
                "text-line-height": 1
              },
              paint: { "text-halo-blur": 0.5, "text-color": "rgba(90, 7, 7, 1)", "text-halo-width": 2, "text-halo-color": "rgba(255, 255, 255,0.8)" }
            }, keyLayer)
    
    
          }
    
        //} //aquest




        }else{


      const response = await fetch(url);
       geojson = await response.json();
        }

      if (featureTree !== "all") {
        const nameTitle = document.createElement("div");
        nameTitle.id = "titleDivMenu";
        nameTitle.textContent = name;
        menuGroup.appendChild(nameTitle);

        const featureTreeTitle = document.createElement("div");
        featureTreeTitle.id = "titleDivMenuSub";
        featureTreeTitle.textContent = `📂 ${featureTree}`;
        menuGroup.appendChild(featureTreeTitle);

      } else {
      }

      let type = geojson.features[0].geometry.type;
// console.log('type', type)
      if (featureTree === "all") {
        if (type.includes("ine")) {
          // console.log('linee')
          //line
          if (options !== undefined) {
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
            }, keyLayer);
          } else {
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
              paint: {
                "line-color": "black",
                "line-width": 2,
                "line-opacity": 1,
              },
            }, keyLayer);
          }
        }
        if (type.includes("olygon")) {
          // console.log('poolygon', options, name)
          //polygon
          if (options !== undefined) {
            this.map.addLayer({
              id: name ,
              type: "fill",
              source: {
                type: "geojson",
                data: geojson,
              },
              layout: {
                visibility: "visible",
              },
              paint: options,
            }, keyLayer);
    
          } else {
            this.map.addLayer({
              id: name,
              type: "fill",
              source: {
                type: "geojson",
                data: geojson,
              },
              layout: {
                visibility: "visible",
              },
              paint: {
                "fill-color": "#0000FF",
                "fill-opacity": 0,
              },
            }, keyLayer);
           }

        }
        if (type.includes("oint")) {
          //point
          if (options !== undefined) {
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
              paint: options,
            }, keyLayer);
          } else {
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
                "circle-color": "red",
                "circle-opacity": 0.85,
              },
            }, keyLayer);
          }
        }

        map.addMenuItem(name);

      } else {  //add filter
        let field = featureTree;

        const layers = {};
        geojson.features.forEach((feature) => {
          const fieldMarker = feature.properties[field];
          const idFieldMarker = fieldMarker+`-userFieldFilter-`+name
         
          // const idFieldMarker = fieldMarker
          if (fieldMarker !== null) {
            // aqui podriem mirar si te simbologia i afegir-la a la capa

            if (!layers[idFieldMarker]) {
              if (type.includes("ine")) {
                //line
                if (options !== undefined) {
                  map.addLayer({
                    id: idFieldMarker,
                    type: "line",
                    source: {
                      type: "geojson",
                      data: geojson,
                    },
                    layout: {
                      visibility: "visible",
                    },
                    filter: ["==", `${field}`, fieldMarker],
                    paint: options,
                  }, keyLayer);
                } else {
                  map.addLayer({
                    id: idFieldMarker,
                    type: "line",
                    source: {
                      type: "geojson",
                      data: geojson,
                    },
                    layout: {
                      visibility: "visible",
                    },
                    filter: ["==", `${field}`, fieldMarker],
                    paint: {
                      "line-color": "black",
                      "line-width": 2,
                      "line-opacity": 1,
                    },
                  },keyLayer);
                }
              }
              if (type.includes("olygon")) {
                //polygon
                if (options !== undefined) {
                  map.addLayer({
                    id: idFieldMarker,
                    type: "fill",
                    source: {
                      type: "geojson",
                      data: geojson,
                    },
                    layout: {
                      visibility: "visible",
                    },
                    filter: ["==", `${field}`, fieldMarker],
                    paint: options,
                  }, keyLayer);
                } else {
                  map.addLayer({
                    id: idFieldMarker,
                    type: "fill",
                    source: {
                      type: "geojson",
                      data: geojson,
                    },
                    layout: {
                      visibility: "visible",
                    },
                    filter: ["==", `${field}`, fieldMarker],
                    paint: {
                      "fill-color": "blue",
                      "fill-opacity": 0.6,
                    },
                  }, keyLayer);
                }
              }
              if (type.includes("oint")) {
                //point
                if (options !== undefined) {
                  map.addLayer({
                    id: idFieldMarker,
                    type: "circle",
                    source: {
                      type: "geojson",
                      data: geojson,
                    },
                    layout: {
                      visibility: "visible",
                    },
                    filter: ["==", `${field}`, fieldMarker],
                    paint: options,
                  }, keyLayer);
                } else {
                  map.addLayer({
                    id: idFieldMarker,
                    type: "circle",
                    source: {
                      type: "geojson",
                      data: geojson,
                    },
                    layout: {
                      visibility: "visible",
                    },

                    filter: ["==", `${field}`, fieldMarker],
                    paint: {
                      "circle-color": "red",
                      "circle-opacity": 0.85,
                    },
                  }, keyLayer);
                }
              }

              // Agregar la nueva capa al objeto de capas
              layers[idFieldMarker] = true;
              // console.log('name', idFieldMarker,fieldMarker)
              map.addMenuItem(idFieldMarker);
            }
          }
        });
      }
   
      //add feature queries
      // map.addFeatureQuery(name);
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
  setTimeout(() => {
        try {
    // console.log('onfunction', this.map)
      this.map.on(type, func);
    } catch (error) {
      console.error(`Error adding event ON listener: ${error.message}`);
    }
  }, 500);



   
   
   
  }

  /**
   * Retrieves the specified source from the map.
   * @function getSource
   * @param {string} source - The ID of the source to retrieve.
   */
  getSource(source) {
    try {
      return this.map.getSource(source);
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

      if (options !== undefined) {
        this.map.setStyle(style, options);
      } else {

        this.map.setStyle(style);

      }


      this.map.on("styledata", () => {
        if (window.document.querySelector(".maplibregl-compact-show")) {
          var element = window.document.querySelector(
            ".maplibregl-compact-show"
          );
          element.classList.remove("maplibregl-compact-show");
        }

        this._dealOrto3dStyle(this.map.getStyle().name);

      });
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
      return this.map.getLayer(layerId);
    } catch (error) {
      console.error(`Error getting layer: ${error.message}`);
    }
  }

  /**
   * Set filter for specified style layer.
   * @function setFilter
   * @param {string} layerId - The ID of the layer to retrieve.
   * @param {array} filter - The filter.
   * @param {string} options - Options object.
   */

  setFilter(layerId, filter, options) {
    try {
      return this.map.setFilter(layerId, filter, options);
    } catch (error) {
      console.error(`Error setting filter: ${error.message}`);
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
   * @param {Object} object - Object containing layer ID.
   * @param {Object} property - Object containing property to set.
   * @param {Object} value - Object containing value.
   */
  setLayoutProperty(object, property, value) {
    try {
      this.map.setLayoutProperty(object, property, value);
    } catch (error) {
      console.error(`Error setting layout property: ${error.message}`);
    }
  }

  /**
   * Sets layout property for a layer on the map.
   * @function setPaintProperty
   * @param {Object} object - Object containing layer ID.
   * @param {Object} property - Object containing property to set.
   * @param {Object} value - Object containing value.
   */
  setPaintProperty(object, property, value) {
    try {
      this.map.setPaintProperty(object, property, value);
    } catch (error) {
      console.error(`Error setting paint property: ${error.message}`);
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
   * @param {Number} options.width - Width control i.
   * @param {Boolean} options.utm - Boolean to show coordinates in UTM.
   * @param {Boolean} options.lonlat - Boolean to show coordinates in Lon Lat.
   * @param {string} [position='bottom-left'] - Position to add the control on the map.
   */
  addMouseCoordControl(options, position="bottom-left") {
    try {

      this.map.addControl(new MouseCoordinatesControl(options),position);
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
   * Adds a fullscreen control to the map.
   * @function addFullscreenControl
    * @param {Object} options - Options for the geolocate control.
   * @param {string} [position='top-right'] - Position to add the control on the map.
   
   */
    addFullscreenControl(options, position) {
      try {
        if (position === undefined) {
          position = "top-right";
        }
        if (options === undefined) {
          this.map.addControl(
            new maplibregl.FullscreenControl({
              container: HTMLElement
            }),
            position
          );
        } else {
      this.map.addControl(new maplibregl.FullscreenControl(options), position)
        }
      } catch (error) {
        console.error(`Error adding fullscreen control: ${error.message}`);
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
      //this.map.on("load", () => {
      return this.map.setTerrain(options);
      //});
      //  this.map.getZoom();
    } catch (error) {
      console.error(`Error setting terrain: ${error.message}`);
    }
  }


  /**
   * Sets the zoom range for a specific layer on the map.
   * @function setLayerZoomRange
   * @param {string} layerId - The ID of the layer to set the zoom range for.
   * @param {number} minZoom - The minimum zoom level.
   * @param {number} maxZoom - The maximum zoom level.
   */
  setLayerZoomRange(layerId, nimZoom, maxZoom) {
    try {
      return this.map.setLayerZoomRange(layerId, nimZoom, maxZoom);
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
   * @param {string} layerIdOrder - Optional layer Id draw position.
   */
  addLayer(layer, layerIdOrder) {
    try {
      this.map.addLayer(layer, layerIdOrder);
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
   * @param {string} position - Position of the layer: 'top', below 'labels' or below 'lines'.
  
   */
  addLayerGeoJSON(layer, position) {
    try {
      let keyLayer = ''
      if (position === 'labels'){
        keyLayer = this._firstSymbolLayer()
      }
      if (position === 'lines'){
        keyLayer =  this._firstLineLayer()
      }



      // this.map.on("load", () => {
      this.map.addSource(`${layer.id}`, {
        // this.map.addSource(`${layer.id}-userSource`, {
        type: "geojson",
        data: layer.data,
      });

      this.map.addLayer({
        id: `${layer.id}-layerIcgcMap`,
        type: layer.layerType,
        source: `${layer.id}`,
        // source: `${layer.id}-userSource`,
        layout: layer.layout,
        paint: layer.paint,
      }, keyLayer);
      // });
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
   * @param {string} position - Position of the layer: 'top', below 'labels' or below 'lines'.
   */
  addLayerWMS(layer, position) {
    try {
      // this.map.on("load", () => {
      // console.log("holaaddlayerwms", layer);
        let keyLayer = ''
        if (position === 'labels'){
          keyLayer = this._firstSymbolLayer()
        }
        if (position === 'lines'){
          keyLayer =  this._firstLineLayer()
        }

      this.map.addSource(`${layer.id}`, {
        // this.map.addSource(`${layer.id}-userSource`, {
        type: "raster",
        tiles: [layer.tiles],
        tileSize: 256,
      }, keyLayer);
      this.map.addLayer({
        id: `${layer.id}-layerIcgcMap`,
        type: "raster",
        source: `${layer.id}`,
        // source: `${layer.id}-userSource`,
        paint: {},
      }, keyLayer);
      // });
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
   * @param {string} options.height - Height of the logo.
   * @param {string} position - Position of the logo.
 
  */
  addLogo(options, position) {
    try {
      const img = document.createElement("img");
      img.src = options.url;
      img.style.height = options.height;
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
   * @param {Object[]} basesArray - Array of base layer objects.
   */
  addBasemapsICGC(basesArray) {
    try {
      // console.log('bases', basesArray)
      const handleClick = (base) => {
        // console.log('baseCLIK', base)







        map.setStyle(base);
      };

      const basemapGroup = document.getElementById("basemap-group");
      // this.map.on("load", () => {
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
      // });
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
        // console.log("base", base);
        map.setStyle(base.url);
      };

      const basemapGroup = document.getElementById("basemap-group");
      // this.map.on("load", () => {
      baseLayers.forEach((base) => {
        const div = document.createElement("div");
        div.className = "basemap-item";
        div.title = base.label;
        div.style.backgroundImage = `url('${base.image}')`;
        basemapGroup.appendChild(div);
        div.addEventListener("click", () => handleClick(base));
      });
      // });
    } catch (error) {
      console.error(`Error adding basemaps: ${error.message}`);
    }
  }
  /**
   * Adds feature query function to a layer.
   * @function addFeatureQuery
   * @param {string} layerName - name of the layer
   * @param {objetc} options - optional indications for the popup
   * @param {objetc} popupStyle - optional indications for the popup style
   */

  addFeatureQuery(layerName, options, popupStyle) {
    try {
      let description;
    
      // layerName = layerName+'-userSource'

      // this.map.on("load", () => {
      // console.log('layer', layerName, options, popupStyle)
      this.map.on("mouseenter", layerName, () => {
        // console.log('layerenter', layerName)
        this.map.getCanvas().style.cursor = "pointer";
      });
      

      this.map.on("mouseleave", layerName, () => {
        this.map.getCanvas().style.cursor = "";
      });

      this.map.on('click', (e) => {

        // console.log('click', this.map.queryRenderedFeatures(e.point), layerName)
        let features = this.map.queryRenderedFeatures(e.point);
        // console.log('kkk',features[0].source, layerName )
        if ((features && features[0].source.includes(layerName)) ) {
          // if ((features && features[0].source === layerName) ) {
          let coordinates = [e.lngLat.lng, e.lngLat.lat];
          // console.log('es aqui3331??', features[0])
          if (options !== undefined && options.length > 0 && options !== 'all') {
            if (options !== null) {
              let text = "";
              options.forEach((prop) => {
                let pr = features[0].properties[prop];
                text = text + `<h4>${pr}</h4>`;
              });
              description = text;
              map.addPopup(coordinates, description, popupStyle);
            }
          } else {
            let text = "";
            for (const key in features[0].properties) {
              text +=
                "<b>" + key + "</b>:" + features[0].properties[key] + "<br>";
            }

            description = text;
            map.addPopup(coordinates, description, popupStyle);
            // popup.setLngLat(e.lngLat)
            //   .setHTML(text)
            //   .addTo(map);

            // });
          }
        }
      });
      // });
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
      // this.map.on("load", () => {
      new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(text)
        .addTo(this.map);
      // });
    } catch (error) { }
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
   * @param {string} popupStyle - css content for the popup style.
   * @returns {Object} - Instance of the added popup.
   */
  addPopup(coord, text, popupStyle) {
    try {
      // console.log('popupstyle', popupStyle)
      if (popupStyle.image === undefined){
         let popup = new maplibregl.Popup()
        .setLngLat(coord)
        // .innerHTML( )
        .setHTML(`
       
        <div class="popupBody">
          
          <div class="popupTop">
          ${popupStyle.title}
        
          </div>
          
          <div class="popupBottom">
          <div class="popupBottomUp">
 ${text}
        
          </div>
          <div class="popupBottomDown">
             
          </div>
         
            
          </div>
        </div>
      `)
        .addTo(this.map);
      return popup;
      }else{ //if images area provided
        let popup = new maplibregl.Popup()
        .setLngLat(coord)
        // .innerHTML( )
        .setHTML(`
       
        <div class="popupBody">
          
          <div class="popupTop">
          ${popupStyle.title}
        
          </div>
          
          <div class="popupBottom">
          <div class="popupBottomUp">
          ${text}
        
          </div>
          <div class="popupBottomDown">
             <img style="  padding: 8px;  width: 50%;" src=${popupStyle.image} />
          </div>
         
            
          </div>
        </div>
      `)
        .addTo(this.map);
      return popup;
      }
     
    } catch (error) {
      console.error(`Error adding popup: ${error.message}`);
      return null;
    }
  }

  /**
   * Adds a fullscreen control to the map.
   * @function addFullScreen
   * @param {string} [position='top-right'] - Position to add the control on the map.
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
    // console.log('adddMenu', name, name.length)
    try {
let menuLabel 
      if (name.includes('-userFieldFilter-')){
        menuLabel = name.split('-userFieldFilter-')[0]
        // console.log('name', name)
      }
      
      else{
     
        menuLabel = name
      }
      if (name.length > 0) {
        const menuGroup = document.getElementById("menu-group");

        const input = document.createElement("input");

        input.type = "checkbox";
        input.id = name;
        input.checked = true;

        menuGroup.appendChild(input);

        const label = document.createElement("label");
        label.setAttribute("for", name);
        label.textContent = menuLabel;
        menuGroup.appendChild(label);



        
        input.addEventListener("change", (e) => {
          this.map.setLayoutProperty(
            name,
            "visibility",
            e.target.checked ? "visible" : "none"
          );
        });
      }
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
 
      this.map.addSource(`${options.id}`, {
        // this.map.addSource(`${options.id}-userSource`, {
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
              source: `${options.id}`,
              // source: `${options.id}-userSource`,
              paint: {
                "circle-radius": 6,
                "circle-color": "#B42222",
              },
              filter: ["==", "icon", symbol],
            },
             this._firstSymbolLayer()
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
      // });
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
   * @param {string} [position='bottom-right'] - Position to add the control on the map.
  
   */
  addAttributionControl(options, position) {
    try {
      this.map.addControl(
        new maplibregl.AttributionControl(options), position );
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
   */
  addImageLayerICGC(name,position) {
    try {
      // console.log("name", name, position);

      let idName = null;
      function findImageType(url, var1, var2, var3, var4) {
        // console.log("hola", name);
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

      // console.log("op", idName);
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
      // console.log("source", sourceWMS);
      this.addLayerWMS(sourceWMS, position);
      
    } catch (error) {
      console.error(`Error adding ICGC image layer: ${error.message}`);
    }
  }

  /**
 * Adds an ICGC vector layer to the map based on the specified name and year.
 * @function addVectorLayerICGC
 * @param {string} url - The url of the vector layer.
 * @param {string} position - Position of the layer: 'top', below 'labels' or below 'lines'.
 * @param {string} visibleLabel - Visibility of the label ("visible" / "none").
 * @param {object} paintOption - Paint option for the layer
 * 
 */
  async addVectorLayerICGC(layerUrl, position, visibleLabel, paintOption) {
    try {
// console.log('layerUrl', layerUrl)
let keyLayer = ''
if (position === 'labels'){
 keyLayer = this._firstSymbolLayer()
}
if (position === 'lines'){
  keyLayer = this._firstLineLayer()
}

      let name = layerUrl
      if (name === null) {
     console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          name,
          "font-weight: bold; font-style: italic;"
        );
      } else {
if (layerUrl.includes("https")){



  function getKeyByUrl(url) {
    for (const key in Layers.Vector) {
      // console.log('key', key, Layers.VectorAdmin.hasOwnProperty(key), Layers.VectorAdmin[key] )
      if (
        Layers.Vector.hasOwnProperty(key) &&
        Layers.Vector[key] === url
      ) {
        // console.log('entro', key)
        return key; // Retorna la clave si encuentra la URL
      }
    }
    return null; // Retorna null si no se encuentra la URL en el objeto
  }


  let name = getKeyByUrl(layerUrl);

  this.map.addSource(name, {
    type: "vector",
    url: layerUrl,
  });
if (name === 'cobertes2018'){
  map.addLayer({
    "id": name,
    "type": "fill",
    "source": name,
    "source-layer": "cobertes",
    "maxzoom": 18,
    "layout":{
      "visibility": 'visible',
    },
    "paint": {
      "fill-opacity": [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        13.5,
        1,
        18,
        0.4
      ],
      "fill-outline-color": "rgba(0,0, 0, 0)",
      "fill-color": [
        "interpolate",
        [
          "cubic-bezier",
          0.5,
          1,
          1,
          1
        ],
        [
          "get",
          "nivell_2"
        ],
        0,
        "#ffffff",
        111,
        "#ffff00",
        112,
        "#ccff33",
        113,
        "#af5b15",
        114,
        "#808000",
        115,
        "#cdcd00",
        116,
        "#ffffcc",
        221,
        "#33cc33",
        222,
        "#66ff33",
        223,
        "#689018",
        224,
        "#967d5f",
        225,
        "#19e61e",
        226,
        "#b4ff9b",
        227,
        "#aaa500",
        228,
        "#c3c3a0",
        229,
        "#00ff9b",
        230,
        "#ff9632",
        231,
        "#282828",
        232,
        "#79797a",
        233,
        "#f5df78",
        234,
        "#3296ff",
        341,
        "#ff007d",
        342,
        "#ff53cd",
        343,
        "#ffa4e2",
        344,
        "#ffc8e2",
        345,
        "#ffb4b4",
        346,
        "#0f3700",
        347,
        "#730055",
        348,
        "#6200c4",
        349,
        "#4a9595",
        350,
        "#ff00f0",
        351,
        "#adaaca",
        352,
        "#ffe6e6",
        353,
        "#67629a",
        354,
        "#4a466e",
        355,
        "#2f2d46",
        461,
        "#6f6fff",
        462,
        "#0000dc",
        463,
        "#000064",
        464,
        "#185f94",
        465,
        "#12466d",
        466,
        "#000080"
      ]
    }
  }, keyLayer);

}

//addLegend
function getLegendByName(name) {
  for (const layerKey in defaultOptions.vectorLayers) {
    const layer = defaultOptions.vectorLayers[layerKey];
    if (layer.key === name) {
      return layer.legend;
    }
  }
  return null; }

let legendUrl = getLegendByName(name)
if (visibleLabel==="visible"){
  map.addLegend(name, legendUrl)
}



}else{
 

        let sourceLimits = 'limitsSource'


        this.map.addSource(sourceLimits, {
          type: "vector",
          url: defaultOptions.limitsUrl,
        });

        this.map.addLayer({
          id: name + "-fill",
          type: "fill",
          source: sourceLimits,
          "source-layer": name,
          layout:{
            "visibility": visibleLabel,
          },
          paint: {
            "fill-color": "#0000FF",
            "fill-opacity": 0,
          },
        }, keyLayer);
        this.map.addLayer({
          id: name + "-underline",
          type: "line",
          source: sourceLimits,
          "source-layer": name,
          layout:{
            "visibility": visibleLabel,
          },
          paint: {
            "line-color": "#ffffff",
            "line-opacity": 1,
            "line-width": 3,
          },
        }, keyLayer);
        if (paintOption){
          this.map.addLayer({
            id: name + "-line",
            type: "line",
            source: sourceLimits,
            "source-layer": name,
            layout:{
              "visibility": visibleLabel,
            },
            paint: paintOption,
          }, keyLayer);
        }else{
           this.map.addLayer({
          id: name + "-line",
          type: "line",
          source: sourceLimits,
          layout:{
            "visibility": visibleLabel,
          },
          "source-layer": name,
          paint: {
            "line-color": "#4832a8",
            "line-opacity": 1,
            "line-width": 1,
          },
        }, keyLayer);
        }
       
      }



      // });
    }
      } catch(error) {
    console.error(`Error adding ICGC vector layer: ${error.message}`);
  }
}
  /**
   * Adds an ICGC FGB layer to the map based on the specified name and year.
   * @function addFGBLayerICGC
   * @param {string} url - The url of the FGB layer.
   * @param {string} visibleLabel - Visibility of the label ("visible" / "none").
   * @param {object} paintOption - Paint option for the layer
   * 
   */
  async addFGBLayerICGC(layerUrl, position, paintOption) {
    // console.log('hola', layerUrl, position, paintOption)
  try {
    // console.log('urlooooooo')
    let visibleLabel = "visible"
    let keyLayer = ''
    if (position === 'labels'){
      keyLayer = this._firstSymbolLayer()
    }
    if (position === 'lines'){
      keyLayer =  this._firstLineLayer()
    }
    function getKeyByUrl(url) {
      for (const key in Layers.FGBAdmin) {
        // console.log('key', key, Layers.VectorAdmin.hasOwnProperty(key), Layers.VectorAdmin[key] )
        if (
          Layers.FGBAdmin.hasOwnProperty(key) &&
          Layers.FGBAdmin[key] === url
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
      name = 'userFGB'
      // let op = Layers.VectorAdmin.find((objeto) =>
      //   objeto.key.includes(name)
      // );
      // if (!op) {
      // console.log(`❌ The layer: <i><b>${name}</b></i> does not exist in the ICGC DB. Consult the documentation.`)
      // console.log(
      //   "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
      //   "font-weight: bold; font-style: italic;",
      //   "font-weight: normal; font-style: normal; color: red;",
      //   name,
      //   "font-weight: bold; font-style: italic;"
      // );
    } else {
    }

      const response = await fetch(layerUrl);



      const fc = { type: "FeatureCollection", features: [] };

// console.log('fetc', fc)
      for await (const f of deserialize(response.body))
        fc.features.push(f);



      let src = name ;
      // let src = name + "-userSource";
      this.map.addSource(src, {
        type: "geojson",
        data: fc,
      });

      if (layerUrl.includes('text')) {
        // console.log('entro', name)
        this.map.addLayer({
          id: name,
          type: "symbol",
          source: src,
          layout: {
            "text-letter-spacing": 0.1,
            "text-size": { "base": 1.2, "stops": [[8, 0], [12, 14], [15, 15]] },
            "text-font": ["FiraSans-Regular"],
            "text-field": ["get", "NOM_AC"],
            "text-transform": "none",
            "text-max-width": 25,
            "visibility": visibleLabel,
            "text-justify": "right",
            "text-anchor": "top",
            "text-allow-overlap": false,
            "symbol-spacing": 2,
            "text-line-height": 1
          },
          paint: { "text-halo-blur": 0.5, "text-color": "rgba(90, 7, 7, 1)", "text-halo-width": 2, "text-halo-color": "rgba(255, 255, 255,0.8)" }
        }, keyLayer);
      } else {
        this.map.addLayer({
          id: name + "-fill",
          type: "fill",
          source: src,
          paint: {
            "fill-color": "#0000FF",
            "fill-opacity": 0,
          },
        }, keyLayer);
        this.map.addLayer({
          id: name + "-underline",
          type: "line",
          source: src,
          paint: {
            "line-color": "#ffffff",
            "line-opacity": 1,
            "line-width": 3,
          },
        }, keyLayer);
        // console.log('painst', paintOption)
        if (paintOption){
          // console.log('paint', paintOption)
  this.map.addLayer({
          id: name + "-line",
          type: "line",
          source: src,
          paint: paintOption
        }, keyLayer);
        }else{
          this.map.addLayer({
            id: name + "-line",
            type: "line",
            source: src,
            paint: {
              "line-color": "#4832a8",
              "line-opacity": 1,
              "line-width": 1,
            },
          }, keyLayer);
        }
      

        //afegir text visible o no
        //primer trobar la capa
        let textLayer = name + "Text"
        this.map.addLayer({
          id: textLayer,
          type: "symbol",
          source: src,
          layout: {
            "text-letter-spacing": 0.1,
            "text-size": { "base": 1.2, "stops": [[8, 0], [12, 14], [15, 15]] },
            "text-font": ["FiraSans-Regular"],
            "text-field": ["get", "NOM_AC"],
            "text-transform": "none",
            "text-max-width": 25,
            "visibility": visibleLabel,
            "text-justify": "right",
            "text-anchor": "top",
            "text-allow-overlap": false,
            "symbol-spacing": 2,
            "text-line-height": 1
          },
          paint: { "text-halo-blur": 0.5, "text-color": "rgba(90, 7, 7, 1)", "text-halo-width": 2, "text-halo-color": "rgba(255, 255, 255,0.8)" }
        }, keyLayer)


      }

      // });
    //} /////////////////aquest es 
  } catch (error) {
    console.error(`Error adding ICGC FGB layer: ${error.message}`);
  }
}


/**
 * Adds 3D terrain to the map using hillshade.
 * @function addTerrainICGC
 * @param {string} resolution - resolution of the terrain data: 2m or 5m.
 * @param {string} [positionButton='top-right'] - Position to add the button on the map.
 */
addTerrainICGC(resolution, positionButton) {
  // this.map.on("load", () => {
  try {
    // let op = Terrains.find(
    //   (objeto) => objeto.name === resolution
    // );
    // console.log('res', resolution)
    let op;
    for (const key in Terrains) {
      if (Terrains.hasOwnProperty(key)) {
        const objeto = Terrains[key];

        if (objeto === resolution) {
          op = objeto;
        }
      }
    }

    let urlTerrainICGC = op;
    if (this.getSource("terrainICGC") !== undefined){


      let lyrs = this.getStyle().layers
      lyrs.forEach(element => {
        if (element.source === "terrainICGC"){
          // console.log('eleme', element)
                this.removeLayer(element.id)
        }

        
      });

      // this.removeLayer("terrainICGC_fosca")
this.removeSource("terrainICGC")

    }
    if (this.getSource("terrainICGC") === undefined){

       
   
    // if (this.getSource("terrainICGC") === undefined){
        if (resolution.includes("terrarium")) {
     
          // Add terrain source
          this.map.addSource("terrainICGC", {
            // this.map.addSource("terrainICGC-userSource", {
            type: "raster-dem",
            tiles: [urlTerrainICGC],
            tileSize: 512,
            encoding: "terrarium",
            maxzoom: 16,
          });
        } else {


          this.map.addSource("terrainICGC", {
            // this.map.addSource("terrainICGC-userSource", {
            type: "raster-dem",
            tiles: [urlTerrainICGC],
            tileSize: 512,
            maxzoom: 16,
          });
        }
  }
    this.map.setTerrain({
      source: "terrainICGC",
      // source: "terrainICGC-userSource",
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
  // }); //'load end
}

/**
 * Adds 3D terrain to the map using hillshade.
 * @function addLegend
 * @param {string} name - name of the layer legend  to add.
 */
addLegend(name, legendUrl){
  try {
   
    // console.log('namelegend', name, legendUrl)

   //add jquery to head

   function addJQueryUI() {
    // Create link element for jQuery UI CSS
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css";
    // console.log('entro1')
    // Create script element for jQuery
    var jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";


    // console.log('entro12')
    // Create script element for jQuery UI
    var jqueryUIScript = document.createElement("script");
    jqueryUIScript.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js";

    // Get the head element of the document
    var head = document.head || document.getElementsByTagName("head")[0];

    // Append the elements to the head
    head.appendChild(link);
    // console.log('entro14')
    // Append jQuery script to head and wait for it to load before loading jQuery UI
    jqueryScript.onload = function() {
        head.appendChild(jqueryUIScript);
        // console.log('entro')
        // Call any jQuery code here, after both jQuery and jQuery UI are loaded
        $(document).ready(function() {
            // console.log("jQuery is ready");
            
            // Example: Using jQuery UI datepicker
        
            const legendContainer = document.createElement('div');
            legendContainer.id = 'legendContainer';
            legendContainer.innerHTML = `<img src=${legendUrl} alt="Legend" >`;
            legendContainer.style.display = 'none';
            document.body.appendChild(legendContainer);
            jqueryUIScript.onload = function() {
              // Make legend container draggable and resizable
              $(function() {
                $("#legendContainer").draggable();
                $("#legendContainer").resizable();
              });
            }
            head.appendChild(jqueryScript);
            // Create toggle button
            const toggleLegend = document.createElement('div');
            toggleLegend.id = 'toggleLegend';
            toggleLegend.innerHTML = '<span>&#x2630;</span>'; // You can replace this with any icon you prefer
            document.body.appendChild(toggleLegend);
        
            // Toggle legend visibility
            toggleLegend.addEventListener('click', function() {
              if (legendContainer.style.display === 'none') {
                legendContainer.style.display = 'block';
              } else {
                legendContainer.style.display = 'none';
              }
            });
        
        
        });
    };

    head.appendChild(jqueryScript);
}


// Call the function to add jQuery UI when the document is ready
// document.addEventListener("DOMContentLoaded", function() {
  addJQueryUI();


//   $(document).ready(function() {
//     console.log('entro')
//     // Example: Using jQuery UI datepicker

//     const legendContainer = document.createElement('div');
//     legendContainer.id = 'legendContainer';
//     legendContainer.innerHTML = `<img src=${legendUrl} alt="Legend" >`;
//     legendContainer.style.display = 'block';
//     document.body.appendChild(legendContainer);

//       // Make legend container draggable and resizable
//       $(function() {
//         $("#legendContainer").draggable();
//         $("#legendContainer").resizable();
//       });

//     // Create toggle button
//     const toggleLegend = document.createElement('div');
//     toggleLegend.id = 'toggleLegend';
//     toggleLegend.innerHTML = '<span>&#x2630;</span>'; // You can replace this with any icon you prefer
//     document.body.appendChild(toggleLegend);

//     // Toggle legend visibility
//     toggleLegend.addEventListener('click', function() {
//       if (legendContainer.style.display === 'none') {
//         legendContainer.style.display = 'block';
//       } else {
//         legendContainer.style.display = 'none';
//       }
//     });



// });

// });

    



    // const menuGroup = document.getElementById("map");
    // const div = document.createElement("div");
    // const imagen = document.createElement("img")
    //   div.className = "legendDiv";
    // menuGroup.appendChild(div); 
    //   imagen.src= legendUrl
    //   imagen.alt=name
    // div.appendChild(imagen);

    

    // div.addEventListener("click", () => handleClick(name));


  } catch (error) {
    console.error(`Error adding legend: ${error.message}`);
  }
}



//Internal methods


  async _raiseText3DStyle() {

  try {
    const image = await this.map.loadImage(
      defaultOptions.map3dOptions.imageIcon
    );
    this.map.addImage("stick", image.data);

    this.map.getStyle().layers.forEach((layer) => {
      if (
        layer["source-layer"] ===
        defaultOptions.map3dOptions.sourceLayerFilterId &&
        layer.minzoom >= defaultOptions.map3dOptions.minZoomFilter
      ) {
        if (image) {
          const lyId = layer.id;
          this.map.setLayoutProperty(lyId, "icon-image", "stick");
          this.map.setLayoutProperty(lyId, "text-offset", [0, -9]);
          this.map.setLayoutProperty(lyId, "symbol-placement", "point");
          this.map.setLayoutProperty(lyId, "symbol-avoid-edges", false);
          this.map.setLayoutProperty(lyId, "text-allow-overlap", true);
          this.map.setLayoutProperty(lyId, "text-ignore-placement", false);
          this.map.setLayoutProperty(lyId, "text-pitch-alignment", "auto");
          this.map.setLayoutProperty(lyId, "text-rotation-alignment", "auto");
          this.map.setLayoutProperty(lyId, "text-justify", "center");
          this.map.setLayoutProperty(lyId, "text-anchor", "bottom");
          this.map.setLayoutProperty(lyId, "icon-anchor", "bottom");
          this.map.setPaintProperty(lyId, "text-color", "#ffffff");
          this.map.setPaintProperty(lyId, "text-halo-color", "#000000");
          this.map.setPaintProperty(lyId, "text-halo-width", 2);
        }


      }
    });
  } catch (error) {
    console.error(`Error dealing orto 3D: ${error.message}`);
    return null;
  }
}

_dealOrto3dStyle(name) {
  try {
    if (name == "orto3d") {


      this.map.setMaxZoom(18.8);
      this.map.easeTo({ pitch: 45 });
      const ambientLight = new AmbientLight({
        intensity: 4,
      });

      const lightingEffect = new LightingEffect({
        ambientLight,
      });

      this.map.setTerrain({
        source: defaultOptions.map3dOptions.terrainSource,
        exaggeration: defaultOptions.map3dOptions.exaggeration,
      });

      const citiesMapboxLayer = this._createCitiesMapboxLayer();

      if (!this.map.getLayer(defaultOptions.map3dOptions.layerId3d)) {
        this.map.addLayer(
          citiesMapboxLayer,
          defaultOptions.map3dOptions.layerIdOrder
        );
        this.map.setLayerZoomRange(
          defaultOptions.map3dOptions.layerId3d,
          defaultOptions.map3dOptions.minZoomRange,
          defaultOptions.map3dOptions.maxZoomRange
        );

        citiesMapboxLayer.deck.setProps({
          effects: [lightingEffect],
        });


        this._raiseText3DStyle();
      }
    } else {
      if (this.map.getLayer(defaultOptions.map3dOptions.layerId3d)) {
        this.map.removeLayer(defaultOptions.map3dOptions.layerId3d);

        this.map.setTerrain(null);
      }
    }
  } catch (error) {
    console.error(`Error dealing orto 3D: ${error.message}`);
    return null;
  }
}

_firstSymbolLayer(){
  try {
    const layers = this.map.getStyle().layers;
    let firstSymbolId;
    // console.log('es aqui12??', layers.length)
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === "symbol") {
        firstSymbolId = layers[i].id;
        break;
      }
    }
    return firstSymbolId
  } catch (error) {
    console.error(`Error getting first symbol layer: ${error.message}`);
  }
}

_firstLineLayer(){
  try {
    const layers = this.map.getStyle().layers;
    let firsLineId;
    // console.log('es aqui12??', layers.length)
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === "line") {
        firsLineId = layers[i].id;
        break;
      }
    }
    return firsLineId
  } catch (error) {
    console.error(`Error getting first symbol layer: ${error.message}`);
  }
}

_createCitiesMapboxLayer() {
  try {
    const citiesMapboxLayer = new MapboxLayer({
      id: defaultOptions.map3dOptions.layerId3d,
      type: Tile3DLayer,
      data: defaultOptions.map3dOptions.urlTilesetCities,
      loader: Tiles3DLoader,
      loadOptions: {
        tileset: {
          viewDistanceScale: 1,
          updateTransforms: true,
          maximumScreenSpaceError:
            defaultOptions.map3dOptions.spaceErrorFactor,
        },

      },

      onTilesetLoad: (tileset3d) => {
        tileset3d.options.maximumScreenSpaceError =
          defaultOptions.map3dOptions.spaceErrorFactor;
         
      },
      onTileLoad: (tileHeader) => {
        tileHeader.content.cartographicOrigin.z -=
          defaultOptions.map3dOptions.zfactor;
         
      },
      operation: "terrain+draw",
    });

    return citiesMapboxLayer;
  } catch (error) {
    console.error(`Error adding MapboxLayer: ${error.message}`);
    return null;
  }
}


} //end class


