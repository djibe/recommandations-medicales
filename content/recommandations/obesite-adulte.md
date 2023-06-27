+++
title = "Obésité de l'adulte"
prefix = "la "
description = "TODO:"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2023-06-19T13:21:51+02:00"
publishdate = "2023-06-26"
lastmod = "2023-06-26"
specialites = ["endocrinologie"]
annees = "2023"
sources = ["HAS", "FFN"]
tags = ["bariatrique", "cancer", "depistage", "obesite", "SAS"]
anglais = ["Obesity"]
sctid = "414916001"
icd10 = "E66.9"
draft = true
image = false
imageSrc = ""
todo = "stats Obepi, Constances, FLI HAS22 p15, HAS 23 screenshots, << personne en obésité >>, obésité et Grossesse HAS 23 p23"
chart = true
+++

{{%article-summary%}}

TODO:

{{%/article-summary%}}
{{%collapse "Définition" %}}

Le généraliste est considéré comme niveau 1 de la prise en charge de l'obésité.

Obésité
: TODO:
: Les déterminants du poids sont multiples: environnementaux, psychologiques, sociaux, génétiques.

TODO: Table grades

Obésité abdominale
: Tour de taille de 88 cm ou plus chez la femme et seuil de 102 cm chez l'homme.
: Le tour de taille se mesure: bras le long du corps en fin d'expiration normale, à mi-chemin entre le bord inférieur de la dernière côte palpable et le sommet de la crête iliaque.

Échec de prise en charge de l'obésité
: Selon HAS 2022: perte de poids inférieure à 5% à un an ou absence de son maintien avec: poursuite de la prise de poids, incapacité à modifier durablement ses comportements ou aggravation des complications liées à l'obésité.
: En cas d'échec à 6-12 mois, le patient doit être orienté vers un nutritionniste (niveau 2) qui pourra l'adresser à un centre spécialisé de l'obésité (CSO, niveau 3).

### Épidémiologie de l'obésité en France

- 1 adulte sur 2 est en surpoids ou en obésité (47,3%, *ObÉpi 2020*)
- Prévalence de l'obésité: 17,4% chez la femme et 16,7% chez l'homme

{{< figure-chart title="Évolution de la prévalence de l'obésité chez l'adulte en France de 1997 à 2020. Dr JB Fron d'après ObÉpi 2020" >}}

<script>
const chartOptions = {
  series: [{
    name: 'Prévalence',
    data: [8.5, 10.1, 11.9, 13.1, 14.5, 15, null, null, 17]
  }],
  chart: { type: 'line', height: 224 },
  markers: { size: 4 },
  stroke: { colors: ['#4150f5'], curve: 'smooth', width: 4 },
  title: { text: 'Évolution de la prévalence de l\'obésité chez l\'adulte' },
  xaxis: { categories: [1997, 2000, 2003, 2006, 2009, 2012, 2015, 2017, 2020] },
  yaxis: [
    {
      title: { text: 'Prévalence (%)'},
      labels: { style: { colors: '#757575' }},
      decimalsInFloat: 1,
      tickAmount: 5,
      min: 0
    }
  ],
  tooltip: { y: [{ formatter: function(value) { return `${value} %` }}] },
}
</script>
<figure class="figure-chart">
  <div id="chart2"></div>
  <figcaption><b>Figure 2.</b> Évolution de la prévalence de l'obésité selon l'âge de 1997 à 2020. Dr JB Fron d'après ObÉpi 2020. NB : les abscisses ne sont pas linéaires</figcaption>
