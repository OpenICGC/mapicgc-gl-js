import maplibregl from "maplibre-gl";
// import flatgeobuf from "flatgeobuf";
import Pitch3DToggleControl from "../controls/Toggle3DControl.js";
import defaultOptions from "../config.js";




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
    this.map.options=options;
  }


  /**
 * Retrieves the current style of the map.
 * @function getStyle
 * @returns {Object} - The current style of the map.
 */
  getStyle(){
    try {
      this.map.getStyle()
    } catch (error) {
      console.error(`Error getting style: ${error.message}`);
    }
  }


/**
 * Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type.
 * @param {string} url - The URL to fetch GeoJSON data from.
 * @param {string} type - The geometry type (e.g., 'line', 'polygon', 'point').
 * @param {string} name - The geometry name (e.g., 'buildings').
 * @param {Object} options - Additional options for configuring the layer.
 */

async fetchData(url, type, name, options){
try {
  const response = await fetch(url)
  const geojson = await response.json();
  // console.log('geojson', geojson)

  if (type.includes("ine")){ //line

    map.addLayer({
      id: name,
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson,
      },
      layout: {
        visibility: "visible"
      },
      // paint: {
      //   'line-color': element.color,
      //   'line-width': element.width,
      //   'line-opacity': element.opacity
  
      // },
    });
  }
  if (type.includes('olygon')){ //polygon

    map.addLayer({
      id: name,
      type: 'fill',
      source: {
        type: 'geojson',
        data: geojson,
      },
      layout: {
        visibility: "visible"
      },
      // paint: {
      //   'line-color': element.color,
      //   'line-width': element.width,
      //   'line-opacity': element.opacity
  
      // },
    });
  }
  if (type.includes('oint')){ //point
    // console.log('geojson', geojson)
    map.addLayer({
      id: name,
      type: 'circle',
      source: {
        type: 'geojson',
        data: geojson,
      },
      layout: {
        visibility: "visible"
      },
      paint: {
        'circle-color': 'yellow',
        'circle-opacity': 0.5
  
      },
    });
  }
  geojsonStore  = geojson



} catch (error) {
  console.error(`Error fetching data: ${error.message}`);
}
}


async geocodeAddress(){
  try {
    var inputElement = document.getElementById('addressInput');
    var address = inputElement.value;
    const response = await fetch(url)
    const geojson = await response.json();
    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
console.log('ge', geojson)
    function geocode(address) {
      var result = turf.filter(geojson, 'address', address);
      return result.features.slice(0, 5);
    }

    var results = geocode(address);

    if (results.length > 0) {
      results.forEach(function (feature) {
        var coordinates = feature.geometry.coordinates;
        var address = feature.properties.address;

        var resultItem = document.createElement('div');
        resultItem.innerHTML = '<strong>' + address + '</strong><br>Coordenadas: ' + coordinates.join(', ');

        resultsContainer.appendChild(resultItem);
      });
    } else {
      resultsContainer.innerHTML = 'No se encontraron resultados para la dirección: ' + address;
    }
  } catch (error) {
    
  }
}
/**
 * Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type.
 * @param {string} url - The URL to fetch GeoJSON data from.
 * @param {string} type - The geometry type (e.g., 'line', 'polygon', 'point').
 * @param {string} name - The geometry name (e.g., 'buildings').
 * @param {Object} options - Additional options for configuring the layer.
 */

