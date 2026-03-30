import { describe, expect, test, vi, beforeEach } from 'vitest';

// Mock axios before importing Config
vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

import axios from 'axios';
import mapicgcConfig from '../../src/mapicgc-config.json';

// Import Config after mocking axios
import Config from '../../src/constants/ConfigICGC.js';

describe('ConfigICGC', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should export a Config class with getConfigICGC static method', () => {
    expect(Config).toBeDefined();
    expect(typeof Config.getConfigICGC).toBe('function');
  });

  test('should return remote config data when API responds successfully', async () => {
    const mockRemoteConfig = {
      Styles: { TOPO: 'https://example.com/topo.json' },
      Layers: { WMS: {} },
      Terrains: {},
      defaultOptions: { mapOptions: {} },
    };

    axios.get.mockResolvedValueOnce({ data: mockRemoteConfig });

    const result = await Config.getConfigICGC();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://eines.icgc.cat/recursos/mapicgc-gl-js/mapicgc-config.json',
      { timeout: 5000 }
    );
    expect(result).toEqual(mockRemoteConfig);
  });

  test('should return local mapicgc-config.json when API returns empty data', async () => {
    axios.get.mockResolvedValueOnce({ data: null });

    const result = await Config.getConfigICGC();

    expect(result).toEqual(mapicgcConfig);
  });

  test('should return local mapicgc-config.json when API call fails with network error', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    const result = await Config.getConfigICGC();

    expect(result).toEqual(mapicgcConfig);
  });

  test('should return local mapicgc-config.json when API returns HTTP error', async () => {
    const httpError = new Error('Request failed');
    httpError.response = { data: 'Not Found', status: 404 };
    axios.get.mockRejectedValueOnce(httpError);

    const result = await Config.getConfigICGC();

    expect(result).toEqual(mapicgcConfig);
  });

  test('should return local mapicgc-config.json when server does not respond (timeout)', async () => {
    const timeoutError = new Error('Timeout');
    timeoutError.request = {};
    axios.get.mockRejectedValueOnce(timeoutError);

    const result = await Config.getConfigICGC();

    expect(result).toEqual(mapicgcConfig);
  });
});

describe('mapicgc-config.json structure', () => {
  test('should have defaultOptions with mapOptions', () => {
    expect(mapicgcConfig.defaultOptions).toBeDefined();
    expect(mapicgcConfig.defaultOptions.mapOptions).toBeDefined();
  });

  test('should have mapOptions with required fields', () => {
    const mapOpts = mapicgcConfig.defaultOptions.mapOptions;
    expect(mapOpts.container).toBeDefined();
    expect(mapOpts.center).toBeDefined();
    expect(mapOpts.zoom).toBeDefined();
    expect(mapOpts.style).toBeDefined();
    expect(mapOpts.maxZoom).toBeDefined();
  });

  test('should have center coordinates for Catalonia', () => {
    const center = mapicgcConfig.defaultOptions.mapOptions.center;
    // Catalonia approx: lon 0.15-3.33, lat 40.5-42.9
    const lon = center['0'] || center[0];
    const lat = center['1'] || center[1];
    expect(lon).toBeGreaterThan(0);
    expect(lon).toBeLessThan(4);
    expect(lat).toBeGreaterThan(40);
    expect(lat).toBeLessThan(43);
  });

  test('should have Styles configuration', () => {
    expect(mapicgcConfig.Styles).toBeDefined();
    expect(Array.isArray(mapicgcConfig.Styles) || typeof mapicgcConfig.Styles === 'object').toBe(true);
  });

  test('should have Layers configuration with WMS, Orto, Vector', () => {
    expect(mapicgcConfig.Layers).toBeDefined();
    expect(mapicgcConfig.Layers.WMS).toBeDefined();
    expect(mapicgcConfig.Layers.Orto).toBeDefined();
    expect(mapicgcConfig.Layers.Vector).toBeDefined();
  });

  test('should have Terrains configuration', () => {
    expect(mapicgcConfig.Terrains).toBeDefined();
  });

  test('should have geocoder config with pelias URLs', () => {
    const geocoder = mapicgcConfig.defaultOptions.geocoder;
    expect(geocoder).toBeDefined();
    expect(geocoder.peliasUrl1).toBeDefined();
    expect(geocoder.peliasUrl1).toContain('icgc.cat');
  });

  test('should have logo ICGC options', () => {
    const logo = mapicgcConfig.defaultOptions.logoIcgcOptions;
    expect(logo).toBeDefined();
    expect(logo.logoUrlColor).toBeDefined();
    expect(logo.logoLink).toContain('icgc.cat');
  });

  test('should have map3d options', () => {
    const opts3d = mapicgcConfig.defaultOptions.map3dOptions;
    expect(opts3d).toBeDefined();
    expect(opts3d.exaggeration).toBeDefined();
    expect(opts3d.terrainSource).toBeDefined();
  });
});
