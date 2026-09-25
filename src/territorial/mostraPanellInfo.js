import proj4 from "proj4";

const PANEL_ID = "mapicgc-api-territorial-panel";
const PANEL_CONTENT_ID = "mapicgc-api-territorial-panel-content";
const CADASTRE_URL =
  "https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaBienes.aspx";

proj4.defs(
  "EPSG:25831",
  "+proj=utm +zone=31 +ellps=GRS80 +units=m +no_defs +type=crs"
);

function formatNumber(value, decimals = 2) {
  return Number(value).toFixed(decimals);
}

function buildValueLine(label, valueText, copyText) {
  const row = document.createElement("div");
  row.className = "mapicgc-api-territorial-panel-row";

  const labelNode = document.createElement("div");
  labelNode.className = "mapicgc-api-territorial-panel-label";
  labelNode.textContent = label;

  const valueNode = document.createElement("div");
  valueNode.className = "mapicgc-api-territorial-panel-value";
  valueNode.textContent = valueText;

  const actionsNode = document.createElement("div");
  actionsNode.className = "mapicgc-api-territorial-panel-actions";

  if (copyText) {
    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "mapicgc-api-territorial-panel-copy";
    copyButton.textContent = "Copiar";
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copyText);
        copyButton.textContent = "Copiat";
        setTimeout(() => {
          copyButton.textContent = "Copiar";
        }, 1200);
      } catch (error) {
        copyButton.textContent = "Error";
        setTimeout(() => {
          copyButton.textContent = "Copiar";
        }, 1200);
      }
    });
    actionsNode.appendChild(copyButton);
  }

  row.appendChild(labelNode);
  row.appendChild(valueNode);
  row.appendChild(actionsNode);

  return row;
}