</figure>
<script>
const chartOptions2 = {
  series: [{
    name: '18-24',
    data: [2.1, 2.6, 2.8, 3.8, 4, 5.4, 9.2]
  },
  {
    name: '25-34',
    data: [5.5, 6.9, 8.3, 8.7, 10.4, 10.8, 13.8]
  },
  {
    name: '35-44',
    data: [7.7, 8.3, 11.6, 13.1, 13.9, 14.3, 16.7]
  },
   {
    name: '45-54',
    data: [10.7, 12.7, 14.3, 14.9, 16, 16, 18.4]
  },
  {
    name: '55-64',
    data: [11.2, 13.5, 15.4, 16.5, 17.9, 18.7, 19.9]
  },
  {
    name: '65+',
    data: [13.2, 15.3, 15.9, 18.3, 19.8, 19.5, 19.2]
  }],
  chart: { type: 'line', height: 256 },
  markers: { size: 4 },
  stroke: { colors: ['#4150f5', '#ffa600', '#af34dc', '#e800ba', '#ff0094', '#ff2b6e'], curve: 'smooth', width: 4 },
  title: { text: 'Prévalence de l\'obésité selon l\'âge' },
  xaxis: { categories: [1997, 2000, 2003, 2006, 2009, 2012, 2020] },
  yaxis: [
    {
      title: { text: 'Prévalence (%)'},
      labels: { style: { colors: '#757575' }},
      decimalsInFloat: 1,
      tickAmount: 5,
      min: 0
    }
  ],
  tooltip: { y: [{ formatter: function(value) { return `${value} %` }}] },
}
</script>

### Abréviations

FFN
: Fédération Française de Nutrition

FRCV
: facteur de risque cardiovasculaire

HAS
: Haute Autorité de Santé

IMC
: indice de masse corporelle

TCA
: troubles des conduites alimentaires
{.dl-inline}

{{% /collapse %}}
{{%collapse "Clinique" %}}

> << Demander l'accord de la personne pour aborder le poids >> (*HAS 2023*)

### Interrogatoire

- Antécédents (TDAH, psychiatriques, migraine)
- Facteurs de risque cardiovasculaire
- Traitements en cours (neuroleptiques, corticoïdes, contraception)
- Histoire pondérale
  - Âge de début
  - Facteurs déclenchants
  - Variations et rebonds
  - Traitements essayés
- Comportement alimentaire  
  Dépister les troubles des conduites alimentaires (TCA) avec {{< modal-btn modal-scoff >}}questionnaire SCOFF{{< /modal-btn >}}, grignotage, sensations alimentaires, hyperphagie, tachyphagie, restriction cognitive.
- Niveau d'activité physique (score GPAQ), sédentarité
- Contexte psychopathologique  
  Anxiété, dépression, image du corps, estime de soi, traumatismes/agressions, addictions.
- Environnement socio-professionnel, rythmes décalés
- Retentissement sur la qualité de vie personnelle ou professionnelle
- Comorbidités
  - Quantité de sommeil et dépistage d'un syndrome d'apnées du sommeil (SAHOS)
  - RGO
  - SOPK  
    Cycles irréguliers, hirsutisme, hyperandrogénie, alopécie, acanthosis nigricans.
- Évaluation de la motivation aux changements
- Handicap et autonomie (ADL, IADL)
  - Gonarthrose
- Qualité de vie (EuroQoL EQ-5D, SF-12)
- Attentes et préférences, priorités, projets

Sommeil : 2.1.4

### Examen clinique

- Poids, taille, IMC et leurs variations
- Tour de taille
- Pression artérielle avec brassard adapté, fréquence et rythme cardiaque
- Palpation thyroïdienne
- Évaluation du risque cardiovasculaire
- Rhumatologique: rachis, genoux, pieds
- Cutané: intertrigo
- Rechercher une dénutrition et une sarcopénie
- Rechercher des signes d'obésité secondaire
  - Cushing TODO:: obésité centrale, acanthosis nigricans (*ENDO 2018*)
  - Hypothyroïdie

{{% /collapse %}}
{{%collapse "Dépistage des complications de l'obésité" "show" %}}

