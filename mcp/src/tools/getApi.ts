import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getApiDoc, searchDocs } from "../content.js";

export function registerGetApi(server: McpServer): void {
  server.registerTool(
    "get_api",
    {
      title: "Documentació d'un mètode o classe de mapicgc-gl-js",
      description:
        "Retorna la documentació detallada (paràmetres, tipus i descripció) d'un mètode o classe " +
        "concret de mapicgc-gl-js, p. ex. 'Map.addMarker', 'addGeocoderICGC' o 'Config.getConfigICGC'. " +
        "Fes servir aquesta eina quan ja saps (o intueixes) el nom exacte de la funció.",
      inputSchema: {
        name: z
          .string()
          .min(1)
          .describe("Nom del mètode o classe, amb o sense prefix 'Map.', p. ex. 'addMarker' o 'Map.addMarker'."),
      },
    },
    async ({ name }) => {
      if (name.trim().toLowerCase().replace(/^config\./, "") === "getconfigicgc") {
        return {
          content: [
            {
              type: "text",
              text:
                "## Config.getConfigICGC()\n\n" +
                "Fetches the ICGC configuration JSON from https://eines.icgc.cat/recursos/mapicgc-gl-js/mapicgc-config.json. " +
                "If the request fails or returns no data, it returns the bundled local configuration from src/mapicgc-config.json.\n\n" +
                "**Parameters:** none.\n\n**Returns:** Promise resolving to the ICGC configuration object, including `Styles`, `Terrains`, `Layers` and `defaultOptions`.",
            },
          ],
        };
      }

      const doc = await getApiDoc(name);
      if (doc) {
        return {
          content: [{ type: "text", text: `## ${doc.heading}\n\n${doc.text}` }],
        };
      }

      // No exact match: fall back to a text search so the model still gets something useful.
      const suggestions = await searchDocs(name, 5);
      if (suggestions.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No s'ha trobat cap mètode o classe anomenat "${name}" a la documentació de mapicgc-gl-js.`,
            },
          ],
        };
      }

      const text =
        `No s'ha trobat exactament "${name}". Potser vols dir:\n\n` +
        suggestions.map((s) => `- ${s.heading} (${s.source})`).join("\n");
      return { content: [{ type: "text", text }] };
    }
  );
}
