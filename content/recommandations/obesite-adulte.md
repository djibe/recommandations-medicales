+++
title = "Obésité de l'adulte"
prefix = "la "
description = "Recommandations pour la prise en charge de l'obésité de l'adulte. Dépistage des complications, éducation thérapeutique, sensations alimentaires, perte de poids"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2023-06-19T13:21:51+02:00"
publishdate = "2023-06-29"
lastmod = "2023-06-29"
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
todo = "GPAQ, stats Constances, FLI HAS22 p15, HAS 23 screenshots, << personne en obésité >>, obésité et Grossesse HAS 23 p23, relation IMC-mortalité Bray 1985"
chart = true
+++

{{%article-summary%}}

TODO:

{{%/article-summary%}}
{{%collapse "Définition" "show" %}}

Le généraliste est considéré comme appartenant au **niveau 1** de la prise en charge de l'obésité.

Obésité
: Maladie chronique la plus fréquente en nutrition (17% de la population), évolutive et sans tendance spontanée à la guérison. Elle est définie comme une maladie car elle affecte le bien-être physique, social et psychologique.
: Pour l'OMS l'obésité est un << excès de masse grasse entraînant des conséquences néfastes pour la santé >>. Pour approcher cette masse grasse, on utilise la corpulence avec l'**indice de masse corporelle** (IMC, en kg/m²) ou indice de Quételet.
: Chez l'adulte jeune en bonne santé, la masse grasse représente 10-15% du poids chez l'homme et 20-25% chez la femme.
: Les déterminants du poids sont eux aussi multiples: environnementaux, psychologiques, sociaux, génétiques.

{{< table title="Classification de la corpulence des adultes selon l'OMS 1998" >}}
| Définition                 | IMC (kg/m²) |
|----------------------------|:-----------:|
| Surpoids                   |   25-29,99  |
| Obésité modérée (classe 1) |   30-34,99  |
| Obésité sévère (classe 2)  |   35-29,99  |
| Obésité morbide (classe 3) |    ≥ 40     |
{{< /table >}}

Obésité abdominale
: Définition *OMS 1998* pour les caucasiens: tour de taille de 88 cm ou plus pour une femme et 102 cm pour un homme.
: L'accumulation de graisse viscérale est associée à l'augmentation de la **mortalité cardiovasculaire** et des maladies métaboliques.
: La mesure du tour de taille: bras le long du corps en fin d'expiration normale, à mi-chemin entre le bord inférieur de la dernière côte palpable et le sommet de la crête iliaque.

Échec de prise en charge de l'obésité
: Définition *HAS 2022*: perte de poids inférieure à 5% à un an ou absence de son maintien avec: poursuite de la prise de poids, incapacité à modifier durablement ses comportements ou aggravation des complications liées à l'obésité.
: En cas d'échec à 6-12 mois, le patient doit être orienté vers un **nutritionniste** (niveau 2) qui pourra l'adresser à un **centre spécialisé de l'obésité** (CSO, niveau 3).

Restriction cognitive
: << Limitation volontaire des apports alimentaires avec possibles privations, dans le but de contrôler son poids >> (*CEEDMM*).

### Épidémiologie de l'obésité en France

- 1 adulte sur 2 est en surpoids ou en situation d'obésité (47,3%, *ObÉpi 2020*)
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
  tooltip: { y: [{ formatter: function(value) { return `${value} %`; }}] }
}
</script>
<figure class="figure-chart">
  <div id="chart2"></div>
  <figcaption><b>Figure 2.</b> Évolution de la prévalence de l'obésité selon l'âge de 1997 à 2020. Dr JB Fron d'après ObÉpi 2020. NB: les abscisses ne sont pas linéaires.</figcaption>
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
{.alert .alert-info}

### Interrogatoire

- Antécédents (dont TDAH, psychiatriques)
- Facteurs de risque cardiovasculaire
- Traitements en cours (neuroleptiques, antiépileptiques, corticoïdes, contraception)
- Histoire pondérale
  - Âge de début
  - Facteurs déclenchants
  - Variations et rebonds
  - Traitements essayés
- Comportement alimentaire
  - Dépister des troubles des conduites alimentaires (TCA) avec {{< modal-btn modal-scoff >}}questionnaire SCOFF{{< /modal-btn >}}
  - Repas, grignotage (dont nocturne), compulsions, aliments courants
  - Sensations alimentaires, déclenchement du repas, hyperphagie, tachyphagie, restriction cognitive
  - Tabous alimentaires, fausses croyances, sources de frustration et de désinhibition
