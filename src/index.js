import Map from "./map/Map";
import CompareMaps from "./plugins/CompareMaps";
import axios from "axios";
import mapicgcConfig from "./mapicgc-config.json";


export let Styles = axios
  .get("https://tilemaps.icgc.cat/cdn/configs/mapicgc-config.json")
  .then((response) => {
    Styles = response.data.Styles;
  })
  .catch((error) => {
    Styles = mapicgcConfig.Styles;
  });
export let Terrains = axios
  .get("https://tilemaps.icgc.cat/cdn/configs/mapicgc-config.json")
  .then((response) => {
    Terrains = response.data.Terrains;
  })
  .catch((error) => {
    Terrains = mapicgcConfig.Terrains;
  });

export let Layers = axios
  .get("https://tilemaps.icgc.cat/cdn/configs/mapicgc-config.json")
  .then((response) => {
    Layers = response.data.Layers;
  })
  .catch((error) => {
    Layers = mapicgcConfig.Layers;
  });

export { Map, CompareMaps };
