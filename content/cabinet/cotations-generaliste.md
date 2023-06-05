+++
title = "Aides à la cotation des consultations en médecine générale"
titleSeo = "Aide cotation généraliste"
noindex = true
auteurs = ["Jean-Baptiste FRON"]
date = "2021-01-23T19:15:41+02:00"
publishdate = "2023-06-01"
lastmod = "2023-06-01"
annees = "2023"
sources = ["Assurance Maladie"]
tags = []
draft = true
image = true
imageSrc = "unDraw"
todo = "FS exemple frottis, MD, jour férié, IK, routexl, MPH aussi quand change de MT ?"
+++

En attendant un outil plus performant sur RecoMédicales, *OMNIPrat* permet de retrouver ses petits pour la cotation des actes en médecine générale (NGAP = Nomenclature Générale des Actes Professionnels)
{.lead}

{{< card-link-external title="Outil d'aide à la cotation et le remplissage des feuilles de soins" url="https://omniprat.org/cotation/" subtitle="OMNIprat">}}

## Les nouvelles cotations

- IMT à 60€: depuis le 1er mai, consultation où l'on déclare un patient en ALD comme médecin traitant  
  Si l'ALD n'est pas déclarée, la déclarer et seulement inscrire le patient quand elle a été validée.
- G à 25€: après 7 ans à 25€, le G (GS) passera à 26,5€ le 1er novembre.

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

Cotations pour la consultation d'un adulte.

{{< table >}}
| Code NGAP | Description                                                    | Tarif (€) |
|-----------|----------------------------------------------------------------|----------:|
| G(S)   | Consultation                                                   |        25 |
| TCG       | Téléconsultation                                               |        25 |
| COB       | Consultation de l'enfant à A6, A8-9, A11-13, A15-16 (à 100%)   |        25 |
| MPH       | Remplissage du dossier MDPH                                    |        60 |
| IMT       | Déclaration MT d'un patient en ALD (à 100%)                      |        60 |
| CCP | 1re consultation contraception avant 26 ans (à 100%, anonymisable) |        46 |
| G(S)   | Consultation contraception annuelle avant 26 ans (à 100% en EXO3)   |        25 |
| APC       | Adressé par son MT pour une compétence explicite (ne pas revoir à ± 4 mois)  ||
{{< /table >}}

<!-- APC -->

> A = année ; M = mois

> MIS et PIV deviennent MTX

Sur la feuille de soin papier écrire: CCX pour CSO ou CSE, CCE pour MPH
{.alert .alert-info}

  </div><!-- No more than 2-spaces indentation to prevent code block declaration -->
  <div aria-labelledby="enfant-tab" class="tab-pane fade" id="enfant-panel" role="tabpanel">

### Cotations des consultations de l'enfant {.typography-headline-5}

{{< table title="Cotations des consultations de l'enfant avant 6 ans" class="table-wrap" >}}
| Code NGAP                                           | Description                                                                                                                        | Tarif (€) |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|----------:|
| G + MEG                                             | Consultation avant 6 ans                                                                                                           |        30 |
| VG + MEG + MD                                       | Visite avant 6 ans                                                                                                                 |        40 |
| [COD]({{< relref "examens-suivi-nourrisson.md" >}}) | Examens à 13-14j, M1, M2, M3, M4, M5,<br> M6, M12, M13, M16-18, A3, A4, A5  (à 100%)                                                   |        30 |
| COE*                                                | Examen obligatoire 8 jours, 9-10 mois<br> ou 24-25 mois (à 100%, [cerfa](https://www.formulaires.service-public.fr/gf/cerfa_12596.do)) |        46 |
| CSO*                                                | Suivi 3-12 ans en obésité (max 2/an)                                                                                               |        46 |
| CSE*                                                | Suivi enfant autiste (1/an)                                                                                                        |        46 |
| MPH                                                 | Remplissage du dossier MDPH                                                                                                        |        60 |
| ASE                                                 | Enfant pris en charge par l'ASE                                                                                              |  46         |
{{< /table >}}

Sur la feuille de soin papier écrire: CCX pour CSO ou CSE, CCE pour MPH
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
| Code NGAP | Description                      | Tarif (€) |
|-----------|----------------------------------|----------:|
| VG(S) + MD   | Visite à domicile pour un adulte |   25 + 10 |
| VL + MD   | Neurodégénératif, soins palliatifs (4/an) ou +80 ans en ALD (1/trimestre) | 60 + 10 |
{{< /table >}}

  </div>
  <div aria-labelledby="actes-tab" class="tab-pane fade" id="actes-panel" role="tabpanel">

Actes et surcotations disponibles pour le médecin généraliste.

<!-- RQD, MCG, MUT, MCU, MRT -->

  </div>
  </div>
</div>

## Sources

- [Ameli. Tarifs conventionnels des médecins généralistes en France métropolitaine . 15 mai 2023.](https://www.ameli.fr/lille-douai/medecin/exercice-liberal/facturation-remuneration/consultations-actes/tarifs/tarifs-generalistes/tarifs-metropole)
- [MG France. Plaquettes tarifaires. 2023.](https://www.mgfrance.org/telechargements/guides-et-plaquettes-publics/2363-plaquettes-tarifaires)
- Assurance Maladie. La convention nationale 2016-2021 entre les médecins libéraux et l'Assurance Maladie synthèse
