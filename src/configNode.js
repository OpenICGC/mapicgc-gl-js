
const urlImages = "https://visors.icgc.cat/contextmaps/imatges_estil/";
const urlStyles = "https://geoserveis.icgc.cat/contextmaps/"; 
const defaultOptions = {
  limitsUrl: "https://tilemaps.icgc.cat/vt/limits-tilejsonV3.json",
geocoder: {
  peliasUrl1: "https://eines.icgc.cat/geocodificador/autocompletar?text=",
  peliasUrl2: "&layers=topo1%2Ctopo2%2Caddress&size=5",
},
mapOptions: {
  container: "map",
  center: {
    0: 1.537786,
    1: 41.837539,
  },

  zoom: 7.5,
  bearing: 0,
  pitch: 0,
  hash: false,
  style: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_gris.json.json",
  maxZoom: 18,
  maxPitch: 85,
},
logoOptions: {
  logoUrlColor: "https://tilemaps.icgc.cat/cdn/logos/ICGC_color_norma.svg",
  logoUrlWhite: "https://tilemaps.icgc.cat/cdn/logos/ICGC_white_norma.svg",
  logoLink: "https://www.icgc.cat",
  logoTitle: "Institut Cartogràfic i Geològic de Catalunya",
  logoWidth: 100,
},
map3dOptions: {
  spaceErrorFactor: 2,
  exaggeration: 1,
  zfactor: 49,
  minZoomRange: 15.5,
  maxZoomRange: 22,
  urlTilesetCities: "https://tilemaps.icgc.cat/vector/3dtiles/ciutats/v1/tilesetV1.0.json",
  layerIdOrder: "place-isolated",
  sourceLayerFilterId: "place",
  minZoomFilter: 15,
  layerId3d: "edificisMapboxLayer",
  terrainSource: "ICGC5M",
  style3dName: "orto3d",
  imageIcon: "https://tilemaps.icgc.cat/cdn/images/stick.png",
},
baseStyles: {
  0: {
    key: "TOPO",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard_general.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_estandard.png",
  },
  1: {
    key: "ORTO",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_orto_estandard.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png",
  },
  2: {
    key: "ORTO3D",
    url: "https://tilemaps.icgc.cat/cdn/styles/icgc_orto_3d.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png",
  },
  3: {
    key: "ADMIN",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_delimitacio_limits_administratius.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_delimitacio_limits_administratius.png",
  },
  4: {
    key: "DARK",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_fosc.png",
  },
  5: {
    key: "LIGHT",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_gris.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_gris.png",
  },
  6: {
    key: "GEOLOGY",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_geologic_informacio.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_geologic_informacio.png",
  },
},
urlTerrainICGC: {
  0: {
    name: "ICGC5M",
    url: "https://tilemaps.icgc.cat/tileserver/tileserver/terreny-5m-30m-rgb-extent/{z}/{x}/{y}.png",
  },
  1: {
    name: "WORLD30M",
    url: "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
    encoding: "terrarium",
  },
},
ortoLayersICGC: {
  0: {
    name: "ortofotoColorProvisional",
    key: "ortofoto_color_provisional",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_provisional",
  },
  1: {
    name: "ortofotoColor2022",
    key: "ortofoto_color_2022",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2022",
  },
  2: {
    name: "ortofotoColor2021",
    key: "ortofoto_color_2021",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2021",
  },
  3: {
    name: "ortofotoColor2020",
    key: "ortofoto_color_2020",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2020",
  },
  4: {
    name: "ortofotoColor2019",
    key: "ortofoto_color_2019",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2019",
  },
  5: {
    name: "ortofotoColor2018",
    key: "ortofoto_color_2018",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2018",
  },
  6: {
    name: "ortofotoColor2017",
    key: "ortofoto_color_2017",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2017",
  },
  7: {
    name: "ortofotoColor2016",
    key: "ortofoto_color_2016",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2016",
  },
  8: {
    name: "ortofotoColor2015",
    key: "ortofoto_color_2015",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2015",
  },
  9: {
    name: "ortofotoColor2014",
    key: "ortofoto_color_2014",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2014",
  },
  10: {
    name: "ortofotoColor2013",
    key: "ortofoto_color_2013",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2013",
  },
  11: {
    name: "ortofotoColor2012",
    key: "ortofoto_color_2012",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2012",
  },
  12: {
    name: "ortofotoColor2011",
    key: "ortofoto_color_2011",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2011",
  },
  13: {
    name: "ortofotoColor2010",
    key: "ortofoto_color_2010",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2010",
  },
  14: {
    name: "ortofotoColor2009",
    key: "ortofoto_color_2009",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2009",
  },
  15: {
    name: "ortofotoColor2008",
    key: "ortofoto_color_2008",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2008",
  },
  16: {
    name: "ortofotoColor20062007",
    key: "ortofoto_color_2006-2007",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2006-2007",
  },
  17: {
    name: "ortofotoColor20042005",
    key: "ortofoto_color_2004-2005",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2004-2005",
  },
  18: {
    name: "ortofotoColor20002003",
    key: "ortofoto_color_2000-2003",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2000-2003",
  },
  19: {
    name: "ortofotoBlancINegre1998",
    key: "ortofoto_blanc_i_negre_1998",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1998",
  },
  20: {
    name: "ortofotoBlancINegre19941997",
    key: "ortofoto_blanc_i_negre_1994-1997",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1994-1997",
  },
  21: {
    name: "ortofotoColor1993",
    key: "ortofoto_color_1993",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_1993",
  },
  22: {
    name: "ortofotoBlancINegre19831992",
    key: "ortofoto_blanc_i_negre_1983-1992",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1983-1992",
  },
  23: {
    name: "ortofotoBlancINegre19701977",
    key: "ortofoto_blanc_i_negre_1970-1977",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1970-1977",
  },
  24: {
    name: "ortofotoBlancINegre1956",
    key: "ortofoto_blanc_i_negre_1956",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1956",
  },
  25: {
    name: "ortofotoBlancINegre1945",
    key: "ortofoto_blanc_i_negre_1945",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1945",
  },
  26: {
    name: "ortofotoColorSerieAnual",
    key: "ortofoto_color_serie_anual",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_serie_anual",
  },
  27: {
    name: "ortofotoInfraroigProvisional",
    key: "ortofoto_infraroig_provisional",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_provisional",
  },
  28: {
    name: "ortofotoInfraroig2022",
    key: "ortofoto_infraroig_2022",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2022",
  },
  29: {
    name: "ortofotoInfraroig2021",
    key: "ortofoto_infraroig_2021",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2021",
  },
  30: {
    name: "ortofotoInfraroig2020",
    key: "ortofoto_infraroig_2020",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2020",
  },
  31: {
    name: "ortofotoInfraroig2019",
    key: "ortofoto_infraroig_2019",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2019",
  },
  32: {
    name: "ortofotoInfraroig2018",
    key: "ortofoto_infraroig_2018",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2018",
  },
  33: {
    name: "ortofotoInfraroig2017",
    key: "ortofoto_infraroig_2017",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2017",
  },
  34: {
    name: "ortofotoInfraroig2016",
    key: "ortofoto_infraroig_2016",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2016",
  },
  35: {
    name: "ortofotoInfraroig2015",
    key: "ortofoto_infraroig_2015",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2015",
  },
  36: {
    name: "ortofotoInfraroig2014",
    key: "ortofoto_infraroig_2014",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2014",
  },
  37: {
    name: "ortofotoInfraroig2013",
    key: "ortofoto_infraroig_2013",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2013",
  },
  38: {
    name: "ortofotoInfraroig2012",
    key: "ortofoto_infraroig_2012",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2012",
  },
  39: {
    name: "ortofotoInfraroig2011",
    key: "ortofoto_infraroig_2011",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2011",
  },
  40: {
    name: "ortofotoInfraroig2010",
    key: "ortofoto_infraroig_2010",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2010",
  },
  41: {
    name: "ortofotoInfraroig2009",
    key: "ortofoto_infraroig_2009",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2009",
  },
  42: {
    name: "ortofotoInfraroig2008",
    key: "ortofoto_infraroig_2008",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2008",
  },
  43: {
    name: "ortofotoInfraroig20062007",
    key: "ortofoto_infraroig_2006-2007",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2006-2007",
  },
  44: {
    name: "ortofotoInfraroig19961997",
    key: "ortofoto_infraroig_1996-1997",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_1996-1997",
  },
  45: {
    name: "ortofotoInfraroigSerieAnual",
    key: "ortofoto_infraroig_serie_anual",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_serie_anual",
  },
},
vectorLayersICGC: {
  0: {
    name: "agrupacionsCensals2015",
    key: "agrupacions_censals_2015",
  },
  1: {
    name: "agrupacionsCensals2016",
    key: "agrupacions_censals_2016",
  },
  2: {
    name: "agrupacionsCensals2017",
    key: "agrupacions_censals_2017",
  },
  3: {
    name: "agrupacionsCensals2018",
    key: "agrupacions_censals_2018",
  },
  4: {
    name: "agrupacionsCensals2019",
    key: "agrupacions_censals_2019",
  },
  5: {
    name: "agrupacionsCensals2020",
    key: "agrupacions_censals_2020",
  },
  6: {
    name: "agrupacionsCensals2021",
    key: "agrupacions_censals_2021",
  },
  7: {
    name: "agrupacionsCensalsVigent",
    key: "agrupacions_censals_vigent",
  },
  8: {
    name: "agrupacionsCensalsVigentText",
    key: "agrupacions_censals_vigent_text",
  },
  9: {
    name: "areesBasiquesPolicials2019",
    key: "arees_basiques_policials_2019",
  },
  10: {
    name: "areesBasiquesPolicials2020",
    key: "arees_basiques_policials_2020",
  },
  11: {
    name: "areesBasiquesPolicials2022",
    key: "arees_basiques_policials_2022",
  },
  12: {
    name: "areesBasiquesPolicialsVigent",
    key: "arees_basiques_policials_vigent",
  },
  13: {
    name: "areesBasiquesPolicialsVigentText",
    key: "arees_basiques_policials_vigent_text",
  },
  14: {
    name: "areesBasiquesSalutVigent",
    key: "arees_basiques_salut_vigent",
  },
  15: {
    name: "areesBasiquesServeisSocialsVigent",
    key: "arees_basiques_serveis_socials_vigent",
  },
  16: {
    name: "areesBasiquesServeisSocialsVigentText",
    key: "arees_basiques_serveis_socials_vigent_text",
  },
  17: {
    name: "areesGestioAssistencialVigent",
    key: "arees_gestio_assistencial_vigent",
  },
  18: {
    name: "areesHidrogeologiquesAquifersVigent",
    key: "arees_hidrogeologiques_aquifers_vigent",
  },
  19: {
    name: "catalunyaVigent",
    key: "catalunya_vigent",
  },
  20: {
    name: "catalunyaVigentText",
    key: "catalunya_vigent_text",
  },
  21: {
    name: "comarques2022",
    key: "comarques_2022",
  },
  22: {
    name: "comarquesVigent",
    key: "comarques_vigent",
  },
  23: {
    name: "comarquesVigentText",
    key: "comarques_vigent_text",
  },
  24: {
    name: "districtesCensals2002",
    key: "districtes_censals_2002",
  },
  25: {
    name: "districtesCensals2003",
    key: "districtes_censals_2003",
  },
  26: {
    name: "districtesCensals2004",
    key: "districtes_censals_2004",
  },
  27: {
    name: "districtesCensals2005",
    key: "districtes_censals_2005",
  },
  28: {
    name: "districtesCensals2006",
    key: "districtes_censals_2006",
  },
  29: {
    name: "districtesCensals2007",
    key: "districtes_censals_2007",
  },
  30: {
    name: "districtesCensals2008",
    key: "districtes_censals_2008",
  },
  31: {
    name: "districtesCensals2009",
    key: "districtes_censals_2009",
  },
  32: {
    name: "districtesCensals2010",
    key: "districtes_censals_2010",
  },
  33: {
    name: "districtesCensals2011",
    key: "districtes_censals_2011",
  },
  34: {
    name: "districtesCensals2012",
    key: "districtes_censals_2012",
  },
  35: {
    name: "districtesCensals2013",
    key: "districtes_censals_2013",
  },
  36: {
    name: "districtesCensals2014",
    key: "districtes_censals_2014",
  },
  37: {
    name: "districtesCensals2015",
    key: "districtes_censals_2015",
  },
  38: {
    name: "districtesCensals2016",
    key: "districtes_censals_2016",
  },
  39: {
    name: "districtesCensals2017",
    key: "districtes_censals_2017",
  },
  40: {
    name: "districtesCensals2018",
    key: "districtes_censals_2018",
  },
  41: {
    name: "districtesCensals2019",
    key: "districtes_censals_2019",
  },
  42: {
    name: "districtesCensals2020",
    key: "districtes_censals_2020",
  },
  43: {
    name: "districtesCensals2021",
    key: "districtes_censals_2021",
  },
  44: {
    name: "districtesCensals2022",
    key: "districtes_censals_2022",
  },
  45: {
    name: "districtesCensalsVigent",
    key: "districtes_censals_vigent",
  },
  46: {
    name: "districtesCensalsVigentText",
    key: "districtes_censals_vigent_text",
  },
  47: {
    name: "incendisForestalsVigent",
    key: "incendis_forestals_vigent",
  },
  48: {
    name: "incendisForestalsVigentText",
    key: "incendis_forestals_vigent_text",
  },
  49: {
    name: "municipis2022",
    key: "municipis_2022",
  },
  50: {
    name: "municipis2022Text",
    key: "municipis_2022_text",
  },
  51: {
    name: "municipisVigent",
    key: "municipis_vigent",
  },
  52: {
    name: "municipisVigentText",
    key: "municipis_vigent_text",
  },
  53: {
    name: "partitsJudicialsVigent",
    key: "partits_judicials_vigent",
  },
  54: {
    name: "partitsJudicialsVigentText",
    key: "partits_judicials_vigent_text",
  },
  55: {
    name: "plaTerritorial2015",
    key: "pla_territorial_2015",
  },
  56: {
    name: "plaTerritorialVigent",
    key: "pla_territorial_vigent",
  },
  57: {
    name: "plaTerritorialVigentText",
    key: "pla_territorial_vigent_text",
  },
  58: {
    name: "provinciesVigent",
    key: "provincies_vigent",
  },
  59: {
    name: "provinciesVigentText",
    key: "provincies_vigent_text",
  },
  60: {
    name: "regionsPolicialsVigent",
    key: "regions_policials_vigent",
  },
  61: {
    name: "regionsPolicialsVigentText",
    key: "regions_policials_vigent_text",
  },
  62: {
    name: "regionsSanitariesVigent",
    key: "regions_sanitaries_vigent",
  },
  63: {
    name: "regionsSanitariesVigentText",
    key: "regions_sanitaries_vigent_text",
  },
  64: {
    name: "seccionsCensals2002",
    key: "seccions_censals_2002",
  },
  65: {
    name: "seccionsCensals2003",
    key: "seccions_censals_2003",
  },
  66: {
    name: "seccionsCensals2004",
    key: "seccions_censals_2004",
  },
  67: {
    name: "seccionsCensals2005",
    key: "seccions_censals_2005",
  },
  68: {
    name: "seccionsCensals2006",
    key: "seccions_censals_2006",
  },
  69: {
    name: "seccionsCensals2007",
    key: "seccions_censals_2007",
  },
  70: {
    name: "seccionsCensals2008",
    key: "seccions_censals_2008",
  },
  71: {
    name: "seccionsCensals2009",
    key: "seccions_censals_2009",
  },
  72: {
    name: "seccionsCensals2010",
    key: "seccions_censals_2010",
  },
  73: {
    name: "seccionsCensals2011",
    key: "seccions_censals_2011",
  },
  74: {
    name: "seccionsCensals2012",
    key: "seccions_censals_2012",
  },
  75: {
    name: "seccionsCensals2013",
    key: "seccions_censals_2013",
  },
  76: {
    name: "seccionsCensals2014",
    key: "seccions_censals_2014",
  },
  77: {
    name: "seccionsCensals2015",
    key: "seccions_censals_2015",
  },
  78: {
    name: "seccionsCensals2016",
    key: "seccions_censals_2016",
  },
  79: {
    name: "seccionsCensals2017",
    key: "seccions_censals_2017",
  },
  80: {
    name: "seccionsCensals2018",
    key: "seccions_censals_2018",
  },
  81: {
    name: "seccionsCensals2019",
    key: "seccions_censals_2019",
  },
  82: {
    name: "seccionsCensals2020",
    key: "seccions_censals_2020",
  },
  83: {
    name: "seccionsCensals2021",
    key: "seccions_censals_2021",
  },
  84: {
    name: "seccionsCensals2022",
    key: "seccions_censals_2022",
  },
  85: {
    name: "seccionsCensalsVigent",
    key: "seccions_censals_vigent",
  },
  86: {
    name: "seccionsCensalsVigentText",
    key: "seccions_censals_vigent_text",
  },
  87: {
    name: "sectorsSanitarisVigent",
    key: "sectors_sanitaris_vigent",
  },
  88: {
    name: "vegueriesVigent",
    key: "vegueries_vigent",
  },
  89: {
    name: "vegueriesVigentText",
    key: "vegueries_vigent_text",
  },
},
vectorLayers: {
  0: {
    key: "cobertes2018",
    url: "https://tilemaps.icgc.cat/tileserver/cobertes_tilejson.json",
    legend: "https://tilemaps.icgc.cat/cdn/images/llegendaCobertesSol2018.jpg"
  },
},
wmsLayers: {
  0: {
    key: "espaisInteresGeologic",
    layer: "",
    url: "https://geoserveis.icgc.cat/servei/catalunya/espais-interes-geologic/wms/service?&service=WMS&request=GetMap&layers=espais-interes-geologic&styles=&format=image%2Fpng&transparent=true&version=1.1.1&tipus=wms&width=512&height=512&srs=EPSG%3A3857&bbox={bbox-epsg-3857}",
  },
  1: {
    key: "gravimetriaBouguer500000",
    layer: "",
    url: "https://geoserveis.icgc.cat/servei/catalunya/gravimetria/wms/service?&service=WMS&request=GetMap&layers=anomalia_bouguer_500000&styles=&format=image%2Fpng&transparent=true&version=1.1.1&tipus=wms&width=512&height=512&srs=EPSG%3A3857&bbox={bbox-epsg-3857}",
  },
  2: {
    key: "cobertesSol2018",
    layer: "",
    url: "https://geoserveis.icgc.cat/servei/catalunya/cobertes-sol/wms/service?&service=WMS&request=GetMap&layers=cobertes_2018&styles=&format=image%2Fpng&transparent=true&version=1.1.1&tipus=wms&width=512&height=512&srs=EPSG%3A3857&bbox={bbox-epsg-3857}",
  },
  3: {
    key: "administratiu",
    layer: "",
    url: "http://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/administratiu/MON3857NW/{z}/{x}/{y}.png",
  },
  4: {
    key: "simplificat",
    layer: "",
    url: "http://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/simplificat/MON3857NW/{z}/{x}/{y}.png",
  },
  5: {
    key: "cims",
    layer: "",
    url: "https://geoserveis.icgc.cat/icc_100cims/wms/service?REQUEST=GetMap&SERVICE=WMS&VERSION=1.1.1&LAYERS=0&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&SRS=EPSG:25831&BBOX=137118.923076923,4488408.75,650959.076923077,4749634.75&WIDTH=895&HEIGHT=455",
  },
  6: {
    key: "cobertesSol",
    layer: "",
    url: "http://geoserveis.icgc.cat/servei/catalunya/cobertes-sol/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&LAYERS=cobertes_2009&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:25831&BBOX=374110.828167253,4639230.79853085,452621.120632226,4703578.45000215&WIDTH=1020&HEIGHT=836",
  },
},
fgbLayers: {
  0: {
    name: "agrupacionsCensalsVigent",
    key: "agrupacions_censals_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/agrupacions_censals_vigent.fgb",
  },
  1: {
    name: "agrupacionsCensalsVigentText",
    key: "agrupacions_censals_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/agrupacions_censals_vigent_text.fgb",
  },
  2: {
    name: "areesBasiquesPolicialsVigent",
    key: "arees_basiques_policials_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_policials_vigent.fgb",
  },
  3: {
    name: "areesBasiquesPolicialsVigentText",
    key: "arees_basiques_policials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_policials_vigent_text.fgb",
  },
  4: {
    name: "areesBasiquesSalutVigent",
    key: "arees_basiques_salut_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_salut_vigent.fgb",
  },
  5: {
    name: "areesBasiquesServeisSocialsVigent",
    key: "arees_basiques_serveis_socials_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_serveis_socials_vigent.fgb",
  },
  6: {
    name: "areesBasiquesServeisSocialsVigentText",
    key: "arees_basiques_serveis_socials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_serveis_socials_vigent_text.fgb",
  },
  7: {
    name: "areesGestioAssistencialVigent",
    key: "arees_gestio_assistencial_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_gestio_assistencial_vigent.fgb",
  },
  8: {
    name: "areesHidrogeologiquesAquifersVigent",
    key: "arees_hidrogeologiques_aquifers_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_hidrogeologiques_aquifers_vigent.fgb",
  },
  9: {
    name: "catalunyaVigent",
    key: "catalunya_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/catalunya_vigent.fgb",
  },
  10: {
    name: "catalunyaVigentText",
    key: "catalunya_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/catalunya_vigent_text.fgb",
  },
  11: {
    name: "comarquesVigent",
    key: "comarques_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/comarques_vigent.fgb",
  },
  12: {
    name: "comarquesVigentText",
    key: "comarques_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/comarques_vigent_text.fgb",
  },
  13: {
    name: "districtesCensalsVigent",
    key: "districtes_censals_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/districtes_censals_vigent.fgb",
  },
  14: {
    name: "districtesCensalsVigentText",
    key: "districtes_censals_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/districtes_censals_vigent_text.fgb",
  },
  15: {
    name: "incendisForestalsVigent",
    key: "incendis_forestals_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/incendis_forestals_vigent.fgb",
  },
  16: {
    name: "incendisForestalsVigentText",
    key: "incendis_forestals_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/incendis_forestals_vigent_text.fgb",
  },
  17: {
    name: "municipisVigent",
    key: "municipis_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/municipis_vigent.fgb",
  },
  18: {
    name: "municipisVigentText",
    key: "municipis_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/municipis_vigent_text.fgb",
  },
  19: {
    name: "partitsJudicialsVigent",
    key: "partits_judicials_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/partits_judicials_vigent.fgb",
  },
  20: {
    name: "partitsJudicialsVigentText",
    key: "partits_judicials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/partits_judicials_vigent_text.fgb",
  },
  21: {
    name: "plaTerritorialVigent",
    key: "pla_territorial_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/pla_territorial_vigent.fgb",
  },
  22: {
    name: "plaTerritorialVigentText",
    key: "pla_territorial_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/pla_territorial_vigent_text.fgb",
  },
  23: {
    name: "provinciesVigent",
    key: "provincies_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/provincies_vigent.fgb",
  },
  24: {
    name: "provinciesVigentText",
    key: "provincies_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/provincies_vigent_text.fgb",
  },
  25: {
    name: "regionsPolicialsVigent",
    key: "regions_policials_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_policials_vigent.fgb",
  },
  26: {
    name: "regionsPolicialsVigentText",
    key: "regions_policials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_policials_vigent_text.fgb",
  },
  27: {
    name: "regionsSanitariesVigent",
    key: "regions_sanitaries_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_sanitaries_vigent.fgb",
  },
  28: {
    name: "regionsSanitariesVigentText",
    key: "regions_sanitaries_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_sanitaries_vigent_text.fgb",
  },
  29: {
    name: "seccionsCensalsVigent",
    key: "seccions_censals_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/seccions_censals_vigent.fgb",
  },
  30: {
    name: "seccionsCensalsVigentText",
    key: "seccions_censals_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/seccions_censals_vigent_text.fgb",
  },
  31: {
    name: "sectorsSanitarisVigent",
    key: "sectors_sanitaris_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/sectors_sanitaris_vigent.fgb",
  },
  32: {
    name: "vegueriesVigent",
    key: "vegueries_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/vegueries_vigent.fgb",
  },
  33: {
    name: "vegueriesVigentText",
    key: "vegueries_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/vegueries_vigent_text.fgb",
  },
},
};

module.exports = defaultOptions;
