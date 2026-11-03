<div style="text-align:center">
<p>
  <img src="https://eines.icgc.cat/recursos//images/logo2.png"  alt="MapICGC Logo" width="400px">
</p>
</div>

<div style="text-align:center">

  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=flat)](LICENSE.txt) 
  [![Version](https://img.shields.io/npm/v/mapicgc-gl-js?style=flat)](https://www.npmjs.com/package/mapicgc-gl-js) 
  [![X](https://img.shields.io/twitter/follow/icgcat?style=social)](https://twitter.com/icgcat) 
  <img src="https://eines.icgc.cat/recursos//images/JS-logo.svg" width="20px"/>
</div>


# MapICGC GL JS


> 🌠 __Based on MapLibre GL JS version:__ 6.10.0 

The MapICGC GL JS library builds upon the  open-source library [**MapLibre GL JS**](https://github.com/maplibre/maplibre-gl-js), exposing its existing capabilities while introducing new features specific to the MapICGC ecosystem. This library is tailored to seamlessly integrate with the MapICGC Cloud service, offering a comprehensive set of data to enhance web mapping experiences, including vector tiles, satellite raster tiles, DEM with Terrain RGB, and customizable styles with an editor.

 Our goal is to simplify the development process for MapICGC developers! With MapICGC GL JS, you won't need to load external plugins for basic functionalities, deal with complex data source URLs, or search for syntax to enable 3D terrain every time you embark on a project. All these features are either built-in, loaded dynamically when necessary, or accessible through straightforward functions. 

Moreover, MapICGC GL JS provides well-documented and user-friendly wrapper functions for MapICGC Cloud API services, including geocoding, geolocation, exporting the current map view to an image or PDF, and territorial lookup by clicking on the map.




<br>

## Documentation

Full documentation for this library is <a href="https://openicgc.github.io/mapicgc-doc/" target="_blank">available here</a>. 

Check out the features through <a href="https://codepen.io/collection/mrvVZd" target="_blank">examples</a>. 


<br>

## Getting Started

### NPM

1. Install the library:
    ```bash
    npm i mapicgc-gl-js

2. Import the library:
    ```html
    <script>
     import { Map, Config } from "mapicgc-gl-js";
     
      async function initMap() {
          const data = await Config.getConfigICGC(); //load config
          const map = new Map({
            container: "map",
            style: data.Styles.LIGHT,
            center: [1.808, 41.618],
            zoom: 10,
            maxZoom: 19,
            hash: true,
            pitch: 0,
          });
      }
      initMap();
    </script>
   ```
### CDN

1. Include the JavaScript and CSS files in the `<head>` of your HTML file.:
   ```html
   <script src="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.js"></script>
   <link href="https://eines.icgc.cat/recursos//mapicgc-gl-js/mapicgc-gl.css" rel="stylesheet" />
   ```

2. Include the following code in the `<body>` of your HTML file.:

   ```html
    <div id="map"></div>
    <script>
      async function initMap() {
        const data = await  mapicgcgl.Config.getConfigICGC();
        const map = new mapicgcgl.Map({
          container: "map",
          style: data.Styles.TOPO, // <-- add style basemap here
          center: [2.1464, 41.306],
          zoom: 7.4,
          maxZoom: 19,
          hash: true,
          pitch: 0,
        });
    </script>
   ```

Result: 

   <div align="center">
    <a title="Link to CodePen" href="https://codepen.io/unitatgeostart/pen/eYXWyqd" target="_blank"><img  src="https://eines.icgc.cat/recursos///images/map1.png"></img></a></div>
<br>



## Dependencies

MapICGC GL JS integrates the following libraries: 
- <a href="https://github.com/maplibre/maplibre-gl-compare" target="_blank"> @maplibre/maplibre-gl-compare </a>
- <a href="https://github.com/maplibre/maplibre-gl-geocoder" target="_blank"> @maplibre/maplibre-gl-geocoder </a>
- <a href="https://www.npmjs.com/package/@watergis/maplibre-gl-export" target="_blank"> @watergis/maplibre-gl-export </a>


<br>


## Tests


## Tests

This project includes an automated test suite using [Vitest](https://vitest.dev/):

- **test/vitest/MapFunctions.test.js**: Covers all public methods of the `Map` class, including:
  - getConfigStyles, getConfigWMSLayers, getConfigOrtoLayers, getConfigVectorLayers
  - addControl, addLayer, addSource, addMarker, addAttributionControl
  - setStyle, setSky, setEventedParent, setFeatureState, hasControl, _dealOrto3dStyle
  - And many other public methods and behaviors

- **test/vitest/Config.test.js**: Tests configuration loading and structure (`ConfigICGC`):
  - Remote and local config loading
  - Fallback if the API call fails
  - Validation of the `mapicgc-config.json` structure (default options, styles, layers, terrains, geocoder, logo, map3d, etc)

All these tests pass successfully with:

```bash
npm run test
```

or directly with Vitest:

```bash
npx vitest run
```

---

## MCP Server

This package also ships an [MCP (Model Context Protocol)](https://modelcontextprotocol.io/)
server that teaches AI assistants (opencode, Claude, Cursor, GitHub Copilot...)
how to correctly use this library: install snippets, API reference, code
examples, available styles/layers and the changelog, served as MCP tools.

> The MCP server only serves documentation/data about this library; it does
> not run or render any map itself.

### Quick start

- **Already added `mapicgc-gl-js` to your project?** The MCP server ships
  bundled inside the same package — nothing extra to install:
  ```bash
  npx mapicgc-mcp
  ```
  (npx finds the `mapicgc-mcp` bin in your project's own `node_modules/.bin`.)

- **Haven't installed it yet, or just want an AI assistant to use it?**
  No manual install needed either — point your MCP client at:
  ```bash
  npx -y -p mapicgc-gl-js mapicgc-mcp
  ```
  See [Client configuration](#client-configuration) below for ready-to-paste
  configs (opencode, Claude Desktop, VS Code, Cursor).

### Running it

The server's `bin` name (`mapicgc-mcp`) is different from the package name
(`mapicgc-gl-js`), so `npx` needs the `-p` flag to know what to install:

```bash
npx -y -p mapicgc-gl-js mapicgc-mcp
```

This runs the server in stdio mode, the mode expected by MCP clients below.

### Client configuration

**opencode** (`opencode.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mapicgc": {
      "type": "local",
      "command": ["npx", "-y", "-p", "mapicgc-gl-js", "mapicgc-mcp"],
      "enabled": true
    }
  }
}
```

**Claude Desktop** (`claude_desktop_config.json`) / **Claude Code**:

```json
{
  "mcpServers": {
    "mapicgc": {
      "command": "npx",
      "args": ["-y", "-p", "mapicgc-gl-js", "mapicgc-mcp"]
    }
  }
}
```

**VS Code (GitHub Copilot)** (`.vscode/mcp.json`):

```json
{
  "servers": {
    "mapicgc": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "-p", "mapicgc-gl-js", "mapicgc-mcp"]
    }
  }
}
```

**Cursor** uses the same `command`/`args` shape as Claude Desktop.

### How it works

You don't install or run anything yourself — you just paste one of the
configs above into your MCP client's config file. From there, the client
takes care of everything:

1. It reads the `command`/`args` and launches it as a subprocess, exactly as
   if you'd typed it in a terminal.
2. `npx` resolves `mapicgc-gl-js` (downloading it from the npm registry the
   first time, if it isn't cached yet) and runs its `mapicgc-mcp` binary.
3. The server starts in stdio mode, and the client talks to it over that
   subprocess's stdin/stdout using the MCP (JSON-RPC) protocol — listing
   tools, calling them, reading resources, etc.
4. The client stops the subprocess once it no longer needs it.

Requirements: `node`/`npm` (and therefore `npx`) available on `PATH`, and
network access the first time the package is fetched (npm caches it for
later runs).

> A Streamable HTTP entry point exists in the MCP source
> (`mcp/src/http.ts`) but is **not wired into the current build** yet
> (`npm run build:mcp` only bundles the stdio entry point), so a
> `{ "type": "remote", "url": "..." }` config is not supported yet.

### Tools

| Tool | Description |
| --- | --- |
| `get_started` | Installation (NPM and CDN) and a minimal working map example. |
| `search_docs(query, limit?)` | Keyword search across all bundled documentation. |
| `get_api(name)` | Detailed docs for a specific method/class (e.g. `Map.addMarker`). |
| `get_example(topic)` | A complete code example for a topic (3D terrain, markers, geocoder...). |
| `list_styles` | Available styles, terrains and layer groups (live, with a local fallback). |
| `get_changelog(version?)` | Full changelog, or just one version's entries. |

It also registers the `mapicgc://readme` and `mapicgc://changelog` **resources**,
and the `crear_mapa(estil, ubicacio)` **prompt**.

### Local development

```bash
npm install
npm run build:content   # downloads this library's docs/changelog into mcp/content/
npm run build:mcp       # type-checks mcp/src and bundles it into dist-mcp/index.js
node dist-mcp/index.js  # runs the server in stdio mode
```

To sanity-check the server end-to-end (connects a real MCP client over
stdio and calls every tool):

```bash
node mcp/scripts/smoke-test.js
```

---
## Developed by:



<a href="https://www.icgc.cat/" target="_blank"><img src="https://eines.icgc.cat/recursos/logos/ICGC_color_norma.svg"  alt="ICGC Logo" width="150"></img></a>


## License
**MAPICGC GL JS** is licensed under the [3-Clause BSD license](./LICENSE.txt).
