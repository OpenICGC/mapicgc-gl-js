import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('searchApiTerritorialICGC', () => {
  beforeEach(() => {
    vi.resetModules();
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ features: [] }),
    });
  });

  test('adds skipgeometry=true when skipGeometry is enabled', async () => {
    const { searchApiTerritorialICGC } = await import('../../src/territorial/searchApiTerritorialICGC.js');

    await searchApiTerritorialICGC(1.5, 41.8, {
      collections: 'municipis',
      skipGeometry: true,
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('skipgeometry=true'),
      expect.objectContaining({
        headers: {
          Accept: 'application/geo+json',
        },
      })
    );
  });

  test('keeps geometry in direct helper calls by default', async () => {
    const { searchApiTerritorialICGC } = await import('../../src/territorial/searchApiTerritorialICGC.js');

    await searchApiTerritorialICGC(1.5, 41.8, {
      collections: 'municipis',
    });

    expect(global.fetch).toHaveBeenCalledWith(
      expect.not.stringContaining('skipgeometry=true'),
      expect.any(Object)
    );
  });
});

describe('ApiTerritorialControl', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  test('uses skipGeometry=true by default for map click lookups', async () => {
    const searchApiTerritorialICGC = vi.fn().mockResolvedValue({});

    vi.doMock('../../src/territorial/searchApiTerritorialICGC.js', () => ({
      searchApiTerritorialICGC,
    }));

    const { default: ApiTerritorialControl } = await import('../../src/controls/ApiTerritorialControl.js');
    const control = new ApiTerritorialControl();

    control._map = {};

    await control._handleMapClick({
      lngLat: {
        lng: 1.5,
        lat: 41.8,
      },
    });

    expect(searchApiTerritorialICGC).toHaveBeenCalledWith(
      1.5,
      41.8,
      expect.objectContaining({
        skipGeometry: true,
      })
    );
  });
});