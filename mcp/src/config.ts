/**
 * Fetches the live ICGC style/layer/terrain configuration, falling back to a
 * packaged snapshot (content/config-snapshot.json) when the network call
 * fails or times out. This mirrors what `Config.getConfigICGC()` does inside
 * mapicgc-gl-js itself (see src/constants/ConfigICGC.js in that repo).
 */
import { readContentFile } from "./content.js";

export const CONFIG_URL = "https://eines.icgc.cat/recursos/mapicgc-gl-js/mapicgc-config.json";
const FETCH_TIMEOUT_MS = 5000;

export interface IcgcConfig {
  defaultOptions?: Record<string, unknown>;
  Styles?: Record<string, string>;
  Terrains?: Record<string, unknown>;
  Layers?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface IcgcConfigResult {
  config: IcgcConfig;
  source: "live" | "snapshot";
}

async function fetchLiveConfig(): Promise<IcgcConfig> {
  if (process.env.MAPICGC_MCP_OFFLINE === "1") {
    throw new Error("Offline mode requested by MAPICGC_MCP_OFFLINE");
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(CONFIG_URL, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
    return (await response.json()) as IcgcConfig;
  } finally {
    clearTimeout(timer);
  }
}

/** Returns the ICGC config, preferring the live endpoint and falling back to the bundled snapshot. */
export async function getIcgcConfig(): Promise<IcgcConfigResult> {
  try {
    const config = await fetchLiveConfig();
    return { config, source: "live" };
  } catch (error) {
    console.error(`[mapicgc-mcp] No s'ha pogut obtenir la configuració en viu (${CONFIG_URL}): ${(error as Error).message}. S'usa la còpia empaquetada.`);
    const snapshot = await readContentFile("config-snapshot.json");
    if (!snapshot) {
      throw new Error(
        "No s'ha pogut obtenir la configuració ICGC en viu ni trobar cap còpia local a content/config-snapshot.json. " +
          "Executa 'npm run sync' per generar-la."
      );
    }
    return { config: JSON.parse(snapshot) as IcgcConfig, source: "snapshot" };
  }
}
