import maplibregl from "maplibre-gl";
import Compare from "@maplibre/maplibre-gl-compare";

 // import "maplibre-gl/dist/maplibre-gl.css";
/**
 * Class representing a custom map with additional functions.
 */
export default class CompareMaps {


    /**
   * Constructor for the Map class.
   * @param {Object} options - Options to initialize the map.
   */

  constructor(map1,map2, container,options) {

    

    this.mapCompare=new Compare(map1.map,map2.map, container,{});
    //console.info( this.mapCompare);

  }  


}    