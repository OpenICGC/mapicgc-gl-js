import maplibregl from "maplibre-gl";
import "../../public/mapicgc-gl.css";
import "@watergis/maplibre-gl-export/dist/maplibre-gl-export.css";
import { deserialize } from "flatgeobuf/lib/mjs/geojson.js";
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
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import LogoControl from "../controls/LogoControl.js";
import LegendControl from "../controls/LegendControl.js";
import MouseCoordinatesControl from "../controls/MouseCoordinatesControl.js";
import Config from "../constants/ConfigICGC.js";
import Legends from "../constants/Legends.js";
import mapicgcConfig from "../mapicgc-config.json";

const ORDER_LAYER_TOP = "top"; // default
const ORDER_LAYER_LINE = "lines";
const ORDER_LAYER_SYMBOL = "labels";
let Styles, Terrains, Layers, defaultOptions;
export default class Map {
  /**
   * Constructor for the Map class.
   * @param {Object} options - Options to initialize the map.
   */
  constructor(options) {
    Config.getConfigICGC()
      .then((data) => {
        Styles = { ...data.Styles };
        Layers = { ...data.Layers };
        Terrains = { ...data.Terrains };
        defaultOptions = { ...data.defaultOptions };
        this.initTheMap(options);
      })
      .catch((err) => {
        console.info("Configuracio per defecte", err);
        Styles = { ...mapicgcConfig.Styles };
        Layers = { ...mapicgcConfig.Layers };
        Terrains = { ...mapicgcConfig.Terrains };
        defaultOptions = { ...mapicgcConfig.defaultOptions };
        this.initTheMap(options);
      });
  }
  initTheMap(options) {
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
  
    // Detectar si options.style es una URL de raster PNG
    const isRaster = options.style.includes("https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/");
  
    if (isRaster) {       
     
      // Inicializar mapa sin estilo (vacío)
      this.map = new maplibregl.Map({
        container: options.container,
        center: options.center,
        zoom: options.zoom,
        pitch: options.pitch || 0,
        hash: options.hash || false,
        style: {
          version: 8,
          sources: {},
          layers: []
        }
      });
  
      this.map.on("load", () => {
        // Añadir fuente y capa raster
        this.map.addSource("raster-source", {
          type: "raster",
          tiles: [options.style], // URL del raster
          tileSize: 256,
        });
  
        this.map.addLayer({
          id: "raster-layer",
          type: "raster",
          source: "raster-source",
        });
      });
    } else {
  
      // Inicializar mapa con estilo JSON como de costumbre
      this.map = new maplibregl.Map(options);
    }
  
  
  
    this.map.on("load", () => {
 
      if (!isRaster) {
       
        const nameStyle = this.map.getStyle().name;
      
        const urlName = options.style;
   
        this.map.addControl(
          new LogoControl({
            color: urlName.indexOf("orto") === -1 ? true : false,
            defaultOptions: defaultOptions,
          }),
          "bottom-left"
        );
     
        this._dealOrto3dStyle(nameStyle);
      }
    });
   
  }
  /**
   * Add geocoder.
   * @function addGeocoderICGC
   * @param {string} [position='top-right'] - Position to add the control on the map.
   * @returns {Object} - The current position of the search result.
   */
  addGeocoderICGC(position) {
    try {
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
            for (const feature of geojson.features) {
              const center = feature.geometry.coordinates;
              const point = {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: center,
                },
                place_name: feature.properties.etiqueta,
                properties: feature.properties,
                text: feature.properties.etiqueta,
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
      this.map.addControl(new MaplibreGeocoder(geocoderApi, options), position);
      let inputsearch = document.getElementsByClassName(
        "maplibregl-ctrl-geocoder--input"
      );
      inputsearch[0].attributes[2].nodeValue = "Cerca...";
      inputsearch[0].addEventListener("input", function (event) {
        let word = event.target.value;
        if (word.length > 3) {
        }
      });
    } catch (error) {
      console.error(`Error adding ICGC geocoder: ${error.message}`);
    }
  }
  //geocoder ends

  async loadImage(urlImage) {
    try {
      return this.map.loadImage(urlImage);
    } catch (error) {
      console.error(`Error getting loadImage: ${error.message}`);
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
   * @param {string} idLayer - The id for the layer.
   * @param {Object} options - Additional options for configuring the layer.
   */
  async fetchData(url, idLayer, options) {
    try {
      if (!options || options === undefined) {
        let opt = {
          type: "line",
          layout: {
            visibility: "visible",
          },
          paint: {
            "line-color": "grey",
            "line-width": 2,
          },
          layerPosition: "top", // select: 'top', 'lines' or 'labels'
        };

        options = opt;
      }
      let layerPosition = options.layerPosition;
      if (url.includes(".fgb")) {
        this.addFGBLayerICGC(url, idLayer, options);
      } else {
        const response = await fetch(url);
        const geojson = await response.json();
        let nameUser = idLayer;
        let keyLayer = this._dealOrderLayer(layerPosition);
        let type = geojson.features[0].geometry.type;
        if (type.includes("ine")) {
          if (options !== undefined) {
            this.map.addLayer(
              {
                id: nameUser,
                type: "line",
                source: {
                  type: "geojson",
                  data: geojson,
                },
                layout: options.layout || {},
                paint: options.paint || {},
              },
              keyLayer
            );
          } else {
            this.map.addLayer(
              {
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
              },
              keyLayer
            );
          }
        }
        if (type.includes("olygon")) {
          if (options !== undefined) {
            this.map.addLayer(
              {
                id: nameUser,
                type: "fill",
                source: {
                  type: "geojson",
                  data: geojson,
                },
                layout: options.layout,
                paint: options.paint,
              },
              keyLayer
            );
          } else {
            this.map.addLayer(
              {
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
              },
              keyLayer
            );
          }
        }
        if (type.includes("oint")) {
          if (options !== undefined) {
            this.map.addLayer(
              {
                id: nameUser,
                type: "circle",
                source: {
                  type: "geojson",
                  data: geojson,
                },
                layout: options.layout,
                paint: options.paint,
              },
              keyLayer
            );
          } else {
            this.map.addLayer(
              {
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
              },
              keyLayer
            );
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  }
  /**
   * Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type and adds to the Menu as a checkbox item.
   * @param {string} url - The URL to fetch GeoJSON data from.
   * @param {string} idLayer - The geometry name (e.g., 'buildings').
   * @param {string} filterField - Import all features as unique or group based on a field ('all', 'field').
   * @param {Object} options - Additional options for configuring the layer.
   */
  async fetchDataAndMenu(url, idLayer, filterField, options) {
    try {
      let layerPosition;
      if (options !== null) {
        layerPosition = options.layerPosition;
      } else {
        layerPosition = ORDER_LAYER_SYMBOL;
      }
      let menuGroup;
      let mapId = document.getElementById("map");
      if (document.getElementById("menu-group")) {
        menuGroup = document.getElementById("menu-group");
      } else {
        menuGroup = document.createElement("nav");
        menuGroup.id = "menu-group";
        menuGroup.classList.add = "filter-group";
        mapId.appendChild(menuGroup);
      }
      if (menuGroup !== null) {
        let visibleLabel = "visible";
        let keyLayer = this._dealOrderLayer(layerPosition);
        let geojson;
        if (url.includes(".fgb")) {
          let name = this._getKeyByUrlFGB(url);
          if (name === null) {
            name = "userFGB";
          } else {
          }
          const response = await fetch(url);
          const fc = { type: "FeatureCollection", features: [] };
          for await (const f of deserialize(response.body)) fc.features.push(f);
          geojson = fc;
          let src = idLayer;
          this.map.addSource(src, {
            type: "geojson",
            data: fc,
          });
          if (url.includes("text")) {
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "symbol",
                  source: src,
                  layout: options.layout,
                  paint: options.paint,
                },
                keyLayer
              );
            } else {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "symbol",
                  source: src,
                  layout: {
                    "text-letter-spacing": 0.1,
                    "text-size": {
                      base: 1.2,
                      stops: [
                        [8, 0],
                        [12, 14],
                        [15, 15],
                      ],
                    },
                    "text-font": ["FiraSans-Regular"],
                    "text-field": ["get", "NOM_AC"],
                    "text-transform": "none",
                    "text-max-width": 25,
                    visibility: visibleLabel,
                    "text-justify": "right",
                    "text-anchor": "top",
                    "text-allow-overlap": false,
                    "symbol-spacing": 2,
                    "text-line-height": 1,
                  },
                  paint: {
                    "text-halo-blur": 0.5,
                    "text-color": "rgba(90, 7, 7, 1)",
                    "text-halo-width": 2,
                    "text-halo-color": "rgba(255, 255, 255,0.8)",
                  },
                },
                keyLayer
              );
            }
          } else {
            let textLayer = idLayer + "Text";
            this.map.addLayer(
              {
                id: textLayer,
                type: "symbol",
                source: src,
                layout: {
                  "text-letter-spacing": 0.1,
                  "text-size": {
                    base: 1.2,
                    stops: [
                      [8, 0],
                      [12, 14],
                      [15, 15],
                    ],
                  },
                  "text-font": ["FiraSans-Regular"],
                  "text-field": ["get", "NOM_AC"],
                  "text-transform": "none",
                  "text-max-width": 25,
                  visibility: visibleLabel,
                  "text-justify": "right",
                  "text-anchor": "top",
                  "text-allow-overlap": false,
                  "symbol-spacing": 2,
                  "text-line-height": 1,
                },
                paint: {
                  "text-halo-blur": 0.5,
                  "text-color": "rgba(90, 7, 7, 1)",
                  "text-halo-width": 2,
                  "text-halo-color": "rgba(255, 255, 255,0.8)",
                },
              },
              keyLayer
            );
          }
        } else {
          const response = await fetch(url);
          geojson = await response.json();
        }
        if (filterField !== "all") {
          const nameTitle = document.createElement("div");
          nameTitle.id = "titleDivMenu";
          nameTitle.textContent = idLayer;
          menuGroup.appendChild(nameTitle);
          const featureTreeTitle = document.createElement("div");
          featureTreeTitle.id = "titleDivMenuSub";
          featureTreeTitle.textContent = `📂 ${filterField}`;
          menuGroup.appendChild(featureTreeTitle);
        } else {
        }
        let type;
        if (options.type) {
          type = options.type;
        } else {
          type = geojson.features[0].geometry.type;
        }
        if (filterField === "all") {
          if (type.includes("ine")) {
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "line",
                  source: {
                    type: "geojson",
                    data: geojson,
                  },
                  layout: options.layout,
                  paint: options.paint,
                },
                keyLayer
              );
            } else {
              this.map.addLayer(
                {
                  id: idLayer,
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
                },
                keyLayer
              );
            }
          }
          if (type.includes("olygon")) {
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "fill",
                  source: {
                    type: "geojson",
                    data: geojson,
                  },
                  layout: options.layout,
                  paint: options.paint,
                },
                keyLayer
              );
            } else {
              this.map.addLayer(
                {
                  id: idLayer,
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
                },
                keyLayer
              );
            }
          }
          if (type.includes("oint")) {
            //point
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "circle",
                  source: {
                    type: "geojson",
                    data: geojson,
                  },
                  layout: options.layout,
                  paint: options.paint,
                },
                keyLayer
              );
            } else {
              this.map.addLayer(
                {
                  id: idLayer,
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
                },
                keyLayer
              );
            }
          }
          if (type.includes("ymbol")) {
            //symbol
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "symbol",
                  source: {
                    type: "geojson",
                    data: geojson,
                  },
                  layout: options.layout,
                  paint: options.paint,
                },
                keyLayer
              );
            } else {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "symbol",
                  source: {
                    type: "geojson",
                    data: geojson,
                  },
                  layout: {
                    visibility: "visible",
                  },
                  paint: {
                    "text-halo-blur": 0.5,
                    "text-color": "rgba(90, 7, 7, 1)",
                    "text-halo-width": 2,
                    "text-halo-color": "rgba(255, 255, 255,0.8)",
                  },
                },
                keyLayer
              );
            }
          }
          this.addMenuItem(idLayer);
        } else {
          let field = filterField;
          const layers = {};
          geojson.features.forEach((feature) => {
            const fieldMarker = feature.properties[field];
            const idFieldMarker = fieldMarker + `-userFieldFilter-` + idLayer;
            if (fieldMarker !== null) {
              if (!layers[idFieldMarker]) {
                if (type.includes("ine")) {
                  if (options !== undefined) {
                    this.map.addLayer(
                      {
                        id: idFieldMarker,
                        type: "line",
                        source: {
                          type: "geojson",
                          data: geojson,
                        },
                        layout: options.layout,
                        paint: options.paint,
                        filter: ["==", `${field}`, fieldMarker],
                      },
                      keyLayer
                    );
                  } else {
                    this.map.addLayer(
                      {
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
                      },
                      keyLayer
                    );
                  }
                }
                if (type.includes("olygon")) {
                  if (options !== undefined) {
                    this.map.addLayer(
                      {
                        id: idFieldMarker,
                        type: "fill",
                        source: {
                          type: "geojson",
                          data: geojson,
                        },
                        filter: ["==", `${field}`, fieldMarker],
                        layout: options.layout,
                        paint: options.paint,
                      },
                      keyLayer
                    );
                  } else {
                    this.map.addLayer(
                      {
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
                      },
                      keyLayer
                    );
                  }
                }
                if (type.includes("oint")) {
                  if (options !== undefined) {
                    this.map.addLayer(
                      {
                        id: idFieldMarker,
                        type: "circle",
                        source: {
                          type: "geojson",
                          data: geojson,
                        },
                        filter: ["==", `${field}`, fieldMarker],
                        layout: options.layout,
                        paint: options.paint,
                      },
                      keyLayer
                    );
                  } else {
                    this.map.addLayer(
                      {
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
                      },
                      keyLayer
                    );
                  }
                }
                layers[idFieldMarker] = true;
                this.addMenuItem(idFieldMarker);
              }
            }
          });
        }
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
    setTimeout(() => {
      try {
        return this.map.on(type, func);
      } catch (error) {
        console.error(`Error adding event ON listener: ${error.message}`);
      }
    }, 100);
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
 * Sets the sky properties of the map.
 * @function setSky
 * @param {Object} options - Options to set the sky properties.
 * @param {string} [options.skyType='gradient'] - Type of sky to set (e.g., 'gradient', 'atmosphere').
 * @param {string} [options.color='lightblue'] - Color of the sky.
 * @param {Number} [options.horizonBlend=0.03] - Blend horizon value.
 * @param {Number} [options.starIntensity=0.5] - Intensity of stars in the sky.
 * @param {Number} [options.sunIntensity=0.1] - Intensity of the sun in the sky.
 * @param {Array<Number>} [options.sunPosition=[0, 0]] - Position of the sun in the sky.
 */
