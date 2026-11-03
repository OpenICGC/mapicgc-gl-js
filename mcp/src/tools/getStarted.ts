import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readContentFile } from "../content.js";

const FALLBACK_TEXT = `# Instal·lació de mapicgc-gl-js

No s'ha trobat \`content/README.md\`. Executa \`npm run sync\` per descarregar la
documentació real des del repositori de mapicgc-gl-js abans d'utilitzar aquesta eina.`;

export function registerGetStarted(server: McpServer): void {
  server.registerTool(
    "get_started",
    {
      title: "Primers passos amb mapicgc-gl-js",
      description:
        "Retorna les instruccions d'instal·lació (NPM i CDN) i un exemple mínim de mapa funcional " +
        "amb mapicgc-gl-js. Útil com a primer pas quan algú vol començar un projecte nou amb la llibreria.",
      inputSchema: {},
    },
    async () => {
      const readme = await readContentFile("README.md");
      const text = readme ?? FALLBACK_TEXT;
      return {
        content: [{ type: "text", text }],
      };
    }
  );
}
