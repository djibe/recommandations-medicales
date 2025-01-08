+++
title = "Bilans biologiques les plus prescrits par les généralistes en ville"
description = "Examens biologiques prescrits par les médecins généralistes et réalisés en ville avec le nombre de demandes et les montants remboursés."
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-12-26T14:29:00+02:00"
publishdate = "2024-12-26"
lastmod = "2024-12-26"
specialites = []
annees = "2023"
sources = []
tags = []
image = true
imageSrc = "par Freepik"
datatable = true
+++

La source *Open Bio* permet de connaître les volumes et montants d'examens biologiques réalisés en ville.  
RecoMédicales reprend les données concernant les prescriptions de biologie des médecins généralistes réalisés dans les laboratoires d'analyses médicales pour l'année 2023.
{.lead}

Le **top 10** des prescriptions comprend: NFS (37 millions d'analyses), créatinine, ionogramme, glycémie, transaminases, bilan lipidique, GGT, TSH et ferritine (17,5 millions).

Le **top 10 des analyses les plus chères** comprend: NFS (145,6 millions d'euros), bilan lipidique, TSH, ECBU, PCR Covid, ferritine, HbA1c, ionogramme, BNP, sérologie hépatite B (48 millions d'euros).

## Records étonnants de prescriptions biologiques

La **[TSH](/tags/tsh/)**, avec 21 millions de dosages pour 68 millions de français et 77,4 millions d'euros de remboursement, semble détenir le record de mauvaise prescription. L'[hypothyroïdie]({{< relref "hypothyroidie.md" >}}) atteint 1 à 2% des français et doit être contrôlée annuellement. L'[hyperthyroïdie]({{< relref "hyperthyroidie.md" >}}), elle, est rare.

La PCR Covid est également extrêmement chère, avec 66,5 millions d'euros pour seulement 3,4 millions de tests. Espérons que les sujets à risques aient reçus du Paxlovid avant les résultats. Et qu'attendre du surcoût contre un test antigénique.

## Tableau des examens de biologie prescrits par les médecins généralistes en 2023

Ensemble des examens biologiques remboursés en ville sur prescription d'un médecin généraliste en 2023.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Bilans biologiques prescrits par les médecins généralistes et remboursés en ville en 2023. Dr JB Fron d'après Open Bio."}</script>
<table id="open-bio" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Bilans biologiques prescrits par les médecins généralistes et remboursés en ville en 2023. Dr JB Fron d'après Open Bio.</caption>
<thead>
  <tr>
    <th scope="col">Analyse</th>
    <th scope="col">Nombre</th>
    <th scope="col">Montant (€)</th>
  </tr>
</thead>
</table>

## Source

[Assurance Maladie. Open Bio : bases complémentaires sur les dépenses de biologie médicale - 2014 à 2023. 19/03/2024.](https://www.assurance-maladie.ameli.fr/etudes-et-donnees/open-bio-depenses-beneficiaires-biologie-medicale)

<script type="module">
window.addEventListener('load', () => {
  $(function () {
    $('#open-bio').DataTable({
      ajax: '/data/open-bio.json',
      columns: [
        { data: 'L_ACTE' },
        { data: 'DNB' },
        { data: 'REM' },
      ]
    })
  })
})
</script>