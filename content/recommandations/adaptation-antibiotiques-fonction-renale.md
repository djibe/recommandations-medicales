+++
id = "019dbf97-f269-7cfd-be8d-6118318dc57f"
title = "Adaptation des antibiotiques à la fonction rénale"
titleSeo = "Adaptation antibiotiques à la fonction rénale"
prefix = "l'"
description = "Guide des posologies adaptées des antibiotiques chez l'insuffisant rénal. Adaptation des pénicillines, céphalosporines, quinolones et autres à la fonction rénale"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2026-04-24T15:04:42+02:00"
publishdate = "2026-04-24"
lastmod = "2026-04-24"
specialites = ["thérapeutique"]
annees = "2024"
sources = ["Omedit PDL"]
tags = []
english = ["Antibiotic dosage adjustment in renal dysfunction", "antibiotic renal dosage adjustment"]
sctid = ""
icd10 = []
image = true
imageSrc = "Illustration de l'adaptation des posologies antibiotiques à la fonction rénale. pch.vector / Freepik"
rank = "false"
todo = "liens > flow > Kanban | update 2027"
+++

{{%article-summary%}}

- Les antibiotiques, comme les autres médicaments, doivent être adaptés à la fonction rénale, estimée par le débit de filtration glomérulaire (ou DFG)
- Les valeurs disponibles pour les antibiotiques usuels en ville présentées ici ne concernent que l'adulte (non dialysé). Ces données ont été publiées par l'Omedit Pays de la Loire
- Pour chaque stade de la maladie rénale chronique (MRC) -- dont l'insuffisance rénale sévère ou terminale -- les ajustements de posologie nécessaires sont précisés

{{%/article-summary%}}

*La présentation sera progressivement améliorée.*

## Adapter les posologies des antibiotiques à la fonction rénale chez l'adulte {.my-5}

> **DFG** en mL/min/1,73m². **DC =** dose de charge. Lorsqu'il est écrit jusqu'à x mL/min sans précision, voir la posologie de stade plus sévère (case inférieure).

<div class="form-group floating-label textfield-box form-ripple my-5">
  <label for="demo1">Rechercher un antibiotique</label>
  <input class="form-control" id="search-input" type="search">
</div>
<div id="resultats-container">
<p>Chargement des données en cours...</p>
</div>
<script defer>
    const jsonUrl = '/data/adaptation-antibiotiques-fonction-renale.json';
    // Formater le nom des stades
    function formaterStade(stadeKey) {
        switch (stadeKey) {
          case 'stage_1':
            return 'DFG normal (≥ 90)';
            break;
          case 'stage_2':
            return 'MRC stade 2 (60-89)';
            break;
          case 'stage_3':
            return 'IRC modérée (30-59)';
            break;
          case 'stage_4':
            return 'IRC sévère (15-29)';
            break;
          case 'stage_5':
            return 'IRC terminale (&lt; 15)';
            break;
        }
    }
    async function chargerEtAfficherDonnees() {
        const conteneur = document.getElementById('resultats-container');
        try {
            const reponse = await fetch(jsonUrl);
            if (!reponse.ok) throw new Error(`Erreur HTTP: ${reponse.status}`);
            const donnees = await reponse.json();
            conteneur.innerHTML = '';
            // Niveau 1 : Parcourir les antibiotiques
            for (const [nomAntibio, voies] of Object.entries(donnees)) {
                // Ignorer les propriétés qui ne sont pas des objets (sécurité)
                if (typeof voies !== 'object' || voies === null) continue;
                let antibioHTML = `
                    <div class="card card-body m-2">
                        <h3 class="typography-headline-4">${nomAntibio}</h3>
                `;
                // Niveau 2 : Parcourir les voies d'administration (PO, IV, etc.)
                for (const [voie, schemas] of Object.entries(voies)) {
                    antibioHTML += `
                        <div class="voie-section">
                            <p class="typography-headline-4 m-2"><span class="badge" style="background-color: var(--primary-light)">Voie ${voie}</span></p>
                    `;
                    // Niveau 3 : Parcourir les schémas posologiques (3 g/j, 100 mg/kg/j, etc.)
                    for (const [schema, details] of Object.entries(schemas)) {
                        let maxBadge = details.max ? `<span class="badge badge-secondary" style="font-size: 0.875rem;
  font-weight: 400;">Max ${details.max}</span>` : '';
                        let lignesTableau = '';
                        // Niveau 4 : Parcourir les stades (stage_1, stage_2...)
                        for (const [cle, valeur] of Object.entries(details)) {
                            if (cle !== 'max') {
                                lignesTableau += `
                                    <tr>
                                        <th scope="row">${formaterStade(cle)}</th>
                                        <td>${valeur}</td>
                                    </tr>
                                `;
                            }
                        }
                        antibioHTML += `
                            <div class="data-table d-flex m-2" style="width: fit-content">
                                <div class="typography-headline-6 d-flex justify-content-between p-3">
                                    <span>Schéma : ${schema}</span>
                                    ${maxBadge}
                                </div>
                                <table class="table table-wrap">
                                    <tbody>
                                        ${lignesTableau}
                                    </tbody>
                                </table>
                            </div>
                        `;
                    }
                    antibioHTML += `</div>`; // Fin voie-section
                }
                antibioHTML += `</div>`; // Fin antibio-section
                conteneur.insertAdjacentHTML('beforeend', antibioHTML);
            }
        } catch (erreur) {
            console.error("Erreur :", erreur);
            conteneur.innerHTML = `<p class="error">Impossible de charger les données. Vérifiez que votre serveur local tourne et que le chemin du fichier est correct.</p>`;
        }
    }
    document.addEventListener('DOMContentLoaded', chargerEtAfficherDonnees);
</script>
<script>
        const searchInput = document.getElementById('search-input');
        const container = document.getElementById('resultats-container');
        // We target the parent items of the h3 tags to hide the whole block
        const resultItems = container.getElementsByClassName('card');
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            // Loop through each item block
            Array.from(resultItems).forEach(item => {
                const title = item.querySelector('h3').textContent;
                // If the term exists in the title, show it; otherwise, hide it
                if (title.toLowerCase().indexOf(term) !== -1) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
</script>

{{%sources%}}

- [Omedit Pays de la Loire. Adaptation des antibiotiques à la fonction rénale. v2.2. Novembre 2024. (PDF)](https://www.omedit-paysdelaloire.fr/wp-content/uploads/2021/06/20241118_ATB-et-IR_version-ETS_V2.2.pdf)

{{%/sources%}}

Un antibiotique est manquant ? Signalez le avec le bouton ci-dessous.
