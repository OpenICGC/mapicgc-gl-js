# 🗺 mapicgc-gl-js

Biblioteca de mapes ICGC. Envoltori de MaplibreGL

<br>
Versió 0.0.17

<br>
### Documentació:

- [Documentació de les funcions del Mapa (docu_Map.md)](docu_Map.md)

<br>

### Com afegir la biblioteca a un projecte propi?

1. Instal·lar la biblioteca:

    ```bash
    npm i mapicgc-gl-js
    ```

2. Afegir les següents línies de codi JS i CSS a l'encapçalament del teu HTML:

    ```html
   
    <script src="https://www.unpkg.com/@watergis/maplibre-gl-export@3.0.1/dist/maplibre-gl-export.umd.js"></script>

    <link href="https://www.unpkg.com/@watergis/maplibre-gl-export@3.0.1/dist/maplibre-gl-export.css" rel="stylesheet" />
    ```

3. En el script del cos del document, declarar el mapa de la següent manera:

    ```javascript
    import { Map } from 'mapicgc-gl-js'; 

    const map = (window.map = new Map({
      style: "topografic",
    }));
    ```

### Funcionalitats

- Mapa per defecte: Topogràfic ICGC
- Fons de mapes: Topogràfic, Orto, Híbrid, Gris, Fosc

- Afegir capes GeoJson i WMS

- Markers

- Control Basemaps

- Control atribució

- Control Capes

- Control print

- Popups

