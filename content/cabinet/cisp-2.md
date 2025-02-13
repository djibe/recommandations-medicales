+++
title = "La Classification internationale des soins primaires (CISP-2)"
description = "Navigateur de la Classification internationale des soins primaires CISP2 pour le codage des épisodes de soins du médecin généraliste"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-06-21T09:36:00+02:00"
publishdate = "2024-06-21"
lastmod = "2024-06-21"
specialites = []
annees = "2024"
sources = ["WONCA"]
tags = []
image = true
imageSrc = "de la CISP-2"
datatable = true
todo = "table line return"
+++

La CISP-2, ou Classification internationale des soins primaires, deuxième édition, est un système de classification développé par l'Organisation mondiale des médecins généralistes (WONCA) pour catégoriser les problèmes de santé et les interventions en soins primaires. Elle permet aux médecins généralistes et aux autres professionnels de santé de codifier et de suivre les informations cliniques et épidémiologiques des patients de manière systématique.
{.lead}

Pour les médecins voulant coder leurs consultations, RecoMédicales propose un navigateur (voir plus bas). La CISP-2 est publiée sous la [license LOv2](https://github.com/etalab/licence-ouverte/blob/master/LO.md).

En anglais: *International Classification of Primary Care (ICPC)*.

La CISP-2 comprend deux composantes principales:

1. Les raisons de consultation: Ce sont les motifs pour lesquels les patients consultent leur médecin. Cela peut inclure des symptômes, des demandes spécifiques ou des préoccupations de santé.

2. Les diagnostics et interventions: Ce sont les résultats de la consultation, incluant les diagnostics médicaux, les traitements administrés, et les procédures effectuées.

La CISP-2 est organisée en un système hiérarchique avec des codes alphanumériques qui permettent une grande précision dans la description des soins de santé primaires. Elle est largement utilisée dans le monde entier pour améliorer la communication entre les professionnels de santé, standardiser les pratiques de collecte de données et faciliter les recherches en épidémiologie et en santé publique.

[Guide d'utilisation (PDF)](https://orbi.uliege.be/bitstream/2268/229852/1/Chap%201-9.pdf) pour apprendre à coder avec la CISP-2.

## Navigateur des codes de la CISP-2 {.mt-5}

Naviguer parmi les 2591 termes et codes français de la CISP2.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Navigateur de la terminologie CISP-2 en version française."}</script>
<table id="cisp2-table" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Navigateur de la terminologie CISP-2 en version française.</caption>
<thead>
  <tr>
    <th scope="col">Code</th>
    <th scope="col">Libellé</th>
    <th scope="col">Synonyme</th>
  </tr>
</thead>
</table>

<script type="module">
window.addEventListener('load', () => {
  $(function () {
    $('#cisp2-table').DataTable({
      ajax: '/data/cisp2.json',
      bAutoWidth: false,
      columns: [
        { data: 'code' },
        { data: 'label' },
        { data: 'synonym' }
      ]
    })
  })
})
</script>
