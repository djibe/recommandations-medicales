+++
id = "0190e8c3-b7a2-7476-b6a7-02ff6592241f"
title = "Grossesse"
prefix = "la "
noindex = true
longHtml = true
description = "Recommandations de prise en charge au cours de la grossesse: événements physiologiques ou pathologiques"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2022-06-27T13:48:14+02:00"
publishdate = "2023-02-06"
lastmod = "2025-06-30"
specialites = ["gynécologie-obstétrique"]
annees = "2022"
sources = ["CNGOF", "HAS"]
tags = ["dépistage", "grossesse", "prévention"]
english = ["Pregnancy"]
sctid = "118185001"
icd10 = []
image = true
imageSrc = "Illustration de la grossesse par stories / Freepik"
todo = "Hebbema ou [Datascope](https://www.scansante.fr/applications/indicateurs-de-sante-perinatale), interrog 1re cs, évaluer les apports calcium, électrophorèse Hb, fiche ANSM vaccins, grossesse altitude, dépression post-partum http://beh.santepubliquefrance.fr/beh/2023/18/2023_18_1.html"
chart = true
modele = true
+++

{{%article-summary%}}

- 0 alcool et 0 tabac pendant la grossesse, interroger à chaque consultation
- 1/3 des tests de grossesse sont non conformes (*[DGCCRF](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/les-autotests-de-fertilite-au-banc-dessai)*)
- Vaccins Covid-19 et grippe (à l'automne) et coqueluche à chaque grossesse, anti-VRS Abrysvo si 32-36 SA de septembre à janvier (une seule dose)
- Appli officielle du suivi de grossesse: [Nata](https://play.google.com/store/search?q=NATA&c=apps) (multilingue)
- Besoins en [calcium]({{% relref "apports-calcium.md" %}}): 1 g/j (*IOF*), [alimentation pendant la grossesse (MangerBouger)](https://www.mangerbouger.fr/manger-mieux/a-tout-age-et-a-chaque-etape-de-la-vie/les-recommandations-et-conseils-avant-pendant-et-apres-la-grossesse) et guide [activité physique](https://www.has-sante.fr/upload/docs/application/pdf/2022-11/ap_fiche_grossesse.pdf) (PDF)

Chapitres dédiés:

- [Acné pendant la grossesse]({{% relref "acne.md" %}})
- [Allaitement]({{% relref "allaitement.md" %}})
- [Anémie]({{% relref "anemie.md" %}})
- [Arrêt du tabac]({{% relref "arret-tabac.md" %}}) et de l'[alcool]({{% relref "sevrage-alcool.md" %}})
- Complications de grossesse
  - [Hémorroïdes]({{% relref "hemorroides.md" %}})
  - [Hypertension artérielle et grossesse]({{% relref "hypertension-arterielle.md" %}})
  - [Incontinence fécale]({{% relref "incontinence-fecale.md" %}})
  - [Phlébite]({{% relref "thrombose-veineuse-profonde.md" %}})
  - [Reflux]({{% relref "reflux-gastro-oesophagien.md" %}})
  - [Syndrome du canal carpien]({{% relref "syndrome-canal-carpien.md" %}})
  - [Vomissements et nausées pendant la grossesse]({{% relref "vomissements-grossesse-hyperemese-gravidique.md" %}})
- Infections pendant la grossesse
  - [Covid-19 à haut risque de forme grave]({{% relref "covid-19.md" %}})
  - [Herpès génital]({{% relref "infections-herpes-virus.md" %}})
  - [Infection urinaire pendant la grossesse]({{% relref "infection-urinaire-cystite-pyelonephrite.md" %}})
  - [Mycoses]({{% relref "mycoses-dermatophytes-candidoses.md" %}})
  - [Varicelle]({{% relref "varicelle.md" %}})
- [Dépression]({{% relref "depression.md" %}})
- [Diabète gestationnel]({{% relref "diabete-gestationnel.md" %}})
- [Écoulement mamelonnaire]({{% relref "ecoulement-mamelonnaire.md" %}})
- [Hypothyroïdie pendant la grossesse]({{% relref "hypothyroidie.md" %}})
- [Interruption volontaire de grossesse]({{% relref "interruption-volontaire-grossesse.md" %}})
- [Post-partum]({{% relref "post-partum.md" %}})
- [Violences faites aux femmes]({{% relref "violences-femmes.md" %}})

{{%/article-summary%}}
{{%collapse "La maternité en France"%}}

> [!INFO]
> Rechercher une grossesse avant **32 ans** pour avoir 90 % de chance d'obtenir 2 enfants (27 ans sans AMP) ou avant 35 ans pour un enfant (32 ans sans AMP). -- *[Habbema et al 2015](https://pubmed.ncbi.nlm.nih.gov/26185187/)*

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
      min: 0
    }
  ],
}
</script>

