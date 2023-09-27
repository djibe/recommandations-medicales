+++
title = "Les sociétés savantes de médecine"
description = "Tableau et liste des sociétés savantes de médecine: ESC, ESH, CMG, SFD, HAS, HCSP ... Accéder à leurs actualités , suivre leurs flux RSS et réseaux sociaux"
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
imageSrc = "des sociétés savantes de médecine / unDraw"
datatable = true
todo = "ESH, SFC"
+++

De très nombreuses sociétés savantes médicales existent et publient régulièrement des recommandations. Afin d'améliorer la diffusion de leurs publications, RecoMédicales liste les sociétés savantes de renom avec les liens vers leurs contenus (publications, actualités, réseaux sociaux).
{.lead}

## Tableau des sociétés savantes de médecine

TODO:

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Sociétés savantes de médecine."}</script>
<table id="societies" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Sociétés savantes de médecine. Dr JB Fron.</caption>
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
      ],
      "columnDefs": [{
        "targets": 4,
        "render": function ( data, type, row, meta ) {
          return '<a href="'+data+'" target="_blank" rel="external nofollow noopener">'+data+'</a>';
        }
      },
      {
        "targets": 5,
        "render": function ( data, type, row, meta ) {
          if (data != 'No') {return '<a href="'+data+'" target="_blank" rel="external nofollow noopener">'+data+'</a>'}else {return data};
        }
      },
      {
        "targets": 6,
        "render": function ( data, type, row, meta ) {
          return '<a href="'+data+'" target="_blank" rel="external nofollow noopener">'+data+'</a>';
        }
      },
      {
        "targets": 7,
        "render": function ( data, type, row, meta ) {
          if (data != 'No') {return '<a href="'+data+'" target="_blank" rel="external nofollow noopener">'+data+'</a>'}else {return data};
        }
      },
      {
        "targets": 8,
        "render": function ( data, type, row, meta ) {
          return '<a href="'+data+'" target="_blank" rel="external nofollow noopener">'+data+'</a>';
        }
      }]
    })
  })
})
</script>
