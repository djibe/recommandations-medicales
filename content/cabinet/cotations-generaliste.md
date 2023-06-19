+++
title = "Aides à la cotation des consultations en médecine générale"
titleSeo = "Aide cotation généraliste"
noindex = true
description = ""
auteurs = ["Jean-Baptiste FRON"]
date = "2021-01-23T19:15:41+02:00"
publishdate = "2023-06-06"
lastmod = "2023-06-08"
annees = "2023"
sources = ["Assurance Maladie"]
tags = []
image = true
imageSrc = "unDraw"
todo = "FS exemple frottis, MD, jour férié, IK, routexl, MPH aussi quand change de MT ?"
+++

En attendant un outil plus performant sur RecoMédicales, *OMNIPrat* permet de retrouver ses petits pour la cotation des actes en médecine générale (NGAP = Nomenclature Générale des Actes Professionnels)
{.lead}

{{< card-link-external title="Outil d'aide à la cotation et le remplissage des feuilles de soins" url="https://omniprat.org/cotation/" subtitle="OMNIprat">}}

## Les nouvelles cotations 2023

- IMT à 60€: depuis le 1er mai, consultation où l'on déclare un patient en [ALD 30]({{< relref "affection-longue-duree.md" >}}) comme médecin traitant.  
  Si l'ALD n'est pas déclarée, la demander et seulement inscrire le patient quand elle a été validée.
- G à 25€: après [presque 6 ans à 25€]({{< relref "evolution-tarif-consultation-generaliste.md" >}}), le G (GS) passera à 26,5€ le 1er novembre.

## Les cotations pour les médecins généralistes

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

Cotations pour la consultation d'un adulte ou l'enfant à partir de 6 ans.

{{< table title="Cotations pour la consultation d'un adulte ou l'enfant à partir de 6 ans" >}}
| Code NGAP  | Description                                                                                   | Tarif (€) |
|------------|-----------------------------------------------------------------------------------------------|----------:|
| G(S)       | Consultation                                                                                  |        25 |
| TCG        | Téléconsultation                                                                              |        25 |
| COB        | Consultation de l'enfant à 6, 8-9, 11-13 et 15-16 ans (à 100%)                                |        25 |
| MPH        | Remplissage du dossier MDPH                                                                   |        60 |
| IMT        | Déclaration MT d'un patient en ALD 30 (à 100%)                                                |        60 |
| CCP        | 1re consultation contraception avant 26 ans (à 100%, anonymisable)                            |        46 |
| G(S)       | Consultation contraception annuelle avant 26 ans (à 100% en EXO3)                             |        25 |
| APC        | Adressé par son MT pour une compétence explicite avec compte-rendu (ne pas revoir à ± 4 mois) |        55 |
| G(S) + MN  | Consultation "urgente" non régulée 20-24h (appel après 19h) et 6-8h                           |        60 |
| G(S) + MM  | Consultation "urgente" non régulée 0-6h                                                       |        65 |
| G(S) + F   | Consultation "urgente" non régulée dimanche et jours fériés                                   |     44,06 |
| G(S) + CRN | Consultation régulée 20-24h et 6-8h                                                           |     67,50 |
| G(S) + CRN | Consultation régulée 0-6h                                                                     |     76,50 |
| G(S) + CRD | Consultation régulée dimanche et jours fériés                                                 |     51,50 |
{{< /table >}}

> A = année ; M = mois

Sur la feuille de soin papier écrire: CCX pour CSO ou CSE, CCE pour MPH. Entrer le code initial dans le dossier patient.
{.alert .alert-info}

  </div><!-- No more than 2-spaces indentation to prevent code block declaration -->
  <div aria-labelledby="enfant-tab" class="tab-pane fade" id="enfant-panel" role="tabpanel">

Cotations pour le petit enfant.

### Cotations des consultations de l'enfant {.typography-headline-5}

