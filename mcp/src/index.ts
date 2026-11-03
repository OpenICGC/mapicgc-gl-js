#!/usr/bin/env node
/**
 * stdio entry point: used by `npx -y mapicgc-mcp` and local MCP clients
 * (opencode, Claude Desktop, Cursor, VS Code...).
 *
 * IMPORTANT: never write to stdout here except through the MCP transport
 * itself (console.log would corrupt the stdio protocol). Use console.error
 * for diagnostics.
 */
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

async function main(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[mapicgc-mcp] Servidor MCP escoltant per stdio.");
}

main().catch((error) => {
  console.error("[mapicgc-mcp] Error fatal:", error);
  process.exit(1);
});
