+++
title = "Thrombose veineuse profonde"
prefix = "la "
shortname = "TVP"
synonyms = ["Phlébite"]
auteurs = ["Jean-Baptiste FRON"]
date = 2021-03-19T18:21:00+02:00
publishdate = 2021-03-19
lastmod = 2021-03-19
specialites = ["cardiologie"]
annees = "2019"
sources = ["SFC", "SPLF"]
tags = ["MVTE"]
anglais = []
sctid = ""
draft = true
image = false
imageSrc = ""
todo = "coder Constans et LEFt, mieux est Wells ou Wells modifié?, proba forte et doppler neg?, éducation AVK"
+++

{{%article-summary%}}

- Score clinique systématique et D-dimères ou écho-doppler veineux selon le résultat
- Thrombose veineuse superficielle, voir la fiche dédiée (*en cours*).

{{%/article-summary%}}
{{%collapse "Définition" %}}

### Abréviations

**AOD:** anticoagulant oral direct (anciennement NACO)  
**AVK:** anti-vitamine K  
**EP:** embolie pulmonaire  
**HBPM:** héparine de bas poids moléculaire  
**HNF:** héparine non fractionnée  
**MI:** membre inférieur  
**MVTE:** maladie veineuse thromboembolique  
**TVP:** thrombose veineuse profonde  
**UI:** unités internationales

{{% /collapse %}}
{{%collapse "Probabilité clinique et score de Wells" %}}

Il est recommandé d'utiliser un des scores ci-dessous plutôt qu'un appréciation clinique.

<div class="card my-3 my-xl-5">
  <ul class="nav nav-justified nav-tabs" id="justifiedTab" role="tablist">
    <li class="nav-item">
      <a aria-controls="wells-tab" aria-selected="true" class="nav-link active" data-toggle="tab" href="#wells-tab" id="wells" role="tab">Wells modifié</a></li>
    <li class="nav-item">
      <a aria-controls="constans-tab" aria-selected="false" class="nav-link" data-toggle="tab" href="#constans-tab" id="constans" role="tab">Constans</a></li>
    <li class="nav-item">
      <a aria-controls="grossesse" aria-selected="false" class="nav-link" data-toggle="tab" href="#grossesse-tab" id="grossesse" role="tab">Grossesse</a></li>
  </ul>
  <div class="card-body tab-content">
    <div aria-labelledby="wells" class="tab-pane fade show active" id="wells-tab" role="tabpanel">
      <h4 class="card-title mb-lg-4">Score de Wells modifié</h4>
      <form class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells1" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells1">Cancer actif</label>
          <p class="typography-caption">Traitement actif ou &lt; 6 mois ou palliatif.</p>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells2" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells2">Paralysie/parésie ou plâtre récent des MI</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells3" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells3">Alitement &ge; 3j ou chirurgie sous AG/ARégionale dans les 12 dernières semaines</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells4" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells4">Douleur localisée sur le trajet d'une veine profonde</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells5" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells5">Augmentation de volume de tout le MI</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells6" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells6">Augmentation de volume du mollet avec 3 cm de plus que sur l'asymptomatique</label>
          <p class="typography-caption">Mesure à 10 cm sous la tubérosité tibiale.</p>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells7" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells7">Œdème prenant le godet confiné au MI symptomatique</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells8" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells8">Circulation collatérale veineuse superficielle (non variqueuse)</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells9" class="custom-control-input" value="1">
          <label class="custom-control-label" for="wells9">Antécédent de TVP documentée</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="wells10" class="custom-control-input" value="-2">
          <label class="custom-control-label" for="wells10">Alternative diagnostique au moins aussi probable que celui de TVP</label>
        </div>
      </form>
    </div>
    <div aria-labelledby="constans" class="tab-pane fade" id="constans-tab" role="tabpanel">
      <h4 class="card-title mb-lg-4">Score de Constans</h4>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="constans1" class="custom-control-input" value="1">
          <label class="custom-control-label" for="constans1">Homme</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="constans2" class="custom-control-input" value="1">
          <label class="custom-control-label" for="constans2">Paralysie ou immobilisation du MI</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="constans3" class="custom-control-input" value="1">
          <label class="custom-control-label" for="constans3">Alitement &gt; 3 jours</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="constans4" class="custom-control-input" value="1">
          <label class="custom-control-label" for="constans4">Augmentation de volume du MI</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="constans5" class="custom-control-input" value="1">
          <label class="custom-control-label" for="constans5">Douleur unilatérale du MI</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="constans6" class="custom-control-input" value="-1">
          <label class="custom-control-label" for="constans6">Autre diagnostic au moins aussi plausible</label>
        </div>
      </div>
    </div>
    <div aria-labelledby="grossesse" class="tab-pane fade" id="grossesse-tab" role="tabpanel">
      <h4 class="card-title mb-lg-4">Score LEFt pendant la grossesse</h4>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="left1" class="custom-control-input" value="1">
          <label class="custom-control-label" for="left1">Symptômes au MI gauche</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="left2" class="custom-control-input" value="1">
          <label class="custom-control-label" for="left2">Différence de circonférence du mollet &ge; 2 cm</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" id="left3" class="custom-control-input" value="1">
          <label class="custom-control-label" for="left3">Premier trimestre de grossesse</label>
        </div>
      </div>
    </div>
    <div class="alert bg-light d-flex mt-md-4">
      <div class="d-flex flex-column align-items-center">
        <p class="typography-overline text-black-secondary m-0" style="font-size:.75rem;line-height:initial">Score de Wells</p>
        <span class="font-weight-bold" id="wellsScore" style="font-size:2rem">0</span>
      </div>
      <p id="wellsText" class="lead m-auto">Répondre aux questions.</p>
    </div>
  </div>
