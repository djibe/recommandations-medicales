+++
title = "Évolution du tarif des consultations des médecins généralistes"
titleSeo = "Évolution du tarif de la consultation du généraliste"
description = "Évolution du prix d'une consultation d'un médecin généraliste sur 40 ans (honoraires en secteur 1), de 1980 à 2023, corrigée de l'inflation"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2022-01-23T14:00:00+02:00"
publishdate = "2022-01-27"
lastmod = "2024-05-01"
specialites = []
annees = "2024"
sources = ["CNAM", "CARMF", "Insee"]
tags = []
chart = true
image = true
imageSrc = "storyset / Freepik"
todo = "écriture SEO, Éléments cliquables trop rapprochés | KEY x3: consultations, médecin, médecins généralistes, consultation médicale, médecin traitant, tiers payant, augmentation des tarifs réglementés, assurance maladie, assurés, euro par consultation, patients | x1: prix d'une consultation, consultations chez le médecin, prix d'une visite, montant, médecine générale, sécurité sociale, revalorisation, évolution des prix, consultation classique; https://www.ofce.sciences-po.fr/pdf/ebook/ebook121.pdf; https://www.insee.fr/fr/outil-interactif/5369554/series-longues-dans-le-secteur-prive, https://www.pourquoidocteur.fr/Articles/Question-d-actu/21060-Consultation-revenus-generalistes-les-faibles-d-Europe, https://francais.medscape.com/voirarticle/3609481?src=WNL_mdplsfeat_221221_mscpedit_fr&uac=413635SY&impID=5012922&faf=1"
+++

Cet article est réalisé dans le but de disposer d'une série longue sur l'évolution des tarifs des consultations des médecins généralistes de 1980 à 2023 en France métropolitaine, n'ayant pas trouvé d'article complet sur le sujet.
{.lead}

Le prix de la consultation de médecine générale était de 21 euros en 1980 (en euros constants). Le montant augmente progressivement jusqu'en 2017 où il atteignait 29 euros avant de redescendre rapidement jusqu'à 25 euros en 2023, montant auparavant atteint en 1992 (et proche de 1987).

## Évolution du prix des consultations en médecine générale

Les *conventions médicales* fixent les prix des consultations pour les 5 années à venir. Ainsi, la dernière revalorisation du barème de la consultation du généraliste par signature de la convention a eu lieu en 2017, avec un tarif affiché à 25€. Une augmentation de 1,5€ de la consultation a été décrétée en 2023 par arbitrage, la Convention n'obtenant pas la signature des syndicats de médecins.

Avec la forte inflation démarrée en 2022, la consultation du généraliste, toujours affichée 25€ en 2023 (jusqu'en novembre), atteignait la valeur de la consultation en **1992** (en euros constants).
{.alert .alert-info}

## Graphique de l'historique des honoraires médicaux des médecins généralistes conventionnés secteur 1

{{< figure-chart title="Évolution du prix d'une consultation chez le médecin généraliste en secteur 1 de 1980 à 2023 en France métropolitaine. Valeurs faciales et valeurs corrigées de l'inflation. Dr JB Fron d'après [CARMF 2022 (PDF)](http://www.carmf.fr/doc/publications/chronologie/2022/chronologie-2022.pdf), [Mayneris 2004 (PDF)](http://piketty.pse.ens.fr/fichiers/enseig/memothes/DeaMayneris2004.pdf) et [Insee](https://www.insee.fr/fr/information/2417794)" >}}

<script>
const chartOptions1 = {
  // https://www.insee.fr/fr/information/2417794
  series: [{
    name: 'Euros 2023',
    data: [21.02, 23.71, 21.20, 22.86, 22.92, 23.21, 24.11, 24.84, 24.19, 23.35,
     23.91, 23.16, 25.15, 24.63, 25.44, 26.16, 25.65, 25.35, 26.34, 26.2,
      25.78, 25.36, 28.37, 27.80, 27.22, 26.73, 27.62, 28.51, 27.73, 27.70,
       27.29, 27.94, 27.40, 27.16, 27.03, 27.02, 26.97, 29.01, 28.49,
        28.18, 28.04, 27.59, 26.22, 25]
  },
  {
    name: 'Euros courants',
    data: [7.01, 7.97, 8.48, 9.76, 10.39, 11.11, 11.46, 12.45, 12.96, 12.96, 13.53, 13.72, 13.72, 15.24, 15.63, 16.65, 16.77, 16.77, 17.34, 17.53, 17.53, 17.53, 20, 20, 20, 20, 21, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 25, 25, 25, 25, 25, 25, 25]
  }],
  chart: { type: 'line' },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#717cf8'], curve: 'smooth', width: 3 },
  title: { text: 'Honoraires de la consultation d’un médecin généraliste en secteur 1' },
  xaxis: {
    categories: [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
     1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
       2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022, 2023],
    tickAmount: 22
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
      text: 'Passage à l’euro',
      }
    }]
  }
}
</script>

