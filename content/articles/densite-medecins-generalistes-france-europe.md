+++
title = "Comparaison de la densité de médecins généralistes en France et en Europe"
description = "La densité de médecins généralistes rapportés à la population est très variable dans l’Union Européenne. Comparaison des taux de généralistes selon les pays européens."
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2026-03-16T21:13:00+02:00"
publishdate = "2026-03-17"
lastmod = "2026-03-17"
specialites = []
annees = "2023"
sources = []
tags = []
image = true
imageSrc = "par Freepik"
todo = "update 2026"
chart = true
+++

Les données sur la densité des médecins généralistes en Europe sont publiées par Eurostat. Cet article reprend les densités concernant les grands pays de l'Union Européenne (Allemagne, Italie, Espagne), ainsi que les pays similaires (Belgique) et les pays nordiques, souvent mis en avant pour leur protection sociale.
{.lead}

## La densité des médecins généralistes en Europe {.mt-5}

Le **Portugal** est le pays avec la plus forte concentration de médecins généralistes, il s'établit en première place avec 308 généralistes pour 100.000 habitants (/100k hab). Il est suivi par les Pays-Bas, avec une différence conséquente, à 181/100k.

**La France occupe la 3^e^ position** de la densité de médecins généralistes, avec 139 médecins généralistes pour 100.000 habitants. La Belgique, proche dans son organisation du système de santé, dispose elle de 123,5 généralistes/100k hab.

Les autres grands pays d'Europe ont nettement moins de médecins généralistes, **106 généralistes pour 100.000 habitants en Allemagne**, 100 en Italie et 94,7 en Espagne.

Enfin, le **Danemark** se démarque nettement des autres pays, est le plus faiblement doté (69 généralistes/100k hab) et compte ainsi 2 fois moins de généralistes qu'en France (4,5 fois moins qu'au Portugal).

> **NB.** Eurostat comptabilise 95.095 généralistes pour la France en 2023, [nettement plus que le CNOM]({{% relref "nombre-medecins-activite-france.md" %}}) (Conseil National de l'Ordre des Médecins), qui en dénombrait 82.058 en activité régulière en 2023 (soit presque 14 % d'écart). En prenant la densité selon le CNOM avec 64,8 millions d'habitants (2023), la densité réelle de généralistes s'établissait à **120 généralistes/100k habitants**.

{{< figure-chart title="Densité de médecins généralistes dans divers pays européens, dont la France, pour 100.000 habitants. Dr JB Fron d'après *Eurostat 2025* (données 2023) et *CNOM*" >}}

### Divergences des fonctionnements des systèmes de santé {.mt-5}

Ce graphique révèle d'importantes disparités sur la cohorte de médecins généralistes en Europe, traduisant des **organisations variées des systèmes de soins** avec l'implication d'autres intervenants que les médecins généralistes (assistants médicaux, infirmiers, infirmiers de pratique avancée ...).

## Source

- [Eurostat. Physicians, by speciality, 2023. 2025.](https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Healthcare_personnel_statistics_-_physicians) (Tableau hlth_rs_prs2 on data 2023)

<script>
const chartOptions1 = {
  series: [{
    name: 'Densité',
    data: [
    { x: 'Portugal', y: 307.85},
    { x: 'Pays-Bas', y: 181.32},
    { x: 'France', y: 139.08, fillColor: '#ff2b6e'},
    { x: 'Finlande', y: 125.99},
    { x: 'Belgique', y: 123.56},
    { x: 'France (CNOM)', y: 119.97, fillColor: '#ff2b6e'},
    { x: 'Allemagne', y: 106.07},
    { x: 'Pologne', y: 104.95},
    { x: 'Norvège', y: 104.81},
    { x: 'Italie', y: 100.42},
    { x: 'Espagne', y: 94.76},
    { x: 'Danemark', y: 68.93},
    ]
  }],
  chart: { type: 'bar', height: 480 },
  plotOptions: { bar: { horizontal: true } },
  title: { text: 'Comparaison de la densité des médecins généralistes en Europe' },
  xaxis: { title: { text: 'Densité de généralistes (/100k hab)' }, max: 350 },
  tooltip: {
    y: [
      { formatter: function(value) { return value + ' pour 100k hab' }}
    ]
  }
}
</script>
