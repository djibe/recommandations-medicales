import { OramaCloud } from "https://esm.sh/@orama/core@1.2.19";

let client;

async function initializeClient() {
  const response = await fetch(
    "https://recomedicales.fr/.netlify/functions/api",
  );
  const json = await response.json();
  const oramaApiKey = json.api;

  // Initialisation du client avec la clé API récupérée
  client = new OramaCloud({
    projectId: "c6e48c90-4856-4f2b-b850-47dffc4c5181",
    apiKey: oramaApiKey,
  });
}

initializeClient();

const searchInput = document.getElementById("search-input");
["change", "cut", "focus", "input", "paste", "search"].forEach((type) =>
  searchInput.addEventListener(type, query),
);

async function query(event) {
  if (!client) {
    console.error("Orama Search n’est pas encore initialisé.");
    return;
  }

  const searchResponse = await client.search({
    term: event.target.value,
    properties: "*",
    mode: "fulltext",
    boost: {
      title: 5,
      content: 2,
    },
  });

  document.getElementById("search-results").innerHTML = searchResponse.hits
    .map(
      (i) =>
        `<a href='${i.document.uri}' class='list-group-item list-group-item-action' role='listitem'>${i.document.title}</a>`,
    )
    .join("");
}
