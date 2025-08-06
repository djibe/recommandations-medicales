+++
id = "0190e8d6-137d-7374-8349-5eb0302bdabf"
title = "Tests"
prefix = "la "
description = "Title 2-22 words and description 160 characters max"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2024-03-21T15:18:28+01:00"
publishdate = "2024-12-26"
lastmod = "2025-08-05"
specialites = ["endocrinologie"]
annees = "2020"
sources = ["Society1", "Society2"]
tags = []
english = ["English word", "you can add one or delete this one"]
sctid = ""
icd10 = []
draft = true
image = false
imageSrc = ""
todo = "descr > summary > liens > photo > newsletter > flow"
datatable = false
+++

<!-- Formulaire de saisie -->
<form id="score-form">
  <!-- Sexe -->
  <div class="form-group">
    <label class="font-weight-bold text-secondary">Sexe</label>
    <div class="btn-group btn-group-toggle shadow-none" data-toggle="buttons">
      <label class="btn btn-outline-primary active">
        <input type="radio" name="gender" value="female" checked>Femme
      </label>
      <label class="btn btn-outline-primary">
        <input type="radio" name="gender" value="male">Homme
      </label>
    </div>
  </div>
    <!-- Fumeur -->
    <div class="form-group">
      <label class="font-weight-bold text-secondary">Tabagisme</label>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-outline-primary active">
          <input type="radio" name="smoker" value="0" autocomplete="off" checked>Non-fumeur
        </label>
        <label class="btn btn-outline-primary">
          <input type="radio" name="smoker" value="1" autocomplete="off">Fumeur
        </label>
        </div>
    </div>
  <!-- Âge -->
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="age">Âge (40+ ans)</label>
    <input type="number" class="form-control" id="age" name="age" min="40" max="69" required oninvalid="setCustomValidity('Âge de 40 à 69 ans')" onchange="this.setCustomValidity('')">
  </div>
  <!-- Pression Artérielle Systolique -->
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="sbp">Pression artérielle systolique (mmHg)</label>
    <input type="number" class="form-control" id="sbp" name="sbp" min="70" max="260" required oninvalid="setCustomValidity('PAS en mmHg')" onchange="this.setCustomValidity('')">
  </div>
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="cht">Cholestérol total (mmol/L)</label>
    <input type="number" class="form-control" id="cht" name="cht" min="0" step="0.1" required oninvalid="setCustomValidity('Cholestérol total en mmol/L')" onchange="this.setCustomValidity('')">
  </div>
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="hdl">Cholestérol HDL (mmol/L)</label>
    <input type="number" class="form-control" id="hdl" name="hdl" min="0" step="0.1">
  </div>
  <!-- Bouton de calcul -->
  <button type="button" id="calculate-btn" class="btn btn-primary btn-lg btn-block my-4">
    Calculer le Risque à 10 ans
  </button>
</form>
                <!-- Section des résultats -->
                <div id="result-section" class="mt-4 text-center alert border rounded-xl d-none">
                    <div id="result-display" class="alert" role="alert">
                        <p class="h1 font-weight-bold mb-1" id="risk-score"></p>
                        <p class="h5 font-weight-bold" id="risk-category"></p>
                        <hr>
                        <p class="mb-0 small" id="risk-description"></p>
                    </div>
                     <!-- Disclaimer -->
                    <p class="text-muted small mt-3">
                        <strong>Avertissement :</strong> Ce calculateur est un outil d'information et ne remplace pas un avis médical. Les résultats sont une estimation et doivent être interprétés par un professionnel de santé.
                    </p>
                </div>
                <!-- Section d'erreur -->
                <div id="error-section" class="mt-4 d-none">
                     <div class="alert alert-danger" role="alert">
                        <strong class="font-weight-bold">Erreur :</strong>
                        <span id="error-message"></span>
                    </div>
                </div>

