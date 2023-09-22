+++
title = "Les sociétés savantes de médecine"
description = "TODO:"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-09-22T15:57:00+02:00"
publishdate = "2023-09-22"
lastmod = "2023-09-22"
specialites = []
annees = "2023"
sources = []
tags = []
draft = true
imageSrc = "TODO:"
datatable = true
todo = "ESH"
+++

TODO:
{.lead}

## Tableau des sociétés savantes en médecine



<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Sociétés savantes en médecine."}</script>
<table id="societies" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Sociétés savantes en médecine. Dr JB Fron.</caption>
<thead>
  <tr>
    <th scope="col">Organisation</th>
    <th scope="col">Abréviation</th>
    <th scope="col">Spécialité</th>
    <th scope="col">Type</th>
    <th scope="col">Actualités</th>
    <th scope="col">Flux RSS</th>
    <th scope="col">Publications</th>
    <th scope="col">Publications RSS</th>
    <th scope="col">Social</th>
  </tr>
</thead>
</table>

<script>
window.addEventListener('load', () => {
  $(function () {
    $('#societies').DataTable({
      ajax: '/data/societes-savantes.json',
      columns: [
        { data: 'Organisation' },
        { data: 'Abréviation' },
        { data: 'Spécialité' },
        { data: 'Type' },
        { data: 'Actualités' },
        { data: 'RSS' },
        { data: 'Publications ouvertes' },
        { data: 'Publications RSS' },
        { data: 'Social' }
      ]
    })
  })
})
</script>
