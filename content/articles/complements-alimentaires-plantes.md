+++
title = "Sécurité des compléments alimentaires à base de plantes"
titleSeo = "Sécurité compléments alimentaires de plantes"
description = "L'agence de sécurité sanitaire (Anses) a publié les précautions concernant 118 plantes utilisées pour la composition de compléments alimentaires"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2023-06-12T21:25:00+02:00"
publishdate = "2023-06-13"
lastmod = "2023-06-13"
specialites = []
annees = "2023"
sources = ["Anses"]
tags = []
image = true
imageSrc = "pch.vector / Freepik"
datatable = true
+++

L'Agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail (Anses) a publié la liste des plantes fréquemment retrouvées dans les compléments alimentaires avec les données concernant leur **sécurité** d'utilisation en 2023.
{.lead}

De nombreux compléments alimentaires à base de plantes, dont certaines utilisées pour des << vertus >> médicinales sont disponibles sur le marché et accessibles à tous. Or les compléments alimentaires n'ont pas d'obligation légale d'accompagner les préparations d'une notice.

L'**Anses**, l'agence de sécurité sanitaire, a ainsi rédigé pour chaque extrait de plante les précautions à connaître en général, les contre-indications et les précautions pour certaines populations (femmes enceintes, enfants).

> << l'Anses rappelle une nouvelle fois que la consommation des compléments alimentaires à base de plante n'est pas sans risques. Ces produits, qui sont loin d'être anodins, peuvent entraîner des effets indésirables parfois graves, comme des allergies sévères ou des atteintes hépatiques potentiellement mortelles.>> -- *Anses 2023*
{.alert .alert-warning}

**CA =** complément alimentaire

## Tableau des compléments alimentaires à base de plantes

Le tableau suivant reprend l'intégralité des informations publiées par l'Anses sur les 118 plantes médicinales utilisées dans des compléments alimentaires. Il permet au praticien d'accompagner les patients sur leur automédication.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Informations sur les compléments alimentaires à base de plantes. Dr JB Fron d'après Anses 2023."}</script>
<table id="anses-plantes" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Informations sur les compléments alimentaires à base de plantes. Dr JB Fron d'après Anses 2023.</caption>
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

Pour plus d'informations sur la composition des compléments alimentaires, l'avis de l'Anses est disponible ci-dessous.

## Source

[Anses. Compléments alimentaires à base de plantes : vers une meilleure information des consommateurs. 08/06/2023.](https://www.anses.fr/fr/content/complements-alimentaires-plantes-meilleure-information-des-consommateurs)

<script type="module">
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
