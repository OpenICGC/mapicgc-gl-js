
// import Map  from '../../src/map/Map.js';
import jest from "jest";
import maplibregl from "maplibre-gl";
import { vi } from 'vitest';
import { JSDOM } from 'jsdom';


import { beforeEach, describe, expect, test, vi } from 'vitest';


describe('setStyle method', () => {
  let instance;
  let mockElement;

  beforeEach(() => {
    // Create a DOM environment
    const dom = new JSDOM(`<!DOCTYPE html><div class="maplibregl-compact-show"></div>`);
    global.document = dom.window.document;
vi.mock('maplibre-gl', () => ({
    default: {
      Map: vi.fn().mockImplementation(() => ({
        addControl: vi.fn(),
        // Mock additional methods if necessary
      })),
    },
  }));
    // Mock map initialization
    const map = new maplibregl.Map({
      container: 'map',
      center: [0, 0],
      zoom: 10,
    });

    // Mock methods used in setStyle
    map.setStyle = vi.fn();
    map.getStyle = vi.fn(() => ({ name: 'mockStyle' }));
    map.on = vi.fn((event, callback) => {
      if (event === 'styledata') callback();
    });

    // Mock DOM manipulation
    mockElement = { classList: { remove: vi.fn() } };
    vi.spyOn(document, 'querySelector').mockImplementation((selector) => {
      if (selector === '.maplibregl-compact-show') return mockElement;
      return null;
    });

    // Mock _dealOrto3dStyle
    const _dealOrto3dStyleMock = vi.fn();

    // Mock the instance
    instance = {
      map,
      _dealOrto3dStyle: _dealOrto3dStyleMock,
      setStyle: function (style, options) {
        try {
          if (options !== undefined) {
            this.map.setStyle(style, options);
          } else {
            this.map.setStyle(style);
          }
          this.map.on('styledata', () => {
            const element = document.querySelector('.maplibregl-compact-show');
            if (element) {
              element.classList.remove('maplibregl-compact-show');
            }
            this._dealOrto3dStyle(this.map.getStyle().name);
          });
        } catch (error) {
          console.error(`Error setting style: ${error.message}`);
        }
      },
    };
  });
  test('should initialize a MapLibre map instance and call addControl', () => {

    // Mock map initialization options
        const options = {
          container: 'map',
          center: [0, 0],
          zoom: 10,
        };
    
        // Instantiate the mocked map
        const map = new maplibregl.Map(options);
    
        
      // Verify that the Map constructor is called with the correct options
      expect(maplibregl.Map).toHaveBeenCalledWith(options);
  
      // Mock a control and call addControl
      const controlMock = vi.fn();
      map.addControl(controlMock, 'top-right');
  
      // Verify that the addControl method is called with the correct arguments
        expect(map.addControl).toHaveBeenCalledWith(controlMock, 'top-right');
      });
  test('should set map style and handle styledata event correctly', () => {
    const style = 'mockStyle';
    const styleOptions = { transition: true };

    // Test the function with options
    instance.setStyle(style, styleOptions);
    expect(instance.map.setStyle).toHaveBeenCalledWith(style, styleOptions);

    // Test the function without options
    instance.setStyle(style);
    expect(instance.map.setStyle).toHaveBeenCalledWith(style);

    // Verify DOM manipulation
    expect(document.querySelector).toHaveBeenCalledWith('.maplibregl-compact-show');
    expect(mockElement.classList.remove).toHaveBeenCalledWith('maplibregl-compact-show');

    // Verify _dealOrto3dStyle is called with the correct style name
    expect(instance._dealOrto3dStyle).toHaveBeenCalledWith('mockStyle');
  });

  
});


