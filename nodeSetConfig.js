const SftpClient = require("ssh2-sftp-client");
const dotenv = require("dotenv");
const axios = require('axios');
const fs = require('fs');
const parseString = require('xml2js').parseString;
// import defaultOptions from "../config";
const path = require('path');
const configFilePath = path.join('./src', 'config.js');
const configNodeFilePath = path.join('./src', 'configNode.js');
const defaultOptions = require('./src/configNode.js');
const stylePath = path.join('./src/constants/', 'Styles.js');
const terrainPath = path.join('./src/constants/', 'Terrains.js');
const layersPath = path.join('./src/constants/', 'Layers.js');

const https = require('https');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
const inFilePath = `${process.env.FTP_LOCA_PATH}${process.env.FILE_JS_UMD}`;
const renamedFilePath = `${process.env.FTP_LOCA_PATH}${process.env.FILE_JS}`;

// import SftpClient from "ssh2-sftp-client";
//import dotenv from "dotenv";
dotenv.config();

let vectorLimitsLayersOptions ;
let vectorLayersOptions;
let ortoLayersOptions;
let wmsLayersOptions;
let stylesOptions;
let terrainOptions;


getVectorLimitsLayers()
getOrtoWMSLayers()
getWMSLayers()
getVectorLayers()
getStyles()
getTerrain()


function camelize(str) {
  return str.replace(/[-_\s]+(.)?/g, function(match, char) {
    return char ? char.toUpperCase() : '';
  });
}