- Niveau d'activité physique (score GPAQ) et sédentarité
- Contexte psychopathologique  
  Anxiété, dépression, image du corps, estime de soi, traumatismes/agressions, addictions.
- Environnement social, familiale, professionnel, financier, rythmes décalés
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
- Autres outils d'évaluation de la masse grasse: TODO:
- Tour de taille
- Répartition androïde ou gynoïde des graisses
- Pression artérielle avec brassard adapté, fréquence et rythme cardiaque
- Palpation thyroïdienne
- Évaluation du risque cardiovasculaire
- Rhumatologique: rachis, genoux, pieds
- Cutané: intertrigo
- Rechercher une dénutrition et une sarcopénie
- Rechercher des signes d'obésité secondaire
  - Signes spécifiques d'un [syndrome de Cushing]({{< relref "syndrome-cushing.md" >}}): obésité faciotronculaire avec amyotrophie proximale, signes cutanés (fragilité cutanée, ecchymoses, vergetures pourpres), hirsutisme, acanthosis nigricans (*ENDO 2018*)
  - [Hypothyroïdie]({{< relref "hypothyroidie.md" >}})

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Bilan initial de l'obésité de l'adulte

- NFS
- ASAT, ALAT, GGT
- Uricémie
- Ionogramme sanguin, créatininémie, DFG
- Glycémie à jeun
- Bilan lipidique
- ECG de repos
- Bilans spécifiques: voir *Dépistage des complications*

> Bilan du *CEEDMM*

{{% /collapse %}}
{{%collapse "Dépistage des complications de l'obésité" "show" %}}

{{< table title="Rythme de dépistage des complications chez l'adulte en situation d'obésité. Dr JB Fron d'après Sociétés Savantes mentionnées" class="table-wrap">}}
| Appareil                        | Soins                                                                                    | Source              |
|---------------------------------|------------------------------------------------------------------------------------------|---------------------|
| Boulimie hyperphagique          | Dépister les TCA avec {{< modal-btn modal-scoff >}}questionnaire SCOFF{{< /modal-btn >}} | HAS 2019            |
| Cancer colorectal               | Dépistage organisé                                                                       | INCa 2022           |
| Cancer de l'endomètre           | Échographie sus-pubienne et endovaginale si métrorragies post-ménopausiques              | ACOG 2020           |
| Cancer de l'ovaire              | Échographie sus-pubienne et endovaginale si symptômes (post-ménopausiques ++)            | INCa 2020           |
| Cancer du pancréas              | Scanner AP injecté si symptômes                                                          | INCa 2020           |
| Cancer du sein                  | Dépistage organisé                                                                       | INCa 2022           |
| Contraception œstroprogestative | En l'absence d'autre d'autre FRCV                                                        | CNGOF 2018          |
| Dentaire                        | Suivi annuel                                                                             | HAS 2023            |
| Diabète type 2                  | Glycémie à jeun tous les 1-3 ans                                                         | HAS 2023            |
| Dyslipidémie                    | Cholestérol total, HDL, LDL, triglycérides                                               | TODO:               |
| EFR                             | Si: IMC ≥ 30 avec dyspnée NYHA 3-4, IMC ≥ 35 et SAHOS, IMC ≥ 40                          | HAS 2023            |
| Gaz du sang                     | Si: IMC ≥ 35, SpO2 &lt; 94% ou CPT < 85%                                                 | HAS 2023            |
| Grossesse                       | Prise de poids limitée 5-9 kg                                                            | SFD 2022            |
| Hypertension artérielle         | Mesure avec brassard adapté tous les 1 à 3 ans                                           | ESC 2021            |
| Maladie rénale chronique        | Créatininémie, DFG et ratio albuminurie/créatininurie min. tous les 3 ans                | HAS 2023            |
| Micronutriments                 | Dosage si: chirurgie bariatrique, amaigrissement massif, symptômes évocateurs            | HAS 2022            |
| Podologique                     | Obésité est haut risque d'atteinte podologique                                           | HAS 2020            |
| Risque cardiovasculaire         | TODO:                                                                                    | ESC 2021            |
| Stéatopathie                    | {{< modal-btn modal-fib4 >}}score FIB-4{{< /modal-btn >}}                                | AFEF 2020, HAS 2023 |
| Syndrome d'apnées du sommeil    | Polygraphie si IMC ≥ 35 ou signes évocateurs                                             | HAS 2023            |
| Vaccin grippe                   | Annuel si IMC ≥ 40                                                                       | Calendrier 2023     |
{{< /table >}}

