+++
title = "Espace de tests"
prefix = "la "
description = "Title 2-22 words and description 160 characters max"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2024-03-21T15:18:28+01:00"
publishdate = "2024-07-15"
lastmod = "2024-07-15"
specialites = ["endocrinologie"]
annees = "2020"
sources = ["Society1", "Society2"]
tags = []
english = ["English word", "you can add one or delete this one"]
sctid = ""
icd10 = ""
draft = true
image = false
imageSrc = ""
todo = "descr > summary > liens > photo > newsletter > flow"
datatable = false
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

## Plan action asthme

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
</script>-->
