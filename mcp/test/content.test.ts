import { describe, expect, it, beforeAll } from "vitest";
import { loadIndex, getApiDoc, getChangelog, listExamples, readContentFile } from "../src/content.js";

describe("content loading", () => {
  beforeAll(async () => {
    await loadIndex();
  });

  it("loads sections from the synced docu_Map.md reference", async () => {
    const { sections } = await loadIndex();
    const fromDocuMap = sections.filter((s) => s.source === "docu_Map.md");
    expect(fromDocuMap.length).toBeGreaterThan(0);
  });

  it("reads README.md as plain text", async () => {
    const readme = await readContentFile("README.md");
    expect(readme).toBeTruthy();
    expect(readme).toContain("MapICGC");
  });

  it("returns null for a file that does not exist", async () => {
    const missing = await readContentFile("does-not-exist.md");
    expect(missing).toBeNull();
  });

  it("finds API documentation for a known method", async () => {
    const doc = await getApiDoc("addMarker");
    expect(doc).not.toBeNull();
    expect(doc!.heading.toLowerCase()).toContain("addmarker");
  });

  it("accepts a 'Map.' prefix when looking up API docs", async () => {
    const doc = await getApiDoc("Map.addGeocoderICGC");
    expect(doc).not.toBeNull();
  });

  it("returns null for an unknown API name", async () => {
    const doc = await getApiDoc("thisMethodDoesNotExist12345");
    expect(doc).toBeNull();
  });

  it("returns the full changelog when no version is given", async () => {
    const changelog = await getChangelog();
    expect(changelog).toBeTruthy();
  });

  it("returns the body content for a specific changelog version, not just the heading", async () => {
    const changelog = await getChangelog("1.0.0");
    expect(changelog).toBeTruthy();
    expect(changelog!.length).toBeGreaterThan("## 1.0.0".length);
    expect(changelog!.toLowerCase()).toContain("deck.gl");
  });

  it("returns null for a changelog version that does not exist", async () => {
    const changelog = await getChangelog("999.999.999");
    expect(changelog).toBeNull();
  });

  it("lists the hand-written examples under content/examples", async () => {
    const examples = await listExamples();
    expect(examples.length).toBeGreaterThanOrEqual(10);
    const files = examples.map((e) => e.file);
    expect(files).toContain("examples/mapa-basic.md");
  });
});
