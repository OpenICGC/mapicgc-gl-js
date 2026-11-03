/**
 * Creates and configures the MCP server instance: tools, resources and prompts.
 * This module has no knowledge of the transport (stdio vs HTTP) on purpose,
 * so both src/index.ts and src/http.ts can reuse the exact same server setup.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { readContentFile } from "./content.js";
import { registerGetStarted } from "./tools/getStarted.js";
import { registerSearchDocs } from "./tools/searchDocs.js";
import { registerGetApi } from "./tools/getApi.js";
import { registerGetExample } from "./tools/getExample.js";
import { registerListStyles } from "./tools/listStyles.js";
import { registerGetChangelog } from "./tools/getChangelog.js";

export const SERVER_NAME = "mapicgc-mcp";
export const SERVER_VERSION = "0.1.0";

export function createServer(): McpServer {
  const server = new McpServer({
    name: SERVER_NAME,
    version: SERVER_VERSION,
  });

  // --- Tools -----------------------------------------------------------
  registerGetStarted(server);
  registerSearchDocs(server);
  registerGetApi(server);
  registerGetExample(server);
  registerListStyles(server);
  registerGetChangelog(server);

  // --- Resources ---------------------------------------------------------
  server.registerResource(
    "readme",
    "mapicgc://readme",
    {
      title: "README de mapicgc-gl-js",
      description: "Document README oficial de la llibreria mapicgc-gl-js.",
      mimeType: "text/markdown",
    },
    async (uri) => {
      const text = (await readContentFile("README.md")) ?? "README no disponible. Executa 'npm run sync'.";
      return { contents: [{ uri: uri.href, mimeType: "text/markdown", text }] };
    }
  );

  server.registerResource(
    "changelog",
    "mapicgc://changelog",
    {
      title: "CHANGELOG de mapicgc-gl-js",
      description: "Historial de canvis oficial de la llibreria mapicgc-gl-js.",
      mimeType: "text/markdown",
    },
    async (uri) => {
      const text = (await readContentFile("CHANGELOG.md")) ?? "CHANGELOG no disponible. Executa 'npm run sync'.";
      return { contents: [{ uri: uri.href, mimeType: "text/markdown", text }] };
    }
  );

  // --- Prompts -------------------------------------------------------------
  server.registerPrompt(
    "crear_mapa",
    {
      title: "Crear un mapa amb mapicgc-gl-js",
      description: "Genera un prompt per demanar a l'assistent que creï un mapa amb mapicgc-gl-js amb un estil i una ubicació concrets.",
      argsSchema: {
        estil: z.string().describe("Estil del mapa base, p. ex. TOPO, ORTO, ORTO3D, ADMIN, DARK, LIGHT, GEOLOGY, ORTOHYBRID."),
        ubicacio: z.string().describe("Lloc on centrar el mapa, p. ex. 'Barcelona' o '2.1464, 41.306'."),
      },
    },
    async ({ estil, ubicacio }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              `Crea un mapa amb mapicgc-gl-js amb l'estil ${estil}, centrat a ${ubicacio}. ` +
              "Fes servir Config.getConfigICGC() per obtenir els estils disponibles i la classe Map " +
              "tal com es documenta a get_started i get_api. Consulta search_docs si et cal més detall.",
          },
        },
      ],
    })
  );

  return server;
}
