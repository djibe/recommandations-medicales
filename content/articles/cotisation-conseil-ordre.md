+++
title = "Évolution de la cotisation ordinale des médecins de 2001 à 2025"
titleSeo = "Évolution de la cotisation ordinale des médecins"
description = "Évolution du montant de la cotisation annuelle au Conseil de l'Ordre des Médecins de 2001 à 2025, corrigée de l'inflation"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2021-12-09T08:59:00+02:00"
publishdate = "2022-01-18"
lastmod = "2025-03-04"
specialites = []
annees = "2025"
sources = ["CNOM"]
tags = []
chart = true
image = true
imageSrc = "vectorjuice / Freepik"
todo = "update 2026, écriture SEO dont 'cotisation ordre des médecins', valeur C"
+++

## Évolution du montant de la cotisation à l'Ordre des médecins

La cotisation au Conseil National de l'Ordre des Médecins (CNOM) est **quasi stable sur les 10 dernières années** (période 2014-2024), à -3,4 %, avec un montant (corrigé de l'inflation) de 365,6 € en 2011 contre 353 € en 2024.

Sur 20 ans (période 2004-2024), l'augmentation de la cotisation ordinale atteint **8 %** (en euros constants).

**NB.** Les valeurs corrigées de l'inflation ne peuvent être calculées pour 2025 en l'absence de données Insee pour le moment. Le [Convertisseur franc-euro](https://www.insee.fr/fr/information/2417794) de l'Insee a servi au calcul des valeurs corrigées de l'inflation.

## Graphique de l'évolution du tarif de la cotisation au Conseil de l'Ordre des médecins

{{< figure-chart title="Évolution du tarif de la cotisation ordinale des médecins de 2001 à 2025. Valeurs faciales et valeurs corrigées de l'inflation (bleu clair). Dr JB Fron d'après cotisations CNOM et dernières valeurs Insee" >}}

<script>
const chartOptions1 = {
  // https://www.insee.fr/fr/information/2417794
  series: [{
    name: 'Euros courants',
    data: [214, 219, 227, 235, 245, 252, 260, 275, 290, 295, 300, 300, 300, 305, 320, 330, 333, 335, 335, 335, 335, 335, 340, 353, 364]
  }, {
    name: 'Euros 2024',
    data: [315.78, 316.92, 321.88, 326.28, 333.97, 338.01, 343.63, 353.51, 372.47, 373.21, 371.69, 364.56, 361.41, 365.6, 383.42, 394.7, 394.19, 389.37, 385.11, 383.27, 377.08, 358.36, 346.8, 353, null]
  }],
  chart: { type: 'line' },
  stroke: { colors: ['#717cf8', '#4150f5'], curve: 'smooth', width: 3 },
  title: { text: 'Évolution de la cotisation ordinale des médecins de 2001 à 2025' },
  xaxis: {
    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
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
    y: [{ formatter: function(value) { return `${value} €` } },
      { formatter: function(value) { return `${value} €` } }
    ]
  },
  theme: {
    monochrome: { enabled: true }
  }
}
</script>
