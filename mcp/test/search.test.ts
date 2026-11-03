import { describe, expect, it } from "vitest";
import { searchDocs, getExample } from "../src/content.js";

describe("searchDocs", () => {
  it("returns an empty array for an empty query", async () => {
    const results = await searchDocs("", 5);
    expect(results).toEqual([]);
  });

  it("finds relevant sections for a known method name", async () => {
    const results = await searchDocs("addMarker", 5);
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.heading.toLowerCase().includes("addmarker"))).toBe(true);
  });

  it("is case-insensitive", async () => {
    const lower = await searchDocs("geocoder", 5);
    const upper = await searchDocs("GEOCODER", 5);
    expect(lower.length).toBe(upper.length);
  });

  it("is accent-insensitive (Catalan queries)", async () => {
    const results = await searchDocs("terreny", 5);
    expect(results.length).toBeGreaterThan(0);
  });

  it("respects the limit parameter", async () => {
    const results = await searchDocs("map", 2);
    expect(results.length).toBeLessThanOrEqual(2);
  });

  it("ranks heading matches above body-only matches", async () => {
    const results = await searchDocs("addTerrainICGC", 10);
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].heading.toLowerCase()).toContain("addterrainicgc");
  });

  it("returns no results for nonsense queries", async () => {
    const results = await searchDocs("zzzxyznonexistentquery123", 5);
    expect(results).toEqual([]);
  });
});

describe("getExample", () => {
  it("finds the 3D terrain example by topic", async () => {
    const example = await getExample("terreny 3D");
    expect(example).not.toBeNull();
    expect(example!.file).toBe("examples/terreny-3d.md");
  });

  it("finds the marker example by topic", async () => {
    const example = await getExample("marcadors");
    expect(example).not.toBeNull();
    expect(example!.text).toContain("addMarker");
  });

  it("returns null for an unrelated topic", async () => {
    const example = await getExample("zzzxyznonexistenttopic123");
    expect(example).toBeNull();
  });
});
