+++
title = "Hypercalcémie"
prefix = "l'"
description = "Recommandations pour le diagnostic et la prise en charge de l'hypercalcémie. Calcémie ionisée ou calcémie corrigée sur l'albumine. Bilan PTH, phosphates, ECG"
synonyms = []
auteurs = ["Alaedine BENANI", "Jean-Baptiste FRON"]
date = "2024-02-04T22:00:04+01:00"
publishdate = "2024-02-06"
lastmod = "2024-02-06"
specialites = ["endocrinologie", "néphrologie"]
annees = "2023"
sources = ["Bibliographie"]
tags = ["cancer", "EPS", "fatigue"]
anglais = ["Hypercalcemia", "hypercalcaemia"]
sctid = "66931009"
icd10 = "E83.5"
draft = true
image = false
imageSrc = ""
todo = "descr > summary > liens > photo > flow"
+++

{{%article-summary%}}

L'hypercalcémie est définie par une concentration sérique de calcium supérieure à 2,6 mmol/L (ou 10,4 mg/dL). L'évaluation clinique et le bilan étiologique sont essentiels pour une prise en charge adéquate de l'hypercalcémie. Le traitement dépend de la sévérité de l'hypercalcémie et de sa cause sous-jacente. Un adressage en néphrologie ou en endocrinologie (selon la suspicion étiologique) est parfois nécessaire.

{{%/article-summary%}}
{{%collapse "Définition" %}}

Hypercalcémie
: Calcémie supérieure à 2,6 mmol/L (10,4 mg/dL) ou de **calcémie ionisée > 1,30 mmol/L** (5,2 mg/dL).
: Elle est sévère au-delà de 3 mmol/L et est une urgence thérapeutique.
: Une calcémie ionisée > 1,3 mmol/L est toujours pathologique mais la calcémie totale est influencée par l'albuminémie. Le principal réservoir de calcium est osseux.

### Abréviations

PTH
: parathormone
{.dl-inline}

{{% /collapse %}}
{{%collapse "Calcul de la calcémie corrigée" %}}

> << Une calcémie ionisée supérieure à 1,3 mmol/L est toujours pathologique (hypercalcémie vraie). >> – *CUEN 2023*
{.alert .alert-warning}

