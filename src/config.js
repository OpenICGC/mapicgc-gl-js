
const urlImages = "https://visors.icgc.cat/contextmaps/imatges_estil/";
const urlStyles = "https://geoserveis.icgc.cat/contextmaps/"; 
const defaultOptions = {
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
baseStyles: {
  0: {
    key: "TOPO",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard_general.json",
  },
  1: {
    key: "ORTO",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json",
  },
  2: {
    key: "ADMIN",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_delimitacio_limits_administratius.json",
  },
  3: {
    key: "DARK",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json",
  },
  4: {
    key: "LIGHT",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_gris.json",
  },
  5: {
    key: "GEOLOGY",
    url: "https://geoserveis.icgc.cat/contextmaps/icgc_geologic_informacio.json",
  },
},
urlTerrainICGC: {
  0: {
    name: "ICGC5M",
    url: "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny-5m-30m-rgb-extent/{z}/{x}/{y}.png",
  },
  1: {
    name: "WORLD3M",
    url: "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny_icgc_2m_rgb/{z}/{x}/{y}.png",
  },
},
ortoLayersICGC: {
  0: {
    name: "ortofoto_color_provisional",
    key: "ortofoto_color_provisional",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_provisional",
  },
  1: {
    name: "ortofoto_color_2022",
    key: "ortofoto_color_2022",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2022",
  },
  2: {
    name: "ortofoto_color_2021",
    key: "ortofoto_color_2021",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2021",
  },
  3: {
    name: "ortofoto_color_2020",
    key: "ortofoto_color_2020",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2020",
  },
  4: {
    name: "ortofoto_color_2019",
    key: "ortofoto_color_2019",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2019",
  },
  5: {
    name: "ortofoto_color_2018",
    key: "ortofoto_color_2018",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2018",
  },
  6: {
    name: "ortofoto_color_2017",
    key: "ortofoto_color_2017",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2017",
  },
  7: {
    name: "ortofoto_color_2016",
    key: "ortofoto_color_2016",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2016",
  },
  8: {
    name: "ortofoto_color_2015",
    key: "ortofoto_color_2015",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2015",
  },
  9: {
    name: "ortofoto_color_2014",
    key: "ortofoto_color_2014",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2014",
  },
  10: {
    name: "ortofoto_color_2013",
    key: "ortofoto_color_2013",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2013",
  },
  11: {
    name: "ortofoto_color_2012",
    key: "ortofoto_color_2012",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2012",
  },
  12: {
    name: "ortofoto_color_2011",
    key: "ortofoto_color_2011",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2011",
  },
  13: {
    name: "ortofoto_color_2010",
    key: "ortofoto_color_2010",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2010",
  },
  14: {
    name: "ortofoto_color_2009",
    key: "ortofoto_color_2009",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2009",
  },
  15: {
    name: "ortofoto_color_2008",
    key: "ortofoto_color_2008",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2008",
  },
  16: {
    name: "ortofoto_color_2006-2007",
    key: "ortofoto_color_2006-2007",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2006-2007",
  },
  17: {
    name: "ortofoto_color_2004-2005",
    key: "ortofoto_color_2004-2005",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2004-2005",
  },
  18: {
    name: "ortofoto_color_2000-2003",
    key: "ortofoto_color_2000-2003",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_2000-2003",
  },
  19: {
    name: "ortofoto_blanc_i_negre_1998",
    key: "ortofoto_blanc_i_negre_1998",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1998",
  },
  20: {
    name: "ortofoto_blanc_i_negre_1994-1997",
    key: "ortofoto_blanc_i_negre_1994-1997",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1994-1997",
  },
  21: {
    name: "ortofoto_color_1993",
    key: "ortofoto_color_1993",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_1993",
  },
  22: {
    name: "ortofoto_blanc_i_negre_1983-1992",
    key: "ortofoto_blanc_i_negre_1983-1992",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1983-1992",
  },
  23: {
    name: "ortofoto_blanc_i_negre_1970-1977",
    key: "ortofoto_blanc_i_negre_1970-1977",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1970-1977",
  },
  24: {
    name: "ortofoto_blanc_i_negre_1956",
    key: "ortofoto_blanc_i_negre_1956",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1956",
  },
  25: {
    name: "ortofoto_blanc_i_negre_1945",
    key: "ortofoto_blanc_i_negre_1945",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_blanc_i_negre_1945",
  },
  26: {
    name: "ortofoto_color_serie_anual",
    key: "ortofoto_color_serie_anual",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_color_serie_anual",
  },
  27: {
    name: "ortofoto_infraroig_provisional",
    key: "ortofoto_infraroig_provisional",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_provisional",
  },
  28: {
    name: "ortofoto_infraroig_2022",
    key: "ortofoto_infraroig_2022",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2022",
  },
  29: {
    name: "ortofoto_infraroig_2021",
    key: "ortofoto_infraroig_2021",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2021",
  },
  30: {
    name: "ortofoto_infraroig_2020",
    key: "ortofoto_infraroig_2020",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2020",
  },
  31: {
    name: "ortofoto_infraroig_2019",
    key: "ortofoto_infraroig_2019",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2019",
  },
  32: {
    name: "ortofoto_infraroig_2018",
    key: "ortofoto_infraroig_2018",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2018",
  },
  33: {
    name: "ortofoto_infraroig_2017",
    key: "ortofoto_infraroig_2017",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2017",
  },
  34: {
    name: "ortofoto_infraroig_2016",
    key: "ortofoto_infraroig_2016",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2016",
  },
  35: {
    name: "ortofoto_infraroig_2015",
    key: "ortofoto_infraroig_2015",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2015",
  },
  36: {
    name: "ortofoto_infraroig_2014",
    key: "ortofoto_infraroig_2014",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2014",
  },
  37: {
    name: "ortofoto_infraroig_2013",
    key: "ortofoto_infraroig_2013",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2013",
  },
  38: {
    name: "ortofoto_infraroig_2012",
    key: "ortofoto_infraroig_2012",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2012",
  },
  39: {
    name: "ortofoto_infraroig_2011",
    key: "ortofoto_infraroig_2011",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2011",
  },
  40: {
    name: "ortofoto_infraroig_2010",
    key: "ortofoto_infraroig_2010",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2010",
  },
  41: {
    name: "ortofoto_infraroig_2009",
    key: "ortofoto_infraroig_2009",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2009",
  },
  42: {
    name: "ortofoto_infraroig_2008",
    key: "ortofoto_infraroig_2008",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2008",
  },
  43: {
    name: "ortofoto_infraroig_2006-2007",
    key: "ortofoto_infraroig_2006-2007",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_2006-2007",
  },
  44: {
    name: "ortofoto_infraroig_1996-1997",
    key: "ortofoto_infraroig_1996-1997",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_1996-1997",
  },
  45: {
    name: "ortofoto_infraroig_serie_anual",
    key: "ortofoto_infraroig_serie_anual",
    url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&STYLES=&srs=EPSG:3857&transparent=true&width=256&height=256&layers=ortofoto_infraroig_serie_anual",
  },
},
vectorLayersICGC: {
  0: {
    name: "agrupacions_censals_2015",
    key: "agrupacions_censals_2015",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_2015.fgb",
  },
  1: {
    name: "agrupacions_censals_2016",
    key: "agrupacions_censals_2016",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_2016.fgb",
  },
  2: {
    name: "agrupacions_censals_2017",
    key: "agrupacions_censals_2017",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_2017.fgb",
  },
  3: {
    name: "agrupacions_censals_2018",
    key: "agrupacions_censals_2018",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_2018.fgb",
  },
  4: {
    name: "agrupacions_censals_2019",
    key: "agrupacions_censals_2019",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_2019.fgb",
  },
  5: {
    name: "agrupacions_censals_2020",
    key: "agrupacions_censals_2020",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_2020.fgb",
  },
  6: {
    name: "agrupacions_censals_2021",
    key: "agrupacions_censals_2021",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_2021.fgb",
  },
  7: {
    name: "agrupacions_censals_vigent",
    key: "agrupacions_censals_vigent",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_vigent.fgb",
  },
  8: {
    name: "agrupacions_censals_vigent_centroid",
    key: "agrupacions_censals_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_vigent_centroid.fgb",
  },
  9: {
    name: "arees_basiques_policials_2019",
    key: "arees_basiques_policials_2019",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_policials_2019.fgb",
  },
  10: {
    name: "arees_basiques_policials_2020",
    key: "arees_basiques_policials_2020",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_policials_2020.fgb",
  },
  11: {
    name: "arees_basiques_policials_2022",
    key: "arees_basiques_policials_2022",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_policials_2022.fgb",
  },
  12: {
    name: "arees_basiques_policials_vigent",
    key: "arees_basiques_policials_vigent",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_policials_vigent.fgb",
  },
  13: {
    name: "arees_basiques_policials_vigent_centroid",
    key: "arees_basiques_policials_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_policials_vigent_centroid.fgb",
  },
  14: {
    name: "arees_basiques_salut_vigent",
    key: "arees_basiques_salut_vigent",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_salut_vigent.fgb",
  },
  15: {
    name: "arees_basiques_serveis_socials_vigent",
    key: "arees_basiques_serveis_socials_vigent",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_serveis_socials_vigent.fgb",
  },
  16: {
    name: "arees_basiques_serveis_socials_vigent_centroid",
    key: "arees_basiques_serveis_socials_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/arees_basiques_serveis_socials_vigent_centroid.fgb",
  },
  17: {
    name: "arees_gestio_assistencial_vigent",
    key: "arees_gestio_assistencial_vigent",
    url: "https://betaserver2.icgc.cat/fgb/arees_gestio_assistencial_vigent.fgb",
  },
  18: {
    name: "arees_hidrogeologiques_aquifers_vigent",
    key: "arees_hidrogeologiques_aquifers_vigent",
    url: "https://betaserver2.icgc.cat/fgb/arees_hidrogeologiques_aquifers_vigent.fgb",
  },
  19: {
    name: "catalunya_vigent",
    key: "catalunya_vigent",
    url: "https://betaserver2.icgc.cat/fgb/catalunya_vigent.fgb",
  },
  20: {
    name: "catalunya_vigent_centroid",
    key: "catalunya_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/catalunya_vigent_centroid.fgb",
  },
  21: {
    name: "comarques_2022",
    key: "comarques_2022",
    url: "https://betaserver2.icgc.cat/fgb/comarques_2022.fgb",
  },
  22: {
    name: "comarques_vigent",
    key: "comarques_vigent",
    url: "https://betaserver2.icgc.cat/fgb/comarques_vigent.fgb",
  },
  23: {
    name: "comarques_vigent_centroid",
    key: "comarques_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/comarques_vigent_centroid.fgb",
  },
  24: {
    name: "districtes_censals_2002",
    key: "districtes_censals_2002",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2002.fgb",
  },
  25: {
    name: "districtes_censals_2003",
    key: "districtes_censals_2003",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2003.fgb",
  },
  26: {
    name: "districtes_censals_2004",
    key: "districtes_censals_2004",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2004.fgb",
  },
  27: {
    name: "districtes_censals_2005",
    key: "districtes_censals_2005",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2005.fgb",
  },
  28: {
    name: "districtes_censals_2006",
    key: "districtes_censals_2006",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2006.fgb",
  },
  29: {
    name: "districtes_censals_2007",
    key: "districtes_censals_2007",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2007.fgb",
  },
  30: {
    name: "districtes_censals_2008",
    key: "districtes_censals_2008",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2008.fgb",
  },
  31: {
    name: "districtes_censals_2009",
    key: "districtes_censals_2009",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2009.fgb",
  },
  32: {
    name: "districtes_censals_2010",
    key: "districtes_censals_2010",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2010.fgb",
  },
  33: {
    name: "districtes_censals_2011",
    key: "districtes_censals_2011",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2011.fgb",
  },
  34: {
    name: "districtes_censals_2012",
    key: "districtes_censals_2012",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2012.fgb",
  },
  35: {
    name: "districtes_censals_2013",
    key: "districtes_censals_2013",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2013.fgb",
  },
  36: {
    name: "districtes_censals_2014",
    key: "districtes_censals_2014",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2014.fgb",
  },
  37: {
    name: "districtes_censals_2015",
    key: "districtes_censals_2015",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2015.fgb",
  },
  38: {
    name: "districtes_censals_2016",
    key: "districtes_censals_2016",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2016.fgb",
  },
  39: {
    name: "districtes_censals_2017",
    key: "districtes_censals_2017",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2017.fgb",
  },
  40: {
    name: "districtes_censals_2018",
    key: "districtes_censals_2018",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2018.fgb",
  },
  41: {
    name: "districtes_censals_2019",
    key: "districtes_censals_2019",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2019.fgb",
  },
  42: {
    name: "districtes_censals_2020",
    key: "districtes_censals_2020",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2020.fgb",
  },
  43: {
    name: "districtes_censals_2021",
    key: "districtes_censals_2021",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2021.fgb",
  },
  44: {
    name: "districtes_censals_2022",
    key: "districtes_censals_2022",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_2022.fgb",
  },
  45: {
    name: "districtes_censals_vigent",
    key: "districtes_censals_vigent",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_vigent.fgb",
  },
  46: {
    name: "districtes_censals_vigent_centroid",
    key: "districtes_censals_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/districtes_censals_vigent_centroid.fgb",
  },
  47: {
    name: "incendis_forestals_vigent",
    key: "incendis_forestals_vigent",
    url: "https://betaserver2.icgc.cat/fgb/incendis_forestals_vigent.fgb",
  },
  48: {
    name: "incendis_forestals_vigent_centroid",
    key: "incendis_forestals_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/incendis_forestals_vigent_centroid.fgb",
  },
  49: {
    name: "municipis_2022",
    key: "municipis_2022",
    url: "https://betaserver2.icgc.cat/fgb/municipis_2022.fgb",
  },
  50: {
    name: "municipis_2022_centroid",
    key: "municipis_2022_centroid",
    url: "https://betaserver2.icgc.cat/fgb/municipis_2022_centroid.fgb",
  },
  51: {
    name: "municipis_vigent",
    key: "municipis_vigent",
    url: "https://betaserver2.icgc.cat/fgb/municipis_vigent.fgb",
  },
  52: {
    name: "municipis_vigent_centroid",
    key: "municipis_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/municipis_vigent_centroid.fgb",
  },
  53: {
    name: "partits_judicials_vigent",
    key: "partits_judicials_vigent",
    url: "https://betaserver2.icgc.cat/fgb/partits_judicials_vigent.fgb",
  },
  54: {
    name: "partits_judicials_vigent_centroid",
    key: "partits_judicials_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/partits_judicials_vigent_centroid.fgb",
  },
  55: {
    name: "pla_territorial_2015",
    key: "pla_territorial_2015",
    url: "https://betaserver2.icgc.cat/fgb/pla_territorial_2015.fgb",
  },
  56: {
    name: "pla_territorial_vigent",
    key: "pla_territorial_vigent",
    url: "https://betaserver2.icgc.cat/fgb/pla_territorial_vigent.fgb",
  },
  57: {
    name: "pla_territorial_vigent_centroid",
    key: "pla_territorial_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/pla_territorial_vigent_centroid.fgb",
  },
  58: {
    name: "provincies_vigent",
    key: "provincies_vigent",
    url: "https://betaserver2.icgc.cat/fgb/provincies_vigent.fgb",
  },
  59: {
    name: "provincies_vigent_centroid",
    key: "provincies_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/provincies_vigent_centroid.fgb",
  },
  60: {
    name: "regions_policials_vigent",
    key: "regions_policials_vigent",
    url: "https://betaserver2.icgc.cat/fgb/regions_policials_vigent.fgb",
  },
  61: {
    name: "regions_policials_vigent_centroid",
    key: "regions_policials_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/regions_policials_vigent_centroid.fgb",
  },
  62: {
    name: "regions_sanitaries_vigent",
    key: "regions_sanitaries_vigent",
    url: "https://betaserver2.icgc.cat/fgb/regions_sanitaries_vigent.fgb",
  },
  63: {
    name: "regions_sanitaries_vigent_centroid",
    key: "regions_sanitaries_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/regions_sanitaries_vigent_centroid.fgb",
  },
  64: {
    name: "seccions_censals_2002",
    key: "seccions_censals_2002",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2002.fgb",
  },
  65: {
    name: "seccions_censals_2003",
    key: "seccions_censals_2003",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2003.fgb",
  },
  66: {
    name: "seccions_censals_2004",
    key: "seccions_censals_2004",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2004.fgb",
  },
  67: {
    name: "seccions_censals_2005",
    key: "seccions_censals_2005",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2005.fgb",
  },
  68: {
    name: "seccions_censals_2006",
    key: "seccions_censals_2006",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2006.fgb",
  },
  69: {
    name: "seccions_censals_2007",
    key: "seccions_censals_2007",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2007.fgb",
  },
  70: {
    name: "seccions_censals_2008",
    key: "seccions_censals_2008",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2008.fgb",
  },
  71: {
    name: "seccions_censals_2009",
    key: "seccions_censals_2009",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2009.fgb",
  },
  72: {
    name: "seccions_censals_2010",
    key: "seccions_censals_2010",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2010.fgb",
  },
  73: {
    name: "seccions_censals_2011",
    key: "seccions_censals_2011",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2011.fgb",
  },
  74: {
    name: "seccions_censals_2012",
    key: "seccions_censals_2012",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2012.fgb",
  },
  75: {
    name: "seccions_censals_2013",
    key: "seccions_censals_2013",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2013.fgb",
  },
  76: {
    name: "seccions_censals_2014",
    key: "seccions_censals_2014",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2014.fgb",
  },
  77: {
    name: "seccions_censals_2015",
    key: "seccions_censals_2015",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2015.fgb",
  },
  78: {
    name: "seccions_censals_2016",
    key: "seccions_censals_2016",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2016.fgb",
  },
  79: {
    name: "seccions_censals_2017",
    key: "seccions_censals_2017",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2017.fgb",
  },
  80: {
    name: "seccions_censals_2018",
    key: "seccions_censals_2018",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2018.fgb",
  },
  81: {
    name: "seccions_censals_2019",
    key: "seccions_censals_2019",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2019.fgb",
  },
  82: {
    name: "seccions_censals_2020",
    key: "seccions_censals_2020",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2020.fgb",
  },
  83: {
    name: "seccions_censals_2021",
    key: "seccions_censals_2021",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2021.fgb",
  },
  84: {
    name: "seccions_censals_2022",
    key: "seccions_censals_2022",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_2022.fgb",
  },
  85: {
    name: "seccions_censals_vigent",
    key: "seccions_censals_vigent",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_vigent.fgb",
  },
  86: {
    name: "seccions_censals_vigent_centroid",
    key: "seccions_censals_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/seccions_censals_vigent_centroid.fgb",
  },
  87: {
    name: "sectors_sanitaris_vigent",
    key: "sectors_sanitaris_vigent",
    url: "https://betaserver2.icgc.cat/fgb/sectors_sanitaris_vigent.fgb",
  },
  88: {
    name: "vegueries_vigent",
    key: "vegueries_vigent",
    url: "https://betaserver2.icgc.cat/fgb/vegueries_vigent.fgb",
  },
  89: {
    name: "vegueries_vigent_centroid",
    key: "vegueries_vigent_centroid",
    url: "https://betaserver2.icgc.cat/fgb/vegueries_vigent_centroid.fgb",
  },
},
vectorLayers: {
  0: {
    key: "altimetria",
    layer: "",
    url: "https://betaserver.icgc.cat/tileserver3/tileserver.php/alti_bt5m/{z}/{x}/{y}.pbf",
  },
  1: {
    key: "toponimia",
    layer: "",
    url: "https://betaserver.icgc.cat/tileserver3/tileserver.php/redtopo/{z}/{x}/{y}.pbf",
  },
  2: {
    key: "osm",
    layer: "",
    url: "https://tilemaps.icgc.cat/mapfactory/wmts/osm_suau/CAT3857_15/{z}/{x}/{y}.png",
  },
},
wmsLayers: {
  0: {
    key: "relleu",
    layer: "",
    url: "https://tilemaps.icgc.cat/mapfactory/wmts/relleu/CAT3857/{z}/{x}/{y}.png",
  },
  1: {
    key: "geologia",
    layer: "",
    url: "https://tilemaps.icgc.cat/mapfactory/wmts/geologia/MON3857NW/{z}/{x}/{y}.png",
  },
  2: {
    key: "osm",
    layer: "",
    url: "https://tilemaps.icgc.cat/mapfactory/wmts/osm_suau/CAT3857_15/{z}/{x}/{y}.png",
  },
  3: {
    key: "cims",
    layer: "",
    url: "\"https://geoserveis.icgc.cat/icc_100cims/wms/service?REQUEST=GetMap&SERVICE=WMS&VERSION=1.1.1&LAYERS=0&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&SRS=EPSG:25831&BBOX=137118.923076923,4488408.75,650959.076923077,4749634.75&WIDTH=895&HEIGHT=455",
  },
  4: {
    key: "cobertesSol",
    layer: "",
    url: "http://geoserveis.icgc.cat/servei/catalunya/cobertes-sol/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&LAYERS=cobertes_2009&STYLES=&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:25831&BBOX=374110.828167253,4639230.79853085,452621.120632226,4703578.45000215&WIDTH=1020&HEIGHT=836",
  },
},
};

module.exports = defaultOptions;