function formatCollectionTitle(collectionId) {
  const titles = {
    comarques: "Comarca",
    municipis: "Municipi",
    provincies: "Província",
    "arees-basiques-salut": "Àrea bàsica de salut",
    "arees-basiques-policials": "Àrea bàsica policial",
    "arees-basiques-serveis-socials": "Àrea bàsica de serveis socials",
    "parcelles-cadastre": "Parcel·la cadastral",
  };

  if (titles[collectionId]) {
    return titles[collectionId];
  }

  return collectionId
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function formatFieldLabel(fieldName) {
  return String(fieldName)
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function ensurePanel(map) {
  const mapContainer =
    map?.getContainer?.() || document.getElementById("map") || document.body;

  let panel = document.getElementById(PANEL_ID);
  if (!panel) {
    panel = document.createElement("aside");
    panel.id = PANEL_ID;
    panel.className = "mapicgc-api-territorial-panel is-hidden";

    const header = document.createElement("header");
    header.className = "mapicgc-api-territorial-panel-header";

    const titleWrap = document.createElement("div");
    titleWrap.className = "mapicgc-api-territorial-panel-title-wrap";

    const icon = document.createElement("span");
    icon.className = "mapicgc-api-territorial-panel-title-icon";
    icon.textContent = "ⓘ";

    const title = document.createElement("span");
    title.className = "mapicgc-api-territorial-panel-title";
    title.textContent = "Informació del punt";

    titleWrap.appendChild(icon);
    titleWrap.appendChild(title);

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "mapicgc-api-territorial-panel-close";
    closeButton.textContent = "✕";
    closeButton.setAttribute("aria-label", "Tancar panell");
    closeButton.addEventListener("click", () => {
      panel.classList.add("is-hidden");
    });

    header.appendChild(titleWrap);
    header.appendChild(closeButton);

    const content = document.createElement("div");
    content.id = PANEL_CONTENT_ID;
    content.className = "mapicgc-api-territorial-panel-content";

    panel.appendChild(header);
    panel.appendChild(content);
    mapContainer.appendChild(panel);
  }

  return panel;
}

export default function mostraPanellInfo(resultat, lngLat) {
  const map = this?.map || this;
  const panel = ensurePanel(map);
  const content = document.getElementById(PANEL_CONTENT_ID);

  if (!content) {
    return null;
  }

  content.replaceChildren();

  const coordinates = lngLat || {
    lng: resultat?.lng,
    lat: resultat?.lat,
  };

  const lng = Number(coordinates?.lng);
  const lat = Number(coordinates?.lat);
  const [utmX, utmY] = proj4("EPSG:4326", "EPSG:25831", [lng, lat]);
  const utmText = `ETRS89 UTM 31N X ${formatNumber(utmX, 2)} Y ${formatNumber(utmY, 2)}`;
  const wgs84Text = `WGS84 Lon ${formatNumber(lng, 6)} Lat ${formatNumber(lat, 6)}`;
  content.appendChild(buildValueLine("Coordenades UTM", utmText, utmText));
  content.appendChild(buildValueLine("Coordenades WGS84", wgs84Text, wgs84Text));

  const resultats = resultat?.resultats || {};

  Object.entries(resultats).forEach(([collectionId, value]) => {
    if (!value || (typeof value === "object" && Object.keys(value).length === 0)) {
      return;
    }

    const collectionTitle = formatCollectionTitle(collectionId);

    if (typeof value !== "object") {
      const valueText = String(value);
      content.appendChild(buildValueLine(collectionTitle, valueText, valueText));
      return;
    }

    Object.entries(value).forEach(([propertyKey, propertyValue]) => {
      if (propertyValue === undefined || propertyValue === null || propertyValue === "") {
        return;
      }

      const label = `${collectionTitle} · ${formatFieldLabel(propertyKey)}`;
      const valueText =
        typeof propertyValue === "object"
          ? JSON.stringify(propertyValue)
          : String(propertyValue);
      content.appendChild(buildValueLine(label, valueText, valueText));
    });
  });

  const cadastre = resultats["parcelles-cadastre"];
  const parcelReference = cadastre?.refcadp || cadastre?.REFCADP;

  if (parcelReference) {
    const cadastreRow = document.createElement("div");
    cadastreRow.className = "mapicgc-api-territorial-panel-row mapicgc-api-territorial-panel-row-parcela";

    const parcelLabel = document.createElement("div");
    parcelLabel.className = "mapicgc-api-territorial-panel-label";
    parcelLabel.textContent = "Cadastre";

    const parcelValue = document.createElement("div");
    parcelValue.className = "mapicgc-api-territorial-panel-value";
    parcelValue.textContent = parcelReference;

    const parcelActions = document.createElement("div");
    parcelActions.className = "mapicgc-api-territorial-panel-actions";

    const copyParcelButton = document.createElement("button");
    copyParcelButton.type = "button";
    copyParcelButton.className = "mapicgc-api-territorial-panel-copy";
    copyParcelButton.textContent = "Copiar";
    copyParcelButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(parcelReference);
        copyParcelButton.textContent = "Copiat";
        setTimeout(() => {
          copyParcelButton.textContent = "Copiar";
        }, 1200);
      } catch (error) {
        copyParcelButton.textContent = "Error";
        setTimeout(() => {
          copyParcelButton.textContent = "Copiar";
        }, 1200);
      }
    });

    const cadastreLink = document.createElement("a");
    cadastreLink.className = "mapicgc-api-territorial-panel-link";
    cadastreLink.href = `${CADASTRE_URL}?RefC=${encodeURIComponent(parcelReference)}`;
    cadastreLink.target = "_blank";
    cadastreLink.rel = "noreferrer";
    cadastreLink.textContent = "Obrir";
    cadastreLink.title = "Obrir la Seu Electrònica del Cadastre";

    parcelActions.appendChild(copyParcelButton);
    parcelActions.appendChild(cadastreLink);

    cadastreRow.appendChild(parcelLabel);
    cadastreRow.appendChild(parcelValue);
    cadastreRow.appendChild(parcelActions);
    content.appendChild(cadastreRow);
  }

  panel.classList.remove("is-hidden");

  return panel;
}