Le calcul de la **calcémie corrigée** (valeur de la calcémie totale si l'albuminémie était normale) est systématique lorsqu'on ne dispose que de la **calcémie totale** pour corriger une fausse hypercalcémie liée à une hypoalbuminémie.

Le calcul n'est évidemment pas utile lorsque l'on dispose de la **calcémie ionisée**.

<div class="card-body rounded-lg border my-5">
  <div class="d-block d-lg-flex form-corrected">
    <div class="form-group floating-label textfield-box form-ripple mr-3">
      <label for="input-calcemia">Calcémie (mmol/L)</label>
      <input class="form-control" id="input-calcemia" type="number" min="0" max="50" step="0.1">
    </div>
    <div class="form-group floating-label textfield-box form-ripple mr-3">
      <label for="input-albumine">Albuminémie (g/L)</label>
      <input class="form-control" id="input-albumine" type="number" min="10" max="100" step="1">
    </div>
    <div>
      <label for="input-corrected">Calcémie corrigée</label>
      <input class="form-control" id="input-corrected" type="text" placeholder="Préciser les valeurs" readonly>
    </div>
  </div>
</div>
<script type="module" async>
  // Outil de calcul de la calcémie corrigée by djibe
  window.addEventListener( 'load', () => {
    const calcemia = document.getElementById('input-calcemia')
    const albumine = document.getElementById('input-albumine')
    const corrected = document.getElementById('input-corrected');
    [calcemia, albumine].forEach(elem => elem.addEventListener('input', () => { calcCorrected() }))
    const calcCorrected = () => {
    if (calcemia.value > 0 && albumine.value > 0) {
    corrected.value = (0.025 * (40 - parseInt(albumine.value)) + parseFloat(calcemia.value)).toFixed(2) + ' mmol/L' }}
  })
</script>

{{% /collapse %}}
{{%collapse "Étiologies de l'hypercalcémie" %}}

Les principales étiologies de l'hypercalcémie comprennent:

1. Hyperparathyroïdie primaire: une augmentation de la production de la parathormone (PTH) du fait d'un adénome ou d'une hyperplasie induit une augmentation du calcium
    - Adénome parathyroïdien
    - Hyperplasie des glandes parathyroïdes
2. Hyperparathyroïdie secondaire: une cause externe à la parathyroïde cause une augmentation de la production de la PTH (la parathyroïde est saine)
    - [Insuffisance rénale chronique]({{< relref "insuffisance-renale-chronique.md" >}})
    - [Déficit en vitamine D]({{< relref "vitamine-d.md" >}})
3. Hypercalcémie par métastases ou syndrome paranéoplasique. Les plus fréquentes sont:
    - [Cancer du sein]({{< relref "cancer-sein.md" >}})
    - [Carcinome bronchique]({{< relref "cancer-poumon.md" >}})
    - [Cancer du rein]({{< relref "cancer-rein.md" >}})
    - [Cancer de la thyroïde]({{< relref "cancer-thyroide.md" >}})
    - [Cancer du testicule]({{< relref "cancer-testicule.md" >}})
    - Myélome multiple
4. Hypercalcémie d'autre origine osseuse
    - Sarcoïdose
    - [Thyrotoxicose]({{< relref "hyperthyroidie.md" >}})
    - Immobilisation prolongée  
    Diminution de la mobilité entraînant une libération accrue de calcium des os.
5. Iatrogénie  
  Vitamine A, vitamine D, thiazidiques, lithium, digitaliques.
6. Post-rhabdomyolyse

{{% /collapse %}}
{{%collapse "Clinique" %}}

> << L'hypercalcémie sévère symptomatique est une urgence thérapeutique. >> – *CUEN 2023*
{.alert .alert-warning}

L'hypercalcémie est le plus souvent asymptomatique lorsqu'elle est modérée.

Signes et symptômes de l'hypercalcémie aiguë (le plus souvent > 3 mmol/L):

- Troubles digestifs
  - Anorexie
  - Nausées et vomissements
  - [Constipation]({{< relref "constipation.md" >}})
  - Pancréatite aiguë
- Troubles neuropshychiques
  - [Fatigue](/tags/fatigue/), troubles cognitifs ou de l'humeur
  - Confusion voir hallucinations et coma
  - Faiblesse musculaire
- Troubles cardiaques
  - [Hypertension artérielle]({{< relref "hypertension-arterielle.md" >}})
  - Troubles du rythme cardiaque (raccourcissement du QT, QTc)
- Déshydratation
  - Polyuro-polydipsie rénale
  - Déshydratation extracellulaire
  - [Insuffisance rénale aiguë]({{< relref "insuffisance-renale-aigue.md" >}})

Signes et symptômes et symptômes de l'hypercalcémie chronique:

- Lithiases rénales
- [Insuffisance rénale chronique]({{< relref "insuffisance-renale-chronique.md" >}})
- Troubles cardiovasculaires (dépôts coronaires, valves, myocardiques)

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

> << Le bilan d'une hypercalcémie doit donc toujours comporter soit un dosage du calcium ionisé soit un dosage de l'albuminémie permettant de calculer la calcémie corrigée >> – *CUEN 2023* (voir *Calcul de la calcémie corrigée*)
{.alert .alert-warning}

### Bilan d'une hypercalcémie

Le bilan l'hypercalcémie de l'hypercalcémie comprend:

- Albuminémie pour le calcul de la calcémie corrigée
- Ionogramme sanguin
- Phosphatémie
- Créatininémie, DFG
- Calciurie à jeun et des 24 heures
- PTH sérique (N 15-65 pg/mL)
- 25 OH vitamine D et 1,25 OH vitamine D
- [Électrophorèse des protéines sériques]({{< relref "electrophorese-proteines-seriques.md" >}})
- Électrocardiogramme (ECG)  
  Si hypercalcémie sévère > 3 mmol/L selon *CUEN*.

Des examens supplémentaires d'imagerie (scintigraphie osseuse ou IRM), peuvent être nécessaires.

{{% /collapse %}}
{{%collapse "Traitement" %}}


{{% /collapse %}}
{{%sources%}}

- [Collège Universitaire des Enseignants de Néphrologie (CUEN). Hypercalcémie - hypocalcémie. Manuel de néphrologie 10ème édition. 2023.](https://cuen.fr/manuel3/spip.php?article28)
- [Bilezikian JP et al; International Workshop on Primary Hyperparathyroidism. Evaluation and Management of Primary Hyperparathyroidism: Summary Statement and Guidelines from the Fifth International Workshop. J Bone Miner Res. 2022.]()
- [Minisola S et al. Diagnosis and management of hypercalcemia. BMJ. 2015.]()
- [Silverberg SJ et al. Current issues in the presentation of asymptomatic primary hyperparathyroidism: proceedings of the Fourth International Workshop. J Clin Endocrinol Metab. 2014.]()

### Bibliographie en attente

- Prescrire
- Cochrane
- Minerva
- Collège National des Enseignants de Médecine Interne (CEMI). Hypercalcémie. Référentiel Collège de Médecine interne R2C. 2021.

{{%/sources%}}

≤≥±®æœŒÈ²³ÂSpO<sub>2</sub>–
