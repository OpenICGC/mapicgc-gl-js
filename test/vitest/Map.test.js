
// import Map  from '../../src/map/Map.js';
import jest from "jest";
import maplibregl from "maplibre-gl";
import { vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { AmbientLight, LightingEffect } from "@deck.gl/core";


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

  test('should set map properties correctly when name is "orto3d"', async () => {
    // Mocks
    const setMaxZoomMock = vi.fn();
    const easeToMock = vi.fn();
    const setTerrainMock = vi.fn();
    const addLayerMock = vi.fn();
    const setLayerZoomRangeMock = vi.fn();
    const setSkyMock = vi.fn();
    
    // Configuración de los mocks de maplibregl.Map
    const mapOptions = {
      container: 'map',  // Este es solo un ejemplo, asegúrate de adaptarlo según tu caso
      center: [0, 0],
      zoom: 10,
    };
  
    // Instanciar el objeto de mapa y mockearlo
    const map = new maplibregl.Map(mapOptions);
    
    // Mock de los métodos relevantes del mapa
    map.setMaxZoom = setMaxZoomMock;
    map.easeTo = easeToMock;
    map.setTerrain = setTerrainMock;
    map.addLayer = addLayerMock;
    map.getLayer = vi.fn(() => false);  // Mock de getLayer para que no devuelva la capa
    map.removeLayer = vi.fn();
    map.setLayerZoomRange = setLayerZoomRangeMock;
    map.setSky = setSkyMock;
  
    // Crear una instancia con el mapa mockeado
    const instance = {
      map: map,
      _createCitiesMapboxLayer: vi.fn(() => 'mockCitiesLayer'),
      _dealOrto3dStyle: function(name) {
        if (name === 'orto3d') {
          this.map.setMaxZoom(18.8);
          this.map.easeTo({ pitch: 45 });
          const ambientLight = new AmbientLight({ intensity: 4 });
          const lightingEffect = new LightingEffect({ ambientLight });
          this.map.setTerrain({
            source: 'ICGC5M',
            exaggeration: 1,
          });
          const citiesMapboxLayer = this._createCitiesMapboxLayer();
  
          if (!this.map.getLayer('edificisMapboxLayer')) {
            this.map.addLayer(citiesMapboxLayer, 'place-isolated');
            this.map.setLayerZoomRange('edificisMapboxLayer', 15.5, 22);
            // citiesMapboxLayer.deck.setProps({
            //   effects: [lightingEffect],
            // });
          }
          this.map.setSky({
            'sky-color': '#86bbd5',
            'sky-horizon-blend': 0.3,
            'horizon-color': '#ffffff33',
            'horizon-fog-blend': 0.1,
            'fog-ground-blend': 0.75,
            'fog-color': '#c5d6d6',
          });
        }
      },
    };
  
    // Ejecutar la función
    await instance._dealOrto3dStyle("orto3d");
  
    // Verificación
    expect(setMaxZoomMock).toHaveBeenCalledWith(18.8);
    expect(easeToMock).toHaveBeenCalledWith({ pitch: 45 });
    expect(setTerrainMock).toHaveBeenCalledWith({
      source: 'ICGC5M',
      exaggeration: 1,
    });
    expect(addLayerMock).toHaveBeenCalledWith('mockCitiesLayer', 'place-isolated');
    expect(setLayerZoomRangeMock).toHaveBeenCalledWith(
      'edificisMapboxLayer',
      15.5,
      22
    );
    expect(setSkyMock).toHaveBeenCalledWith({
      'sky-color': '#86bbd5',
      'sky-horizon-blend': 0.3,
      'horizon-color': '#ffffff33',
      'horizon-fog-blend': 0.1,
      'fog-ground-blend': 0.75,
      'fog-color': '#c5d6d6',
    });
  });
  

});




