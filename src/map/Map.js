import maplibregl from "maplibre-gl";
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
import "@watergis/maplibre-gl-export/dist/maplibre-gl-export.css";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import LogoControl from "../controls/LogoControl.js";
import LegendControl from "../controls/LegendControl.js";
import MouseCoordinatesControl from "../controls/MouseCoordinatesControl.js";
import Terrains from "../constants/Terrains.js";
import Styles from "../constants/Styles.js";
import Layers from "../constants/Layers.js";
import Legends from "../constants/Legends.js";
import defaultOptions from "../config.js";
const ORDER_LAYER_TOP = "top";
const ORDER_LAYER_LINE = "lines";
const ORDER_LAYER_SYMBOL = "labels";
export default class Map {
  /**
   * Constructor for the Map class.
   * @param {Object} options - Options to initialize the map.
   */
  constructor(options) {
    this.initTheMap(options);
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
    this.map = new maplibregl.Map(options);
    this.map.options = options;
    this.map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
      })
    );
    this.map.on("load", async () => {
      const nameStyle = this.map.getStyle().name;
      const urlName = this.map.options.style;
      if (window.document.querySelector(".maplibregl-compact-show")) {
        var element = window.document.querySelector(".maplibregl-compact-show");
        element.classList.remove("maplibregl-compact-show");
      }
      this.map.addControl(
        new LogoControl({
          color: urlName.indexOf("orto") === -1 ? true : false,
          defaultOptions: defaultOptions,
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
   * @param {string} name - The geometry name (e.g., 'buildings').
   * @param {Object} options - Additional options for configuring the layer.
   */
  async fetchData(url, name, options) {
    try {
      let layerPosition = options.layerPosition;
      if (url.includes(".fgb")) {
        this.addFGBLayerICGC(url, layerPosition, null, options);
      } else {
        const response = await fetch(url);
        const geojson = await response.json();
        let nameUser = name;
        let keyLayer = this._dealOrderLayer(layerPosition);
        let type = geojson.features[0].geometry.type;
        if (type.includes("ine")) {
          if (options !== undefined) {
            map.addLayer(
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
            map.addLayer(
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
            map.addLayer(
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
            map.addLayer(
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
            map.addLayer(
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
            map.addLayer(
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
   * @param {string} name - The geometry name (e.g., 'buildings').
   * @param {string} featureTree - Import all features as unique or group based on a field ('all', 'field').
   * @param {Object} options - Additional options for configuring the layer.
   */
  async fetchDataAndMenu(url, name, featureTree, options) {
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
          let src = name;
          this.map.addSource(src, {
            type: "geojson",
            data: fc,
          });
          if (url.includes("text")) {
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: name,
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
                  id: name,
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
            let textLayer = name + "Text";
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
        if (featureTree === "all") {
          if (type.includes("ine")) {
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: name,
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
                },
                keyLayer
              );
            }
          }
          if (type.includes("olygon")) {
            if (options !== undefined) {
              this.map.addLayer(
                {
                  id: name,
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
                  id: name,
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
                  id: name,
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
                  id: name,
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
          this.addMenuItem(name);
        } else {
          let field = featureTree;
          const layers = {};
          geojson.features.forEach((feature) => {
            const fieldMarker = feature.properties[field];
            const idFieldMarker = fieldMarker + `-userFieldFilter-` + name;
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
   * Retrieves the bounds of the map.
   * @function getBounds
   */
  getBounds() {
    try {
      return this.map.getBounds();
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
      return this.map.setTerrain(options);
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
          type: layer.layerType,
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
   * @param {Object} layer - Options for the WMS layer to add.
   * @param {string} layer.id - Unique identifier for the layer.
   * @param {string} layer.type - Type of layer ('raster').
   * @param {string[]} layer.tiles - Tiles for the raster layer.
   * @param {string} layerPosition - Position of the layer: 'top', below 'labels' or below 'lines'.
   * @param {Object} exportOptions - Options of the layer: type, layout, paint.
   */
  addLayerWMS(layer, layerPosition, exportOptions) {
    try {
      let keyLayer = this._dealOrderLayer(layerPosition);
      if (exportOptions) {
        this.map.addSource(
          `${layer.id}`,
          {
            type: exportOptions.type || "raster",
            tiles: [layer.tiles],
            tileSize: 256,
          },
          keyLayer
        );
        this.map.addLayer(
          {
            id: layer.id,
            type: exportOptions.type,
            source: layer.id,
            layout: exportOptions.layout,
            paint: exportOptions.paint,
          },
          keyLayer
        );
      } else {
        this.map.addSource(
          `${layer.id}`,
          {
            type: "raster",
            tiles: [layer.tiles],
            tileSize: 256,
          },
          keyLayer
        );
        this.map.addLayer(
          {
            id: layer.id,
            type: "raster",
            source: layer.id,
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
      const handleClick = (base) => {
        map.setStyle(base);
      };
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
   * @param {string} layerName - name of the layer
   * @param {objetc} options - optional indications for the popup
   * @param {objetc} popupStyle - optional indications for the popup style
   */
  addFeatureQuery(layerName, options, popupStyle) {
    try {
      let description;
      this.map.on("mouseenter", layerName, () => {
        this.map.getCanvas().style.cursor = "pointer";
      });
      this.map.on("mouseleave", layerName, () => {
        this.map.getCanvas().style.cursor = "";
      });
      this.map.on("click", (e) => {
        let features = this.map.queryRenderedFeatures(e.point);
        if (features && features[0].source.includes(layerName)) {
          let coordinates = [e.lngLat.lng, e.lngLat.lat];
          if (
            options !== undefined &&
            options.length > 0 &&
            options !== "all"
          ) {
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
      this.map.addControl(new MaplibreExportControl(options), position);
      //© NARWASSCO, Ltd. ©Mapbox ©OpenStreetMap contributors, Powered by the United Nations Vector Tile Toolkit
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
      new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(text)
        .addTo(this.map);
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
   * @param {string} name - The url of the layer.
   */
  addImageLayerICGC(idLayer, name, options) {
    try {
      let idName = null;
      let position;
      let exportOptions;
      if (options) {
        exportOptions = options;
        position = options.position;
      } else {
        exportOptions = {
          type: "raster",
          layout: {
            visibility: "visible",
          },
          paint: {
            "raster-opacity": 1,
          },
          position: ORDER_LAYER_SYMBOL,
        };
      }
      idName = this_findImageType(
        name,
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
          name,
          "font-weight: bold; font-style: italic;"
        );
      }
      let sourceWMS = {
        id: idLayer,
        tiles: name,
      };
      this.addLayerWMS(sourceWMS, position, exportOptions);
    } catch (error) {
      console.error(`Error adding ICGC image layer: ${error.message}`);
    }
  }
  /**
   * Adds an ICGC vector layer to the map based on the specified name and year.
   * @function addVectorLayerICGC
   * @param {string} idLayer - The user id for the vector layer.
   * @param {string} layerUrl - The url of the vector layer.
   * @param {object} options - Type, position,layout and paint options for the layer
   *
   */
  async addVectorLayerICGC(idLayer, layerUrl, options) {
    try {
      let position;
      let layoutOptions;
      let paintOption;
      let type;
      let keyLayer = "";
      let name = layerUrl;
      if (options) {
        type = options.type || "line";
        position = options.position || "top";
        layoutOptions = options.layout;
        paintOption = options.paint;
      } else {
        type = "line";
        position = ORDER_LAYER_SYMBOL;
        layoutOptions = {
          visibility: "visible",
        };
        paintOption = {
          "line-color": "#fcfcfc",
          "line-width": 0.2,
        };
      }
      keyLayer = this._dealOrderLayer(position);
      if (!name) {
        console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          name,
          "font-weight: bold; font-style: italic;"
        );
      } else {
        if (layerUrl.includes("https")) {
          let name = this._getKeyByUrlVector(layerUrl);
          this.map.addSource(name, {
            type: "vector",
            url: layerUrl,
          });
          if (name === "cobertes2018") {
            map.addLayer(
              {
                id: name,
                type: "fill",
                source: name,
                "source-layer": "cobertes",
                maxzoom: 18,
                layout: layoutOptions,
                paint: Legends.cobertesSol,
              },
              keyLayer
            );
          }
          //addLegend
          let legendUrl = this._getLegendByName(name);
          if (layoutOptions.visibility === "visible") {
            map.addLegend(name, legendUrl);
          }
        } else {
          let sourceLimits = idLayer;
          this.map.addSource(sourceLimits, {
            type: "vector",
            url: defaultOptions.limitsUrl,
          });
          if (type === "fill" || type === "polygon") {
            if (paintOption) {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "fill",
                  source: sourceLimits,
                  "source-layer": name,
                  layout: layoutOptions,
                  paint: paintOption,
                },
                keyLayer
              );
            } else {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "fill",
                  source: sourceLimits,
                  "source-layer": name,
                  layout: layoutOptions,
                  paint: {
                    "fill-color": "#0000FF",
                    "fill-opacity": 0,
                  },
                },
                keyLayer
              );
            }
          }
          if (type === "line") {
            if (paintOption) {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "line",
                  source: sourceLimits,
                  "source-layer": name,
                  layout: layoutOptions,
                  paint: paintOption,
                },
                keyLayer
              );
            } else {
              this.map.addLayer(
                {
                  id: idLayer,
                  type: "line",
                  source: sourceLimits,
                  layout: layoutOptions,
                  "source-layer": name,
                  paint: {
                    "line-color": "#4832a8",
                    "line-opacity": 1,
                    "line-width": 1,
                  },
                },
                keyLayer
              );
            }
          }
        }
      }
    } catch (error) {
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
    try {
      let visibleLabel = "visible";
      let keyLayer = this._dealOrderLayer(position);
      let name = this._getKeyByUrlFGB(layerUrl);
      if (name === null) {
        name = "userFGB";
      } else {
      }
      const response = await fetch(layerUrl);
      const fc = { type: "FeatureCollection", features: [] };
      for await (const f of deserialize(response.body)) fc.features.push(f);
      let src = name;
      this.map.addSource(src, {
        type: "geojson",
        data: fc,
      });
      if (layerUrl.includes("text")) {
        this.map.addLayer(
          {
            id: name,
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
      } else {
        this.map.addLayer(
          {
            id: name + "-fill",
            type: "fill",
            source: src,
            paint: {
              "fill-color": "#0000FF",
              "fill-opacity": 0,
            },
          },
          keyLayer
        );
        this.map.addLayer(
          {
            id: name + "-underline",
            type: "line",
            source: src,
            paint: {
              "line-color": "#ffffff",
              "line-opacity": 1,
              "line-width": 3,
            },
          },
          keyLayer
        );
        if (paintOption) {
          this.map.addLayer(
            {
              id: name + "-line",
              type: "line",
              source: src,
              paint: paintOption,
            },
            keyLayer
          );
        } else {
          this.map.addLayer(
            {
              id: name + "-line",
              type: "line",
              source: src,
              paint: {
                "line-color": "#4832a8",
                "line-opacity": 1,
                "line-width": 1,
              },
            },
            keyLayer
          );
        }
        let textLayer = name + "Text";
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
    try {
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
        if (resolution.includes("terrarium")) {
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
      if (positionButton === undefined) {
        positionButton = "top-right";
      }
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
  }
  /**
   * Add image legend.
   * @function addLegend
   * @param {string} name - layer's name.
   * @param {string} legendUrl - image legend url.
   */
  addLegend(name, legendUrl) {
    try {
      this.map.addControl(new LegendControl({ name, legendUrl }));
    } catch (error) {
      console.error(`Error adding legend: ${error.message}`);
    }
  }
  //Internal methods
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
  _getKeyByUrlFGB(url) {
    for (const key in Layers.FGBAdmin) {
      if (Layers.FGBAdmin.hasOwnProperty(key) && Layers.FGBAdmin[key] === url) {
        return key;
      }
    }
    return null;
  }
  _getLegendByName(name) {
    for (const layerKey in defaultOptions.vectorLayers) {
      const layer = defaultOptions.vectorLayers[layerKey];
      if (layer.key === name) {
        return layer.legend;
      }
    }
    return null;
  }
  _getKeyByUrlVector(url) {
    for (const key in Layers.Vector) {
      if (Layers.Vector.hasOwnProperty(key) && Layers.Vector[key] === url) {
        return key;
      }
    }
    return null;
  }
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
  _dealOrderLayer(order) {
    if (order === ORDER_LAYER_SYMBOL) {
      return this._firstSymbolLayer();
    } else if (order === ORDER_LAYER_LINE) {
      return this._firstLineLayer();
    } else {
      return "";
    }
  }
  _firstSymbolLayer() {
    try {
      const layers = this.map.getStyle().layers;
      let firstSymbolId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol") {
          firstSymbolId = layers[i].id;
          break;
        }
      }
      return firstSymbolId;
    } catch (error) {
      console.error(`Error getting first symbol layer: ${error.message}`);
    }
  }
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