{{%collapse "Données utilisées" %}}

### Tarifs des consultations en francs

Les données du prix des consultations chez le médecin sont téléchargeables depuis le graphique.

Pour le graphique avant 2002, les francs français ont été convertis avec l'outil [Convertisseur franc-euro de l'Insee](https://www.insee.fr/fr/information/2417794).

{{< table title="Prix de la consultation médicale des médecins généralistes conventionnée Secteur 1 en Francs et en Euros 2021 de 1980 à 2001. Dr JB Fron d'après *Mayneris 2004* et *Insee*" >}}
| Année | Consultation (Francs) | C (Euros 2021) |
|-------|----------------------:|---------------:|
| 1980  |                    43 |          19.05 |
| 1981  |                    55 |          21.49 |
| 1982  |                    55 |          19.22 |
| 1983  |                    65 |          20.72 |
| 1984  |                    70 |          20.77 |
| 1985  |                    75 |          21.03 |
| 1986  |                    80 |          21.85 |
| 1987  |                    85 |          22.51 |
| 1988  |                    85 |          21.92 |
| 1989  |                    85 |          21.16 |
| 1990  |                    90 |          21.67 |
| 1991  |                    90 |          20.98 |
| 1992  |                   100 |          22.79 |
| 1993  |                   100 |          22.32 |
| 1994  |                   105 |          23.06 |
| 1995  |                   110 |          23.71 |
| 1996  |                   110 |          23.24 |
| 1997  |                   110 |          22.97 |
| 1998  |                   115 |          23.86 |
| 1999  |                   115 |          23.74 |
| 2000  |                   115 |          23.36 |
| 2001  |                   115 |          22.98 |
{{< /table >}}

### Patients en affection de longue durée (ALD)

**NB.** Un patient peut avoir plusieurs ALD mais la charge en soins est identique.

{{< table title="Patients du régime général (France entière) en ALD (30, 31 ou 32) de 2008 à 2022 et évolution (base 100 en 2008). Dr JB Fron d'après l'*Assurance Maladie*" >}}
| Année | Effectif (millions) | Évolution (%) |
|-------|--------------------:|--------------:|
| 2008  |               8,286 |           100 |
| 2009  |               8,637 |           104 |
| 2010  |               8,983 |           108 |
| 2011  |               9,237 |           111 |
| 2012  |               9,460 |           114 |
| 2013  |               9,660 |           117 |
| 2014  |               9,864 |           119 |
| 2015  |              10,099 |           122 |
| 2016  |              10,390 |           125 |
| 2017  |              10,737 |           130 |
| 2018  |              11,110 |           134 |
| 2019  |              11,402 |           138 |
| 2020  |              12,068 |           146 |
| 2021  |              12,131 |           146 |
| 2022  |              12,344 |           149 |
{{< /table >}}

> -- *[Assurance Maladie. Effectif, prévalence et caractéristiques des bénéficiaires d'une ALD - 2008 à 2022. 20/11/2023](https://assurance-maladie.ameli.fr/etudes-et-donnees/prevalence-beneficiaires-ald)*

### Population de plus de 60 ans

{{< table title="Part de la population de plus de 60 ans en France métropolitaine de 1980 à 2024 et évolution (base 100 en 1980). Dr JB Fron d'après *Insee*" >}}
| Année | Proportion (%) |     Évolution |
|-------|---------------:|--------------:|
| 1980  |             17 |           100 |
| 1990  |             19 |           112 |
| 2000  |           20,6 |           121 |
| 2010  |           22,8 |           134 |
| 2015  |           24,8 |           146 |
| 2018  |           25,9 |           152 |
| 2021  |             27 |           159 |
| 2014  |             28 |           165 |
{{< /table >}}

> -- *[Insee. Pyramide des âges ai 1er janvier. 2024.](https://www.insee.fr/fr/outil-interactif/5014911/pyramide.htm#!&t=1)*

{{% /collapse %}}
