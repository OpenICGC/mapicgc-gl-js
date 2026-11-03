import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getIcgcConfig } from "../config.js";

export function registerListStyles(server: McpServer): void {
  server.registerTool(
    "list_styles",
    {
      title: "Estils, capes i terrenys disponibles a l'ICGC",
      description:
        "Consulta en viu la configuració de l'ICGC (amb una còpia local de seguretat si la xarxa falla) " +
        "i retorna els estils de mapa base, els terrenys 3D i els grups de capes (Orto, Vector, " +
        "VectorAdmin, FGBAdmin, WMS) disponibles per usar amb mapicgc-gl-js.",
      inputSchema: {},
    },
    async () => {
      try {
        const { config, source } = await getIcgcConfig();
        const styles = config.Styles ? Object.keys(config.Styles) : [];
        const terrains = config.Terrains ? Object.keys(config.Terrains) : [];
        const layerGroups = config.Layers ? Object.keys(config.Layers) : [];

        const layerCounts = layerGroups
          .map((group) => {
            const value = (config.Layers as Record<string, unknown>)[group];
            const count = value && typeof value === "object" ? Object.keys(value).length : 0;
            return `  - ${group}: ${count} capes`;
          })
          .join("\n");

        const text = [
          `Font de la configuració: ${source === "live" ? "en viu (eines.icgc.cat)" : "còpia local empaquetada (content/config-snapshot.json)"}`,
          "",
          `Estils de mapa base (data.Styles.<CLAU>): ${styles.join(", ") || "cap"}`,
          "",
          `Terrenys 3D (data.Terrains.<CLAU>): ${terrains.join(", ") || "cap"}`,
          "",
          `Grups de capes (data.Layers.<GRUP>.<CLAU>):\n${layerCounts || "  cap"}`,
        ].join("\n");

        return { content: [{ type: "text", text }] };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `No s'han pogut obtenir els estils ni la còpia local: ${(error as Error).message}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}