> -- <small>[SCORE2 working group and ESC Cardiovascular risk collaboration, SCORE2 risk prediction algorithms: new models to estimate 10-year risk of cardiovascular disease in Europe, European Heart Journal, Volume 42, Issue 25, 1 July 2021, Pages 2439–2454.](https://doi.org/10.1093/eurheartj/ehab309)</small>
> Et <small>supplementary data > SCORE2 Updated Supplementary Material.docx > Supplementary methods Table 4: Illustration of risk estimation for a non-diabetic man or woman with given risk factor values</small>.

SCORE2-OP

> -- SCORE2-OP working group and ESC Cardiovascular risk collaboration, SCORE2-OP risk prediction algorithms: estimating incident cardiovascular event risk in older persons in four geographical risk regions, European Heart Journal, Volume 42, Issue 25, 1 July 2021, Pages 2455–2467, https://doi.org/10.1093/eurheartj/ehab312 
> And supplementary data > Supplementary material_20210604_v2.docx > Supplementary Methods Table 3: Example calculations for the estimated CVD event risk for an individual patient using SCORE2-OP

<script>
  // Ce script implémente le calcul du risque cardiovasculaire selon l'algorithme SCORE2
  // pour les régions à faible risque.
  // Source: SCORE2 risk prediction algorithms, ESC European Heart Journal, 2021.

document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
            const form = document.getElementById('score-form');
            const resultSection = document.getElementById('result-section');
            const resultDisplay = document.getElementById('result-display');
            const riskScoreEl = document.getElementById('risk-score');
            const riskCategoryEl = document.getElementById('risk-category');
            const riskDescriptionEl = document.getElementById('risk-description');
            const errorSection = document.getElementById('error-section');
            const errorMessageEl = document.getElementById('error-message');

            // Coefficients SCORE2 pour les pays à faible risque (ex: France)
            let coeffs = {
                female: { age: 0.4648, smoker: 0.7744, sbp: 0.3131, tchol: 0.1002, hdl: -0.2606, smoker_age: -0.1088, sbp_age: -0.0277, tchol_age: -0.0226, hdl_age: 0.0613, basesurv: 0.9776, scale1: -0.7380, scale2: 0.7019 },
                male: { age: 0.3742, smoker: 0.6012, sbp: 0.2777, tchol: 0.1458, hdl: -0.2698, smoker_age: -0.0755, sbp_age: -0.0255, tchol_age: -0.0281, hdl_age: 0.0426, basesurv: 0.9605, scale1: -0.5699, scale2: 0.7476 }
            };

            calculateBtn.addEventListener('click', calculateScore);

            function calculateScore() {
                // Masquer les anciens résultats et erreurs
                resultSection.classList.add('d-none');
                errorSection.classList.add('d-none');

                // Récupérer les valeurs du formulaire
                const gender = form.elements['gender'].value;
                const age = parseFloat(form.elements['age'].value);
                const isSmoker = parseInt(form.elements['smoker'].value);
                const sbp = parseInt(form.elements['sbp'].value);
                const tchol = parseFloat(form.elements['cht'].value);
                const hdl = parseFloat(form.elements['hdl'].value);

                // SCORE2-OP
                if (age >= 70) {
                  coeffs = {
                    female: { age: 0.0789, smoker: 0.4921, sbp: 0.0102, tchol: 0.0605, hdl: -0.3040, smoker_age: -0.0255, sbp_age: -0.0004, tchol_age: -0.0009, hdl_age: 0.0154, basesurv: 0.9776, scale1: -0.7380, scale2: 0.7019 },
                    male: { age: 0.0634, smoker: 0.3524, sbp: 0.0094, tchol: 0.0850, hdl: -0.3564, smoker_age: -0.0247, sbp_age: -0.0005, tchol_age: -0.0073, hdl_age: 0.0091, basesurv: 0.9605, scale1: -0.5699, scale2: 0.7476 }
                  };
                }

                const c = coeffs[gender];

                // Calcul du prédicteur linéaire (LP)
                const cage = (age - 60) / 5;
                const csbp = (sbp - 120) / 20;
                const ctchol = (tchol - 6).toPrecision(1);
                const cthdl = ((hdl - 1.3) / 0.5).toPrecision(1);
                console.log('cage: ' + cage)
                console.log('cage calc: ' + cage * c.age)
                console.log('csbp: ' + csbp)
                console.log('csbp calc: ' + csbp * c.sbp)
                console.log('ctchol: ' + ctchol)
                console.log('ctchol calc: ' + ctchol * c.tchol)
                console.log('cthdl: ' + cthdl)
                console.log('cthdl calc: ' + cthdl * c.hdl)
                console.log('smoker_age calc: ' + (-2 * c.smoker_age))
                console.log('sbp_age calc: ' + (-2 * c.sbp_age))
                console.log('tchol_age calc: ' + (-2 * 0.3 * c.tchol_age))
                console.log('hdl_age calc: ' + (-2 * 0.2 * c.hdl_age))
                const linearPredictor = 
                (cage * c.age) 
                + (isSmoker * c.smoker)
                + (csbp * c.sbp) 
                + (ctchol * c.tchol) 
                + (cthdl * c.hdl) 
                + (-2 * c.smoker_age) 
                + (-2 * c.sbp_age) 
                + (-2 * 0.3 * c.tchol_age) 
                + (-2 * 0.2 * c.hdl_age);
                console.log('linearPredictor: ' + linearPredictor);
                // Calcul du risque à 10 ans non calibré
                const uncalibrated_risk = 1 - c.basesurv ** Math.exp(linearPredictor);
                console.log('uncalibrated: ' + uncalibrated_risk);

                // Calibration pays à bas risque
                const calibrated_10y_risk = 1 - Math.exp(
                  -Math.exp(
                    c.scale1 + c.scale2 * Math.log(
                      -Math.log(1 - uncalibrated_risk)
                    )
                  )
                );
                console.log('calibrated: ' + calibrated_10y_risk);

                // Conversion en pourcentage
                const riskPercent = ( calibrated_10y_risk * 100).toFixed(1);

                displayResult(riskPercent, age);
            }

            function displayResult(risk, age) {
                let category = '';
                let alertClass = '';

                // Les seuils de risque varient avec l'âge selon les recommandations de l'ESC
                let thresholds;
                if (age < 50) {
                    thresholds = { low: 2.5, moderate: 7.5 };
                } else if (age >= 50 && age <= 69) {
                    thresholds = { low: 5, moderate: 10 };
                } else {
                    thresholds = { low: 7.5, moderate: 15 };
                }

                if (risk < thresholds.low) {
                    category = 'Risque faible à modéré <br> LDL cible &lt; 1 g/L';
                    alertClass = 'alert-success';
                } else if (risk < thresholds.moderate) {
                    category = 'Risque élevé <p> Obtenir une réduction du LDL ≥ 50% et une cible &lt; 0,7 g/L </p>';
                    alertClass = 'alert-warning';
                } else {
                    category = 'Risque très élevé <br> Obtenir une réduction du LDL ≥ 50% et une cible &lt; 0,55 g/L quel que soit l’âge';
                    alertClass = 'alert-danger';
                }

                riskScoreEl.textContent = `${Intl.NumberFormat("fr-FR").format(risk)} %`;
                riskCategoryEl.innerHTML = category;
                riskDescriptionEl.textContent = `Risque de développer une maladie cardiovasculaire fatale ou non fatale dans les 10 prochaines années.`;
                // Mise à jour des classes de l'alerte
                resultDisplay.className = 'alert'; // Réinitialiser les classes
                resultDisplay.classList.add(alertClass);

                resultSection.classList.remove('d-none');
            }

            function showError(message) {
                errorMessageEl.textContent = message;
                errorSection.classList.remove('d-none');
            }
        });
    </script>

