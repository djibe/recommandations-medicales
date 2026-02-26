+++
id = "019b45fc-0a64-75e3-8bb4-59690dd11f40"
title = "Dyslipidémie"
prefix = "la "
description = "TODO:"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2025-12-22T13:14:46+01:00"
publishdate = "2026-02-13"
lastmod = "2026-02-13"
specialites = ["cardiologie", "endocrinologie"]
annees = "2025"
sources = ["ESC", "EAS"]
tags = ["risque cardiovasculaire"]
english = ["English word"]
sctid = "https://browser.ihtsdotools.org/?perspective=full&conceptId1=44054006&edition=MAIN/2022-10-31&release=&languages=en"
icd10 = ["sctid > Concept Details > Refsets"]
draft = true
image = false
imageSrc = ""
todo = "descr > summary > liens > photo > newsletter > flow > Kanban | Update Fiche VIH, Hypertryglicéridémie avec ESC25dyslipp13 | moduler SCORE2 sur page du score, FH"
+++

{{%article-summary%}}

TODO: (at the end) | RHD | suivi

- Le LDL cholestérol (LDL) est une apolipoprotéine-B constituant la plaque d'athérome, et un facteur de risque majeur du risque cardiovasculaire (RCV)
- Le dosage du LDL (sans jeûner) est recommandé au moins une fois dans la vie et dès 40 ans pour l'évaluation du risque cardiovasculaire, puis répété selon le niveau de risque
- La prise en charge de la dyslipidémie débute par la recherche d'une cause secondaire d'hypercholestérolémie (hypothyroïdie, œstrogènes) et des autres facteurs de risque cardiovasculaires (hypertension artérielle, tabac, diabète, hérédité)
- Après ce bilan initial, déterminer le risque cardiovasculaire (au moins élevé en cas de maladie cardiovasculaire ou à déterminer en cas de prévention primaire avec le SCORE2). Ce risque doit être incrémenté ou affiné par le cardiologue en cas de facteur aggravant (VIH, obésité, maladie inflammatoire ...)
- La présence de maladie cardiovasculaire ou le résultat du SCORE2 détermine les objectifs du traitements correspondant au niveau de risque (facteurs de risque, mode de vie, statine)
- La statine est le traitement de référence de la dyslipidémie en cas de risque cardiovasculaire marquée. Sa titration est rapide jusqu'à l'atteinte des cibles de réduction du LDL et du taux de LDL (avec ajout d'ézétimibe si nécessaire)
- Le suivi spécialisé cardiologique est systématique en cas de risque cardiovasculaire marqué ou de cible lipidique non atteinte

Chapitres liés: [statines]({{% relref "statines.md" %}}), hypertriglycéridémie

{{%/article-summary%}}
{{%collapse "Définition" %}}

LDL-cholestérol (LDL-C)
: Apolipoprotéine-B (ApoB) participant massivement à la constitution de la plaque artérielle au cours de l'athérosclérose.
: Il est non seulement un facteur de risque de maladie cardiovasculaire athéromateuse mais est également une cause directe de ce type de maladie.
: La réduction du LDL-cholestérol est bénéfique sur les risques: d'infarctus du myocarde, d'AVC ischémique, d'accidents ischémiques artériels périphériques.

### Abréviations

CT
: cholestérol total

EAL
: exploration d'une anomalie lipidique

EAS
: {{%lang%}}European Atherosclerosis Society{{%/lang%}}

ESC
: {{%lang%}}European Society of Cardiology{{%/lang%}}

LDL
: {{%lang%}}Low Density Lipoprotein{{%/lang%}} (lipoprotéines de basse densité)

RCV
: risque cardiovasculaire

SCORE2
: {{%lang%}}Systematic Coronary Risk Estimation version 2{{%/lang%}}
{.dl-inline}

{{% /collapse %}}
{{%collapse "Clinique" %}}

> [!INFO]
> L'objectif de l'estimation du risque cardiovasculaire est d'identifier les sujets à risque élevé d'athérome, amenés à bénéficier d'une réduction signification du LDL cholestérol et autres facteurs de risque modifiables d'athérome.
> Le bénéfice dépend du niveau relatif de cette réduction du LDL-C, et doit être d'autant plus forte que le cholestérol est élevé. Il est d'autant plus fort que débuté tôt (*ESC/EAS 2025*).

Le risque cardiovasculaire doit être réévalué régulièrement.

### Interrogatoire

- **Facteurs de risque cardiovasculaires**
  - Âge et sexe, hérédité cardiovasculaire (infarctus du myocarde, AVC, mort subite)
  - Tabagisme, [hypertension artérielle]({{% relref "hypertension-arterielle.md" %}}), [diabète](/tags/diabete/)
- Autres antécédents: **maladie cardiovasculaire** ([AVC]({{% relref "accident-vasculaire-cerebral.md" %}}), [infarctus du myocarde]({{% relref "syndrome-coronarien-aigu.md" %}}), [AOMI]({{% relref "arteriopathie-obliterante-membres-inferieurs.md" %}}) ...), **maladie rénale** chronique, goutte, maladie inflammatoire, BPCO, VIH, stress
- Antécédents familiaux cardiovasculaires
- **Causes d'hyperlipidémie secondaire**  
  Hypothyroïdie, cholestase, syndrome néphrotique et insuffisance rénale chronique, alcool, diabète, médicamenteuse (œstrogènes, corticoïdes, rétinoïdes, antirétroviraux, ciclosporine, diurétiques, bêtabloquants).
- Alcool, toxiques (cocaïne, cannabis ...)
- {{< modal-btn modal-saos >}}Dépister des apnées du sommeil{{< /modal-btn >}}

### Examen clinique

- Pression artérielle, fréquence cardiaque
- Poids, taille, IMC
- Auscultation cardio-respiratoire
- Palpation des pouls périphériques
- Examen des tendons et de l'iris

{{% /collapse %}}
{{%collapse "Estimation du risque cardiovasculaire" %}}

### Niveau de risque cardiovasculaire

{{< clinique/risque-cardiovasculaire >}}

En cas de diabète, le risque cardiovasculaire est évalué en prévention primaire avec le {{< scores/score2-diabetes >}} (application ESC CVD Risk).

> Un taux de LDL élevé dès le jeune âge est associé à un surcroît d'évènements cardiovasculaires.

### Estimation du risque cardiovasculaire en prévention primaire: SCORE2 et SCORE2-OP

TODO: SCORE2

Le SCORE2 a peu de paramètres, les autres facteurs de risque suivant doivent être pris en considération, d'autant plus  lorsque le risque est proche des seuils, pour reclassifier le niveau de risque cardiovasculaire:

- Paramètres démographiques
  - Hérédité cardiovasculaire (hommes avant 55 ans, femmes avant 60 ans)
  - Origines à haut risque (Asie du Sud ++)
  - Facteurs de stress psychosociaux
  - Précarité
- Paramètres cliniques
  - Stress
  - Obésité
  - Sédentarité
  - Migraine avec aura (*ESC 2021*)
  - Maladie inflammatoire
  - Trouble psychiatriques sévère
  - Ménopause précoce
  - Prééclampsie ou trouble hypertensif de la grossesse
  - VIH (RR 2)
  - Syndrome d'apnée obstructive du sommeil (SAHOS)
  - Greffe d'organe
- Biomarqueurs
  - CRPus constamment élevée (> 2 mg/L)
  - Taux élevé de Lp(a) > 50 mg/dL (> 105 nmol/L)
- Imageries
  - Plaque artérielle carotidienne ou fémorale
  - Score calcique marqué (CAC score)  
    Interprétation délicate sous traitement par statine.

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

> << La réalisation d'un bilan lipidique est conseillée chez tous les adultes. Sans anomalie, il n'est pas nécessaire de le recontrôler avant 5 ans. >> -- *Collège de cardiologie*

- Bilan lipidique (EAL, sans jeûner *ESC 2021*)  
  2 dosages espacés de 1-12 semaines. Jeûne privilégié en cas de syndrome métabolique, diabète, hypertriglycéridémie.
- ± Glycémie à jeun
- Recherche d'hyperlipidémie secondaire:
  - TSH
  - PAL, bilirubine
  - albuminurie/créatininurie
- Pré-thérapeutique: ALAT, CPK
- Selon le niveau de risque cardiovasculaire: consultation de cardiologie

> En cas de LDL très élevé (> 2 g/L), évoquer une hypercholestérolémie familiale et adresser au spécialiste (TODO:).

{{% /collapse %}}
{{%collapse "Mesures générales et diététiques" %}}

> [!INFO]
> Les mesures hygiéno-diététiques sont systématiques quelque soit la forme de dyslipidémie. << Les acides gras saturés (AGS) sont le facteur diététique ayant le plus fort impact sur le taux de LDL. >> -- *ESC/EAS 2019*

Recommandations générales universelles pour la prévention cardiovasculaire:

- {{< modal-btn modal-regime >}}Régime méditerranéen{{< /modal-btn >}} ou DASH
- Correction des facteurs de risque cardiovasculaire
  - [Sevrage tabagique]({{% relref "arret-tabac.md" %}})
  - Réduction de l'alcool
  - Activité physique quotidienne (30-60 minutes/j d'{{< modal-btn modal-met >}}intensité modérée{{< /modal-btn >}}), entraînement en résistance ≥ 2 j/semaine
  - Lutte contre la sédentarité
  - Correction d'un surpoids et d'une obésité abdominale (tour de taille femme/homme ≥ 88/102 cm)
  - Dépistage de l'[hypertension artérielle]({{% relref "hypertension-arterielle.md" %}})

---

> Les acides gras monoinsaturés oméga 3 et oméga 6 sont les acides gras privilégiés. Les apports quotidiens en **cholestérol** devraient être réduits à moins de 300 mg/j.

Mesures diététiques pour la réduction du LDL et des triglycérides:

- Éviter les graisses trans (aliments transformés)
- Réduire les **graisses saturées**
- Augmenter les apports en fibres (légumes, fruits, céréales complètes)
- Correction d'un surpoids

Mesures diététiques pour la réduction des triglycérides:

- Perte de poids, réduire l'alcool et les sucres (dont le fructose)
- Réduire les graisses saturées
- Augmenter les apports en oméga 3
- Activité physique

Mesures diététiques pour l'augmentation du HDL cholestérol:

- Éviter les acides gras trans
- Activité physique
- Perte de poids
- Réduire les glucides
- Arrêt du tabac

> -- *ESC/EAS 2019*

{{% /collapse %}}
{{%collapse "Traitement médicamenteux de la dyslipidémie" %}}

> [!INFO]
> << ... la réduction des taux plasmatiques de LDL-C devrait être l'objectif principal pour prévenir les événements cardiovasculaires athéromateux. >> -- *ESC/EAS 2025*
>
> << Le traitement par statines en prévention primaire chez les +70 ans peut être envisagé en cas de risque cardiovasculaire élevé. >> -- *ESC 2021*

Seuil pour l'introduction d'une ==**statine**== selon le risque cardiovasculaire :

- ==**Les modifications du mode de vie sont valables pour toute personne**== (chapitre précédent)
- **Risque cardiovasculaire faible:**
  - Mesures hygiéno-diététiques en cas de LDL cholestérol (sans traitement) ≥ 1,16 g/L
  - Considérer une statine en cas de persistance
  - LDL cible < 1,16 g/L
- **Risque cardiovasculaire modéré:**
  - Mesures hygiéno-diététiques en cas de LDL ≥ 1 g/L
  - Considérer une statine en cas de persistance
  - LDL cible < 1 g/L
- **Risque cardiovasculaire élevé:**
  - Statine de haute intensité d'emblée si LDL ≥ 1 g/L
  - Mesures hygiéno-diététiques en cas de LDL de 0,7 à 0,99 g/L, considérer une statine en cas de persistance
  - LDL cible < 0,7 g/L et réduction d'au moins 50 %
- **Risque cardiovasculaire très élevé en prévention primaire**:
  - Statine de haute intensité d'emblée si LDL ≥ 0,7 g/L
  - Mesures hygiéno-diététiques en cas de LDL < 0,7 g/L, considérer une statine en cas de persistance
  - LDL cible < 0,55 g/L et réduction d'au moins 50 %
- **Risque cardiovasculaire très élevé en prévention secondaire:**
  - Statine de haute intensité systématique (quel que soit le LDL)
  - LDL cible < 0,55 g/L et réduction d'au moins 50 %
- **Risque cardiovasculaire extrême** (événements récurrents sous dose maximale, coronaropathie et artériopathie périphérique):
  - Statine de haute intensité systématique (quel que soit le LDL)
  - LDL cible < 0,4 g/L

Et systématique: VIH +40 ans, greffe d'organe, risque (très) élevé avec chimiothérapie cardiotoxique (anthracycline).

Chez le +75 ans, en prévention primaire, la statine pourrait être considéré en cas de SCORE2-OP définissant un risque cardiovasculaire élevé (*ESC/EAS* 2019).

{{< traitements/statine-intensite >}}

Après toute introduction ou modification du dosage, contrôle du LDL et ALAT à 8 semaines (±4), puis au moins annuel.

> Pour plus de détail, lire le chapitre [statines]({{% relref "statines.md" %}}).

### Autres traitements médicamenteux de la dyslipidémie

Les traitements médicamenteux suivants ont un bénéfice cardiovasculaire. Ils peuvent être utilisés en cas d'intolérance aux statines ou lorsque la cible de LDL cholestérol n'est pas atteinte.

- Ézétimibe
- Anti-PCSK9 (alirocumab Praluent®, évolocumab Repatha®)
- Cholestyramine
- Acide bempédoïque (Nilemdo®)

| Classe | ↘ LDL (%) |
| ------ | ------: |
| Ézétimibe (EZE) | 20 |
| Acide bempédoïque (AB) | 23 |
| Statine d'intensité modérée (SIM) | 30 |
| EZE + AB | 38 |
| Statine de haute intensité (SHI) | 50 |
| SHI + AB | 58 |
| SHI + EZE | 60 |
| PCSK9 | 60 |
| SHI + EZE + AB | 68 |
| PCSK9 + EZE | 70 |
| PCSK9 + EZE + AB | 75 |
| SHI + PCSK9 | 75 |
| SHI + EZE + PCSK9 | 80 |
| SHI + EZE + AB + PCSK9 | 86 |
{caption="Réduction du LDL cholestérol obtenue avec les traitements hypolipémiants en monothérapie ou en association. Dr JB Fron d'après ESC 2025"}

> [!WARNING]
> Les suppléments alimentaires sans évaluation cardiovasculaire ne sont pas recommandées (*ESC 2025*).

{{% /collapse %}}
{{%sources%}}

- [Mach F, et al. 2025 Focused Update of the 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J. 2025.](https://academic.oup.com/eurheartj/article/46/42/4359/8234482)
- [Collège National des Enseignants de Cardiologie, Société Française de Cardiologie. Dyslipidémies. Item 223. Médecine cardiovasculaire - Réussir son DFASM. 2022.](https://www.sfcardio.fr/formation/dfasm/)
- {{< references/esc-cvd >}}
- [Mach F, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J. 2020.](https://academic.oup.com/eurheartj/article/41/1/111/5556353)

### Bibliographie en attente

- [Bouillet B, Boulestreau R, Aboyans V, et al. Management of dyslipidemia in adults. A consensus statement from the French Society of Endocrinology (SFE), the French-speaking Diabetes Society (SFD), the New French-speaking Atherosclerosis Society (NSFA) and the French Society of Cardiology (SFC). Arch Cardiovasc Dis. 2026.](https://www.sciencedirect.com/science/article/pii/S1875213626000057)
- Collège endoc

{{%/sources%}}
{{% modal title="Dépistage des apnées par le score STOP-BANG" id="modal-saos"%}}

{{< scores/stop-bang >}}

{{% /modal %}}
{{% modal title="Régime méditerranéen" id="modal-regime"%}}

{{< traitements/regime-mediterraneen >}}

{{% /modal %}}
{{% modal title="Intensité d'activité physique et MET" id="modal-met"%}}

{{< clinique/activite-physique-intensite >}}

{{% /modal %}}
