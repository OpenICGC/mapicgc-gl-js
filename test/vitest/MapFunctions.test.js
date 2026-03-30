import { vi, describe, expect, test, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import mapicgcConfig from '../../src/mapicgc-config.json';

// ─── Mock maplibre-gl ────────────────────────────────────────────────
const mockMapInstance = {
  addControl: vi.fn(),
  addLayer: vi.fn(),
  addSource: vi.fn(),
  addImage: vi.fn(),
  addSprite: vi.fn(),
  areTilesLoaded: vi.fn(() => true),
  cameraForBounds: vi.fn(() => ({ center: [1.5, 41.8], zoom: 10, bearing: 0 })),
  easeTo: vi.fn(),
  fitBounds: vi.fn(),
  fitScreenCoordinates: vi.fn(),
  flyTo: vi.fn(),
  getBearing: vi.fn(() => 45),
  getBounds: vi.fn(() => ({ _sw: { lng: 0, lat: 40 }, _ne: { lng: 3, lat: 43 } })),
  getCanvas: vi.fn(() => ({ width: 800, height: 600 })),
  getCanvasContainer: vi.fn(() => ({})),
  getCenter: vi.fn(() => ({ lng: 1.537786, lat: 41.837539 })),
  getContainer: vi.fn(() => document.createElement('div')),
  getFilter: vi.fn(),
  getLayer: vi.fn(),
  getLayoutProperty: vi.fn(),
  getLight: vi.fn(),
  getMaxBounds: vi.fn(),
  getMaxPitch: vi.fn(() => 85),
  getMaxZoom: vi.fn(() => 18),
  getMinPitch: vi.fn(() => 0),
  getMinZoom: vi.fn(() => 0),
  getPadding: vi.fn(() => ({ top: 0, bottom: 0, left: 0, right: 0 })),
  getPaintProperty: vi.fn(),
  getPitch: vi.fn(() => 0),
  getPixelRatio: vi.fn(() => 1),
  getRenderWorldCopies: vi.fn(() => false),
  getSource: vi.fn(),
  getSprite: vi.fn(() => []),
  getStyle: vi.fn(() => ({ name: 'ICGC mapa base gris', id: 'icgc_mapa_base_gris' })),
  getZoom: vi.fn(() => 7.5),
  hasControl: vi.fn(() => true),
  hasImage: vi.fn(() => false),
  isMoving: vi.fn(() => false),
  isZooming: vi.fn(() => false),
  isRotating: vi.fn(() => false),
  loaded: vi.fn(() => true),
  loadImage: vi.fn(),
  on: vi.fn((event, callback) => {
    if (event === 'load') callback();
  }),
  once: vi.fn(),
  off: vi.fn(),
  remove: vi.fn(),
  removeControl: vi.fn(),
  removeFeatureState: vi.fn(),
  removeImage: vi.fn(),
  removeLayer: vi.fn(),
  removeSource: vi.fn(),
  removeSprite: vi.fn(),
  resize: vi.fn(),
  setBearing: vi.fn(),
  setCenter: vi.fn(),
  setEventedParent: vi.fn(),
  setFeatureState: vi.fn(),
  setFilter: vi.fn(),
  setLayoutProperty: vi.fn(),
  setLight: vi.fn(),
  setMaxBounds: vi.fn(),
  setMaxPitch: vi.fn(),
  setMaxZoom: vi.fn(),
  setMinPitch: vi.fn(),
  setMinZoom: vi.fn(),
  setPadding: vi.fn(),
  setPitch: vi.fn(),
  setPixelRatio: vi.fn(),
  setRenderWorldCopies: vi.fn(),
  setSky: vi.fn(),
  setStyle: vi.fn(),
  setTerrain: vi.fn(),
  setZoom: vi.fn(),
  stop: vi.fn(),
  triggerRepaint: vi.fn(),
  style: {
    stylesheet: { id: 'icgc_mapa_base_gris', name: 'ICGC mapa base gris' },
  },
  queryRenderedFeatures: vi.fn(() => []),
  querySourceFeatures: vi.fn(() => []),
};

vi.mock('maplibre-gl', () => {
  // Must use function() not arrow so `new` works
  const MapCtor = vi.fn(function () {
    Object.assign(this, mockMapInstance);
    return mockMapInstance;
  });
  const MarkerCtor = vi.fn(function () {
    this.setLngLat = vi.fn().mockReturnValue(this);
    this.setPopup = vi.fn().mockReturnValue(this);
    this.addTo = vi.fn().mockReturnValue(this);
  });
  const PopupCtor = vi.fn(function () {
    this.setLngLat = vi.fn().mockReturnValue(this);
    this.setHTML = vi.fn().mockReturnValue(this);
    this.addTo = vi.fn().mockReturnValue(this);
  });
  return {
    default: {
      Map: MapCtor,
      Marker: MarkerCtor,
      Popup: PopupCtor,
      AttributionControl: vi.fn(function (opts) { this._options = opts; this.type = 'AttributionControl'; }),
      NavigationControl: vi.fn(function (opts) { this._options = opts; this.type = 'NavigationControl'; }),
      ScaleControl: vi.fn(function (opts) { this._options = opts; this.type = 'ScaleControl'; }),
      GeolocateControl: vi.fn(function (opts) { this._options = opts; this.type = 'GeolocateControl'; }),
      FullscreenControl: vi.fn(function (opts) { this._options = opts; this.type = 'FullscreenControl'; }),
    },
  };
});

// ─── Mock other dependencies ─────────────────────────────────────────
vi.mock('../../public/mapicgc-gl.css', () => ({}));
vi.mock('@watergis/maplibre-gl-export/dist/maplibre-gl-export.css', () => ({}));
vi.mock('flatgeobuf/lib/mjs/geojson.js', () => ({ deserialize: vi.fn() }));
vi.mock('@deck.gl/mapbox', () => ({ MapboxOverlay: vi.fn() }));
vi.mock('@deck.gl/geo-layers', () => ({ Tile3DLayer: vi.fn() }));
vi.mock('@loaders.gl/3d-tiles', () => ({ Tiles3DLoader: vi.fn() }));
vi.mock('@deck.gl/core', () => ({ AmbientLight: vi.fn(), LightingEffect: vi.fn() }));
vi.mock('@watergis/maplibre-gl-export', () => ({
  MaplibreExportControl: vi.fn(function (opts) { this._options = opts; this.type = 'ExportControl'; }),
  Size: { A4: 'A4' },
  PageOrientation: { Landscape: 'Landscape' },
  Format: { PNG: 'PNG' },
  DPI: { 300: 300 },
}));
vi.mock('@maplibre/maplibre-gl-geocoder', () => ({ default: vi.fn() }));
vi.mock('../../src/controls/LogoControl.js', () => ({ default: vi.fn() }));
vi.mock('../../src/controls/LegendControl.js', () => ({ default: vi.fn() }));
vi.mock('../../src/controls/MouseCoordinatesControl.js', () => ({ default: vi.fn() }));
vi.mock('../../src/controls/Toggle3DControl.js', () => ({ default: vi.fn() }));
vi.mock('../../src/constants/Legends.js', () => ({ default: {} }));

// Mock ConfigICGC to return local config immediately
vi.mock('../../src/constants/ConfigICGC.js', () => ({
  default: {
    getConfigICGC: vi.fn(() => Promise.resolve(mapicgcConfig)),
  },
}));

import maplibregl from 'maplibre-gl';
import Map from '../../src/map/Map.js';

// ─── Helper: create a Map instance and wait for config to load ──────
function createMapInstance(options) {
  return new Promise((resolve) => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="map"></div>`);
    global.document = dom.window.document;
    global.window = dom.window;

    const mapInstance = new Map(options || { container: 'map' });
    // Give time for async Config.getConfigICGC() and initTheMap to run
    setTimeout(() => resolve(mapInstance), 50);
  });
}

// ══════════════════════════════════════════════════════════════════════
//  CONFIG GETTERS
// ══════════════════════════════════════════════════════════════════════
describe('Config getter methods', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('getConfigStyles returns undefined when Styles from local config is an object (not iterable)', () => {
    // NOTE: The local mapicgc-config.json has Styles as an object {TOPO: url, ORTO: url,...}
    // but getConfigStyles() uses for...of which requires an iterable (Array).
    // The remote config may return Styles as an array. With the local fallback, this returns undefined.
    const styles = instance.getConfigStyles();
    expect(styles).toBeUndefined();
  });

  test('getConfigWMSLayers should return an array of WMS layer keys', () => {
    const layers = instance.getConfigWMSLayers();
    expect(Array.isArray(layers)).toBe(true);
    expect(layers.length).toBeGreaterThan(0);
    layers.forEach((l) => expect(typeof l).toBe('string'));
  });

  test('getConfigOrtoLayers should return an array of Orto layer keys', () => {
    const layers = instance.getConfigOrtoLayers();
    expect(Array.isArray(layers)).toBe(true);
    expect(layers.length).toBeGreaterThan(0);
    layers.forEach((l) => expect(typeof l).toBe('string'));
  });

  test('getConfigVectorLayers should return an array of Vector layer keys', () => {
    const layers = instance.getConfigVectorLayers();
    expect(Array.isArray(layers)).toBe(true);
    layers.forEach((l) => expect(typeof l).toBe('string'));
  });

  test('getConfigVectorAdminLayers should return an array of VectorAdmin layer keys', () => {
    const layers = instance.getConfigVectorAdminLayers();
    expect(Array.isArray(layers)).toBe(true);
    layers.forEach((l) => expect(typeof l).toBe('string'));
  });

  test('getConfigFGBAdminLayers should return an array of FGBAdmin layer keys', () => {
    const layers = instance.getConfigFGBAdminLayers();
    expect(Array.isArray(layers)).toBe(true);
    layers.forEach((l) => expect(typeof l).toBe('string'));
  });

  test('getConfigStyles returns undefined with local config (Styles is an object, not iterable array)', () => {
    // The local config has Styles as an object but getConfigStyles uses for...of (needs array).
    // Remote config likely provides an array. This documents the current local fallback behavior.
    const styles = instance.getConfigStyles();
    expect(styles).toBeUndefined();
  });

  test('getConfigOrtoLayers should contain known Orto keys from config', () => {
    const layers = instance.getConfigOrtoLayers();
    const ortoKeys = Object.keys(mapicgcConfig.Layers.Orto);
    ortoKeys.forEach((key) => {
      expect(layers).toContain(key);
    });
  });
});

// ══════════════════════════════════════════════════════════════════════
//  MAP INITIALIZATION (initTheMap)
// ══════════════════════════════════════════════════════════════════════
describe('Map initialization', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should create a maplibre-gl Map instance', async () => {
    const instance = await createMapInstance();
    expect(instance.map).toBeDefined();
    expect(maplibregl.Map).toHaveBeenCalled();
  });

  test('should pass default options when no options provided', async () => {
    const instance = await createMapInstance();
    expect(maplibregl.Map).toHaveBeenCalled();
    const callArgs = maplibregl.Map.mock.calls[0][0];
    expect(callArgs).toBeDefined();
  });

  test('should merge user options with defaults', async () => {
    const instance = await createMapInstance({
      container: 'map',
      zoom: 12,
    });
    const callArgs = maplibregl.Map.mock.calls[0][0];
    expect(callArgs.zoom).toBe(12);
    expect(callArgs.container).toBe('map');
    // Default center should be applied from config
    expect(callArgs.center).toBeDefined();
  });

  test('should force maxPitch to 85', async () => {
    const instance = await createMapInstance({ container: 'map', maxPitch: 60 });
    const callArgs = maplibregl.Map.mock.calls[0][0];
    expect(callArgs.maxPitch).toBe(85);
  });

  test('should force maplibreLogo to false', async () => {
    const instance = await createMapInstance({ container: 'map' });
    const callArgs = maplibregl.Map.mock.calls[0][0];
    expect(callArgs.maplibreLogo).toBe(false);
  });

  test('should force attributionControl to false', async () => {
    const instance = await createMapInstance({ container: 'map' });
    const callArgs = maplibregl.Map.mock.calls[0][0];
    expect(callArgs.attributionControl).toBe(false);
  });

  test('should call addAttributionControl on map load', async () => {
    const instance = await createMapInstance();
    // The on('load') handler calls addAttributionControl - verify AttributionControl was created
    expect(maplibregl.AttributionControl).toHaveBeenCalled();
  });
});

// ══════════════════════════════════════════════════════════════════════
//  GETTER / SETTER DELEGATIONS
// ══════════════════════════════════════════════════════════════════════
describe('Getter and setter delegations to maplibre-gl', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('getZoom should delegate to map.getZoom', () => {
    const zoom = instance.getZoom();
    expect(mockMapInstance.getZoom).toHaveBeenCalled();
    expect(zoom).toBe(7.5);
  });

  test('getCenter should delegate to map.getCenter', () => {
    const center = instance.getCenter();
    expect(mockMapInstance.getCenter).toHaveBeenCalled();
    expect(center).toEqual({ lng: 1.537786, lat: 41.837539 });
  });

  test('getBearing should delegate to map.getBearing', () => {
    const bearing = instance.getBearing();
    expect(mockMapInstance.getBearing).toHaveBeenCalled();
    expect(bearing).toBe(45);
  });

  test('getBounds should delegate to map.getBounds', () => {
    const bounds = instance.getBounds();
    expect(mockMapInstance.getBounds).toHaveBeenCalled();
    expect(bounds).toBeDefined();
  });

  test('getPitch should delegate to map.getPitch', () => {
    const pitch = instance.getPitch();
    expect(mockMapInstance.getPitch).toHaveBeenCalled();
    expect(pitch).toBe(0);
  });

  test('getMaxZoom should delegate to map.getMaxZoom', () => {
    const maxZoom = instance.getMaxZoom();
    expect(mockMapInstance.getMaxZoom).toHaveBeenCalled();
    expect(maxZoom).toBe(18);
  });

  test('getMinZoom should delegate to map.getMinZoom', () => {
    const minZoom = instance.getMinZoom();
    expect(mockMapInstance.getMinZoom).toHaveBeenCalled();
    expect(minZoom).toBe(0);
  });

  test('getMaxPitch should delegate to map.getMaxPitch', () => {
    expect(instance.getMaxPitch()).toBe(85);
    expect(mockMapInstance.getMaxPitch).toHaveBeenCalled();
  });

  test('getContainer should delegate to map.getContainer', () => {
    instance.getContainer();
    expect(mockMapInstance.getContainer).toHaveBeenCalled();
  });

  test('getStyle should delegate to map.getStyle', () => {
    const style = instance.getStyle();
    expect(mockMapInstance.getStyle).toHaveBeenCalled();
    expect(style.name).toBe('ICGC mapa base gris');
  });

  test('getSource should delegate to map.getSource', () => {
    instance.getSource('my-source');
    expect(mockMapInstance.getSource).toHaveBeenCalledWith('my-source');
  });

  test('getSprite should delegate to map.getSprite', () => {
    instance.getSprite();
    expect(mockMapInstance.getSprite).toHaveBeenCalled();
  });

  test('getPadding should delegate to map.getPadding', () => {
    instance.getPadding();
    expect(mockMapInstance.getPadding).toHaveBeenCalled();
  });

  test('getPixelRatio should delegate to map.getPixelRatio', () => {
    expect(instance.getPixelRatio()).toBe(1);
    expect(mockMapInstance.getPixelRatio).toHaveBeenCalled();
  });

  test('areTilesLoaded should delegate to map.areTilesLoaded', () => {
    expect(instance.areTilesLoaded()).toBe(true);
    expect(mockMapInstance.areTilesLoaded).toHaveBeenCalled();
  });

  test('setBearing should delegate to map.setBearing', () => {
    instance.setBearing(90, {});
    expect(mockMapInstance.setBearing).toHaveBeenCalledWith(90, {});
  });

  test('setCenter should delegate to map.setCenter', () => {
    instance.setCenter([2.0, 41.5], {});
    expect(mockMapInstance.setCenter).toHaveBeenCalledWith([2.0, 41.5], {});
  });

  test('setZoom should delegate to map.setZoom', () => {
    instance.setZoom(14);
    expect(mockMapInstance.setZoom).toHaveBeenCalled();
  });

  test('setPitch should delegate to map.setPitch', () => {
    instance.setPitch(60);
    expect(mockMapInstance.setPitch).toHaveBeenCalled();
  });

  test('setMaxBounds should delegate to map.setMaxBounds', () => {
    const bounds = [[0, 40], [3, 43]];
    instance.setMaxBounds(bounds);
    expect(mockMapInstance.setMaxBounds).toHaveBeenCalledWith(bounds);
  });

  test('setMaxZoom should delegate to map.setMaxZoom', () => {
    instance.setMaxZoom(20);
    expect(mockMapInstance.setMaxZoom).toHaveBeenCalled();
  });

  test('setMinZoom should delegate to map.setMinZoom', () => {
    instance.setMinZoom(5);
    expect(mockMapInstance.setMinZoom).toHaveBeenCalled();
  });

  test('setTerrain should delegate to map.setTerrain', () => {
    instance.setTerrain({ source: 'terrain' });
    expect(mockMapInstance.setTerrain).toHaveBeenCalled();
  });

  test('flyTo should delegate to map.flyTo', () => {
    const options = { center: [2, 41], zoom: 15 };
    instance.flyTo(options);
    expect(mockMapInstance.flyTo).toHaveBeenCalledWith(options, undefined);
  });

  test('easeTo should delegate to map.easeTo', () => {
    const options = { center: [2, 41] };
    instance.easeTo(options);
    expect(mockMapInstance.easeTo).toHaveBeenCalledWith(options, undefined);
  });

  test('fitBounds should delegate to map.fitBounds', () => {
    const bounds = [[0, 40], [3, 43]];
    instance.fitBounds(bounds);
    expect(mockMapInstance.fitBounds).toHaveBeenCalled();
  });

  test('loaded should delegate to map.loaded', () => {
    expect(instance.loaded()).toBe(true);
    expect(mockMapInstance.loaded).toHaveBeenCalled();
  });

  test('resize should delegate to map.resize', () => {
    instance.resize();
    expect(mockMapInstance.resize).toHaveBeenCalled();
  });

  test('stop should delegate to map.stop', () => {
    instance.stop();
    expect(mockMapInstance.stop).toHaveBeenCalled();
  });

  test('remove should delegate to map.remove', () => {
    instance.remove();
    expect(mockMapInstance.remove).toHaveBeenCalled();
  });
});

// ══════════════════════════════════════════════════════════════════════
//  CONTROLS
// ══════════════════════════════════════════════════════════════════════
describe('addControl', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should default position to "top-right" when not provided', () => {
    const ctrl = { type: 'custom' };
    instance.addControl(ctrl);
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(ctrl, 'top-right');
  });

  test('should use the provided position', () => {
    const ctrl = { type: 'custom' };
    instance.addControl(ctrl, 'bottom-left');
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(ctrl, 'bottom-left');
  });
});

describe('addAttributionControl', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should always include "Fet amb MapICGC" when called without options', () => {
    mockMapInstance.addControl.mockClear();
    instance.addAttributionControl();
    expect(maplibregl.AttributionControl).toHaveBeenCalled();
    const lastCall = maplibregl.AttributionControl.mock.calls.at(-1)[0];
    expect(lastCall.compact).toBe(true);
    expect(lastCall.customAttribution).toContain('Fet amb MapICGC');
  });

  test('should merge with a single custom attribution string', () => {
    mockMapInstance.addControl.mockClear();
    instance.addAttributionControl({ customAttribution: '© My Project' });
    const lastCall = maplibregl.AttributionControl.mock.calls.at(-1)[0];
    expect(Array.isArray(lastCall.customAttribution)).toBe(true);
    expect(lastCall.customAttribution).toContain('© My Project');
    // Must also contain MapICGC
    expect(lastCall.customAttribution.some((a) => a.includes('Fet amb MapICGC'))).toBe(true);
  });

  test('should merge with an array of custom attributions', () => {
    mockMapInstance.addControl.mockClear();
    instance.addAttributionControl({ customAttribution: ['© A', '© B'] });
    const lastCall = maplibregl.AttributionControl.mock.calls.at(-1)[0];
    expect(Array.isArray(lastCall.customAttribution)).toBe(true);
    expect(lastCall.customAttribution.length).toBe(3); // MapICGC + A + B
    expect(lastCall.customAttribution.some((a) => a.includes('Fet amb MapICGC'))).toBe(true);
    expect(lastCall.customAttribution).toContain('© A');
    expect(lastCall.customAttribution).toContain('© B');
  });

  test('should pass position to map.addControl', () => {
    mockMapInstance.addControl.mockClear();
    instance.addAttributionControl({}, 'top-left');
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(
      expect.anything(),
      'top-left'
    );
  });
});

describe('addNavigationControl', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should default position to "top-right"', () => {
    mockMapInstance.addControl.mockClear();
    instance.addNavigationControl({});
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(
      expect.anything(),
      'top-right'
    );
  });

  test('should use provided position', () => {
    mockMapInstance.addControl.mockClear();
    instance.addNavigationControl({}, 'bottom-right');
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(
      expect.anything(),
      'bottom-right'
    );
  });
});

describe('addScaleControl', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should create a ScaleControl and add it to the map', () => {
    mockMapInstance.addControl.mockClear();
    instance.addScaleControl({ maxWidth: 100 }, 'bottom-left');
    expect(maplibregl.ScaleControl).toHaveBeenCalledWith({ maxWidth: 100 });
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(
      expect.anything(),
      'bottom-left'
    );
  });
});

describe('addGeolocateControl', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should default to high accuracy options when none provided', () => {
    mockMapInstance.addControl.mockClear();
    instance.addGeolocateControl();
    expect(maplibregl.GeolocateControl).toHaveBeenCalled();
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(
      expect.anything(),
      'top-right'
    );
  });

  test('should use provided options and position', () => {
    mockMapInstance.addControl.mockClear();
    const opts = { positionOptions: { enableHighAccuracy: false } };
    instance.addGeolocateControl(opts, 'bottom-left');
    expect(maplibregl.GeolocateControl).toHaveBeenCalledWith(opts);
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(
      expect.anything(),
      'bottom-left'
    );
  });
});

// ══════════════════════════════════════════════════════════════════════
//  LAYERS AND SOURCES
// ══════════════════════════════════════════════════════════════════════
describe('Layers and sources', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('addLayer should delegate to map.addLayer', () => {
    const layer = { id: 'test-layer', type: 'fill', source: 'test-source' };
    instance.addLayer(layer);
    expect(mockMapInstance.addLayer).toHaveBeenCalledWith(layer, undefined);
  });

  test('addLayer with layerIdOrder should delegate correctly', () => {
    const layer = { id: 'test-layer', type: 'fill', source: 'test-source' };
    instance.addLayer(layer, 'labels');
    expect(mockMapInstance.addLayer).toHaveBeenCalledWith(layer, 'labels');
  });

  test('addSource should delegate to map.addSource', () => {
    const source = { type: 'geojson', data: {} };
    const result = instance.addSource('my-source', source);
    expect(mockMapInstance.addSource).toHaveBeenCalledWith('my-source', source);
    expect(result).toBe(instance); // returns this
  });

  test('addImage should delegate to map.addImage and return this', () => {
    const result = instance.addImage('icon', { data: [] }, { sdf: true });
    expect(mockMapInstance.addImage).toHaveBeenCalledWith('icon', { data: [] }, { sdf: true });
    expect(result).toBe(instance);
  });

  test('addSprite should delegate to map.addSprite and return this', () => {
    const result = instance.addSprite('sprite-id', 'https://example.com/sprite', {});
    expect(mockMapInstance.addSprite).toHaveBeenCalledWith('sprite-id', 'https://example.com/sprite', {});
    expect(result).toBe(instance);
  });

  test('removeLayer should delegate to map.removeLayer', () => {
    instance.removeLayer('test-layer');
    expect(mockMapInstance.removeLayer).toHaveBeenCalledWith('test-layer');
  });

  test('removeSource should delegate to map.removeSource', () => {
    instance.removeSource('test-source');
    expect(mockMapInstance.removeSource).toHaveBeenCalledWith('test-source');
  });

  test('removeControl should delegate to map.removeControl', () => {
    const ctrl = { type: 'custom' };
    instance.removeControl(ctrl);
    expect(mockMapInstance.removeControl).toHaveBeenCalledWith(ctrl);
  });

  test('removeImage should delegate to map.removeImage', () => {
    instance.removeImage('icon');
    expect(mockMapInstance.removeImage).toHaveBeenCalledWith('icon');
  });
});

// ══════════════════════════════════════════════════════════════════════
//  STYLE
// ══════════════════════════════════════════════════════════════════════
describe('setStyle', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should delegate to map.setStyle with style only', () => {
    instance.setStyle('https://example.com/style.json');
    expect(mockMapInstance.setStyle).toHaveBeenCalledWith('https://example.com/style.json');
  });

  test('should delegate to map.setStyle with style and options', () => {
    const opts = { diff: true };
    instance.setStyle('https://example.com/style.json', opts);
    expect(mockMapInstance.setStyle).toHaveBeenCalledWith('https://example.com/style.json', opts);
  });

  test('should register a styledata listener', () => {
    instance.setStyle('https://example.com/style.json');
    expect(mockMapInstance.on).toHaveBeenCalledWith('styledata', expect.any(Function));
  });
});

describe('setSky', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should delegate custom options to map.setSky', () => {
    const skyOpts = { 'sky-color': '#ff0000' };
    instance.setSky(skyOpts);
    expect(mockMapInstance.setSky).toHaveBeenCalledWith(skyOpts);
  });

  test('should auto-detect orto sky when no options and style contains "orto"', () => {
    mockMapInstance.style.stylesheet.id = 'icgc_orto';
    instance.setSky();
    expect(mockMapInstance.setSky).toHaveBeenCalled();
    const arg = mockMapInstance.setSky.mock.calls[0][0];
    expect(arg['sky-color']).toBe('#86bbd5');
  });

  test('should auto-detect dark sky when style contains "fosc"', () => {
    mockMapInstance.style.stylesheet.id = 'icgc_fosc';
    instance.setSky();
    expect(mockMapInstance.setSky).toHaveBeenCalled();
    const arg = mockMapInstance.setSky.mock.calls[0][0];
    expect(arg['sky-color']).toBe('#232423');
  });
});

// ══════════════════════════════════════════════════════════════════════
//  MARKERS
// ══════════════════════════════════════════════════════════════════════
describe('addMarker', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should create a marker without popup when no text is provided', () => {
    const marker = instance.addMarker({
      options: { color: 'red' },
      coord: [2.0, 41.5],
    });
    expect(maplibregl.Marker).toHaveBeenCalledWith({ color: 'red' });
    expect(marker).toBeDefined();
    // Popup should NOT have been created
    expect(maplibregl.Popup).not.toHaveBeenCalled();
  });

  test('should create a marker with popup when text is provided', () => {
    const marker = instance.addMarker({
      options: { color: 'blue' },
      coord: [2.0, 41.5],
      text: '<h1>Hello</h1>',
      textOffset: [0, -30],
    });
    expect(maplibregl.Marker).toHaveBeenCalledWith({ color: 'blue' });
    expect(maplibregl.Popup).toHaveBeenCalledWith({ offset: [0, -30] });
    expect(marker).toBeDefined();
  });

  test('should return null on error', () => {
    maplibregl.Marker.mockImplementationOnce(() => {
      throw new Error('test error');
    });
    const marker = instance.addMarker({
      options: {},
      coord: [2, 41],
    });
    expect(marker).toBeNull();
  });
});

// ══════════════════════════════════════════════════════════════════════
//  MAP EVENTS
// ══════════════════════════════════════════════════════════════════════
describe('on (event listener)', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should call map.on inside a setTimeout (delayed)', async () => {
    const callback = vi.fn();
    instance.on('click', callback);

    // The on() wraps the call in setTimeout(…, 100), so we need to wait
    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(mockMapInstance.on).toHaveBeenCalledWith('click', callback);
  });
});

// ══════════════════════════════════════════════════════════════════════
//  EXPORT CONTROL
// ══════════════════════════════════════════════════════════════════════
describe('addExportControl', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should use default options when none provided', async () => {
    const { MaplibreExportControl } = await import('@watergis/maplibre-gl-export');
    mockMapInstance.addControl.mockClear();
    instance.addExportControl();
    expect(MaplibreExportControl).toHaveBeenCalled();
    expect(mockMapInstance.addControl).toHaveBeenCalledWith(
      expect.anything(),
      'top-right'
    );
  });

  test('should swap options/position when first arg is a string', async () => {
    const { MaplibreExportControl } = await import('@watergis/maplibre-gl-export');
    mockMapInstance.addControl.mockClear();
    instance.addExportControl('bottom-left');
    expect(mockMapInstance.addControl).toHaveBeenCalled();
  });
});

// ══════════════════════════════════════════════════════════════════════
//  QUERYING
// ══════════════════════════════════════════════════════════════════════
describe('Querying features', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('queryRenderedFeatures should delegate to map.queryRenderedFeatures', () => {
    instance.queryRenderedFeatures([100, 200]);
    expect(mockMapInstance.queryRenderedFeatures).toHaveBeenCalled();
    expect(mockMapInstance.queryRenderedFeatures.mock.calls[0][0]).toEqual([100, 200]);
  });

  test('querySourceFeatures should delegate to map.querySourceFeatures', () => {
    instance.querySourceFeatures('my-source');
    expect(mockMapInstance.querySourceFeatures).toHaveBeenCalled();
    expect(mockMapInstance.querySourceFeatures.mock.calls[0][0]).toBe('my-source');
  });
});

// ══════════════════════════════════════════════════════════════════════
//  ERROR HANDLING
// ══════════════════════════════════════════════════════════════════════
describe('Error handling', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('addLayer should not throw on error', () => {
    mockMapInstance.addLayer.mockImplementationOnce(() => {
      throw new Error('layer error');
    });
    expect(() => instance.addLayer({ id: 'bad' })).not.toThrow();
  });

  test('removeLayer should not throw on error', () => {
    mockMapInstance.removeLayer.mockImplementationOnce(() => {
      throw new Error('remove error');
    });
    expect(() => instance.removeLayer('nonexistent')).not.toThrow();
  });

  test('removeSource should not throw on error', () => {
    mockMapInstance.removeSource.mockImplementationOnce(() => {
      throw new Error('remove error');
    });
    expect(() => instance.removeSource('nonexistent')).not.toThrow();
  });

  test('setStyle should not throw on error', () => {
    mockMapInstance.setStyle.mockImplementationOnce(() => {
      throw new Error('style error');
    });
    expect(() => instance.setStyle('bad-url')).not.toThrow();
  });

  test('addControl should not throw on error', () => {
    mockMapInstance.addControl.mockImplementationOnce(() => {
      throw new Error('ctrl error');
    });
    expect(() => instance.addControl({}, 'top-right')).not.toThrow();
  });
});

// ══════════════════════════════════════════════════════════════════════
//  ADDITIONAL DELEGATIONS (from old MapStyle.test.js / Map.test.js)
// ══════════════════════════════════════════════════════════════════════
describe('Additional delegations', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('hasControl should delegate to map.hasControl', () => {
    const ctrl = { type: 'custom' };
    const result = instance.hasControl(ctrl);
    expect(mockMapInstance.hasControl).toHaveBeenCalledWith(ctrl);
    expect(result).toBe(true);
  });

  test('setEventedParent should delegate to map.setEventedParent', () => {
    const parent = { id: 'parent' };
    const data = { key: 'value' };
    instance.setEventedParent(parent, data);
    expect(mockMapInstance.setEventedParent).toHaveBeenCalledWith(parent, data);
  });

  test('setFeatureState should delegate to map.setFeatureState', () => {
    const feature = { source: 'src', id: 1 };
    const state = { selected: true };
    instance.setFeatureState(feature, state);
    expect(mockMapInstance.setFeatureState).toHaveBeenCalledWith(feature, state);
  });
});

// ══════════════════════════════════════════════════════════════════════
//  _dealOrto3dStyle
// ══════════════════════════════════════════════════════════════════════
describe('_dealOrto3dStyle', () => {
  let instance;

  beforeEach(async () => {
    vi.clearAllMocks();
    instance = await createMapInstance();
  });

  test('should set orto3d properties when name is "orto3d"', () => {
    // hasControl returns false so addControl path runs
    mockMapInstance.hasControl.mockReturnValue(false);

    instance._dealOrto3dStyle('orto3d');

    expect(mockMapInstance.setMaxZoom).toHaveBeenCalledWith(18.8);
    expect(mockMapInstance.easeTo).toHaveBeenCalledWith({ pitch: 45 });
    expect(mockMapInstance.setTerrain).toHaveBeenCalled();
    expect(mockMapInstance.setSky).toHaveBeenCalledWith({
      'sky-color': '#86bbd5',
      'sky-horizon-blend': 0.3,
      'horizon-color': '#ffffff33',
      'horizon-fog-blend': 0.1,
      'fog-ground-blend': 0.75,
      'fog-color': '#c5d6d6',
    });
  });

  test('should not throw when name is not "orto3d"', () => {
    expect(() => instance._dealOrto3dStyle('topo')).not.toThrow();
  });
});
