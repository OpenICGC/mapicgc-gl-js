## Classes

<dl>
<dt><a href="#LngLatBounds">LngLatBounds</a></dt>
<dd><p>LngLatBounds</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#addGeocoderICGC">addGeocoderICGC([options], [position])</a> ΓçÆ <code>Object</code></dt>
<dd><p>Add geocoder with customizable options.</p>
</dd>
<dt><a href="#getConfigStyles">getConfigStyles()</a> ΓçÆ <code>Array</code></dt>
<dd><p>Retrieves the available base styles from default options.</p>
</dd>
<dt><a href="#getConfigWMSLayers">getConfigWMSLayers()</a> ΓçÆ <code>Array</code></dt>
<dd><p>Retrieves the available WMS image layers from default options.</p>
</dd>
<dt><a href="#getConfigOrtoLayers">getConfigOrtoLayers()</a> ΓçÆ <code>Array</code></dt>
<dd><p>Retrieves the available orto image layers from default options.</p>
</dd>
<dt><a href="#getConfigVectorLayers">getConfigVectorLayers()</a> ΓçÆ <code>Array</code></dt>
<dd><p>Retrieves the available vector layers from default options.</p>
</dd>
<dt><a href="#getConfigVectorAdminLayers">getConfigVectorAdminLayers()</a> ΓçÆ <code>Array</code></dt>
<dd><p>Retrieves the available vector layers from default options.</p>
</dd>
<dt><a href="#getConfigFGBAdminLayers">getConfigFGBAdminLayers()</a> ΓçÆ <code>Array</code></dt>
<dd><p>Retrieves the available fgb layers from default options.</p>
</dd>
<dt><a href="#fetchData">fetchData(url, idLayer, options)</a></dt>
<dd><p>Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type.</p>
</dd>
<dt><a href="#fetchDataAndMenu">fetchDataAndMenu(url, idLayer, filterField, options)</a></dt>
<dd><p>Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type and adds to the Menu as a checkbox item.</p>
</dd>
<dt><a href="#on">on(type, func)</a></dt>
<dd><p>Adds an event listener to the map.</p>
</dd>
<dt><a href="#setStyle">setStyle(style, [options])</a></dt>
<dd><p>Sets the style of the map.</p>
</dd>
<dt><a href="#addControl">addControl(control, [position])</a></dt>
<dd><p>Adds a control to the map with the specified position.</p>
</dd>
<dt><a href="#setSky">setSky(options)</a></dt>
<dd><p>Sets the sky properties of the map.</p>
</dd>
<dt><a href="#addMouseCoordControl">addMouseCoordControl([position])</a></dt>
<dd><p>Adds a mouse coordinate control to the map.</p>
</dd>
<dt><a href="#addGeolocateControl">addGeolocateControl(options, [position])</a></dt>
<dd><p>Adds a geolocate control to the map.</p>
</dd>
<dt><a href="#addFullscreenControl">addFullscreenControl(options, [position])</a></dt>
<dd><p>Adds a fullscreen control to the map.</p>
</dd>
<dt><a href="#addLayer">addLayer(layer, layerIdOrder)</a></dt>
<dd><p>Adds a layer to the map.</p>
</dd>
<dt><a href="#addImage">addImage(id, image, options)</a> ΓçÆ <code>this</code></dt>
<dd><p>Adds an image to the map.</p>
</dd>
<dt><a href="#addSource">addSource(id, source)</a> ΓçÆ <code>this</code></dt>
<dd><p>Adds a source to the map.</p>
</dd>
<dt><a href="#addSprite">addSprite(id, url, options)</a> ΓçÆ <code>this</code></dt>
<dd><p>Adds a sprite to the map.</p>
</dd>
<dt><a href="#areTilesLoaded">areTilesLoaded()</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Checks if all tiles in the viewport are loaded.</p>
</dd>
<dt><a href="#cameraForBounds">cameraForBounds(bounds, options)</a> ΓçÆ <code>CenterZoomBearing</code> | <code>undefined</code></dt>
<dd><p>Calculates the camera position for given bounds.</p>
</dd>
<dt><a href="#easeTo">easeTo(options, eventData)</a> ΓçÆ <code>this</code></dt>
<dd><p>Eases the camera to a new position.</p>
</dd>
<dt><a href="#fitBounds">fitBounds(bounds, options, eventData)</a> ΓçÆ <code>this</code></dt>
<dd><p>Fits the map to the given geographical bounds.</p>
</dd>
<dt><a href="#fitScreenCoordinates">fitScreenCoordinates(p0, p1, bearing, options, eventData)</a> ΓçÆ <code>this</code></dt>
<dd><p>Fits the map to the given screen coordinates.</p>
</dd>
<dt><a href="#flyTo">flyTo(options, eventData)</a> ΓçÆ <code>this</code></dt>
<dd><p>Flies the camera to a new position.</p>
</dd>
<dt><a href="#getBearing">getBearing()</a> ΓçÆ <code>number</code></dt>
<dd><p>Gets the current bearing of the map.</p>
</dd>
<dt><a href="#getBounds">getBounds()</a> ΓçÆ <code><a href="#LngLatBounds">LngLatBounds</a></code></dt>
<dd><p>Gets the current geographical bounds of the map.</p>
</dd>
<dt><a href="#getCameraTargetElevation">getCameraTargetElevation()</a> ΓçÆ <code>number</code></dt>
<dd><p>Gets the elevation for the point where the camera is looking.</p>
</dd>
<dt><a href="#getCanvas">getCanvas()</a> ΓçÆ <code>HTMLCanvasElement</code></dt>
<dd><p>Gets the map&#39;s <canvas> element.</p>
</dd>
<dt><a href="#getCanvasContainer">getCanvasContainer()</a> ΓçÆ <code>HTMLElement</code></dt>
<dd><p>Gets the HTML element containing the map&#39;s <canvas> element.</p>
</dd>
<dt><a href="#getCenter">getCenter()</a> ΓçÆ <code>LngLat</code></dt>
<dd><p>Returns the map&#39;s geographical centerpoint.</p>
</dd>
<dt><a href="#getContainer">getContainer()</a> ΓçÆ <code>HTMLElement</code></dt>
<dd><p>Returns the map&#39;s containing HTML element.</p>
</dd>
<dt><a href="#getFeatureState">getFeatureState(feature)</a> ΓçÆ <code>any</code></dt>
<dd><p>Gets the state of a feature.</p>
</dd>
<dt><a href="#getFilter">getFilter(layerId)</a> ΓçÆ <code>void</code> | <code>FilterSpecification</code></dt>
<dd><p>Returns the filter applied to the specified style layer.</p>
</dd>
<dt><a href="#getGlyphs">getGlyphs()</a> ΓçÆ <code>string</code></dt>
<dd><p>Returns the value of the style&#39;s glyphs URL.</p>
</dd>
<dt><a href="#getImage">getImage(id)</a> ΓçÆ <code>StyleImage</code></dt>
<dd><p>Returns an image currently available in the map.</p>
</dd>
<dt><a href="#getLayer">getLayer(id)</a> ΓçÆ <code>StyleLayer</code></dt>
<dd><p>Returns the layer with the specified ID in the map&#39;s style.</p>
</dd>
<dt><a href="#getLayersOrder">getLayersOrder()</a> ΓçÆ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Return the ids of all layers currently in the style, including custom layers, in order.</p>
</dd>
<dt><a href="#getLayoutProperty">getLayoutProperty(layerId, name)</a> ΓçÆ <code>any</code></dt>
<dd><p>Returns the value of a layout property in the specified style layer.</p>
</dd>
<dt><a href="#getLight">getLight()</a> ΓçÆ <code>LightSpecification</code></dt>
<dd><p>Returns the value of the light object.</p>
</dd>
<dt><a href="#getMaxBounds">getMaxBounds()</a> ΓçÆ <code><a href="#LngLatBounds">LngLatBounds</a></code></dt>
<dd><p>Returns the maximum geographical bounds the map is constrained to.</p>
</dd>
<dt><a href="#getMaxPitch">getMaxPitch()</a> ΓçÆ <code>number</code></dt>
<dd><p>Returns the map&#39;s maximum allowable pitch.</p>
</dd>
<dt><a href="#getMaxZoom">getMaxZoom()</a> ΓçÆ <code>number</code></dt>
<dd><p>Returns the map&#39;s maximum allowable zoom level.</p>
</dd>
<dt><a href="#getMinPitch">getMinPitch()</a> ΓçÆ <code>number</code></dt>
<dd><p>Returns the map&#39;s minimum allowable pitch.</p>
</dd>
<dt><a href="#getMinZoom">getMinZoom()</a> ΓçÆ <code>number</code></dt>
<dd><p>Returns the map&#39;s minimum allowable zoom level.</p>
</dd>
<dt><a href="#getPadding">getPadding()</a> ΓçÆ <code>PaddingOptions</code></dt>
<dd><p>Returns the current padding applied around the map viewport.</p>
</dd>
<dt><a href="#getPaintProperty">getPaintProperty(layerId, name)</a> ΓçÆ <code>unknown</code></dt>
<dd><p>Returns the value of a paint property in the specified style layer.</p>
</dd>
<dt><a href="#getPitch">getPitch()</a> ΓçÆ <code>number</code></dt>
<dd><p>Returns the map&#39;s current pitch (tilt).</p>
</dd>
<dt><a href="#getPixelRatio">getPixelRatio()</a> ΓçÆ <code>number</code></dt>
<dd><p>Returns the map&#39;s pixel ratio.</p>
</dd>
<dt><a href="#getRenderWorldCopies">getRenderWorldCopies()</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Returns the state of renderWorldCopies.</p>
</dd>
<dt><a href="#getSource">getSource(id)</a> ΓçÆ <code>Source</code></dt>
<dd><p>Returns the source with the specified ID in the map&#39;s style.</p>
</dd>
<dt><a href="#getSprite">getSprite()</a> ΓçÆ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Returns the as-is value of the style&#39;s sprite.</p>
</dd>
<dt><a href="#getStyle">getStyle()</a> ΓçÆ <code>StyleSpecification</code></dt>
<dd><p>Returns the map&#39;s MapLibre style object.</p>
</dd>
<dt><a href="#getTerrain">getTerrain()</a> ΓçÆ <code>TerrainSpecification</code></dt>
<dd><p>Get the terrain-options if terrain is loaded.</p>
</dd>
<dt><a href="#getZoom">getZoom()</a> ΓçÆ <code>number</code></dt>
<dd><p>Returns the map&#39;s current zoom level.</p>
</dd>
<dt><a href="#hasControl">hasControl(control)</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Checks if a control exists on the map.</p>
</dd>
<dt><a href="#hasImage">hasImage(id)</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Check whether or not an image with a specific ID exists in the style.</p>
</dd>
<dt><a href="#isMoving">isMoving()</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Returns true if the map is panning, zooming, rotating, or pitching due to a camera animation or user gesture.</p>
</dd>
<dt><a href="#isRotating">isRotating()</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Returns true if the map is rotating due to a camera animation or user gesture.</p>
</dd>
<dt><a href="#isSourceLoaded">isSourceLoaded(id)</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Returns a Boolean indicating whether the source is loaded.</p>
</dd>
<dt><a href="#isStyleLoaded">isStyleLoaded()</a> ΓçÆ <code>boolean</code> | <code>void</code></dt>
<dd><p>Returns a Boolean indicating whether the map&#39;s style is fully loaded.</p>
</dd>
<dt><a href="#isZooming">isZooming()</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Returns true if the map is zooming due to a camera animation or user gesture.</p>
</dd>
<dt><a href="#jumpTo">jumpTo(options, [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Changes any combination of center, zoom, bearing, and pitch, without an animated transition.</p>
</dd>
<dt><a href="#listImages">listImages()</a> ΓçÆ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Returns an Array of strings containing the IDs of all images currently available in the map.</p>
</dd>
<dt><a href="#listens">listens(type)</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.</p>
</dd>
<dt><a href="#loadImage">loadImage(url)</a> ΓçÆ <code>Promise.&lt;GetResourceResponse.&lt;(ImageBitmap|HTMLImageElement)&gt;&gt;</code></dt>
<dd><p>Load an image from an external URL to be used with Map#addImage.</p>
</dd>
<dt><a href="#loaded">loaded()</a> ΓçÆ <code>boolean</code></dt>
<dd><p>Returns a Boolean indicating whether the map is fully loaded.</p>
</dd>
<dt><a href="#addProtocol">addProtocol(customProtocol, loadFn)</a> ΓçÆ <code>void</code></dt>
<dd><p>Adds a custom load resource function that will be called when using a URL that starts with a custom URL schema.</p>
</dd>
<dt><a href="#moveLayer">moveLayer(id, [beforeId])</a> ΓçÆ <code>this</code></dt>
<dd><p>Moves a layer to a different z-position.</p>
</dd>
<dt><a href="#panBy">panBy(offset, [options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Pans the map by the specified offset.</p>
</dd>
<dt><a href="#panTo">panTo(lnglat, [options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Pans the map to the specified location with an animated transition.</p>
</dd>
<dt><a href="#project">project(lnglat)</a> ΓçÆ <code>Point</code></dt>
<dd><p>Returns a Point representing pixel coordinates, relative to the map&#39;s container, that correspond to the specified geographical location.</p>
</dd>
<dt><a href="#queryRenderedFeatures">queryRenderedFeatures([geometryOrOptions], [options])</a> ΓçÆ <code>Array</code></dt>
<dd><p>Queries rendered features within a specified geometry or bounding box.</p>
</dd>
<dt><a href="#querySourceFeatures">querySourceFeatures(sourceId, parameters)</a> ΓçÆ <code>Array</code></dt>
<dd><p>Queries source features within a specified source.</p>
</dd>
<dt><a href="#queryTerrainElevation">queryTerrainElevation(lngLatLike)</a> ΓçÆ <code>number</code></dt>
<dd><p>Queries the terrain elevation at a specified geographical location.</p>
</dd>
<dt><a href="#redraw">redraw()</a> ΓçÆ <code>this</code></dt>
<dd><p>Redraws the map.</p>
</dd>
<dt><a href="#remove">remove()</a> ΓçÆ <code>this</code></dt>
<dd><p>Removes the map from the DOM.</p>
</dd>
<dt><a href="#removeControl">removeControl(control)</a> ΓçÆ <code>this</code></dt>
<dd><p>Removes a control from the map.</p>
</dd>
<dt><a href="#removeFeatureState">removeFeatureState(target, [key])</a> ΓçÆ <code>this</code></dt>
<dd><p>Removes the state of a feature.</p>
</dd>
<dt><a href="#removeImage">removeImage(id)</a> ΓçÆ <code>this</code></dt>
<dd><p>Removes an image from the style&#39;s sprite.</p>
</dd>
<dt><a href="#removeLayer">removeLayer(idLayer)</a></dt>
<dd><p>Removes a layer from the map.</p>
</dd>
<dt><a href="#removeSource">removeSource(idLayer)</a></dt>
<dd><p>Removes a source from the map.</p>
</dd>
<dt><a href="#removeSprite">removeSprite(id)</a> ΓçÆ <code>this</code></dt>
<dd><p>Removes a sprite from the style.</p>
</dd>
<dt><a href="#resetNorth">resetNorth([options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Resets the map orientation so that north is up.</p>
</dd>
<dt><a href="#resetNorthPitch">resetNorthPitch([options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Resets the map orientation so that north is up and pitch is set to 0┬░.</p>
</dd>
<dt><a href="#resize">resize([eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Resizes the map to fit its container.</p>
</dd>
<dt><a href="#rotateTo">rotateTo(bearing, [options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Rotates the map to the specified bearing with an animated transition.</p>
</dd>
<dt><a href="#setBearing">setBearing(bearing, [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the map&#39;s bearing with an optional animated transition.</p>
</dd>
<dt><a href="#setCenter">setCenter(center, [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the map&#39;s center coordinates with an optional animated transition.</p>
</dd>
<dt><a href="#setEventedParent">setEventedParent([parent], [data])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the parent of the map&#39;s event emitter.</p>
</dd>
<dt><a href="#setFeatureState">setFeatureState(feature, state)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the state of a feature.</p>
</dd>
<dt><a href="#setFilter">setFilter(layerId, [filter], [options])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the filter for a specified layer.</p>
</dd>
<dt><a href="#setGlyphs">setGlyphs(glyphsUrl, [options])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the glyphs for the map&#39;s style.</p>
</dd>
<dt><a href="#setLayerZoomRange">setLayerZoomRange(layerId, minzoom, maxzoom)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the zoom range for a specified layer.</p>
</dd>
<dt><a href="#setLayoutProperty">setLayoutProperty(layerId, name, value, [options])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets a layout property for a specified layer.</p>
</dd>
<dt><a href="#setLight">setLight(light, [options])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the light for the map&#39;s style.</p>
</dd>
<dt><a href="#setMaxBounds">setMaxBounds(bounds)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the maximum bounds for the map.</p>
</dd>
<dt><a href="#setMaxPitch">setMaxPitch(maxPitch)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the maximum pitch for the map.</p>
</dd>
<dt><a href="#setMaxZoom">setMaxZoom(maxZoom)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the maximum zoom level for the map.</p>
</dd>
<dt><a href="#setMinPitch">setMinPitch(minPitch)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the minimum pitch for the map.</p>
</dd>
<dt><a href="#setMinZoom">setMinZoom(minZoom)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the minimum zoom level for the map.</p>
</dd>
<dt><a href="#setPadding">setPadding(padding, [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets padding for the map&#39;s container.</p>
</dd>
<dt><a href="#setPaintProperty">setPaintProperty(layerId, name, value, [options])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets a paint property for a specified layer.</p>
</dd>
<dt><a href="#setPitch">setPitch(pitch, [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the map&#39;s pitch angle with an optional animated transition.</p>
</dd>
<dt><a href="#setPixelRatio">setPixelRatio(pixelRatio)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the pixel ratio for the map.</p>
</dd>
<dt><a href="#setRenderWorldCopies">setRenderWorldCopies(renderWorldCopies)</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets whether the map should render world copies when the center longitude is greater than or less than ┬▒180 degrees.</p>
</dd>
<dt><a href="#setSprite">setSprite(spriteUrl, [options])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the sprite for the map&#39;s style.</p>
</dd>
<dt><a href="#setTerrain">setTerrain(options)</a> ΓçÆ <code>this</code></dt>
<dd><p>Loads a 3D terrain mesh based on a &quot;raster-dem&quot; source.</p>
</dd>
<dt><a href="#setTransformRequest">setTransformRequest(transformRequest)</a> ΓçÆ <code>this</code></dt>
<dd><p>Updates the requestManager&#39;s transform request with a new function.</p>
</dd>
<dt><a href="#setZoom">setZoom(zoom, [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Sets the map&#39;s zoom level.</p>
</dd>
<dt><a href="#snapToNorth">snapToNorth([options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Snaps the map so that north is up (0┬░ bearing), if the current bearing is close enough to it.</p>
</dd>
<dt><a href="#stop">stop()</a> ΓçÆ <code>this</code></dt>
<dd><p>Stops any animated transition underway.</p>
</dd>
<dt><a href="#triggerRepaint">triggerRepaint()</a> ΓçÆ <code>void</code></dt>
<dd><p>Triggers the rendering of a single frame.</p>
</dd>
<dt><a href="#unproject">unproject(point)</a> ΓçÆ <code>LngLat</code></dt>
<dd><p>Returns geographical coordinates corresponding to the specified pixel coordinates.</p>
</dd>
<dt><a href="#updateImage">updateImage(id, image)</a> ΓçÆ <code>this</code></dt>
<dd><p>Updates an existing image in the style&#39;s sprite.</p>
</dd>
<dt><a href="#zoomIn">zoomIn([options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Increases the map&#39;s zoom level by 1.</p>
</dd>
<dt><a href="#zoomOut">zoomOut([options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Decreases the map&#39;s zoom level by 1.</p>
</dd>
<dt><a href="#zoomTo">zoomTo(zoom, [options], [eventData])</a> ΓçÆ <code>this</code></dt>
<dd><p>Zooms the map to the specified zoom level with an animated transition.</p>
</dd>
<dt><a href="#addLayerGeoJSON">addLayerGeoJSON(layer, layerPosition)</a></dt>
<dd><p>Adds a GeoJSON layer to the map.</p>
</dd>
<dt><a href="#addLayerWMS">addLayerWMS(tiles, idLayer, options)</a></dt>
<dd><p>Adds a WMS layer to the map.</p>
</dd>
<dt><a href="#addLogo">addLogo(options)</a></dt>
<dd><p>Adds a logo to the map.</p>
</dd>
<dt><a href="#addBasemapsICGC">addBasemapsICGC(basesArray)</a></dt>
<dd><p>Adds base layers to the map.</p>
</dd>
<dt><a href="#addBasemaps">addBasemaps(baseLayers)</a></dt>
<dd><p>Adds base layers to the map.</p>
</dd>
<dt><a href="#addFeatureQuery">addFeatureQuery(idLayer, queryFields, popupStyle)</a></dt>
<dd><p>Adds feature query function to a layer.</p>
</dd>
<dt><a href="#addScaleControl">addScaleControl(options, position)</a></dt>
<dd><p>Adds a scale control to the map.</p>
<ul>
<li>@function addScaleControl</li>
</ul>
</dd>
<dt><a href="#addExportControl">addExportControl(options, [position])</a></dt>
<dd><p>Adds an export control to the map with the provided options and position.</p>
</dd>
<dt><a href="#addMarker">addMarker(options)</a> ΓçÆ <code>Object</code></dt>
<dd><p>Adds a marker to the map.</p>
</dd>
<dt><a href="#addPopup">addPopup(options, coord, text, popupStyle)</a> ΓçÆ <code>Object</code></dt>
<dd><p>Adds a popup to the map.</p>
</dd>
<dt><a href="#addFullScreen">addFullScreen([position])</a></dt>
<dd><p>Adds a fullscreen control to the map.</p>
</dd>
<dt><a href="#addMenuItem">addMenuItem(name)</a></dt>
<dd><p>Adds a menu item with a checkbox for controlling the visibility of a layer on the map.</p>
</dd>
<dt><a href="#addLayerTree">addLayerTree(options)</a></dt>
<dd><p>Adds a layer tree to the map.</p>
</dd>
<dt><a href="#createNavigationControl">createNavigationControl(options, [position])</a> ΓçÆ <code>Object</code></dt>
<dd><p>Creates a navigation control with the provided options.</p>
</dd>
<dt><a href="#addNavigationControl">addNavigationControl(options, [position])</a></dt>
<dd><p>Adds a navigation control to the map with the provided options.</p>
</dd>
<dt><a href="#addAttributionControl">addAttributionControl(options, [position])</a></dt>
<dd><p>Adds an attribution control to the map with the provided options.</p>
</dd>
<dt><a href="#addImageLayerICGC">addImageLayerICGC(url, idLayer, options)</a></dt>
<dd><p>Adds an ICGC image layer to the map based on the specified name and year.</p>
</dd>
<dt><a href="#addVectorLayerICGC">addVectorLayerICGC(url, idLayer, options)</a></dt>
<dd><p>Adds an ICGC vector layer to the map based on the specified name and year.</p>
</dd>
<dt><a href="#addFGBLayerICGC">addFGBLayerICGC(url, idLayer, options)</a></dt>
<dd><p>Adds an ICGC FGB layer to the map based on the specified name and year.</p>
</dd>
<dt><a href="#addTerrainICGC">addTerrainICGC(url, controlPosition)</a></dt>
<dd><p>Adds 3D terrain to the map using hillshade.</p>
</dd>
<dt><a href="#addLegend">addLegend(url, idLayer)</a></dt>
<dd><p>Add image legend.</p>
</dd>
<dt><a href="#_findImageType">_findImageType(url, var1, var2, var3, var4)</a> ΓçÆ <code>string</code> | <code>null</code></dt>
<dd><p>Finds the type of image based on the provided URL and specified vectors.</p>
</dd>
<dt><a href="#_getKeyByUrlFGB">_getKeyByUrlFGB(url)</a> ΓçÆ <code>string</code> | <code>null</code></dt>
<dd><p>Gets the key by URL from the FGBAdmin layers.</p>
</dd>
<dt><a href="#_getLegendByName">_getLegendByName(name)</a> ΓçÆ <code>string</code> | <code>null</code></dt>
<dd><p>Gets the legend by name from the default vector layers.</p>
</dd>
<dt><a href="#_getKeyByUrlVector">_getKeyByUrlVector(url)</a> ΓçÆ <code>string</code> | <code>null</code></dt>
<dd><p>Gets the key by URL from the Vector layers.</p>
</dd>
<dt><a href="#_raiseText3DStyle">_raiseText3DStyle()</a> ΓçÆ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Raises text 3D style on the map.</p>
</dd>
<dt><a href="#_dealStyleMaps">_dealStyleMaps(name)</a> ΓçÆ <code>Object</code> | <code>string</code> | <code>null</code></dt>
<dd><p>Deals with map styles based on the name.</p>
</dd>
<dt><a href="#_dealOrto3dStyle">_dealOrto3dStyle(name)</a> ΓçÆ <code>void</code> | <code>null</code></dt>
<dd><p>Deals with the 3D ortho style based on the name.</p>
</dd>
<dt><a href="#_dealOrderLayer">_dealOrderLayer(order)</a> ΓçÆ <code>string</code></dt>
<dd><p>Deals with the order of the layer.</p>
</dd>
<dt><a href="#_firstSymbolLayer">_firstSymbolLayer()</a> ΓçÆ <code>string</code> | <code>undefined</code></dt>
<dd><p>Retrieves the id of the first symbol layer.</p>
</dd>
<dt><a href="#_firstLineLayer">_firstLineLayer()</a> ΓçÆ <code>string</code> | <code>undefined</code></dt>
<dd><p>Retrieves the id of the first line layer.</p>
</dd>
<dt><a href="#_createCitiesMapboxLayer">_createCitiesMapboxLayer()</a> ΓçÆ <code>MapboxLayer</code> | <code>null</code></dt>
<dd><p>Creates a Mapbox layer for displaying cities in 3D.</p>
</dd>
</dl>

<a name="LngLatBounds"></a>

## LngLatBounds
LngLatBounds

**Kind**: global class  
<a name="new_LngLatBounds_new"></a>

### new LngLatBounds([sw], [ne])
Constructs a new LngLatBounds object representing a geographical bounding box.


| Param | Type | Description |
| --- | --- | --- |
| [sw] | <code>LngLatLike</code> | The southwest corner of the bounding box. Can be specified as an array of 4 numbers in the order of west, south, east, north, or an array of 2 LngLatLike representing [sw,ne]. |
| [ne] | <code>LngLatLike</code> | The northeast corner of the bounding box. |

<a name="addGeocoderICGC"></a>

## addGeocoderICGC([options], [position]) ΓçÆ <code>Object</code>
Add geocoder with customizable options.

**Kind**: global function  
**Returns**: <code>Object</code> - - The merged configuration options for the geocoder, including the position.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code> | Optional configuration options for the geocoder. Defaults to an empty object. |
| [position] | <code>string</code> | <code>&quot;&#x27;top-right&#x27;&quot;</code> | Position to add the geocoder control on the map. Defaults to 'top-right'. |

<a name="getConfigStyles"></a>

## getConfigStyles() ΓçÆ <code>Array</code>
Retrieves the available base styles from default options.

**Kind**: global function  
**Returns**: <code>Array</code> - - Array containing the names of available base styles.  
<a name="getConfigWMSLayers"></a>

## getConfigWMSLayers() ΓçÆ <code>Array</code>
Retrieves the available WMS image layers from default options.

**Kind**: global function  
**Returns**: <code>Array</code> - - Array containing the keys of available WMS image layers.  
<a name="getConfigOrtoLayers"></a>

## getConfigOrtoLayers() ΓçÆ <code>Array</code>
Retrieves the available orto image layers from default options.

**Kind**: global function  
**Returns**: <code>Array</code> - - Array containing the keys of available image layers.  
<a name="getConfigVectorLayers"></a>

## getConfigVectorLayers() ΓçÆ <code>Array</code>
Retrieves the available vector layers from default options.

**Kind**: global function  
**Returns**: <code>Array</code> - - Array containing the keys of available vector layers.  
<a name="getConfigVectorAdminLayers"></a>

## getConfigVectorAdminLayers() ΓçÆ <code>Array</code>
Retrieves the available vector layers from default options.

**Kind**: global function  
**Returns**: <code>Array</code> - - Array containing the keys of available vectorAdmin layers.  
<a name="getConfigFGBAdminLayers"></a>

## getConfigFGBAdminLayers() ΓçÆ <code>Array</code>
Retrieves the available fgb layers from default options.

**Kind**: global function  
**Returns**: <code>Array</code> - - Array containing the keys of available fgbadmin layers.  
<a name="fetchData"></a>

## fetchData(url, idLayer, options)
Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to fetch GeoJSON data from. |
| idLayer | <code>string</code> | The id for the layer. |
| options | <code>Object</code> | Additional options for configuring the layer. |

<a name="fetchDataAndMenu"></a>

## fetchDataAndMenu(url, idLayer, filterField, options)
Fetches GeoJSON data from a URL and adds a corresponding layer to the map based on the specified geometry type and adds to the Menu as a checkbox item.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to fetch GeoJSON data from. |
| idLayer | <code>string</code> | The geometry name (e.g., 'buildings'). |
| filterField | <code>string</code> | Import all features as unique or group based on a field ('all', 'field'). |
| options | <code>Object</code> | Additional options for configuring the layer. |

<a name="on"></a>

## on(type, func)
Adds an event listener to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the event. |
| func | <code>function</code> | The callback function to be executed when the event occurs. |

<a name="setStyle"></a>

## setStyle(style, [options])
Sets the style of the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | Name of the map style. |
| [options] | <code>Object</code> | Options for setting the style. |

<a name="addControl"></a>

## addControl(control, [position])
Adds a control to the map with the specified position.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| control | <code>Object</code> |  | The control to add. |
| [position] | <code>string</code> | <code>&quot;&#x27;top-right&#x27;&quot;</code> | Position to add the control on the map. |

<a name="setSky"></a>

## setSky(options)
Sets the sky properties of the map.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Options to set the sky properties. |
| [options.skyType] | <code>string</code> | <code>&quot;&#x27;gradient&#x27;&quot;</code> | Type of sky to set (e.g., 'gradient', 'atmosphere'). |
| [options.color] | <code>string</code> | <code>&quot;&#x27;lightblue&#x27;&quot;</code> | Color of the sky. |
| [options.horizonBlend] | <code>Number</code> | <code>0.03</code> | Blend horizon value. |
| [options.starIntensity] | <code>Number</code> | <code>0.5</code> | Intensity of stars in the sky. |
| [options.sunIntensity] | <code>Number</code> | <code>0.1</code> | Intensity of the sun in the sky. |
| [options.sunPosition] | <code>Array.&lt;Number&gt;</code> | <code>[0, 0]</code> | Position of the sun in the sky. |

<a name="addMouseCoordControl"></a>

## addMouseCoordControl([position])
Adds a mouse coordinate control to the map.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options.width | <code>Number</code> |  | Width control i. |
| options.utm | <code>Boolean</code> |  | Boolean to show coordinates in UTM. |
| options.lonlat | <code>Boolean</code> |  | Boolean to show coordinates in Lon Lat. |
| [position] | <code>string</code> | <code>&quot;&#x27;bottom-left&#x27;&quot;</code> | Position to add the control on the map. |

<a name="addGeolocateControl"></a>

## addGeolocateControl(options, [position])
Adds a geolocate control to the map.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Options for the geolocate control. |
| [position] | <code>string</code> | <code>&quot;&#x27;top-right&#x27;&quot;</code> | Position to add the control on the map. |

<a name="addFullscreenControl"></a>

## addFullscreenControl(options, [position])
Adds a fullscreen control to the map.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Options for the geolocate control. |
| [position] | <code>string</code> | <code>&quot;&#x27;top-right&#x27;&quot;</code> | Position to add the control on the map. |

<a name="addLayer"></a>

## addLayer(layer, layerIdOrder)
Adds a layer to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| layer | <code>Object</code> | Options for the layer to add. |
| layerIdOrder | <code>string</code> | Optional layer Id draw position. |

<a name="addImage"></a>

## addImage(id, image, options) ΓçÆ <code>this</code>
Adds an image to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the image. |
| image | <code>ImageBitmap</code> \| <code>HTMLImageElement</code> \| <code>ImageData</code> \| <code>StyleImageInterface</code> \| <code>object</code> | The image object to add. |
| options | <code>Partial.&lt;StyleImageMetadata&gt;</code> | Optional metadata for the image. |

<a name="addSource"></a>

## addSource(id, source) ΓçÆ <code>this</code>
Adds a source to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the source. |
| source | <code>SourceSpecification</code> | The source object to add. |

<a name="addSprite"></a>

## addSprite(id, url, options) ΓçÆ <code>this</code>
Adds a sprite to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the sprite. |
| url | <code>string</code> | The URL to load the sprite from. |
| options | <code>StyleSetterOptions</code> | Options object. |

<a name="areTilesLoaded"></a>

## areTilesLoaded() ΓçÆ <code>boolean</code>
Checks if all tiles in the viewport are loaded.

**Kind**: global function  
<a name="cameraForBounds"></a>

## cameraForBounds(bounds, options) ΓçÆ <code>CenterZoomBearing</code> \| <code>undefined</code>
Calculates the camera position for given bounds.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bounds | <code>LngLatBoundsLike</code> | The geographical bounds to fit. |
| options | <code>CameraForBoundsOptions</code> | Options object. |

<a name="easeTo"></a>

## easeTo(options, eventData) ΓçÆ <code>this</code>
Eases the camera to a new position.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options describing the animation. |
| eventData | <code>any</code> | Additional properties for event objects. |

<a name="fitBounds"></a>

## fitBounds(bounds, options, eventData) ΓçÆ <code>this</code>
Fits the map to the given geographical bounds.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bounds | <code>LngLatBoundsLike</code> | The geographical bounds to fit. |
| options | <code>FitBoundsOptions</code> | Options object. |
| eventData | <code>any</code> | Additional properties for event objects. |

<a name="fitScreenCoordinates"></a>

## fitScreenCoordinates(p0, p1, bearing, options, eventData) ΓçÆ <code>this</code>
Fits the map to the given screen coordinates.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| p0 | <code>PointLike</code> | First point on screen, in pixel coordinates. |
| p1 | <code>PointLike</code> | Second point on screen, in pixel coordinates. |
| bearing | <code>number</code> | Desired map bearing at end of animation, in degrees. |
| options | <code>FitBoundsOptions</code> | Options object. |
| eventData | <code>any</code> | Additional properties for event objects. |

<a name="flyTo"></a>

## flyTo(options, eventData) ΓçÆ <code>this</code>
Flies the camera to a new position.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>FlyToOptions</code> | Options describing the flight. |
| eventData | <code>any</code> | Additional properties for event objects. |

<a name="getBearing"></a>

## getBearing() ΓçÆ <code>number</code>
Gets the current bearing of the map.

**Kind**: global function  
<a name="getBounds"></a>

## getBounds() ΓçÆ [<code>LngLatBounds</code>](#LngLatBounds)
Gets the current geographical bounds of the map.

**Kind**: global function  
<a name="getCameraTargetElevation"></a>

## getCameraTargetElevation() ΓçÆ <code>number</code>
Gets the elevation for the point where the camera is looking.

**Kind**: global function  
<a name="getCanvas"></a>

## getCanvas() ΓçÆ <code>HTMLCanvasElement</code>
Gets the map's <canvas> element.

**Kind**: global function  
<a name="getCanvasContainer"></a>

## getCanvasContainer() ΓçÆ <code>HTMLElement</code>
Gets the HTML element containing the map's <canvas> element.

**Kind**: global function  
<a name="getCenter"></a>

## getCenter() ΓçÆ <code>LngLat</code>
Returns the map's geographical centerpoint.

**Kind**: global function  
**Returns**: <code>LngLat</code> - The map's geographical centerpoint.  
<a name="getContainer"></a>

## getContainer() ΓçÆ <code>HTMLElement</code>
Returns the map's containing HTML element.

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - The map's container.  
<a name="getFeatureState"></a>

## getFeatureState(feature) ΓçÆ <code>any</code>
Gets the state of a feature.

**Kind**: global function  
**Returns**: <code>any</code> - The state of the feature.  

| Param | Type | Description |
| --- | --- | --- |
| feature | <code>FeatureIdentifier</code> | Feature identifier. |

<a name="getFilter"></a>

## getFilter(layerId) ΓçÆ <code>void</code> \| <code>FilterSpecification</code>
Returns the filter applied to the specified style layer.

**Kind**: global function  
**Returns**: <code>void</code> \| <code>FilterSpecification</code> - The layer's filter.  

| Param | Type | Description |
| --- | --- | --- |
| layerId | <code>string</code> | The ID of the style layer. |

<a name="getGlyphs"></a>

## getGlyphs() ΓçÆ <code>string</code>
Returns the value of the style's glyphs URL.

**Kind**: global function  
**Returns**: <code>string</code> - The glyphs Style's glyphs URL.  
<a name="getImage"></a>

## getImage(id) ΓçÆ <code>StyleImage</code>
Returns an image currently available in the map.

**Kind**: global function  
**Returns**: <code>StyleImage</code> - An image in the map with the specified ID.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the image. |

<a name="getLayer"></a>

## getLayer(id) ΓçÆ <code>StyleLayer</code>
Returns the layer with the specified ID in the map's style.

**Kind**: global function  
**Returns**: <code>StyleLayer</code> - The layer with the specified ID.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the layer to get. |

<a name="getLayersOrder"></a>

## getLayersOrder() ΓçÆ <code>Array.&lt;string&gt;</code>
Return the ids of all layers currently in the style, including custom layers, in order.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - Ids of layers, in order.  
<a name="getLayoutProperty"></a>

## getLayoutProperty(layerId, name) ΓçÆ <code>any</code>
Returns the value of a layout property in the specified style layer.

**Kind**: global function  
**Returns**: <code>any</code> - The value of the specified layout property.  

| Param | Type | Description |
| --- | --- | --- |
| layerId | <code>string</code> | The ID of the layer. |
| name | <code>string</code> | The name of the layout property. |

<a name="getLight"></a>

## getLight() ΓçÆ <code>LightSpecification</code>
Returns the value of the light object.

**Kind**: global function  
**Returns**: <code>LightSpecification</code> - Light properties of the style.  
<a name="getMaxBounds"></a>

## getMaxBounds() ΓçÆ [<code>LngLatBounds</code>](#LngLatBounds)
Returns the maximum geographical bounds the map is constrained to.

**Kind**: global function  
**Returns**: [<code>LngLatBounds</code>](#LngLatBounds) - The map's maximum geographical bounds.  
<a name="getMaxPitch"></a>

## getMaxPitch() ΓçÆ <code>number</code>
Returns the map's maximum allowable pitch.

**Kind**: global function  
**Returns**: <code>number</code> - The maxPitch.  
<a name="getMaxZoom"></a>

## getMaxZoom() ΓçÆ <code>number</code>
Returns the map's maximum allowable zoom level.

**Kind**: global function  
**Returns**: <code>number</code> - The maxZoom.  
<a name="getMinPitch"></a>

## getMinPitch() ΓçÆ <code>number</code>
Returns the map's minimum allowable pitch.

**Kind**: global function  
**Returns**: <code>number</code> - The minPitch.  
<a name="getMinZoom"></a>

## getMinZoom() ΓçÆ <code>number</code>
Returns the map's minimum allowable zoom level.

**Kind**: global function  
**Returns**: <code>number</code> - The minZoom.  
<a name="getPadding"></a>

## getPadding() ΓçÆ <code>PaddingOptions</code>
Returns the current padding applied around the map viewport.

**Kind**: global function  
**Returns**: <code>PaddingOptions</code> - The current padding around the map viewport.  
<a name="getPaintProperty"></a>

## getPaintProperty(layerId, name) ΓçÆ <code>unknown</code>
Returns the value of a paint property in the specified style layer.

**Kind**: global function  
**Returns**: <code>unknown</code> - The value of the specified paint property.  

| Param | Type | Description |
| --- | --- | --- |
| layerId | <code>string</code> | The ID of the layer. |
| name | <code>string</code> | The name of a paint property. |

<a name="getPitch"></a>

## getPitch() ΓçÆ <code>number</code>
Returns the map's current pitch (tilt).

**Kind**: global function  
**Returns**: <code>number</code> - The map's current pitch, measured in degrees away from the plane of the screen.  
<a name="getPixelRatio"></a>

## getPixelRatio() ΓçÆ <code>number</code>
Returns the map's pixel ratio.

**Kind**: global function  
**Returns**: <code>number</code> - The pixel ratio.  
<a name="getRenderWorldCopies"></a>

## getRenderWorldCopies() ΓçÆ <code>boolean</code>
Returns the state of renderWorldCopies.

**Kind**: global function  
**Returns**: <code>boolean</code> - The renderWorldCopies.  
<a name="getSource"></a>

## getSource(id) ΓçÆ <code>Source</code>
Returns the source with the specified ID in the map's style.

**Kind**: global function  
**Returns**: <code>Source</code> - The style source with the specified ID.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the source to get. |

<a name="getSprite"></a>

## getSprite() ΓçÆ <code>Array.&lt;object&gt;</code>
Returns the as-is value of the style's sprite.

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - Style's sprite list of id-url pairs.  
<a name="getStyle"></a>

## getStyle() ΓçÆ <code>StyleSpecification</code>
Returns the map's MapLibre style object.

**Kind**: global function  
**Returns**: <code>StyleSpecification</code> - The map's style JSON object.  
<a name="getTerrain"></a>

## getTerrain() ΓçÆ <code>TerrainSpecification</code>
Get the terrain-options if terrain is loaded.

**Kind**: global function  
**Returns**: <code>TerrainSpecification</code> - The TerrainSpecification passed to setTerrain.  
<a name="getZoom"></a>

## getZoom() ΓçÆ <code>number</code>
Returns the map's current zoom level.

**Kind**: global function  
**Returns**: <code>number</code> - The map's current zoom level.  
<a name="hasControl"></a>

## hasControl(control) ΓçÆ <code>boolean</code>
Checks if a control exists on the map.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if map contains control.  

| Param | Type | Description |
| --- | --- | --- |
| control | <code>IControl</code> | The IControl to check. |

<a name="hasImage"></a>

## hasImage(id) ΓçÆ <code>boolean</code>
Check whether or not an image with a specific ID exists in the style.

**Kind**: global function  
**Returns**: <code>boolean</code> - A Boolean indicating whether the image exists.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the image. |

<a name="isMoving"></a>

## isMoving() ΓçÆ <code>boolean</code>
Returns true if the map is panning, zooming, rotating, or pitching due to a camera animation or user gesture.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the map is moving.  
<a name="isRotating"></a>

## isRotating() ΓçÆ <code>boolean</code>
Returns true if the map is rotating due to a camera animation or user gesture.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the map is rotating.  
<a name="isSourceLoaded"></a>

## isSourceLoaded(id) ΓçÆ <code>boolean</code>
Returns a Boolean indicating whether the source is loaded.

**Kind**: global function  
**Returns**: <code>boolean</code> - A Boolean indicating whether the source is loaded.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the source to be checked. |

<a name="isStyleLoaded"></a>

## isStyleLoaded() ΓçÆ <code>boolean</code> \| <code>void</code>
Returns a Boolean indicating whether the map's style is fully loaded.

**Kind**: global function  
**Returns**: <code>boolean</code> \| <code>void</code> - A Boolean indicating whether the style is fully loaded.  
<a name="isZooming"></a>

## isZooming() ΓçÆ <code>boolean</code>
Returns true if the map is zooming due to a camera animation or user gesture.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the map is zooming.  
<a name="jumpTo"></a>

## jumpTo(options, [eventData]) ΓçÆ <code>this</code>
Changes any combination of center, zoom, bearing, and pitch, without an animated transition.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>JumpToOptions</code> | Options object |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="listImages"></a>

## listImages() ΓçÆ <code>Array.&lt;string&gt;</code>
Returns an Array of strings containing the IDs of all images currently available in the map.

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - An Array of strings containing the names of all sprites/images currently available in the map.  
<a name="listens"></a>

## listens(type) ΓçÆ <code>boolean</code>
Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if there is at least one registered listener for specified event type, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The event type. |

<a name="loadImage"></a>

## loadImage(url) ΓçÆ <code>Promise.&lt;GetResourceResponse.&lt;(ImageBitmap\|HTMLImageElement)&gt;&gt;</code>
Load an image from an external URL to be used with Map#addImage.

**Kind**: global function  
**Returns**: <code>Promise.&lt;GetResourceResponse.&lt;(ImageBitmap\|HTMLImageElement)&gt;&gt;</code> - A promise that is resolved when the image is loaded.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the image file. Image file must be in png, webp, or jpg format. |

<a name="loaded"></a>

## loaded() ΓçÆ <code>boolean</code>
Returns a Boolean indicating whether the map is fully loaded.

**Kind**: global function  
**Returns**: <code>boolean</code> - A Boolean indicating whether the map is fully loaded.  
<a name="addProtocol"></a>

## addProtocol(customProtocol, loadFn) ΓçÆ <code>void</code>
Adds a custom load resource function that will be called when using a URL that starts with a custom URL schema.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| customProtocol | <code>string</code> | The protocol to hook, for example 'custom'. |
| loadFn | <code>AddProtocolAction</code> | The function to use when trying to fetch a resource specified by the customProtocol. |

<a name="moveLayer"></a>

## moveLayer(id, [beforeId]) ΓçÆ <code>this</code>
Moves a layer to a different z-position.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the layer to move. |
| [beforeId] | <code>string</code> | The ID of an existing layer to insert the new layer before. |

<a name="panBy"></a>

## panBy(offset, [options], [eventData]) ΓçÆ <code>this</code>
Pans the map by the specified offset.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| offset | <code>PointLike</code> | x and y coordinates by which to pan the map. |
| [options] | <code>AnimationOptions</code> | Options object. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="panTo"></a>

## panTo(lnglat, [options], [eventData]) ΓçÆ <code>this</code>
Pans the map to the specified location with an animated transition.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| lnglat | <code>LngLatLike</code> | The location to pan the map to. |
| [options] | <code>AnimationOptions</code> | Options describing the destination and animation of the transition. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="project"></a>

## project(lnglat) ΓçÆ <code>Point</code>
Returns a Point representing pixel coordinates, relative to the map's container, that correspond to the specified geographical location.

**Kind**: global function  
**Returns**: <code>Point</code> - The Point corresponding to lnglat, relative to the map's container.  

| Param | Type | Description |
| --- | --- | --- |
| lnglat | <code>LngLatLike</code> | The geographical location to project. |

<a name="queryRenderedFeatures"></a>

## queryRenderedFeatures([geometryOrOptions], [options]) ΓçÆ <code>Array</code>
Queries rendered features within a specified geometry or bounding box.

**Kind**: global function  
**Returns**: <code>Array</code> - An array of GeoJSON Feature objects representing the features that intersect the query geometry.  

| Param | Type | Description |
| --- | --- | --- |
| [geometryOrOptions] | <code>GeometryLike</code> \| <code>Array</code> \| <code>Object</code> | The geometry or options for the query. |
| [options] | <code>Object</code> | Options for the query. |

<a name="querySourceFeatures"></a>

## querySourceFeatures(sourceId, parameters) ΓçÆ <code>Array</code>
Queries source features within a specified source.

**Kind**: global function  
**Returns**: <code>Array</code> - An array of GeoJSON Feature objects representing the features in the source that satisfy the query parameters.  

| Param | Type | Description |
| --- | --- | --- |
| sourceId | <code>string</code> | The ID of the source to query. |
| parameters | <code>Object</code> | Parameters for the query. |

<a name="queryTerrainElevation"></a>

## queryTerrainElevation(lngLatLike) ΓçÆ <code>number</code>
Queries the terrain elevation at a specified geographical location.

**Kind**: global function  
**Returns**: <code>number</code> - The elevation (in meters) at the specified location.  

| Param | Type | Description |
| --- | --- | --- |
| lngLatLike | <code>LngLatLike</code> | The geographical location to query. |

<a name="redraw"></a>

## redraw() ΓçÆ <code>this</code>
Redraws the map.

**Kind**: global function  
<a name="remove"></a>

## remove() ΓçÆ <code>this</code>
Removes the map from the DOM.

**Kind**: global function  
<a name="removeControl"></a>

## removeControl(control) ΓçÆ <code>this</code>
Removes a control from the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| control | <code>Object</code> | The control to remove. |

<a name="removeFeatureState"></a>

## removeFeatureState(target, [key]) ΓçÆ <code>this</code>
Removes the state of a feature.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | The target feature. |
| [key] | <code>string</code> | The key of the state to remove. |

<a name="removeImage"></a>

## removeImage(id) ΓçÆ <code>this</code>
Removes an image from the style's sprite.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the image to remove. |

<a name="removeLayer"></a>

## removeLayer(idLayer)
Removes a layer from the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| idLayer | <code>string</code> | Identifier of the layer to remove. |

<a name="removeSource"></a>

## removeSource(idLayer)
Removes a source from the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| idLayer | <code>string</code> | Identifier of the source to remove. |

<a name="removeSprite"></a>

## removeSprite(id) ΓçÆ <code>this</code>
Removes a sprite from the style.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the sprite to remove. |

<a name="resetNorth"></a>

## resetNorth([options], [eventData]) ΓçÆ <code>this</code>
Resets the map orientation so that north is up.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options for the reset. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="resetNorthPitch"></a>

## resetNorthPitch([options], [eventData]) ΓçÆ <code>this</code>
Resets the map orientation so that north is up and pitch is set to 0┬░.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options for the reset. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="resize"></a>

## resize([eventData]) ΓçÆ <code>this</code>
Resizes the map to fit its container.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="rotateTo"></a>

## rotateTo(bearing, [options], [eventData]) ΓçÆ <code>this</code>
Rotates the map to the specified bearing with an animated transition.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bearing | <code>number</code> | The desired bearing (in degrees) to rotate the map to. |
| [options] | <code>Object</code> | Options for the rotation. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="setBearing"></a>

## setBearing(bearing, [eventData]) ΓçÆ <code>this</code>
Sets the map's bearing with an optional animated transition.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bearing | <code>number</code> | The desired bearing (in degrees) to set for the map. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="setCenter"></a>

## setCenter(center, [eventData]) ΓçÆ <code>this</code>
Sets the map's center coordinates with an optional animated transition.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| center | <code>LngLatLike</code> | The desired center coordinates to set for the map. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="setEventedParent"></a>

## setEventedParent([parent], [data]) ΓçÆ <code>this</code>
Sets the parent of the map's event emitter.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [parent] | <code>any</code> | The parent object to set for the event emitter. |
| [data] | <code>any</code> | Additional data to pass to the parent. |

<a name="setFeatureState"></a>

## setFeatureState(feature, state) ΓçÆ <code>this</code>
Sets the state of a feature.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| feature | <code>Object</code> | The feature to set the state for. |
| state | <code>Object</code> | The state object to set for the feature. |

<a name="setFilter"></a>

## setFilter(layerId, [filter], [options]) ΓçÆ <code>this</code>
Sets the filter for a specified layer.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| layerId | <code>string</code> | The ID of the layer to set the filter for. |
| [filter] | <code>Array</code> | The filter array to apply to the layer. |
| [options] | <code>Object</code> | Options for the filter. |

<a name="setGlyphs"></a>

## setGlyphs(glyphsUrl, [options]) ΓçÆ <code>this</code>
Sets the glyphs for the map's style.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| glyphsUrl | <code>string</code> | The URL to the glyphs. |
| [options] | <code>Object</code> | Options for setting the glyphs. |

<a name="setLayerZoomRange"></a>

## setLayerZoomRange(layerId, minzoom, maxzoom) ΓçÆ <code>this</code>
Sets the zoom range for a specified layer.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| layerId | <code>string</code> | The ID of the layer to set the zoom range for. |
| minzoom | <code>number</code> | The minimum zoom level for the layer. |
| maxzoom | <code>number</code> | The maximum zoom level for the layer. |

<a name="setLayoutProperty"></a>

## setLayoutProperty(layerId, name, value, [options]) ΓçÆ <code>this</code>
Sets a layout property for a specified layer.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| layerId | <code>string</code> | The ID of the layer to set the layout property for. |
| name | <code>string</code> | The name of the layout property to set. |
| value | <code>any</code> | The value to set for the layout property. |
| [options] | <code>Object</code> | Options for setting the layout property. |

<a name="setLight"></a>

## setLight(light, [options]) ΓçÆ <code>this</code>
Sets the light for the map's style.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| light | <code>Object</code> | The light object to set for the map. |
| [options] | <code>Object</code> | Options for setting the light. |

<a name="setMaxBounds"></a>

## setMaxBounds(bounds) ΓçÆ <code>this</code>
Sets the maximum bounds for the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| bounds | <code>Array</code> | The maximum bounds for the map. |

<a name="setMaxPitch"></a>

## setMaxPitch(maxPitch) ΓçÆ <code>this</code>
Sets the maximum pitch for the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| maxPitch | <code>number</code> | The maximum pitch (in degrees) for the map. |

<a name="setMaxZoom"></a>

## setMaxZoom(maxZoom) ΓçÆ <code>this</code>
Sets the maximum zoom level for the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| maxZoom | <code>number</code> | The maximum zoom level for the map. |

<a name="setMinPitch"></a>

## setMinPitch(minPitch) ΓçÆ <code>this</code>
Sets the minimum pitch for the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| minPitch | <code>number</code> | The minimum pitch (in degrees) for the map. |

<a name="setMinZoom"></a>

## setMinZoom(minZoom) ΓçÆ <code>this</code>
Sets the minimum zoom level for the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| minZoom | <code>number</code> | The minimum zoom level for the map. |

<a name="setPadding"></a>

## setPadding(padding, [eventData]) ΓçÆ <code>this</code>
Sets padding for the map's container.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| padding | <code>Object</code> | The padding object to set for the map's container. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="setPaintProperty"></a>

## setPaintProperty(layerId, name, value, [options]) ΓçÆ <code>this</code>
Sets a paint property for a specified layer.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| layerId | <code>string</code> | The ID of the layer to set the paint property for. |
| name | <code>string</code> | The name of the paint property to set. |
| value | <code>any</code> | The value to set for the paint property. |
| [options] | <code>Object</code> | Options for setting the paint property. |

<a name="setPitch"></a>

## setPitch(pitch, [eventData]) ΓçÆ <code>this</code>
Sets the map's pitch angle with an optional animated transition.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pitch | <code>number</code> | The desired pitch angle (in degrees) to set for the map. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="setPixelRatio"></a>

## setPixelRatio(pixelRatio) ΓçÆ <code>this</code>
Sets the pixel ratio for the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pixelRatio | <code>number</code> | The desired pixel ratio for the map. |

<a name="setRenderWorldCopies"></a>

## setRenderWorldCopies(renderWorldCopies) ΓçÆ <code>this</code>
Sets whether the map should render world copies when the center longitude is greater than or less than ┬▒180 degrees.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| renderWorldCopies | <code>boolean</code> | A boolean indicating whether to render world copies. |

<a name="setSprite"></a>

## setSprite(spriteUrl, [options]) ΓçÆ <code>this</code>
Sets the sprite for the map's style.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| spriteUrl | <code>string</code> | The URL to the sprite. |
| [options] | <code>Object</code> | Options for setting the sprite. |

<a name="setTerrain"></a>

## setTerrain(options) ΓçÆ <code>this</code>
Loads a 3D terrain mesh based on a "raster-dem" source.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>TerrainSpecification</code> | Options object specifying the terrain source. |

<a name="setTransformRequest"></a>

## setTransformRequest(transformRequest) ΓçÆ <code>this</code>
Updates the requestManager's transform request with a new function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| transformRequest | <code>RequestTransformFunction</code> | The callback function to update the transform request. |

<a name="setZoom"></a>

## setZoom(zoom, [eventData]) ΓçÆ <code>this</code>
Sets the map's zoom level.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| zoom | <code>number</code> | The zoom level to set (0-20). |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="snapToNorth"></a>

## snapToNorth([options], [eventData]) ΓçÆ <code>this</code>
Snaps the map so that north is up (0┬░ bearing), if the current bearing is close enough to it.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options for snapping to north. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="stop"></a>

## stop() ΓçÆ <code>this</code>
Stops any animated transition underway.

**Kind**: global function  
<a name="triggerRepaint"></a>

## triggerRepaint() ΓçÆ <code>void</code>
Triggers the rendering of a single frame.

**Kind**: global function  
<a name="unproject"></a>

## unproject(point) ΓçÆ <code>LngLat</code>
Returns geographical coordinates corresponding to the specified pixel coordinates.

**Kind**: global function  
**Returns**: <code>LngLat</code> - The geographical coordinates corresponding to the specified pixel coordinates.  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>PointLike</code> | The pixel coordinates to unproject. |

<a name="updateImage"></a>

## updateImage(id, image) ΓçÆ <code>this</code>
Updates an existing image in the style's sprite.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the image to update. |
| image | <code>ImageBitmap</code> \| <code>HTMLImageElement</code> \| <code>ImageData</code> \| <code>StyleImageInterface</code> \| <code>object</code> | The new image data. |

<a name="zoomIn"></a>

## zoomIn([options], [eventData]) ΓçÆ <code>this</code>
Increases the map's zoom level by 1.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options for zooming in. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="zoomOut"></a>

## zoomOut([options], [eventData]) ΓçÆ <code>this</code>
Decreases the map's zoom level by 1.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options for zooming out. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="zoomTo"></a>

## zoomTo(zoom, [options], [eventData]) ΓçÆ <code>this</code>
Zooms the map to the specified zoom level with an animated transition.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| zoom | <code>number</code> | The zoom level to transition to. |
| [options] | <code>Object</code> | Options for zooming to. |
| [eventData] | <code>any</code> | Additional properties to be added to event objects of events triggered by this method. |

<a name="addLayerGeoJSON"></a>

## addLayerGeoJSON(layer, layerPosition)
Adds a GeoJSON layer to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| layer | <code>Object</code> | Options for the GeoJSON layer to add. |
| layer.id | <code>string</code> | Unique identifier for the layer. |
| layer.data | <code>Object</code> | GeoJSON data for the layer. |
| layer.type | <code>string</code> | Map layer type (e.g., 'symbol', 'circle', 'fill').   * |
| layer.layout | <code>Object</code> | Layer layout configuration. |
| layer.paint | <code>Object</code> | Layer paint configuration. |
| layerPosition | <code>string</code> | Position of the layer: 'top', below 'labels' or below 'lines'. |

<a name="addLayerWMS"></a>

## addLayerWMS(tiles, idLayer, options)
Adds a WMS layer to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tiles | <code>Array.&lt;string&gt;</code> | Tiles for the raster layer. |
| idLayer | <code>string</code> | Unique identifier for the layer. |
| options | <code>Object</code> | Options of the layer: layout, paint and layerPosition. |

<a name="addLogo"></a>

## addLogo(options)
Adds a logo to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the logo to add. |
| options.id | <code>string</code> | Unique identifier for the logo. |
| options.url | <code>string</code> | URL of the logo image. |
| options.href | <code>string</code> | URL to navigate to when the logo is clicked. |
| options.height | <code>string</code> | Height of the logo. |

<a name="addBasemapsICGC"></a>

## addBasemapsICGC(basesArray)
Adds base layers to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| basesArray | <code>Array.&lt;Object&gt;</code> | Array of base layer objects. |

<a name="addBasemaps"></a>

## addBasemaps(baseLayers)
Adds base layers to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| baseLayers | <code>Array.&lt;Object&gt;</code> | Array of base layer objects. |
| baseLayers.label | <code>string</code> | Label for the base layer. |
| baseLayers.image | <code>string</code> | URL of the image representing the base layer. |
| baseLayers.url | <code>string</code> | URL of the base layer style. |

<a name="addFeatureQuery"></a>

## addFeatureQuery(idLayer, queryFields, popupStyle)
Adds feature query function to a layer.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| idLayer | <code>string</code> | name of the layer |
| queryFields | <code>objetc</code> | optional indications for the popup |
| popupStyle | <code>objetc</code> | optional indications for the popup style |

<a name="addScaleControl"></a>

## addScaleControl(options, position)
Adds a scale control to the map.
 * @function addScaleControl

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for configuring the scale control. |
| position | <code>string</code> | The position on the map to place the scale control (e.g., 'top-left', 'bottom-right'). |

<a name="addExportControl"></a>

## addExportControl(options, [position])
Adds an export control to the map with the provided options and position.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> \| <code>string</code> | Options for the export control or position if provided as a string. |
| [position] | <code>string</code> | Position to place the export control (e.g., 'top-right'). |

<a name="addMarker"></a>

## addMarker(options) ΓçÆ <code>Object</code>
Adds a marker to the map.

**Kind**: global function  
**Returns**: <code>Object</code> - - Instance of the added marker.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the marker to add. |
| options.text | <code>string</code> | Text content for the marker popup. |
| options.options | <code>Object</code> | Marker options. |
| options.coord | <code>LngLatLike</code> | Coordinates for placing the marker. |
| options.textOffset | <code>Object</code> | Text offset for the marker popup. |

<a name="addPopup"></a>

## addPopup(options, coord, text, popupStyle) ΓçÆ <code>Object</code>
Adds a popup to the map.

**Kind**: global function  
**Returns**: <code>Object</code> - - Instance of the added popup.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the popup to add. |
| coord | <code>LngLatLike</code> | Coordinates for placing the popup. |
| text | <code>string</code> | HTML content for the popup. |
| popupStyle | <code>string</code> | css content for the popup style. |

<a name="addFullScreen"></a>

## addFullScreen([position])
Adds a fullscreen control to the map.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [position] | <code>string</code> | <code>&quot;&#x27;top-right&#x27;&quot;</code> | Position to add the control on the map. |

<a name="addMenuItem"></a>

## addMenuItem(name)
Adds a menu item with a checkbox for controlling the visibility of a layer on the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the layer corresponding to the menu item. |

<a name="addLayerTree"></a>

## addLayerTree(options)
Adds a layer tree to the map.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options for the layer tree to add. |
| options.features | <code>Object</code> | Features for the layer tree. |
| options.id | <code>string</code> | Unique identifier for the layer tree. |
| options.type | <code>string</code> | Type of layer tree ('geojson', 'raster', etc.). |

<a name="createNavigationControl"></a>

## createNavigationControl(options, [position]) ΓçÆ <code>Object</code>
Creates a navigation control with the provided options.

**Kind**: global function  
**Returns**: <code>Object</code> - - Instance of the created navigation control.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Options for the navigation control. |
| [position] | <code>string</code> | <code>&quot;&#x27;top-right&#x27;&quot;</code> | Position to add the control on the map. |

<a name="addNavigationControl"></a>

## addNavigationControl(options, [position])
Adds a navigation control to the map with the provided options.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Options for the navigation control. |
| [position] | <code>string</code> | <code>&quot;&#x27;top-right&#x27;&quot;</code> | Position to add the control on the map. |

<a name="addAttributionControl"></a>

## addAttributionControl(options, [position])
Adds an attribution control to the map with the provided options.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | Options for the attribution control. |
| [position] | <code>string</code> | <code>&quot;&#x27;bottom-right&#x27;&quot;</code> | Position to add the control on the map. |

<a name="addImageLayerICGC"></a>

## addImageLayerICGC(url, idLayer, options)
Adds an ICGC image layer to the map based on the specified name and year.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url of the  layer. |
| idLayer | <code>string</code> | The user id for the  layer. |
| options | <code>object</code> | Type, position,layout and paint options for the layer |

<a name="addVectorLayerICGC"></a>

## addVectorLayerICGC(url, idLayer, options)
Adds an ICGC vector layer to the map based on the specified name and year.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url of the vector layer. |
| idLayer | <code>string</code> | The user id for the vector layer. |
| options | <code>object</code> | Type, position,layout and paint options for the layer |

<a name="addFGBLayerICGC"></a>

## addFGBLayerICGC(url, idLayer, options)
Adds an ICGC FGB layer to the map based on the specified name and year.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url of the FGB layer. |
| idLayer | <code>string</code> | Id for the layer. |
| options | <code>object</code> | Paint option for the layer |

<a name="addTerrainICGC"></a>

## addTerrainICGC(url, controlPosition)
Adds 3D terrain to the map using hillshade.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | dataset url of the terrain |
| controlPosition | <code>string</code> | Position to add the control on the map. |

<a name="addLegend"></a>

## addLegend(url, idLayer)
Add image legend.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | image legend url. |
| idLayer | <code>string</code> | layer's name. |

<a name="_findImageType"></a>

## \_findImageType(url, var1, var2, var3, var4) ΓçÆ <code>string</code> \| <code>null</code>
Finds the type of image based on the provided URL and specified vectors.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - - The type of image if found, otherwise null.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL of the image to find the type for. |
| var1 | <code>Object</code> | The first vector object containing key-value pairs. |
| var2 | <code>Object</code> | The second vector object containing key-value pairs. |
| var3 | <code>Object</code> | The third vector object containing key-value pairs. |
| var4 | <code>Object</code> | The fourth vector object containing key-value pairs. |

<a name="_getKeyByUrlFGB"></a>

## \_getKeyByUrlFGB(url) ΓçÆ <code>string</code> \| <code>null</code>
Gets the key by URL from the FGBAdmin layers.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - - The key if found, otherwise null.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to find the key for in the FGBAdmin layers. |

<a name="_getLegendByName"></a>

## \_getLegendByName(name) ΓçÆ <code>string</code> \| <code>null</code>
Gets the legend by name from the default vector layers.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - - The legend if found, otherwise null.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the vector layer to get the legend for. |

<a name="_getKeyByUrlVector"></a>

## \_getKeyByUrlVector(url) ΓçÆ <code>string</code> \| <code>null</code>
Gets the key by URL from the Vector layers.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - - The key if found, otherwise null.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to find the key for in the Vector layers. |

<a name="_raiseText3DStyle"></a>

## \_raiseText3DStyle() ΓçÆ <code>Promise.&lt;void&gt;</code>
Raises text 3D style on the map.

**Kind**: global function  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves after updating the text 3D style on the map.  
<a name="_dealStyleMaps"></a>

## \_dealStyleMaps(name) ΓçÆ <code>Object</code> \| <code>string</code> \| <code>null</code>
Deals with map styles based on the name.

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>string</code> \| <code>null</code> - - The map style object if found, or the input name if not found, or null if an error occurs.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the map style. |

<a name="_dealOrto3dStyle"></a>

## \_dealOrto3dStyle(name) ΓçÆ <code>void</code> \| <code>null</code>
Deals with the 3D ortho style based on the name.

**Kind**: global function  
**Returns**: <code>void</code> \| <code>null</code> - - Returns null if an error occurs.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the orto3D style. |

<a name="_dealOrderLayer"></a>

## \_dealOrderLayer(order) ΓçÆ <code>string</code>
Deals with the order of the layer.

**Kind**: global function  
**Returns**: <code>string</code> - - The id of the first symbol layer if the order is 'symbol', the id of the first line layer if the order is 'line', otherwise an empty string.  

| Param | Type | Description |
| --- | --- | --- |
| order | <code>string</code> | The order of the layer. |

<a name="_firstSymbolLayer"></a>

## \_firstSymbolLayer() ΓçÆ <code>string</code> \| <code>undefined</code>
Retrieves the id of the first symbol layer.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - - The id of the first symbol layer if found, otherwise undefined.  
<a name="_firstLineLayer"></a>

## \_firstLineLayer() ΓçÆ <code>string</code> \| <code>undefined</code>
Retrieves the id of the first line layer.

**Kind**: global function  
**Returns**: <code>string</code> \| <code>undefined</code> - - The id of the first line layer if found, otherwise undefined.  
<a name="_createCitiesMapboxLayer"></a>

## \_createCitiesMapboxLayer() ΓçÆ <code>MapboxLayer</code> \| <code>null</code>
Creates a Mapbox layer for displaying cities in 3D.

**Kind**: global function  
**Returns**: <code>MapboxLayer</code> \| <code>null</code> - - The Mapbox layer for displaying cities in 3D if created successfully, otherwise null.  
