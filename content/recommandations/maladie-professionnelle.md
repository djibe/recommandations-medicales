+++
id = "0190e8c7-e317-74f3-8917-b801c657b4d2"
title = "Maladies professionnelles"
prefix = "les "
description = "Recommandations pour la déclaration des maladies professionnelles (MP). Bilan et diagnostic de la pathologie, rédaction du certificat médical initial (CMI) ..."
longHtml = true
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2024-01-13T19:55:16+01:00"
publishdate = "2024-01-15"
lastmod = "2025-06-24"
specialites = ["certificats"]
annees = "2025"
sources = ["Ameli"]
tags = []
english = ["Occupational disorder", "occupational diseases"]
sctid = "115966001"
icd10 = []
image = true
imageSrc = "Le certificat médical initial (CMI) de déclaration de Maladie professionnelle (MP)"
todo = "liens > traduction, canal carpien"
datatable = true
+++

{{%article-summary%}}

- Toujours se poser la question d'une origine professionnelle devant toute pathologie
- Consulter les [tableaux des maladies professionnelles](https://www.inrs.fr/publications/bdd/mp.html) (MP), une demande hors Tableau est possible
- Affirmer le diagnostic avec les bilans nécessaires pour la reconnaissance en maladie professionnelle: voir *Examens nécessaires*
- Rédiger le certificat médical initial (CMI) sur *AmeliPro* et le remettre au patient pour qu'il initie la demande de MP
- Le patient doit ensuite compléter le [cerfa 50562#03](https://www.ameli.fr/sites/default/files/formulaires/133/s6100.pdf) de déclaration de maladie professionnelle et l'envoyer à sa Caisse Primaire d'Assurance Maladie
- Une fois reconnue, les frais médicaux sont réalisés en tiers payant total sur l'assurance AT/MP (cocher tiers payant AMO **et** AMC)

{{%/article-summary%}}
{{%collapse "Tableaux des maladies professionnelles" %}}

> [!INFO]
> Il est essentiel de se poser la question d'une origine professionnelle devant toute pathologie.

L'*Institut national de recherche et de sécurité pour la prévention des accidents du travail et des maladies professionnelles* (INRS) actualise la liste des maladies professionnelles.

{{< card-link-external title="Liste des maladies professionnelles" url="https://www.inrs.fr/publications/bdd/mp.html" subtitle="par l'INRS" >}}

Des pathologies peuvent être prises en charge sans être inscrites aux Tableaux (maladies hors tableaux).

{{% /collapse %}}
{{%collapse "Déclarer une maladie professionnelle" %}}

1. Évoquer une maladie professionnelle (MP) devant toute pathologie
2. Rechercher les critères de prise en charge de la pathologie au [Tableau](https://www.inrs.fr/publications/bdd/mp.html) (voir *Tableaux des maladies*)
3. Affirmer la pathologie par les critères habituels: biologie, imagerie, avis spécialisé
4. Vérifier si les examens nécessaires à la reconnaissance en maladie professionnelle ont été réalisés (voir *Examens pour la reconnaissance*)
5. Établir le ==**certificat médical initial**== (CMI) sur *Ameli Pro* (ou formulaire cerfa S6909)
    - La date correspond à la première constatation médicale de symptômes liés à la pathologie professionnelle (même si le diagnostic est ultérieur)
    - Pour le diagnostic, utiliser les termes du tableau des maladies professionnelles (voir *Tableaux des maladies*)
6. Le patient complète le formulaire [cerfa 50562#03](https://www.ameli.fr/sites/default/files/formulaires/133/s6100.pdf) de **déclaration de maladie professionnelle** et joint le certificat médical initial pour les renvoyer à sa Caisse
7. La CPAM dispose de 120 jours pour instruire le dossier et se prononcer sur la reconnaissance de la maladie professionnelle (MP)
8. En cas d'accord, le patient présente la feuille (S 6201c) à chaque soin en rapport avec sa MP (comme pour l'accident de travail).  
  En cas de refus, les recours sont précisés sur l'attestation de refus.
9. Les consultations sont facturées en tiers payant total (**cocher les 2 cases AMO et AMC**) comme pour les accidents du travail. Préciser le numéro de la MP ou date de la MP.
10. Les aggravations et guérisons de la pathologie nécessitent les mêmes compléments que les accidents du travail.

{{< youtube id="R3hUzhyx0f4" title="Focus sur la déclaration en maladie professionnelle (Assurance Maladie)" >}}

{{% /collapse %}}
{{%collapse "Examens nécessaires pour la reconnaissance des maladies professionnelles" "show" %}}

Des examens sont requis pour la reconnaissance de certaines maladies professionnelles. Le tableau suivant liste tous les examens nécessaires pour le bilan des maladies professionnelles inscrites au *Tableau*.

<script type="application/ld+json">{"@context": "https://schema.org","@type": "Table","about": "Examens nécessaires pour la reconnaissance de certaines maladies professionnelles. Dr JB Fron d'après Ameli."}</script>
<table id="table-mp" class="table">
<caption><span class="font-weight-bold">Tableau.</span> Examens nécessaires pour la reconnaissance de certaines maladies professionnelles. Dr JB Fron d'après <a href="https://www.ameli.fr/val-de-marne/content/liste-des-examens-medicaux-effectuer-en-cas-de-maladie-professionnelle" rel="external">Ameli</a>.</caption>
<thead>
  <tr>
    <th scope="col">Tableau</th>
    <th scope="col">Libellé</th>
    <th scope="col">Examen requis</th>
  </tr>
</thead>
</table>
<script>
  // Anses
window.addEventListener('load', () => {
  $(function () {
    $('#table-mp').DataTable({
      ajax: '/data/maladie-professionnelle.json',
      columns: [
        { data: 'TABLEAU_MP' },
        { data: 'LIBELLE' },
        { data: 'EXAMEN' }
      ]
    })
  })
})
</script>

{{< card-link-external title="Examens nécessaires pour la reconnaissance de certaines maladies professionnelles" url="https://www.ameli.fr/val-de-marne/content/liste-des-examens-medicaux-effectuer-en-cas-de-maladie-professionnelle" subtitle="par Ameli" >}}

{{% /collapse %}}
{{%sources%}}

- [Ameli Médecin. Maladies professionnelles : l'essentiel sur le certificat médical initial. 13/06/2025.](https://www.ameli.fr/medecin/actualites/maladies-professionnelles-l-essentiel-sur-le-certificat-medical-initial)
- [Ameli Médecin. Maladie professionnelle. 26/02/2025.](https://www.ameli.fr/val-de-marne/medecin/exercice-liberal/prise-charge-situation-type-soin/situation-patient-mp/maladies-professionnelles)
- [Service-Public. Maladie professionnelle : démarches à effectuer. 17/10/2023.](https://www.service-public.fr/particuliers/vosdroits/F176)
- [IRNS. Tableaux des maladies professionnelles.](https://www.inrs.fr/publications/bdd/mp.html)

{{%/sources%}}