{{< table title="Rythme de dépistage des complications chez l'adulte en situation d'obésité. Dr JB Fron d'après Sociétés Savantes mentionnées" class="table-wrap">}}
| Appareil   | Soins        | Source                   |
|------------|--------------|--------------------------|
| Boulimie hyperphagique | Dépister les TCA avec {{< modal-btn modal-scoff >}}questionnaire SCOFF{{< /modal-btn >}} | HAS 2019 |
| Cancer colorectal | Dépistage organisé | INCa 2022 |
| Cancer de l'endomètre | Échographie sus-pubienne et endovaginale si métrorragies post-ménopausiques | ACOG 2020 |
| Cancer de l'ovaire | Échographie sus-pubienne et endovaginale si symptômes (post-ménopausiques ++) | INCa 2020 |
| Cancer du pancréas | Scanner AP injecté si symptômes | INCa 2020 |
| Cancer du sein | Dépistage organisé | INCa 2022 |
| Contraception œstroprogestative | En l'absence d'autre d'autre FRCV | CNGOF 2018 |
| Dentaire     | Suivi annuel | HAS 2023 |
| Diabète type 2 | Glycémie à jeun tous les 1-3 ans | HAS 2023 |
| Dyslipidémie | Cholestérol total, HDL, LDL, triglycérides | TODO: |
| EFR | Si: IMC ≥ 30 avec dyspnée NYHA 3-4, IMC ≥ 35 et SAHOS, IMC ≥ 40 | HAS 2023 |
| Gaz du sang | Si: IMC ≥ 35, SpO2 &lt; 94% ou CPT < 85% | HAS 2023 |
| Grossesse | Prise de poids limitée 5-9 kg | SFD 2022 |
| Hypertension | Mesure avec brassard adapté tous les 1 à 3 ans | ESC 2021 |
| Maladie rénale chronique | Créatininémie, DFG et ratio albuminurie/créatininurie min. tous les 3 ans | HAS 2023 |
| Micronutriments | Dosage si: chirurgie bariatrique, amaigrissement massif, symptômes évocateurs| HAS 2022 |
| Podologique | Obésité est haut risque d'atteinte podologique | HAS 2020 |
| Risque cardiovasculaire | TODO: | ESC 2021 |
| Stéatopathie | {{< modal-btn modal-fib4 >}}score FIB-4{{< /modal-btn >}} | AFEF 2020, HAS 2023 |
| Syndrome d'apnées du sommeil | Polygraphie si IMC ≥ 35 ou signes évocateurs  | HAS 2023 |
| Vaccin grippe | Annuel si IMC ≥ 40 | Calendrier 2023 |
{{< /table >}}

{{% /collapse %}}
{{%collapse "Niveau adapté de prise en charge de l'obésité" %}}

Situations d'obésité nécessitant une prise en charge spécialisée (d'après HAS 2022).

### Indications à une prise en charge de niveau 3 de l'obésité

Prise en charge de niveau 3 de l'obésité si au moins 1 parmi:

- **IMC ≥ 50**
- Insuffisance d'organe
- Périmètre de marche < 100 m, grabataire
- Qualité de vie fortement dégradée
- Troubles autistiques ou cognitifs
- Obésité génétique
- Échec de chirurgie bariatrique ou risque opératoire élevé
- Indication de chirurgie bariatrique chez le mineur ou +65 ans

IMC de 35 à 50 et au moins un parmi:

- Aggravation d'une maladie chronique (BPCO, maladie de système ...)
- Périmètre de marche de 100 à 500 mètres
- Pathologie psychiatrique sévère
- Obésité secondaire ([hypercorticisme]({{< relref "syndrome-cushing.md" >}}), [acromégalie]({{< relref "acromegalie.md" >}}) ...)
- Tumeur cérébrale
- [Hyperphagie boulimique]({{< relref "boulimie-hyperphagie.md" >}})
- Échec de niveau 2

### Indications à une prise en charge de niveau 2 de l'obésité

IMC de 35 à 50 kg/m² et au moins un parmi:

- Pathologie cardiovasculaire déséquilibrée  
  HTA résistante, DT2 déséquilibré, NASH, SAHOS sévère.
