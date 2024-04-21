+++
title = "Comparaison de la durée des consultations en médecine générale dans le monde"
description = "Graphique et comparaison de la durée moyenne des consultations en médecine générale (soins primaires) dans le monde et en France. Les consultations en France sont parmi les plus longues"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-04-21T18:38:00+02:00"
publishdate = "2024-04-21"
lastmod = "2024-04-21"
specialites = []
annees = "2017"
sources = []
tags = []
image = true
imageSrc = "par storyset / Freepik"
chart = true
+++

Chaque pays effectue des choix pour la Santé publique qui impactent jusqu'à la durée de la consultation en soins primaires. Une équipe de chercheurs britanniques a publié en 2017 une vaste méta-analyse afin d'évaluer la durée moyenne d'une consultation chez le médecin généraliste par pays (67 pays étudiés).
{.lead}

## La durée des consultations en médecine générale dans le monde

18 pays, représentant environ 50 % de la population mondiale, ont une moyenne de consultation **inférieure à 5 minutes**. Les études ont montré que des durées aussi courtes étaient associées à une polyprescription inadaptée et à une surconsommation d'antibiotiques.

La durée moyenne de la consultation en soins primaires est extrêmement variable, allant de **1,8 minutes** au Pakistan, 2 minutes en Chine et 2,3 minutes en Inde à 22,5 minutes en Suède, 21,1 minutes aux États-Unis et 20 minutes en Bulgarie.

{{< figure-chart title="Comparaison de la durée moyenne des consultations en médecine générale (ou soins primaires) dans le monde, en minutes. Dr JB Fron d’après Irving et al 2017" >}}

La France fait partie des pays ayant la durée de consultation médicale parmi les plus longues (16 minutes, 8e rang sur 67). Une durée identique avait déjà identifiée par la *Drees* en 2006.

L'étude anglo-saxonne aborde d'ailleurs l'évolution des durées des consultations médicales qui ont augmenté dans certains pays (États-Unis). En France, elle reste remarquablement stable autour de 16 minutes.

## Les données utilisées pour mesurer la durée de consultation chez un médecin

La durée moyenne d'une consultation chez le médecin généraliste a été calculée en agrégeant les études publiées au sein de ce pays.

Si les durées de consultation étaient le plus souvent déclarées par le médecin, celles-ci semblent globalement homogènes d'une étude sur l'autre.

La réticence des médecins à enregistrer les consultations afin de mieux mesurer la durée des consultations limite la précision de la plupart des études.

## Source

- [Irving G et al. International variations in primary care physician consultation time: a systematic review of 67 countries. BMJ Open. 2017.](https://bmjopen.bmj.com/content/7/10/e017902)
- [Breuil-Genier P. La durée des séances des médecins généralistes. Études et résultats. 2006.](https://drees.solidarites-sante.gouv.fr/publications/etudes-et-resultats/la-duree-des-seances-des-medecins-generalistes)

<script>
const chartOptions1 = {
  series: [{
    name: 'Durée moyenne d’une consultation',
    data: [
    { x: 'Suède', y: 22.5},
    { x: 'États-Unis', y: 21.1},
    { x: 'Bulgarie', y: 20.0},
    { x: 'Russie', y: 17.2},
    { x: 'Suisse', y: 17.0},
    { x: 'France', y: 16.0, fillColor: '#ff2b6e'},
    { x: 'Espagne', y: 13.4},
    { x: 'Pologne', y: 10.3},
    { x: 'Japon', y: 10.2},
    { x: 'Royaume-Uni', y: 9.2},
    { x: 'Allemagne', y: 7.6},
    { x: 'Brésil', y: 7.1},
    { x: 'Irak', y: 6.3},
    { x: 'Hongrie', y: 6.0},
    { x: 'Inde', y: 2.3},
    { x: 'Chine', y: 2.0},
    { x: 'Pakistan', y: 1.8}
    ]
  }],
  chart: { type: 'bar' },
  //dataLabels: { enabled: false },
  plotOptions: { bar: { horizontal: true } },
  title: { text: 'Durée d’une consultation d’un médecin généraliste dans le monde' },
  xaxis: { title: { text: 'Minutes' } }
}
</script>
