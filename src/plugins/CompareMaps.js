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

  constructor(map1, map2, container, options) {
    const _this = this;

    setTimeout(function () {
      _this.mapCompare = new Compare(map1.map, map2.map, container, {});
      
      // Collapse attribution controls on both maps
      _this.collapseAttribution(map1.map);
      _this.collapseAttribution(map2.map);
    }, 1000);

    //this.mapCompare=new Compare(map1.map,map2.map, container,{});
    //console.info( this.mapCompare);
  }

  /**
   * Collapses the attribution control on a map.
   * @function collapseAttribution
   * @param {Object} map - The map object to collapse attribution on.
   */
  collapseAttribution(map) {
    const tryCollapse = () => {
      const container = map.getContainer();
      const button = container.querySelector('.maplibregl-ctrl-attrib-button');
      
      if (button) {
        button.click();
      } else {
        requestAnimationFrame(tryCollapse);
      }
    };
    
    tryCollapse();
  }
}
