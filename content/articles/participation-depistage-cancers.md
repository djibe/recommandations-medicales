+++
title = "Participation au dépistage des cancers"
description = "Taux de participation des français au dépistage organisé des cancers: mammographies, frottis du cols de l'utérus et test immunologique fécal"
auteurs = ["Jean-Baptiste FRON"]
date = "2021-08-15T19:54:00+02:00"
publishdate = "2021-08-18"
lastmod = "2022-03-16"
specialites = []
sources = ["SPF"]
tags = ["cancer"]
chart = true
image = false
imageSrc = ""
todo = "### Le dépistage organisé des cancers | Trois cancers bénéficient en France d'un dépistage organisé par l'Institut National du Cancer (INCa) et remboursés à 100% par l'Assurance Maladie. Deux dépistages concernent les femmes. KEY x10: dépistage du cancer | x3: cancer du sein, mammographie de dépistage, dépistage organisé, participation au dépistage, assurance maladie, décès par cancer, dépistage individuel, données, facteurs de risque, programme de dépistage | x1: ATCD personnel de cancer, avance de frais, consultation d'oncogénétique, courrier d'invitation, prise en charge thérapeutique, tranches d'âge"
+++

### Résumé

Plusieurs cancers bénéficient en France d'un dépistage généralisé. Il s'agit de cancers fréquents et graves, le cancer du sein, du col de l'utérus et colorectal.

Pourtant plus le cancer tue, moins les français participent à sa prévention.  
Ainsi, le cancer colorectal, responsable de 17.000 décès annuels n'est recherché que par 35% des français.  
Le taux de participation au dépistage maximal, qui atteint 59%, concerne le cancer du col de l'utérus, responsable pour sa part de 1100 décès annuels.

Pour tous les dépistages, les taux de participation restent très en-dessous des attentes de santé publique.

### Graphique de la participation au dépistage organisé des cancers et décès par cancer

<figure>
  <div id="chart" class="border alert mb-4"></div>
  <figcaption>Figure. Données de participation au dépistage organisé des cancers et mortalité 2017 (dépistages: col 2018-2020 - sein 2018-2019 - colorectal 2020-2021). Utilisation des données 2019 du fait de la pandémie. Dr JB Fron d'après dernières données SPF.</figcaption>
</figure>

### Sources

- [Santé Publique France. Cancer du côlon rectum : données. Mars 2022.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-colon-rectum/donnees)
- [Jéhannin-Ligier K et al. Projection de l'incidence et de la mortalité par cancer en France métropolitaine en 2017. Rapport technique. Saint-Maurice : Santé publique France, 2017. 80 p.](https://www.santepubliquefrance.fr/docs/projection-de-l-incidence-et-de-la-mortalite-par-cancer-en-france-metropolitaine-en-2017)
- [Santé Publique France. Cancer du col de l'utérus : la couverture du dépistage et de la vaccination doivent progresser pour une meilleure prévention. Janvier 2022.](https://www.santepubliquefrance.fr/presse/2022/cancer-du-col-de-l-uterus-la-couverture-du-depistage-et-de-la-vaccination-doivent-progresser-pour-une-meilleure-prevention)
- [Santé Publique France. Taux de participation au programme de dépistage organisé du cancer du sein 2018-2019 et évolution depuis 2005.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-sein/articles/taux-de-participation-au-programme-de-depistage-organise-du-cancer-du-sein-2018-2019-et-evolution-depuis-2005)

<script>
const chartOptions = {
  series: [{
    name: 'Participation',
    type: 'column',
    data: [59, 49.3, 34.6]
  }, {
    name: 'Mortalité',
    type: 'column',
    data: [1084, 11883, 17117]
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
