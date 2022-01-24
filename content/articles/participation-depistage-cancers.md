+++
title = "Participation aux dépistages des cancers en France"
description = "Les français et leur taux de participation au dépistage généralisé des cancers"
auteurs = ["Jean-Baptiste FRON"]
date = 2021-08-15T19:54:00+02:00
publishdate = 2021-08-18
lastmod = 2021-12-06
specialites = []
sources = ["SPF"]
tags = ["cancer"]
draft = false
chart = true
image = false
imageSrc = ""
todo= ""
+++

### Résumé

Plusieurs cancers bénéficient en France d'un dépistage généralisé. Il s'agit de cancers fréquents et graves du sein, du col de l'utérus et colorectal.

Pourtant plus le cancer tue, moins les français participent à sa prévention.  
Ainsi, le cancer colorectal, responsable de 18.000 décès annuels n'est recherché que par 30% des français.  
Le taux de participation maximal, de 59%, concerne le cancer du col de l'utérus, responsable pour sa part de 1100 décès annuels.

Pour tous les dépistages, le taux de participation reste très en-dessous des attentes de santé publique.

### Graphique

<figure>
  <div id="chart" class="border alert mb-4"></div>
  <figcaption>Figure. Données de participation au dépistage organisé des cancers et mortalité 2017 (dépistages: col 2012-2017 - sein 2018-2019 - colorectal 2018-2019). Utilisation des données 2019 du fait de la pandémie. Dr JB Fron d'après dernières données SPF.</figcaption>
</figure>

### Sources

- [Jéhannin-Ligier K et al. Projection de l’incidence et de la mortalité par cancer en France métropolitaine en 2017. Rapport technique. Saint-Maurice : Santé publique France, 2017. 80 p.](https://www.santepubliquefrance.fr/docs/projection-de-l-incidence-et-de-la-mortalite-par-cancer-en-france-metropolitaine-en-2017)
- [Hamers FF, Jezeweski-Serra D. Couverture du dépistage du cancer du col de l’utérus en France, 2012-2017. Bull Epidémiol Hebd. 2019;(22-23):417-23.](http://beh.santepubliquefrance.fr/beh/2019/22-23/2019_22-23_2.html)
- [Santé Publique France. Taux de participation au programme de dépistage organisé du cancer du sein 2018-2019 et évolution depuis 2005.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-sein/articles/taux-de-participation-au-programme-de-depistage-organise-du-cancer-du-sein-2018-2019-et-evolution-depuis-2005)
- [Santé Publique France. Taux de participation au programme de dépistage organisé de cancer colorectal 2018-2019. Mai 2020.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-colon-rectum/articles/taux-de-participation-au-programme-de-depistage-organise-du-cancer-colorectal-2018-2019)

<script>
const chartOptions = {
  series: [{
    name: 'Participation',
    type: 'column',
    data: [58.7, 49.3, 30.5]
  }, {
    name: 'Mortalité',
    type: 'column',
    data: [1084, 11883, 17684]
  }],
  dataLabels: {
    formatter: function (val, opts) {
      return val + "%"
      }
  },
  chart: {},
  title: { text: 'Taux de participation au dépistage des cancers en 2022' },
  xaxis: {
    categories: ['Col de l\'utérus', 'Sein', 'Côlon-rectum'],
  },
  yaxis: [
    {
      title: {
        text: "Participation (%)",
        style: { color: '#4150f5' }
      },
      labels: {
        style: { colors: '#757575' }
      }
    },
    {
      seriesName: 'Mortalité',
        opposite: true,
        decimalsInFloat: false,
        title: {
          text: "Mortalité annuelle",
          style: {color: '#ffa600'}
        },
        labels: {
        style: { colors: '#757575' }
      }
    }
  ],
  tooltip: {
    x: { show: true },
    y: [{
      formatter: function(value) {
        return value + '%'
      }
    },
    {
      formatter: function(value) {
        return value + ' décès/an'
      }
    }]
  }
}
</script>
