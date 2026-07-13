const TERRITORIAL_BASE_URL = "https://api.icgc.cat/territorial";

const DEFAULT_COLLECTIONS = [
  "comarques",
  "municipis",
  "arees-basiques-salut",
  "arees-basiques-policials",
  "arees-basiques-serveis-socials",
  "parcelles-cadastre",
];

const COLLECTION_ALIASES = {
  "arees-basqieus-policials": "arees-basiques-policials",
  "arees-basiques-policial": "arees-basiques-policials",
};

function normalizeLookupKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function normalizeFieldList(fields) {
  if (!fields) {
    return null;
  }

  if (Array.isArray(fields)) {
    return fields.map((field) => String(field).trim()).filter(Boolean);
  }

  if (typeof fields === "string") {
    return fields
      .split(",")
      .map((field) => field.trim())
      .filter(Boolean);
  }

  return null;
}

function normalizeTerritorialOptions(collectionsOrOptions) {
  if (!collectionsOrOptions) {
    return {
      collections: DEFAULT_COLLECTIONS,
      fields: null,
    };
  }

  if (Array.isArray(collectionsOrOptions)) {
    return {
      collections: collectionsOrOptions,
      fields: null,
    };
  }

  if (typeof collectionsOrOptions === "object") {
    const collections = collectionsOrOptions.collections || DEFAULT_COLLECTIONS;
    const fields = collectionsOrOptions.fields || null;

    return {
      collections,
      fields,
    };
  }

  return {
    collections: DEFAULT_COLLECTIONS,
    fields: null,
  };
}

function normalizeCollections(collections) {
  if (!collections) {
    return DEFAULT_COLLECTIONS;
  }

  if (typeof collections === "string") {
    return [collections.trim()].filter(Boolean);
  }

  if (!Array.isArray(collections)) {
    return DEFAULT_COLLECTIONS;
  }

  return collections
    .map((collection) => {
      if (typeof collection === "string") {
        const normalized = collection.trim();
        return COLLECTION_ALIASES[normalized] || normalized;
      }

      if (collection && typeof collection === "object") {
        const normalized = String(collection.id || collection.name || "").trim();
        return COLLECTION_ALIASES[normalized] || normalized;
      }

      return "";
    })
    .filter(Boolean);
}

async function searchTerritorialCollection(collectionId, bbox) {
  const url = `${TERRITORIAL_BASE_URL}/collections/${collectionId}/items?bbox=${bbox.join(",")}&f=geojson`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/geo+json",
      },
    });

    if (!response.ok) {
      return null;
    }

    const geojson = await response.json();
    const feature = geojson?.features?.[0] || null;
    const features = Array.isArray(geojson?.features) ? geojson.features : [];

    return {
      properties: feature?.properties || null,
      firstFeature: feature,
      features,
      geojson,
    };
  } catch (error) {
    return {
      properties: null,
      firstFeature: null,
      features: [],
      geojson: null,
    };
  }
}

function filterTerritorialProperties(properties, fields, collectionId) {
  if (!properties || !fields) {
    return properties || null;
  }

  const fieldsForCollection = Array.isArray(fields)
    ? fields
    : normalizeFieldList(fields?.[collectionId]) || normalizeFieldList(fields?.default);

  if (!fieldsForCollection || fieldsForCollection.length === 0) {
    return properties;
  }

  const filtered = {};
  const normalizedPropertyKeys = new Map(
    Object.keys(properties).map((key) => [normalizeLookupKey(key), key])
  );

  for (const fieldName of fieldsForCollection) {
    const directMatch = Object.prototype.hasOwnProperty.call(properties, fieldName)
      ? fieldName
      : null;
    const normalizedMatch = normalizedPropertyKeys.get(normalizeLookupKey(fieldName));
    const propertyKey = directMatch || normalizedMatch;

    if (propertyKey) {
      const value = properties[propertyKey];
      if (value !== undefined && value !== null && value !== "") {
        filtered[propertyKey] = value;
      }
    }
  }

  if (Object.keys(filtered).length > 0) {
    return filtered;
  }

  // If requested fields do not match this collection, keep full properties for export use cases.
  return properties;
}

export async function searchApiTerritorialICGC(
  lng,
  lat,
  collectionsOrOptions = DEFAULT_COLLECTIONS
) {
  const { collections, fields } = normalizeTerritorialOptions(collectionsOrOptions);
  const requestedCollections = normalizeCollections(collections);
  const delta = 0.00005;
  const bbox = [lng - delta, lat - delta, lng + delta, lat + delta];

  const collectionResults = await Promise.all(
    requestedCollections.map(async (collectionId) => [
      collectionId,
      await searchTerritorialCollection(collectionId, bbox),
    ])
  );

  const resultats = Object.fromEntries(
    collectionResults.map(([collectionId, data]) => [
      collectionId,
      filterTerritorialProperties(data?.properties, fields, collectionId),
    ])
  );

  const firstFeature = Object.fromEntries(
    collectionResults.map(([collectionId, data]) => [
      collectionId,
      data?.firstFeature || null,
    ])
  );

  const features = Object.fromEntries(
    collectionResults.map(([collectionId, data]) => [
      collectionId,
      data?.features || [],
    ])
  );

  const raw = Object.fromEntries(
    collectionResults.map(([collectionId, data]) => [
      collectionId,
      data?.geojson || null,
    ])
  );

  return {
    lng,
    lat,
    bbox,
    resultats,
    firstFeature,
    features,
    raw,
  };
}

export default searchApiTerritorialICGC;