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
let fgbLayersOptions;
let vectorLayersOptions;
let ortoLayersOptions;
let wmsLayersOptions;
let stylesOptions;
let terrainOptions;


getVectorLimitsLayers()
getFGBLimitsLayers()
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
        const response = await axios.get('https://tilemaps.icgc.cat/vt/limits-tilejsonV3.json');
        const tileJson = response.data;
    
   
        if (tileJson.vector_layers && Array.isArray(tileJson.vector_layers)) {
     
          const vectorLayerIds = tileJson.vector_layers.map((layer) => layer.id);

          vectorLimitsLayersOptions = vectorLayerIds.map((id) => ({
            name: camelize(id),
            key: id.toLowerCase().replace(/ /g, '_'),
          }));
     
          console.log('Dades Limits vector actualitzats' );
        } else {
          console.log('no  vector-layers');
        }
      } catch (error) {
        console.error('Error fetching limits vector-layers:', error.message);
      }
    
  }
  async function getFGBLimitsLayers() {
    try {
        const response = await axios.get('https://tilemaps.icgc.cat/vt/limits-tilejsonV3.json');
        const tileJson = response.data;
    
   
        if (tileJson.vector_layers && Array.isArray(tileJson.vector_layers)) {
          const fgbLayerIds = tileJson.vector_layers
            .filter(layer => layer.id.toLowerCase().includes('vigent'))
            .map((layer) => ({
              name: camelize(layer.id),
              key: layer.id.toLowerCase().replace(/ /g, '_'),
              url: `https://tilemaps.icgc.cat/vector/fgb/${layer.id.toLowerCase().replace(/ /g, '_')}.fgb`,
            }));
            console.log('fgb', fgbLayerIds)
        fgbLayersOptions = fgbLayerIds
          console.log('Dades Limits fgb actualitzats');
        
        } else {
          console.log('no  fgb-layers');
        }
      } catch (error) {
        console.error('Error fetching limits fgb-layers:', error.message);
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
        // console.log('result', result)
            // Extract layer names from the parsed result
            const layers = result?.WMS_Capabilities?.Capability[0]?.Layer[0]?.Layer;
        // console.log('layers',layers)
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
  

  async function getVectorLayers() {
    try {
         


          let test= [
            { key: 'cobertes2018', url: "https://tilemaps.icgc.cat/tileserver/cobertes_tilejson.json", legend: "https://eines.icgc.cat/recursos//images/llegendaCobertesSol2018.jpg"}
             ]
             vectorLayersOptions = test
             console.info('Dades vector Layers actualitzats' )

      } catch (error) {
   
        console.error('Error fetching vector-layers:', error.message);
      }
    
  }


  async function getWMSLayers() {
    try {
            let layerRelleu = 'relleu'
            let layerGeologia = 'geologia'
            let layerOsm = 'osm_suau'
            let layerCims = '0'
            let layerCobertesSol = 'cobertes_2009'
          let test= [
            { key: 'espaisInteresGeologic', layer:"", url: `https://geoserveis.icgc.cat/servei/catalunya/espais-interes-geologic/wms/service?&service=WMS&request=GetMap&layers=espais-interes-geologic&styles=&format=image%2Fpng&transparent=true&version=1.1.1&tipus=wms&width=512&height=512&srs=EPSG%3A3857&bbox={bbox-epsg-3857}`},
            { key: 'gravimetriaBouguer500000', layer:"", url: `https://geoserveis.icgc.cat/servei/catalunya/gravimetria/wms/service?&service=WMS&request=GetMap&layers=anomalia_bouguer_500000&styles=&format=image%2Fpng&transparent=true&version=1.1.1&tipus=wms&width=512&height=512&srs=EPSG%3A3857&bbox={bbox-epsg-3857}`},
            { key: 'cobertesSol2018', layer:"", url: `https://geoserveis.icgc.cat/servei/catalunya/cobertes-sol/wms/service?&service=WMS&request=GetMap&layers=cobertes_2018&styles=&format=image%2Fpng&transparent=true&version=1.1.1&tipus=wms&width=512&height=512&srs=EPSG%3A3857&bbox={bbox-epsg-3857}`},
            { key: 'administratiu', layer:"", url:`http://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/administratiu/MON3857NW/{z}/{x}/{y}.png`},
            { key: 'simplificat', layer:"", url:`http://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/simplificat/MON3857NW/{z}/{x}/{y}.png`},
            { key:"cims", layer:"", url:`https://geoserveis.icgc.cat/icc_100cims/wms/service?REQUEST=GetMap&SERVICE=WMS&VERSION=1.1.1&LAYERS=${layerCims}&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&SRS=EPSG:25831&BBOX=137118.923076923,4488408.75,650959.076923077,4749634.75&WIDTH=895&HEIGHT=455`},
            { key: 'cobertesSol', layer:"", url: `http://geoserveis.icgc.cat/servei/catalunya/cobertes-sol/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&LAYERS=${layerCobertesSol}&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:25831&BBOX=374110.828167253,4639230.79853085,452621.120632226,4703578.45000215&WIDTH=1020&HEIGHT=836`},
         ]
       ;
         wmsLayersOptions = test
          console.info('Dades WMS Layers actualitzats' );

      } catch (error) {
        console.error('Error fetching wms-layers:', error.message);
      }
    
  }


  async function getStyles() {
    try {
       
          let test= [
            { key: "TOPO", url: "https://geoserveis.icgc.cat/styles/icgc_mapa_base_topografic.json",image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_estandard.png" },
            { key: "ORTO", url: "https://geoserveis.icgc.cat/styles/icgc_orto_estandard.json" , image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_estandard.png"},
            { key: "ORTO3D", url: "https://eines.icgc.cat/recursos//styles/icgc_orto_3d.json" ,  image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_estandard.png"},
            { key: "ORTOHYBRID", url: "https://geoserveis.icgc.cat/styles/icgc_orto_hibrida.json" ,  image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png"},
            { key: "ADMIN", url: "https://geoserveis.icgc.cat/styles/icgc_limits_administratius_gris.json" ,  image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_delimitacio_limits_administratius.png"},
            { key: "DARK", url: "https://geoserveis.icgc.cat/styles/icgc_mapa_base_fosc.json" ,  image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_fosc.png"},
            { key: "LIGHT", url: "https://geoserveis.icgc.cat/styles/icgc_mapa_base_gris.json", image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_gris.png" },
            { key: "GEOLOGY", url: "https://geoserveis.icgc.cat/styles/icgc_geologic_informacio.json", image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_geologic_informacio.png" },
            {
              key: "RASTER",
              substyles: {
                TOPO: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/topografic/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_topo.jpg" 
                },
                ADMIN: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/administratiu/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_administratiu.jpg" 
                },
                LIGHT: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/topografic-gris/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_topo_gris.jpg" 
                },
                STANDARD: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/estandard/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_estandard_0.jpg" 
                },
                SIMPLIFIED: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/simplificat/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_simplificat.jpg" 
                },
                ORTO: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/orto/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_orto.jpg" 
                },
                ORTOGREY: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/orto-gris/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_orto_gris.jpg" 
                },
                ORTOHYBRID: { 
                  url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/orto-hibrida/MON3857NW/{z}/{x}/{y}.png", 
                  image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_orto_hibida.jpg" 
                }
              }
            
          } 
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
            {name: "ICGC5M", url: "https://tilemaps.icgc.cat/tileserver/tileserver/terreny-5m-30m-rgb-extent/{z}/{x}/{y}.png"},
            {name: "WORLD30M",  url: "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png", encoding: "terrarium",}
 
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
  defaultOptions.fgbLayers = fgbLayersOptions
  defaultOptions.ortoLayersICGC = ortoLayersOptions
  defaultOptions.wmsLayers = wmsLayersOptions
  defaultOptions.baseStyles = stylesOptions 
  defaultOptions.urlTerrainICGC = terrainOptions

  function stringifyWithoutQuotes(obj, indent = 0) {
    const padding = ' '.repeat(indent);
    let result = '';
    for (let key in obj) {
        const value = obj[key];
        const formattedKey = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : `"${key}"`; // Asegura claves válidas
        const formattedValue = typeof value === 'object' && !Array.isArray(value)
            ? stringifyWithoutQuotes(value, indent + 2)
            : JSON.stringify(value);
        result += `${padding}${formattedKey}: ${formattedValue},\n`;
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
// console.log('replaceeee')
function stringifyWithoutQuotes(obj, indent = 0) {
  const padding = ' '.repeat(indent);
  let result = '';
  for (let key in obj) {
    const value = obj[key];
    const formattedKey = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : `"${key}"`; // Asegura claves válidas
    const formattedValue = 
      typeof value === 'object' && !Array.isArray(value) && value !== null
        ? stringifyWithoutQuotes(value, indent + 2)
        : JSON.stringify(value ?? null); // Convierte undefined a null explícitamente
    result += `${padding}${formattedKey}: ${formattedValue},\n`;
  }
  return `{\n${result}${' '.repeat(Math.max(indent - 2, 0))}}`;
}

// Conversión del objeto baseStyles
const convertedObject = {};
let originalObject = defaultOptions.baseStyles;

for (const key in originalObject) {
  if (originalObject.hasOwnProperty(key)) {
    const item = originalObject[key];
    // Si el item tiene una propiedad substyles (como RASTER), las añadimos a la conversión
    if (item.key === 'RASTER' && item.substyles) {
      // No agregar con índice, sino directamente a la propiedad RASTER
      convertedObject.RASTER = item.substyles;
    } else {
      // Usa null si item.url no existe
      convertedObject[item.key] = item.url || null;
    }
  }
}

// Genera el archivo de estilos con valores consistentes
const stylesConfig = `
const Styles = ${stringifyWithoutQuotes(convertedObject, 2)};
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
    convertedVectorICGCLayers[item.name] = item.key;
  }
}

let originalFGBICGCLayers = defaultOptions.fgbLayers
const convertedFGBICGCLayers = {};
for (const key in originalFGBICGCLayers) {
  if (originalFGBICGCLayers.hasOwnProperty(key)) {
    const item = originalFGBICGCLayers[key];
    convertedFGBICGCLayers[item.name] = item.url;
  }
  console.log('con', convertedFGBICGCLayers)
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
const FGBAdmin = ${stringifyWithoutQuotes(convertedFGBICGCLayers, null, 2)}
const Vector = ${stringifyWithoutQuotes(convertedVectorLayers, null, 2)};
const WMS = ${stringifyWithoutQuotes(convertedWmsLayers, null, 2)};
\nexport default {Orto,VectorAdmin, WMS, FGBAdmin, Vector};
`;

// Escribe el contenido actualizado en el archivo config.js
fs.writeFileSync(layersPath, layersConfig);
console.log ('converted', convertedObject)
}