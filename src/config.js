
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
  style: "https://geoserveis.icgc.cat/styles/mapa-base-estandard-gris.json.json",
  maxZoom: 18,
  maxPitch: 85,
},
logoIcgcOptions: {
  logoUrlColor: "https://tilemaps.icgc.cat/cdn/logos/icgc_logo_color.png",
  logoUrlWhite: "https://tilemaps.icgc.cat/cdn/logos/icgc_logo_blanc.svg",
  logoLink: "https://www.icgc.cat",
  logoTitle: "Institut Cartogràfic i Geològic de Catalunya",
  logoWidth: 100,
},
logoGencatOptions: {
  logoUrlColor: "https://tilemaps.icgc.cat/cdn/logos/gencat_logo_color.png",
  logoUrlWhite: "https://tilemaps.icgc.cat/cdn/logos/gencat_logo_blanc.png",
  logoLink: "https://web.gencat.cat/",
  logoTitle: "Generalitat de Catalunya",
  logoWidth: 100,
},
map3dOptions: {
  spaceErrorFactor: 2,
  exaggeration: 1,
  zfactor: 48,
  minZoomRange: 15.5,
  maxZoomRange: 22,
  urlTilesetCities: "https://tilemaps.icgc.cat/vector/3dtiles/ciutats/v1/tilesetV1.0.json",
  layerIdOrder: "place-isolated",
  sourceLayerFilterId: "place",
  minZoomFilter: 14,
  layerId3d: "edificisMapboxLayer",
  terrainSource: "ICGC5M",
  style3dName: "orto3d",
  imageIcon: "https://tilemaps.icgc.cat/cdn/images/stick.png",
},
baseStyles: {
  0: {
    key: "TOPO",
    url: "https://geoserveis.icgc.cat/styles/mapa-base-topografic.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_estandard.png",
  },
  1: {
    key: "ORTO",
    url: "https://geoserveis.icgc.cat/styles/mapa-base-orto.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png",
  },
  2: {
    key: "ORTO3D",
    url: "https://tilemaps.icgc.cat/cdn/styles/icgc_orto_3d.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png",
  },
  3: {
    key: "ADMIN",
    url: "https://geoserveis.icgc.cat/styles/mapa-base-administratiu.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_delimitacio_limits_administratius.png",
  },
  4: {
    key: "DARK",
    url: "https://geoserveis.icgc.cat/styles/icgc_mapa_base_fosc.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_fosc.png",
  },
  5: {
    key: "LIGHT",
    url: "https://geoserveis.icgc.cat/styles/mapa-base-estandard-gris.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_mapa_base_gris.png",
  },
  6: {
    key: "GEOLOGY",
    url: "https://geoserveis.icgc.cat/styles/mapa-base-geologic.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_geologic_informacio.png",
  },
  7: {
    key: "ORTOHYBRID",
    url: "https://geoserveis.icgc.cat/styles/mapa-base-orto-hibrida.json",
    image: "https://visors.icgc.cat/contextmaps/imatges_estil/icgc_orto_hibrida.png",
  },
},
urlTerrainICGC: {
  0: {
    name: "ICGC5M",
    url: "https://tilemaps.icgc.cat/tileserver/tileserver/terreny-5m-30m-rgb-extent/{z}/{x}/{y}.png",
  },
  1: {
    name: "WORLD30M",
    url: "https://tiles.mapterhorn.com/{z}/{x}/{y}.webp",
    encoding: "terrarium",
    attribution: "<a href='https://mapterhorn.com/attribution'>© Mapterhorn</a>",
    tileSize: 512,
  },
},
ortoLayersICGC: {
  0: {
    name: "ortofotoColorProvisional",
    key: "ortofoto_color_provisional",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_provisional",
  },
  1: {
    name: "ortofotoColorVigent",
    key: "ortofoto_color_vigent",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_vigent",
  },
  2: {
    name: "ortofotoColor2025",
    key: "ortofoto_color_2025",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2025",
  },
  3: {
    name: "ortofotoColor2024",
    key: "ortofoto_color_2024",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2024",
  },
  4: {
    name: "ortofotoColor2023",
    key: "ortofoto_color_2023",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2023",
  },
  5: {
    name: "ortofotoColor2022",
    key: "ortofoto_color_2022",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2022",
  },
  6: {
    name: "ortofotoColor2021",
    key: "ortofoto_color_2021",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2021",
  },
  7: {
    name: "ortofotoColor2020",
    key: "ortofoto_color_2020",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2020",
  },
  8: {
    name: "ortofotoColor2019",
    key: "ortofoto_color_2019",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2019",
  },
  9: {
    name: "ortofotoColor2018",
    key: "ortofoto_color_2018",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2018",
  },
  10: {
    name: "ortofotoColor2017",
    key: "ortofoto_color_2017",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2017",
  },
  11: {
    name: "ortofotoColor2016",
    key: "ortofoto_color_2016",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2016",
  },
  12: {
    name: "ortofotoColor2015",
    key: "ortofoto_color_2015",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2015",
  },
  13: {
    name: "ortofotoColor2014",
    key: "ortofoto_color_2014",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2014",
  },
  14: {
    name: "ortofotoColor2013",
    key: "ortofoto_color_2013",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2013",
  },
  15: {
    name: "ortofotoColor2012",
    key: "ortofoto_color_2012",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2012",
  },
  16: {
    name: "ortofotoColor2011",
    key: "ortofoto_color_2011",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2011",
  },
  17: {
    name: "ortofotoColor2010",
    key: "ortofoto_color_2010",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2010",
  },
  18: {
    name: "ortofotoColor2009",
    key: "ortofoto_color_2009",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2009",
  },
  19: {
    name: "ortofotoColor2008",
    key: "ortofoto_color_2008",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2008",
  },
  20: {
    name: "ortofotoColor20062007",
    key: "ortofoto_color_2006-2007",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2006-2007",
  },
  21: {
    name: "ortofotoColor20042005",
    key: "ortofoto_color_2004-2005",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2004-2005",
  },
  22: {
    name: "ortofotoColor20002003",
    key: "ortofoto_color_2000-2003",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2000-2003",
  },
  23: {
    name: "ortofotoBlancINegre1998",
    key: "ortofoto_blanc_i_negre_1998",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1998",
  },
  24: {
    name: "ortofotoBlancINegre19941997",
    key: "ortofoto_blanc_i_negre_1994-1997",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1994-1997",
  },
  25: {
    name: "ortofotoColor1993",
    key: "ortofoto_color_1993",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_1993",
  },
  26: {
    name: "ortofotoBlancINegre19831992",
    key: "ortofoto_blanc_i_negre_1983-1992",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1983-1992",
  },
  27: {
    name: "ortofotoBlancINegre19701977",
    key: "ortofoto_blanc_i_negre_1970-1977",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1970-1977",
  },
  28: {
    name: "ortofotoBlancINegre1956",
    key: "ortofoto_blanc_i_negre_1956",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1956",
  },
  29: {
    name: "ortofotoBlancINegre1945",
    key: "ortofoto_blanc_i_negre_1945",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1945",
  },
  30: {
    name: "ortofotoColorSerieAnual",
    key: "ortofoto_color_serie_anual",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_serie_anual",
  },
  31: {
    name: "ortofotoInfraroigProvisional",
    key: "ortofoto_infraroig_provisional",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_provisional",
  },
  32: {
    name: "ortofotoInfraroigVigent",
    key: "ortofoto_infraroig_vigent",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_vigent",
  },
  33: {
    name: "ortofotoInfraroig2025",
    key: "ortofoto_infraroig_2025",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2025",
  },
  34: {
    name: "ortofotoInfraroig2024",
    key: "ortofoto_infraroig_2024",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2024",
  },
  35: {
    name: "ortofotoInfraroig2023",
    key: "ortofoto_infraroig_2023",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2023",
  },
  36: {
    name: "ortofotoInfraroig2022",
    key: "ortofoto_infraroig_2022",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2022",
  },
  37: {
    name: "ortofotoInfraroig2021",
    key: "ortofoto_infraroig_2021",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2021",
  },
  38: {
    name: "ortofotoInfraroig2020",
    key: "ortofoto_infraroig_2020",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2020",
  },
  39: {
    name: "ortofotoInfraroig2019",
    key: "ortofoto_infraroig_2019",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2019",
  },
  40: {
    name: "ortofotoInfraroig2018",
    key: "ortofoto_infraroig_2018",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2018",
  },
  41: {
    name: "ortofotoInfraroig2017",
    key: "ortofoto_infraroig_2017",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2017",
  },
  42: {
    name: "ortofotoInfraroig2016",
    key: "ortofoto_infraroig_2016",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2016",
  },
  43: {
    name: "ortofotoInfraroig2015",
    key: "ortofoto_infraroig_2015",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2015",
  },
  44: {
    name: "ortofotoInfraroig2014",
    key: "ortofoto_infraroig_2014",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2014",
  },
  45: {
    name: "ortofotoInfraroig2013",
    key: "ortofoto_infraroig_2013",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2013",
  },
  46: {
    name: "ortofotoInfraroig2012",
    key: "ortofoto_infraroig_2012",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2012",
  },
  47: {
    name: "ortofotoInfraroig2011",
    key: "ortofoto_infraroig_2011",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2011",
  },
  48: {
    name: "ortofotoInfraroig2010",
    key: "ortofoto_infraroig_2010",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2010",
  },
  49: {
    name: "ortofotoInfraroig2009",
    key: "ortofoto_infraroig_2009",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2009",
  },
  50: {
    name: "ortofotoInfraroig2008",
    key: "ortofoto_infraroig_2008",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2008",
  },
  51: {
    name: "ortofotoInfraroig2007",
    key: "ortofoto_infraroig_2007",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2007",
  },
  52: {
    name: "ortofotoInfraroig19961997",
    key: "ortofoto_infraroig_1996-1997",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_1996-1997",
  },
  53: {
    name: "ortofotoInfraroigSerieAnual",
    key: "ortofoto_infraroig_serie_anual",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_serie_anual",
  },
  54: {
    name: "ortofotoGrisVigent",
    key: "ortofoto_gris_vigent",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_gris_vigent",
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
    name: "agrupacionsCensals2022",
    key: "agrupacions_censals_2022",
  },
  8: {
    name: "agrupacionsCensals2023",
    key: "agrupacions_censals_2023",
  },
  9: {
    name: "agrupacionsCensals2024",
    key: "agrupacions_censals_2024",
  },
  10: {
    name: "agrupacionsCensals2025",
    key: "agrupacions_censals_2025",
  },
  11: {
    name: "agrupacionsCensalsVigent",
    key: "agrupacions_censals_vigent",
  },
  12: {
    name: "agrupacionsCensalsVigentText",
    key: "agrupacions_censals_vigent_text",
  },
  13: {
    name: "areesBasiquesPolicials2019",
    key: "arees_basiques_policials_2019",
  },
  14: {
    name: "areesBasiquesPolicials2020",
    key: "arees_basiques_policials_2020",
  },
  15: {
    name: "areesBasiquesPolicials2022",
    key: "arees_basiques_policials_2022",
  },
  16: {
    name: "areesBasiquesPolicials2023",
    key: "arees_basiques_policials_2023",
  },
  17: {
    name: "areesBasiquesPolicials2023Text",
    key: "arees_basiques_policials_2023_text",
  },
  18: {
    name: "areesBasiquesPolicialsVigent",
    key: "arees_basiques_policials_vigent",
  },
  19: {
    name: "areesBasiquesPolicialsVigent2023",
    key: "arees_basiques_policials_vigent_2023",
  },
  20: {
    name: "areesBasiquesPolicialsVigent2023Text",
    key: "arees_basiques_policials_vigent_2023_text",
  },
  21: {
    name: "areesBasiquesPolicialsVigent2024",
    key: "arees_basiques_policials_vigent_2024",
  },
  22: {
    name: "areesBasiquesPolicialsVigent2024Text",
    key: "arees_basiques_policials_vigent_2024_text",
  },
  23: {
    name: "areesBasiquesPolicialsVigentText",
    key: "arees_basiques_policials_vigent_text",
  },
  24: {
    name: "areesBasiquesSalutVigent",
    key: "arees_basiques_salut_vigent",
  },
  25: {
    name: "areesBasiquesServeisSocialsVigent",
    key: "arees_basiques_serveis_socials_vigent",
  },
  26: {
    name: "areesBasiquesServeisSocialsVigentText",
    key: "arees_basiques_serveis_socials_vigent_text",
  },
  27: {
    name: "areesGestioAssistencialVigent",
    key: "arees_gestio_assistencial_vigent",
  },
  28: {
    name: "areesHidrogeologiquesAquifersVigent",
    key: "arees_hidrogeologiques_aquifers_vigent",
  },
  29: {
    name: "catalunya2025",
    key: "catalunya_2025",
  },
  30: {
    name: "catalunyaVigent",
    key: "catalunya_vigent",
  },
  31: {
    name: "catalunyaVigentText",
    key: "catalunya_vigent_text",
  },
  32: {
    name: "comarques2022",
    key: "comarques_2022",
  },
  33: {
    name: "comarques2025",
    key: "comarques_2025",
  },
  34: {
    name: "comarques2026",
    key: "comarques_2026",
  },
  35: {
    name: "comarquesVigent",
    key: "comarques_vigent",
  },
  36: {
    name: "comarquesVigentText",
    key: "comarques_vigent_text",
  },
  37: {
    name: "comarquesVigents",
    key: "comarques_vigents",
  },
  38: {
    name: "comarquesVigentsText",
    key: "comarques_vigents_text",
  },
  39: {
    name: "districtesCensals2015",
    key: "districtes_censals_2015",
  },
  40: {
    name: "districtesCensals2016",
    key: "districtes_censals_2016",
  },
  41: {
    name: "districtesCensals2017",
    key: "districtes_censals_2017",
  },
  42: {
    name: "districtesCensals2018",
    key: "districtes_censals_2018",
  },
  43: {
    name: "districtesCensals2019",
    key: "districtes_censals_2019",
  },
  44: {
    name: "districtesCensals2020",
    key: "districtes_censals_2020",
  },
  45: {
    name: "districtesCensals2021",
    key: "districtes_censals_2021",
  },
  46: {
    name: "districtesCensals2022",
    key: "districtes_censals_2022",
  },
  47: {
    name: "districtesCensals2023",
    key: "districtes_censals_2023",
  },
  48: {
    name: "districtesCensals2024",
    key: "districtes_censals_2024",
  },
  49: {
    name: "districtesCensals2025",
    key: "districtes_censals_2025",
  },
  50: {
    name: "districtesCensalsVigent",
    key: "districtes_censals_vigent",
  },
  51: {
    name: "districtesCensalsVigentText",
    key: "districtes_censals_vigent_text",
  },
  52: {
    name: "espaisNaturalsEnpeVigent",
    key: "espais_naturals_enpe_vigent",
  },
  53: {
    name: "espaisNaturalsEnpeVigentText",
    key: "espais_naturals_enpe_vigent_text",
  },
  54: {
    name: "espaisNaturalsPeinVigent",
    key: "espais_naturals_pein_vigent",
  },
  55: {
    name: "espaisNaturalsPeinVigentText",
    key: "espais_naturals_pein_vigent_text",
  },
  56: {
    name: "incendisForestalsVigent",
    key: "incendis_forestals_vigent",
  },
  57: {
    name: "incendisForestalsVigentText",
    key: "incendis_forestals_vigent_text",
  },
  58: {
    name: "municipis2022",
    key: "municipis_2022",
  },
  59: {
    name: "municipis2022Text",
    key: "municipis_2022_text",
  },
  60: {
    name: "municipis2025",
    key: "municipis_2025",
  },
  61: {
    name: "municipis2026",
    key: "municipis_2026",
  },
  62: {
    name: "municipisVigent",
    key: "municipis_vigent",
  },
  63: {
    name: "municipisVigentText",
    key: "municipis_vigent_text",
  },
  64: {
    name: "partitsJudicialsVigent",
    key: "partits_judicials_vigent",
  },
  65: {
    name: "partitsJudicialsVigentText",
    key: "partits_judicials_vigent_text",
  },
  66: {
    name: "plaTerritorial2015",
    key: "pla_territorial_2015",
  },
  67: {
    name: "plaTerritorial2019",
    key: "pla_territorial_2019",
  },
  68: {
    name: "plaTerritorial2020",
    key: "pla_territorial_2020",
  },
  69: {
    name: "plaTerritorial2021",
    key: "pla_territorial_2021",
  },
  70: {
    name: "plaTerritorial2022",
    key: "pla_territorial_2022",
  },
  71: {
    name: "plaTerritorial2023",
    key: "pla_territorial_2023",
  },
  72: {
    name: "plaTerritorial2024",
    key: "pla_territorial_2024",
  },
  73: {
    name: "plaTerritorial2025",
    key: "pla_territorial_2025",
  },
  74: {
    name: "plaTerritorialVigent",
    key: "pla_territorial_vigent",
  },
  75: {
    name: "plaTerritorialVigentText",
    key: "pla_territorial_vigent_text",
  },
  76: {
    name: "provincies2025",
    key: "provincies_2025",
  },
  77: {
    name: "provinciesVigent",
    key: "provincies_vigent",
  },
  78: {
    name: "provinciesVigentText",
    key: "provincies_vigent_text",
  },
  79: {
    name: "provinciesVigents",
    key: "provincies_vigents",
  },
  80: {
    name: "provinciesVigentsText",
    key: "provincies_vigents_text",
  },
  81: {
    name: "regionsPolicialsVigent",
    key: "regions_policials_vigent",
  },
  82: {
    name: "regionsPolicialsVigentText",
    key: "regions_policials_vigent_text",
  },
  83: {
    name: "regionsSanitariesVigent",
    key: "regions_sanitaries_vigent",
  },
  84: {
    name: "regionsSanitariesVigentText",
    key: "regions_sanitaries_vigent_text",
  },
  85: {
    name: "seccionsCensals2015",
    key: "seccions_censals_2015",
  },
  86: {
    name: "seccionsCensals2016",
    key: "seccions_censals_2016",
  },
  87: {
    name: "seccionsCensals2017",
    key: "seccions_censals_2017",
  },
  88: {
    name: "seccionsCensals2018",
    key: "seccions_censals_2018",
  },
  89: {
    name: "seccionsCensals2019",
    key: "seccions_censals_2019",
  },
  90: {
    name: "seccionsCensals2020",
    key: "seccions_censals_2020",
  },
  91: {
    name: "seccionsCensals2021",
    key: "seccions_censals_2021",
  },
  92: {
    name: "seccionsCensals2022",
    key: "seccions_censals_2022",
  },
  93: {
    name: "seccionsCensals2023",
    key: "seccions_censals_2023",
  },
  94: {
    name: "seccionsCensals2024",
    key: "seccions_censals_2024",
  },
  95: {
    name: "seccionsCensals2025",
    key: "seccions_censals_2025",
  },
  96: {
    name: "seccionsCensalsVigent",
    key: "seccions_censals_vigent",
  },
  97: {
    name: "seccionsCensalsVigentText",
    key: "seccions_censals_vigent_text",
  },
  98: {
    name: "sectorsSanitarisVigent",
    key: "sectors_sanitaris_vigent",
  },
  99: {
    name: "vegueries2025",
    key: "vegueries_2025",
  },
  100: {
    name: "vegueriesVigent",
    key: "vegueries_vigent",
  },
  101: {
    name: "vegueriesVigentText",
    key: "vegueries_vigent_text",
  },
},
vectorLayers: {
  0: {
    key: "cobertes2018",
    url: "https://tilemaps.icgc.cat/tileserver/cobertes_tilejson.json",
    legend: "https://tilemaps.icgc.cat/cdn/images/llegendaCobertesSol2018.jpg",
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
    name: "areesBasiquesPolicialsVigent2023",
    key: "arees_basiques_policials_vigent_2023",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_policials_vigent_2023.fgb",
  },
  4: {
    name: "areesBasiquesPolicialsVigent2023Text",
    key: "arees_basiques_policials_vigent_2023_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_policials_vigent_2023_text.fgb",
  },
  5: {
    name: "areesBasiquesPolicialsVigent2024",
    key: "arees_basiques_policials_vigent_2024",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_policials_vigent_2024.fgb",
  },
  6: {
    name: "areesBasiquesPolicialsVigent2024Text",
    key: "arees_basiques_policials_vigent_2024_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_policials_vigent_2024_text.fgb",
  },
  7: {
    name: "areesBasiquesPolicialsVigentText",
    key: "arees_basiques_policials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_policials_vigent_text.fgb",
  },
  8: {
    name: "areesBasiquesSalutVigent",
    key: "arees_basiques_salut_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_salut_vigent.fgb",
  },
  9: {
    name: "areesBasiquesServeisSocialsVigent",
    key: "arees_basiques_serveis_socials_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_serveis_socials_vigent.fgb",
  },
  10: {
    name: "areesBasiquesServeisSocialsVigentText",
    key: "arees_basiques_serveis_socials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_basiques_serveis_socials_vigent_text.fgb",
  },
  11: {
    name: "areesGestioAssistencialVigent",
    key: "arees_gestio_assistencial_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_gestio_assistencial_vigent.fgb",
  },
  12: {
    name: "areesHidrogeologiquesAquifersVigent",
    key: "arees_hidrogeologiques_aquifers_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/arees_hidrogeologiques_aquifers_vigent.fgb",
  },
  13: {
    name: "catalunyaVigent",
    key: "catalunya_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/catalunya_vigent.fgb",
  },
  14: {
    name: "catalunyaVigentText",
    key: "catalunya_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/catalunya_vigent_text.fgb",
  },
  15: {
    name: "comarquesVigent",
    key: "comarques_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/comarques_vigent.fgb",
  },
  16: {
    name: "comarquesVigentText",
    key: "comarques_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/comarques_vigent_text.fgb",
  },
  17: {
    name: "comarquesVigents",
    key: "comarques_vigents",
    url: "https://tilemaps.icgc.cat/vector/fgb/comarques_vigents.fgb",
  },
  18: {
    name: "comarquesVigentsText",
    key: "comarques_vigents_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/comarques_vigents_text.fgb",
  },
  19: {
    name: "districtesCensalsVigent",
    key: "districtes_censals_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/districtes_censals_vigent.fgb",
  },
  20: {
    name: "districtesCensalsVigentText",
    key: "districtes_censals_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/districtes_censals_vigent_text.fgb",
  },
  21: {
    name: "espaisNaturalsEnpeVigent",
    key: "espais_naturals_enpe_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/espais_naturals_enpe_vigent.fgb",
  },
  22: {
    name: "espaisNaturalsEnpeVigentText",
    key: "espais_naturals_enpe_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/espais_naturals_enpe_vigent_text.fgb",
  },
  23: {
    name: "espaisNaturalsPeinVigent",
    key: "espais_naturals_pein_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/espais_naturals_pein_vigent.fgb",
  },
  24: {
    name: "espaisNaturalsPeinVigentText",
    key: "espais_naturals_pein_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/espais_naturals_pein_vigent_text.fgb",
  },
  25: {
    name: "incendisForestalsVigent",
    key: "incendis_forestals_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/incendis_forestals_vigent.fgb",
  },
  26: {
    name: "incendisForestalsVigentText",
    key: "incendis_forestals_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/incendis_forestals_vigent_text.fgb",
  },
  27: {
    name: "municipisVigent",
    key: "municipis_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/municipis_vigent.fgb",
  },
  28: {
    name: "municipisVigentText",
    key: "municipis_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/municipis_vigent_text.fgb",
  },
  29: {
    name: "partitsJudicialsVigent",
    key: "partits_judicials_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/partits_judicials_vigent.fgb",
  },
  30: {
    name: "partitsJudicialsVigentText",
    key: "partits_judicials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/partits_judicials_vigent_text.fgb",
  },
  31: {
    name: "plaTerritorialVigent",
    key: "pla_territorial_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/pla_territorial_vigent.fgb",
  },
  32: {
    name: "plaTerritorialVigentText",
    key: "pla_territorial_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/pla_territorial_vigent_text.fgb",
  },
  33: {
    name: "provinciesVigent",
    key: "provincies_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/provincies_vigent.fgb",
  },
  34: {
    name: "provinciesVigentText",
    key: "provincies_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/provincies_vigent_text.fgb",
  },
  35: {
    name: "provinciesVigents",
    key: "provincies_vigents",
    url: "https://tilemaps.icgc.cat/vector/fgb/provincies_vigents.fgb",
  },
  36: {
    name: "provinciesVigentsText",
    key: "provincies_vigents_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/provincies_vigents_text.fgb",
  },
  37: {
    name: "regionsPolicialsVigent",
    key: "regions_policials_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_policials_vigent.fgb",
  },
  38: {
    name: "regionsPolicialsVigentText",
    key: "regions_policials_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_policials_vigent_text.fgb",
  },
  39: {
    name: "regionsSanitariesVigent",
    key: "regions_sanitaries_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_sanitaries_vigent.fgb",
  },
  40: {
    name: "regionsSanitariesVigentText",
    key: "regions_sanitaries_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/regions_sanitaries_vigent_text.fgb",
  },
  41: {
    name: "seccionsCensalsVigent",
    key: "seccions_censals_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/seccions_censals_vigent.fgb",
  },
  42: {
    name: "seccionsCensalsVigentText",
    key: "seccions_censals_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/seccions_censals_vigent_text.fgb",
  },
  43: {
    name: "sectorsSanitarisVigent",
    key: "sectors_sanitaris_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/sectors_sanitaris_vigent.fgb",
  },
  44: {
    name: "vegueriesVigent",
    key: "vegueries_vigent",
    url: "https://tilemaps.icgc.cat/vector/fgb/vegueries_vigent.fgb",
  },
  45: {
    name: "vegueriesVigentText",
    key: "vegueries_vigent_text",
    url: "https://tilemaps.icgc.cat/vector/fgb/vegueries_vigent_text.fgb",
  },
},
};

export default defaultOptions;
