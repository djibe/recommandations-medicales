+++
title = "Participation des Français au dépistage organisé des cancers (colorectal, sein et col de l'utérus)"
noindex = true
titleSeo = "Participation des Français au dépistage des cancers"
description = "Taux de participation des Français au dépistage organisé des cancers du sein (mammographie), du cancer colorectal (test fécal) et du cancer du col de l'utérus"
auteurs = ["Jean-Baptiste FRON"]
date = "2021-08-15T19:54:00+02:00"
publishdate = "2021-08-18"
lastmod = "2022-09-14"
specialites = []
sources = ["SPF"]
tags = ["cancer"]
chart = true
image = false
imageSrc = ""
todo = "https://www.e-cancer.fr/Patients-et-proches/Les-cancers - ### Le dépistage organisé des cancers | Trois cancers bénéficient en France d'un dépistage organisé par l'Institut National du Cancer (INCa) et remboursés à 100% par l'Assurance Maladie. Deux dépistages concernent les femmes - KEY x10: dépistage du cancer | x3: cancer du sein, mammographie de dépistage, dépistage organisé, participation au dépistage, assurance maladie, décès par cancer, dépistage individuel, données, facteurs de risque, programme de dépistage | x1: ATCD personnel de cancer, avance de frais, consultation d'oncogénétique, courrier d'invitation, prise en charge thérapeutique, tranches d'âge"
+++

## Résumé

Trois cancers bénéficient en France d'un dépistage organisé. Il s'agit de cancers fréquents et graves: le [cancer du sein]({{< relref "cancer-sein.md" >}}), du [col de l'utérus]({{< relref "cancer-col-uterus.md" >}}) et du [cancer colorectal]({{< relref "cancer-colorectal.md" >}}).

Pourtant plus le cancer tue, moins les Français participent à sa prévention par le dépistage.  
Ainsi, le cancer colorectal, responsable de 17.000 décès annuels (2<sup>e</sup> en mortalité) n'est recherché que par **35%** des Français.  
Le taux maximal de participation au dépistage, qui atteint 59%, concerne le cancer du col de l'utérus, responsable pour sa part de 1100 décès annuels.

Pour tous les dépistages, les taux de participation restent très en-dessous des attentes de santé publique.

## Graphique de la participation au dépistage organisé des cancers et décès par cancer

Représentation des taux de participation aux dépistages organisés des cancers et mortalité associée à ces cancers.

<figure class="figure-chart">
  <div id="chart"></div>
  <figcaption>Figure. Données de participation au dépistage organisé des cancers et mortalité 2017 (dépistages: col 2018-2020 - sein 2020-2021 - colorectal 2020-2021). Dr JB Fron d'après dernières données Santé Publique France.</figcaption>
</figure>

## Sources

- [Santé Publique France. Dépistage du cancer du sein : quelle participation des femmes en 2021 ? 2022.](https://www.santepubliquefrance.fr/les-actualites/2022/depistage-du-cancer-du-sein-quelle-participation-des-femmes-en-2021)
- [Santé Publique France. Cancer colorectal : données de dépistage 2020-2021. 15/03/2022.](https://www.santepubliquefrance.fr/les-actualites/2022/cancer-colorectal-donnees-de-depistage-2020-2021)
- [Santé Publique France. Cancer du côlon rectum : données. Mars 2022.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-colon-rectum/donnees)
- [Jéhannin-Ligier K et al. Projection de l'incidence et de la mortalité par cancer en France métropolitaine en 2017. Rapport technique. Santé publique France. 2017.](https://www.santepubliquefrance.fr/docs/projection-de-l-incidence-et-de-la-mortalite-par-cancer-en-france-metropolitaine-en-2017)
- [Santé Publique France. Cancer du col de l'utérus : la couverture du dépistage et de la vaccination doivent progresser pour une meilleure prévention. Janvier 2022.](https://www.santepubliquefrance.fr/presse/2022/cancer-du-col-de-l-uterus-la-couverture-du-depistage-et-de-la-vaccination-doivent-progresser-pour-une-meilleure-prevention)

<script>
const chartOptions = {
  series: [{
    name: 'Participation',
    type: 'column',
    data: [59, 50.6, 34.6]
  }, {
    name: 'Mortalité',
    type: 'column',
    data: [1084, 12146, 17117]
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