</div>
<script>
  // Score de Wells modifié by djibe
  document.addEventListener( 'DOMContentLoaded', event => {
    const scoreElem = document.getElementById('wellsScore')
    const textElem = document.getElementById('wellsText')
    const radioElems = document.querySelectorAll('input[type="checkbox"]')
    radioElems.forEach((radioElem) => { radioElem.addEventListener('change', () => {
      wells()
    }) })
    const wells = () => {
      let score = 0
      const radioElemsChecked = document.querySelectorAll('input[type="checkbox"]:checked')
      if (radioElemsChecked.length >= 0) {
        radioElemsChecked.forEach(radioChecked => {
        score += parseInt(radioChecked.value, 10)
        scoreElem.innerHTML = score
        if (score <= 1) {
          textElem.innerHTML = 'Probabilité faible - doser les D-dimères'
        } else if (score >= 2) {
          textElem.innerHTML = 'Probabilité forte - écho-doppler veineux'
        }
        })
      }
    }
  })
</script>

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### D-dimères

Indications: **probabilité faible** ou **intermédiaire** de TVP (selon le score clinique initial).

Recours d'emblée à l'écho-doppler veineux si non accessible.

#### Interpréter les résultats de D-dimères

- D-dimères normaux
  - Ne pas réaliser d'écho-doppler
  - Ne pas poursuivre les investigations
- D-dimères anormaux  
Réaliser l'écho-doppler veineux.

{{%info%}}Après 50 ans, la borne est à 10% de l'âge {{%class%}}(700 à 70 ans){{%/class%}}.{{%/info%}}

### Écho-doppler veineux

Indications: **probabilité forte** de TVP (selon le score clinique initial) ou D-dimères élevés.

#### Interpréter les résultats de l'écho-doppler veineux

- Écho-doppler veineux complet normal ET probabilité non forte  
Pas de TVP.
- Écho-doppler veineux incomplet normal  
Écho-doppler veineux complet de contrôle à J7.
- Écho-doppler veineux anormal avec thrombus proximal/distal  
TVP certaine.

{{% /collapse %}}
{{%collapse "Traitement" %}}

Traitement de référence en l'absence de cancer connu.

### Anticoagulation

#### Indications aux anticoagulants dans la TVP

- TVP proximale
- Probabilité clinique forte de TVP
- Probabilité clinique intermédiaire de TVP et délai prévisible des résultats  > 4h
- Probabilité clinique faible de TVP et délai prévisible des résultats > 24h

#### Anticoagulation par AOD

En première intention en TVP proximale pour les 3 premiers mois de traitement.

2 AOD ont l'AMM pour la TVP:

- Apixaban 10 mg x 2/j  
CI quand Cockroft < 25 mL/min.
- Rivaroxaban 15 mg x 2/j  
CI quand Cockroft < 30 mL/min.

Pas de traitement héparinique préalable, posologie fixe sans adaptation.  
Avec éducation thérapeutique.  
Contre-indiqués en instabilité hémodynamique.

#### Anticoagulation par héparine et apparentés

- HBPM
  - Daltéparine 100 UI/kg/12h
  - Énoxaparine 100 UI/kg/12h
  - Nadroparine 85 UI/kg/12h ou 170 UI/kg/24h
  - Tinzaparine 175 UI/kg/24h
- Fondaparinux
  - < 50 kg: 5 mg/24h
  - 50 à 100 kg: 7,5 mg/24h
  - \> 100 kg: 10 mg/24h
- Voire HNF (allergie aux autres produits ou IRC sévère)

Pas d'adaptation des doses ni tests d'hémostase (sauf HNF avec l'anti-Xa).  
Poursuivre **au moins 5 jours**.  
Arrêt lorsque 2 INR consécutifs à 24h d'intervalle entre 2 et 3.

**Relais AVK** le + précoce possible, sans dose de charge (par warfarine uniquement) avec **INR cible de 2,5** (entre 2 et 3).  
Avec éducation thérapeutique et carnet de suivi.

### Autres soins

- Chaussettes de contention classe III ≥ 6 mois
- Si TVP stable: mobilisation précoce

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Sanchez O. et al. Recommandations de bonne pratique pour la prise en charge de la maladie veineuse thromboembolique chez l'adulte. Version courte? Revue des Maladies Respiratoires (2019).](https://doi.org/10.1016/j.rmr.2019.01.003)

{{% /collapse %}}
