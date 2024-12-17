
const Styles = {
  TOPO: "https://geoserveis.icgc.cat/styles/icgc_mapa_base_topografic.json",
  ORTO: "https://geoserveis.icgc.cat/styles/icgc_orto_estandard.json",
  ORTO3D: "https://eines.icgc.cat/recursos//styles/icgc_orto_3d.json",
  ORTOHYBRID: "https://geoserveis.icgc.cat/styles/icgc_orto_hibrida.json",
  ADMIN: "https://geoserveis.icgc.cat/styles/icgc_limits_administratius_gris.json",
  DARK: "https://geoserveis.icgc.cat/styles/icgc_mapa_base_fosc.json",
  LIGHT: "https://geoserveis.icgc.cat/styles/icgc_mapa_base_gris.json",
  GEOLOGY: "https://geoserveis.icgc.cat/styles/icgc_geologic_informacio.json",
  RASTER: {
    TOPO: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/topografic/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_topo.jpg",
    },
    ADMIN: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/administratiu/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_administratiu.jpg",
    },
    LIGHT: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/topografic-gris/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_topo_gris.jpg",
    },
    STANDARD: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/estandard/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_estandard_0.jpg",
    },
    SIMPLIFIED: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/simplificat/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_simplificat.jpg",
    },
    ORTO: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/orto/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_orto.jpg",
    },
    ORTOGREY: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/orto-gris/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_orto_gris.jpg",
    },
    ORTOHYBRID: {
      url: "https://geoserveis.icgc.cat/servei/catalunya/mapa-base/wmts/orto-hibrida/MON3857NW/{z}/{x}/{y}.png",
      image: "https://icgc-web-pro.s3.eu-central-1.amazonaws.com/produccio/s3fs-public/2024-10/mapabase_orto_hibida.jpg",
    },
  },
};

export default Styles;