Seul l'examen obligatoire des 8 jours et les consultations jusqu'à 12 jours de vie sont sur l'assurance *Maternité* avec pour date de Maternité la date de naissance de l'enfant, tous les autres sont en *Maladie*.

{{< table title="Cotations des consultations de l'enfant avant 6 ans" class="table-wrap" >}}
| Code NGAP                                           | Description                                                                                                                            | Tarif (€) |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|----------:|
| G + MEG                                             | Consultation avant 6 ans                                                                                                               |        30 |
| VG + MEG + MD                                       | Visite avant 6 ans                                                                                                                     |        40 |
| [COD]({{< relref "examens-suivi-nourrisson.md" >}}) | Examens à 13-14j, M1, M2, M3, M4, M5,<br> M6, M12, M13, M16-18, A3, A4, A5  (à 100%)                                                   |        30 |
| COE                                                 | Examen obligatoire 8 jours, 9-10 mois<br> ou 24-25 mois (à 100%, [cerfa](https://www.formulaires.service-public.fr/gf/cerfa_12596.do)) |        46 |
| CSO*                                                | Suivi 3-12 ans en obésité (max 2/an, à 100%)                                                                                           |        46 |
| CSE*                                                | Suivi enfant autiste (1/an)                                                                                                            |        46 |
| MPH*                                                | Remplissage du dossier MDPH                                                                                                            |        60 |
| ASE*                                                | Enfant pris en charge par l'ASE                                                                                                        |        46 |
{{< /table >}}

\* Sur la feuille de soin papier écrire: CCX pour ASE, CSE ou CSO, CCE pour MPH
{.alert .alert-info}

### Actes du généraliste avant 6 ans {.typography-headline-5}

{{< table >}}
| Code CCAM           | Description                                                                                   | Tarif (€) |
|---------------------|-----------------------------------------------------------------------------------------------|----------:|
| CDRP002             | Dépistage de la surdité avant 3 ans<br>avec test validé (SensoryBabyTest)                     |     48,51 |
| CDRP002 + ½ BLQP010 | Dépistage de la surdité avant 3 ans<br>couplé au test de la vision binoculaire (test de Lang) |     61,17 |
{{< /table >}}

  </div>
  <div aria-labelledby="visite-tab" class="tab-pane fade" id="visite-panel" role="tabpanel">

{{< table class="table-wrap" >}}
| Code NGAP             | Description                                                                               |          Tarif (€) |
|-----------------------|-------------------------------------------------------------------------------------------|-------------------:|
| VG(S) + MD            | Visite à domicile pour un adulte                                                          |            25 + 10 |
| VG(S) + MU            | Visite nécessitant d'interrompre ses consultations et de quitter immédiatement le cabinet |         25 + 22,60 |
| VL + MD               | Neurodégénératif, soins palliatifs (4/an) ou +80 ans en ALD (1/trimestre)                 |            60 + 10 |
| VG(S) + MDD           | Visite justifiée dimanche et jour férié                                                   |         25 + 22,60 |
| VG(S) + MDN           | Visite 20-24h et 6-8h                                                                     |         25 + 38,50 |
| VG(S) + MDI           | Visite 0-6h                                                                               |         25 + 43,50 |
| VG(S) + VRS           | Visite régulée samedi après-midi                                                          |            25 + 30 |
| VG(S) + VRN           | Visite régulée 20-24h et 6-8h                                                             |            25 + 46 |
| VG(S) + VRM           | Visite régulée 0-6h                                                                       |         25 + 59,50 |
| VG(S) + VRD           | Visite régulée dimanche et jour férié                                                     |         25 + 30,00 |
| APV + MD              | Vu à la demande de son MT pour une compétence explicite (ne pas revoir à ± 4 mois)        |            55 + 10 |
{{< /table >}}

  </div>
  <div aria-labelledby="actes-tab" class="tab-pane fade" id="actes-panel" role="tabpanel">

Actes et surcotations disponibles pour le médecin généraliste.

### Surcotations disponibles pour le généraliste

Cotations NGAP disponibles en sus de la consultation ou de la visite.

{{< table title="Surcotations possibles pour des situations particulières" >}}
| Code NGAP    | Description                                                                                                                  | Tarif supp (€) |
|--------------|------------------------------------------------------------------------------------------------------------------------------|---------------:|
| RQD          | Demande de téléexpertise (à 100%)                                                                                            |             10 |
| + MCG        | Consultation d'un patient +16 ans hors résidence habituelle avec rédaction d'un compte-rendu pour son MT                     |              5 |
| + MSH**      | Sortie d'hospitalisation dans le mois d'un patient poly-pathologique                                                         |             23 |
| + MIC**      | Sortie d'hospitalisation dans les 2 mois pour [insuffisance cardiaque]({{< relref "insuffisance-cardiaque-chronique.md" >}}) |             23 |
| + MIS        | Consultation initiale d'information cancer ou neurodégénératif                                                               |             30 |
| + PIV        | Consultation initiale d'information VIH                                                                                      |             30 |
| + MUT*       | RDV urgent obtenu avec un spécialiste sous 48h                                                                               |              5 |
| + MRT*       | Examen de son patient en urgence à la demande de la régulation                                                               |             15 |
| + SNP        | Examen dans les 48h à la demande du SAS                                                                                      |             15 |
| + DE         | Acte non justifié, à déterminer avec "tact et mesure" (non remboursé)                                                        |          Libre |
{{< /table >}}

> \* Médecin traitant uniquement ; MIS et PIV sont anonymisés en MTX sur une feuille de soins

### Les actes importants pour le médecin généraliste

Actes importants non cumulables ou cumulables avec une consultation (3 au total: ECG, frottis cervico-vaginal et biopsie cutanée).

{{< table title="Actes importants pour le médecin généraliste. Majoration M possible si urgence pour les actes mentionnés" >}}
| Code CCAM | Description | Tarif (€) |
| + DEQP003 | ECG 12D | 14,26 |
| + JKHD001 | Frottis cervico-vaginal | 12,46 |
| ALQP003 | Test standardisé d'évaluation d'une dépression (max 1/an) | 69,12 |
| ALQP006 | Test standardisé d'évaluation d'un déficit cognitif (max 1/an) | 69,12 |
| JKLD001 | Pose d'un stérilet | 38,40 |
| JKKD001 | Changement d'un stérilet | 38,40 |
| QZGA002 | Ablation ou changement d'un implant | 41,80 |
| MJPA010 | Incision ou excision d'un panaris superficiel | 38,29 |
| EGFA007 | Excision d'une [thrombose hémorroïdaire]({{< relref "hemorroides.md" >}}) | 62,70 |
| GLQP012 | Spirométrie avec enregistrement | 40,28 |
| GABD002 + M | Tamponnement nasal antérieur | 54,60 |
{{< /table >}}

**NB.** Le premier acte est facturé à 100%, le 2e à 50% et les suivants sont offerts.

  </div>
  </div>
</div>

## Sources

- [Ameli. Tarifs conventionnels des médecins généralistes en France métropolitaine . 15 mai 2023.](https://www.ameli.fr/lille-douai/medecin/exercice-liberal/facturation-remuneration/consultations-actes/tarifs/tarifs-generalistes/tarifs-metropole)
- [Ameli. Convention médicale 2016 et règlement arbitral 2023.](https://www.ameli.fr/hauts-de-seine/medecin/textes-reference/convention-medicale-2016)
- [MG France. Plaquettes tarifaires. 2023.](https://www.mgfrance.org/telechargements/guides-et-plaquettes-publics/2363-plaquettes-tarifaires)
- Assurance Maladie. La convention nationale 2016-2021 entre les médecins libéraux et l'Assurance Maladie synthèse

### À lire

[Suhard V. Historique des conventions médicales. IRDES. 2022. (PDF)](https://www.irdes.fr/documentation/syntheses/historique-des-conventions-medicales.pdf)
