import maplibregl from "maplibre-gl";
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
    this.map.setCenter(coordinates);
  }

  /**
   * Adds a layer to the map.
   * @function addLayer 
   * @param {Object} layer - Options for the layer to add.
   */
  addLayer(layer) {
    this.map.addLayer(layer);
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
    this.map.on("load", () => {
      this.map.addSource(`${layer.id}-sourceIcgcMap`, {
        type: "geojson",
        data: layer.data,
      });

      // Add a symbol layer
      this.map.addLayer({
        id: `${layer.id}-layerIcgcMap`,
        type: layer.layerType,
        source: `${layer.id}-sourceIcgcMap`,
        layout: layer.layout,
        paint: layer.paint,
      });
    });
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
  }

  /**
   * Removes a layer from the map.
   * @function removeLayer 
   * @param {string} layerId - Identifier of the layer to remove.
   */
  removeLayer(layerId) {
    this.map.removeLayer(layerId);
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
  }

  /**
   * Adds an export control to the map.
   * @function addExportControl 
   */
  addExportControl() {
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
  };


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
    // this.map.Marker()
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
        .setPopup(popup) // sets a popup on this marker
        .addTo(this.map);
    }
    return marker;
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
    let popup = new maplibregl.Popup()
      .setLngLat(options.coord)
      .setHTML(options.text)
      .addTo(this.map);

    return popup;
  }

  /**
   * Adds a fullscreen control to the map.
   *@function addFullScreen 
   */
  addFullScreen() {
    this.map.addControl(new maplibregl.FullscreenControl());
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
    let places = options.features;

    const filterGroup = document.getElementById("filter-group");
    this.map.on("load", () => {
      const layers = this.map.getStyle().layers;
      // Find the index of the first symbol layer in the map style
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

        // Add a layer for this symbol type if it hasn't been added already.
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

          // Add checkbox and label elements for the layer.
          const input = document.createElement("input");
          input.type = "checkbox";
          input.id = layerID;
          input.checked = true;
          filterGroup.appendChild(input);

          const label = document.createElement("label");
          label.setAttribute("for", layerID);
          label.textContent = symbol;
          filterGroup.appendChild(label);

          // When the checkbox changes, update the visibility of the layer.
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
  }

  /**
   * Creates a navigation control with the provided options.
   * @function createNavigationControl 
   * @param {Object} options - Options for the navigation control.
   * @returns {Object} - Instance of the created navigation control.
   */
  createNavigationControl(options) {
    return new maplibregl.NavigationControl(options);
  }

  /**
   * Adds a navigation control to the map with the provided options.
   * @function addNavigationControl 
   * @param {Object} options - Options for the navigation control.
   */
  addNavigationControl(options) {
    const navigationControl = this.createNavigationControl(options);
    this.map.addControl(navigationControl);
  }

  /**
   * Adds an attribution control to the map with the provided options.
   * @function addAttributionControl 
   * @param {Object} options - Options for the attribution control.
   */
  addAttributionControl(options) {
    this.map.addControl(
      new maplibregl.AttributionControl(options.options),
      options.position
    );
  }


  /**
   * Internal method to handle map styles.
   * @function _dealStyleMaps  
   * @param {string} name - Name of the map style.
   * @returns {string} - URL of the map style.
   */
  _dealStyleMaps(name) {
    for (const style of defaultOptions.baseStyles) {
      if (style.name === name) {
        return style.url;
      }
    }
    return defaultOptions.baseStyles[0].url;
  }
}
