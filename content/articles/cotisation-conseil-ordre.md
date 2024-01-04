+++
title = "Évolution de la cotisation ordinale des médecins"
description = "Évolution du montant de la cotisation annuelle au Conseil de l'Ordre des Médecins de 2001 à 2024, corrigée de l'inflation"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2021-12-09T08:59:00+02:00"
publishdate = "2022-01-18"
lastmod = "2024-01-04"
specialites = []
annees = "2024"
sources = ["CNOM"]
tags = []
chart = true
image = true
imageSrc = "vectorjuice / Freepik"
todo = "écriture SEO dont 'cotisation ordre des médecins', valeur C"
+++

## Évolution du montant de la cotisation à l'Ordre des médecins

La cotisation au Conseil National de l'Ordre des Médecins (CNOM) est **stable sur les 10 années** de la période 2011 - 2021, avec un montant (corrigé de l'inflation) de 330,2 € en 2011 contre 335 € en 2021. Elle suit donc la valeur du G, parfaitement stable sur 10 ans.

Sur 20 ans (période 2001 - 2021), l'augmentation de la cotisation ordinale atteint presque **20 %** (19,4 %, corrigés de l'inflation). Sur la même période, le G n'a augmenté que de **8,6 %** (22,3 € en 2001). Dès 2002, le G était déjà à la valeur actuelle (20€ soit l'équivalent 25,2 € de 2021).

Avec la forte inflation apparue en 2022, en utilisant toujours les euros de 2021 comme référence, la valeur réelle de la cotisation est tombée à 318,37 € cette année là.

**NB.** Les valeurs corrigées de l'inflation ne peuvent être calculées pour 2023 en l'absence de données Insee pour le moment. Le [Convertisseur franc-euro](https://www.insee.fr/fr/information/2417794) de l'Insee a servi au calcul des valeurs corrigées de l'inflation.

## Graphique de l'évolution du tarif de la cotisation au Conseil de l'Ordre des médecins

{{< figure-chart title="Évolution du tarif de la cotisation ordinale des médecins de 2001 à 2024. Valeurs faciales et valeurs corrigées de l'inflation (bleu clair). Dr JB Fron d'après cotisations CNOM et dernières valeurs Insee" >}}

<script>
const chartOptions = {
  // https://www.insee.fr/fr/information/2417794
  series: [{
    name: 'Euros courants',
    data: [214, 219, 227, 235, 245, 252, 260, 275, 290, 295, 300, 300, 300, 305, 320, 330, 333, 335, 335, 335, 335, 335, 340, 353]
  }, {
    name: 'Euros 2021',
    data: [66.55, 62.55, 58.97, 54.87, 51.7, 48.3, 45.88, 39.06, 40.91, 36.57, 30.21, 23.88, 21.08, 19.8, 20.64, 20.65, 17.21, 10.92, 7.14, 5.5, 0, -16.63, null, null]
  }],
  chart: { stacked: true, type: 'line' },
  stroke: { colors: ['#4150f5', '#717cf8'], curve: 'smooth', width: 3 },
  title: { text: 'Évolution de la cotisation ordinale des médecins de 2001 à 2023' },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    tickAmount: 10
  },
  yaxis: [
    {
      title: { text: "Montant (€)" },
      labels: {
        style: { colors: '#757575' }
      },
      decimalsInFloat: 0,
      min: 0
    }
  ],
  tooltip: {
    y: [{
      formatter: function(value) { return `${value} €` }
    },
    {
      formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
        value += series[0][dataPointIndex];
        Math.round(value);
        return `<strong>${value} €</strong>`;
        }
    }]
  },
  theme: {
    monochrome: { enabled: true }
  }
}
</script>