setSky(options) {
  try {
    if (options === undefined) {
      
      if (this.map.style.stylesheet.id.includes("orto")) {
        options = {
          'sky-color': '#86bbd5',
          'sky-horizon-blend': 0.3,
          'horizon-color': '#ffffff33',
          'horizon-fog-blend': 0.1,
          'fog-ground-blend': 0.75,
          'fog-color': '#c5d6d6'
        };
      }
      else if (this.map.style.stylesheet.id.includes("mapa_estandard_general")) {
        options = {
          "sky-color": "#a5f0f0",
          "sky-horizon-blend": 0.3,
          "horizon-color": "#e1e3e3",
          "horizon-fog-blend": 0.9,
          "fog-ground-blend": 0.85,
          "fog-color": "#c5d6d6",
        };
      }
     else if (this.map.style.stylesheet.id.includes("icgc_mapa_vissir")) {
        options = {
          "sky-color": "#a5f0f0",
          "sky-horizon-blend": 0.3,
          "horizon-color": "#e1e3e3",
          "horizon-fog-blend": 0.9,
          "fog-ground-blend": 0.85,
          "fog-color": "#c5d6d6",
        };
      }
      else if (this.map.style.stylesheet.id.includes("fosc")) {
        options = {
          "sky-color": "#232423",
          "sky-horizon-blend": 0.3,
          "horizon-color": "#969996",
          "horizon-fog-blend": 0.9,
          "fog-ground-blend": 0.85,
          "fog-color": "#383838",
        };
      }
      else{
        options = {
          'sky-color': '#86bbd5',
          'sky-horizon-blend': 0.3,
          'horizon-color': '#ffffff33',
          'horizon-fog-blend': 0.1,
          'fog-ground-blend': 0.75,
          'fog-color': '#c5d6d6'
        };
      }
    }




    this.map.setSky(options);
  } catch (error) {
    console.error(`Error setting sky properties: ${error.message}`);
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
  addMouseCoordControl(options, position = "bottom-left") {
    try {
      this.map.addControl(new MouseCoordinatesControl(options), position);
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
            container: HTMLElement,
          }),
          position
        );
      } else {
        this.map.addControl(
          new maplibregl.FullscreenControl(options),
          position
        );
      }
    } catch (error) {
      console.error(`Error adding fullscreen control: ${error.message}`);
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
  //add maplibre methods
  /**
   * Adds an image to the map.
   * @function addImage
   * @param {string} id - The ID of the image.
   * @param {ImageBitmap | HTMLImageElement | ImageData | StyleImageInterface | object} image - The image object to add.
   * @param {Partial<StyleImageMetadata>} options - Optional metadata for the image.
   * @returns {this}
   */
  addImage(id, image, options) {
    try {
      this.map.addImage(id, image, options);
    } catch (error) {
      console.error(`Error adding image: ${error.message}`);
    }
    return this;
  }

  /**
   * Adds a source to the map.
   * @function addSource
   * @param {string} id - The ID of the source.
   * @param {SourceSpecification} source - The source object to add.
   * @returns {this}
   */
  addSource(id, source) {
    try {
      this.map.addSource(id, source);
    } catch (error) {
      console.error(`Error adding source: ${error.message}`);
    }
    return this;
  }

  /**
   * Adds a sprite to the map.
   * @function addSprite
   * @param {string} id - The ID of the sprite.
   * @param {string} url - The URL to load the sprite from.
   * @param {StyleSetterOptions} options - Options object.
   * @returns {this}
   */
  addSprite(id, url, options) {
    try {
      this.map.addSprite(id, url, options);
    } catch (error) {
      console.error(`Error adding sprite: ${error.message}`);
    }
    return this;
  }

  /**
   * Checks if all tiles in the viewport are loaded.
   * @function areTilesLoaded
   * @returns {boolean}
   */
  areTilesLoaded() {
    return this.map.areTilesLoaded();
  }

  /**
   * Calculates the camera position for given bounds.
   * @function cameraForBounds
   * @param {LngLatBoundsLike} bounds - The geographical bounds to fit.
   * @param {CameraForBoundsOptions} options - Options object.
   * @returns {CenterZoomBearing | undefined}
   */
  cameraForBounds(bounds, options) {
    return this.map.cameraForBounds(bounds, options);
  }

  /**
   * Eases the camera to a new position.
   * @function easeTo
   * @param {object} options - Options describing the animation.
   * @param {any} eventData - Additional properties for event objects.
   * @returns {this}
   */
  easeTo(options, eventData) {
    this.map.easeTo(options, eventData);
    return this;
  }

  /**
   * Fits the map to the given geographical bounds.
   * @function fitBounds
   * @param {LngLatBoundsLike} bounds - The geographical bounds to fit.
   * @param {FitBoundsOptions} options - Options object.
   * @param {any} eventData - Additional properties for event objects.
   * @returns {this}
   */
  fitBounds(bounds, options, eventData) {
    this.map.fitBounds(bounds, options, eventData);
    return this;
  }

  /**
   * Fits the map to the given screen coordinates.
   * @function fitScreenCoordinates
   * @param {PointLike} p0 - First point on screen, in pixel coordinates.
   * @param {PointLike} p1 - Second point on screen, in pixel coordinates.
   * @param {number} bearing - Desired map bearing at end of animation, in degrees.
   * @param {FitBoundsOptions} options - Options object.
   * @param {any} eventData - Additional properties for event objects.
   * @returns {this}
   */
  fitScreenCoordinates(p0, p1, bearing, options, eventData) {
    this.map.fitScreenCoordinates(p0, p1, bearing, options, eventData);
    return this;
  }

  /**
   * Flies the camera to a new position.
   * @function flyTo
   * @param {FlyToOptions} options - Options describing the flight.
   * @param {any} eventData - Additional properties for event objects.
   * @returns {this}
   */
  flyTo(options, eventData) {
    this.map.flyTo(options, eventData);
    return this;
  }

  /**
   * Gets the current bearing of the map.
   * @function getBearing
   * @returns {number}
   */
  getBearing() {
    return this.map.getBearing();
  }

  /**
   * Gets the current geographical bounds of the map.
   * @function getBounds
   * @returns {LngLatBounds}
   */
  getBounds() {
    return this.map.getBounds();
  }

  /**
   * Gets the elevation for the point where the camera is looking.
   * @function getCameraTargetElevation
   * @returns {number}
   */
  getCameraTargetElevation() {
    return this.map.getCameraTargetElevation();
  }

  /**
   * Gets the map's <canvas> element.
   * @function getCanvas
   * @returns {HTMLCanvasElement}
   */
  getCanvas() {
    return this.map.getCanvas();
  }

  /**
   * Gets the HTML element containing the map's <canvas> element.
   * @function getCanvasContainer
   * @returns {HTMLElement}
   */
  getCanvasContainer() {
    return this.map.getCanvasContainer();
  }

  /**
   * Returns the map's geographical centerpoint.
   * @function getCenter
   * @returns {LngLat} The map's geographical centerpoint.
   */
  getCenter() {
    return this.map.getCenter();
  }

  /**
   * Returns the map's containing HTML element.
   * @function getContainer
   * @returns {HTMLElement} The map's container.
   */
  getContainer() {
    return this.map.getContainer();
  }

  /**
   * Gets the state of a feature.
   * @function getFeatureState
   * @param {FeatureIdentifier} feature - Feature identifier.
   * @returns {any} The state of the feature.
   */
  getFeatureState(feature) {
    return this.map.getFeatureState(feature);
  }

  /**
   * Returns the filter applied to the specified style layer.
   * @function getFilter
   * @param {string} layerId - The ID of the style layer.
   * @returns {void | FilterSpecification} The layer's filter.
   */
  getFilter(layerId) {
    return this.map.getFilter(layerId);
  }

  /**
   * Returns the value of the style's glyphs URL.
   * @function getGlyphs
   * @returns {string} The glyphs Style's glyphs URL.
   */
  getGlyphs() {
    return this.map.getGlyphs();
  }

  /**
   * Returns an image currently available in the map.
   * @function getImage
   * @param {string} id - The ID of the image.
   * @returns {StyleImage} An image in the map with the specified ID.
   */
  getImage(id) {
    return this.map.getImage(id);
  }

  /**
   * Returns the layer with the specified ID in the map's style.
   * @function getLayer
   * @param {string} id - The ID of the layer to get.
   * @returns {StyleLayer} The layer with the specified ID.
   */
  getLayer(id) {
    return this.map.getLayer(id);
  }

  /**
   * Return the ids of all layers currently in the style, including custom layers, in order.
   * @function getLayersOrder
   * @returns {string[]} Ids of layers, in order.
   */
  getLayersOrder() {
    return this.map.getLayersOrder();
  }

  /**
   * Returns the value of a layout property in the specified style layer.
   * @function getLayoutProperty
   * @param {string} layerId - The ID of the layer.
   * @param {string} name - The name of the layout property.
   * @returns {any} The value of the specified layout property.
   */
  getLayoutProperty(layerId, name) {
    return this.map.getLayoutProperty(layerId, name);
  }

  /**
   * Returns the value of the light object.
   * @function getLight
   * @returns {LightSpecification} Light properties of the style.
   */
  getLight() {
    return this.map.getLight();
  }

  /**
   * Returns the maximum geographical bounds the map is constrained to.
   * @function getMaxBounds
   * @returns {LngLatBounds} The map's maximum geographical bounds.
   */
  getMaxBounds() {
    return this.map.getMaxBounds();
  }

  /**
   * Returns the map's maximum allowable pitch.
   * @function getMaxPitch
   * @returns {number} The maxPitch.
   */
  getMaxPitch() {
    return this.map.getMaxPitch();
  }

  /**
   * Returns the map's maximum allowable zoom level.
   * @function getMaxZoom
   * @returns {number} The maxZoom.
   */
  getMaxZoom() {
    return this.map.getMaxZoom();
  }

  /**
   * Returns the map's minimum allowable pitch.
   * @function getMinPitch
   * @returns {number} The minPitch.
   */
  getMinPitch() {
    return this.map.getMinPitch();
  }

  /**
   * Returns the map's minimum allowable zoom level.
   * @function getMinZoom
   * @returns {number} The minZoom.
   */
  getMinZoom() {
    return this.map.getMinZoom();
  }

  /**
   * Returns the current padding applied around the map viewport.
   * @function getPadding
   * @returns {PaddingOptions} The current padding around the map viewport.
   */
  getPadding() {
    return this.map.getPadding();
  }

  /**
   * Returns the value of a paint property in the specified style layer.
   * @function getPaintProperty
   * @param {string} layerId - The ID of the layer.
   * @param {string} name - The name of a paint property.
   * @returns {unknown} The value of the specified paint property.
   */
  getPaintProperty(layerId, name) {
    return this.map.getPaintProperty(layerId, name);
  }

  /**
   * Returns the map's current pitch (tilt).
   * @function getPitch
   * @returns {number} The map's current pitch, measured in degrees away from the plane of the screen.
   */
  getPitch() {
    return this.map.getPitch();
  }

  /**
   * Returns the map's pixel ratio.
   * @function getPixelRatio
   * @returns {number} The pixel ratio.
   */
  getPixelRatio() {
    return this.map.getPixelRatio();
  }

  /**
   * Returns the state of renderWorldCopies.
   * @function getRenderWorldCopies
   * @returns {boolean} The renderWorldCopies.
   */
  getRenderWorldCopies() {
    return this.map.getRenderWorldCopies();
  }

  /**
   * Returns the source with the specified ID in the map's style.
   * @function getSource
   * @param {string} id - The ID of the source to get.
   * @returns {Source} The style source with the specified ID.
   */
  getSource(id) {
    return this.map.getSource(id);
  }

  /**
   * Returns the as-is value of the style's sprite.
   * @function getSprite
   * @returns {object[]} Style's sprite list of id-url pairs.
   */
  getSprite() {
    return this.map.getSprite();
  }

  /**
   * Returns the map's MapLibre style object.
   * @function getStyle
   * @returns {StyleSpecification} The map's style JSON object.
   */
  getStyle() {
    return this.map.getStyle();
  }

  /**
   * Get the terrain-options if terrain is loaded.
   * @function getTerrain
   * @returns {TerrainSpecification} The TerrainSpecification passed to setTerrain.
   */
  getTerrain() {
    return this.map.getTerrain();
  }

  //  Function getZoom()
  /**
   * Returns the map's current zoom level.
   * @function getZoom
   * @returns {number} The map's current zoom level.
   */
  getZoom() {
    return this.map.getZoom();
  }

  //  Function hasControl()
  /**
   * Checks if a control exists on the map.
   * @function hasControl
   * @param {IControl} control - The IControl to check.
   * @returns {boolean} true if map contains control.
   */
  hasControl(control) {
    return this.map.hasControl(control);
  }

  //  Function hasImage()
  /**
   * Check whether or not an image with a specific ID exists in the style.
   * @function hasImage
   * @param {string} id - The ID of the image.
   * @returns {boolean} A Boolean indicating whether the image exists.
   */
  hasImage(id) {
    return this.map.hasImage(id);
  }

  //  Function isMoving()
  /**
   * Returns true if the map is panning, zooming, rotating, or pitching due to a camera animation or user gesture.
   * @function isMoving
   * @returns {boolean} true if the map is moving.
   */
  isMoving() {
    return this.map.isMoving();
  }

  //  Function isRotating()
  /**
   * Returns true if the map is rotating due to a camera animation or user gesture.
   * @function isRotating
   * @returns {boolean} true if the map is rotating.
   */
  isRotating() {
    return this.map.isRotating();
  }

  //  Function isSourceLoaded()
  /**
   * Returns a Boolean indicating whether the source is loaded.
   * @function isSourceLoaded
   * @param {string} id - The ID of the source to be checked.
   * @returns {boolean} A Boolean indicating whether the source is loaded.
   */
  isSourceLoaded(id) {
    return this.map.isSourceLoaded(id);
  }

  //  Function isStyleLoaded()
  /**
   * Returns a Boolean indicating whether the map's style is fully loaded.
   * @function isStyleLoaded
   * @returns {boolean | void} A Boolean indicating whether the style is fully loaded.
   */
  isStyleLoaded() {
    return this.map.isStyleLoaded();
  }

  //  Function isZooming()
  /**
   * Returns true if the map is zooming due to a camera animation or user gesture.
   * @function isZooming
   * @returns {boolean} true if the map is zooming.
   */
  isZooming() {
    return this.map.isZooming();
  }

  //  Function jumpTo()
  /**
   * Changes any combination of center, zoom, bearing, and pitch, without an animated transition.
   * @function jumpTo
   * @param {JumpToOptions} options - Options object
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  jumpTo(options, eventData) {
    return this.map.jumpTo(options, eventData);
  }

  //  Function listImages()
  /**
   * Returns an Array of strings containing the IDs of all images currently available in the map.
   * @function listImages
   * @returns {string[]} An Array of strings containing the names of all sprites/images currently available in the map.
   */
  listImages() {
    return this.map.listImages();
  }

  //  Function listens()
  /**
   * Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.
   * @function listens
   * @param {string} type - The event type.
   * @returns {boolean} true if there is at least one registered listener for specified event type, false otherwise.
   */
  listens(type) {
    return this.map.listens(type);
  }

  //  Function loadImage()
  /**
   * Load an image from an external URL to be used with Map#addImage.
   * @function loadImage
   * @param {string} url - The URL of the image file. Image file must be in png, webp, or jpg format.
   * @returns {Promise<GetResourceResponse<ImageBitmap | HTMLImageElement>>} A promise that is resolved when the image is loaded.
   */
  loadImage(url) {
    return this.map.loadImage(url);
  }

  //  Function loaded()
  /**
   * Returns a Boolean indicating whether the map is fully loaded.
   * @function loaded
   * @returns {boolean} A Boolean indicating whether the map is fully loaded.
   */
  loaded() {
    return this.map.loaded();
  }
  //  Function new LngLatBounds()
  /**
   * Constructs a new LngLatBounds object representing a geographical bounding box.
   * @class LngLatBounds
   * @constructor
   * @param {LngLatLike} [sw] - The southwest corner of the bounding box. Can be specified as an array of 4 numbers in the order of west, south, east, north, or an array of 2 LngLatLike representing [sw,ne].
   * @param {LngLatLike} [ne] - The northeast corner of the bounding box.
   */
  LngLatBounds(sw, ne) {
    return new maplibregl.LngLatBounds(sw, ne);
  }

  //  Function addProtocol()
  /**
   * Adds a custom load resource function that will be called when using a URL that starts with a custom URL schema.
   * @function addProtocol
   * @param {string} customProtocol - The protocol to hook, for example 'custom'.
   * @param {AddProtocolAction} loadFn - The function to use when trying to fetch a resource specified by the customProtocol.
   * @returns {void}
   */
  addProtocol(customProtocol, loadFn) {
    return this.map.addProtocol(customProtocol, loadFn);
  }

  //  Function moveLayer()
  /**
   * Moves a layer to a different z-position.
   * @function moveLayer
   * @param {string} id - The ID of the layer to move.
   * @param {string} [beforeId] - The ID of an existing layer to insert the new layer before.
   * @returns {this}
   */
  moveLayer(id, beforeId) {
    return this.map.moveLayer(id, beforeId);
  }

  //  Function panBy()
  /**
   * Pans the map by the specified offset.
   * @function panBy
   * @param {PointLike} offset - x and y coordinates by which to pan the map.
   * @param {AnimationOptions} [options] - Options object.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  panBy(offset, options, eventData) {
    return this.map.panBy(offset, options, eventData);
  }

  //  Function panTo()
  /**
   * Pans the map to the specified location with an animated transition.
   * @function panTo
   * @param {LngLatLike} lnglat - The location to pan the map to.
   * @param {AnimationOptions} [options] - Options describing the destination and animation of the transition.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  panTo(lnglat, options, eventData) {
    return this.map.panTo(lnglat, options, eventData);
  }

  //  Function project()
  /**
   * Returns a Point representing pixel coordinates, relative to the map's container, that correspond to the specified geographical location.
   * @function project
   * @param {LngLatLike} lnglat - The geographical location to project.
   * @returns {Point} The Point corresponding to lnglat, relative to the map's container.
   */
  project(lnglat) {
    return this.map.project(lnglat);
  }
  //  Function queryRenderedFeatures()
  /**
   * Queries rendered features within a specified geometry or bounding box.
   * @function queryRenderedFeatures
   * @param {GeometryLike | Array | Object} [geometryOrOptions] - The geometry or options for the query.
   * @param {Object} [options] - Options for the query.
   * @returns {Array} An array of GeoJSON Feature objects representing the features that intersect the query geometry.
   */
  queryRenderedFeatures(geometryOrOptions, options) {
    return this.map.queryRenderedFeatures(geometryOrOptions, options);
  }

  //  Function querySourceFeatures()
  /**
   * Queries source features within a specified source.
   * @function querySourceFeatures
   * @param {string} sourceId - The ID of the source to query.
   * @param {Object} parameters - Parameters for the query.
   * @returns {Array} An array of GeoJSON Feature objects representing the features in the source that satisfy the query parameters.
   */
  querySourceFeatures(sourceId, parameters) {
    return this.map.querySourceFeatures(sourceId, parameters);
  }

  //  Function queryTerrainElevation()
  /**
   * Queries the terrain elevation at a specified geographical location.
   * @function queryTerrainElevation
   * @param {LngLatLike} lngLatLike - The geographical location to query.
   * @returns {number} The elevation (in meters) at the specified location.
   */
  queryTerrainElevation(lngLatLike) {
    return this.map.queryTerrainElevation(lngLatLike);
  }

  //  Function redraw()
  /**
   * Redraws the map.
   * @function redraw
   * @returns {this}
   */
  redraw() {
    return this.map.redraw();
  }

  //  Function remove()
  /**
   * Removes the map from the DOM.
   * @function remove
   * @returns {this}
   */
  remove() {
    return this.map.remove();
  }

  //  Function removeControl()
  /**
   * Removes a control from the map.
   * @function removeControl
   * @param {Object} control - The control to remove.
   * @returns {this}
   */
  removeControl(control) {
    return this.map.removeControl(control);
  }

  //  Function removeFeatureState()
  /**
   * Removes the state of a feature.
   * @function removeFeatureState
   * @param {Object} target - The target feature.
   * @param {string} [key] - The key of the state to remove.
   * @returns {this}
   */
  removeFeatureState(target, key) {
    return this.map.removeFeatureState(target, key);
  }

  //  Function removeImage()
  /**
   * Removes an image from the style's sprite.
   * @function removeImage
   * @param {string} id - The ID of the image to remove.
   * @returns {this}
   */
  removeImage(id) {
    return this.map.removeImage(id);
  }

  /**
   * Removes a layer from the map.
   * @function removeLayer
   * @param {string} idLayer - Identifier of the layer to remove.
   */
  removeLayer(idLayer) {
    try {
      this.map.removeLayer(idLayer);
    } catch (error) {
      console.error(`Error removing layer: ${error.message}`);
    }
  }

  /**
   * Removes a source from the map.
   * @function removeSource
   * @param {string} idLayer - Identifier of the source to remove.
   */
  removeSource(sourceId) {
    try {
      this.map.removeSource(sourceId);
    } catch (error) {
      console.error(`Error removing source: ${error.message}`);
    }
  }

  //  Function removeSprite()
  /**
   * Removes a sprite from the style.
   * @function removeSprite
   * @param {string} id - The ID of the sprite to remove.
   * @returns {this}
   */
  removeSprite(id) {
    return this.map.removeSprite(id);
  }

  //  Function resetNorth()
  /**
   * Resets the map orientation so that north is up.
   * @function resetNorth
   * @param {Object} [options] - Options for the reset.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  resetNorth(options, eventData) {
    return this.map.resetNorth(options, eventData);
  }

  //  Function resetNorthPitch()
  /**
   * Resets the map orientation so that north is up and pitch is set to 0°.
   * @function resetNorthPitch
   * @param {Object} [options] - Options for the reset.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  resetNorthPitch(options, eventData) {
    return this.map.resetNorthPitch(options, eventData);
  }

  //  Function resize()
  /**
   * Resizes the map to fit its container.
   * @function resize
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  resize(eventData) {
    return this.map.resize(eventData);
  }

  //  Function rotateTo()
  /**
   * Rotates the map to the specified bearing with an animated transition.
   * @function rotateTo
   * @param {number} bearing - The desired bearing (in degrees) to rotate the map to.
   * @param {Object} [options] - Options for the rotation.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  rotateTo(bearing, options, eventData) {
    return this.map.rotateTo(bearing, options, eventData);
  }

  //  Function setBearing()
  /**
   * Sets the map's bearing with an optional animated transition.
   * @function setBearing
   * @param {number} bearing - The desired bearing (in degrees) to set for the map.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  setBearing(bearing, eventData) {
    return this.map.setBearing(bearing, eventData);
  }

  //  Function setCenter()
  /**
   * Sets the map's center coordinates with an optional animated transition.
   * @function setCenter
   * @param {LngLatLike} center - The desired center coordinates to set for the map.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  setCenter(center, eventData) {
    return this.map.setCenter(center, eventData);
  }

  //  Function setEventedParent()
  /**
   * Sets the parent of the map's event emitter.
   * @function setEventedParent
   * @param {any} [parent] - The parent object to set for the event emitter.
   * @param {any} [data] - Additional data to pass to the parent.
   * @returns {this}
   */
  setEventedParent(parent, data) {
    return this.map.setEventedParent(parent, data);
  }

  //  Function setFeatureState()
  /**
   * Sets the state of a feature.
   * @function setFeatureState
   * @param {Object} feature - The feature to set the state for.
   * @param {Object} state - The state object to set for the feature.
   * @returns {this}
   */
  setFeatureState(feature, state) {
    return this.map.setFeatureState(feature, state);
  }

  //  Function setFilter()
  /**
   * Sets the filter for a specified layer.
   * @function setFilter
   * @param {string} layerId - The ID of the layer to set the filter for.
   * @param {Array} [filter] - The filter array to apply to the layer.
   * @param {Object} [options] - Options for the filter.
   * @returns {this}
   */
  setFilter(layerId, filter, options) {
    return this.map.setFilter(layerId, filter, options);
  }

  //  Function setGlyphs()
  /**
   * Sets the glyphs for the map's style.
   * @function setGlyphs
   * @param {string} glyphsUrl - The URL to the glyphs.
   * @param {Object} [options] - Options for setting the glyphs.
   * @returns {this}
   */
  setGlyphs(glyphsUrl, options) {
    return this.map.setGlyphs(glyphsUrl, options);
  }

  //  Function setLayerZoomRange()
  /**
   * Sets the zoom range for a specified layer.
   * @function setLayerZoomRange
   * @param {string} layerId - The ID of the layer to set the zoom range for.
   * @param {number} minzoom - The minimum zoom level for the layer.
   * @param {number} maxzoom - The maximum zoom level for the layer.
   * @returns {this}
   */
  setLayerZoomRange(layerId, minzoom, maxzoom) {
    return this.map.setLayerZoomRange(layerId, minzoom, maxzoom);
  }

  //  Function setLayoutProperty()
  /**
   * Sets a layout property for a specified layer.
   * @function setLayoutProperty
   * @param {string} layerId - The ID of the layer to set the layout property for.
   * @param {string} name - The name of the layout property to set.
   * @param {any} value - The value to set for the layout property.
   * @param {Object} [options] - Options for setting the layout property.
   * @returns {this}
   */
  setLayoutProperty(layerId, name, value, options) {
    return this.map.setLayoutProperty(layerId, name, value, options);
  }

  //  Function setLight()
  /**
   * Sets the light for the map's style.
   * @function setLight
   * @param {Object} light - The light object to set for the map.
   * @param {Object} [options] - Options for setting the light.
   * @returns {this}
   */
  setLight(light, options) {
    return this.map.setLight(light, options);
  }

  //  Function setMaxBounds()
  /**
   * Sets the maximum bounds for the map.
   * @function setMaxBounds
   * @param {Array} bounds - The maximum bounds for the map.
   * @returns {this}
   */
  setMaxBounds(bounds) {
    return this.map.setMaxBounds(bounds);
  }

  //  Function setMaxPitch()
  /**
   * Sets the maximum pitch for the map.
   * @function setMaxPitch
   * @param {number} maxPitch - The maximum pitch (in degrees) for the map.
   * @returns {this}
   */
  setMaxPitch(maxPitch) {
    return this.map.setMaxPitch(maxPitch);
  }

  //  Function setMaxZoom()
  /**
   * Sets the maximum zoom level for the map.
   * @function setMaxZoom
   * @param {number} maxZoom - The maximum zoom level for the map.
   * @returns {this}
   */
  setMaxZoom(maxZoom) {
    return this.map.setMaxZoom(maxZoom);
  }

  //  Function setMinPitch()
  /**
   * Sets the minimum pitch for the map.
   * @function setMinPitch
   * @param {number} minPitch - The minimum pitch (in degrees) for the map.
   * @returns {this}
   */
  setMinPitch(minPitch) {
    return this.map.setMinPitch(minPitch);
  }

  //  Function setMinZoom()
  /**
   * Sets the minimum zoom level for the map.
   * @function setMinZoom
   * @param {number} minZoom - The minimum zoom level for the map.
   * @returns {this}
   */
  setMinZoom(minZoom) {
    return this.map.setMinZoom(minZoom);
  }

  //  Function setPadding()
  /**
   * Sets padding for the map's container.
   * @function setPadding
   * @param {Object} padding - The padding object to set for the map's container.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  setPadding(padding, eventData) {
    return this.map.setPadding(padding, eventData);
  }

  //  Function setPaintProperty()
  /**
   * Sets a paint property for a specified layer.
   * @function setPaintProperty
   * @param {string} layerId - The ID of the layer to set the paint property for.
   * @param {string} name - The name of the paint property to set.
   * @param {any} value - The value to set for the paint property.
   * @param {Object} [options] - Options for setting the paint property.
   * @returns {this}
   */
  setPaintProperty(layerId, name, value, options) {
    return this.map.setPaintProperty(layerId, name, value, options);
  }

  //  Function setPitch()
  /**
   * Sets the map's pitch angle with an optional animated transition.
   * @function setPitch
   * @param {number} pitch - The desired pitch angle (in degrees) to set for the map.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  setPitch(pitch, eventData) {
    return this.map.setPitch(pitch, eventData);
  }

  //  Function setPixelRatio()
  /**
   * Sets the pixel ratio for the map.
   * @function setPixelRatio
   * @param {number} pixelRatio - The desired pixel ratio for the map.
   * @returns {this}
   */
  setPixelRatio(pixelRatio) {
    return this.map.setPixelRatio(pixelRatio);
  }

  //  Function setRenderWorldCopies()
  /**
   * Sets whether the map should render world copies when the center longitude is greater than or less than ±180 degrees.
   * @function setRenderWorldCopies
   * @param {boolean} renderWorldCopies - A boolean indicating whether to render world copies.
   * @returns {this}
   */
  setRenderWorldCopies(renderWorldCopies) {
    return this.map.setRenderWorldCopies(renderWorldCopies);
  }

  //  Function setSprite()
  /**
   * Sets the sprite for the map's style.
   * @function setSprite
   * @param {string} spriteUrl - The URL to the sprite.
   * @param {Object} [options] - Options for setting the sprite.
   * @returns {this}
   */
  setSprite(spriteUrl, options) {
    return this.map.setSprite(spriteUrl, options);
  }

  //  Function setTerrain()
  /**
   * Loads a 3D terrain mesh based on a "raster-dem" source.
   * @function setTerrain
   * @param {TerrainSpecification} options - Options object specifying the terrain source.
   * @returns {this}
   */
  setTerrain(options) {
    return this.map.setTerrain(options);
  }

  //  Function setTransformRequest()
  /**
   * Updates the requestManager's transform request with a new function.
   * @function setTransformRequest
   * @param {RequestTransformFunction} transformRequest - The callback function to update the transform request.
   * @returns {this}
   */
  setTransformRequest(transformRequest) {
    return this.map.setTransformRequest(transformRequest);
  }

  //  Function setZoom()
  /**
   * Sets the map's zoom level.
   * @function setZoom
   * @param {number} zoom - The zoom level to set (0-20).
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  setZoom(zoom, eventData) {
    return this.map.setZoom(zoom, eventData);
  }

  //  Function snapToNorth()
  /**
   * Snaps the map so that north is up (0° bearing), if the current bearing is close enough to it.
   * @function snapToNorth
   * @param {Object} [options] - Options for snapping to north.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  snapToNorth(options, eventData) {
    return this.map.snapToNorth(options, eventData);
  }

  //  Function stop()
  /**
   * Stops any animated transition underway.
   * @function stop
   * @returns {this}
   */
  stop() {
    return this.map.stop();
  }

  //  Function triggerRepaint()
  /**
   * Triggers the rendering of a single frame.
   * @function triggerRepaint
   * @returns {void}
   */
  triggerRepaint() {
    return this.map.triggerRepaint();
  }

  //  Function unproject()
  /**
   * Returns geographical coordinates corresponding to the specified pixel coordinates.
   * @function unproject
   * @param {PointLike} point - The pixel coordinates to unproject.
   * @returns {LngLat} The geographical coordinates corresponding to the specified pixel coordinates.
   */
  unproject(point) {
    return this.map.unproject(point);
  }

  //  Function updateImage()
  /**
   * Updates an existing image in the style's sprite.
   * @function updateImage
   * @param {string} id - The ID of the image to update.
   * @param {ImageBitmap | HTMLImageElement | ImageData | StyleImageInterface | object} image - The new image data.
   * @returns {this}
   */
  updateImage(id, image) {
    return this.map.updateImage(id, image);
  }

  //  Function zoomIn()
  /**
   * Increases the map's zoom level by 1.
   * @function zoomIn
   * @param {Object} [options] - Options for zooming in.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  zoomIn(options, eventData) {
    return this.map.zoomIn(options, eventData);
  }

  //  Function zoomOut()
  /**
   * Decreases the map's zoom level by 1.
   * @function zoomOut
   * @param {Object} [options] - Options for zooming out.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  zoomOut(options, eventData) {
    return this.map.zoomOut(options, eventData);
  }

  //  Function zoomTo()
  /**
   * Zooms the map to the specified zoom level with an animated transition.
   * @function zoomTo
   * @param {number} zoom - The zoom level to transition to.
   * @param {Object} [options] - Options for zooming to.
   * @param {any} [eventData] - Additional properties to be added to event objects of events triggered by this method.
   * @returns {this}
   */
  zoomTo(zoom, options, eventData) {
    return this.map.zoomTo(zoom, options, eventData);
  }

  // end maplibre methods

  /**
   * Adds a GeoJSON layer to the map.
   * @function addLayerGeoJSON
   * @param {Object} layer - Options for the GeoJSON layer to add.
   * @param {string} layer.id - Unique identifier for the layer.
   * @param {Object} layer.data - GeoJSON data for the layer.
   * @param {string} layer.type - Map layer type (e.g., 'symbol', 'circle', 'fill').   *
   * @param {Object} layer.layout - Layer layout configuration.
   * @param {Object} layer.paint - Layer paint configuration.
   * @param {string} layerPosition - Position of the layer: 'top', below 'labels' or below 'lines'.
   */
  addLayerGeoJSON(layer, layerPosition) {
    try {
      let keyLayer = this._dealOrderLayer(layerPosition);
      this.map.addSource(`${layer.id}`, {
        type: "geojson",
        data: layer.data,
      });
      this.map.addLayer(
        {
          id: `${layer.id}-layerIcgcMap`,
          type: layer.type,
          source: `${layer.id}`,
          layout: layer.layout,
          paint: layer.paint,
        },
        keyLayer
      );
    } catch (error) {
      console.error(`Error adding GeoJSON layer: ${error.message}`);
    }
  }
  /**
   * Adds a WMS layer to the map.
   * @function addLayerWMS
   
   * @param {string[]} tiles - Tiles for the raster layer.
   * @param {string} idLayer - Unique identifier for the layer.
   * @param {Object} options - Options of the layer: layout, paint and layerPosition.
   */

  addLayerWMS(tiles, idLayer, options) {
    try {
      let keyLayer = this._dealOrderLayer(options.layerPosition);
      if (options) {
        this.map.addSource(
          `${idLayer}`,
          {
            type: "raster",
            tiles: [tiles],
            tileSize: 256,
          },
          keyLayer
        );
        this.map.addLayer(
          {
            id: idLayer,
            type: "raster",
            source: idLayer,
            layout: options.layout,
            paint: options.paint,
          },
          keyLayer
        );
      } else {
        this.map.addSource(
          `${idLayer}`,
          {
            type: "raster",
            tiles: [tiles],
            tileSize: 256,
          },
          keyLayer
        );
        this.map.addLayer(
          {
            id: idLayer,
            type: "raster",
            source: idLayer,
            paint: {},
          },
          keyLayer
        );
      }
      // });
    } catch (error) {
      console.error(`Error adding WMS layer: ${error.message}`);
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
   */
  addLogo(options) {
    try {
      let mapId = document.getElementById("map");
      let logosDiv;
      logosDiv = document.createElement("div");
      logosDiv.id = "logos";
      mapId.appendChild(logosDiv);

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
     
      const handleClick = (base) => {
        this.map.setStyle(base);
      };
      let mapId = document.getElementById("map");
      let menuGroup;
      menuGroup = document.createElement("div");
      menuGroup.id = "basemap-group";
      menuGroup.classList.add = "filter-group";
      mapId.appendChild(menuGroup);
      const basemapGroup = document.getElementById("basemap-group");

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
        map.setStyle(base.url);
      };
      let mapId = document.getElementById("map");
      let menuGroup;
      menuGroup = document.createElement("div");
      menuGroup.id = "basemap-group";
      menuGroup.classList.add = "basemap-group";
      mapId.appendChild(menuGroup);

      const basemapGroup = document.getElementById("basemap-group");
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
   * @param {string} idLayer - name of the layer
   * @param {objetc} queryFields - optional indications for the popup
   * @param {objetc} popupStyle - optional indications for the popup style
   */
  addFeatureQuery(idLayer, queryFields, popupStyle) {
    try {
      let description;
      this.map.on("mouseenter", idLayer, () => {
        this.map.getCanvas().style.cursor = "pointer";
      });
      this.map.on("mouseleave", idLayer, () => {
        this.map.getCanvas().style.cursor = "";
      });
      this.map.on("click", (e) => {
        let features = this.map.queryRenderedFeatures(e.point);
        if (features && features[0].source.includes(idLayer)) {
          let coordinates = [e.lngLat.lng, e.lngLat.lat];
          if (
            queryFields !== undefined &&
            queryFields.length > 0 &&
            queryFields !== "all"
          ) {
            if (queryFields !== null) {
              let text = "";
              queryFields.forEach((prop) => {
                let pr = features[0].properties[prop];
                text = text + `<h4>${pr}</h4>`;
              });
              description = text;
              this.addPopup(coordinates, description, popupStyle);
            }
          } else {
            let text = "";
            for (const key in features[0].properties) {
              text +=
                "<b>" + key + "</b>:" + features[0].properties[key] + "<br>";
            }
            description = text;
            this.addPopup(coordinates, description, popupStyle);
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
          Local: "ca",
        };
        position = "top-right";
      }
      this.map.addControl(new MaplibreExportControl(options), position);
      //© NARWASSCO, Ltd. ©Mapbox ©OpenStreetMap contributors, Powered by the United Nations Vector Tile Toolkit
    } catch (error) {
      console.error(`Error adding export control: ${error.message}`);
    }
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
        popup = new maplibregl.Popup({ offset: options.textOffset }).setHTML(
          options.text
        );
        marker = new maplibregl.Marker(options.options)
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
      if (popupStyle.image === undefined) {
        let popup = new maplibregl.Popup()
          .setLngLat(coord)
          .setHTML(
            `
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
      `
          )
          .addTo(this.map);
        return popup;
      } else {
        let popup = new maplibregl.Popup()
          .setLngLat(coord)
          .setHTML(
            `
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
      `
          )
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
    try {
      let menuLabel;
      if (name.includes("-userFieldFilter-")) {
        menuLabel = name.split("-userFieldFilter-")[0];
      } else {
        menuLabel = name;
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
      let mapId = document.getElementById("map");
      let menuGroup = document.createElement("nav");
      menuGroup.id = "filter-group";
      mapId.appendChild(menuGroup);
      const filterGroup = document.getElementById("filter-group");
      this.map.addSource(`${options.id}`, {
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
      this.map.addControl(new maplibregl.AttributionControl(options), position);
    } catch (error) {
      console.error(`Error adding attribution control: ${error.message}`);
    }
  }

  /**
   * Adds an ICGC image layer to the map based on the specified name and year.
   * @function addImageLayerICGC
   * @param {string} url - The url of the  layer.
   * @param {string} idLayer - The user id for the  layer.
   * @param {object} options - Type, position,layout and paint options for the layer
   */
  addImageLayerICGC(url, idLayer, options) {
    try {
      let idName = null;
      let layerPosition;
      let exportOptions;
      if (options) {
        exportOptions = options;
        layerPosition = options.layerPosition;
      } else {
        exportOptions = {
          type: "raster",
          layout: {
            visibility: "visible",
          },
          paint: {
            "raster-opacity": 1,
          },
          layerPosition: ORDER_LAYER_SYMBOL,
        };
      }
      idName = this._findImageType(
        url,
        Layers.Orto,
        Layers.VectorAdmin,
        Layers.WMS,
        Layers.Vector
      );
      if (!idName) {
        console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          url,
          "font-weight: bold; font-style: italic;"
        );
      }
      let sourceWMS = {
        id: idLayer,
        tiles: url,
      };
      // this.addLayerWMS(sourceWMS, layerPosition, exportOptions);
      this.addLayerWMS(url, idLayer, exportOptions);
    } catch (error) {
      console.error(`Error adding ICGC image layer: ${error.message}`);
    }
  }
  /**
   * Adds an ICGC vector layer to the map based on the specified name and year.
   * @function addVectorLayerICGC
   * @param {string} url - The url of the vector layer.
   * @param {string} idLayer - The user id for the vector layer.
   * @param {object} options - Type, position,layout and paint options for the layer
   *
   */
  async addVectorLayerICGC(url, idLayer, options) {
    try {
      let {
        type = "line",
        layerPosition = ORDER_LAYER_SYMBOL,
        layoutOptions = { visibility: "visible" },
        paintOption,
      } = options || {};

      let keyLayer = this._dealOrderLayer(layerPosition);

      if (!url) {
        console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          url,
          "font-weight: bold; font-style: italic;"
        );
        return;
      }

      if (url.includes("https")) {
        let sourceName = this._getKeyByUrlVector(url);
        this.map.addSource(sourceName, {
          type: "vector",
          url: url,
        });

        let layerOptions = {
          id: sourceName,
          type: "fill",
          source: sourceName,
          "source-layer": "cobertes",
          maxzoom: 18,
          layout: options.layout,
          paint: Legends.cobertesSol,
        };

        if (sourceName === "cobertes2018") {
          this.map.addLayer(layerOptions, keyLayer);
        }

        if (layoutOptions.visibility === "visible") {
          let legendUrl = this._getLegendByName(sourceName);
          // console.info("legendUrl", legendUrl);
          // console.info("sourceName", sourceName);
          this.addLegend(legendUrl, sourceName);
        }
      } else {
        let sourceLimits = idLayer;
        this.map.addSource(sourceLimits, {
          type: "vector",
          url: defaultOptions.limitsUrl,
        });

        let layerOptions = {
          id: idLayer,
          type: type,
          source: sourceLimits,
          "source-layer": url,
          layout: options.layout,
          paint: options.paint || {},
        };

        if (type === "fill" || type === "polygon") {
          layerOptions.paint = paintOption || {
            "fill-color": "#0000FF",
            "fill-opacity": 0,
          };
        } else if (type === "line") {
          layerOptions.paint = paintOption || {
            "line-color": "#4832a8",
            "line-opacity": 1,
            "line-width": 1,
          };
        }

        this.map.addLayer(layerOptions, keyLayer);
      }
    } catch (error) {
      console.error(`Error adding ICGC vector layer: ${error.message}`);
    }
  }

  /**
   * Adds an ICGC FGB layer to the map based on the specified name and year.
   * @function addFGBLayerICGC
   * @param {string} url - The url of the FGB layer.
   * @param {string} idLayer - Id for the layer.
   * @param {object} options - Paint option for the layer
   *
   */
  async addFGBLayerICGC(url, idLayer, options) {
    try {
      if (!options) {
        (options.layout = { visibility: true }),
          (options.paint = {
            "line-color": "#4832a8",
            "line-opacity": 1,
            "line-width": 1,
          }),
          (options.type = "lines"),
          (options.layerPosition = "labels");
      }
      let keyLayer = this._dealOrderLayer(options.layerPosition);

      const response = await fetch(url);
      const fc = { type: "FeatureCollection", features: [] };
      for await (const f of deserialize(response.body)) fc.features.push(f);
      let src = idLayer;
      this.map.addSource(src, {
        type: "geojson",
        data: fc,
      });
      if (url.includes("text")) {
        this.map.addLayer(
          {
            id: idLayer,
            type: "symbol",
            source: src,
            layout: {
              "text-letter-spacing": 0.1,
              "text-size": {
                base: 1.2,
                stops: [
                  [8, 0],
                  [12, 14],
                  [15, 15],
                ],
              },
              "text-font": ["FiraSans-Regular"],
              "text-field": ["get", "NOM_AC"],
              "text-transform": "none",
              "text-max-width": 25,
              visibility: options.layout.visibility,
              "text-justify": "right",
              "text-anchor": "top",
              "text-allow-overlap": false,
              "symbol-spacing": 2,
              "text-line-height": 1,
            },
            paint: {
              "text-halo-blur": 0.5,
              "text-color": "rgba(90, 7, 7, 1)",
              "text-halo-width": 2,
              "text-halo-color": "rgba(255, 255, 255,0.8)",
            },
          },
          keyLayer
        );
      } else {
        this.map.addLayer(
          {
            id: idLayer,
            type: options.type,
            source: src,
            layout: options.layout,
            paint: options.paint,
          },
          keyLayer
        );
      }
    } catch (error) {
      console.error(`Error adding ICGC FGB layer: ${error.message}`);
    }
  }
  /**
   * Adds 3D terrain to the map using hillshade.
   * @function addTerrainICGC
   * @param {string} url - dataset url of the terrain
   * @param {string} controlPosition - Position to add the control on the map.
   */
  addTerrainICGC(url, controlPosition) {
    try {
      let op;
      for (const key in Terrains) {
        if (Terrains.hasOwnProperty(key)) {
          const objeto = Terrains[key];
          if (objeto === url) {
            op = objeto;
          }
        }
      }
      let urlTerrainICGC = op;
      if (this.getSource("terrainICGC") !== undefined) {
        let lyrs = this.getStyle().layers;
        lyrs.forEach((element) => {
          if (element.source === "terrainICGC") {
            this.removeLayer(element.id);
          }
        });
        this.removeSource("terrainICGC");
      }
      if (this.getSource("terrainICGC") === undefined) {
        if (url.includes("terrarium")) {
          this.map.addSource("terrainICGC", {
            type: "raster-dem",
            tiles: [urlTerrainICGC],
            tileSize: 512,
            encoding: "terrarium",
            maxzoom: 16,
          });
        } else {
          this.map.addSource("terrainICGC", {
            type: "raster-dem",
            tiles: [urlTerrainICGC],
            tileSize: 512,
            maxzoom: 16,
          });
        }
      }
      this.map.setTerrain({
        source: "terrainICGC",
        exaggeration: 1.5,
      });
      if (controlPosition === undefined || controlPosition === null) {
      } else {
        this.map.addControl(
          new Pitch3DToggleControl({
            pitch: 90,
            bearing: null,
            minpitchzoom: null,
          }),
          controlPosition
        );
      }
    } catch (error) {
      console.error(`Error adding 3D terrain: ${error.message}`);
    }
  }
  /**
   * Add image legend.
   * @function addLegend
   * @param {string} url - image legend url.
   * @param {string} idLayer - layer's name.
   */
  addLegend(url, idLayer) {
    try {
      this.map.addControl(new LegendControl({ url, idLayer }));
    } catch (error) {
      console.error(`Error adding legend: ${error.message}`);
    }
  }

  //Internal methods
  /**
   * Finds the type of image based on the provided URL and specified vectors.
   * @function _findImageType
   * @param {string} url - The URL of the image to find the type for.
   * @param {Object} var1 - The first vector object containing key-value pairs.
   * @param {Object} var2 - The second vector object containing key-value pairs.
   * @param {Object} var3 - The third vector object containing key-value pairs.
   * @param {Object} var4 - The fourth vector object containing key-value pairs.
   * @returns {string|null} - The type of image if found, otherwise null.
   */
  _findImageType(url, var1, var2, var3, var4) {
    const vectors = [var1, var2, var3, var4];
    for (const vector of vectors) {
      for (const [key, value] of Object.entries(vector)) {
        if (value === url) {
          return key;
        }
      }
    }
    return null;
  }
  /**
   * Gets the key by URL from the FGBAdmin layers.
   * @function _getKeyByUrlFGB
   * @param {string} url - The URL to find the key for in the FGBAdmin layers.
   * @returns {string|null} - The key if found, otherwise null.
   */
  _getKeyByUrlFGB(url) {
    for (const key in Layers.FGBAdmin) {
      if (Layers.FGBAdmin.hasOwnProperty(key) && Layers.FGBAdmin[key] === url) {
        return key;
      }
    }
    return null;
  }
  /**
   * Gets the legend by name from the default vector layers.
   * @function _getLegendByName
   * @param {string} name - The name of the vector layer to get the legend for.
   * @returns {string|null} - The legend if found, otherwise null.
   */
  _getLegendByName(name) {
    for (const layerKey in defaultOptions.vectorLayers) {
      const layer = defaultOptions.vectorLayers[layerKey];
      if (layer.key === name) {
        return layer.legend;
      }
    }
    return null;
  }
  /**
   * Gets the key by URL from the Vector layers.
   * @function _getKeyByUrlVector
   * @param {string} url - The URL to find the key for in the Vector layers.
   * @returns {string|null} - The key if found, otherwise null.
   */
  _getKeyByUrlVector(url) {
    for (const key in Layers.Vector) {
      if (Layers.Vector.hasOwnProperty(key) && Layers.Vector[key] === url) {
        return key;
      }
    }
    return null;
  }
  /**
   * Raises text 3D style on the map.
   * @function _raiseText3DStyle
   * @async
   * @returns {Promise<void>} - A promise that resolves after updating the text 3D style on the map.
   */
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

  /**
   * Deals with map styles based on the name.
   * @function _dealStyleMaps
   * @param {string} name - The name of the map style.
   * @returns {Object|string|null} - The map style object if found, or the input name if not found, or null if an error occurs.
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
   * Deals with the 3D ortho style based on the name.
   * @function _dealOrto3dStyle
   * @param {string} name - The name of the orto3D style.
   * @returns {void|null} - Returns null if an error occurs.
   */
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
        this.map.setSky({
          'sky-color': '#86bbd5',
          'sky-horizon-blend': 0.3,
          'horizon-color': '#ffffff33',
          'horizon-fog-blend': 0.1,
          'fog-ground-blend': 0.75,
          'fog-color': '#c5d6d6'
        });
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
  /**
   * Deals with the order of the layer.
   * @function _dealOrderLayer
   * @param {string} order - The order of the layer.
   * @returns {string} - The id of the first symbol layer if the order is 'symbol', the id of the first line layer if the order is 'line', otherwise an empty string.
   */
  _dealOrderLayer(order) {
    if (order === ORDER_LAYER_SYMBOL) {
      return this._firstSymbolLayer();
    } else if (order === ORDER_LAYER_LINE) {
      return this._firstLineLayer();
    } else {
      return "";
    }
  }
  /**
   * Retrieves the id of the first symbol layer.
   * @function _firstSymbolLayer
   * @returns {string|undefined} - The id of the first symbol layer if found, otherwise undefined.
   */
  _firstSymbolLayer() {
    try {
      const layers = this.map.getStyle().layers;
      let firstSymbolId;
      for (let i = 0; i < layers.length; i++) {
        if (
          layers[i].type === "symbol" &&
          layers[i].id.indexOf("contour") === -1 &&
          layers[i].id.indexOf("water") === -1
        ) {
          // console.info(layers[i].id);
          firstSymbolId = layers[i].id;
          break;
        }
      }
      return firstSymbolId;
    } catch (error) {
      console.error(`Error getting first symbol layer: ${error.message}`);
    }
  }
  /**
   * Retrieves the id of the first line layer.
   * @function _firstLineLayer
   * @returns {string|undefined} - The id of the first line layer if found, otherwise undefined.
   */
  _firstLineLayer() {
    try {
      const layers = this.map.getStyle().layers;
      let firsLineId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === "line") {
          firsLineId = layers[i].id;
          break;
        }
      }
      return firsLineId;
    } catch (error) {
      console.error(`Error getting first symbol layer: ${error.message}`);
    }
  }
  /**
   * Creates a Mapbox layer for displaying cities in 3D.
   * @function _createCitiesMapboxLayer
   * @returns {MapboxLayer|null} - The Mapbox layer for displaying cities in 3D if created successfully, otherwise null.
   */
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
}
