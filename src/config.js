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
      "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_gris.json.json",
    maxZoom: 18,
    maxPitch: 85,
  },
  baseStyles: [
    { name: "Style.Topografic", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard_general.json", },
    { name: "Style.Ortofoto", url: "https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json" },
    { name: "Style.Limits", url: "https://geoserveis.icgc.cat/contextmaps/icgc_delimitacio_limits_administratius.json" },
    { name: "Style.Fosc", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json" },
    { name: "Style.Gris", url: "https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_gris.json" },
    { name: "Style.Geologia", url: "https://geoserveis.icgc.cat/contextmaps/icgc_geologic_informacio.json" },



  ],
  urlTerrainICGC:[
    {name: "5m", url: "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny-5m-30m-rgb-extent/{z}/{x}/{y}.png"},
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
      key: "agrupacions_censals_vigent",
      url: "https://betaserver2.icgc.cat/fgb/agrupacions_censals_vigent.fgb"
    },
    {
      name: "areesBasiquesSalutVigent",
      key: "arees_basiques_salut_vigent",
      url: "https://betaserver2.icgc.cat/fgb/arees_basiques_salut_vigent.fgb"
    },
    {
      name: "areesHidrogeologiquesAquifersVigent",
      key: "arees_hidrogeologiques_aquifers_vigent",
      url: "https://betaserver2.icgc.cat/fgb/arees_hidrogeologiques_aquifers_vigent.fgb"
    },
    {
      name: "cobertesSolVigent",
      key: "cobertes-sol-vigent",
      url: "https://betaserver2.icgc.cat/fgb/cobertes-sol-vigent.fgb"
    },
    {
      name: "comarquesVigent",
      key: "comarques_vigent",
      url: "https://betaserver2.icgc.cat/fgb/comarques_vigent.fgb"
    },
    {
      name: "municipisVigent",
      key: "municipis_vigent",
      url: "https://betaserver2.icgc.cat/fgb/municipis_vigent.fgb"
    },
    {
      name: "provinciesVigent",
      key: "provincies_vigent",
      url: "https://betaserver2.icgc.cat/fgb/provincies_vigent.fgb"
    },
    {
      name: "regionsSanitariesVigent",
      key: "regions_sanitaries_vigent",
      url: "https://betaserver2.icgc.cat/fgb/regions_sanitaries_vigent.fgb"
    },
    {
      name: "seccionsCensalsVigent",
      key: "seccions_censals_vigent",
      url: "https://betaserver2.icgc.cat/fgb/seccions_censals_vigent.fgb"
    },

    {
      name: "vegueriesVigent",
      key: "vegueries_vigent",
      url: "https://betaserver2.icgc.cat/fgb/vegueries_vigent.fgb"
    }


  ]


};

export default defaultOptions;
