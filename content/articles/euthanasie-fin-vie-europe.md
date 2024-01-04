+++
title = "Carte de l'euthanasie en France et en Europe en 2023"
titleSeo = "Carte de l'euthanasie en Europe 2023"
description = "Carte d'Europe des pays légalisant l'aide au suicide, l'euthanasie ou interdisant leur usage. L'euthanasie est légale dans quatre pays européens: Belgique ..."
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2022-12-16T12:20:00+02:00"
publishdate = "2023-01-26"
lastmod = "2023-03-27"
specialites = []
annees = "2023"
sources = ["CNOM"]
tags = []
geochart = true
image = true
imageSrc = "Carte d'Europe revisitée par Freepik"
todo = "https://schema.org/Map, comparatif des conditions dans les pays, SEO: euthanasie en europe carte, enthanasie pays europeen, pays europe euthanasie, stats belges: https://organesdeconcertation.sante.belgique.be/fr/documents/euthanasie-chiffres-de-lannee-2022"
+++

Alors que la France engage un débat sur l'euthanasie, son adoption en Europe et dans le monde reste marginale. À ce jour, seulement quatre pays d'Europe ont encadré le recours à l'euthanasie: le Benelux (Belgique, Pays-Bas et Luxembourg) et l'Espagne.
{.lead}

## Recours à l'euthanasie dans les pays européens

Les états européens peuvent être classés en trois groupes selon leur législation vis-à-vis de l'euthanasie: les pays interdisant tout recours permettant de mettre fin à la vie (la majorité), les pays légalisant l'assistance au suicide et les pays légalisant l'euthanasie.

### Les pays restreignant toute aide à mourir

La grande majorité des pays (bleu clair sur la carte) interdisent toute action visant à abréger la vie: assistance au suicide et euthanasie. La France en fait partie, mais entame une concertation à ce sujet.

### Les pays avec un cadre légal de l'aide au suicide

D'autres pays d'Europe, qui interdisent l'euthanasie, ont toutefois légalisé l'**assistance au suicide** (ou suicide assisté). Ils sont aujourd'hui au nombre de trois: le Portugal, la Suisse et l'Autriche.

Dans ces pays, la personne demandeuse exécute elle-même les gestes qui donneront la mort, mais avec un protocole pour le maintien de la dignité tout au long du parcours de la fin de vie.

### Les pays légalisant l'euthanasie

L'euthanasie, où un tiers enclenche la mort d'autrui dans un cadre législatif normé, est légale dans 4 pays en 2023.

Tous les pays du Benelux (Belgique, Pays-Bas et Luxembourg) ont adopté une législation encadrant l'euthanasie, ainsi que l'Espagne plus récemment (loi votée en 2020).

Le Luxembourg, les Pays-Bas et l'Espagne autorisent par ailleurs le recours au suicide assisté.

## La légalisation de l'euthanasie dans le monde

Enfin, dans le monde, seulement 11 pays (sur 195 reconnus par l'ONU) disposent d'un cadre législatif pour l'aide active à mourir (euthanasie ou assistance au suicide).

## Carte de l'euthanasie en Europe par pays

Plus précisément, statut des pays d'Europe vis-à-vis des aides actives à mourir.

{{< figure-chart id="geochart" title="Carte des pays européens ayant légalisé l'aide active à mourir (euthanasie ou assistance au suicide). Dr JB Fron d'après CNOM 2022. 0 = Interdiction; 1 = Assistance au suicide; 2 = Euthanasie; 3 = les 2" >}}

<script>
function drawRegionsMap() {
  var geoData = google.visualization.arrayToDataTable([
    ['Country', 'Réglementation'],
    ['Austria', 1],
    ['Belgium', 2],
    ['Bulgaria', 0],
    ['Croatia', 0],
    ['Cyprus', 0],
    ['Czech Republic', 0],
    ['Denmark', 0],
    ['Estonia', 0],
    ['Finland', 0],
    ['France', 0],
    ['Germany', 0],
    ['Greece', 0],
    ['Hungary', 0],
    ['Ireland', 0],
    ['Italy', 0],
    ['Latvia', 0],
    ['Lithuania', 0],
    ['Luxembourg', 3],
    ['Malta', 0],
    ['Netherlands', 3],
    ['Norway', 0],
    ['Poland', 0],
    ['Portugal', 1],
    ['Romania', 0],
    ['Slovakia', 0],
    ['Slovenia', 0],
    ['Spain', 3],
    ['Sweden', 0],
    ['Switzerland', 1],
    ['GB', 0],
  ])
  var geoOptions = {
  colorAxis: {minValue: 0,  colors: ['#ECEDFE', '#4150f5']},
  datalessRegionColor: '#fff',
  legend: {textStyle: {fontName: 'Roboto, sans-serif' }},
  region: '150',
  tooltip: {showColorCode: true}
  }
  var chart = new google.visualization.GeoChart(document.getElementById('geochart'))
  chart.draw(geoData, geoOptions)
}
</script>

## Signer le manifeste

Écrire à commissionsoignants@admd.net pour signer le manifeste pour l'aide active à mourir.