## Dicom viewer {.mt-5}

<github.com/ivmartel/dwv> and <https://ivmartel.github.io/dwv/demo/stable/viewer.html>

<script type="importmap">
  {
    "imports": {
      "dwv": "https://cdn.jsdelivr.net/npm/dwv@0.35.1/dist/dwv.min.js",
      "konva": "https://cdn.jsdelivr.net/npm/konva@9.3/konva.min.js",
      "jszip": "https://cdn.jsdelivr.net/npm/jszip@3.10/dist/jszip.min.js",
      "magic-wand-tool": "https://cdn.jsdelivr.net/npm/magic-wand-tool@1.1.7/dist/magic-wand.min.js"
    }
  }
</script>
<script type="module" src="https://cdn.jsdelivr.net/npm/dwv-simplistic@0.10.0/dist/dwvsimplistic.min.js"></script>

<dwv-simple showlegend loadfromwindowlocation></dwv-simple>

## Plan action asthme {.mt-5}

<!--<div class="card card-body bg-primary-light shadow-none my-2 flex-row justify-content-between">
  <div>
    <p class="typography-overline">Âge</p>
    <input type="radio" name="asthme-age" id="enfant" class="d-input-none" required>
    <label for="enfant" class="chip chip-action chip-choice chip-sm">6-11</label>
    <input type="radio" name="asthme-age" id="ado" class="d-input-none">
    <label for="ado" class="chip chip-action chip-choice chip-sm">Adolescent</label>
    <input type="radio" name="asthme-age" id="adulte" class="d-input-none" checked>
    <label for="adulte" class="chip chip-action chip-choice chip-sm">Adulte</label>
  </div>
  <div>
    <p class="typography-overline">Stade GINA</p>
    <input type="radio" name="asthme-stade" id="niveau1" class="d-input-none" checked required>
    <label for="niveau1" class="chip chip-action chip-choice chip-sm" data-toggle="tooltip" title="Symptômes &lt; 2/mois">1</label>
    <input type="radio" name="asthme-stade" id="niveau2" class="d-input-none">
    <label for="niveau2" class="chip chip-action chip-choice chip-sm" data-toggle="tooltip" title="Contrôlé par CSI faible dose">2</label>
    <input type="radio" name="asthme-stade" id="niveau3" class="d-input-none">
    <label for="niveau3" class="chip chip-action chip-choice chip-sm" data-toggle="tooltip" title="Contrôlé par CSI+LABA faible ou CSI moyen">3</label>
    <input type="radio" name="asthme-stade" id="niveau4" class="d-input-none">
    <label for="niveau4" class="chip chip-action chip-choice chip-sm">4</label>
    <input type="radio" name="asthme-stade" id="niveau5" class="d-input-none">
    <label for="niveau5" class="chip chip-action chip-choice chip-sm">5</label>
  </div>
