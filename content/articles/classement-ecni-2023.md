+++
title = "Classement aux ECNi 2023"
description = "Intégralité du classement au concours de sixième année de médecine, les épreuves classantes nationales ECNi 2023 avec recherche par nom ou par classement"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-07-06T10:21:00+02:00"
publishdate = "2023-07-06"
lastmod = "2023-11-14"
specialites = []
annees = "2023"
sources = []
tags = []
imageSrc = "par pch.vector sur Freepik"
datatable = true
+++

Les résultats du classement aux ECNi 2023 ont été publiés par le Centre national de gestion (CNG). Les rangs au concours des 9727 étudiants en sixième année de médecine sont accessibles par nom ou par classement.
{.lead}

Le concours de médecine 2023, sous la forme des ECNi, s'est déroulé pour la dernière fois du 19 au 21 juin 2023 et les résultats ont été publiés dès le 28 juin 2023.

## Tableau des résultats aux ECNi 2023

Les résultats aux ECNi 2023 publiés par le CNG étant disponibles uniquement en PDF (voir [Source](#source)), **RecoMédicales** propose de consulter le classement au concours de l'internat sous forme de tableau dynamique.

9727 étudiants en 6<sup>e</sup> année de médecine ont été classés cette année en vue de l'entrée en troisième cycle. Les femmes représentent cette année 62,6 % des futurs internes en médecine.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Classement aux épreuves classantes nationales informatisées (ECNi) de médecine 2023."}</script>
<table id="ecni-ranks" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Classement aux épreuves classantes nationales informatisées (ECNi) de médecine 2023. Dr JB Fron d'après CNG 2023.</caption>
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

## Sources

- [Journal Officiel. Arrêté du 7 juillet 2023 fixant par rang de classement la liste des étudiants et des internes de médecine ayant satisfait aux épreuves classantes nationales anonymes donnant accès au troisième cycle des études de médecine organisées au titre de l'année universitaire 2023-2024. 21/07/2023.](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047867676)
- [CNG. Etudiants ECN : Publication des résultats 2023. 28/06/2023.](https://www.cng.sante.fr/actualites/etudiants-ecn-publication-resultats-2023)

<script>
window.addEventListener('load', () => {
  $(function () {
    $('#ecni-ranks').DataTable({
      ajax: '/data/ecni-2023.json',
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
