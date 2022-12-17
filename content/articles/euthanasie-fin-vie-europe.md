+++
title = "Place de l'euthanasie et de la fin de vie en Europe"
description = "TODO:"
auteurs = ["Jean-Baptiste FRON"]
date = "2022-12-16T12:20:00+02:00"
publishdate = "2022-12-16"
lastmod = "2022-12-16"
specialites = []
sources = ["CNOM"]
tags = []
geochart = true
image = false
imageSrc = ""
todo = "Check json+ld"
+++

## Résumé de l'article

TODO:

## Place en Europe des pays offrant une aide à mourir

{{< figure-chart id="geochart" title="XXX. Dr JB Fron d'après cotisations CNOM" >}}

<script>
function drawRegionsMap() {
  var geoData = google.visualization.arrayToDataTable([
    ['Country', 'Réglementation'],
    ['Austria', 1],
    ['Belgium', 2],
    ['Croatia', 0],
    ['Czech Republic', 0],
    ['Denmark', 0],
    ['Finland', 0],
    ['France', 0],
    ['Germany', 0],
    ['Greece', 0],
    ['Ireland', 0],
    ['Italy', 0],
    ['Luxembourg', 3],
    ['Netherlands', 3],
    ['Norway', 0],
    ['Portugal', 1],
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
