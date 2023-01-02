+++
title = "Carte de l'euthanasie en France et en Europe"
description = "Carte d'Europe des pays adopté l'aide au suicide, l'euthanasie ou interdisant leur usage. L'euthanasie est légale dans quatre pays européens: Benelux et Espagne"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2022-12-16T12:20:00+02:00"
publishdate = "2023-01-02"
lastmod = "2023-01-02"
specialites = []
sources = ["CNOM"]
tags = []
draft = true
geochart = true
image = true
imageSrc = "Carte d'Europe revisitée par Freepik"
todo = "comparatif des conditions dans les pays, Check json+ld, SEO: euthanasie en europe carte, enthanasie pays europeen, pays europe euthanasie"
+++

## Recours à l'euthanasie dans les pays européens

Alors que la France engage un débat sur l'euthanasie, seulement quatre pays d'Europe ont déjà encadré le recours à l'euthanasie: le Benelux (Belgique, Pays-Bas et Luxembourg) et l'Espagne.
{.lead}

D'autres pays d'Europe, qui interdisent l'euthanasie, ont toutefois légalisé l'**assistance au suicide**. Ils sont aujourd'hui au nombre de trois: le Portugal, la Suisse et l'Autriche.  
Dans ces pays, la personne demandeuse exécute elle-même les gestes qui donneront la mort mais avec un protocole pour le maintien de la dignité tout au long du parcours.

Certains pays autorisent les aides actives à mourir (assistance au suicide et euthanasie). TODO:

Enfin dans le monde, seulement 11 pays (sur 195 reconnus par l'ONU) disposent d'un cadre législatif pour l'aide active à mourir (euthanasie ou assistance au suicide).

## Carte de l'euthanasie en Europe par pays

Plus précisément, statut des pays d'Europe vis à vis des aides actives à mourir.

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
