+++
title = "Les sociétés savantes de médecine"
description = "Tableau et liste des sociétés savantes de médecine: ESC, ESH, CMG, SFD, HAS, HCSP ... Accéder à leurs actualités, suivre leurs flux RSS et réseaux sociaux"
longHtml = true
noSearchContent = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-09-22T15:57:00+02:00"
publishdate = "2023-09-28"
lastmod = "2025-09-15"
specialites = []
annees = "2025"
sources = []
tags = []
image = true
imageSrc = "des sociétés savantes de médecine / unDraw"
datatable = true
todo = "rankok"
+++

De très nombreuses sociétés savantes médicales existent et publient régulièrement des recommandations et guides de bonnes pratiques.
{.lead}

Afin d'améliorer la diffusion de leurs publications, *RecoMédicales* recense les sociétés savantes et associations de renom avec les liens vers leurs contenus (actualités, publications, réseaux sociaux, flux RSS).
{.lead}

## Tableau des sociétés savantes de médecine

La liste des sociétés savantes et associations médicales suivante n'est probablement pas exhaustive. Vous pouvez rappeler ce manquement avec le bouton placé sous le tableau.

Pour chacune des sociétés savantes est référencé: la page d'actualités et le flux RSS le cas échéant, la page des recommandations et la page de réseau social.

{{< csv-to-table file="/data/societes-savantes.csv" id="societes-table" title="Liste des sociétés savantes de médecine françaises, européennes et internationales de référence" >}}

<div class="text-center"><button class="btn btn-link my-5 d-print-none" type="button" data-toggle="modal" data-target="#modal-contact">Signaler une Société manquante</button></div>

<script type="module">
window.addEventListener('load', () => {
  $(function () {
    $('#societes-table').DataTable({
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
