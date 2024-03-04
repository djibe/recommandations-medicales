+++
title = "Espérance de vie selon l'âge en 2023 en France métropolitaine"
titleSeo = "Espérance de vie selon l'âge en 2023"
description = "Données sur l'espérance de vie selon l'âge et le sexe en 2023 en France métropolitaine. À 65 ans, l'espérance de vie est de 23,6 ans et de 19,77 ans pour un homme"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-03-01T15:23:00+02:00"
publishdate = "2024-03-01"
lastmod = "2024-03-01"
specialites = []
annees = "2023"
sources = []
tags = []
imageSrc = "par pch.vector / Freepik"
datatable = true
+++

Plusieurs interventions en prévention en médecine générale prennent en compte l'espérance de vie (contrôle du diabète, dépistages). Pour pouvoir raisonner sciemment, RecoMédicales facilite l'accès à ces données d'espérance de vie selon l'âge.
{.lead}

L'espérance de vie à la naissance (en France métropolitaine) atteignait **82 ans** pour les femmes et **80 ans** pour les hommes **en 2023**, la France comptant une importante mortalité précoce (alcool, tabac).

Pour rappel, l'espérance de vie << à la naissance >> est la moyenne des âges des personnes décédées dans l'année.

## Espérance de vie selon l'âge et le sexe en France métropolitaine

À 65 ans, une femme a une espérance de vie 23,6 ans et un homme de 19,77 ans. Ainsi, le dépistage ciblé du [cancer de la prostate]({{< relref "cancer-prostate.md" >}}) peut être proposé jusqu'à 71 ans (homme asymptomatique ayant une espérance de vie supérieure à 15 ans).

Toutefois, ces valeurs ne sont que des moyennes de la mortalité en France métropolitaine et ne concernent pas un sujet atteint de pathologie particulière.

> Lire le tableau: à 5 ans, une fille a une espérance de vie de 81,12 ans et un garçon de 75,5 ans.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Espérance de vie selon l’âge en 2023 en France métropolitaine."}</script>
<table id="life-expectancy-france" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Espérance de vie selon l’âge en 2023 en France métropolitaine. Dr JB Fron d’après Insee 2024.</caption>
<thead>
  <tr>
    <th scope="col">Age (années)</th>
    <th scope="col">EV femme (années)</th>
    <th scope="col">EV homme</th>
  </tr>
</thead>
</table>

> **EV =** espérance de vie

## Sources

[Insee. Espérances de vie - France métropolitaine. Bilan démographique 2023. 2024.](https://www.insee.fr/fr/statistiques/7746170?sommaire=7746197)

<script>
window.addEventListener('load', () => {
  $(function () {
    $('#life-expectancy-france').DataTable({
      ajax: '/data/esperance-vie-age.json',
      columns: [
        { data: 'Age' },
        { data: 'Femme' },
        { data: 'Homme' }
      ]
    })
  })
})
</script>
