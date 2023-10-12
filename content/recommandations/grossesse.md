+++
title = "Grossesse"
prefix = "la "
noindex = true
description = "Recommandations de prise en charge au cours de la grossesse: événements physiologiques ou pathologiques"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2022-06-27T13:48:14+02:00"
publishdate = "2023-02-06"
lastmod = "2023-10-05"
specialites = ["gynecologie-obstetrique"]
annees = "2022"
sources = ["CNGOF", "CRAT", "SFD"]
tags = ["depistage", "grossesse", "prevention"]
anglais = ["Pregnancy"]
sctid = "118185001"
icd10 = ""
image = true
imageSrc = "Illustration de la grossesse par stories / Freepik"
todo = "critères TSH, dépression post-partum http://beh.santepubliquefrance.fr/beh/2023/18/2023_18_1.html"
+++

{{%article-summary%}}

*Vaste chapitre en chantier*

- 0 alcool et 0 tabac pendant la grossesse, interroger à chaque consultation
- Vaccins grippe et coqueluche à chaque grossesse et 3 doses de Covid-19
- [Calendrier de grossesse de GestaClic](http://gestaclic.fr/calculette.html)
- Besoins en [calcium]({{< relref "apports-calcium.md" >}}): 1 g/j (*IOF*)

Chapitres dédiés:

- [Acné pendant la grossesse]({{< relref "acne.md" >}})
- [Alimentation pendant la grossesse (MangerBouger)](https://www.mangerbouger.fr/manger-mieux/a-tout-age-et-a-chaque-etape-de-la-vie/les-recommandations-et-conseils-avant-pendant-et-apres-la-grossesse/manger-equilibre-avant-pendant-et-apres-la-grossesse)
- [Anémie]({{< relref "anemie.md" >}})
- [Arrêt du tabac]({{< relref "arret-tabac.md" >}}) et de l'[alcool]({{< relref "sevrage-alcool.md" >}})
- [Contraception du post-partum]({{< relref "contraception.md" >}})
- [Covid-19 à haut risque de forme grave]({{< relref "covid-19.md" >}})
- [Diabète gestationnel]({{< relref "diabete-gestationnel.md" >}})
- [Écoulement mamelonnaire]({{< relref "ecoulement-mamelonnaire.md" >}})
- [Hémorroïdes]({{< relref "hemorroides.md" >}})
- [Hypertension artérielle et grossesse]({{< relref "hypertension-arterielle.md" >}})
- [Hypothyroïdie pendant la grossesse]({{< relref "hypothyroidie.md" >}})
- [Incontinence fécale]({{< relref "incontinence-fecale.md" >}})
- [Infection urinaire pendant la grossesse]({{< relref "infection-urinaire-cystite-pyelonephrite.md" >}})
- [Interruption volontaire de grossesse]({{< relref "interruption-volontaire-grossesse.md" >}})
- [Mycoses pendant la grossesse]({{< relref "mycoses-dermatophytes-candidoses.md" >}})
- [Phlébite et score LEFt pendant la grossesse]({{< relref "thrombose-veineuse-profonde.md" >}})
- [Reflux pendant la grossesse]({{< relref "reflux-gastro-oesophagien.md" >}})
- [Syndrome du canal carpien]({{< relref "syndrome-canal-carpien.md" >}})
- [Varicelle pendant la grossesse]({{< relref "varicelle.md" >}})
- [Vomissements et nausées pendant la grossesse]({{< relref "vomissements-grossesse-hyperemese-gravidique.md" >}})

{{%/article-summary%}}
{{%collapse "Désir de grossesse et bilan pré-conceptionnel" %}}

### Désir de grossesse

Prise de 0,4 à 0,8 mg/j d'acide folique (*USPTF*)

[HAS. Projet de grossesse : informations, messages de prévention, examens à proposer. 2009. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2010-01/projet_de_grossesse_informations_messages_de_prevention_examens_a_proposer_-_fiche_de_synthese.pdf)

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

- Covid-19 (RR de réanimation: 18)
- dTcaPolio à chaque grossesse entre 20 et 36 SA (BoostrixTetra, Repevax)
- En période épidémique: grippe

> {{< references/calendrier-vaccinal >}}

{{% /collapse %}}
{{%collapse "Prévention de l'allo-immunisation Rhésus D" %}}

Pour toutes les femmes: double détermination du groupe sanguin RhD et rechercher d'agglutinines irrégulières (RAI) dès le premier trimestre de grossesse.

### Femme Rhésus D négatif

- Information sur l'immunisation anti-rhésus D (dépistage, suivi, prévention)
- Détermination du RhD chez le conjoint  
  Si le conjoint est RhD+ ou inconnu : génotypage RhD fœtal sur sang maternel à partir de 11 SA (que la grossesse soit unique ou multiple)
- Si génotypage RhD fœtal:
  - Fœtus RhD positif: injection d'immunoglobuline humaine anti-D (IgRh, [Rhophylac® 300](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=68484547&typedoc=R)) à 28 SA (avant si évènement à risque)
  - Fœtus RhD négatif: 2e génotypage après 15 SA à au moins 2 semaines du premier. Si RhD négatif confirmé, pas de prévention d'allo-immunisation nécessaire.
  - Le RhD fœtal ne peut être déterminé sur 2 prélèvements: considérer comme RhD positif

> - *CNGOF 2017*

{{% /collapse %}}
{{%collapse "Imageries et grossesse" %}}

Un scanner thoraco-abdominopelvien avec ou sans injection de produit de contraste peut être réalisé s'il est indiqué pour la mère, << la balance bénéfice/risque de cet examen devant prévaloir à la décision de sa réalisation >>.

> - *CNGOF/SFMU/SFAR 2022*

{{% /collapse %}}
{{%collapse "Urgences pendant la grossesse" %}}

### Traumatisme pendant la grossesse

- Chute ou traumatisme thoraco-abdominal non grave: examen obstétrical systématique après 20 SA

> - *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement imminent

Signes prédictifs d'accouchement imminent à l'interrogatoire: multiparité, antécédent d'accouchement extrahospitalier ou rapide, contractions utérines douloureuses et rapprochées, envie de pousser.

Toucher vaginal avant appel urgent de l'équipe obstétricale prévue.

En ville, position gynécologique suggérée pour pouvoir réaliser la manœuvre de Mc Roberts (décubitus dorsal, cuisses hyperfléchies sur le tronc et avec possibilité d'abaisser la tête fœtale dans l'axe ombilico-coccygien).

Pas d'épisiotomie systématique.

> - *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement prématuré (MAP)

Pas de transport en SAMU systématique des MAP.

> - *CNGOF/SFMU/SFAR 2022*

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
{{%collapse "FMC gratuites" %}}

{{< card-link-external title="MOOC Santé mentale périnatale au cours des 1000 premiers jours" subtitle="EPSM et PATH ..." url="https://pns-mooc.com/fr/mooc/25/presentation">}}

{{< youtube id="NA3R3ZdaBew" title="Déni de grossesse : percevoir les grossesses non perçues (Pédagogie Numérique en Santé)" >}}

{{% /collapse %}}
{{%sources%}}

- [Ministère de la Santé. Vaccination contre le Covid-19 et maternité. 2023. (PDF)](https://sante.gouv.fr/IMG/pdf/fiche_-_vaccination_contre_le_covid-19_et_maternite.pdf)
- [US Preventive Services Task Force, Barry MJ et al. Folic Acid Supplementation to Prevent Neural Tube Defects: US Preventive Services Task Force Reaffirmation Recommendation Statement. JAMA. 2023.](https://jamanetwork.com/journals/jama/fullarticle/2807739)
- [CNGOF, SFMU, SFAR. Prise en charge des urgences obstétricales en médecine d'urgence. Recommandations de Pratiques Professionnelles. 2022.](https://sfar.org/prise-en-charge-des-urgences-obstetricales-en-medecine-durgence/)
- [CNGOF. Vaccin anti SARS-CoV-2 et grossesse 3e injection ? Avis du 17 novembre 2021. (PDF)](http://www.cngof.net/Publications-CNGOF/Pratique-clinique/COVID-19/CNGOF-GRIG-171021-3e%20dose%20vaccin%20anti%20SARS-COV2%20femmes%20enceintes.pdf)
- [CNGOF. Prévention de l'allo-immunisation Rhésus D chez les patientes de groupe Rhésus D négatif. 2017. (PDF)](https://cngof.fr/app/pdf/RPC//1-RPC%20DU%20CNGOF/2017/preventionalloimmunisation-MAJ-2017-12-21.pdf?x72671)

### Bibliographie en attente

- [Boisseau N. Physical Activity During the Perinatal Period: Guidelines for Interventions During the Perinatal Period from the French National College of Midwives. J Midwifery Womens Health. 2022.](https://onlinelibrary.wiley.com/doi/10.1111/jmwh.13425)
- [HAS. Grossesse, accouchement et suivi postnatal. Panorama.](https://www.has-sante.fr/jcms/p_3286443/fr/grossesse-accouchement-et-suivi-postnatal)

{{%/sources%}}