Autres complications de l'obésité: hyperuricémie et goutte, maladies cardiovasculaires, TVP, insuffisance veineuse, lithiases biliaires, protéinurie, HTIC, dépression.

{{% /collapse %}}
{{%collapse "Niveau adapté de prise en charge et chirurgie bariatrique" %}}

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

### Indications à la chirurgie bariatrique

> << Il s'agit du seul traitement actuel de l'obésité ayant démontré son efficacité sur le long terme en termes de perte de poids et de réduction de certaines comorbidités >> (*CEEDMM*)
{.alert .alert-info}

La chirurgie bariatrique est décidée en réunion de concertation pluridisciplinaire (RCP).

Les indications à une chirurgie bariatrique avec conditions sont:

1. IMC ≥ 40 kg/m²  ou IMC ≥ 35 avec au moins une comorbidité pouvant s'améliorer après la chirurgie (ex: HTA, SAHOS et autres troubles respiratoires sévères, diabète de type 2, maladies ostéoarticulaires invalidantes, stéato-hépatite non alcoolique)
2. Échec d'un traitement médical, nutritionnel, diététique et psychothérapeutique bien conduit pendant 6 à 12 mois, en l'absence de perte de poids suffisante ou en l'absence de maintien de la perte de poids
3. Patient bien informé
4. Évaluation et prise en charge préopératoires pluridisciplinaires pendant plusieurs mois
5. Patients ayant compris et accepté la nécessité d'un suivi médical et chirurgical à long terme
6. Risque opératoire acceptable

> *HAS 2009*

Les contraceptions orales doivent être réévaluées du fait du risque de malabsorption.

