+++
title = "Bilans biologiques les plus prescrits par les généralistes en ville"
description = "Examens biologiques prescrits par les médecins généralistes et réalisés en ville avec le nombre de demandes et les montants remboursés."
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-12-26T14:29:00+02:00"
publishdate = "2024-12-26"
lastmod = "2025-01-17"
specialites = []
annees = "2023"
sources = []
tags = []
image = true
imageSrc = "par Freepik"
datatable = true
+++

La source *Open Bio* permet de connaître les volumes et montants d'examens biologiques réalisés en ville. RecoMédicales reprend les données concernant les prescriptions de biologie des médecins généralistes réalisés dans les laboratoires d'analyses médicales pour l'année 2023.
{.lead}

Le **top 10** des prescriptions comprend: NFS (37 millions d'analyses), créatinine, ionogramme, glycémie, transaminases, bilan lipidique, GGT, TSH et ferritine (17,5 millions).

Le **top 10 des analyses les plus chères** suit l'ordre suivant: NFS (145,6 millions d'euros), bilan lipidique, TSH, ECBU, PCR Covid, ferritine, HbA1c, ionogramme, BNP, sérologie hépatite B (48 millions d'euros).

## Records étonnants de prescriptions biologiques

La **[TSH](/tags/tsh/)**, avec 21 millions de dosages pour 68 millions de français et 77,4 millions d'euros de remboursement, semble détenir le record de mauvaise prescription. L'[hypothyroïdie]({{% relref "hypothyroidie.md" %}}) atteint 1 à 2% des français et doit être contrôlée annuellement. L'[hyperthyroïdie]({{% relref "hyperthyroidie.md" %}}), elle, est rare.

La **PCR Covid** est également extrêmement chère, avec 66,5 millions d'euros pour seulement 3,4 millions de tests. Espérons que les sujets à risques aient reçus du Paxlovid avant les résultats. Qu'attendre du surcoût contre un test antigénique et quel impact a eu le prélèvement sur la prise en charge ?

## Examens étonnants prescrits en ville

Parmi les examens de biologie dont la mesure ambulatoire semble étonnante, on retrouve:

- 780.000 dosages de troponine pour 9,2 millions €
- 450.000 dosages d'anticorps anti-thyroglobuline pour 4,3 millions €  
  {{%class "text-black-secondary"%}}Indications: suivi à 6-12 mois d'un cancer de la thyroïde (7684 cas annuels), hypothyroïdie du sujet jeune de suspicion auto-immune avec anti-TPO négatifs.{{%/class%}}
- Beaucoup de T3L (1,5 millions) alors que la seule indication est la très rare hyperthyroïdie à T4L normale

Et pour rire, 12.500 femmes ont un eu **dosage du PSA** (cancer de la prostate) par leur généraliste en 2023.

## Tableau des examens de biologie prescrits par les médecins généralistes en 2023

Ensemble des examens biologiques remboursés en ville sur prescription d'un médecin généraliste en 2023.

*Problème d'affichage dans le tableau, il se peut que vous ayez à utiliser le défilement horizontal pour lire les montants remboursés (en euros 2023).*

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
