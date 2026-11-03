#!/usr/bin/env node
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const useInstalledBin = process.argv[2] === "--npx";
const npxPackage = process.argv[2] === "--npx-package" ? process.argv[3] : undefined;
const serverPath = useInstalledBin || npxPackage ? "mapicgc-mcp" : process.argv[2] ?? path.resolve(__dirname, "..", "..", "dist-mcp", "index.js");
const client = new Client({ name: "mapicgc-mcp-smoke-test", version: "1.0.0" });
const transport = new StdioClientTransport({
  command: useInstalledBin || npxPackage ? "npx" : process.execPath,
  args: npxPackage ? ["-y", "-p", npxPackage, serverPath] : [serverPath],
  env: process.env.MAPICGC_MCP_OFFLINE === "1" ? { MAPICGC_MCP_OFFLINE: "1" } : undefined,
});
const results = [];

async function check(name, operation, validate = () => true) {
  try {
    const result = await operation();
    const valid = validate(result);
    results.push({ name, ok: valid, error: valid ? "" : "Resposta buida o inesperada" });
  } catch (error) {
    results.push({ name, ok: false, error: error.message });
  }
}

function hasText(result) {
  return typeof result?.content?.[0]?.text === "string" && result.content[0].text.trim().length > 0;
}

await client.connect(transport);

await check("tools/list", () => client.listTools(), (r) => r.tools?.length === 6);
await check("resources/list", () => client.listResources(), (r) => r.resources?.length >= 2);
await check("prompts/list", () => client.listPrompts(), (r) => r.prompts?.some((p) => p.name === "crear_mapa"));

await check("get_started", () => client.callTool({ name: "get_started", arguments: {} }), hasText);
for (const query of ["marker", "terrain", "geocoder", "style"]) {
  await check(`search_docs(${query})`, () => client.callTool({ name: "search_docs", arguments: { query } }), hasText);
}
await check("search_docs(no result)", () => client.callTool({ name: "search_docs", arguments: { query: "qzxjkvbmwxyz" } }),
  (r) => hasText(r) && r.content[0].text.includes("No s'ha trobat"));

await check("get_api(Map.addMarker)", () => client.callTool({ name: "get_api", arguments: { name: "Map.addMarker" } }), hasText);
await check("get_api(Config.getConfigICGC)", () => client.callTool({ name: "get_api", arguments: { name: "Config.getConfigICGC" } }),
  (r) => hasText(r) && r.content[0].text.includes("Promise resolving"));
await check("get_api(unknown)", () => client.callTool({ name: "get_api", arguments: { name: "DefinitelyNotAnApiMethod928374" } }),
  (r) => hasText(r) && (r.content[0].text.includes("No s'ha trobat") || r.content[0].text.includes("Potser vols dir")));

for (const topic of ["marcadors", "terreny 3D", "geocodificador", "tema-inexistent-928374"]) {
  const expectedMissing = topic.startsWith("tema-inexistent");
  await check(`get_example(${topic})`, () => client.callTool({ name: "get_example", arguments: { topic } }), (r) =>
    hasText(r) && (!expectedMissing || r.content[0].text.includes("No s'ha trobat")));
}

await check("list_styles", () => client.callTool({ name: "list_styles", arguments: {} }), (r) =>
  hasText(r) && (process.env.MAPICGC_MCP_OFFLINE !== "1" || r.content[0].text.includes("còpia local empaquetada")));
await check("get_changelog(all)", () => client.callTool({ name: "get_changelog", arguments: {} }), hasText);
await check("get_changelog(1.0.0)", () => client.callTool({ name: "get_changelog", arguments: { version: "1.0.0" } }), hasText);

await client.close();

for (const result of results) {
  console.log(`${result.ok ? "OK  " : "FAIL"} ${result.name}${result.error ? `: ${result.error}` : ""}`);
}

const failures = results.filter((result) => !result.ok);
console.log(`\n${results.length - failures.length}/${results.length} comprovacions OK`);
process.exitCode = failures.length ? 1 : 0;