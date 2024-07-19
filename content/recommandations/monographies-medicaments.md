+++
title = "Monographies des médicaments utiles en France en médecine générale"
titleSeo = "Monographies des médicaments"
noindex = true
prefix = "les "
description = "Accéder facilement aux monographies et résumé des caractéristiques des produits (RCP) des médicaments utiles en médecine générale"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2024-07-19T11:38:45+02:00"
publishdate = "2024-07-19"
lastmod = "2024-07-19"
specialites = ["therapeutique"]
annees = "2024"
sources = ["BDPM"]
tags = []
english = []
sctid = ""
icd10 = ""
image = true
imageSrc = "Les monographies des médicaments. jemastock / Freepik"
todo = "DCI, unified search, update"
+++

Consulter la monographie (indications, posologies, contre-indications ...) de tous les médicaments utiles en soins primaires (hors homéopathie) de la Base de données publique des médicaments (BDPM).
{.lead .my-5}

> La recherche par DCI ne fonctionne actuellement pas. Le moteur de recherche sera unifié avec celui des pathologies.

<div class="textfield-box textfield-box-sm" style="position: sticky; top: 80px; backdrop-filter: blur(10px); z-index: 160">
  <input type="search" class="form-control form-group" id="search-input" placeholder="Rechercher un code médicament ...">
</div>
<div id="spinner">Chargement...</div>
<p><span id="result-count"></span> Médicaments</p>
<div id="cis-list" class="list-group">
  <p id="no-results" class="list-group-item mb-0" style="display:none">Aucun résultat</p>
</div>

<script type="module">
async function loadData() {
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'block'; // Afficher le spinner
try {
// Charger le fichier JSON au chargement de la page
const response = await fetch('/data/bdpm-search.json');
const data = await response.json();
const cisList = document.getElementById('cis-list');
const searchInput = document.getElementById('search-input');
const resultCount = document.getElementById('result-count');
const noResults = document.getElementById('no-results');

// Afficher la liste des libellés
data.forEach(item => {
  const a = document.createElement('a');
  if ('procedure' in item) {
    a.href = `https://base-donnees-publique.medicaments.gouv.fr/extrait.php?specid=${item.cis}`;
  } else {
    a.href = `https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=${item.cis}&typedoc=R`;
  }
  a.textContent = item.libelle;
  a.target = "_blank";
  a.classList.add('list-group-item', 'list-group-item-action');
  cisList.appendChild(a);
});
// Filtrer la liste des codes CIS en fonction de la recherche
searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toUpperCase();
    const li = cisList.getElementsByTagName('a');
    let count = 0;
    for (let i = 0; i < li.length; i++) {
        const txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          count++;
        } else {
          li[i].style.display = "none";
        }
    }
  resultCount.textContent = count; // Mettre à jour le compteur

  if (count === 0) {
    noResults.style.display = "block"; // Afficher le message "Aucun résultat"
  } else {
    noResults.style.display = "none"; // Masquer le message "Aucun résultat"
  }
});
} catch (error) {
  console.error('Erreur lors du chargement des données :', error);
} finally {
   spinner.style.display = 'none'; // Masquer le spinner
}
}
loadData();
</script>

{{< references/bdpm >}}
