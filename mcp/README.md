# mcp/

Source of the MCP (Model Context Protocol) server bundled with this package's
`mapicgc-mcp` bin. This folder is **not published** (see `.npmignore`); only
the built `dist-mcp/index.js` and the synced `mcp/content/` are shipped.

See the ["MCP Server" section of the root README](../README.md#mcp-server)
for installation, client configuration and usage.

## Developing

```bash
npm install
npm run build:content   # mcp/scripts/sync.js -> downloads docs into mcp/content/
npm run build:mcp       # type-checks mcp/src and bundles it into ../dist-mcp/index.js
npm run test:mcp        # runs mcp/test with vitest
node ../dist-mcp/index.js   # run the built server in stdio mode
node scripts/smoke-test.js  # connects a real MCP client and calls every tool
```

