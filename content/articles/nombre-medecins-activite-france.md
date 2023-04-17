+++
title = "Nombre de médecins généralistes en activité en France"
description = "TODO:"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-04-09T20:06:00+02:00"
publishdate = "2023-04-09"
lastmod = "2023-04-09"
specialites = []
sources = ["CNOM"]
tags = []
draft = true
image = false
imageSrc = ""
todo = "figure 3, tableau 28, tableau 33, tableau 41 et 42, p112"
chart = true
datatable = true
+++

## Évolution du nombre de médecins généralistes en activité régulière en France

Au 1er janvier 2022, **84.133** médecins généralistes étaient en activité régulière en France, en baisse de 11% depuis 2010. Les généralistes représentent 42,5% des 197.811 médecins en activité régulière.

À l'horizon 2025, le CNOM estime à 81.192 le nombre de généralistes en activité à cette date.

2012: 92.478
2022: 84.133

### Variations du nombre de médecins en exercice par département entre 2010 et 2022

Entre 2010 et 2022, 84 départements affichent une baisse du nombre de généralistes en activité. Les départements les plus impactés sont l'Yonne (-34%), l'Eure-et-Loir (-30,6%) et l'Indre (-29%).

Sur la même période, 21 départements ont vu le nombre de médecins généralistes en activité augmenter. Les départements ayant bénéficié des plus forts accroissements sont les DROM avec Wallis et Futuna (+133%), Mayotte (+46,2%) et la Guyane (+42,6%).

**NB.** Ces classements sont en valeur relative et ne prennent pas en compte la densité médicale des généralistes.

#### Tableau des variations départementales de médecins généralistes en activité sur la période 2010-2022

<table id="department-variations" class="table table-sm">
<thead>
  <tr>
    <th>Département</th>
    <th>Variation (%)</th>
  </tr>
</thead>
</table>

### Pyramide des âges des médecins généralistes en activité

{{< figure-chart title="Pyramide des âges du nombre de médecins généralistes en activité régulière en 2022. Dr JB Fron d'après CNOM 2022" >}}

## Généralités sur les médecins en activité en France

Indicateurs concernant l'ensemble des médecins en activité régulière en France en 2022:

- Âge moyen: 50,3 ans
- Féminisation 50,5% (49,8% en 2021)
- 51,8% activité libérale ou mixte

## Sources

[Conseil National de l'Ordre des Médecins (CNOM). L'atlas de la démographie médicale 2022. 2022.](https://www.conseil-national.medecin.fr/lordre-medecins/conseil-national-lordre/demographie-medicale)

<script>
const chartOptions = {
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
  title: { text: 'Pyramide des âges des médecins généralistes en 2022' },
  xaxis: {
    categories: ['90-94', '85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29']
  },
  yaxis: {
    forceNiceScale: false,
    min: -10000,
    max: 10000
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) { return Math.abs(val) }
    }
  },
}
</script>
<script>
  // TODO: tableau 16
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
