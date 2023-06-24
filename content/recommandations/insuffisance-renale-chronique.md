+++
title = "Insuffisance rénale chronique (IRC)"
prefix = "l'"
titleSeo = "Insuffisance rénale chronique"
description = "Recommandations HAS et KDIGO pour la prise en charge de l'insuffisance rénale chronique. Clairance de la créatinine CKD-EPI, néphroprotection, IEC, statine ..."
longHtml = true
synonyms = ["et maladie rénale chronique (MRC)"]
auteurs = ["Jean-Baptiste FRON"]
date = "2020-04-27T13:31:56+02:00"
publishdate = "2020-04-27"
lastmod = "2023-02-17"
specialites = ["nephrologie"]
annees = "2021"
sources = ["HAS", "KDIGO", "ADA", "ESC"]
tags = ["depistage", "diabete", "dyspnee", "fatigue", "ferritine", "HTA", "nephropathie", "obesite", "risque cardiovasculaire", "vaccin", "vitamine d"]
anglais = ["Chronic kidney disease (CKD)", "chronic renal insufficiency"]
sctid = "709044004"
icd10 = "N18.9"
image = true
imageSrc = "Illustration de l'insuffisance rénale par pch.vector / Freepik"
flowchart = true
todo = "maladie pro, aliments riches K/P"
+++

{{% article-summary %}}

- {{< modal-btn modal-creatinine >}}Situations où le débit de filtration estimé n'est pas fiable{{< /modal-btn >}}
- Dépistage annuel des populations à risque d'insuffisance rénale par créatininémie + albuminurie sur échantillon
- 3 piliers de l'évaluation rénale: étiologie, DFG selon CKD-EPI et ratio albuminurie/créatininurie
- Toute personne avec une insuffisance rénale chronique est à {{< modal-btn modal-rcv >}}risque cardiovasculaire élevé ou très élevé{{< /modal-btn >}}
- Néphroprotection  
  Arrêt du tabac, {{< modal-btn modal-nephrotoxiques >}}éviter les néphrotoxiques{{< /modal-btn >}}, tension cible < 120/90 mmHg, {{< modal-btn modal-rcv >}}LDL < 0,7 voire 0,55 g/L{{< /modal-btn >}}, {{< modal-btn modal-iec >}}IEC{{< /modal-btn >}}/{{< modal-btn modal-ara2 >}}ARA2{{< /modal-btn >}}, {{< modal-btn modal-isglt2 >}}dapagliflozine{{< /modal-btn >}}, vaccin covid-19, activité physique
