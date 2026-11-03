import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getChangelog } from "../content.js";

export function registerGetChangelog(server: McpServer): void {
  server.registerTool(
    "get_changelog",
    {
      title: "Historial de canvis de mapicgc-gl-js",
      description:
        "Retorna el CHANGELOG de mapicgc-gl-js, o només les entrades d'una versió concreta si se'n " +
        "indica una (p. ex. '1.0.0').",
      inputSchema: {
        version: z.string().optional().describe("Versió concreta a consultar, p. ex. '1.0.0'. Omet-la per veure tot l'historial."),
      },
    },
    async ({ version }) => {
      const text = await getChangelog(version);
      if (text) {
        return { content: [{ type: "text", text }] };
      }
      const message = version
        ? `No s'ha trobat cap entrada del CHANGELOG per a la versió "${version}".`
        : "No s'ha trobat content/CHANGELOG.md. Executa 'npm run sync' per descarregar-lo.";
      return { content: [{ type: "text", text: message }] };
    }
  );
}
