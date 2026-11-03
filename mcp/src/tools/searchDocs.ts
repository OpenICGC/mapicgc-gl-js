import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { searchDocs } from "../content.js";

export function registerSearchDocs(server: McpServer): void {
  server.registerTool(
    "search_docs",
    {
      title: "Cerca a la documentació de mapicgc-gl-js",
      description:
        "Cerca per paraules clau a tota la documentació empaquetada de mapicgc-gl-js (README, " +
        "referència de l'API i exemples) i retorna els fragments més rellevants amb el fitxer " +
        "d'origen. Fes servir aquesta eina per trobar informació quan no saps el nom exacte " +
        "d'un mètode o tema.",
      inputSchema: {
        query: z.string().min(1).describe("Paraules clau a cercar, p. ex. 'terreny 3D' o 'geocodificador'."),
        limit: z
          .number()
          .int()
          .min(1)
          .max(20)
          .optional()
          .describe("Nombre màxim de resultats a retornar (per defecte 5)."),
      },
    },
    async ({ query, limit }) => {
      const results = await searchDocs(query, limit ?? 5);

      if (results.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No s'ha trobat cap resultat per a "${query}". Prova amb altres paraules clau o fes servir get_api / get_example.`,
            },
          ],
        };
      }

      const text = results
        .map((r, i) => {
          const heading = r.heading ? ` — ${r.heading}` : "";
          return `### ${i + 1}. ${r.source}${heading}\n\n${r.snippet}`;
        })
        .join("\n\n---\n\n");

      return { content: [{ type: "text", text }] };
    }
  );
}