async fetchDataWithSearchbox(url, type, name, optionsGeo, options){
  try {
    const response = await fetch(url)
    const geojson = await response.json();
    // console.log('geojson', geojson)
  
    function geocode(address) {
    var result = turf.filter(geojson, 'address', address);
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

setStyle(style, options){
  try {

    for (const styl of defaultOptions.baseStyles) {
        if (styl.name === style) {
          style =  styl.url;
        }
      }
    if (options !== undefined){
      this.map.setStyle(style, options)
    }else{
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
      if (position === undefined){
        position = 'top-right'
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
      if (position === undefined){
        position = 'top-right'
       }
      if (options === undefined) {
        this.map.addControl(
          new maplibregl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }), position
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
      return this.map.setTerrain(options);
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
   * Removes a control from the map.
   * @function removeControl
  * @param {Object} control - The control to remove.
   */
removeControl(control){
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
 * Adds a scale control to the map.
 * @param {Object} options - Options for configuring the scale control.
 * @param {string} position - The position on the map to place the scale control (e.g., 'top-left', 'bottom-right').
 */

addScaleControl(options, position){

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
removeMeasureControl(){
  try {
    const removeMeasure = document.getElementById('xButton')
    const distanceContainer = document.getElementById('distance');
    distanceContainer.innerHTML = '';
    // console.log(this.map.getStyle().layers)
let layers = this.map.getStyle().layers


for (let i = 0; i < layers.length; i++) {
  if (layers[i].id.includes('measure')) {
    this.map.removeLayer(layers[i].id)
    
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
addMeasureControl(){
  try {
    const distanceContainer = document.getElementById('distance');
    const distanceContainerT = document.getElementById('distanceTotal');
let endMeasure = false
var clickTimer;
    // GeoJSON object to hold our measurement features
    const geojson = {
        'type': 'FeatureCollection',
        'features': []
    };

    // Used to draw a line between points
    const linestring = {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': []
        }
    };
    // console.log('endMesa', endMeasure)
   
    this.map.on('load', () => {
      this.map.addSource('geojson', {
          'type': 'geojson',
          'data': geojson
      });

      // Add styles to the map
      this.map.addLayer({
          id: 'measure-points',
          type: 'circle',
          source: 'geojson',
          paint: {
              'circle-radius': 5,
              'circle-color': '#000'
          },
          filter: ['in', '$type', 'Point']
      });
      this.map.addLayer({
          id: 'measure-lines',
          type: 'line',
          source: 'geojson',
          layout: {
              'line-cap': 'round',
              'line-join': 'round'
          },
          paint: {
              'line-color': '#000',
              'line-width': 2.5
          },
          filter: ['in', '$type', 'LineString']
      });


  });

    
  this.map.on('click', (e) => {
    clearTimeout(clickTimer);
    if (!endMeasure){

    
    clickTimer = setTimeout(() => {
        handleSingleClick(e, this.map);
    }, 50); // Ajusta el tiempo según tus necesidades
  }
});

this.map.on('dblclick', (e) => {
    clearTimeout(clickTimer);
    handleDoubleClick(e, this.map);
});

this.map.on('mousemove', (e) => {

  if (!endMeasure){
    const features = this.map.queryRenderedFeatures(e.point, {
        layers: ['measure-points']
    });
    // UI indicator for clicking/hovering a point on the map



    this.map.getCanvas().style.cursor = features.length ?
        'pointer' :
        'crosshair';
  }else{
    this.map.getCanvas().style.cursor = "grab"
  }
});


function handleSingleClick(e, map) {
  // console.log('single')
const features = map.queryRenderedFeatures(e.point, {
    layers: ['measure-points']
});

// Remove the linestring from the group
// So we can redraw it based on the points collection
if (geojson.features.length > 1) geojson.features.pop();

// Clear the Distance container to populate it with a new value
distanceContainerT.innerHTML = '';

// If a feature was clicked, remove it from the map
if (features.length) {
    const id = features[0].properties.id;
    geojson.features = geojson.features.filter((point) => {
        return point.properties.id !== id;
    });
} else {
    const point = {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [e.lngLat.lng, e.lngLat.lat]
        },
        'properties': {
            'id': String(new Date().getTime())
        }
    };

    geojson.features.push(point);
}

if (geojson.features.length > 1) {
    linestring.geometry.coordinates = geojson.features.map(
        (point) => {
            return point.geometry.coordinates;
        }
    );

    geojson.features.push(linestring);

    // Populate the distanceContainer with total distance
    const value = document.createElement('pre');
    value.textContent =
        `Distància total: ${
            turf.length(linestring).toLocaleString()
        }km`;
    distanceContainerT.appendChild(value);



    const xButton = document.createElement('div');
    xButton.id = 'xButton';
    xButton.textContent = 'X';
    xButton.onclick = () => {
      try {
        const removeMeasure = document.getElementById('xButton')
        const distanceContainer = document.getElementById('distance');
        distanceContainer.innerHTML = '';
        // console.log(this.map.getStyle().layers)
    let layers = map.getStyle().layers
    
    
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].id.includes('measure')) {
        map.removeLayer(layers[i].id)
        
      }
    }
    
    
    
      } catch (error) {
        console.error(`Error adding measure control: ${error.message}`);
      }
    };
    distanceContainerT.appendChild(xButton);


}

map.getSource('geojson').setData(geojson);
}

function handleDoubleClick(e, map) {
// Aquí puedes poner la lógica que desees para manejar el doble clic
// console.log('Doble clic en', e.lngLat);
map.getCanvas().style.cursor = 'grab' 
endMeasure = true

// Por ejemplo, puedes detener la medición de distancias aquí
}


  } catch (error) {
    
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
      if (typeof options === "string"){
        position=options
        options = undefined
      }
      if (options === undefined){
            options= {
              PageSize: MaplibreExportControl.Size.A4,
              PageOrientation: MaplibreExportControl.PageOrientation.Landscape,
              Format: MaplibreExportControl.Format.PNG,
              DPI: MaplibreExportControl.DPI[300],
              Crosshair: true,
              PrintableArea: true
            };
            position = 'top-right'
          }
 
      this.map.addControl(
        new MaplibreExportControl.MaplibreExportControl(options), position);
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
  addFullScreen(position) {
    try {
      if (position === undefined){
        position = 'top-right'
       }
      this.map.addControl(new maplibregl.FullscreenControl(), position);
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
   * @param {string} [position='top-right'] - Position to add the control on the map.
   * @returns {Object} - Instance of the created navigation control.
   */
  createNavigationControl(options, position) {
    try {
      if (position === undefined){
        position = 'top-right'
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
        if (position === undefined){
          position = 'top-right'
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
   * @param {integer} year - The year of the image layer (optional, applicable only for certain layers like 'orto').
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
          name = 'ortoICGC'
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
   * @function addFGBLayerICGC
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
    * @param {string} [positionButton='top-right'] - Position to add the button on the map.
   */
  addTerrainICGC(resolution, positionButton) {
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

         if (positionButton === undefined){
          positionButton = 'top-right'
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
};


