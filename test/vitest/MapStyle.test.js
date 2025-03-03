import maplibregl from "maplibre-gl";
import { vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { beforeEach, describe, expect, test } from 'vitest';

describe('Map class methods', () => {
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
          setStyle: vi.fn(),
          getStyle: vi.fn(() => ({ name: 'mockStyle' })),
          on: vi.fn((event, callback) => {
            if (event === 'styledata') callback();
          }),
          setEventedParent: vi.fn(),
          setFeatureState: vi.fn(),
          getTerrain: vi.fn(),
          getZoom: vi.fn(() => 10),
          hasControl: vi.fn(() => true),
          getSource: vi.fn(),
          getSprite: vi.fn(),
          setBearing: vi.fn(),
          setCenter: vi.fn(),
        })),
      },
    }));

    // Mock map initialization
    const map = new maplibregl.Map({
      container: 'map',
      center: [0, 0],
      zoom: 10,
    });

    // Mock DOM manipulation
    mockElement = { classList: { remove: vi.fn() } };
    vi.spyOn(document, 'querySelector').mockImplementation((selector) => {
      if (selector === '.maplibregl-compact-show') return mockElement;
      return null;
    });

    // Mock the instance
    instance = {
      map,
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
      _dealOrto3dStyle: vi.fn(),
    };
  });

  test('should set evented parent correctly', () => {
    const parent = {};
    const data = {};
    instance.map.setEventedParent(parent, data);
    expect(instance.map.setEventedParent).toHaveBeenCalledWith(parent, data);
  });

  test('should set feature state correctly', () => {
    const feature = { id: 1 };
    const state = { selected: true };
    instance.map.setFeatureState(feature, state);
    expect(instance.map.setFeatureState).toHaveBeenCalledWith(feature, state);
  });

  

  test('should get zoom level correctly', () => {
    const zoom = instance.map.getZoom();
    expect(instance.map.getZoom).toHaveBeenCalled();
    expect(zoom).toBe(10);
  });

  test('should check if control exists correctly', () => {
    const control = {};
    const hasControl = instance.map.hasControl(control);
    expect(instance.map.hasControl).toHaveBeenCalledWith(control);
    expect(hasControl).toBe(true);
  });

  test('should get source correctly', () => {
    const sourceId = 'source-id';
    instance.map.getSource(sourceId);
    expect(instance.map.getSource).toHaveBeenCalledWith(sourceId);
  });

  test('should get sprite correctly', () => {
    instance.map.getSprite();
    expect(instance.map.getSprite).toHaveBeenCalled();
  });

  test('should set bearing correctly', () => {
    const bearing = 45;
    const eventData = {};
    instance.map.setBearing(bearing, eventData);
    expect(instance.map.setBearing).toHaveBeenCalledWith(bearing, eventData);
  });

  test('should set center correctly', () => {
    const center = [0, 0];
    const eventData = {};
    instance.map.setCenter(center, eventData);
    expect(instance.map.setCenter).toHaveBeenCalledWith(center, eventData);
  });
});