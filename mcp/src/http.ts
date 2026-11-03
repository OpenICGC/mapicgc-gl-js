#!/usr/bin/env node
/**
 * Streamable HTTP entry point: exposes the same tools/resources/prompts as
 * src/index.ts but over a `/mcp` HTTP endpoint, so the server can be
 * deployed and reached by URL (e.g. `{ "type": "remote", "url": "https://.../mcp" }`).
 *
 * Runs in stateless mode (a fresh server+transport per request): this MCP
 * only serves read-only documentation, so there is no session state worth
 * keeping between calls, and it keeps the implementation simple and safe
 * (no session map to leak memory or to attack).
 */
import { createServer as createHttpServer, type IncomingMessage, type ServerResponse } from "node:http";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "./server.js";

const PORT = Number(process.env.PORT) || 3000;
const MAX_BODY_BYTES = 1_000_000; // 1 MB: generous for MCP JSON-RPC requests, small enough to avoid abuse.

function sendJsonRpcError(res: ServerResponse, status: number, message: string): void {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ jsonrpc: "2.0", error: { code: -32000, message }, id: null }));
}

async function readJsonBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of req) {
    total += chunk.length;
    if (total > MAX_BODY_BYTES) {
      throw new Error("Request body too large");
    }
    chunks.push(chunk as Buffer);
  }
  if (total === 0) return undefined;
  return JSON.parse(Buffer.concat(chunks, total).toString("utf8"));
}

async function handleMcpPost(req: IncomingMessage, res: ServerResponse): Promise<void> {
  let body: unknown;
  try {
    body = await readJsonBody(req);
  } catch (error) {
    sendJsonRpcError(res, 400, `Bad Request: ${(error as Error).message}`);
    return;
  }

  const server = createServer();
  const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });

  res.on("close", () => {
    transport.close().catch(() => undefined);
    server.close().catch(() => undefined);
  });

  try {
    await server.connect(transport);
    await transport.handleRequest(req, res, body);
  } catch (error) {
    console.error("[mapicgc-mcp] Error handling MCP request:", error);
    if (!res.headersSent) {
      sendJsonRpcError(res, 500, "Internal server error");
    }
  }
}

const httpServer = createHttpServer((req, res) => {
  const url = req.url ?? "";
  if (!url.startsWith("/mcp")) {
    res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
    return;
  }

  if (req.method === "POST") {
    void handleMcpPost(req, res);
    return;
  }

  // Stateless mode: GET (SSE streams) and DELETE (session termination) are not supported.
  sendJsonRpcError(res, 405, "Method not allowed. This server runs in stateless mode (POST only).");
});

httpServer.listen(PORT, () => {
  console.error(`[mapicgc-mcp] Servidor MCP (Streamable HTTP) escoltant a http://localhost:${PORT}/mcp`);
});

process.on("SIGINT", () => {
  httpServer.close(() => process.exit(0));
});
