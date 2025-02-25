+++
title = "Aide à la cotation des consultations en médecine générale"
titleSeo = "Cotation des consultations de médecine générale"
description = "Aide à la cotation des consultations en médecine générale: cotation des consultations et visites de l'adulte et de l'enfant. Codes NGAP G, VG, MOP, RDV, COD"
auteurs = ["Jean-Baptiste FRON"]
date = "2021-01-23T19:15:41+02:00"
publishdate = "2023-06-06"
lastmod = "2025-01-19"
annees = "2025"
sources = ["Assurance Maladie"]
tags = []
image = true
imageSrc = "unDraw"
style = "thead > tr > th:first-of-type {width: 110px}"
todo = "GL, VSP, CTE, FS exemple frottis, MD, jour férié, IK, routexl, MPH aussi quand change de MT ?, https://www.fmfpro.org/nomenclature/tarifs-medecins-generalistes-metropole/"
+++

Liste des codes pour les actes et les consultations des adultes et des enfants en médecine générale.
{.lead}

## Les nouvelles cotations en 2025

- La fin des majorations non régulées aux heures tardives: F, MN et MM. Seul supplément pour travailler dimanche et après 20h sans régulation: MHP 5€
- Les certificats obligatoires du nourrisson (COE) passeront à 60 € le 1er juillet

## Les cotations de 2024 à ne pas oublier

