+++
title = "Évolution du montant de la franchise médicale en France"
description = "TODO:"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-04-28T17:47:00+02:00"
publishdate = "2024-04-28"
lastmod = "2024-04-28"
specialites = []
annees = "2024"
sources = []
draft = true
tags = []
image = false
imageSrc = "par "
chart = true
+++


{.lead}

##

{{< figure-chart title=". Dr JB Fron d'après Irving et al 2017" >}}

## Source

- [Ameli. La franchise médicale. 02/04/2024.](https://www.ameli.fr/assure/remboursements/reste-charge/franchise-medicale)
- <https://fr.wikipedia.org/wiki/Franchise_m%C3%A9dicale>

<script>
const chartOptions1 = {
  // https://www.insee.fr/fr/information/2417794
  series: [{
    name: 'Euros 2023',
    data: [0.63, 0.63, 0.62, 0.61, 0.60, 0.59, 0.59, 0.59, 0.59, 0.58,
    0.57, 0.56, 0.56, 0.55, 0.52, 0.5, null]
  },
  {
    name: 'Euros courants',
    data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
     0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1]
  }],
  chart: { type: 'line' },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#717cf8'], curve: 'smooth', width: 3 },
  title: { text: 'Évolution du montant de la franchise médicale' },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
     2018, 2019, 2020, 2021, 2022, 2023, 2024],
    // tickAmount: 10
  },
  yaxis: [
    {
      title: { text: "Montant (€)" },
      labels: { style: { colors: '#757575' } },
      decimalsInFloat: 2,
      min: 0
    }
  ],
  tooltip: { y: [{ formatter: function(value) { return `${value} €` }}] },
  theme: { monochrome: { enabled: true } }
}
</script>
