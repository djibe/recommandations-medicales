+++
title = "Résultats aux EDN 2024: classement et affectations"
description = "Intégralité des résultats au concours de sixième année de médecine, les EDN 2024 avec recherche par nom, rang et spécialité"
longHtml = true
noSearchContent = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-10-25T12:37:00+02:00"
publishdate = "2024-10-25"
lastmod = "2024-10-25"
specialites = []
annees = "2024"
sources = []
tags = []
image = true
imageSrc = "par pch.vector sur Freepik"
datatable = true
+++

Les résultats aux concours de l'internat EDN 2024 (comportant les EDN, ECOS et note de parcours) ont été publiés au Journal Officiel. Les choix au concours des **7816 étudiants** en sixième année de médecine sont accessibles par nom ou par classement.
{.lead}

Le concours de médecine 2024, sous la forme des EDN **ne permet pas de rendre un classement unique**, chaque étudiant ayant une note pour chacun des **13 groupes de spécialités** différents. Il pourra donc être parfaitement classé dans un groupe de spécialité (ex. chirurgie de la tête et du cou) mais choisir une autre spécialité où il est moins bien classé.

Les résultats sont établis à partir des résultats aux EDN (épreuves dématérialisées nationales), aux ECOS (examens cliniques objectifs structurés) ainsi que la "note de parcours" introduits par la réforme du deuxième cycle (R2C).

## Tableau des résultats aux EDN 2024

Les résultats aux EDN 2024 publiés au *Journal Officiel* étant disponibles uniquement en PDF (voir [Source](#source)), **RecoMédicales** propose de consulter les résultats sous forme de tableau dynamique.

7816 étudiants en 6^e^ année de médecine ont été affectés cette année en vue de l'entrée en troisième cycle, selon leur classement de spécialité. Les femmes représentent cette année 64,7 % des futurs internes en médecine.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Résultats des épreuves dématérialisées nationales (EDN) de médecine 2024."}</script>
<table id="edn-ranks" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Résultats des épreuves dématérialisées nationales (EDN) de médecine 2024. Dr JB Fron d'après Journal Officiel 2024.</caption>
<thead>
  <tr>
    <th scope="col">Rang</th>
    <th scope="col">Titre</th>
    <th scope="col">Nom</th>
    <th scope="col">Prénoms</th>
    <th scope="col">Spécialité</th>
  </tr>
</thead>
</table>

## Source

[Journal Officiel. Arrêté du 21 octobre 2024 relatif à l'affectation des étudiants en médecine ayant satisfait aux épreuves nationales donnant accès au troisième cycle des études de médecine organisées au titre de l'année universitaire 2024-2025. 23/10/2024.](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000050389653)

<script type="module">
window.addEventListener('load', () => {
  $(function () {
    $('#edn-ranks').DataTable({
      ajax: 'https://raw.githubusercontent.com/djibe/recommandations-medicales/refs/heads/master/static/data/edn-2024.json',
      columns: [
        { data: 'Rang' },
        { data: 'Titre' },
        { data: 'Nom' },
        { data: 'Prénoms' },
        { data: 'Spécialité' }
      ]
    })
  })
})
</script>
