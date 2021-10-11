+++
title = "Participation aux dépistages des cancers en France"
prefix = ""
shortname = ""
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2021-08-15T19:54:00+02:00
publishdate = 2021-08-18
lastmod = 2021-08-18
specialites = []
sources = ["SPF"]
tags = ["cancer"]
sctid = "11381005"
draft = false
chart = true
image = false
imageSrc = ""
todo= ""
+++

Plus le cancer tue, moins les français participent à sa prévention.

<div id="chart" class="border alert mb-4"></div>

> {{%class "typography-body-2 text-black-secondary" %}}Figure. Données de participation (col 2012-2017 - sein 2018-2019 - colorectal 2018-2019) et de mortalité 2017. Utilisation des données 2019 du fait de la pandémie. Dr JB Fron d'après dernières données SPF.{{%/class%}}

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
  title: { text: 'Taux de participation au dépistage des cancers en 2021' },
  // subtitle: { text: 'Dr JB FRON d\'après dernières données SPF' },
  xaxis: {
    categories: ['Col de l\'utérus', 'Sein', 'Côlon-rectum'],
  },
  yaxis: [
    {
      labels: { style: { colors: '#4150f5' }},
      title: {
        text: "Participation (%)",
        style: { color: '#4150f5' }
      }
    },
    {
      seriesName: 'Mortalité',
        opposite: true,
        decimalsInFloat: false,
        labels: {style: {colors: '#ffa600'}},
        title: {
          text: "Mortalité annuelle",
          style: {color: '#ffa600'}}
    }
  ],
  tooltip: {
    style: { fontSize: '14px' },
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
