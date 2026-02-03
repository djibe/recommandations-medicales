+++
id = "0190e8d6-137d-7374-8349-5eb0302bdabf"
title = "Tests"
prefix = "la "
description = "Title 2-22 words and description 160 characters max"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2024-03-21T15:18:28+01:00"
publishdate = "2025-10-13"
lastmod = "2025-10-13"
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
chart = true
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
                    category = 'Risque élevé <p> Obtenir une réduction du LDL ≥ 50 % et une cible &lt; 0,7 g/L </p>';
                    alertClass = 'alert-warning';
                } else {
                    category = 'Risque très élevé <br> Obtenir une réduction du LDL ≥ 50 % et une cible &lt; 0,55 g/L quel que soit l’âge';
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

## Plan action asthme {.mt-5}

<div class="form-group text-center my-4">
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="moins12" value="moins12" name="ageSelection" class="custom-control-input" checked>
  <label class="custom-control-label" for="moins12">Moins de 12 ans</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="plus12" value="plus12" name="ageSelection" class="custom-control-input">
  <label class="custom-control-label" for="plus12">12 ans et +</label>
</div>
</div>
<!-- Section pour -12 ans (initialement cachée) -->
                <div id="sectionMoins12" class="mt-4">
                    <h4 class="text-info">Plan d'action de la crise d'asthme de l'enfant (6 - 12 ans)</h4>
                    <!-- Form -->
                    <div class="card card-body border shadow-none my-3" style="">
                    <div class="d-flex">
                      <div class="form-group floating-label textfield-box form-ripple mr-2" style="flex: 1">
                      <label for="poidsInput"><strong>Poids de l’enfant (kg)</strong></label>
                      <input type="number" class="form-control" id="poidsInput" min="4" max="160" required>
                      </div>
                      <!--<div class="">
                          <p id="resultatDose" class="mt-2 p-3 bg-light rounded">Poids manquant...</p>
                      </div>-->
                      </div>
                      <small class="form-text text-muted">
                        1 bouffée par 2 kg de poids (minimum 4 et maximum 15 bouffées).
                      </small>
                    </div>

{{%warning%}}
À tout moment de la crise, si aggravation rapide ou gêne respiratoire importante: CONTACTER LE SAMU (Numéro 15).

Les signes graves sont une respiration irrégulière, une difficulté à parler, un pourtour des lèvres bleu, un malaise.
{{%/warning%}}

En cas de gêne respiratoire, de toux ou de sifflements, faire inhaler dès le début des symptômes:

> **Ventoline** ==**<span class="text-dose">X</span> bouffées** dans la chambre d'inhalation, toutes les 10-15 minutes==.
{.my-4}

- Chaque bouffée est suivie de 5 respirations dans la chambre d'inhalation.
- Rester avec l'enfant.
- Surveiller l'apparition des signes de gravité (encadré ci-dessus).
- Aucun des traitements n'est dangereux
{.text-black-secondary}

<div class="alert border my-4">

**En l'absence d'amélioration à 1 heure:**

- Donner la prednisolone: <mark><strong><span class="text-predni-dose">X</span> mg</strong></mark> à diluer dans un peu d'eau
- **Consultation médicale** en urgence
- Poursuivre l'inhalateur à la même dose toutes les 10-15 minutes en attendant la consultation

</div>

**Si l'état respiratoire se normalise**, continuer un traitement d'entretien par:

- Ventoline avec chambre d'inhalation: **4 bouffées** matin, midi, goûter et soir pendant 7 jours
- Le traitement habituel
- Réévaluation par le médecin

> -- [D'après Rivière S, Peta H 2025. Validation AFPA, GFRUP, GPGse, SP2A](https://pap-pediatrie.fr/pap-detail/mlf9)

</div>
<!-- Section pour 12 ans et + (initialement cachée) -->
<div id="sectionPlus12" class="mt-4" style="display: none;">
  
### Plan d'action de l'asthme chez l'adulte (à partir de 12 ans)

<div class="alert border" style="border-color: green!important">
  <div class="d-flex flex-wrap">
  <div class="mb-3">

#### Zone 1: mon asthme est bien contrôlé

- Respiration normale
- Pas de toux ni de sifflement
- Je dors bien
- Je peux faire toutes mes activités habituelles

  </div>
  <div>

Je prends chaque jour mon traitement habituel:

<div class="form-group">
  <div class="floating-label textfield-box">
    <label for="ttt-fond-adulte">Traitement habituel</label>
    <select class="form-control" id="ttt-fond-adulte">
      <option label=" "></option>
      <optgroup label="Budésonide">
        <option>Budésonide formotérol Forspiro</option>
        <option>Duoresp Spiromax</option>
        <option>Symbicort Rapihaler (spray)</option>
        <option>Symbicort Turbuhaler</option>
      </optgroup>
      <optgroup label="Béclométasone">
        <option>Béclométasone/formotérol (spray)</option>
        <option>Formodual ou Innovair (spray)</option>
        <option>Formodual ou Innovair Nexthaler</option>
      </optgroup>
    </select>
  </div>
</div>

  </div>
  </div>
</div>
<div class="alert border d-flex flex-wrap" style="border-color: green">
  <div class="mb-3">

#### Zone 2: J'ai des symptômes qui peuvent annoncer une crise

- Toux occasionnelle
- Nez qui coule
- Éternuements
- Picotement dans la gorge

  </div>
  <div>

Je prends chaque jour mon traitement habituel à dose intensifiée:

Je reprends TODO:

  </div>
</div>

{{%warning%}}
À tout moment de la crise, si aggravation rapide ou gêne respiratoire importante: CONTACTER LE SAMU (Numéro 15).

Les signes graves sont une respiration irrégulière, une difficulté à parler, un pourtour des lèvres bleu, un malaise.
{{%/warning%}}

En cas de gêne respiratoire, de toux ou de sifflements, inhaler dès le début des symptômes:

> ==**1 à 2 bouffées du traitement usuel**== **toutes les 20 minutes**  
> {{%class%}}Habituellement formotérol/budésonide.{{%/class%}}

À défaut, utiliser de la terbutaline ou du salbutamol. Ex: **Ventilastin Novolizer**, 1 à 2 bouffées toutes les 20 minutes.

<div class="alert border my-4">

**En l'absence d'amélioration à 1 heure:**

- Prendre la prednisolone: ==**40-50 mg**== diluée dans un peu d'eau
- **Consultation médicale** en urgence
- Poursuivre l'inhalateur à la même dose toutes les 20 minutes en attendant la consultation

</div>

**Si l'état respiratoire se normalise:** poursuivre l'inhalateur plusieurs fois par jour pendant 7 jours, et la prednisolone 5 à 7 jours.

</div>
</div>
<script>
        // Récupération des éléments du DOM
        const radioMoins12 = document.getElementById('moins12');
        const radioPlus12 = document.getElementById('plus12');
        const sectionMoins12 = document.getElementById('sectionMoins12');
        const sectionPlus12 = document.getElementById('sectionPlus12');
        const poidsInput = document.getElementById('poidsInput');
        //const resultatDose = document.getElementById('resultatDose');
        const textsDose = document.querySelectorAll('.text-dose');
        const textsPredniDose = document.querySelectorAll('.text-predni-dose');
        // Ajout des écouteurs d'événements sur les boutons radio
        radioMoins12.addEventListener('change', function() {
            if (this.checked) {
                sectionMoins12.style.display = 'block';
                sectionPlus12.style.display = 'none';
                poidsInput.value = ''; // Réinitialiser le champ poids
                //resultatDose.textContent = 'En attente du poids...';
            }
        });
        radioPlus12.addEventListener('change', function() {
            if (this.checked) {
                sectionMoins12.style.display = 'none';
                sectionPlus12.style.display = 'block';
            }
        });
        // Ajout d'un écouteur d'événement sur le champ de saisie du poids
        poidsInput.addEventListener('input', function() {
            const poids = parseFloat(this.value);
            if (poids > 0) {
                // Calcul de la dose : 1 bouffée / 2kg
                let doseInhalateur = Math.round(poids / 2);
                // Minmax doses
                doseInhalateur = Math.max(4, doseInhalateur);
                doseInhalateur = Math.min(15, doseInhalateur);
                //resultatDose.textContent = `${doseInhalateur} bouffées.`;
                textsDose.forEach(span => { span.textContent = doseInhalateur });
                // Appliquer le maximum de 40 mg
                let doseMinPrednisolone = Math.round((poids * 1) / 5) * 5;
                let doseMaxPrednisolone = Math.round((poids * 2) / 5) * 5;
                doseMaxPrednisolone = Math.min(40, doseMaxPrednisolone);
                // Assurer que la dose min n'est pas supérieure à la dose max
                doseMinPrednisolone = Math.min(doseMinPrednisolone, doseMaxPrednisolone);
                //resultatPrednisolone.textContent = `${doseMinPrednisolone} mg et ${doseMaxPrednisolone} mg.`;
                textsPredniDose.forEach(span => { span.textContent = doseMaxPrednisolone });
            } else {
                //resultatDose.textContent = 'Veuillez entrer un poids valide.';
            }
        });
    </script>
