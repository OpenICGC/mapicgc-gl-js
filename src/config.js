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
  baseStyles:[
    {name:"topografic", url:"https://geoserveis.icgc.cat/contextmaps/icgc_mapa_estandard_general.json", },
    {name:"ortofoto", url:"https://geoserveis.icgc.cat/contextmaps/icgc_orto_estandard.json"},
    {name:"limits", url:"https://geoserveis.icgc.cat/contextmaps/icgc_delimitacio_limits_administratius.json"},
    {name:"fosc", url:"https://geoserveis.icgc.cat/contextmaps/icgc_mapa_base_fosc.json"},

    {name:"ombra", url:"https://geoserveis.icgc.cat/contextmaps/icgc_ombra.json"},
    {name:"hipsometria", url:"https://geoserveis.icgc.cat/contextmaps/icgc_ombra_hipsometria.json"},
    {name:"protegits", url:"https://geoserveis.icgc.cat/contextmaps/icgc_espais_protegits_hidrografia.json"},
    {name:"geologia", url:"https://geoserveis.icgc.cat/contextmaps/icgc_geologic_informacio.json"},



  ],
  

};

export default defaultOptions;