- Majoration MOP de 5 € pour les +80 ans qui ne font pas partie de la patientèle (valable en (télé)consultation ou visite)
- La cotation RDV (30 €) est à 100 % pour le [rendez-vous de prévention]({{% relref "bilan-prevention.md" %}}) à réaliser à 18-25, 45-50, 60-65 et 70-75 ans (1 fois par tranche d'âge)
- Le G passé à 30 € le 22 décembre (GS disparu; 23 € en Secteur 2), le COE à 54 € (60 € le 1er juillet 2025)

## Les outils d'aide à la cotation du généraliste

Les outils *OMNIPrat* et *CotaMG* permettent aux jeunes médecins d'apprendre à compléter les feuilles de soins et de connaître la cotation des actes en médecine générale (*NGAP* = Nomenclature Générale des Actes Professionnels)

{{< card-link-external title="Outil d'aide à la cotation et au remplissage des feuilles de soins" url="https://omniprat.org/cotation/" subtitle="OMNIprat">}}

{{< card-link-external title="Outil d'aide à la cotation et au remplissage des feuilles de soins" url="https://www.cotamg.fr" subtitle="CotaMG">}}

## Les cotations pour les médecins généralistes {.text-primary .mt-5}

<div class="card card-hover my-3 mb-xl-5">
  <ul class="nav nav-tabs nav-justified" id="tabs-cotations" role="tablist" style="overflow-x: hidden">
    <li class="nav-item" role="presentation">
      <button aria-controls="adulte-panel" aria-selected="true" class="nav-link active" data-toggle="tab" data-target="#adulte-panel" id="adulte-tab" type="button" role="tab">Adulte</button>
    </li>
    <li class="nav-item" role="presentation">
      <button aria-controls="enfant-panel" aria-selected="false" class="nav-link" data-toggle="tab" data-target="#enfant-panel" id="enfant-tab" type="button" role="tab">Enfant</button>
    </li>
    <li class="nav-item" role="presentation">
      <button aria-controls="visite-panel" aria-selected="false" class="nav-link" data-toggle="tab" data-target="#visite-panel" id="visite-tab" type="button" role="tab">Visite</button>
    </li>
    <li class="nav-item" role="presentation">
      <button aria-controls="actes-panel" aria-selected="false" class="nav-link" data-toggle="tab" data-target="#actes-panel" id="actes-tab" type="button" role="tab">Suppléments, actes</button>
    </li>
  </ul>
  <div class="tab-content card-body">
    <div aria-labelledby="adulte-tab" class="tab-pane fade show active" id="adulte-panel" role="tabpanel">

Cotations pour la consultation d'un adulte ou d'un enfant à partir de 6 ans.

{{< table title="Cotations du médecin généraliste pour la consultation de l'adulte et de l'enfant de plus de 6 ans" class="table-wrap" >}}
| Code NGAP | Description                                                                                   | Tarif&nbsp;(€) |
|-----------|-----------------------------------------------------------------------------------------------|---------------:|
| G         | Consultation                                                                                  |             30 |
| TCG       | Téléconsultation                                                                              |             25 |
| C1,5      | Consultation avec test antigénique Covid                                                      |           34,5 |
| RDV       | Consultation du [bilan de prévention]({{% relref "bilan-prevention.md" %}}) (TP AMO)          |             30 |
| COB       | Consultation de l'enfant à 6, 8-9, 11-13 et 15-16 ans (à 100%)                                |             30 |
| RQD       | Demande de téléexpertise (FSE Sesam sans vitale dédiée en TP AMO)                             |             10 |
| MPH       | Premier remplissage du dossier MDPH                                                           |             60 |
| IMT       | Déclaration MT d'un patient en ALD 30 (à 100%), cocher Nouveau médecin traitant sur la FS     |             60 |
| CCP       | 1re consultation contraception avant 26 ans (à 100%, anonymisable)                            |           47,5 |
| G         | Consultation contraception annuelle avant 26 ans (à 100% en EXO3)                             |             30 |
| APC       | Adressé par son MT pour une compétence explicite avec compte-rendu (ne pas revoir à ± 4 mois) |             60 |
| G + MHP   | Consultation "urgente" non régulée 20-8h, dimanche ou jour férié                              |         30 + 5 |
| G + CRN   | Consultation régulée 20-24h et 6-8h                                                           |      30 + 42,5 |
| G + CRM   | Consultation régulée 0-6h                                                                     |      30 + 59,5 |
| G + CRD   | Consultation régulée dimanche et jours fériés                                                 |      30 + 26,5 |
{{< /table >}}

> A = année ; M = mois

Sur la feuille de soin papier écrire: CCX pour CSO ou CSE; CCE pour MPH. Entrer le code initial dans le dossier patient.
{.alert .alert-info}

  </div><!-- No more than 2-spaces indentation to prevent code block declaration -->
  <div aria-labelledby="enfant-tab" class="tab-pane fade" id="enfant-panel" role="tabpanel">

Cotations pour le petit enfant.

### Cotations des consultations de l'enfant {.typography-headline-5}

Seul l'examen obligatoire des 8 jours et les consultations jusqu'à 12 jours de vie sont sur l'assurance *Maternité* avec pour date de Maternité la date de naissance de l'enfant, tous les autres sont en *Maladie*.

{{< table title="Cotations des consultations de l'enfant avant 6 ans" class="table-wrap" >}}
| Code NGAP                                           | Description                                                                                                                            | Tarif&nbsp;(€) |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|---------------:|
| G + MEG                                             | Consultation avant 6 ans                                                                                                               |             35 |
| VG + MEG + MD                                       | Visite avant 6 ans                                                                                                                     |             45 |
| [COD]({{% relref "examens-suivi-nourrisson.md" %}}) | Examens à 13-14j, M1, M2, M3, M4, M5,<br>M11, M12, M16-18 puis à 2, 3, 4 et 5 ans (à 100%)                                             |             35 |
| COE                                                 | Examen obligatoire 8 jours, 9-10 mois<br> ou 24-25 mois (à 100%, [cerfa](https://www.formulaires.service-public.fr/gf/cerfa_12596.do)) |             54 |
| CSO*                                                | Suivi 3-12 ans en obésité (max 2/an, à 100%)                                                                                           |           47,5 |
| CSE*                                                | Suivi enfant autiste (1/an)                                                                                                            |           47,5 |
| MPH*                                                | Remplissage du dossier MDPH                                                                                                            |             60 |
| ASE*                                                | Enfant pris en charge par l'ASE                                                                                                        |           47,5 |
{{< /table >}}

\* Sur la feuille de soin papier écrire: CCX pour ASE, CSE ou CSO, CCE pour MPH
{.alert .alert-info}

### Actes du généraliste avant 6 ans {.typography-headline-5}

{{< table >}}
| Code CCAM           | Description                                                                                   | Tarif&nbsp;(€) |
|---------------------|-----------------------------------------------------------------------------------------------|---------------:|
| CDRP002             | Dépistage de la surdité avant 3 ans<br>avec test validé (SensoryBabyTest)                     |          49,46 |
| CDRP002 + ½ BLQP010 | Dépistage de la surdité avant 3 ans<br>couplé au test de la vision binoculaire (test de Lang) |          62,30 |
{{< /table >}}

  </div>
  <div aria-labelledby="visite-tab" class="tab-pane fade" id="visite-panel" role="tabpanel">

{{< table class="table-wrap" >}}
| Code NGAP | Description                                                                               | Tarif&nbsp;(€) |
|-----------|-------------------------------------------------------------------------------------------|---------------:|
| VG + MD   | Visite à domicile pour un adulte                                                          |        30 + 10 |
| V1,5 + MD | Visite à domicile pour un adulte avec test antigénique Covid                              |     34,50 + 10 |
| VG + MU   | Visite nécessitant d'interrompre ses consultations et de quitter immédiatement le cabinet |     30 + 22,60 |
| VL + MD   | Neurodégénératif, soins palliatifs (4/an) ou +80 ans en ALD (1/trimestre)                 |        60 + 10 |
| VG + MHP  | Visite justifiée 20-8h, dimanche et jour férié                                            |         30 + 5 |
| VG + VRS  | Visite régulée samedi après-midi                                                          |        30 + 30 |
| VG + VRN  | Visite régulée 20-24h et 6-8h                                                             |        30 + 46 |
| VG + VRM  | Visite régulée 0-6h                                                                       |     30 + 59,50 |
| VG + VRD  | Visite régulée dimanche et jour férié                                                     |        30 + 30 |
| APV + MD  | Vu à la demande de son MT pour une compétence explicite (ne pas revoir à ± 4 mois)        |        60 + 10 |
{{< /table >}}

  </div>
  <div aria-labelledby="actes-tab" class="tab-pane fade" id="actes-panel" role="tabpanel">

Actes et surcotations disponibles pour le médecin généraliste.

### Surcotations disponibles pour le généraliste

Cotations NGAP disponibles en sus de la consultation ou de la visite médicale.

{{< table title="Surcotations possibles pour des situations particulières" class="table-wrap" >}}
| Code NGAP | Description                                                                                                                                                                       | Tarif supp (€) |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------:|
| + MCG     | Consultation d'un patient +16 ans hors résidence habituelle ou soins itératifs avec rédaction d'un compte-rendu pour son MT                                                       |              5 |
| + MOP     | Consultation d'un patient +80 ans qui ne fait pas partie de la patientèle déclarée                                                                                                |              5 |
| + MSH**   | Sortie d'hospitalisation (chirurgie, décompensation ou diagnostic d'affection grave) dans le mois d'un patient polypathologique. MIC non applicable pour la même hospitalisation. |             23 |
| + MIC**   | Sortie d'hospitalisation dans les 2 mois pour [insuffisance cardiaque]({{% relref "insuffisance-cardiaque-chronique.md" %}})                                                      |             23 |
| + MIS     | Consultation initiale d'information cancer ou neurodégénératif                                                                                                                    |             30 |
| + PIV     | Consultation initiale d'information VIH                                                                                                                                           |             30 |
| + MUT*    | RDV urgent obtenu avec un spécialiste sous 48h                                                                                                                                    |              5 |
| + MRT*    | Examen de son patient en urgence à la demande de la régulation                                                                                                                    |             15 |
| + SNP     | Examen d'un patient non déclaré dans les 48h à la demande du SAS                                                                                                                  |             15 |
| + SHE     | Surcotation à MRT/SNP de 19 à 21h                                                                                                                                                 |              5 |
| + DE      | Acte non justifié, à déterminer avec "tact et mesure" (non remboursé)                                                                                                             |          Libre |
{{< /table >}}

> \* Médecin traitant uniquement ; MIS et PIV sont anonymisés en MTX sur une feuille de soins papier.

### Les actes importants pour le médecin généraliste {.mt-5}

Actes CCAM importants non cumulables ou cumulables avec une consultation (3 possibles en cumul: ECG, frottis cervico-vaginal et biopsie cutanée).

Les sutures ne sont pas présentées ici mais penser à associer le code CCAM *M* (26,88 €) de soins d'urgences.

{{< table title="Actes importants pour le médecin généraliste. Majoration M possible si urgence pour les actes mentionnés" class="table-wrap" >}}
| Code CCAM   | Description | Tarif&nbsp;(€) |
|-------------|-------------|---------------:|
| + DEQP003   | ECG 12 dérivations | 14,52 |
| + JKHD001   | Frottis cervico-vaginal |  12,73 |
| ALQP003     | Test standardisé d'évaluation d'une dépression: {{< modal-btn modal-hamilton >}}Hamilton{{< /modal-btn >}}, Beck, MADRS, MMPI et STAI (max 1/an) | 69,12 |
| ALQP006     | Test standardisé d'évaluation d'un déficit cognitif: [MMSE](https://www.has-sante.fr/upload/docs/application/pdf/2012-04/mmse.pdf), [MoCA](/print/moca.pdf), GP-COG, MIS, Codex, 5 mots de Dubois (max 1/an) | 69,12 |
| JKLD001     | Pose d'un stérilet | 38,40 |
| JKKD001     | Changement d'un stérilet                                                                                                                                                                                     |          38,40 |
| QZGA002     | Ablation ou changement d'un implant                                                                                                                                                                          |          41,80 |
| MJPA010     | Incision ou excision d'un panaris superficiel | 38,29 |
| EGFA007     | Excision d'une [thrombose hémorroïdaire]({{% relref "hemorroides.md" %}}) | 62,70 |
| GLQP012     | Spirométrie avec enregistrement | 41,08 |
| GABD002 + M | Tamponnement nasal antérieur | 54,60 |
{{< /table >}}

**NB.** Le premier acte est facturé à 100%, le 2e à 50% et les suivants sont offerts.

L'extraction de cérumen (CAGD001) à 19,63 € n'a pas d'intérêt.

  </div>
  </div>
</div>

## Sources

- [Ameli. Tarifs conventionnels des médecins généralistes et spécialistes. 08/01/2025.](https://www.ameli.fr/medecin/exercice-liberal/facturation-remuneration/consultations-actes/tarifs/tarifs-conventionnels-medecins-generalistes-specialistes)
- [Ameli. La revalorisation des consultations et des actes.](https://www.ameli.fr/medecin/textes-reference/convention-medicale-2024-2029/grands-axes-convention-detail/mesures-attractivite-exercice-liberal/revalorisation-consultations-actes)
- [Ameli. Tarifs des consultations : ce qui change au 1er novembre. 30/10/2023.](https://www.ameli.fr/hauts-de-seine/medecin/actualites/tarifs-des-consultations-ce-qui-change-au-1er-novembre)
- [Ameli. Convention médicale 2016 et règlement arbitral 2023.](https://www.ameli.fr/hauts-de-seine/medecin/textes-reference/convention-medicale-2016)
- [MG France. Plaquettes tarifaires. 2023.](https://www.mgfrance.org/telechargements/guides-et-plaquettes-publics/2363-plaquettes-tarifaires)
- Assurance Maladie. La convention nationale 2016-2021 entre les médecins libéraux et l'Assurance Maladie synthèse

### Bibliographie en attente

- G, APC, MHP, [Article 50 (PDF)](https://www.fmfpro.org/wp-content/uploads/2024/12/Article_50.pdf)
- [Suhard V. Historique des conventions médicales. IRDES. 2022. (PDF)](https://www.irdes.fr/documentation/syntheses/historique-des-conventions-medicales.pdf)

{{% modal title="Echelle de depression de Hamilton" id="modal-hamilton"%}}

{{< scores/hamilton >}}

{{% /modal %}}
