+++
title = "Nombre de médecins généralistes en activité en France en 2023"
titleSeo = "Nombre de médecins généralistes en France"
description = "Nombre de médecins généralistes en activité en France et évolution sur la période 2012 - 2023 (84133 médecins). Evolution par département et pyramide des âges"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-04-09T20:06:00+02:00"
publishdate = "2023-04-28"
lastmod = "2023-07-09"
specialites = []
annees = "2023"
sources = ["CNOM"]
tags = []
image = true
imageSrc = "Undraw"
todo = "https://data.ameli.fr/pages/data-professionnels-sante-liberaux-profession/?refine.profession_sante=M%C3%A9decins%20g%C3%A9n%C3%A9ralistes%20(hors%20m%C3%A9decins%20%C3%A0%20expertise%20particuli%C3%A8re%20-%20MEP) | 11680200 ALD 2021 par https://assurance-maladie.ameli.fr/etudes-et-donnees/prevalence-beneficiaires-ald"
chart = true
datatable = true
+++

## Évolution du nombre de médecins généralistes en activité régulière en France

Au 1^er^ janvier 2023, **82.858** médecins généralistes étaient en activité régulière en France, soit une baisse de 10,4 % depuis 2010. 27% des généralistes ont plus de 60 ans. Les généralistes représentent 42% des 197.417 médecins en activité régulière.

La densité moyenne des généralistes en métropole est de 119,7 médecins pour 100.000 habitants.

À l'**horizon 2025**, le Conseil National de l'Ordre des Médecins (CNOM) estime à 81.192 le nombre de généralistes en activité.

{{< figure-chart title="Évolution du nombre de généralistes en activité de 2012 à 2023 avec prévision 2025. Dr JB Fron d'après CNOM 2022 et 2023" >}}

Parmi les généralistes en activité, 56,4% ont une activité libérale exclusive, 37,3% sont salariés, les derniers 6,3% cumulant les 2 statuts.

53,4% des médecins généralistes en activité sont des femmes. Elles sont devenues majoritaires en 2022.

### Variations du nombre de médecins en exercice par département entre 2010 et 2022

Entre 2010 et 2022, 84 départements affichent une baisse du nombre de généralistes en activité. Les départements les plus impactés sont l'Yonne (-34%), l'Eure-et-Loir (-30,6%) et l'Indre (-29%).

Sur la même période, 21 départements ont vu le nombre de médecins généralistes en activité augmenter. Les départements ayant bénéficié des plus forts accroissements sont les DROM avec Wallis et Futuna (+133%), Mayotte (+46,2%) et la Guyane (+42,6%).

**NB.** Ces classements sont en valeur relative et ne prennent pas en compte la densité médicale des généralistes.

#### Tableau des variations départementales de médecins généralistes en activité sur la période 2010 - 2022

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Variations selon les départements du nombre de généralistes en activité sur la période 2010-2022"}</script>
<table id="department-variations" class="table table-sm">
<caption><span class="font-weight-bold">Tableau.</span> Variations selon les départements du nombre de généralistes en activité sur la période 2010-2022.</caption>
<thead>
  <tr>
    <th scope="col">Département</th>
    <th scope="col">Variation (%)</th>
  </tr>
</thead>
</table>

### Pyramide des âges des médecins généralistes en activité

{{< figure-chart title="Pyramide des âges des médecins généralistes en activité régulière en 2023. Dr JB Fron d'après CNOM 2023" id="chart-2" >}}

## Généralités sur les médecins en activité en France

Indicateurs concernant l'ensemble des médecins en activité régulière en France en 2022:

- Âge moyen: 50,3 ans
- Féminisation 50,5% (49,8% en 2021)
- 51,8% activité libérale ou mixte

## Sources

{{< card-link-external title="Cartographie Interactive de la Démographie Médicale" url="https://demographie.medecin.fr" subtitle="par le CNOM" >}}

- [Conseil National de l'Ordre des Médecins (CNOM). Atlas de la démographie médicale en France. 2023.](https://www.conseil-national.medecin.fr/publications/communiques-presse/publication-latlas-demographie-medicale-2023)
- [Conseil National de l'Ordre des Médecins (CNOM). L'atlas de la démographie médicale 2022. 2022.](https://www.conseil-national.medecin.fr/lordre-medecins/conseil-national-lordre/demographie-medicale)

<!-- Data -->
<script>
const chartOptions1 = {
  series: [{
    name: 'Généralistes',
    data: [92478, 84133, 82858, 81192]
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
    categories: [2012, 2022, 2023, 2025]
  },
  yaxis: { min: 0 }
}
</script>
<script>
const chartOptions2 = {
  series: [{
    name: 'Hommes',
    data: [-1, -2, -12, -46, -195, -761, -3889, -8997, -5747, -4163, -3496, -3179, -4204, -3679, -300]
  },
  {
    name: 'Femmes',
    data: [0, 1, 4, 7, 52, 276, 1571, 6420, 5985, 5018, 4632, 4891, 8033, 6743, 683]
  }],
  chart: { stacked: true },
  colors: ['#4150f5', '#ff0094'],
  dataLabels: {
    enabled: true,
    formatter: function (val) { return Math.abs(val) }
    },
  title: { text: 'Pyramide des âges des médecins généralistes en 2023' },
  xaxis: {
    categories: ['95-99', '90-94', '85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29'],
    overwriteCategories: ['95-99', '90-94', '85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29'],
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
  }
}
</script>
<script>
  // CNOM 2022 Tableau 16
const dataSource = [{{< data/generalists-department >}}]
window.addEventListener('load', () => {
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
})
</script>
