+++
title = "Espérance de vie selon l'âge en 2023 en France métropolitaine"
titleSeo = "Espérance de vie selon l'âge en 2023"
description = "Données sur l'espérance de vie selon l'âge et le sexe en 2023 en France métropolitaine. À 65 ans, l'espérance de vie est de 23,6 ans et de 19,77 ans pour un homme"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-03-01T15:23:00+02:00"
publishdate = "2024-03-01"
lastmod = "2024-03-05"
specialites = []
annees = "2023"
sources = []
tags = []
imageSrc = "par pch.vector / Freepik"
datatable = true
chart = true
+++

Plusieurs interventions en prévention en médecine générale prennent en compte l'espérance de vie (contrôle du diabète, dépistages). Pour pouvoir raisonner sciemment, RecoMédicales facilite l'accès à ces données d'espérance de vie selon l'âge.
{.lead}

L'espérance de vie à la naissance (en France métropolitaine) atteignait **82 ans** pour les femmes et **80 ans** pour les hommes **en 2023**, la France comptant une importante mortalité précoce (alcool, tabac).

Pour rappel, l'espérance de vie << à la naissance >> est la moyenne des âges des personnes décédées dans l'année.

## Espérance de vie selon l'âge et le sexe en France métropolitaine

{{< figure-chart title="Espérance de vie selon le sexe et l'âge en France métropolitaine en 2023. Dr JB Fron d'après Insee" >}}
<script>
const chartOptions = {
  series: [{
    name: 'Femme',
    data: [85.82, 85.13, 84.15, 83.17, 82.18, 81.19, 80.19, 79.20, 78.20, 77.21, 76.21, 75.22, 74.22, 73.23, 72.23, 71.24, 70.25, 69.25, 68.26, 67.27, 66.29, 65.30, 64.31, 63.32, 62.34, 61.35, 60.36, 59.38, 58.39, 57.41, 56.42, 55.44, 54.46, 53.48, 52.50, 51.52, 50.54, 49.56, 48.59, 47.62, 46.65, 45.68, 44.72, 43.75, 42.79, 41.82, 40.87, 39.92, 38.97, 38.03, 37.09, 36.15, 35.22, 34.30, 33.38, 32.46, 31.55, 30.65, 29.75, 28.85, 27.96, 27.08, 26.20, 25.33, 24.46, 23.60, 22.74, 21.88, 21.04, 20.20, 19.37, 18.55, 17.73, 16.91, 16.10, 15.30, 14.51, 13.73, 12.96, 12.21, 11.47, 10.75, 10.03, 9.35, 8.69, 8.06, 7.46, 6.88, 6.32, 5.79, 5.30, 4.83, 4.40, 4.01, 3.66, 3.35, 3.07, 2.82, 2.60, 2.44, 2.30]
  },
  {
    name: 'Homme',
    data: [80.11, 79.43, 78.46, 77.47, 76.48, 75.49, 74.50, 73.50, 72.51, 71.52, 70.52, 69.52, 68.53, 67.54, 66.54, 65.55, 64.56, 63.58, 62.60, 61.62, 60.65, 59.68, 58.72, 57.75, 56.79, 55.82, 54.86, 53.89, 52.92, 51.96, 51.00, 50.04, 49.07, 48.12, 47.16, 46.20, 45.25, 44.29, 43.35, 42.40, 41.46, 40.52, 39.59, 38.66, 37.73, 36.80, 35.88, 34.96, 34.05, 33.14, 32.25, 31.35, 30.46, 29.59, 28.72, 27.86, 27.01, 26.17, 25.33, 24.51, 23.69, 22.88, 22.09, 21.30, 20.53, 19.77, 19.02, 18.29, 17.56, 16.83, 16.12, 15.41, 14.71, 14.01, 13.33, 12.65, 11.98, 11.33, 10.68, 10.05, 9.43, 8.82, 8.22, 7.65, 7.10, 6.57, 6.07, 5.59, 5.14, 4.72, 4.32, 3.95, 3.61, 3.30, 3.04, 2.80, 2.59, 2.42, 2.29, 2.18, 2.07]
  }],
  chart: { type: 'line', height: 400 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#ffa600'], curve: 'smooth', width: 3 },
  title: { text: 'Espérance de vie selon l’âge en France métropolitaine' },
  tooltip: { y: [{ formatter: function(value) { return `${value} ans` }}, { formatter: function(value) { return `${value} ans` } }] },
  xaxis: {
    categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    tickAmount: 10,
    title: { text: 'Âge', offsetY: 0 }
  },
  yaxis: [
    {
      title: { text: 'Espérance de vie (années)' },
      decimalsInFloat: 1,
      min: 0,
    }
  ]
}
</script>

À 65 ans, une femme a une espérance de vie 23,6 ans et un homme de 19,77 ans. Ainsi, le dépistage ciblé du [cancer de la prostate]({{< relref "cancer-prostate.md" >}}) peut être proposé jusqu'à 71 ans (homme asymptomatique ayant une espérance de vie supérieure à 15 ans).

Toutefois, ces valeurs ne sont que des moyennes de la mortalité en France métropolitaine et ne concernent pas un sujet atteint de pathologie particulière.

> Lire le tableau: à 5 ans, une fille a une espérance de vie de 81,2 ans et un garçon de 75,5 ans.

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

## Source

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
