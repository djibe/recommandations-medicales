+++
title = "Participation des Français au dépistage organisé des cancers (colorectal, sein et col de l'utérus)"
noindex = true
noSearchContent = true
titleSeo = "Participation des Français au dépistage des cancers"
description = "Taux de participation des Français au dépistage organisé des cancers du sein (mammographie), du cancer colorectal (test fécal) et du cancer du col de l'utérus"
auteurs = ["Jean-Baptiste FRON"]
date = "2021-08-15T19:54:00+02:00"
publishdate = "2021-08-18"
lastmod = "2025-07-09"
specialites = []
annees = "2025"
sources = ["Santé Publique France"]
tags = ["cancer"]
chart = true
image = true
imageSrc = "du dépistage des cancers par starline / Freepik"
todo = "update 2026, https://www.cancer.fr/personnes-malades/les-cancers - ### Le dépistage organisé des cancers | KEY x10: dépistage du cancer | x3: cancer du sein, mammographie de dépistage, dépistage organisé, participation au dépistage, assurance maladie, décès par cancer, dépistage individuel, données, facteurs de risque, programme de dépistage | x1: ATCD personnel de cancer, avance de frais, consultation d'oncogénétique, courrier d'invitation, prise en charge thérapeutique, tranches d'âge"
+++

Trois cancers bénéficient en France d'un **dépistage organisé** par l'*Assurance Maladie* et sont remboursés à 100 % par l'*Assurance Maladie*. Il s'agit de cancers fréquents et graves, dont deux concernent exclusivement les femmes: les [cancers du sein]({{% relref "cancer-sein.md" %}}) et du [col de l'utérus]({{% relref "cancer-col-uterus.md" %}}), ainsi que le [cancer colorectal]({{% relref "cancer-colorectal.md" %}}) pour tous de 50 à 74 ans.
{.lead}

Pourtant, plus le cancer tue, moins les Français participent à sa prévention par le dépistage. Ainsi, le cancer colorectal, responsable de 16.975 décès annuels (2022, 2^e^ en mortalité) n'est recherché que par **29,6 %** des Français.

Le taux maximal de participation au dépistage, qui atteint 59,5 %, concerne le cancer du col de l'utérus, responsable pour sa part de 836 décès annuels (métropole 2022).

Pour tous les dépistages, les taux de participation restent très en-dessous des attentes de santé publique.

**NB.** La liste des patients n'ayant pas participé au dépistage organisé d'un cancer est désormais disponible depuis *AmeliPro* (*[Ameli Médecin](https://www.ameli.fr/medecin/actualites/la-liste-des-patients-n-ayant-pas-realise-leurs-depistages-de-cancers-est-disponible-dans-amelipro)*).

## Graphique de la participation au dépistage organisé des cancers et décès par cancer

Représentation des taux de participation aux dépistages organisés des cancers et mortalité associée à ces cancers.

{{< figure-chart title="Participation au dépistage organisé des cancers par les Français (dépistages: col 2020-2022 - sein 2023-2024 - colorectal 2023-2024). Dr JB Fron d'après dernières données Santé Publique France" >}}

## Sources

- [INCa. Panorama des cancers en France 2025, édition spéciale 20 ans. 2025.](https://www.cancer.fr/catalogue-des-publications/panorama-des-cancers-en-france-2025-edition-speciale-20-ans)
- [Santé Publique France. Participation au programme de dépistage organisé du cancer du col de l’utérus. Année 2023 et évolution depuis 2017. 2025.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-col-de-l-uterus/documents/bulletin-national/participation-au-programme-de-depistage-organise-du-cancer-du-col-de-l-uterus.-annee-2023-et-evolution-depuis-2017)
- [Taux de participation au programme de dépistage organisé du cancer du sein 2022-2023 et évolution depuis 2005. Santé Publique France. 2024.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-sein/articles/taux-de-participation-au-programme-de-depistage-organise-du-cancer-du-sein-2022-2023-et-evolution-depuis-2005)
- {{< references/beh-cancers-incidence >}}
- [Santé Publique France. Cancer colorectal : un taux de participation aux tests de dépistage stable en 2021-2022. 23/03/2023.](https://www.santepubliquefrance.fr/les-actualites/2023/cancer-colorectal-un-taux-de-participation-aux-tests-de-depistage-stable-en-2021-2022)
- [Santé Publique France. Cancer du côlon rectum : données. Mars 2022.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/cancers/cancer-du-colon-rectum/donnees)
- [Jéhannin-Ligier K, et al. Projection de l'incidence et de la mortalité par cancer en France métropolitaine en 2017. Rapport technique. Santé publique France. 2017.](https://www.santepubliquefrance.fr/docs/projection-de-l-incidence-et-de-la-mortalite-par-cancer-en-france-metropolitaine-en-2017)
- [Santé Publique France. Cancer du col de l'utérus : la couverture du dépistage et de la vaccination doivent progresser pour une meilleure prévention. Janvier 2022.](https://www.santepubliquefrance.fr/presse/2022/cancer-du-col-de-l-uterus-la-couverture-du-depistage-et-de-la-vaccination-doivent-progresser-pour-une-meilleure-prevention)

<script>
const chartOptions1 = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'Participation',
    type: 'column',
    data: [59.5, 46.3, 29.6]
  }, {
    name: 'Mortalité',
    type: 'column',
    data: [836, 12757, 16975]
  }],
  title: { text: 'Taux de participation au dépistage des cancers en 2026' },
  xaxis: { categories: ['Col de l’utérus', 'Sein', 'Côlon-rectum'] },
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
    y: [
      { formatter: function(value) { return value + '%' }},
      { formatter: function(value) { return value + ' décès/an' }}
    ]
  }
}
</script>
