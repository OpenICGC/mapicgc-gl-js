import maplibregl from "maplibre-gl";
// import flatgeobuf from "flatgeobuf";
import defaultOptions from "../config.js";

// import { MapLibreSearchControl } from "@stadiamaps/maplibre-search-box";
// import "@stadiamaps/maplibre-search-box/dist/style.css";

/**
 * Class representing a custom map with additional functions.
 */
export default class Map {
  /**
   * Constructor for the Map class.
   * @param {Object} options - Options to initialize the map.
   */

  constructor(options) {
    let arrayUserOptions = Object.getOwnPropertyNames(options);
    if (arrayUserOptions) {
      arrayUserOptions.forEach((el) => {
        if (el === "style") {
          options[el] = this._dealStyleMaps(options[el]);
        } else {
          options[el] = options[el];
        }
      });
    }
    if (!options) {
      options = defaultOptions.mapOptions;
    } else {
      for (const key in defaultOptions.mapOptions) {
        if (!options.hasOwnProperty(key)) {
          // console.log('key', key)
          options[key] = defaultOptions.mapOptions[key];
        }
      }
    }

    options.maxZoom = 18;
    options.maxPitch = 85;
    options.maplibreLogo = false;
    options.attributionControl = false;

    this.map = new maplibregl.Map(options);
  }

