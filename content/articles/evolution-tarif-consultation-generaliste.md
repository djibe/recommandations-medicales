+++
title = "Évolution du tarif des consultations des médecins généralistes"
titleSeo = "Évolution du tarif de la consultation du généraliste"
description = "Évolution du prix d'une consultation d'un médecin généraliste sur 40 ans (honoraires en secteur 1), de 1980 à 2022, corrigée de l'inflation"
longHtml = "true"
auteurs = ["Jean-Baptiste FRON"]
date = "2022-01-23T14:00:00+02:00"
publishdate = "2022-01-27"
lastmod = "2023-02-17"
specialites = []
sources = ["CNAM", "Insee"]
tags = []
chart = true
image = true
imageSrc = "Illustration par storyset / Freepik"
todo = "écriture SEO, Éléments cliquables trop rapprochés, cadres, temps travail, cotisations | KEY x3: consultations, médecin, médecins généralistes, consultation médicale, médecin traitant, tiers payant, augmentation des tarifs réglementés, assurance maladie, assurés, euro par consultation, patients | x1: prix d'une consultation, consultations chez le médecin, prix d'une visite, montant, médecine générale, sécurité sociale, revalorisation, évolution des prix, consultation classique; https://www.ofce.sciences-po.fr/pdf/ebook/ebook121.pdf; https://www.insee.fr/fr/outil-interactif/5369554/series-longues-dans-le-secteur-prive, https://www.pourquoidocteur.fr/Articles/Question-d-actu/21060-Consultation-revenus-generalistes-les-faibles-d-Europe, https://francais.medscape.com/voirarticle/3609481?src=WNL_mdplsfeat_221221_mscpedit_fr&uac=413635SY&impID=5012922&faf=1"
+++

## Évolution du prix des consultations en médecine générale

Publication préliminaire afin de disposer d'une série longue sur les prix des consultations des médecins généralistes de 1980 à 2022, n'ayant pas trouvé d'article complet sur le sujet.

Les *conventions médicales* fixent les prix des consultations pour les 5 années à venir. Ainsi, la dernière revalorisation du barème de la consultation du généraliste a eu lieu en 2017, avec un tarif affiché à 25€.

Avec la forte inflation intervenue en 2022, la consultation, toujours affichée 25€ début 2023, ne vaut plus que 22,59€ de 2017, soit le prix de la consultation en 1995 en euros constants.
{.alert .alert-info}

### Éléments à retravailler sur cette page

Ce qui manque: la comparaison avec l'évolution du salaire médian des cadres (corrigé sur l'âge serait un plus, le revenu serait également mieux). En effet les jeunes cadres tirent fortement la médiane des revenus vers le bas alors que les jeunes médecins ... n'existent pas et qu'à l'inverse ils ne bénéficient d'aucune progression sur la carrière. Le temps de travail des cadres serait également intéressant.

Ce que sera délicat à traiter: l'augmentation des prélèvements obligatoires, des loyers, des revenus.

Ce qui nécessitera un autre travail: l'évolution de l'activité des praticiens, le nombre de patients en ALD par médecin en activité régulière.

## Graphique de l'historique des honoraires médicaux des médecins généralistes conventionnés secteur 1

{{< figure-chart title="Évolution du prix d'une consultation chez le médecin généraliste en secteur 1 de 1980 à 2022. Valeurs faciales et valeurs corrigées de l'inflation. Dr JB Fron d'après <a href='http://piketty.pse.ens.fr/fichiers/enseig/memothes/DeaMayneris2004.pdf' rel='external nofollow noopener'>Mayneris 2004 (PDF)</a> et <a href='https://www.insee.fr/fr/information/2417794' rel='external nofollow noopener'>Insee</a>" >}}

<script>
const chartOptions = {
  // https://www.insee.fr/fr/information/2417794
  series: [{
    name: 'Euros 2021',
    data: [19.05, 21.49, 19.22, 20.72, 20.77, 21.03, 21.85, 22.51, 21.92, 21.16, 21.67, 20.98, 22.79, 22.32, 23.06, 23.71, 23.24, 22.97, 23.86, 23.74, 23.36, 22.98, 25.71, 25.2, 24.67, 24.22, 25.02, 25.83, 25.12, 25.1, 24.73, 25.32, 24.83, 24.62, 24.49, 24.48, 24.44, 26.29, 25.81, 25.53, 25.41, 25, 23.76]
  },
  {
    name: 'Euros courants',
    data: [7.01, 7.97, 8.48, 9.76, 10.39, 11.11, 11.46, 12.45, 12.96, 12.96, 13.53, 13.72, 13.72, 15.24, 15.63, 16.65, 16.77, 16.77, 17.34, 17.53, 17.53, 17.53, 20, 20, 20, 20, 21, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 25, 25, 25, 25, 25, 25]
  }],
  chart: { type: 'line' },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#717cf8'], curve: 'smooth', width: 3 },
  title: { text: 'Honoraires des médecins généralistes en secteur 1' },
  xaxis: {
    categories: [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
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
  tooltip: { y: [{ formatter: function(value) { return `${value} €` }}] },
  theme: { monochrome: { enabled: true } },
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

{{%collapse "Données" %}}

Les données du prix des consultations chez le médecin sont téléchargeables depuis le graphique.

Pour le graphique avant 2002, les francs français ont été convertis avec l'outil [Convertisseur franc-euro de l'Insee](https://www.insee.fr/fr/information/2417794).

{{< table title="Prix de la consultation médicale des médecins généralistes conventionnée Secteur 1 en Francs et en Euros 2021 de 1980 à 2001 d'après Mayneris 2004 et Insee. Dr JB Fron" >}}
| Année | Consultation (Francs) | C (Euros 2021) |
|-------|----------------------:|---------------:|
| 1980  | 43                    | 19.05          |
| 1981  | 55                    | 21.49          |
| 1982  | 55                    | 19.22          |
| 1983  | 65                    | 20.72          |
| 1984  | 70                    | 20.77          |
| 1985  | 75                    | 21.03          |
| 1986  | 80                    | 21.85          |
| 1987  | 85                    | 22.51          |
| 1988  | 85                    | 21.92          |
| 1989  | 85                    | 21.16          |
| 1990  | 90                    | 21.67          |
| 1991  | 90                    | 20.98          |
| 1992  | 100                   | 22.79          |
| 1993  | 100                   | 22.32          |
| 1994  | 105                   | 23.06          |
| 1995  | 110                   | 23.71          |
| 1996  | 110                   | 23.24          |
| 1997  | 110                   | 22.97          |
| 1998  | 115                   | 23.86          |
| 1999  | 115                   | 23.74          |
| 2000  | 115                   | 23.36          |
| 2001  | 115                   | 22.98          |
{{< /table >}}

{{% /collapse %}}