Informations sur la chirurgie bariatrique: [SOFFCO](https://soffcomm.org/lobesite-qu-est-ce-que-cest) et [Je veux me faire opérer d'une chirurgie de l'obésité](https://www.calameo.com/read/00402182736be0d767171?authid=Vz2DRvwIJMi4)

#### Les complications de la chirurgie bariatrique

Complications fréquentes observées après une chirurgie de l'obésité: dénutrition, anémie et carences, troubles digestifs, *dumping syndrome* précoce (malaise post-prandial), hypoglycémies (by-pass).

#### Techniques de chirurgie bariatrique

Les techniques chirurgicales peuvent être: sleeve gastrectomie (gastrectomie longitudinale), Bypass gastrique en << Y >>, dérivation biliopancréatique.

L'anneau gastrique est désormais très peu utilisé (complications, ré-interventions).

{{% /collapse %}}
{{%collapse "Traitement" %}}

Les prescriptions médicamenteuses (GLP-1) relèvent exclusivement des spécialistes de l'obésité.

Un objectif doit être précis, atteignable, progressif, facile à mettre en œuvre, accepté et révisable.

- Activité physique
  - Lutte contre la sédentarité
  - Cible: 150-300 minutes d'intensité modérée par semaine et renforcement x 2/semaine
  - Activité physique adaptée (APA) voire supervisée
- Perte de poids adaptée à la physiologie  
  Une perte de poids de 5-15% est recommandée (sauf sujet âgé, *CEEDMM*). Le maintien du poids peut être le premier objectif.
- Prise en charge nutritionnelle
  - Avis diététique, nutritionniste voire centre spécialisé de l'obésité (voir *Niveau adapté*)
  - Écoute des sensations alimentaires: faim, satiété
  - Composante émotionnelle: psychothérapie TCC, pleine conscience
  - Régime méditerranéen
- Conséquences
  - Estime de soi, confiance en soi, culpabilité, isolement, perte de motivation
- Programmes d'**éducation thérapeutique** locaux
- Troubles du comportement alimentaire: psychologue, psychiatre, diététicien
- Handicap: ergothérapeute
- Autres intervenants: psychologue, psychiatre, médecin du travail, travailleur social
- Associations de patients: [Collectif National des Associations d'Obèses (CNAO)](https://cnao.fr/)

> << Les régimes déséquilibrés ou très restrictifs sont déconseillés >> (*HAS 2022*) - < 1200 kcal/j ne sont pas conseillés (*CEEDMM*)
{.alert .alert-warning}

### Suivi

- Mesures au moins annuelles (IMC, tour de taille)
- Adaptations alimentaires (sensations, troubles)
- Bilan des complications (voir Dépistage des complications)
- Si chirurgie: signes carentiels (neurologiques), de dénutrition, supplémentation multivitamines, calcium, vitamine D et B12

### Indication à la prise en charge de l'obésité en SSR

- Complications somatiques graves, invalidantes ou multiples
- Suite de soins aigus nécessitant des équipements adaptés
- Séjour prolongé
- Rééducation motrice intensive

{{% /collapse %}}
{{%collapse "Conseils alimentaires" %}}

> << Il n'y a pas d'interdits alimentaires >> (*CEEDMM*)
{.alert .alert-info}

Exemples de conseils alimentaires à proposer en situation d'obésité:

- Limiter la consommation des aliments à forte densité énergétique, riches en lipides ou en sucres, et les boissons sucrées ou alcoolisées
- Choisir des aliments de faible densité énergétique (fruits, légumes), boire de l'eau
- Contrôler la taille des portions
- Diversifier les choix alimentaires en mangeant de tout (ne pas éliminer les aliments préférés mais en manger modérément)
- Manger suffisamment et lentement à l'occasion des repas, manger assis installé à une table
- Structurer les prises alimentaires en repas et en collations en fonction des nécessités du mode de vie du sujet (en général, trois repas principaux et une collation éventuelle)
- Ne pas sauter de repas pour éviter les grignotages entre les repas favorisés par la faim
- Rassurer le patient quant à son droit au plaisir de manger, la convivialité des repas est souhaitable
- Apprendre à lire les étiquettes d'information sur les emballages
- Se consacrer au repas, être attentif à son assiette
- Prêter attention aux sensations perçues lorsqu'on mange
- Cuisiner si possible soi-même ou indiquer clairement les consignes à la personne qui cuisine
- Proposer la même alimentation pour toute la famille (seules les quantités vont varier)
- Limiter l'utilisation de matière grasse pour la cuisson

> *CEEDMM 2021*

{{% /collapse %}}
{{%sources%}}

{{< youtube id="Uyel7_curVU" title="Que faire face à un patient en situation d'obésité ? (HAS)" >}}

- [HAS. Guide du parcours de soins : surpoids et obésité de l'adulte. Guide parcours de soins. 2023.](https://www.has-sante.fr/jcms/p_3408871/fr/guide-du-parcours-de-soins-surpoids-et-obesite-de-l-adulte)
- [Fontbonne A et al. Prevalence of Overweight and Obesity in France: The 2020 Obepi-Roche Study by the "Ligue Contre l'Obésité". J Clin Med. 2023.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9918095/)
- [HAS, FFN. Obésité de l'adulte : prise en charge de 2e et 3e niveaux - Partie I : prise en charge médicale. Recommandation de bonne pratique. 2022.](https://www.has-sante.fr/jcms/p_3346001/fr/obesite-de-l-adulte-prise-en-charge-de-2e-et-3e-niveaux-partie-i-prise-en-charge-medicale)
- [Inserm. Objectif summer body : tous égaux face à la perte de poids, vraiment ?. Salle de presse. 07/07/2022.](https://presse.inserm.fr/canal-detox/objectif-summer-body-tous-egaux-face-a-la-perte-de-poids-vraiment/)
- {{< references/college-endocrino >}}
- [HAS. Obésité : prise en charge chirurgicale chez l'adulte. 2009.](https://www.has-sante.fr/jcms/c_765529/fr/obesite-prise-en-charge-chirurgicale-chez-l-adulte)
- [Rapport d'une consultation de l'OMS. Obésité : prévention et prise en charge de l'épidémie mondiale. Série de rapports techniques 894. Genève. 2003. (1998)](https://apps.who.int/iris/handle/10665/42734)
- [Organisation Mondiale de la Santé](https://www.who.int/fr/health-topics/obesity)

### À lire

- [Ligue contre l'obésité. Les vrais chiffres de la grossophobie. Odoxa. 2021. (PDF)](https://liguecontrelobesite.org/app/uploads/2021/03/Odoxa-pour-OBEPI-Discriminations-et-ob%C3%A9sit%C3%A9-2.pdf)
- Ligue contre l'obésité

{{%/sources%}}
{{% modal title="Dépistage des TCA avec SCOFF-F" id="modal-scoff"%}}

{{< scores/scoff >}}

{{% /modal %}}
{{% modal title="Dépistage de la fibrose hépatique" id="modal-fib4"%}}

{{< scores/fib4 >}}

{{% /modal %}}
