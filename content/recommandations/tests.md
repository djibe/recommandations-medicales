+++
title = "Espace de tests"
prefix = "la "
description = "Title 2-22 words and description 160 characters max"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2024-03-21T15:18:28+01:00"
publishdate = "2024-03-21"
lastmod = "2024-03-21"
specialites = ["endocrinologie"]
annees = "2020"
sources = ["Society1", "Society2"]
tags = []
anglais = ["English word", "you can add one or delete this one"]
sctid = "https://browser.ihtsdotools.org/?perspective=full&conceptId1=44054006&edition=MAIN/2022-10-31&release=&languages=en"
icd10 = "https://prod-mapping.ihtsdotools.org/#/"
draft = true
image = false
imageSrc = ""
todo = "descr > summary > liens > photo > newsletter > flow"
+++

## J'ai oublié ma pilule

<div class="card card-body shadow-none my-2 flex-row justify-content-between bg-primary-light">
  <div>
    <p class="typography-overline">Pilule</p>
    <input type="radio" name="pill-choice" id="pill-e2" class="d-input-none" required data-toggle="collapse" href="#collapseExample">
    <label for="pill-e2" class="chip chip-action chip-choice chip-sm">Œstro-progestative</label>
    <input type="radio" name="pill-choice" id="pill-prog" class="d-input-none">
    <label for="pill-prog" class="chip chip-action chip-choice chip-sm">Progestérone</label>
    <input type="radio" name="pill-choice" id="pill-microval" class="d-input-none">
    <label for="pill-microval" class="chip chip-action chip-choice chip-sm">Microval</label>
  </div>
</div>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>

## CKD-EPI {.mt-5}

<div class="card-body card-util rounded-lg border my-5" id="form-gfr">
  <div class="d-block d-lg-flex form-gfr">
    <div class="form-group floating-label textfield-box form-ripple mr-3">
      <label for="gfr-age">Âge</label>
      <input class="form-control" id="gfr-age" type="number" min="16" max="120">
    </div>
    <div class="form-group floating-label textfield-box form-ripple mr-3">
      <label for="gfr-creatinine">Créatininémie (µmol/L)</label>
      <input class="form-control" id="gfr-creatinine" type="number" min="10" max="500">
    </div>
  </div>
  <p class="typography-overline mb-0">Sexe</p>
    <input type="radio" name="gfr-sex" id="gfr-sex-m" value="man" class="d-input-none" checked required>
    <label for="gfr-sex-m" class="chip chip-action chip-choice">Homme</label>
    <input type="radio" name="gfr-sex" id="gfr-sex-f" value="woman" class="d-input-none">
    <label for="gfr-sex-f" class="chip chip-action chip-choice">Femme</label>
    <input type="radio" name="gfr-ethnic" id="gfr-ethnic-other" value="other" class="d-input-none" checked required>
    <label for="gfr-ethnic-other" class="chip chip-action chip-choice">Non africain</label>
    <input type="radio" name="gfr-ethnic" id="gfr-ethnic-african" value="african" class="d-input-none">
    <label for="gfr-ethnic-african" class="chip chip-action chip-choice">Africain/américain</label>
    <div>
      <label for="input-gfr">DFG CKD-EPI</label>
      <input class="form-control" id="input-gfr" type="text" placeholder="Préciser les valeurs" readonly>
    </div>
  </div>
</div>
<script type="module" async>
   // Outil de calcul du DFG CKD-EPI by djibe
  window.addEventListener( 'load', () => {
    const age = document.getElementById('gfr-age');
    const creatinine = document.getElementById('gfr-creatinine');
    const gfrEl = document.getElementById('input-gfr');
    [age, creatinine].forEach(elem => elem.addEventListener('input', () => calcGFR() ));
    [...document.querySelectorAll('#form-gfr input[type="radio"]')].forEach(elem => elem.addEventListener('change', () => calcGFR() ));
    const calcGFR = () => {
      const sex = document.querySelector('input[name="gfr-sex"]:checked');
      const ethnic = document.querySelector('input[name="gfr-ethnic"]:checked');
      const ageVal = parseInt(age.value);
      const creatinineVal = parseFloat(creatinine.value);
      var alpha, beta;
      if (sex.value === "man") {
        alpha = 141;
        beta = 0.9;
      } else {
        alpha = 144;
        beta = 0.7;
      }
      if (ageVal > 0 && creatinineVal > 0) {
        let gfr = 141 * Math.min(Math.pow(creatinineVal / beta, -alpha), 1) * Math.pow(0.993, ageVal);
        console.log(gfr)
        // Adjust for African/American ethnicity
        if (ethnic.value === "african") {
          gfr *= 1.159;
        }
        // Update the input field with the calculated GFR
        gfrEl.value = gfr.toFixed(2);
      }
    };
    }
  );
</script>
