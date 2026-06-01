+++
id = "0190e8c8-db59-743c-ba7a-f2d92b1918de"
title = "Monographies des médicaments utiles en France en médecine générale"
titleSeo = "Monographies des médicaments"
noindex = true
noSApi = true
prefix = "les "
description = "Accéder facilement aux monographies et résumé des caractéristiques des produits (RCP) des médicaments utiles en médecine générale"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2024-07-19T11:38:45+02:00"
publishdate = "2024-07-19"
lastmod = "2026-05-31"
specialites = ["thérapeutique"]
annees = "2026"
sources = ["BDPM"]
tags = []
english = []
sctid = ""
icd10 = []
image = true
imageSrc = "Les monographies des médicaments. jemastock / Freepik"
todo = "unified search, update"
+++

Consulter la monographie (indications, posologies, contre-indications ...) de tous les médicaments utiles en soins primaires (hors homéopathie) de la Base de données publique des médicaments (BDPM).
{.lead .my-5}

> La mise à jour de la liste des médicaments est mensuelle. Le moteur de recherche sera unifié avec celui des pathologies.

<div class="textfield-box form-ripple-nolabel form-ripple-bottom" style="position: sticky; top: 80px; backdrop-filter: blur(10px); z-index: 160">
  <input type="search" class="form-control form-group" id="search-input-med" placeholder="Rechercher un code médicament ..." autofocus>
</div>
<div id="spinner">Chargement...</div>
<p><span id="result-count"></span> Médicaments</p>
<div id="medication-list" class="list-group">
  <p id="no-results" class="list-group-item mb-0" style="display:none">Aucun résultat</p>
</div>

<script type="module">
async function loadData() {
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'block'; // Afficher le spinner
  const normalizeText = (text) => {
    if (!text) return '';
    return text
      .normalize("NFD")               // Separate base letters from their accents
      .replace(/[\u0300-\u036f]/g, "") // Remove the accent marks
      .toUpperCase();                 // Convert to uppercase for case-insensitivity
  };
  try {
    const response = await fetch('https://raw.githubusercontent.com/djibe/recommandations-medicales/refs/heads/master/static/data/bdpm-search.json');
    const data = await response.json();
    const medicationList = document.getElementById('medication-list');
    const searchInput = document.getElementById('search-input-med');
    const resultCount = document.getElementById('result-count');
    const noResults = document.getElementById('no-results');
    data.forEach(item => {
      const a = document.createElement('a');
      if (item.procedure === 'Procédure centralisée') {
        a.href = `https://base-donnees-publique.medicaments.gouv.fr/medicament/${item.cis}/extrait#tab-rcp-et-notice`;
      } else {
        a.href = `https://base-donnees-publique.medicaments.gouv.fr/medicament/${item.cis}/extrait#tab-rcp`;
      }
      a.textContent = item.libelle;
      a.target = "_blank";
      a.classList.add('list-group-item', 'list-group-item-action');
      a.dataset.dci = item.dci;
      medicationList.appendChild(a);
    });
    searchInput.addEventListener('input', () => {
      const filter = normalizeText(searchInput.value.trim());
      const li = medicationList.getElementsByTagName('a');
      let count = 0;
      for (let i = 0; i < li.length; i++) {
        const libelle = li[i].textContent || li[i].innerText;
        const dci = li[i].dataset.dci;
        const normalizedLibelle = normalizeText(libelle);
        const normalizedDci = normalizeText(dci);
        if (normalizedLibelle.indexOf(filter) > -1 || normalizedDci.indexOf(filter) > -1) {
          li[i].style.display = "";
          count++;
        } else {
          li[i].style.display = "none";
        }
      }
      resultCount.textContent = count; // Mettre à jour le compteur
      if (count === 0) {
        noResults.style.display = "block";
      } else {
        noResults.style.display = "none";
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
