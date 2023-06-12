+++
title = "Test"
description = "TODO:"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-06-12T21:25:00+02:00"
publishdate = "2023-06-12"
lastmod = "2023-06-12"
specialites = []
annees = "2023"
sources = ["Anses"]
tags = []
draft = true
image = false
imageSrc = ""
todo = ""
datatable = true
+++

## Title

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "TODO:"}</script>
<table id="anses-plantes" class="table">
<caption><span class="font-weight-bold">Tableau.</span> TODO:.</caption>
<thead>
  <tr>
    <th scope="col">Nom scientifique</th>
    <th scope="col">Nom vernaculaire</th>
    <th scope="col">Parties utilisées</th>
    <th scope="col">Contre-indications</th>
    <th scope="col">Interactions médicamenteuses</th>
    <th scope="col">Grossesse</th>
    <th scope="col">Pédiatrie</th>
  </tr>
</thead>
</table>
<script>
  // Anses
window.addEventListener('load', () => {
  $(function () {
    $('#anses-plantes').DataTable({
      ajax: '/data/anses-plantes.json',
      columns: [
        { data: 'Nom scientifique' },
        { data: 'Nom vernaculaire' },
        { data: 'Parties utilisées' },
        { data: 'Contre-indications' },
        { data: 'Interactions médicamenteuses' },
        { data: 'grossesse' },
        { data: 'pediatrie' },
      ]
    })
  })
})
</script>
