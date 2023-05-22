+++
title = "Nombre de médecins généralistes en activité en France"
description = "Nombre de médecins généralistes en activité en France et évolution sur la période 2012 - 2022 (84133 médecins). Evolution par département et pyramide des âges"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-04-09T20:06:00+02:00"
publishdate = "2023-04-28"
lastmod = "2023-04-28"
specialites = []
annees = "2022"
sources = ["CNOM"]
tags = []
image = true
imageSrc = "Undraw"
todo = "tableau 20 et 42, p112, médecins UE6"
chart = true
datatable = true
+++

## Évolution du nombre de médecins généralistes en activité régulière en France

Au 1<sup>er</sup> janvier 2022, **84.133** médecins généralistes étaient en activité régulière en France, soit une baisse de 11% depuis 2010. 27% des généralistes ont plus de 60 ans. Les généralistes représentent 42,5% des 197.811 médecins en activité régulière.

À l'**horizon 2025**, le CNOM estime à 81.192 le nombre de généralistes en activité.

{{< figure-chart title="Évolution du nombre de généralistes en activité de 2012 à 2022 avec prévision 2025. Dr JB Fron d'après CNOM 2022" >}}

Parmi les généralistes en activité, 56,1% ont une activité libérale exclusive, 37,4% sont salariés, les derniers 6,4% cumulant les 2 statuts.

En 2022 les femmes sont devenues majoritaires parmi les médecins généralistes en activité (50,5%).

### Variations du nombre de médecins en exercice par département entre 2010 et 2022

Entre 2010 et 2022, 84 départements affichent une baisse du nombre de généralistes en activité. Les départements les plus impactés sont l'Yonne (-34%), l'Eure-et-Loir (-30,6%) et l'Indre (-29%).

Sur la même période, 21 départements ont vu le nombre de médecins généralistes en activité augmenter. Les départements ayant bénéficié des plus forts accroissements sont les DROM avec Wallis et Futuna (+133%), Mayotte (+46,2%) et la Guyane (+42,6%).

**NB.** Ces classements sont en valeur relative et ne prennent pas en compte la densité médicale des généralistes.

#### Tableau des variations départementales de médecins généralistes en activité sur la période 2010 - 2022

<table id="department-variations" class="table table-sm">
<caption><span class="font-weight-bold">Tableau.</span> Variations selon les départements du nombre de généralistes en activité sur la période 2010-2022.</caption>
<thead>
  <tr>
    <th>Département</th>
    <th>Variation (%)</th>
  </tr>
</thead>
</table>

### Pyramide des âges des médecins généralistes en activité

<figure class="figure-chart">
  <div id="chart2"></div>
  <figcaption><b>Figure 2.</b> Pyramide des âges du nombre de médecins généralistes en activité régulière en 2022. Dr JB Fron d'après CNOM 2022. Dr JB Fron d'après CNOM 2022.</figcaption>
</figure>

## Généralités sur les médecins en activité en France

Indicateurs concernant l'ensemble des médecins en activité régulière en France en 2022:

- Âge moyen: 50,3 ans
- Féminisation 50,5% (49,8% en 2021)
- 51,8% activité libérale ou mixte

## Sources

[Conseil National de l'Ordre des Médecins (CNOM). L'atlas de la démographie médicale 2022. 2022.](https://www.conseil-national.medecin.fr/lordre-medecins/conseil-national-lordre/demographie-medicale)

<!-- Data -->
<script>
const chartOptions = {
  series: [{
    name: 'Généralistes',
    data: [92478, 84133, 81192]
  }],
  forecastDataPoints: {
    count: 1,
    fillOpacity: 0.5
  },
  chart: { height: 256},
  plotOptions: { bar: { dataLabels: { position: 'top' }}},
  dataLabels: {
    enabled: true,
    offsetY: -30
  },
  title: { text: 'Nombre de généralistes en activité' },
  xaxis: {
    categories: [2012, 2022, 2025]
  },
  yaxis: { min: 0 }
}
</script>
<script>
const chartOptions2 = {
  series: [{
    name: 'Hommes',
    data: [-2, -13, -43, -161, -726, -3834, -9744, -6412, -4322, -3513, -3263, -3847, -3727, -359]
  },
  {
    name: 'Femmes',
    data: [0, 4, 7, 41, 258, 1510, 6416, 6420, 5122, 4674, 4603, 7430, 6926, 755]
  }],
  chart: { stacked: true },
  colors: ['#4150f5', '#ff0094'],
  dataLabels: {
    enabled: true,
    formatter: function (val) { return Math.abs(val) }
    },
  title: { text: 'Pyramide des âges des médecins généralistes en 2022' },
  xaxis: {
    categories: ['90-94', '85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29'],
    overwriteCategories: ['90-94', '85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29'],
  },
  yaxis: {
    forceNiceScale: false,
    min: -10000,
    max: 10000,
    title: { text: 'Âge' }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  tooltip: {
    shared: true,
    // TODO: xaxis formatter: https://apexcharts.com/javascript-chart-demos/bar-charts/custom-datalabels/
    y: {
      formatter: function (val) { return Math.abs(val) }
    }
  },
}
</script>
<script>
  // CNOM 2022 Tableau 16
const dataSource = [{{< data/generalists-department >}}]
window.onload = () => {
  $(function () {
    $('#department-variations').DataTable({
      data: dataSource,
      dom: '<"top"f><rt<"bottom"Blip>>',
      // paging: true,
      pageLength: 25
    })
    .on('page.dt', () => {
      $('[data-toggle="tooltip"]').tooltip({placement: 'bottom'})
    })
  })
}
</script>
