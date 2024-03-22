+++
title = "Espace de tests"
titleSeo = "In case of long title or delete whole line"
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
tags = ["tag 1", "tag 2"]
anglais = ["English word", "you can add one or delete this one"]
sctid = "https://browser.ihtsdotools.org/?perspective=full&conceptId1=44054006&edition=MAIN/2022-10-31&release=&languages=en"
icd10 = "https://prod-mapping.ihtsdotools.org/#/"
draft = true
image = false
imageSrc = ""
todo = "descr > summary > liens > photo > newsletter > flow"
+++

{{%article-summary%}}



{{%/article-summary%}}

<div class="card-body card-util rounded-lg border my-5" id="form-gfr">
  <div class="d-block d-lg-flex form-gfr">
    <div class="form-group floating-label textfield-box form-ripple mr-3">
      <label for="gfr-age">Âge</label>
      <input class="form-control" id="gfr-age" type="number" min="16" max="120">
    </div>
    <div class="form-group floating-label textfield-box form-ripple mr-3">
      <label for="gfr-creatinine">Créatininémie (mg/L)</label>
      <input class="form-control" id="gfr-creatinine" type="number" min="0" max="50">
    </div>
  </div>
  <p class="typography-overline mb-0">Sexe</p>
    <input type="radio" name="gfr-sex" id="gfr-sex-m" class="d-input-none" required>
    <label for="gfr-sex-m" class="chip chip-action chip-choice">Homme</label>
    <input type="radio" name="gfr-sex" id="gfr-sex-f" class="d-input-none">
    <label for="gfr-sex-f" class="chip chip-action chip-choice">Femme</label>
    <input type="radio" name="gfr-ethnic" id="gfr-ethnic-other" class="d-input-none" checked required>
    <label for="gfr-ethnic-other" class="chip chip-action chip-choice">Non africain</label>
    <input type="radio" name="gfr-ethnic" id="gfr-ethnic-african" class="d-input-none">
    <label for="gfr-ethnic-african" class="chip chip-action chip-choice">Africain/américain</label>
    <div>
      <label for="input-gfr">DFG CKD-EPI</label>
      <input class="form-control" id="input-gfr" type="text" placeholder="Préciser les valeurs" readonly>
    </div>
  </div>
</div>
<script type="module" async>
   // Outil de calcul de la by djibe
  window.addEventListener( 'load', () => {
    const age = document.getElementById('gfr-age');
    const creatinine = document.getElementById('gfr-creatinine');
    const man = document.getElementById('gfr-sex-m');
    const gfr = document.getElementById('input-gfr');
    [age, creatinine].forEach(elem => elem.addEventListener('input', () => { calcGFR() }));
    [...document.querySelectorAll('#form-gfr input[type="radio"]')].forEach(elem => elem.addEventListener('change', () => { calcGFR() }));
    const calcGFR = () => {
    if (age.value > 0 && creatinine.value > 0) {
      if (!man.checked) {
        gfr.value = 186 * Math.pow((creatinine.value * 0.0113), -1.154) * Math.pow(age.value, -0.203) * 0.95
      }
    }
  };
  });
</script>

{{%collapse "Définition" %}}



{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

### Examen clinique

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}


{{% /collapse %}}
{{%collapse "Traitement" %}}


{{% /collapse %}}
{{%sources%}}

- [Source 1](URL)

### Bibliographie en attente

- Collège
- Prescrire
- Cochrane
- Minerva
- Cismef

{{%/sources%}}

≤≥±®æœŒÈ²³ÂSpO<sub>2</sub>–
[External link](https://discourse.gohugo.io/ "{rel='nofollow'}")
