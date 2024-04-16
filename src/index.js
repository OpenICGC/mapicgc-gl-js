import Map from "./map/Map";
import CompareMaps from "./plugins/CompareMaps";
// import Styles from "./constants/Styles";
// import Terrains from "./constants/Terrains";
// import Layers from "./constants/Layers";
import axios from "axios";
import mapicgcConfig from "./mapicgc-config.json"



let Layers 
let Styles 
let Terrains 

axios.get('https://tilemaps.icgc.cat/cdn/configs/mapicgc-config.json')
    .then (response =>{
      // console.log('entro')
      Layers = response.data.Layers;
      Styles = response.data.Styles;
      Terrains = response.data.Terrains;

      // console.log('response', response.data)
	})
	.catch(error =>{
	   Layers = mapicgcConfig.Layers;
       Styles = mapicgcConfig.Styles;
       Terrains = mapicgcConfig.Terrains;

	});



export {
	Map, 
	Styles,
	Terrains,
	Layers,
	CompareMaps
};
