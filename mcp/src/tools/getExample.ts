import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getExample, listExamples } from "../content.js";

export function registerGetExample(server: McpServer): void {
  server.registerTool(
    "get_example",
    {
      title: "Exemple de codi de mapicgc-gl-js",
      description:
        "Retorna un exemple de codi complet i funcional per a un tema concret de mapicgc-gl-js " +
        "(mapa bàsic, canviar d'estil, marcadors, terreny 3D, geocodificador, capes ICGC, comparador " +
        "de mapes, exportar, etc.). Els exemples estan basats en l'API real de la llibreria.",
      inputSchema: {
        topic: z
          .string()
          .min(1)
          .describe("Tema de l'exemple, p. ex. 'terreny 3D', 'marcadors', 'canviar estil', 'geocodificador'."),
      },
    },
    async ({ topic }) => {
      const example = await getExample(topic);
      if (example) {
        return { content: [{ type: "text", text: example.text }] };
      }

      const available = await listExamples();
      const list = available.map((e) => `- ${e.title} (${e.file})`).join("\n");
      return {
        content: [
          {
            type: "text",
            text:
              `No s'ha trobat cap exemple que coincideixi amb "${topic}". Exemples disponibles:\n\n${list}`,
          },
        ],
      };
    }
  );
}