> -- **ICF =** Indicateur conjoncturel de fécondité (naissances pour 100 femmes). Précisément: nombre d'enfants qu'aurait une femme tout au long de sa vie, si les taux de fécondité observés l'année considérée à chaque âge demeuraient inchangés. Plus simplement: 1,64 enfants par femme en 2023.

Malgré les fermetures, **43 %** des maternités ont réalisé en 2020 **moins de 3 accouchements par jour**. --  *[Drees Les établissements de santé - édition 2022 (fiche 21)](https://drees.solidarites-sante.gouv.fr/publications-documents-de-reference-communique-de-presse/panoramas-de-la-drees/les-etablissements)*
{.alert .alert-info}

{{< figure-chart title="Taux de fécondité selon l'âge de la mère en France métropolitaine. Dr JB Fron d'après [Insee. Tableaux de l'économie française - Natalité - Fécondité. 2020.](https://www.insee.fr/fr/statistiques/4277635?sommaire=4318291#graphique-figure2). Lecture: en 2019, 100 femmes de 25 ans ont mis au monde 8,0 enfants" id="chart-2">}}
<script>
const chartOptions2 = {
  series: [{
    name: 'Fécondité',
    data: [0.1, 0.2, 0.4, 0.7, 1.4, 2.3, 3.1, 4.1, 5.3, 6.5, 8.0, 9.6, 11.0, 12.3, 13.2, 13.7, 13.7, 13.1, 12.0, 10.9, 9.7, 8.4, 7.0, 5.5, 4.6, 3.6, 2.5, 1.8, 1.1, 0.6, 0.4, 0.2, 0.1, 0.0, 0.0, 0.0]
  }],
  chart: { type: 'line', height: 280 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#ffa600'], width: 4 },
  title: { text: 'Fécondité selon l’âge de la mère en 2019' },
  xaxis: { categories: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    tickAmount: 13,
    title: { text: 'Âge'},
  },
  yaxis: [
    {
      title: { text: 'Fécondité'},
      labels: { style: { colors: '#757575' }},
      decimalsInFloat: 0,
      forceNiceScale: true,
      tickAmount: 4,
      min: 0
    }
  ],
  tooltip: {
    y: [{ formatter: function(value) { return value} }]
  },
}
</script>

{{< figure-chart title="Taux de mortinatalité totale (spontanée et IMG en France entière) selon la tranche d'âge de la mère. Dr JB Fron d'après [Drees Indicateurs de santé périnatale](https://data.drees.solidarites-sante.gouv.fr/explore/dataset/1520_indicateurs-de-sante-perinatale/information/?refine.dossier=Mortinatalit%C3%A9)" id="chart-3">}}
<script>
const chartOptions3 = {
  series: [{
    name: 'Mortalité',
    data: [12.9, 9.4, 7.6, 7.7, 9.5, 13.5]
  },
  {
    name: 'Naissances',
    data: [13123, 81250, 200843, 251686, 141385, 38856]
  }],
  chart: { type: 'line', height: 280 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#ffa600'], width: 4 },
  title: { text: 'Mortinatalité selon l’âge de la mère en 2022' },
  xaxis: { categories: ['< 20', '20-24', '25-29', '30-34', '35-39', '≥ 40'],
    tickAmount: 13,
    title: { text: 'Âge'},
  },
  yaxis: [
    {
      title: { text: 'Mortalité (‰)'},
      labels: { style: { colors: '#757575' }},
      decimalsInFloat: 0,
      forceNiceScale: true,
      tickAmount: 4,
      min: 0
    },
    {
      opposite: true,
      title: { text: 'Naissances' },
      decimalsInFloat: 0,
    }
  ],
  tooltip: {
    y: [{ formatter: function(value) { return `${value} ‰` } }]
  },
}
</script>

{{% /collapse %}}
{{%collapse "Calendrier de grossesse" %}}

{{< card-link-external title="Calendrier gestationnel" url="http://gestaclic.fr/calculette.html" subtitle="par GestaClic" >}} {{< card-link-external title="Calendrier de grossesse" url="https://www.perinat-nef.org/public-2/calendrier-de-grossesse/" subtitle="par nef" >}}

{{< outils/terme >}}

{{% /collapse %}}
{{%collapse "Suivi de grossesse" "show"%}}

Éléments vitaux du suivi de grossesse:

- **Toxiques** à chaque consultation
- **Vaccinations**
  - Covid-19 et grippe d'octobre à janvier (possibles quel que soit le terme)
  - Coqueluche entre 20 et 36 SA à chaque grossesse
  - Anti-VRS par Abrysvo une seule fois si terme de 32 à 36 SA de septembre à janvier  
    ou Beyfortus chez le nouveau-né à défaut.
  - Avant la grossesse: rattrapage rubéole et varicelle
- **Activité physique**  
  30 minutes à 1h d'intensité modérée à intense ≥ 5 j/semaine, sédentarité < 7h/j (*CNSFF*).

{{< table title="Suivi simplifié de la grossesse. Dr JB Fron d'après *HAS* et *Collège*" class="table-wrap">}}
| Moment   | Clinique | Examen  | Traitement |
|----------|----------|---------|------------|
| Chaque consultation | PA, poids, signes de grossesse | {{%tooltip "ECBU si IU pendant la grossesse, uropathie, diabète, cystites récidivantes"%}}ECBU{{%/tooltip%}} si ATCD, toxoplasmose si -, {{%tooltip "Jusqu'à 18 SA"%}}rubéole si -{{%/tooltip%}}, TSH si sympt. aspécifiques | Arrêt alcool/tabac et {{%tooltip "lecrat.fr"%}}automédication{{%/tooltip%}}, vaccin grippe et Covid, {{%tooltip "mangerbouger.fr"%}}alimentation{{%/tooltip%}} (listériose ++) |
| Préconceptionnelle<br>ou 1re consultation (< 10 SA) | ATCD (gynéco, varicelle), toxiques, profession, vaccinations, précarité, maltraitance, DDR, {{%tooltip "Bandelette urinaire: glycosurie et protéinurie"%}}BU{{%/tooltip%}} | NFS, ferritine, {{%tooltip "1re grossesse sauf carte de groupe"%}}Gpe ABO Rh{{%/tooltip%}}, ± {{%tooltip "Si Rh- ou antécédent de transfusion"%}}RAI{{%/tooltip%}}, ± {{%tooltip "Si mère RH-1- et terme ≥ 11 SA"%}}Gpe ABO Rh de l'homme{{%/tooltip%}}<br>Sérologies {{%tooltip "Sauf vaccination double dose documentée"%}}rubéole{{%/tooltip%}}, toxoplasmose, VIH, ± syphilis, ± VHC, ± {{%tooltip "AgHBs sans vaccination"%}}Ac anti-HBs{{%/tooltip%}}, ± {{%tooltip "≥ 35 ans, surpoids, ATCD DG/macrosomie ou fam DT2"%}}glycémie{{%/tooltip%}}, TSH si sympt. aspécifiques {{< modal-btn modal-fdr-hypothyroidie >}}et FDR{{< /modal-btn >}}, ± frottis, ± {{%tooltip "Si prématurité, chorioamniotite, FCS"%}}prélèvement vaginal{{%/tooltip%}}, ± {{%tooltip "Avant 25 ans"%}}PCR Chlamydia{{%/tooltip%}} | {{%tooltip "Jusqu'à 8 SA (HAS 2016), 14 SA (USPTF)"%}}acide folique{{%/tooltip%}} 0,4 mg/j, {{%tooltip "De 11 à 13 SA + 6j"%}}écho T1{{%/tooltip%}} + {{%tooltip "βhCG libre + PAPP-A"%}}dépistage T21{{%/tooltip%}} |
| 4e mois<br>16-20 SA | {{%tooltip "ECBU si IU pendant la grossesse, uropathie, diabète, cystites récidivantes"%}}BU{{%/tooltip%}} (HAS 2024) | {{%tooltip "Gratuite jusqu'à 6 mois après l'accouchement"%}}Cs dentaire{{%/tooltip%}} ||
| 5e mois<br>20-24 SA || {{%tooltip "22 SA (20-25)"%}}Écho T2{{%/tooltip%}} | Vaccin coqueluche |
| 6e mois<br>24-28 SA || {{%tooltip "L'USPTF trouve le dépistage inutile si asymptomatique"%}}NFS{{%/tooltip%}}, AgHBs, ± {{%tooltip "Si Rh- ou antécédent de transfusion"%}}RAI{{%/tooltip%}} | ± Rattrapage coqueluche |
| 7e mois<br>28-32 SA || {{%tooltip "32 SA (30-35)"%}}Écho T3{{%/tooltip%}} | {{%tooltip "28 SA: si mère RH-1- et fœtus RH-1+"%}}± Rhophylac® 300{{%/tooltip%}} ± Rattrapage coqueluche |
| 8e mois<br>32-37 SA || {{%tooltip "Sauf carte de groupe"%}}Gpe ABO Rh{{%/tooltip%}}, {{%tooltip "Entre 35 et 38 SA"%}}prélèvement vaginal (strepto B){{%/tooltip%}} | VitD 100.000 UI, {{%tooltip "De septembre à janvier"%}}Abrysvo{{%/tooltip%}}, ± rattrapage coqueluche, ± {{%tooltip "Herpès génital pdt la gs"%}}valaciclovir{{%/tooltip%}} |
| 9e mois<br>37-42 SA ||||
{{< /table >}}

> -- *HAS 2016*, *HAS 2009*, *USPTF 2023*, *Calendrier vaccinal 2025*

{{% /collapse %}}
{{%collapse "Médicaments et vaccins pendant la grossesse" %}}

{{< references/le-crat >}}

### Vaccins chez la femme enceinte

Vaccins à réaliser pendant la grossesse ([chapitre dédié Vaccination]({{% relref "vaccination.md" %}})):

- Covid-19 ARNm et grippe quel que soit le terme (RR de réanimation sans vaccination: 18)
- dTcaPolio à chaque grossesse entre 20 et 36 SA (BoostrixTetra, Repevax)  
  Délai minimal entre 2 doses de 4 semaines.
- Anti-VRS (Abrysvo) de septembre à janvier entre 32 et 36 SA (DGS Urgent 2025-15)

> -- {{< references/calendrier-vaccinal >}} et *Vaccination Info Service*

{{< card-link-external title="Tableau Vaccins et grossesse" url="https://ansm.sante.fr/uploads/2022/04/27/20220427-dossier-medicament-grossesse-vaccins-tableau.pdf" subtitle="par l'ANSM" >}}

{{% /collapse %}}
{{%collapse "Prévention de l'allo-immunisation Rhésus D anti-RH1" %}}

Pour toutes les femmes à la 1^re^ grossesse (sauf carte de groupe): double détermination du **groupe sanguin rhésus D** (RhD, dit rhésus 1 -- RH-1) et recherche d'agglutinines irrégulières (**RAI**) si rhésus négatif ou antécédent de transfusion dès le premier trimestre de grossesse.
{.alert .alert-info}

[Fiche info CNGOF allo-immunisation T1 (PDF)](https://cngof.fr/app/uploads/2025/11/Allo-immunisation20-20RhC3A9sus20D202024-fiche20info20patientes20prC3A9vention20allo-immunisation20T1.pdf?x26468)

### Femme Rhésus D négatif

{{%info%}}

- Information sur l'immunisation anti-rhésus D: dépistage, suivi (RAI au 1^er^ trimestre, 6e, 8e et 9e mois), prévention
- Avant 12 SA avec géniteur rhésus 1 (rhésus D) positif ou inconnu: **pas d'immunoglobulines anti-D** en cas d'IVG, de grossesse arrêtée, de fausse couche ou de métrorragies sur grossesse évolutive

> -- *CNGOF 2024*
{{%/info%}}

- Détermination du RhD chez le conjoint  
  Si le conjoint est rhésus 1 positif ou inconnu: génotypage RhD fœtal sur sang maternel à partir de 11 SA (que la grossesse soit unique ou multiple).
- Si génotypage RhD fœtal:
  - Fœtus RhD positif: injection d'immunoglobuline humaine anti-D (IgRh, [Rhophylac® 300](https://base-donnees-publique.medicaments.gouv.fr/medicament/68484547/extrait#tab-rcp)) à 28 SA (avant si évènement à risque)
  - Fœtus RhD négatif: 2^e^ génotypage après 15 SA à au moins 2 semaines du premier. Si RhD négatif confirmé, pas de prévention d'allo-immunisation nécessaire.
  - Si le Rhésus D fœtal ne peut être déterminé sur 2 prélèvements: le considérer comme RhD positif

> -- *CNGOF 2017*

**NB.** Suivi de la RAI également en cas d'antécédent de **transfusion**.

{{% /collapse %}}
{{%collapse "Imageries et grossesse" %}}

Un scanner thoraco-abdomino-pelvien avec ou sans injection de produit de contraste peut être réalisé s'il est indiqué pour la mère, << la balance bénéfice/risque de cet examen devant prévaloir à la décision de sa réalisation >>.

> -- *CNGOF/SFMU/SFAR 2022*

{{% /collapse %}}
{{%collapse "Urgences pendant la grossesse" %}}

### Traumatisme pendant la grossesse

Chute ou traumatisme thoraco-abdominal non grave: examen obstétrical systématique après 20 SA

> -- *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement imminent

Signes prédictifs d'accouchement imminent à l'interrogatoire:

- Multiparité
- Antécédent d'accouchement extra-hospitalier ou rapide
- Contractions utérines douloureuses et rapprochées
- Envie de pousser

Toucher vaginal avant appel urgent de l'équipe obstétricale prévue.

En ville, position gynécologique suggérée pour pouvoir réaliser la manœuvre de Mc Roberts (décubitus dorsal, cuisses hyperfléchies sur le tronc et avec possibilité d'abaisser la tête fœtale dans l'axe ombilico-coccygien).

Pas d'épisiotomie systématique.

> -- *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement prématuré (MAP)

Pas de transport en SAMU systématique des MAP.

> -- *CNGOF/SFMU/SFAR 2022*

{{% /collapse %}}
{{%collapse "Prise de poids pendant la grossesse" %}}

*Section en chantier*
{.alert .alert-info}

AET
: apport énergétique total
{.dl-inline}

### Augmentation des besoins énergétiques au cours de la grossesse

{{< table title="Augmentation des besoins énergétiques pendant la grossesse selon l'*Anses 2019*" class="table-sm" >}}
| Terme de la grossesse | Augmentation des apports (kcal/j) |
|-----------------------|----------------------------------:|
| T1                    |                                70 |
| T2                    |                               260 |
| T3                    |                               500 |
| Allaitement           |                               500 |
{{< /table >}}

> -- *[Anses. Avis de l'Agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail relatif à l'actualisation des repères alimentaires du PNNS pour les femmes enceintes ou allaitantes. 2019. (PDF)](https://www.anses.fr/fr/system/files/NUT2017SA0141.pdf)*

Il est déconseillé de descendre sous 1600 kcal/j (même si [obésité]({{% relref "obesite-adulte.md" %}}), *[Eades et al 2017](https://pubmed.ncbi.nlm.nih.gov/28531829/)*)

### Objectif de prise de poids pendant la grossesse

{{< table title="Prise de poids recommandée selon l'indice de masse corporelle avant la grossesse. Dr JB Fron d'après *IOM Pregnancy Weight Guidelines 2009*" >}}
| Morphotype   | IMC avant grossesse (kg/m²) | Prise de poids recommandée <br>pendant la grossesse (kg) |
|--------------|----------------------------:|---------------------------------------------------------:|
| Maigreur     |                      < 18,5 |                                                12,5 - 18 |
| Poids normal |                 18,5 - 24,9 |                                                11,5 - 16 |
| Surpoids     |                   25 - 29,9 |                                                 7 - 11,5 |
| Obésité      |                        ≥ 30 |                                                    5 - 9 |
{{< /table >}}

> -- *[Louvet et al; Société Francophone du Diabète (SFD). Nutrition et diabète gestationnel. Recommandations de bonnes pratiques. 2022. (PDF)](https://www.sfdiabete.org/sites/www.sfdiabete.org/files/files/ressources/reco_nutrition_diabete_gestationnel_2022_v2_0.pdf)*

{{% /collapse %}}
{{%collapse "FMC gratuites" %}}

{{< card-link-external title="MOOC Santé mentale périnatale au cours des 1000 premiers jours" subtitle="EPSM et PATH ..." url="https://pns-mooc.com/fr/mooc/25/presentation">}}

{{< card-link-external title="MOOC La prévention des risques environnementaux chez la femme enceinte et l'enfant" url="https://www.pns-mooc.com/fr/mooc/22/presentation" subtitle="par APHP, ARS IDF, PRSE3, PRSE4" >}}

{{< youtube id="NA3R3ZdaBew" title="Déni de grossesse : percevoir les grossesses non perçues (Pédagogie Numérique en Santé)" >}}

{{% /collapse %}}
{{%sources%}}

- [Vaccination Info Service. Femmes enceintes. 04/06/2025.](https://professionnels.vaccination-info-service.fr/Recommandations-vaccinales-specifiques/Personnes-exposees-a-des-risques-specifiques/Femmes-enceintes)
- [DGS-Urgent 2025_15. Modalités de mise en œuvre de la campagne d'immunisation des nourrissons et nouveau-nés contre les infections à virus respiratoire syncitial (VRS). 28/01/2025.](https://sante.gouv.fr/professionnels/article/dgs-urgent)
- [HAS, ANRS, CNS. Traitement curatif des personnes infectées par Chlamydia trachomatis. 2025.](https://www.has-sante.fr/jcms/p_3604614/fr/traitement-curatif-des-personnes-infectees-par-chlamydia-trachomatis)
- [Anses. (2024). Avis de l'Anses relatif à l'actualisation de l'état des connaissances sur la prévention des anomalies de fermeture du tube neural par l'acide folique (saisine 2023-SA0019). Maisons-Alfort : Anses, 29 p. (PDF)](https://www.anses.fr/system/files/NUT2023SA0019RA.pdf)
- [Service-Public. Infections sexuellement transmissibles : gratuité du dépistage en laboratoire. 2024.](https://www.service-public.fr/particuliers/actualites/A17530)
- [US Preventive Services Task Force. Screening for Syphilis Infection During Pregnancy: US Preventive Services Task Force Reaffirmation Recommendation Statement. JAMA. 2025.](https://jamanetwork.com/journals/jama/fullarticle/2833883)
- [HAS. Grossesse : les vaccins recommandés. 2025.](https://www.has-sante.fr/jcms/p_3590575/fr/grossesse-les-vaccins-recommandes)
- {{< references/calendrier-vaccinal >}}
- [Anses. Enrichir la farine en acide folique : une solution contre les malformations du tube neural chez les nouveau-nés. 2024.](https://www.anses.fr/fr/content/enrichir-la-farine-en-acide-folique-une-solution-contre-les-malformations-du-tube-neural)
- [HAS, ANRS, CNS. Prise en charge thérapeutique du patient atteint d'herpès génital. 2024.](https://www.has-sante.fr/jcms/p_3562501/fr/prise-en-charge-therapeutique-du-patient-atteint-d-herpes-genital)
- [Vigoureux S, et al; CNGOF. Prévention de l'allo-immunisation anti-RH1 au premier trimestre de la grossesse: recommandations pour la pratique clinique du Collège National des Gynécologues-Obstétriciens Français. Gynécologie Obstétrique Fertilité & Sénologie. 2024. (PDF)](https://cngof.fr/app/uploads/2025/11/Allo-immunisation20-20RhC3A9sus20D202024-Prevention20de20l27allo-immunisation20anti20RH1.pdf?x26468)
- [US Preventive Services Task Force. Screening and Supplementation for Iron Deficiency and Iron Deficiency Anemia During Pregnancy: US Preventive Services Task Force Recommendation Statement. JAMA. 2024.](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/iron-deficiency-anemia-in-pregnant-women-screening-and-supplementation)
- [Service Public. Grossesse : examens médicaux. 14/08/2024.](https://www.service-public.fr/particuliers/vosdroits/F963)
- [HAS. Recommandation vaccinale contre les infections à VRS chez les femmes enceintes. 2024.](https://has-sante.fr/jcms/p_3505344/fr/recommandation-vaccinale-contre-les-infections-a-vrs-chez-les-femmes-enceintes)
- Ameli Médecin. Maternité : l'examen bucco-dentaire désormais pris en charge jusqu'au 6e mois après l'accouchement. 28/02/2024.
- [Insee. Bilan démographique 2023 - Fécondité. 2024.](https://www.insee.fr/fr/statistiques/7746164?sommaire=7746197)
- [HCSP. Dépistage systématique de l'infection à cytomégalovirus pendant la grossesse. 08/12/2023.](https://www.hcsp.fr/explore.cgi/avisrapportsdomaine?clefr=1367)
- [US Preventive Services Task Force, Barry MJ et al. Folic Acid Supplementation to Prevent Neural Tube Defects: US Preventive Services Task Force Reaffirmation Recommendation Statement. JAMA. 2023.](https://jamanetwork.com/journals/jama/fullarticle/2807739)
- [CNGOF, SFMU, SFAR. Prise en charge des urgences obstétricales en médecine d'urgence. Recommandations de Pratiques Professionnelles. 2022.](https://sfar.org/prise-en-charge-des-urgences-obstetricales-en-medecine-durgence/)
- [Boisseau N. Physical Activity During the Perinatal Period: Guidelines for Interventions During the Perinatal Period from the French National College of Midwives. J Midwifery Womens Health. 2022.](https://onlinelibrary.wiley.com/doi/10.1111/jmwh.13425)
- [CNGOF. Vaccin anti SARS-CoV-2 et grossesse 3e injection ? Avis du 17 novembre 2021. (PDF)](https://cngof.fr/app/uploads/2025/11/21-11-1720vaccin20anti20SARS-Cov-220et20grossesse_203eme20injection.pdf?x26468)
- Collège national des gynécologues et obstétriciens français (CNGOF). Gynécologie obstétrique Réussir son DFASM. 2021.
- [CNGOF. Prévention de l'allo-immunisation Rhésus D chez les patientes de groupe Rhésus D négatif. 2017. (PDF)](https://cngof.fr/app/uploads/2025/11/Allo-immunisation20-20RhC3A9sus20D202017-prevention-allo-immunisation-MAJ.pdf?x26468)
- [HAS. Suivi et orientation des femmes enceintes en fonction des situations à risque identifiées. 2016.](https://www.has-sante.fr/jcms/c_547976/fr/suivi-et-orientation-des-femmes-enceintes-en-fonction-des-situations-a-risque-identifiees)
- [HAS. Projet de grossesse : informations, messages de prévention, examens à proposer. 2009.](https://www.has-sante.fr/jcms/c_1360649/fr/projet-de-grossesse-informations-messages-de-prevention-examens-a-proposer)
- [Bohbot JM; CNGOF. Vaginose bactérienne. Extrait des Mises à jour en Gynécologie Médicale. 2007. (PDF)](http://www.cngof.asso.fr/d_livres/2007_GM_141_bohbot.pdf)
- [DGS. Recommandations pour la prévention des anomalies de la fermeture du tube neural. 2001. (PDF)](https://sante.gouv.fr/IMG/pdf/Recommandations_pour_la_prevention_des_anomalies_de_la_fermeture_du_tube_neural.pdf)

### Bibliographie en attente

- [Echarfaoui O, et al. Activité physique pendant la grossesse : revue systématique 2015-2025 et synthèse dose-réponse des bénéfices materno-fœtaux. Gynécologie Obstétrique Fertilité & Sénologie. 2025.](https://www.sciencedirect.com/science/article/abs/pii/S2468718925002661) (payant)
- [HAS. Évaluation de la pertinence d'un dépistage systématique de l'infection à cytomégalovirus (CMV) au cours de la grossesse. 2025.](https://www.has-sante.fr/jcms/p_3587389/fr/evaluation-de-la-pertinence-d-un-depistage-systematique-de-l-infection-a-cytomegalovirus-cmv-au-cours-de-la-grossesse)
- [Cour des Comptes. La politique de périnatalité. 2024.](https://www.ccomptes.fr/fr/publications/la-politique-de-perinatalite)
- [HAS. Accompagnement médico-psycho-social des femmes, des parents et de leur enfant, en situation de vulnérabilité, pendant la grossesse et en postnatal. 2024.](https://www.has-sante.fr/jcms/p_3271226/fr/accompagnement-medico-psycho-social-des-femmes-des-parents-et-de-leur-enfant-en-situation-de-vulnerabilite-pendant-la-grossesse-et-en-postnatal)
- [HAS. Situations pathologiques pouvant relever de l'hospitalisation à domicile au cours de l'ante et du post-partum. 2011.](https://www.has-sante.fr/jcms/c_1066375/fr/situations-pathologiques-pouvant-relever-de-l-hospitalisation-a-domicile-au-cours-de-l-ante-et-du-post-partum)
- [Service-Public. A-t-on droit à des absences liées à la grossesse dans la fonction publique ? 24/11/2023.](https://www.service-public.fr/particuliers/vosdroits/F34536)
- [HAS. Grossesse, accouchement et suivi postnatal. Panorama.](https://www.has-sante.fr/jcms/p_3286443/fr/grossesse-accouchement-et-suivi-postnatal)

{{%/sources%}}
{{% modal title="Liste facteurs de risque d'hypothyroïdie" id="modal-fdr-hypothyroidie"%}}

{{< clinique/facteur-risque-hypothyroidie >}}

{{% /modal %}}
{{% modele %}}

#### Bilan préconceptionnel ou de début de grossesse

- NFS
- Ferritine
- ± Groupe ABO Rhésus  
  1^re^ grossesse sauf carte de groupe.
- ± RAI  
  Si Rh- ou antécédent de transfusion.
- Sérologies {{%tooltip "Sauf vaccination double dose documentée"%}}rubéole{{%/tooltip%}}, toxoplasmose, syphilis, VIH, VHC, {{%tooltip "AgHBs sans vaccination"%}}anti-HBs{{%/tooltip%}}
- ± glycémie à jeun  
  ≥ 35 ans, surpoids, antécédent de diabète gestationnel ou macrosomie ou familial de diabète type 2.
- ± TSH si symptômes aspécifiques {{< modal-btn modal-fdr-hypothyroidie >}}et facteurs de risque{{< /modal-btn >}}
- Rattrapage du frottis cervico-vaginal
- ± Prélèvement vaginal  
  Si prématurité, chorioamniotite, fausse couche spontanée.

#### Ordonnance de la première consultation

- Acide folique 0,4 mg/j jusqu'à 8 SA
- Échographie du premier trimestre (de 11 à 13 SA + 6 jours)
- Dépistage de la trisomie 21 après l'échographie (βhCG libre + PAPP-A)

{{% /modele %}}