- Aggravation d'une maladie chronique sans risque majeur
- Infertilité
- SOPK
- Impact marqué sur la qualité de vie et sur la santé
- Pathologie psychiatrique avec impact pondéral ou comportemental
- Facteur aggravant: douleurs chroniques ([fibromyalgie]({{< relref "fibromyalgie.md" >}})), iatrogénie
- [Accès de boulimie]({{< relref "boulimie-hyperphagie.md" >}}) épisodiques
- Obésité persistante depuis l'enfance
- Au moins 2 épisodes de rebond pondéral
- Grossesse après chirurgie bariatrique
- Échec de niveau 1

{{% /collapse %}}
{{%collapse "Traitement" %}}

Les prescriptions médicamenteuses (GLP-1) relèvent exclusivement des spécialistes de l'obésité.

Un objectif doit être précis, atteignable, progressif, facile à mettre en œuvre, accepté et révisable.

- Activité physique
  - Lutte contre la sédentarité
  - Cible: 150-300 minutes d'intensité modérée par semaine et renforcement x 2/semaine
  - APA
- Perte de poids adaptée à la physiologie
- Prise en charge nutritionnelle
  - Avis diététique, nutritionniste voire centre spécialisé de l'obésité (voir *Niveau adapté*)
  - Écoute des sensations alimentaires: faim, satiété
  - Composante émotionnelle: psychothérapie TCC, pleine conscience
  - Régime méditerranéen
- Conséquences
  - Estime de soi, confiance en soi, culpabilité, isolement, perte de motivation
- Programmes d'éducation thérapeutique locaux
- Handicap: ergothérapeute
- Autres intervenants: psychologue, psychiatre, médecin du travail, travailleur social
- Associations: TODO:

> << Les régimes déséquilibrés ou très restrictifs sont déconseillés >> (*HAS 2022*)
{.alert .alert-warning}

### Suivi

- Mesures au moins annuelles (IMC, tour de taille)
- Bilans (voir Dépistage des complications)

### Indication à la prise en charge de l'obésité en SSR

- Complications somatiques graves, invalidantes ou multiples
- Suite de soins aigus nécessitant des équipements adaptés
- Séjour prolongé
- Rééducation motrice intensive

{{% /collapse %}}
{{%sources%}}

{{< youtube id="Uyel7_curVU" title="Que faire face à un patient en situation d'obésité ? (HAS)" >}}

- [HAS. Guide du parcours de soins : surpoids et obésité de l'adulte. Guide parcours de soins. 2023.](https://www.has-sante.fr/jcms/p_3408871/fr/guide-du-parcours-de-soins-surpoids-et-obesite-de-l-adulte)
- [Fontbonne A et al. Prevalence of Overweight and Obesity in France: The 2020 Obepi-Roche Study by the "Ligue Contre l'Obésité". J Clin Med. 2023.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9918095/)
- [HAS, FFN. Obésité de l'adulte : prise en charge de 2e et 3e niveaux - Partie I : prise en charge médicale. Recommandation de bonne pratique. 2022.](https://www.has-sante.fr/jcms/p_3346001/fr/obesite-de-l-adulte-prise-en-charge-de-2e-et-3e-niveaux-partie-i-prise-en-charge-medicale)

### À lire

- [HAS. Obésité : prise en charge chirurgicale chez l'adulte. Reco2clics. 2009.](https://www.has-sante.fr/jcms/c_765529/fr/obesite-prise-en-charge-chirurgicale-chez-l-adulte)
- Collèges
- Ligue contre l'obésité

{{%/sources%}}

≤≥±®æœŒÈ³ÂSpO<sub>2</sub>

{{% modal title="Dépistage des TCA avec SCOFF-F" id="modal-scoff"%}}

{{< scores/scoff >}}

{{% /modal %}}
{{% modal title="Dépistage de la fibrose hépatique" id="modal-fib4"%}}

{{< scores/fib4 >}}

{{% /modal %}}