  /**
   * Sets the center of the map to the provided coordinates.
   * @function setCenter
   * @param {Array} coordinates - Coordinates to center the map: [1.3119, 41.489]
   */
  setCenter(coordinates) {
    try {
      this.map.setCenter(coordinates);
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
   * Adds a logo to the map.
   * @function addLogo
   * @param {Object} options - Options for the logo to add.
   * @param {string} options.id - Unique identifier for the logo.
   * @param {string} options.url - URL of the logo image.
   * @param {string} options.href - URL to navigate to when the logo is clicked.
   */
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
   * @function addBasemaps
   * @param {Object[]} baseLayers - Array of base layer objects.
   * @param {string} baseLayers.label - Label for the base layer.
   * @param {string} baseLayers.image - URL of the image representing the base layer.
   * @param {string} baseLayers.url - URL of the base layer style.
   */
  addBasemaps(baseLayers) {
    try {
      const handleClick = (base) => {
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
   * Adds an export control to the map.
   * @function addExportControl
   */
  addExportControl() {
    try {
      this.map.addControl(
        new MaplibreExportControl.MaplibreExportControl({
          PageSize: MaplibreExportControl.Size.A4,
          PageOrientation: MaplibreExportControl.PageOrientation.Landscape,
          Format: MaplibreExportControl.Format.PNG,
          DPI: MaplibreExportControl.DPI[300],
          Crosshair: true,
          PrintableArea: true,
          Local: "en",
        }),
        "top-right"
      );
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
   * @param {LngLatLike} options.coord - Coordinates for placing the popup.
   * @param {string} options.text - HTML content for the popup.
   * @returns {Object} - Instance of the added popup.
   */
  addPopup(options) {
    try {
      let popup = new maplibregl.Popup()
        .setLngLat(options.coord)
        .setHTML(options.text)
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
  addFullScreen() {
    try {
      this.map.addControl(new maplibregl.FullscreenControl());
    } catch (error) {
      console.error(`Error adding fullscreen control: ${error.message}`);
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
   * @returns {Object} - Instance of the created navigation control.
   */
  /**
   * Creates a navigation control with the provided options.
   * @function createNavigationControl
   * @param {Object} options - Options for the navigation control.
   * @returns {Object} - Instance of the created navigation control.
   */
  createNavigationControl(options) {
    try {
      return new maplibregl.NavigationControl(options);
    } catch (error) {
      console.error(`Error creating navigation control: ${error.message}`);
      return null;
    }
  }

  /**
   * Adds a navigation control to the map with the provided options.
   * @function addNavigationControl
   * @param {Object} options - Options for the navigation control.
   */
  addNavigationControl(options) {
    try {
      const navigationControl = this.createNavigationControl(options);
      if (navigationControl) {
        this.map.addControl(navigationControl);
      }
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
      for (const style of defaultOptions.baseStyles) {
        if (style.name === name) {
          return style.url;
        }
      }
      return defaultOptions.baseStyles[0].url;
    } catch (error) {
      console.error(`Error dealing with map styles: ${error.message}`);
      return null;
    }
  }

  /**
   * Adds an ICGC image layer to the map based on the specified name and year.
   * @function addImageLayerICGC
   * @param {string} name - The name of the layer. Mandatory. options: 'orto', 'geo', 'slope', 'dem', 'relleu', etc.
   * @param {string} year - The year of the image layer (optional, applicable only for certain layers like 'orto').
   */
  addImageLayerICGC(name, year) {
    try {
      let finalName;
      let yearUrl;
      let layer;
      if (
        name.includes("orto") ||
        name.includes("geol") ||
        name.includes("relleu")
      ) {
        if (name.includes("orto")) {
          if (year !== undefined) {
            finalName = name + year;

            let op = defaultOptions.ortoLayersICGC.find(
              (objeto) => objeto.key === finalName
            );
            if (!op) {
              console.log(
                "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
                "font-weight: bold; font-style: italic;",
                "font-weight: normal; font-style: normal; color: red;",
                finalName,
                "font-weight: bold; font-style: italic;"
              );
            }
            yearUrl = op.text;
            layer = "ortofoto_color_" + yearUrl;

            let sourceWMS = {
              id: finalName,
              tiles: `https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=${layer}`,
            };
            this.addLayerWMS(sourceWMS);
          } else {
            let sourceWMS = {
              id: name + "Actual",
              tiles:
                "https://geoserveis.icgc.cat/icc_mapesmultibase/noutm/wmts/orto/GRID3857/{z}/{x}/{y}.png",
            };
            this.addLayerWMS(sourceWMS);
          }
        }

        if (name.includes("relleu")) {
          let sourceWMS = {
            id: name + "Actual",
            tiles:
              "https://tilemaps.icgc.cat/mapfactory/wmts/relleu/CAT3857/{z}/{x}/{y}.png",
          };
          this.addLayerWMS(sourceWMS);
        }
        if (name.includes("geol")) {
          let sourceWMS = {
            id: name + "Actual",
            tiles:
              "https://tilemaps.icgc.cat/mapfactory/wmts/geologia/MON3857NW/{z}/{x}/{y}.png",
          };
          this.addLayerWMS(sourceWMS);
        }
      } else {
        //if not includes geol, orto, relleu...
        console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          name,
          "font-weight: bold; font-style: italic;"
        );
      }
    } catch (error) {
      console.error(`Error adding ICGC image layer: ${error.message}`);
    }
  }

  /**
   * Adds an ICGC vector layer to the map based on the specified name and year.
   * @function addVectorLayerICGC
   * @param {string} name - The name of the vector layer.
   * @param {string} year - The year associated with the vector layer (optional).
   */
  async addFGBLayerICGC(name, year) {
    try {
      let op = defaultOptions.vectorLayersICGC.find((objeto) =>
        objeto.key.includes(name)
      );
      if (!op) {
        // console.log(`❌ The layer: <i><b>${name}</b></i> does not exist in the ICGC DB. Consult the documentation.`)
        console.log(
          "❌ %c The layer: %c%s%c does not exist in the ICGC DB. Consult the documentation.",
          "font-weight: bold; font-style: italic;",
          "font-weight: normal; font-style: normal; color: red;",
          name,
          "font-weight: bold; font-style: italic;"
        );
      }
      let layerUrl = op.url;

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
    } catch (error) {
      console.error(`Error adding ICGC vector layer: ${error.message}`);
    }
  }

  /**
   * Adds 3D terrain to the map using hillshade.
   * @function addTerrain
   * @param {string} resolution - resolution of the terrain data: 2m or 5m.
   */
  addTerrainICGC(resolution) {
    this.map.on("load", () => {
      try {
        let op = defaultOptions.urlTerrainICGC.find(
          (objeto) => objeto.name === resolution
        );

        let urlTerrainICGC = op.url;

        // Add terrain source
        this.map.addSource("terrainICGC-src", {
          type: "raster-dem",
          tiles: [urlTerrainICGC],
          tileSize: 512,
          maxzoom: 16,
        });

        // Add terrain layer
        this.map.setTerrain({
          source: "terrainMapZen",
          exaggeration: 1.5,
        });
        this.map.setTerrain({
          source: "terrainICGC-src",
          exaggeration: 1.5,
        });
        this.map.addControl(
          new maplibregl.TerrainControl({
            source: "terrainICGC-src",
            exaggeration: 1.5,
          })
        );
      } catch (error) {
        console.error(`Error adding 3D terrain: ${error.message}`);
      }
    }); //'load end
  }
}
