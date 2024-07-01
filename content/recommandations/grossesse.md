+++
title = "Grossesse"
prefix = "la "
noindex = true
description = "Recommandations de prise en charge au cours de la grossesse: événements physiologiques ou pathologiques"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2022-06-27T13:48:14+02:00"
publishdate = "2023-02-06"
lastmod = "2024-06-28"
specialites = ["gynecologie-obstetrique"]
annees = "2022"
sources = ["CNGOF", "CRAT", "SFD"]
tags = ["depistage", "grossesse", "prevention"]
english = ["Pregnancy"]
sctid = "118185001"
icd10 = ""
image = true
imageSrc = "Illustration de la grossesse par stories / Freepik"
todo = "évaluer les apports calcium, FCV, dépistage DG, électrophorèse Hb, fiche ANSM vaccins, grossesse altitude, dépression post-partum http://beh.santepubliquefrance.fr/beh/2023/18/2023_18_1.html"
chart = true
+++

{{%article-summary%}}

- 0 alcool et 0 tabac pendant la grossesse, interroger à chaque consultation
- 1/3 des tests de grossesse sont non conformes (*[DGCCRF](https://www.economie.gouv.fr/dgccrf/les-autotests-de-fertilite-au-banc-dessai)*)
- Vaccins Covid-19, grippe et coqueluche à chaque grossesse, anti-VRS Abrysvo de septembre à janvier (une seule dose, non disponible pour le moment)
- [Nata](https://play.google.com/store/search?q=NATA&c=apps): l'appli officielle du suivi de grossesse multilingue
- Besoins en [calcium]({{< relref "apports-calcium.md" >}}): 1 g/j (*IOF*), [alimentation pendant la grossesse (MangerBouger)](https://www.mangerbouger.fr/manger-mieux/a-tout-age-et-a-chaque-etape-de-la-vie/les-recommandations-et-conseils-avant-pendant-et-apres-la-grossesse/manger-equilibre-avant-pendant-et-apres-la-grossesse) et guide [activité physique](https://www.has-sante.fr/upload/docs/application/pdf/2022-11/ap_fiche_grossesse.pdf) (PDF)

Chapitres dédiés:

- [Acné pendant la grossesse]({{< relref "acne.md" >}})
- [Allaitement]({{< relref "allaitement.md" >}})
- [Anémie]({{< relref "anemie.md" >}})
- [Arrêt du tabac]({{< relref "arret-tabac.md" >}}) et de l'[alcool]({{< relref "sevrage-alcool.md" >}})
- Complications de grossesse
  - [Hémorroïdes]({{< relref "hemorroides.md" >}})
  - [Hypertension artérielle et grossesse]({{< relref "hypertension-arterielle.md" >}})
  - [Incontinence fécale]({{< relref "incontinence-fecale.md" >}})
  - [Phlébite]({{< relref "thrombose-veineuse-profonde.md" >}})
  - [Reflux]({{< relref "reflux-gastro-oesophagien.md" >}})
  - [Syndrome du canal carpien]({{< relref "syndrome-canal-carpien.md" >}})
  - [Vomissements et nausées pendant la grossesse]({{< relref "vomissements-grossesse-hyperemese-gravidique.md" >}})
- Infections pendant la grossesse
  - [Covid-19 à haut risque de forme grave]({{< relref "covid-19.md" >}})
  - [Infection urinaire pendant la grossesse]({{< relref "infection-urinaire-cystite-pyelonephrite.md" >}})
  - [Mycoses]({{< relref "mycoses-dermatophytes-candidoses.md" >}})
  - [Varicelle]({{< relref "varicelle.md" >}})
- [Dépression]({{< relref "depression.md" >}})
- [Diabète gestationnel]({{< relref "diabete-gestationnel.md" >}})
- [Écoulement mamelonnaire]({{< relref "ecoulement-mamelonnaire.md" >}})
- [Hypothyroïdie pendant la grossesse]({{< relref "hypothyroidie.md" >}})
- [Interruption volontaire de grossesse]({{< relref "interruption-volontaire-grossesse.md" >}})
- [Post-partum]({{< relref "post-partum.md" >}})
- [Violences faites aux femmes]({{< relref "violences-femmes.md" >}})

{{%/article-summary%}}
{{%collapse "La maternité en France"%}}

Rechercher une grossesse avant **32 ans** pour avoir 90 % de chance d'obtenir 2 enfants (27 ans sans AMP) ou avant 35 pour 1 (32 ans sans AMP). – *[Habbema et al 2015](https://pubmed.ncbi.nlm.nih.gov/26185187/)*
{.alert .alert-info}

> 678.000 naissances en France 2023 (-6,6 % sur 1 an), soit **1,64** enfant par femme.
{.lead .my-3}

{{< figure-chart title="Évolution du nombre de maternités et de l'indicateur conjoncturel de fécondité depuis 1975 en France métropolitaine. Dr JB Fron d'après Drees Les établissements de santé - édition 2022 (fiche 21) et Insee Bilan démographique 2023. NB. Échelle non linéaire en abscisse" >}}

<script>
const chartOptions1 = {
  series: [{
    name: 'Maternités',
    data: [1369, 1035, 814, 695, 581, 519, 471, 458, null]
  },
  {
    name: 'Indicateur de fécondité',
    data: [192.7, 181.4, 173.3, 187.4, 198, 199.2, 183.6, 178.2, 163.9]
  }],
  chart: { type: 'line', height: 280 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#ffa600'], curve: 'smooth', width: 4 },
  title: { text: 'Évolution du nombre de maternités en France métropolitaine' },
  xaxis: { categories: [1975, 1985, 1996, 2000, 2006, 2012, 2018, 2020, 2023] },
  yaxis: [
    {
      title: { text: 'Maternités'},
      labels: { style: { colors: '#757575' }},
      decimalsInFloat: 0,
      forceNiceScale: true,
      tickAmount: 4,
      min: 0
    },
    {
      opposite: true,
      title: { text: 'Fécondité (pour 100 femmes)' },
      decimalsInFloat: 1,
    }
  ],
  tooltip: {
    y: [{ formatter: function(value) { return value} },
      { formatter: function(value) { return value }}]
  },
}
</script>

> **ICF =** Indicateur conjoncturel de fécondité (naissances pour 100 femmes). Précisément: nombre d'enfants qu'aurait une femme tout au long de sa vie, si les taux de fécondité observés l'année considérée à chaque âge demeuraient inchangés. Plus simplement: 1,64 enfants par femme en 2023.

Malgré les fermetures, **43 %** des maternités ont réalisé en 2020 **moins de 3 accouchements par jour**. – *[Drees Les établissements de santé - édition 2022 (fiche 21)](https://drees.solidarites-sante.gouv.fr/publications-documents-de-reference-communique-de-presse/panoramas-de-la-drees/les-etablissements)*
{.alert .alert-info}

{{% /collapse %}}
{{%collapse "Calendrier de grossesse" %}}

{{< card-link-external title="Calendrier gestationnel" url="http://gestaclic.fr/calculette.html" subtitle="par GestaClic" >}} {{< card-link-external title="Calendrier de grossesse" url="https://www.perinat-nef.org/public-2/calendrier-de-grossesse/" subtitle="par nef" >}}

{{< outils/terme >}}

{{% /collapse %}}
{{%collapse "Suivi de grossesse" "show"%}}

Vaccinations Covid-19 et grippe à n'importe quel terme et coqueluche entre 20 et 36 SA à chaque grossesse.

{{< table title="Suivi simplifié de la grossesse. Dr JB Fron d'après HAS 2009 et Collège" class="table-wrap">}}
| Moment   | Clinique | Examen  | Traitement |
|----------|----------|---------|------------|
| Chaque consultation | PA, poids, {{%tooltip "ECBU si IU pendant la grossesse, uropathie, diabète, cystites récidivantes"%}}BU{{%/tooltip%}}, signes de grossesse | Toxoplasmose si -, {{%tooltip "Jusqu'à 18 SA"%}}rubéole si -{{%/tooltip%}}, TSH si sympt. aspécifiques | Arrêt alcool/tabac et {{%tooltip "lecrat.fr"%}}automédication{{%/tooltip%}}, vaccin grippe+covid, {{%tooltip "mangerbouger.fr"%}}alimentation{{%/tooltip%}} (listériose ++) |
| Préconceptionnelle<br>ou 1re consultation | ATCD (dont varicelle), profession, vaccinations, précarité, maltraitance, DDR | NFS, ferritine, {{%tooltip "Sauf carte de groupe"%}}Gpe ABO Rh{{%/tooltip%}}, ± {{%tooltip "Si Rh- ou antécédent de transfusion"%}}RAI{{%/tooltip%}}<br>Sérologies {{%tooltip "Sauf vaccination double dose documentée"%}}rubéole{{%/tooltip%}}, toxoplasmose, syphilis, VIH, VHC, {{%tooltip "AgHBs sans vaccination"%}}anti-HBs{{%/tooltip%}}, TSH si sympt. aspécifiques {{< modal-btn modal-fdr-hypothyroidie >}}et FDR{{< /modal-btn >}} | {{%tooltip "Jusqu'à 12 SA"%}}acide folique{{%/tooltip%}} 0,4 mg/j, {{%tooltip "De 11 à 16 SA + 6j"%}}écho T1{{%/tooltip%}}, dépistage T21 |
| 4e mois<br>16-20 SA || {{%tooltip "Gratuite jusqu'à 6 mois après l'accouchement"%}}Cs dentaire{{%/tooltip%}} ||
| 5e mois<br>20-24 SA || {{%tooltip "De 20 à 24 SA"%}}Écho T2{{%/tooltip%}} | Vaccin coqueluche |
| 6e mois<br>24-28 SA || NFS, AgHBs, ± {{%tooltip "Si Rh- ou antécédent de transfusion"%}}RAI{{%/tooltip%}} | ± Rattrapage coqueluche |
| 7e mois<br>28-32 SA || {{%tooltip "32 SA"%}}Écho T3{{%/tooltip%}} | ± Rattrapage coqueluche |
| 8e mois<br>32-37 SA || {{%tooltip "Sauf carte de groupe"%}}Gpe ABO Rh{{%/tooltip%}}, prélèvement vaginal (strepto B) | VitD 100.000 UI, {{%tooltip "De septembre à janvier"%}}Abrysvo{{%/tooltip%}} (NR), ± Rattrapage coqueluche |
| 9e mois<br>37-42 SA ||||
{{< /table >}}

> – *HAS 2009*, *USPTF 2023*, *Calendrier vaccinal 2024* (Abrysvo d'après *HAS 2024*)

{{% /collapse %}}
{{%collapse "Médicaments et vaccins pendant la grossesse" %}}

{{< references/le-crat >}}

### Vaccins chez la femme enceinte

Vaccins à réaliser pendant la grossesse ([chapitre dédié Vaccination]({{< relref "vaccination.md" >}})):

- Covid-19 ARNm au 1er trimestre (RR de réanimation sans vaccination: 18)
- dTcaPolio à chaque grossesse entre 20 et 36 SA (BoostrixTetra, Repevax)  
  Délai minimal entre 2 doses de 4 semaines.
- Avant ou en début de période épidémique: [grippe]({{< relref "grippe.md" >}})

> – {{< references/calendrier-vaccinal >}} et *Vaccination Info Service*

{{< card-link-external title="Tableau Vaccins et grossesse" url="https://ansm.sante.fr/uploads/2022/04/27/20220427-dossier-medicament-grossesse-vaccins-tableau.pdf" subtitle="par l'ANSM" >}}

{{% /collapse %}}
{{%collapse "Prévention de l'allo-immunisation Rhésus D" %}}

Pour toutes les femmes: double détermination du **groupe sanguin RhD** et rechercher d'agglutinines irrégulières (**RAI**) dès le premier trimestre de grossesse.
{.alert .alert-info}

### Femme Rhésus D négatif

- Information sur l'immunisation anti-rhésus D: dépistage, suivi (RAI au 1<sup>er</sup> trimestre, 6e, 8e et 9e mois), prévention
- Détermination du RhD chez le conjoint  
  Si le conjoint est RhD+ ou inconnu: génotypage RhD fœtal sur sang maternel à partir de 11 SA (que la grossesse soit unique ou multiple).
- Si génotypage RhD fœtal:
  - Fœtus RhD positif: injection d'immunoglobuline humaine anti-D (IgRh, [Rhophylac® 300](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=68484547&typedoc=R)) à 28 SA (avant si évènement à risque)
  - Fœtus RhD négatif: 2e génotypage après 15 SA à au moins 2 semaines du premier. Si RhD négatif confirmé, pas de prévention d'allo-immunisation nécessaire.
  - Le RhD fœtal ne peut être déterminé sur 2 prélèvements: considérer comme RhD positif

> – *CNGOF 2017*

**NB.** Suivi de la RAI également en cas d'antécédent de **transfusion**.

{{% /collapse %}}
{{%collapse "Imageries et grossesse" %}}

Un scanner thoraco-abdominopelvien avec ou sans injection de produit de contraste peut être réalisé s'il est indiqué pour la mère, << la balance bénéfice/risque de cet examen devant prévaloir à la décision de sa réalisation >>.

> – *CNGOF/SFMU/SFAR 2022*

{{% /collapse %}}
{{%collapse "Urgences pendant la grossesse" %}}

### Traumatisme pendant la grossesse

Chute ou traumatisme thoraco-abdominal non grave: examen obstétrical systématique après 20 SA

> – *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement imminent

Signes prédictifs d'accouchement imminent à l'interrogatoire:

- Multiparité
- Antécédent d'accouchement extrahospitalier ou rapide
- Contractions utérines douloureuses et rapprochées
- Envie de pousser

Toucher vaginal avant appel urgent de l'équipe obstétricale prévue.

En ville, position gynécologique suggérée pour pouvoir réaliser la manœuvre de Mc Roberts (décubitus dorsal, cuisses hyperfléchies sur le tronc et avec possibilité d'abaisser la tête fœtale dans l'axe ombilico-coccygien).

Pas d'épisiotomie systématique.

> – *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement prématuré (MAP)

Pas de transport en SAMU systématique des MAP.

> – *CNGOF/SFMU/SFAR 2022*

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

- [HAS. Recommandation vaccinale contre les infections à VRS chez les femmes enceintes. 2024.](https://has-sante.fr/jcms/p_3505344/fr/recommandation-vaccinale-contre-les-infections-a-vrs-chez-les-femmes-enceintes)
- {{< references/calendrier-vaccinal >}}
- [Ameli Médecin. Maternité : l'examen bucco-dentaire désormais pris en charge jusqu'au 6e mois après l'accouchement. 28/02/2024.](https://www.ameli.fr/medecin/actualites/maternite-l-examen-bucco-dentaire-desormais-pris-en-charge-jusqu-au-6e-mois-apres-l-accouchement)
- [Insee. Bilan démographique 2023 - Fécondité. 2024.](https://www.insee.fr/fr/statistiques/7746164?sommaire=7746197)
- [HCSP. Dépistage systématique de l'infection à cytomégalovirus pendant la grossesse. 08/12/2023.](https://www.hcsp.fr/explore.cgi/avisrapportsdomaine?clefr=1367)
- [Ministère de la Santé. Vaccination contre le Covid-19 et maternité. 2023. (PDF)](https://sante.gouv.fr/IMG/pdf/fiche_-_vaccination_contre_le_covid-19_et_maternite.pdf)
- [Vaccination Info Service. Femmes enceintes. 06/06/2023.](https://professionnels.vaccination-info-service.fr/Recommandations-vaccinales-specifiques/Personnes-exposees-a-des-risques-specifiques/Femmes-enceintes)
- [Medqual. La vaccination des femmes enceintes. VacciNews 03. 2023. (PDF)](https://medqual.fr/images/VACCINEWS/LETTRES/VACCINEWS_3.pdf)
- [US Preventive Services Task Force, Barry MJ et al. Folic Acid Supplementation to Prevent Neural Tube Defects: US Preventive Services Task Force Reaffirmation Recommendation Statement. JAMA. 2023.](https://jamanetwork.com/journals/jama/fullarticle/2807739)
- [CNGOF, SFMU, SFAR. Prise en charge des urgences obstétricales en médecine d'urgence. Recommandations de Pratiques Professionnelles. 2022.](https://sfar.org/prise-en-charge-des-urgences-obstetricales-en-medecine-durgence/)
- [CNGOF. Vaccin anti SARS-CoV-2 et grossesse 3e injection ? Avis du 17 novembre 2021. (PDF)](https://cngof.fr/app/pdf/COVID19//%20Vaccination-anti-covid-19/CNGOF-GRIG-171021-3e%20dose%20vaccin%20anti%20SARS-COV2%20femmes%20enceintes.pdf?x94073)
- Collège national des gynécologues et obstétriciens français (CNGOF). Gynécologie obstétrique Réussir son DFASM. 2021.
- [CNGOF. Prévention de l'allo-immunisation Rhésus D chez les patientes de groupe Rhésus D négatif. 2017. (PDF)](https://cngof.fr/rpc/)
- [HAS. Projet de grossesse : informations, messages de prévention, examens à proposer. 2009. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2010-01/projet_de_grossesse_informations_messages_de_prevention_examens_a_proposer_-_fiche_de_synthese.pdf)
- [DFS. Recommandations pour la prévention des anomalies de la fermeture du tube neural. 2001. (PDF)](https://sante.gouv.fr/IMG/pdf/Recommandations_pour_la_prevention_des_anomalies_de_la_fermeture_du_tube_neural.pdf)

### Bibliographie en attente

- [Cour des Comptes. La politique de périnatalité. 2024.](https://www.ccomptes.fr/fr/publications/la-politique-de-perinatalite)
- [Vigoureux S et al; CNGOF. Prévention de l'allo-immunisation anti-RH1 au premier trimestre de la grossesse: recommandations pour la pratique clinique du Collège National des Gynécologues-Obstétriciens Français. Gynécologie Obstétrique Fertilité & Sénologie. 2024.](https://www.sciencedirect.com/science/article/abs/pii/S2468718924000813)
- [HAS. Accompagnement médico-psycho-social des femmes, des parents et de leur enfant, en situation de vulnérabilité, pendant la grossesse et en postnatal. 2024.](https://www.has-sante.fr/jcms/p_3271226/fr/accompagnement-medico-psycho-social-des-femmes-des-parents-et-de-leur-enfant-en-situation-de-vulnerabilite-pendant-la-grossesse-et-en-postnatal)
- [HAS. Situations pathologiques pouvant relever de l'hospitalisation à domicile au cours de l'ante et du post-partum. 2011.](https://www.has-sante.fr/jcms/c_1066375/fr/situations-pathologiques-pouvant-relever-de-l-hospitalisation-a-domicile-au-cours-de-l-ante-et-du-post-partum)
- [Boisseau N. Physical Activity During the Perinatal Period: Guidelines for Interventions During the Perinatal Period from the French National College of Midwives. J Midwifery Womens Health. 2022.](https://onlinelibrary.wiley.com/doi/10.1111/jmwh.13425)
- [HAS. Grossesse, accouchement et suivi postnatal. Panorama.](https://www.has-sante.fr/jcms/p_3286443/fr/grossesse-accouchement-et-suivi-postnatal)
- HAS 2016 +++
- [Service-Public. A-t-on droit à des absences liées à la grossesse dans la fonction publique ? 24/11/2023.](https://www.service-public.fr/particuliers/vosdroits/F34536)

{{%/sources%}}
{{% modal title="Liste facteurs de risque d'hypothyroïdie" id="modal-fdr-hypothyroidie"%}}

{{< clinique/facteur-risque-hypothyroidie >}}

{{% /modal %}}
