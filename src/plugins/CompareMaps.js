import maplibregl from "maplibre-gl";
import Compare from "@maplibre/maplibre-gl-compare";

/**
 * Class for comparing two maps.
 * @class CompareMaps
 */
export default class CompareMaps {


  /**
 * Constructor for the map comparison class.
 * @class MapComparison
 * @param {Object} map1 - The first map object to compare.
 * @param {Object} map2 - The second map object to compare.
 * @param {string} container - The HTML container element ID for displaying the comparison.
 * @param {Object} options - Additional options for map comparison (if needed).
 */

  constructor(map1,map2, container,options) {


    this.mapCompare=new Compare(map1.map,map2.map, container,{});
    //console.info( this.mapCompare);

  }  


}    