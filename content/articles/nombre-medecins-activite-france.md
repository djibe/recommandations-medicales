+++
title = "Nombre de médecins généralistes en activité en France en 2025"
titleSeo = "Nombre de médecins généralistes en France"
description = "Nombre de médecins généralistes en activité en France et évolution sur la période 2012 - 2025 (81870 médecins). Evolution par département et pyramide des âges"
longHtml = true
noSearchContent = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-04-09T20:06:00+02:00"
publishdate = "2023-04-28"
lastmod = "2025-06-20"
specialites = []
annees = "2025"
sources = ["CNOM"]
tags = []
image = true
imageSrc = "Undraw"
todo = "rankok | update 2026, 11680200 ALD 2021 par https://assurance-maladie.ameli.fr/etudes-et-donnees/prevalence-beneficiaires-ald"
chart = true
datatable = true
+++

## Évolution du nombre de médecins généralistes en activité régulière en France

Au 1^er^ janvier 2025, ==**81.870**== médecins généralistes étaient en activité régulière en France, soit une baisse de 13 % depuis 2010. 25,3 % des généralistes ont plus de 60 ans. Les généralistes représentent 40,7 % des 201.239 médecins en activité régulière (47,1 % en 2010).
{.lead}

La densité moyenne des généralistes en métropole est de 117,21 médecins pour 100.000 habitants.

{{< figure-chart title="Évolution du nombre de médecins généralistes en activité de 2012 à 2025. Dr JB Fron d'après CNOM 2025 et antérieurs" >}}

Parmi les généralistes en activité, 55,3 % ont une activité libérale exclusive, 37,8 % sont salariés, les derniers 6,6 % cumulant les 2 statuts.

55,5 % des médecins généralistes en activité sont des femmes. Elles sont devenues majoritaires en 2022.

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

{{< figure-chart title="Pyramide des âges des médecins généralistes en activité régulière en 2025. Dr JB Fron d'après CNOM 2023" id="chart-2" >}}

## Généralités sur les médecins en activité en France

Indicateurs concernant l'ensemble des médecins en activité régulière en France en 2025:

- Médecins en activité régulière: 201.239
- Âge moyen: 47,9 ans
- Féminisation 52,6 % (49,8 % en 2021)
- 49,4 % en activité salariée

## Sources {.mt-5}

{{< card-link-external title="Cartographie Interactive de la Démographie Médicale" url="https://demographie.medecin.fr/#c=indicator&i=demo_gen_tot.mg_act_regul&s=2024&view=map8" subtitle="par le CNOM" >}}

- [Conseil National de l'Ordre des Médecins (CNOM). Atlas de la démographie médicale en France. 2025.](https://www.conseil-national.medecin.fr/publications/actualites/publication-latlas-demographie-medicale-2025)
- [Conseil National de l'Ordre des Médecins (CNOM). Atlas de la démographie médicale en France. 2023.](https://www.conseil-national.medecin.fr/publications/communiques-presse/publication-latlas-demographie-medicale-2023)
- [Conseil National de l'Ordre des Médecins (CNOM). L'atlas de la démographie médicale 2022. 2022.](https://www.conseil-national.medecin.fr/lordre-medecins/conseil-national-lordre/demographie-medicale)

<!-- Data -->
<script>
const chartOptions1 = {
  series: [{
    name: 'Généralistes',
    data: [91524, 83215, 82058, 81395, 81870]
  }],
  chart: { height: 256},
  plotOptions: { bar: { dataLabels: { position: 'top' }}},
  dataLabels: {
    enabled: true,
    offsetY: -30
  },
  title: { text: 'Nombre de généralistes en activité' },
  xaxis: {
    categories: [2012, 2022, 2023, 2024, 2025]
  },
  yaxis: { min: 0 }
}
</script>
<script>
const chartOptions2 = {
  series: [{
    name: 'Hommes',
    data: [-1, -3, -15, -65, -277, -753, -3989, -7255, -4722, -3808, -3384, -3454, -5122, -3317, -325]
  },
  {
    name: 'Femmes',
    data: [0, 2, 4, 9, 85, 297, 1874, 6090, 5188, 4808, 4601, 6152, 9231, 6405, 746]
  }],
  chart: { stacked: true },
  colors: ['#4150f5', '#ff0094'],
  dataLabels: {
    enabled: true,
    formatter: function (val) { return Math.abs(val) }
    },
  title: { text: 'Pyramide des âges des médecins généralistes en 2025' },
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
    // TODO: xaxisformatter: https://apexcharts.com/javascript-chart-demos/bar-charts/custom-datalabels/
    // formatter: function (value, { w }) {return `Semaine ${w.globals.categoryLabels[value - 1]}`;}
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
