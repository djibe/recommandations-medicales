+++
title = "Classement aux ECNi 2024"
description = "Intégralité du classement au concours de sixième année de médecine, les épreuves classantes nationales ECNi 2024 avec recherche par nom ou par classement"
longHtml = true
noSearchContent = true
auteurs = ["Jean-Baptiste FRON"]
date = "2025-11-09T10:00:00+02:00"
publishdate = "2025-01-02"
lastmod = "2025-11-09"
specialites = []
annees = "2024"
sources = []
tags = []
image = true
imageSrc = "par pch.vector sur Freepik"
datatable = true
+++

Les résultats du classement aux ECNi 2024 ont été publiés par le Centre national de gestion (CNG). Les rangs au concours des 662 étudiants en sixième année de médecine sont accessibles par nom ou par classement.
{.lead}

Le concours de médecine 2024 avec un effectif réduit (redoublants, auditeurs et internes), sous la forme des derniers ECNi, s'est déroulé pour la dernière fois en 2024, pour des redoublants, auditeurs et internes.

## Tableau des résultats aux ECNi 2024

Les résultats aux ECNi 2024 publiés par le CNG étant disponibles uniquement en PDF (voir [Source](#source)), **RecoMédicales** propose de consulter le classement au concours de l'internat sous forme de tableau dynamique.

662 étudiants en 6^e^ année de médecine ont été classés cette année en vue de l'entrée en troisième cycle.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Classement aux épreuves classantes nationales informatisées (ECNi) de médecine 2024."}</script>
<table id="ecni-ranks" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Classement aux épreuves classantes nationales informatisées (ECNi) de médecine 2024. Dr JB Fron d'après CNG 2024.</caption>
<thead>
  <tr>
    <th scope="col">Rang</th>
    <th scope="col">Titre</th>
    <th scope="col">Nom</th>
    <th scope="col">Prénoms</th>
    <th scope="col">Nom d'usage</th>
  </tr>
</thead>
</table>

## Source

[Journal Officiel. Arrêté du 17 juillet 2024 fixant par rang de classement la liste des étudiants et des internes de médecine ayant satisfait aux épreuves classantes nationales anonymes donnant accès au troisième cycle des études de médecine organisées au titre de l'année universitaire 2024-2025. 21/07/2024.](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000050038179)

<script type="module">
window.addEventListener('load', () => {
  $(function () {
    $('#ecni-ranks').DataTable({
      ajax: 'https://github.com/djibe/recommandations-medicales/blob/master/static/data/ecni-2024.json',
      columns: [
        { data: 'Rang' },
        { data: 'Titre' },
        { data: 'Nom' },
        { data: 'Prénoms' },
        { data: 'Nom d\'usage' }
      ]
    })
  })
})
</script>
