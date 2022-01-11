+++
title = "Évolution de la cotisation ordinale des médecins"
description = "Les français et leur taux de participation au dépistage généralisé des cancers"
auteurs = ["Jean-Baptiste FRON"]
date = 2021-12-09T08:59:00+02:00
publishdate = 2021-12-09
lastmod = 2021-12-09
specialites = []
sources = ["CNOM"]
tags = []
draft = true
chart = true
image = false
imageSrc = ""
todo= ""
+++

### Résumé



### Graphique

<div id="chart" class="border alert mb-4"></div>
<script>
const chartOptions = {
  series: [{
    name: 'Euros courants',
    data: [214, 219, 227, 235, 245, 252, 260, 275, 290, 295, 300, 300, 300, 305, 320, 330, 333, 0, 0, 335, 335, 335]
  }, {
    name: 'Euros 2017',
    data: [52.76, 48.72, 44.92, 40.63, 37.13, 33.54, 30.28, 23.63, 24.65, 20.28, 13.99, 7.97, 10.4, 3.84, 3.9, 3.43, 0, 0, 0, 0, 0, 0]
  }],
  dataLabels: {
    formatter: function (val, opts) {
      return val + "%"
      }
  },
  chart: { stacked: true },
  title: { text: 'Évolution de la cotisation ordinale des médecins de 2001 à 2022' },
  xaxis: { categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
  yaxis: [
    {
      title: { text: "Montant (€)" },
      labels: {
        style: { colors: '#757575' }
      }
    }
  ],
  tooltip: {
    x: { show: true },
    y: [{
      formatter: function(value) { return `${value} €` }
    },
    {
      formatter: function(value) { return `Valeur + ${value} € d'inflation` }
    }]
  },
  theme: {
    monochrome: { enabled: true }
  }
}
</script>

> {{%class "typography-body-2 text-black-secondary" %}}Figure. .{{%/class%}}

### Sources