async function getVectorLimitsLayers() {
    try {
        const response = await axios.get('https://tilemaps.icgc.cat/tileserver/limits-tilejsonV3.json');
        const tileJson = response.data;
    
   
        if (tileJson.vector_layers && Array.isArray(tileJson.vector_layers)) {
     
          const vectorLayerIds = tileJson.vector_layers.map((layer) => layer.id);

          vectorLimitsLayersOptions = vectorLayerIds.map((id) => ({
            name: camelize(id),
            key: id.toLowerCase().replace(/ /g, '_'),
            url: `https://tilemaps.icgc.cat/vector/fgb/${id.toLowerCase().replace(/ /g, '_')}.fgb`,
          }));
     
          console.log('Dades Limits vector actualitzats' );
        } else {
          console.log('no  vector-layers');
        }
      } catch (error) {
        console.error('Error fetching limits vector-layers:', error.message);
      }
    
  }
  async function getOrtoWMSLayers() {
    try {
       
        axios.get("https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?request=GetCapabilities&service=WMS", {
          httpsAgent
        })
        .then(function (response) {

          const xmlData = response.data;
  
          // Parse XML to JavaScript object
          parseString(xmlData, (err, result) => {
            if (err) {
              console.error('Error parsing XML:', err);
              return;
            }
        console.log('result', result)
            // Extract layer names from the parsed result
            const layers = result?.WMS_Capabilities?.Capability[0]?.Layer[0]?.Layer;
        console.log('layers',layers)
            if (layers) {
              const vectorArray = layers.map(layer => ({
                name: camelize(layer.Name[0]),
                key: layer.Name[0],
                url: `https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=${layer.Name[0]}`,
              }));
              ortoLayersOptions = vectorArray
     
            } else {
              console.error('No layers found in the GetCapabilities response.');
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });

      } catch (error) {
        console.error('Error fetching orto wms-layers:', error.message);
      }
    
  }
  

  async function getWMSLayers() {
    try {
         


          let test= [
            { key: 'altimetria', layer:"", url: "https://betaserver.icgc.cat/tileserver3/tileserver.php/alti_bt5m/{z}/{x}/{y}.pbf"},
            { key: 'toponimia',layer:"", url: "https://betaserver.icgc.cat/tileserver3/tileserver.php/redtopo/{z}/{x}/{y}.pbf"},
             ]
          wmsLayersOptions = test
          console.info('Dades WMS Layers actualitzats' );
      } catch (error) {
        console.error('Error fetching wms-layers:', error.message);
      }
    
  }


  async function getVectorLayers() {
    try {
            let layerRelleu = 'relleu'
            let layerGeologia = 'geologia'
            let layerOsm = 'osm_suau'
            let layerCims = '0'
            let layerCobertesSol = 'cobertes_2009'
          let test= [
            { key: 'relleu', layer:"", url: `https://tilemaps.icgc.cat/mapfactory/wmts/${layerRelleu}/CAT3857/{z}/{x}/{y}.png`},
            { key: 'geologia', layer:"", url: `https://tilemaps.icgc.cat/mapfactory/wmts/${layerGeologia}/MON3857NW/{z}/{x}/{y}.png`},
            { key: 'osm', layer:"", url:`https://tilemaps.icgc.cat/mapfactory/wmts/${layerOsm}/CAT3857_15/{z}/{x}/{y}.png`},
            { key:"cims", layer:"", url:`"https://geoserveis.icgc.cat/icc_100cims/wms/service?REQUEST=GetMap&SERVICE=WMS&VERSION=1.1.1&LAYERS=${layerCims}&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&SRS=EPSG:25831&BBOX=137118.923076923,4488408.75,650959.076923077,4749634.75&WIDTH=895&HEIGHT=455`},
            { key: 'cobertesSol', layer:"", url: `http://geoserveis.icgc.cat/servei/catalunya/cobertes-sol/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&LAYERS=${layerCobertesSol}&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:25831&BBOX=374110.828167253,4639230.79853085,452621.120632226,4703578.45000215&WIDTH=1020&HEIGHT=836`},
         ]
          vectorLayersOptions = test
          console.info('Dades vector Layers actualitzats' );


      } catch (error) {
        console.error('Error fetching vector-layers:', error.message);
      }
    
  }


  async function getStyles() {
    try {
       
          let test= [
            { key: "TOPO", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard_general.json",image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_estandard.png" },
            { key: "ORTO", url: "https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json" , image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png"},
            { key: "ADMIN", url: "https://geoserveis.icgc.cat/contextmaps/icgc_delimitacio_limits_administratius.json" ,  image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_delimitacio_limits_administratius.png"},
            { key: "DARK", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json" ,  image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_fosc.png"},
            { key: "LIGHT", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_gris.json", image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_gris.png" },
            { key: "GEOLOGY", url: "https://geoserveis.icgc.cat/contextmaps/icgc_geologic_informacio.json", image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_geologic_informacio.png" },
                
          ]
          stylesOptions = test
          console.info('Dades styles actualitzats' );


      } catch (error) {
        console.error('Error fetching style -layers:', error.message);
      }
    
  }

  async function getTerrain() {
    try {
       
          let test= [
            {name: "ICGC5M", url: "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny-5m-30m-rgb-extent/{z}/{x}/{y}.png"},
            {name: "WORLD3M", url: "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny_icgc_2m_rgb/{z}/{x}/{y}.png"}
 
          ]
          terrainOptions = test
          console.info('Dades terrain Layers actualitzats' );


      } catch (error) {
        console.error('Error fetching terrain -layers:', error.message);
      }
    
  }

setTimeout(() => {
  replace()
}, 5000);

function replace(){
  defaultOptions.vectorLayersICGC = vectorLimitsLayersOptions
  defaultOptions.vectorLayers = vectorLayersOptions
  defaultOptions.ortoLayersICGC = ortoLayersOptions
  defaultOptions.wmsLayers = wmsLayersOptions
  defaultOptions.baseStyles = stylesOptions
  defaultOptions.urlTerrainICGC = terrainOptions

  function stringifyWithoutQuotes(obj, indent = 0) {
    const padding = ' '.repeat(indent);
    let result = '';
    for (let key in obj) {
        const value = obj[key];
        key = camelize(key)
        const formattedValue = typeof value === 'object'
            ? stringifyWithoutQuotes(value, indent + 2)
            : JSON.stringify(value);
        result += `${padding}${key}: ${formattedValue},\n`;
    }
    return `{\n${result}${' '.repeat(Math.max(indent - 2, 0))}}`;
}

// Convierte el objeto defaultOptions a una cadena JSON
const updatedConfigNode = `
const urlImages = "https://visors.icgc.cat/contextmaps/imatges_estil/";
const urlStyles = "https://geoserveis.icgc.cat/contextmaps/"; 
const defaultOptions = ${stringifyWithoutQuotes(defaultOptions, null, 2)};
\nmodule.exports = defaultOptions;
`;
const updatedConfig = `
const urlImages = "https://visors.icgc.cat/contextmaps/imatges_estil/";
const urlStyles = "https://geoserveis.icgc.cat/contextmaps/"; 
const defaultOptions = ${stringifyWithoutQuotes(defaultOptions, null, 2)};
\nexport default defaultOptions;
`;

// Escribe el contenido actualizado en el archivo config.js
fs.writeFileSync(configNodeFilePath, updatedConfigNode);

fs.writeFileSync(configFilePath, updatedConfig)



setTimeout(() => {
  replaceConstants()
}, 5000);

console.log('Variables actualitzades correctament a config.js');
}

function replaceConstants(){
console.log('replaceeee')

function stringifyWithoutQuotes(obj, indent = 0) {
  const padding = ' '.repeat(indent);
  let result = '';
  for (let key in obj) {
      let value = obj[key];
//start camelize 
key = camelize(key)
// console.log('v', key)
//end camelize
      const formattedValue = typeof value === 'object'
          ? stringifyWithoutQuotes(value, indent + 2)
          : JSON.stringify(value);
      result += `${padding}${key}: ${formattedValue},\n`;
  }
  return `{\n${result}${' '.repeat(Math.max(indent - 2, 0))}}`;
}
//baseStyles
const convertedObject = {};
let originalObject = defaultOptions.baseStyles
for (const key in originalObject) {
  if (originalObject.hasOwnProperty(key)) {
    const item = originalObject[key];
    convertedObject[item.key] = item.url;
  }
}
const stylesConfig = `
const Styles = ${stringifyWithoutQuotes(convertedObject, null, 2)};
\nexport default Styles;
`;

// Escribe el contenido actualizado en el archivo config.js
fs.writeFileSync(stylePath, stylesConfig);

//setTerrain

const convertedTerrain = {};
let originalTerrain = defaultOptions.urlTerrainICGC
for (const key in originalTerrain) {
  if (originalTerrain.hasOwnProperty(key)) {
    const item = originalTerrain[key];
    convertedTerrain[item.name] = item.url;
  }
}
const terrainConfig = `
const Terrains = ${stringifyWithoutQuotes(convertedTerrain, null, 2)};
\nexport default Terrains;
`;

// Escribe el contenido actualizado en el archivo config.js
fs.writeFileSync(terrainPath, terrainConfig);

//setlayers


let originalOrtoLayers = defaultOptions.ortoLayersICGC
const convertedOrtoLayers = {};
for (const key in originalOrtoLayers) {
  if (originalOrtoLayers.hasOwnProperty(key)) {
    const item = originalOrtoLayers[key];
    convertedOrtoLayers[item.name] = item.url;
  }
}

let originalVectorICGCLayers = defaultOptions.vectorLayersICGC
const convertedVectorICGCLayers = {};
for (const key in originalVectorICGCLayers) {
  if (originalVectorICGCLayers.hasOwnProperty(key)) {
    const item = originalVectorICGCLayers[key];
    convertedVectorICGCLayers[item.name] = item.url;
  }
}

let originalVectorLayers = defaultOptions.vectorLayers
const convertedVectorLayers = {};
for (const key in originalVectorLayers) {
  if (originalVectorLayers.hasOwnProperty(key)) {
    const item = originalVectorLayers[key];
    convertedVectorLayers[item.key] = item.url;
  }
}

let originalWmsLayers = defaultOptions.wmsLayers
const convertedWmsLayers = {};
for (const key in originalWmsLayers) {
  if (originalWmsLayers.hasOwnProperty(key)) {
    const item = originalWmsLayers[key];
    convertedWmsLayers[item.key] = item.url;
  }
}

const layersConfig = `
const Orto = ${stringifyWithoutQuotes(convertedOrtoLayers, null, 2)};
const VectorAdmin = ${stringifyWithoutQuotes(convertedVectorICGCLayers, null, 2)};
const WMS = ${stringifyWithoutQuotes(convertedVectorLayers, null, 2)};
const Vector = ${stringifyWithoutQuotes(convertedWmsLayers, null, 2)};
\nexport default {Orto,VectorAdmin, WMS, Vector};
`;

// Escribe el contenido actualizado en el archivo config.js
fs.writeFileSync(layersPath, layersConfig);
console.log ('converted', convertedObject)
}