- Mesures supplémentaires chez le diabétique (voir *Prise en charge*)
- Adaptation des traitements selon {{< scores/ckd-epi >}}
- Estimation de la progression de la maladie rénale chronique: [score KFRE](https://kidneyfailurerisk.com/)
- Le suivi de l'enfant relève exclusivement du néphrologue

{{%/article-summary%}}
{{%collapse "Définitions"%}}

Maladie rénale chronique (MRC)
: {{%lang%}}Chronic kidney disease{{%/lang%}}
: Présence d'une *insuffisance rénale chronique* (IRC):  
Diminution du *débit de filtration glomérulaire estimé* (DFGe) < 60 mL/min/1,73 m² (formule {{< scores/ckd-epi >}})  
OU présence ≥ 1 *marqueur d'atteinte rénale* persistant **plus de 3 mois**:  
    - Albuminurie ou protéinurie
    - Hématurie > 10/mm³ (hors cause urologique)  
    - Leucocyturie > 10/mm³ (en l'absence d'infection)
    - Anomalie morphologique à l'échographie rénale  
    Asymétrie de taille, contours bosselés, reins de petite taille/gros reins polykystiques, néphrocalcinose, kyste.
: La maladie rénale chronique augmente le risque et la {{< modal-btn modal-rcv >}}mortalité cardiovasculaire{{< /modal-btn >}}.

Insuffisance rénale chronique terminale (IRCT)
: Insuffisance rénale chronique avec un débit de filtration glomérulaire < 15 mL/min/1,73 m² (*stade 5* ou *terminale*).

{{%info%}}

### Estimation du débit de filtration glomérulaire

Chez l'adulte, la formule utilisée pour estimer le débit de filtration glomérulaire (DFG ou DFGe) est celle du {{< scores/ckd-epi >}}.

> *KDIGO 2012*

{{%/info%}}

### Abréviations

CKD-EPI
: {{%lang%}}Chronic Kidney Disease EPIdemiology collaboration (*Levey 2009*){{%/lang%}}. Formule d'estimation simplifiée la plus précise pour le calcul du débit de filtration glomérulaire estimé (DFGe)

DFGe
: débit de filtration glomérulaire estimé (remplace le calcul de la clairance de la créatinine Cockroft)

FRCV
: facteurs de risque cardiovasculaire

HTA
: hypertension artérielle

IRC
: insuffisance rénale chronique

IRCT
: insuffisance rénale chronique terminale

KFRE
: score {{%lang%}}Kidney Failure Risk Equation{{%/lang%}}

MRC
: maladie rénale chronique

RAC
: Ratio albuminurie/créatininurie (mg/g)

RCV
: risque cardiovasculaire
{.dl-inline}

### Épidémiologie de l'insuffisance rénale chronique

3 millions de Français atteints de maladie rénale chronique (7-10% des adultes) avec un dépistage insuffisant.

9500 nouveaux dialysés par an, augmentation de 4%/an, liés aux facteurs de risque cardiovasculaires: [hypertension artérielle]({{< relref "hypertension-arterielle.md" >}}) et **diabète** pour la moitié des cas.

Fin 2018: 89.692 malades en suppléance (55% dialyse et 45% greffés).  
4 milliards d'euros annuels (82% pour la dialyse).

{{< card-link-external title="Dépenses liées à la dialyse" image="ameli" subtitle="Data ameli" url="https://data.ameli.fr/pages/pathologies/?refine.patho_niv1=Insuffisance%20r%C3%A9nale%20chronique%20terminale&refine.patho_niv2=Dialyse%20chronique">}}

[Dépenses liées à l'IRC terminale](https://data.ameli.fr/pages/pathologies/?refine.patho_niv1=Insuffisance%20r%C3%A9nale%20chronique%20terminale), à la [transplantation rénale](https://data.ameli.fr/pages/pathologies/?refine.patho_niv1=Insuffisance%20r%C3%A9nale%20chronique%20terminale&refine.patho_niv2=Transplantation%20r%C3%A9nale) et son [suivi](https://data.ameli.fr/pages/pathologies/?refine.patho_niv1=Insuffisance%20r%C3%A9nale%20chronique%20terminale&refine.patho_niv2=Suivi%20de%20transplantation%20r%C3%A9nale)

{{%/collapse%}}
{{%collapse "Facteurs de risque d'insuffisance rénale - Qui dépister?" %}}

Population à risque d'insuffisance rénale chronique, définie par la présence d'au moins un facteur de risque parmi:

- [Diabète type 2]({{< relref "diabete-type-2.md" >}}) ou [type 1]({{< relref "diabete-type-1.md" >}})
- [Hypertension artérielle]({{< relref "hypertension-arterielle.md" >}})
- Athérome
- [Insuffisance cardiaque]({{< relref "insuffisance-cardiaque-chronique.md" >}})
- Obésité
- Maladie de système ou auto-immune  
  Lupus, vascularite, [polyarthrite rhumatoïde]({{< relref "polyarthrite-rhumatoide.md" >}}).
- Pathologie urologique  
  Uropathie obstructive, [infections urinaires récidivantes]({{< relref "infection-urinaire-cystite-pyelonephrite.md" >}}).
- Antécédents familiaux d'insuffisance rénale évolutive
- Antécédents de néphropathie aiguë
- Traitement par {{< modal-btn modal-nephrotoxiques >}}néphrotoxiques{{< /modal-btn >}}  
  AINS, chimiothérapie, exposition aux produits de contraste iodés ou radiothérapie péri-rénale
- Exposition professionnelle  
  [Plomb]({{< relref "saturnisme.md" >}}), cadmium, mercure.

Le dépistage des populations à risque doit être répété 1 fois par an (ou selon l'avis du néphrologue en antécédents familiaux)
{.alert .alert-info}

### Comment dépister la maladie rénale chronique ?

{{%info%}}

- Créatininémie avec DFG selon {{< scores/ckd-epi >}}
- Ratio albuminurie/créatininurie (RAC)  
  {{%class%}}Recueil à tout moment de la journée (de préférence le matin).{{%/class%}}
{{%/info%}}

En cas d'anomalie (hématurie, protéinurie, DFGe < 60), le bilan doit être **recontrôlé à 3 mois** dans le même laboratoire. La persistance à 3 mois de l'anomalie affirme la *maladie rénale chronique*.

### Suivi par un néphrologue

Indications au suivi de la maladie rénale chronique par un néphrologue:

- Immédiat  
  - Glomérulonéphrite rapidement progressive
  - Insuffisance rénale aiguë
- Rapide
  - Lithiase, hydronéphrose, tumeur
  - Hypertension artérielle réfractaire
  - Syndrome néphrotique, œdèmes, hématurie, signes extra-rénaux

Le recours au néphrologue est recommandé en cas de doute sur la nature de la maladie rénale ou des antécédents familiaux.

{{%/collapse%}}
{{%collapse "Clinique" %}}

### 1) Interrogatoire

- Antécédents personnels et familiaux de maladie rénale ou urinaire
- Antécédents cardiovasculaires et FRCV (hypertension, diabète, tabagisme, dyslipidémie, obésité)
- {{< modal-btn modal-rcv >}}Risque cardiovasculaire{{< /modal-btn >}}
- Exposition aux {{< modal-btn modal-nephrotoxiques >}}néphrotoxiques{{< /modal-btn >}}
  - Professionnelle  
    Plomb, mercure, cadmium, solvants organiques.
  - Médicamenteuse  
    AINS, aminoside, produit de contraste iodé, chimiothérapie.
  - Alimentaire  
    Phytothérapie, herbes chinoises.
- Résultats antérieurs de créatininémie et analyses urinaires

### 2) Évaluer le stade de la maladie rénale chronique et l'albuminurie

Stades de l'insuffisance rénale chronique selon le débit de filtration glomérulaire et de l'albuminurie.

{{< table title="Stades de la maladie rénale chronique et de l'insuffisance rénale chronique selon KDIGO 2012" >}}
| Stade | DFGe          | Définition    |
|:-----:|:-------------:|---------------|
| 1     | ≥ 90          | MRC avec DFG normal ou augmenté |
| 2     | 60-89         | MRC avec DFG légèrement diminué |
| 3A    | 45-59         | IRC modérée   |
| 3B    | 30-44         | IRC modérée   |
| 4     | 15-29         | IRC sévère    |
| 5     | &lt; 15       | IRC terminale |
{{< /table >}}

> **DFGe =** DFG estimé selon CKD-EPI en mL/min/1,73 m². Ajouter un T au stade quand patient greffé (ex: 4T)

{{< table title="Classification de l'albuminurie selon KDIGO 2012" >}}
| Stade | mg/mmol | mg/g     | mg/24h   | Définition           |
|-------|--------:|---------:|---------:|----------------------|
| A1    | &lt; 3  | &lt; 30  | &lt; 30  | Normale              |
| A2    | 3-30    | 30-300   | 30-300   | Modérément augmentée |
| A3    | &gt; 30 | &gt; 300 | &gt; 300 | Augmentée            |
{{< /table >}}

Le terme de *microalbuminurie* n'est plus utilisé
{.alert .alert-warning}

**NB.** Faux positifs pour une albuminurie (ou protéinurie): [infection urinaire]({{< relref "infection-urinaire-cystite-pyelonephrite.md" >}}), fièvre, [insuffisance cardiaque]({{< relref "insuffisance-cardiaque-chronique.md" >}}), protéinurie orthostatique, sport intense dans les 24h, menstruations, AINS, alimentation riche en protéines.

### 3) Examen clinique

Recherche de signes étiologiques et du retentissement de la maladie rénale:

- Poids, taille, IMC, tour de taille
- Pression artérielle standardisée ± automesure tensionnelle
- Auscultation cardiaque, souffle carotidien/rénal, pouls périphériques
- Œdèmes, hydratation, reins palpables, signes de maladie de système
- Urologiques  
  Signes fonctionnels urinaires, globe vésical, touchers pelvien.
- {{< modal-btn modal-mna >}}Dénutrition{{< /modal-btn >}}
- Stade avancé: syndrome urémique  
  Fatigue, dyspnée, anorexie, nausées, vomissements, prurit, syndrome des jambes sans repos, crampes nocturnes, nycturie, troubles cognitifs, somnolence, hémorragies, troubles endocriniens, hypertension sévère.

### 4) Critères pour apprécier l'évolutivité de la MRC

La maladie rénale est considérée comme évolutive si présence de facteur ci-dessous (déclin annuel rapide du DFG, différence entre 2 annnées - calculé par DFGe année n – DFGe année n+1)

- {{%class%}}Physiologique si < 2 mL/min/1,73m²/an{{%/class%}}
- {{%class%}}Modéré si ≥ 2 et < 5{{%/class%}}
- [Score KFRE > 3% à 5 ans](https://kidneyfailurerisk.com/)
- **Déclin rapide** si variation annuelle du DFG ≥ -5 mL/min/1,73m²
- Présence d'une albuminurie (surtout si sévère > 500 mg/g)
- Hypertension artérielle non contrôlée

Quelque soit le stade de la MRC, ces situations nécessitent un avis néphrologique.

{{%/collapse%}}
{{%collapse "Examens complémentaires" %}}

{{%info%}}

### Bilan au diagnostic de la maladie rénale chronique

Bilan à réaliser devant la découverte d'une insuffisance rénale ou une maladie rénale chronique:

- Échographie rénale ± mesure du résidu post-mictionnel
- ± Écho-doppler des artères rénales
- NFS
- Créatininémie avec estimation du DFGe {{< scores/ckd-epi >}}
- Bilan lipidique (de moins d'un an)
- Glycémie à jeun ou HbA<sub>1C</sub>
- Urinaire  
  ECBU + ratio albuminurie/créatininurie (RAC).
{{%/info%}}

- DFGe < 60 (voire < 45)
  - Ionogramme sanguin, bicarbonates
  - Ferritinémie
  - [25-OH-Vitamine D]({{< relref "vitamine-d.md" >}}), calcémie, phosphorémie, PTH
  - Albuminémie, urémie
  - Statut hépatite B: AgHBs, anticorps anti-HBs et anti-HBc
- Si anémie: réticulocytes  
  {{%class%}}Anémie normochrome normocytaire arégénérative.{{%/class%}}
- **Confirmer une albuminurie** +30 mg/g (3 mg/mmol) sur un échantillon du matin
- Si signes fonctionnels urinaires ou hématurie: échographie vésicale
- Si [goutte symptomatique]({{< relref "goutte.md" >}}): uricémie

{{%/collapse %}}
{{%collapse "Prise en charge et suivi de l'insuffisant rénal" %}}

**Objectifs du traitement:** traiter la maladie causale, ralentir la progression de la maladie, prévenir le risque cardiovasculaire et les complications de la MRC.

Éléments vitaux de la prise en charge de l'insuffisance rénale chronique:

- [ALD n°19]({{< relref "affection-longue-duree.md" >}})
- Suivi par le généraliste possible si:
  - Stade 1, 2, 3A stable sans complication
  - Voire sujet âgé avec DFG 20-45
- Thérapeutique
  - Adaptation médicamenteuse selon le DFG estimé par {{< scores/ckd-epi >}}
  - {{< modal-btn modal-nephrotoxiques >}}Éviction des néphrotoxiques{{< /modal-btn >}}
  - Pas d'automédication ou herbes chinoises
- {{< modal-btn modal-rcv >}}Risque cardiovasculaire (RCV) élevé ou très élevé{{< /modal-btn >}}
  - Sevrage tabagique et réduction d'alcool
  - {{< modal-btn modal-regime >}}Régime méditerranéen{{< /modal-btn >}}
  - Activité physique d'intensité modérée ≥ 150 min/semaine
  - {{< modal-btn modal-sel >}}Régime désodé < 5-6 g/j{{< /modal-btn >}} et hydrique 1,5 L/j (ni restreint ni forcé)
- [Arrêt du tabac]({{< relref "arret-tabac.md" >}})
- Contrôle tensionnel
  - Traitement si PA n'est pas dans la cible (*KDIGO 2021*)  
  - Pression artérielle cible < 120/90 mmHg (*KDIGO 2021*), {{%class%}}< 150-160 si ≥ 80 ans (*HAS 2021*){{%/class%}}  
    ou greffe < 130/80 mmHg (*KDIGO 2021*)
  - Par {{< modal-btn modal-iec >}}IEC{{< /modal-btn >}} ou {{< modal-btn modal-ara2 >}}ARA2{{< /modal-btn >}} dose maximale
  - Automesure tensionnelle
- {{< modal-btn modal-statine-intensite >}}Statine de moyenne intensité{{< /modal-btn >}}
  - {{< modal-btn modal-rcv >}}RCV très élevé{{< /modal-btn >}}: LDL cible < 0,55 g/L et réduction +50%  
    IRC sévère ou modérée avec albuminurie &gt; 3 ; diabète et DFG < 45 ou DFG 45-59 avec albu 3-30 ou albu +30
  - {{< modal-btn modal-rcv >}}RCV élevé{{< /modal-btn >}}: LDL cible < 0,7 g/L et réduction +50%  
    Toutes les autres atteintes rénales.
- **Albuminurie cible** < 30 mg/mmol par {{< modal-btn modal-iec >}}IEC{{< /modal-btn >}}/{{< modal-btn modal-ara2 >}}ARA2{{< /modal-btn >}}  
  Envisager la {{< modal-btn modal-isglt2 >}}dapagliflozine{{< /modal-btn >}} (*ESC 2021*)
- Protéines < 1 g/kg/j
  - DFGe < 60: 0,6-0,8 g/kg/j
  - Sauf chez la personne âgée
- Vaccinations
  - Grippe annuelle
  - {{< modal-btn modal-vaccin-pneumocoque >}}Pneumocoque{{< /modal-btn >}}
  - Covid-19
  - Sérologie [hépatite B]({{< relref "hepatite-b.md" >}}) ± vacciner  
  {{%class%}}Cible anti-HBs +10 UI/L.{{%/class%}}
- Ferritinémie cible +100 ng/mL
- DFGe < 45
  - Suivi par néphrologue impératif
  - Protection du *capital veineux*
  - [Vitamine D cible]({{< relref "vitamine-d.md" >}}) +75 nmol/L (*Souberbielle 2019*)
- Bicarbonates < 22 mmol/L: supplémentation
- Maladie professionnelle et prévention si expositions
- Associations de patients  
  [Fondation du Rein](https://www.fondation-du-rein.org/), [France Rein](https://www.francerein.org/), [renaloo](https://renaloo.com/), [AIRG](https://www.airg-france.fr/), [Objectif Rein Santé](https://objectifreinsante.org/).

### Prise en charge de la maladie rénale chez le diabétique

Mesures précédentes avec les particularités suivantes (*ADA 2023* et *KDIGO 2022*):

- {{< modal-btn modal-statine-intensite >}}Statine de moyenne à forte intensité{{< /modal-btn >}} selon le {{< modal-btn modal-rcv >}}RCV{{< /modal-btn >}}  
  Ne pas introduire au stade terminal, évaluer la poursuite à ce stade.
- Albuminurie cible < 3 mg/mmol
  - Contrôle par {{< modal-btn modal-iec >}}IEC{{< /modal-btn >}} + anti-aldostérone finérénone (Karendia®, pas encore disponible) si non contrôlée (si DFG DFG ≥ 25 et kaliémie normale)
  - Albuminurie et normotension: considérer {{< modal-btn modal-iec >}}IEC{{< /modal-btn >}}/{{< modal-btn modal-ara2 >}}ARA2{{< /modal-btn >}}
- {{< modal-btn modal-hba1c >}}HbA1c cible ≤ 7%{{< /modal-btn >}}  
    8% si IRC sévère ou terminale.
- Suivi diabétologique impératif
- DFG ≥ 20: {{< modal-btn modal-isglt2 >}}iSGLT2/gliflozine{{< /modal-btn >}}  
- Traitements hypoglycémiants préférés: {{< modal-btn modal-isglt2 >}}iSGLT2{{< /modal-btn >}}, {{< modal-btn modal-metformine >}}metformine{{< /modal-btn >}}, {{< modal-btn modal-glp1ra >}}GLP-1{{< /modal-btn >}}
- Régime désodé < 5 g/j
- Attention au risque hypoglycémique (sulfamide, glinide, insuline)

### Surveillance biologique

<div class="card card-hover">
<ul class="nav nav-tabs nav-justified mb-4" id="justifiedTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button aria-controls="sup45" aria-selected="true" class="nav-link active" data-toggle="tab" data-target="#sup45" id="sup45-tab" type="button" role="tab">DFGe ≥ 45</button>
  </li>
  <li class="nav-item" role="presentation">
    <button aria-controls="stade3b" aria-selected="false" class="nav-link" data-toggle="tab" data-target="#stade3b" id="stade3b-tab" type="button" role="tab">30-44</button>
  </li>
  <li class="nav-item" role="presentation">
    <button aria-controls="stade4" aria-selected="false" class="nav-link" data-toggle="tab" data-target="#stade4" id="stade4-tab" type="button" role="tab">15-29</button>
  </li>
  <li class="nav-item" role="presentation">
    <button aria-controls="stade5" aria-selected="false" class="nav-link" data-toggle="tab" data-target="#stade5" id="stade5-tab" type="button" role="tab">&lt; 15</button>
  </li>
</ul>
<div class="tab-content" id="justifiedTabContent">
  <div aria-labelledby="sup45-tab" class="tab-pane fade show active" id="sup45" role="tabpanel">

    - Suivi généraliste ≥ 1/an
    - 1/an: lipidique, glycémie à jeun, créatininémie, ratio albuminurie/créatininurie

  </div>
  <div aria-labelledby="stade3b-tab" class="tab-pane fade" id="stade3b" role="tabpanel">

    - Suivi généraliste ≥ 2/an
    - Si néphrologue: ≥ 1/an
    - Tous les 3-6 mois: créatininémie, ratio albuminurie/créatininurie (voire +), ionogramme, bicarbonates, calcémie, phosphorémie
    - 1-2/an: NFS, réticulocytes, ferritinémie
    - 1/an: lipidique, glycémie à jeun, créatininémie, albuminémie
    - Anticorps anti-HBs tous les 3 ans
    - PTH selon valeur initiale et la progression

  </div>
  <div aria-labelledby="stade4-tab" class="tab-pane fade" id="stade4" role="tabpanel">

    - Suivi généraliste ≥ 4/an
    - Néphrologue: ≥ 2/an
    - Tous les 1-3 mois: créatininémie, urémie, ionogramme, bicarbonates, calcémie, phosphorémie
    - Tous les 1-6 mois: albuminémie, PTH
    - Tous les 3-6 mois: ratio albuminurie/créatininurie, NFS, réticulocytes, ferritinémie, PAL
    - 1/an: lipidique, glycémie à jeun, anticorps anti-HBs

  </div>
  <div aria-labelledby="stade5-tab" class="tab-pane fade" id="stade5" role="tabpanel">

    - Suivi généraliste ≥ 1/mois
    - Néphrologue: ≥ 4/an
    - 1/mois: créatininémie, ionogramme, bicarbonates, calcémie, phosphorémie
    - Tous les 1-3 mois: urémie, NFS, réticulocytes, ferritinémie, PAL
    - Tous les 1-6 mois: albuminémie
    - Tous les 3-6 mois: PTH
    - 1/an: lipidique, glycémie à jeun, anticorps anti-HBs
    - Selon néphrologue: ratio albuminurie/créatininurie

</div>
</div>
</div>

### Traitement des complications

- Anémie
  - Ferritinémie cible +100 ng/mL
  - Bilan CRP, dosage vitamines B9 et B12
  - Si insuffisants et Hb < 10 g/dL: EPO par spécialiste avec cible 10-12 g/dL et surveillance tensionnelle
- Ostéodensitométrie si {{< modal-btn modal-risque-fracture >}}personne à risque de fracture{{< /modal-btn >}}
- Autres par coordination néphrologue-diététicien

{{%/collapse %}}
{{%collapse "Éducation thérapeutique" %}}

### Reprendre en consultation dédiée

- Ses connaissances, représentations, croyances, peurs de la maladie, gestion de l'avenir
- Ses attentes, ses motivations au changement
- Ses capacités à modifier son mode de vie
- Les freins à une prise en charge efficace (psychologiques, socioprofessionnels)
- Les problèmes de santé posés par la maladie

### Connaissances à acquérir

#### Néphroprotection

- Contre-indication des néphrotoxiques, compléments alimentaires, pas d'automédication, adaptation des posologies
- Précautions pour injections d'iode ou Gadolinium
- Précautions professionnelles (médecin du travail)
- Risques d'accumulation des médicaments à élimination rénale
- Aggravation par le tabac
- Suspension des traitements à élimination rénale en pathologie aiguë
  - Diarrhées, vomissements, fièvre, canicule, sport intense
  - IEC/ARA2, diurétiques, AINS, metformine, lithium, digoxine.

#### Cardiovasculaire

- Arrêt du tabac
- Réduire la consommation d'alcool
- Automesure tensionnelle et suivi du poids
- Lutte surpoids et sédentarité
- Activité physique 30 min x 5/semaine
- Expliquer le bénéfice de l'activité physique

#### Diététique

- Équilibre alimentaire et énergétique 30-40 kcal/kg/j
- Apports en eau, adaptés à la soif (env. 1,5 L/j)
- Si HTA: restriction sodée < 5 g/j sauf diarrhées
- Connaître les aliments riches en sel
- Protéines
  - Connaître les conséquences de l'excès de protéines
  - Limiter les protéines < 1 g/kg/j dès que la clairance est < 60
- Apports en calcium, phosphore, potassium

Protection du capital veineux quand DFGe < 45 mL/min (pas de prélèvement des avant-bras)
{.alert .alert-warning}

#### Symptômes

Connaître les signes et symptômes de la MRC et savoir qui prévenir.

{{%/collapse%}}
{{%collapse "Conduite à tenir pour le dépistage de la maladie rénale chronique" "show" %}}

{{< mermaid title="Conduite à tenir pour le dépistage et la prise en charge de la maladie rénale chronique. Dr JB Fron d'après HAS 2021 et KDIGO" >}}
graph TB
fdr["<b>Personne à risque</b><br>—<br>- HTA, diabète<br>- Obésité<br>- Athérome<br>- Insuffisance cardiaque<br>- Maladie de système<br>- Pathologie urologique<br>- ATCD familial d'IRC évolutive<br>- Exposition professionnelle<br>- Néphrotoxiques"] --> 2(Bilan annuel)
style fdr stroke:#4150f5, stroke-width:1px
  2 --> 3N(Normal)
    3N --> 2
  2 --> 3A(Anormal)
  3A --> 4(Contrôle à 3 mois)
  4 --> Normal
    Normal --> 2
  4 --> Anormal
  Anormal --> bilan("Bilan initial de la MRC + Stade<br>voir Examens complémentaires")
  bilan --> nephroprotection("<strong>Néphroprotection maximale</strong><br>—<br>- Lutte FRCV<br>- Éviction néphrotoxiques<br>- Adaptation des posologies<br>- Risque cardiovasculaire (très) élevé<br>- &lt; 5g sel/j<br>- PA &lt; 120/90 mmHg<br>- LDL &lt; 0,7 g/L<br>- Albuminurie cible &lt; 30 mg/mmol<br>- Vaccin grippe, pneumo, Covid, VHB<br>- Ferritinémie +100 ng/mL")
  nephroprotection -- stade 3B+ --> avis(Suivi néphrologique)
{{< /mermaid >}}

{{%/collapse%}}
{{%sources%}}

- {{< references/ada-soc >}}
- [Kidney Disease: Improving Global Outcomes (KDIGO) Diabetes Work Group. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int. 2022.](https://kdigo.org/guidelines/diabetes-ckd/)
- {{< references/esc-cvd >}}
- {{< references/sfd-dt2 >}}
- [HAS. Maladie rénale chronique de l'adulte. Guide du parcours de soins. Juillet 2021.](https://www.has-sante.fr/jcms/p_3288950/fr/guide-du-parcours-de-soins-maladie-renale-chronique-de-l-adulte-mrc)
- [Cheung A. et al. Executive summary of the KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease. Kidney International. 2021.](https://www.kidney-international.org/article/S0085-2538(20)31269-2/fulltext)
- {{< references/esc-dyslipidaemias >}}
- {{< references/esc-hta >}}
- [Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney inter. Suppl. 2013. (PDF)](https://kdigo.org/wp-content/uploads/2017/02/KDIGO_2012_CKD_GL.pdf)

### À lire

- [HAS. Suivi ambulatoire de l'adulte transplanté rénal au-delà de 3 mois après transplantation. Recommandations de bonne pratique. 2007.](https://www.has-sante.fr/jcms/c_629812/fr/suivi-ambulatoire-de-l-adulte-transplante-renal-au-dela-de-3-mois-apres-transplantation)
- [Collège Universitaire des Enseignants de Néphrologie (CUEN). Insuffisance rénale chronique chez l'adulte et chez l'enfant. Item 264. Manuel de néphrologie 10ème édition. 2023.](https://cuen.fr/manuel3/spip.php?article18)

{{%/sources%}}
{{% modal title="Situations où le DFG est ininterprétable selon KDIGO 2012" id="modal-creatinine"%}}

{{< clinique/creatinine-inadaptee >}}

{{% /modal %}}
{{% modal title="Mini Nutritional Assessment version courte" id="modal-mna"%}}

{{< scores/mna >}}

{{% /modal %}}
{{% modal title="Risque cardiovasculaire selon ESC 2021" id="modal-rcv"%}}

{{< clinique/risque-cardiovasculaire >}}

{{% /modal %}}
{{% modal title="Facteurs de risque de fracture" id="modal-risque-fracture"%}}

{{< clinique/osteoporose-risque-fracture >}}

{{% /modal %}}
{{% modal title="Objectifs glycémiques selon SFD 2021" id="modal-hba1c"%}}

{{< clinique/objectifs-hba1c >}}

{{% /modal %}}
{{% modal title="Statines et réduction du LDL" id="modal-statine-intensite"%}}

{{< traitements/statine-intensite >}}

{{% /modal %}}
{{% modal title="IEC dans l'hypertension" id="modal-iec" %}}

{{< traitements/iec >}}

{{% /modal %}}
{{% modal title="ARA2 dans l'hypertension" id="modal-ara2" %}}

{{< traitements/ara2 >}}

{{% /modal %}}
{{% modal title="Metformine" id="modal-metformine"%}}

{{< traitements/metformine >}}

{{% /modal %}}
{{% modal title="Inhibiteurs du cotransporteur SGLT2" id="modal-isglt2"%}}

{{< traitements/isglt2 >}}

{{% /modal %}}
{{% modal title="Agonistes du récepteur GLP-1" id="modal-glp1ra"%}}

{{< traitements/glp1ra >}}

{{% /modal %}}
{{% modal title="Régime méditerranéen" id="modal-regime"%}}

{{< traitements/regime-mediterraneen >}}

{{% /modal %}}
{{% modal title="Aliments riches en sel" id="modal-sel"%}}

{{< traitements/aliments-sel >}}

{{% /modal %}}
{{% modal title="Vaccination anti-pneumococcique" id="modal-vaccin-pneumocoque"%}}

{{< traitements/vaccin-pneumocoque >}}

{{% /modal %}}
{{% modal title="Principaux néphrotoxiques" id="modal-nephrotoxiques"%}}

{{< traitements/nephrotoxiques >}}

{{% /modal %}}
