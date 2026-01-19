+++
title = "Bilans biologiques les plus prescrits par les généralistes en ville"
description = "Examens biologiques prescrits par les médecins généralistes et réalisés en ville avec le nombre de demandes et les montants remboursés."
longHtml = true
noSearchContent = true
auteurs = ["Jean-Baptiste FRON"]
date = "2024-12-26T14:29:00+02:00"
publishdate = "2024-12-26"
lastmod = "2026-01-18"
specialites = []
annees = "2024"
sources = []
tags = []
image = true
imageSrc = "par Freepik"
todo = "update 2026"
datatable = true
+++

La source *Open Bio* permet de connaître les volumes et montants d'examens biologiques réalisés en ville. RecoMédicales reprend les données concernant les prescriptions de biologie des médecins généralistes réalisés dans les laboratoires d'analyses médicales pour l'année 2024.
{.lead}

Le **top 10** des prescriptions de biologie comprend: NFS (38 millions d'analyses), créatinine, ionogramme, glycémie, transaminases, bilan lipidique, GGT, CRP, TSH et ferritine (60 millions de dosages).

Le **top 10 des analyses biologiques les plus chères** suit l'ordre suivant: NFS (132 millions d'euros), TSH, bilan lipidique, ECBU, ferritine, ionogramme, HbA1c, BNP, sérologie hépatite B, transaminases (47,5 millions d'euros).

## La TSH, record étonnant de prescription biologique

La **[TSH](/tags/tsh/)**, avec 21 millions de dosages pour 68 millions de français et 76 millions d'euros de remboursement, semble détenir le record de mauvaise prescription. L'[hypothyroïdie]({{% relref "hypothyroidie.md" %}}) atteint 1 à 2 % des français et doit être contrôlée annuellement. L'[hyperthyroïdie]({{% relref "hyperthyroidie.md" %}}), elle, est rare.

## Examens étonnants prescrits en ville

Parmi les examens de biologie dont l'ampleur semble inadaptée, on retrouve:

- 783.000 dosages de troponine pour 8,5 millions €
- 401.000 dosages d'anticorps anti-thyroglobuline pour 3,6 millions €  
  {{%class "text-black-secondary"%}}Indications: suivi à 6-12 mois d'un cancer de la thyroïde (7684 cas annuels), hypothyroïdie du sujet jeune de suspicion auto-immune avec anti-TPO négatifs.{{%/class%}}
- Avec les nouvelles consignes de dosages par les biologistes, la T3L est passée entre 2023 et 2024 de 1,5 millions d'euros à 10.272 € (seule indication: hyperthyroïdie à T4L normale)

Et pour rire, 12.500 femmes ont un eu **dosage du PSA** (cancer de la prostate) par leur généraliste en 2023.

## Tableau des examens de biologie prescrits par les médecins généralistes en 2024

Ensemble des examens biologiques remboursés en ville sur prescription d'un médecin généraliste en 2024.

*Problème d'affichage dans le tableau, il se peut que vous ayez à utiliser le défilement horizontal pour lire les montants remboursés (en euros 2024).*

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Bilans biologiques prescrits par les médecins généralistes et remboursés en ville en 2024. Dr JB Fron d’après Open Bio."}</script>
<table id="open-bio" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Bilans biologiques prescrits par les médecins généralistes et remboursés en ville en 2024. Dr JB Fron d’après Open Bio.</caption>
<thead>
  <tr>
    <th scope="col">Analyse</th>
    <th scope="col">Nombre</th>
    <th scope="col">Montant (€)</th>
  </tr>
</thead>
</table>

## Source

[Assurance Maladie. Open Bio : base complète sur les dépenses de biologie médicale interrégimes. data.gouv.fr. 2025.](https://www.data.gouv.fr/fr/datasets/open-bio-base-complete-sur-les-depenses-de-biologie-medicale-interregimes/)

<script type="module">
window.addEventListener('load', () => {
  $(function () {
    $('#open-bio').DataTable({
      ajax: '/data/open-bio-2024.json',
      columns: [
        { data: 'L_ACTE' },
        { data: 'DNB' },
        { data: 'REM' },
      ]
    })
  })
})
</script>
