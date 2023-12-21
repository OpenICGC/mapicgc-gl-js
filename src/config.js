const urlImages = "https://visors.icgc.cat/contextmaps/imatges_estil/";
const urlStyles = "https://geoserveis.icgc.cat/contextmaps/";
const defaultOptions = {
  mapOptions: {
    container: "map",
    center: [1.537786, 41.837539],
    zoom: 7.5,
    bearing: 0,
    pitch: 0,
    hash: false,
    style:
      "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard_general.json",
    maxZoom: 18,
    maxPitch: 85,
  },
  baseStyles: [
    { name: "topografic", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard_general.json", },
    { name: "ortofoto", url: "https://geoserveis.icgc.cat/contextmaps/icgc_orto_estandard.json" },
    { name: "limits", url: "https://geoserveis.icgc.cat/contextmaps/icgc_delimitacio_limits_administratius.json" },
    { name: "fosc", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json" },

    { name: "ombra", url: "https://geoserveis.icgc.cat/contextmaps/icgc_ombra.json" },
    { name: "hipsometria", url: "https://geoserveis.icgc.cat/contextmaps/icgc_ombra_hipsometria.json" },
    { name: "protegits", url: "https://geoserveis.icgc.cat/contextmaps/icgc_espais_protegits_hidrografia.json" },
    { name: "geologia", url: "https://geoserveis.icgc.cat/contextmaps/icgc_geologic_informacio.json" },



  ],
  urlTerrainICGC:[
    {name: "5m", url: "https://geoserveis.icgc.cat/servei/catalunya/contextmaps-terreny-5m-rgb/wmts/{z}/{x}/{y}.png"},
    {name: "2m", url: "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny_icgc_2m_rgb/{z}/{x}/{y}.png"}
  ],
  ortoLayersICGC: [
    { key: "ortoICGC2003", text: "2000-2003", value: 0 },
    { key: "ortoICGC2005", text: "2004-2005", value: 1 },
    { key: "ortoICGC2007", text: "2006-2007", value: 2 },
    { key: "ortoICGC2008", text: "2008", value: 3 },
    { key: "ortoICGC2009", text: "2009", value: 4 },
    { key: "ortoICGC2010", text: "2010", value: 5 },
    { key: "ortoICGC2011", text: "2011", value: 6 },
    { key: "ortoICGC2012", text: "2012", value: 7 },
    { key: "ortoICGC2013", text: "2013", value: 8 },
    { key: "ortoICGC2014", text: "2014", value: 9 },
    { key: "ortoICGC2015", text: "2015", value: 10 },
    { key: "ortoICGC2016", text: "2016", value: 11 },
    { key: "ortoICGC2017", text: "2017", value: 12 },
    { key: "ortoICGC2018", text: "2018", value: 13 },
    { key: "ortoICGC2019", text: "2019", value: 14 },
    { key: "ortoICGC2020", text: "2020", value: 15 },
    { key: "ortoICGC2021", text: "2021", value: 16 },
    { key: "ortoICGC2022", text: "2022", value: 17 },

  ],
  vectorLayersICGC: [
    {
      name: "agrupacionsCensalsVigent",
      key: "agrupacions-censals-vigent",
      url: "https://betaserver2.icgc.cat/fgb/agrupacions-censals-vigent.fgb"
    },
    {
      name: "areesBasiquesSalutVigent",
      key: "arees-basiques-salut-vigent",
      url: "https://betaserver2.icgc.cat/fgb/arees-basiques-salut-vigent.fgb"
    },
    {
      name: "areesHidrogeologiquesAquifersVigent",
      key: "arees-hidrogeologiques-aquifers-vigent",
      url: "https://betaserver2.icgc.cat/fgb/arees-hidrogeologiques-aquifers-vigent.fgb"
    },
    {
      name: "cobertesSolVigent",
      key: "cobertes-sol-vigent",
      url: "https://betaserver2.icgc.cat/fgb/cobertes-sol-vigent.fgb"
    },
    {
      name: "comarquesVigent",
      key: "comarques-vigent",
      url: "https://betaserver2.icgc.cat/fgb/comarques-vigent.fgb"
    },
    {
      name: "municipisVigent",
      key: "municipis-vigent",
      url: "https://betaserver2.icgc.cat/fgb/municipis-vigent.fgb"
    },
    {
      name: "provinciesVigent",
      key: "provincies-vigent",
      url: "https://betaserver2.icgc.cat/fgb/provincies-vigent.fgb"
    },
    {
      name: "quadriculaUTM1kmSocVigent",
      key: "quadricula-utm-1km-soc-vigent",
      url: "https://betaserver2.icgc.cat/fgb/quadricula-utm-1km-soc-vigent.fgb"
    },
    {
      name: "regionsSanitariesVigent",
      key: "regions-sanitaries-vigent",
      url: "https://betaserver2.icgc.cat/fgb/regions-sanitaries-vigent.fgb"
    },
    {
      name: "seccionsCensalsVigent",
      key: "seccions-censals-vigent",
      url: "https://betaserver2.icgc.cat/fgb/seccions-censals-vigent.fgb"
    },
    {
      name: "tall5mEtrs89Vigent",
      key: "tall-5m-etrs89-vigent",
      url: "https://betaserver2.icgc.cat/fgb/tall-5m-etrs89-vigent.fgb"
    },
    {
      name: "unitatsGeologiques50mVigent",
      key: "unitats-geologiques-50m-vigent",
      url: "https://betaserver2.icgc.cat/fgb/unitats-geologiques-50m-vigent.fgb"
    },
    {
      name: "vegueriesVigent",
      key: "vegueries-vigent",
      url: "https://betaserver2.icgc.cat/fgb/vegueries-vigent.fgb"
    }


  ]


};

export default defaultOptions;