</div>
<div class="card card-body my-2">
  <h4 class="card-title">Traitement de fond</h4>
  <p>CSI/formotérol 200/6 à la demande</p>
</div>
<div class="card card-body my-2">
  <h4 class="card-title">Exacerbation d'asthme</h4>
  <p class="card-subtitle">Utilisation fréquente du traitement de secours, réveil avec asthme, activités habituelles impossibles. Augmentation pendant 1-2 semaines.</p>
  <p>CSI/formotérol à la demande</p>
</div>
<div class="card card-body my-2">
  <h4 class="card-title">Exacerbation sévère</h4>
  <p class="card-subtitle">DEP &lt; 60% ou <strong>absence de réponse à 48 heures</strong></p>
  <p>Prednisolone <span id="asthme-cso">40-50 mg/j pendant 5-7 jours</span></p>
  <p>Consultation médicale urgente</p>
</div>
<script>
  document.addEventListener( 'DOMContentLoaded', event => {
    const age = document.getElementByTagName('asthme-age')
    const gina = document.getElementByTagName('asthme-stade');
    [...document.querySelectorAll('#score-act input[type=\"radio\"]')].forEach((elem) => { elem.addEventListener('click', () => calcAct() ) })
    const calcAct = () => {
      let score = 0
      const elemsChecked = document.querySelectorAll('#score-act input[type=\"radio\"]:checked')
        elemsChecked.forEach(elemChecked => {
        score += parseInt(elemChecked.value, 10)
        if (elemsChecked.length === 5) {
          scoreAct.innerHTML = score
          if (score >= 20) {
            textAct.innerHTML = "Asthme contrôlé"
          }
          else if (score < 20) {
            textAct.innerHTML = "Asthme non contrôlé<br><span class=\"text-muted\">Intensifier le traitement (augmenter le CSI ± LABA)</span>"
          }
        } else {
          textAct.innerHTML = "Veuillez répondre à toutes les questions"
        }
      })
    }
</>-->
