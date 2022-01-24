+++
title = "Évolution du tarif des consultations des médecins généralistes sur 40 ans"
description = "Évolution du montant d'une consultation chez le médecin généraliste de 1980 à 2021, corrigée de l'inflation."
auteurs = ["Jean-Baptiste FRON"]
date = 2022-01-23T14:00:00+02:00
publishdate = 2022-01-23
lastmod = 2022-01-23
specialites = []
sources = ["CNAM"]
tags = []
draft = true
chart = true
image = false
imageSrc = ""
todo = "Salaire médian cadre, cadre même âge, temps travail, cotisations"
+++

### Résumé

*Publication préliminaire afin de disposer d'une série longue*

### Graphique

<figure>
  <div id="chart" class="border alert mb-4"></div>
  <figcaption>Figure. Montant d'une consultation chez le médecin généraliste en secteur 1 de 1980 à 2021. Valeurs faciales et valeurs corrigées de l'inflation et évolution du salaire médian. Dr JB Fron d'après <a href="http://piketty.pse.ens.fr/fichiers/enseig/memothes/DeaMayneris2004.pdf" rel="external nofollow noopener">Mayneris</a> et <a href="https://www.insee.fr/fr/information/2417794" rel="external nofollow noopener">INSEE</a>.</figcaption>
</figure>
<script>
const chartOptions = {
  // https://www.insee.fr/fr/information/2417794
  series: [{
    name: 'Euros 2021',
    data: [19.05, 21.49, 19.22, 20.72, 20.77, 21.03, 21.85, 22.51, 21.92, 21.16, 21.67, 20.98, 22.79, 22.32, 23.06, 23.71, 23.24, 22.97, 23.86, 23.74, 23.36, 22.98, 25.71, 25.2, 24.67, 24.22, 25.02, 25.83, 25.12, 25.1, 24.73, 25.32, 24.83, 24.62, 24.49, 24.48, 24.44, 26.29, 25.81, 25.53, 25.41, 25]
  },
  {
    name: 'Euros courants',
    data: [7.01, 7.97, 8.48, 9.76, 10.39, 11.11, 11.46, 12.45, 12.96, 12.96, 13.53, 13.72, 13.72, 15.24, 15.63, 16.65, 16.77, 16.77, 17.34, 17.53, 17.53, 17.53, 20, 20, 20, 20, 21, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 25, 25, 25, 25, 25]
  }],
  chart: { type: 'line' },
  stroke: { colors: ['#4150f5'], curve: 'smooth', width: 2 },
  title: { text: 'Honoraires des médecins généralistes en secteur 1' },
  xaxis: {
    categories: [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    tickAmount: 21
  },
  yaxis: [
    {
      title: { text: "Montant (€)" },
      labels: { style: { colors: '#757575' } },
      decimalsInFloat: 0,
      min: 0
    }
  ],
  tooltip: {
    y: [{
      formatter: function(value) { return `${value} €` }
    }]
  },
  theme: {
    monochrome: { enabled: true }
  },
  annotations: {
    xaxis: [{
      x: 2002,
      strokeDashArray: 0,
      borderColor: '#e0e0e0',
      label: {
        borderColor: 'transparent',
        position: 'bottom',
        style: {
          color: '#fff',
          background: '#4150f5',
        },
      text: 'Passage à l\'euro',
      }
    }]
  }
}
</script>
