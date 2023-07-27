+++
title = "Grossesse"
prefix = "la "
noindex = true
description = "Recommandations de prise en charge au cours de la grossesse: événements physiologiques ou pathologiques"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2022-06-27T13:48:14+02:00"
publishdate = "2023-02-06"
lastmod = "2023-03-20"
specialites = ["gynecologie-obstetrique"]
annees = "2022"
sources = ["CRAT", "SFD"]
tags = ["depistage", "grossesse", "prevention"]
anglais = ["Pregnancy"]
sctid = "118185001"
icd10 = ""
image = true
imageSrc = "Illustration de la grossesse par stories / Freepik"
todo = "critères TSH, HTA gravidique, calcium cible | SFA 2023 alcool: conso à chaque cs, évoquer RCIU"
+++

{{%article-summary%}}

*Vaste chapitre en chantier*

- 0 alcool et 0 tabac pendant la grossesse
- [Calendrier de grossesse de GestaClic](http://gestaclic.fr/calculette.html)

Chapitres dédiés:

- [Acné pendant la grossesse]({{< relref "acne.md" >}})
- [Alimentation pendant la grossesse (MangerBouger)](https://www.mangerbouger.fr/manger-mieux/a-tout-age-et-a-chaque-etape-de-la-vie/les-recommandations-et-conseils-avant-pendant-et-apres-la-grossesse/manger-equilibre-avant-pendant-et-apres-la-grossesse)
- [Anémie]({{< relref "anemie.md" >}})
- [Arrêt du tabac]({{< relref "arret-tabac.md" >}}) et de l'[alcool]({{< relref "sevrage-alcool.md" >}})
- [Candidoses pendant la grossesse]({{< relref "mycoses-dermatophytes-candidoses.md" >}})
- [Contraception du post-partum]({{< relref "contraception.md" >}})
- [Covid-19 à haut risque de forme grave]({{< relref "covid-19.md" >}})
- [Diabète gestationnel]({{< relref "diabete-gestationnel.md" >}})
- [Écoulement mamelonnaire]({{< relref "ecoulement-mamelonnaire.md" >}})
- [Hémorroïdes]({{< relref "hemorroides.md" >}})
- [Hypothyroïdie pendant la grossesse]({{< relref "hypothyroidie.md" >}})
- [Incontinence fécale]({{< relref "incontinence-fecale.md" >}})
- [Infection urinaire pendant la grossesse]({{< relref "infection-urinaire-cystite-pyelonephrite.md" >}})
- [Interruption volontaire de grossesse]({{< relref "interruption-volontaire-grossesse.md" >}})
- [Phlébite et score LEFt pendant la grossesse]({{< relref "thrombose-veineuse-profonde.md" >}})
- [Reflux pendant la grossesse]({{< relref "reflux-gastro-oesophagien.md" >}})
- [Syndrome du canal carpien]({{< relref "syndrome-canal-carpien.md" >}})
- [Varicelle pendant la grossesse]({{< relref "varicelle.md" >}})
- [Vomissements et nausées pendant la grossesse]({{< relref "vomissements-grossesse-hyperemese-gravidique.md" >}})

{{%/article-summary%}}
{{%collapse "Désir de grossesse et bilan pré-conceptionnel" %}}

[HAS. Projet de grossesse : informations, messages de prévention, examens à proposer. 2009. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2010-01/projet_de_grossesse_informations_messages_de_prevention_examens_a_proposer_-_fiche_de_synthese.pdf)
[CNGOF](http://www.cngof.fr/grossesse/197-la-consultation-preconceptionnelle-2)

{{% /collapse %}}
{{%collapse "Médicaments et vaccins pendant la grossesse" %}}

### Médicaments pendant la grossesse

Contrôler la sécurité d'utilisation d'un médicament pendant la grossesse ou l'allaitement.

<form class="d-flex align-items-center my-4">
  <div class="floating-label textfield-box form-ripple flex-grow-1">
    <label for="grossesse-crat">Médicament</label>
    <input class="form-control" id="grossesse-crat" type="search">
  </div>
  <button class="btn btn-primary ml-3" onClick="window.open(`http://le-crat.fr/articleSearchSaisie.php?recherche=${document.getElementById('grossesse-crat').value}`); return false;">Rechercher</button>
</form>

{{< references/le-crat >}}

### Vaccins chez la femme enceinte

Vaccins à réaliser pendant la grossesse ([fiche Vaccination]({{< relref "vaccination.md" >}})):

- dTcaPolio à chaque grossesse entre 20 et 36 SA (BoostrixTetra, Repevax)
- En période épidémique: grippe, Covid-19

> {{< references/calendrier-vaccinal >}}

{{% /collapse %}}
{{%collapse "Prise de poids pendant la grossesse" %}}

*Section en chantier*
{.alert .alert-info}

AET
: apport énergétique total
{.dl-inline}

### Augmentation des besoins énergétiques au cours de la grossesse

{{< table title="Augmentation des besoins énergétiques pendant la grossesse selon Anses 2019" class="table-sm" >}}
| Terme de la grossesse | Augmentation des apports (kcal/j) |
|-----------------------|----------------------------------:|
| T1                    |                                70 |
| T2                    |                               260 |
| T3                    |                               500 |
| Allaitement           |                               500 |
{{< /table >}}

> *[Anses. Avis de l'Agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail relatif à l'actualisation des repères alimentaires du PNNS pour les femmes enceintes ou allaitantes. 2019. (PDF)](https://www.anses.fr/fr/system/files/NUT2017SA0141.pdf)*

Il est déconseillé de descendre sous 1600 kcal/j (même si [obésité]({{< relref "obesite-adulte.md" >}}), *[Eades et al 2017](https://pubmed.ncbi.nlm.nih.gov/28531829/)*)

### Objectif de prise de poids pendant la grossesse

{{< table title="Prise de poids recommandée selon l'indice de masse corporelle avant la grossesse. Dr JB Fron d'après IOM Pregnancy Weight Guidelines 2009" >}}
| Morphotype   | IMC avant grossesse (kg/m²) | Prise de poids recommandée <br>pendant la grossesse (kg) |
|--------------|----------------------------:|---------------------------------------------------------:|
| Maigreur     |                      < 18,5 |                                                12,5 - 18 |
| Poids normal |                 18,5 - 24,9 |                                                11,5 - 16 |
| Surpoids     |                   25 - 29,9 |                                                 7 - 11,5 |
| Obésité      |                        ≥ 30 |                                                    5 - 9 |
{{< /table >}}

> *[Louvet et al; Société Francophone du Diabète (SFD). Nutrition et diabète gestationnel. Recommandations de bonnes pratiques. 2022. (PDF)](https://www.sfdiabete.org/sites/www.sfdiabete.org/files/files/ressources/reco_nutrition_diabete_gestationnel_2022.pdf)*

{{% /collapse %}}
{{%collapse "FMC gratuite" %}}

{{< card-link-external title="MOOC Santé mentale périnatale au cours des 1000 premiers jours" subtitle="EPSM et PATH ..." url="https://pns-mooc.com/fr/mooc/25/presentation">}}

{{% /collapse %}}
{{%sources%}}

### À lire

- [Boisseau N. Physical Activity During the Perinatal Period: Guidelines for Interventions During the Perinatal Period from the French National College of Midwives. J Midwifery Womens Health. 2022.](https://onlinelibrary.wiley.com/doi/10.1111/jmwh.13425)
- [HAS. Grossesse, accouchement et suivi postnatal. Panorama.](https://www.has-sante.fr/jcms/p_3286443/fr/grossesse-accouchement-et-suivi-postnatal)

{{%/sources%}}
