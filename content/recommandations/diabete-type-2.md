+++
title = "Diabète de type 2"
prefix = "le "
shortname = "DT2"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2020-04-27T17:23:12+02:00"
publishdate = "2020-04-27"
lastmod = "2021-07-05"
specialites = ["endocrinologie"]
annees = "2019"
sources = ["HAS"]
tags = ["diabete", "HTA", "insuline", "retinopathie", "nephropathie",  "risque cardiovasculaire", "neuropathie", "obesite", "SAOS", "vaccin"]
anglais = ["Diabetes mellitus type 2"]
sctid = "44054006"
image = true
imageSrc = "Illustration par vectorjuice / Freepik"
todo = "rythme depistage, https://assurance-maladie.ameli.fr/sites/default/files/2020-09-22-cp-signature-avenant-4-pedicures-podologues.pdf"
+++

{{%article-summary%}}

- Sevrage tabagique obligatoire
- Points vitaux obligatoires (voir plus bas)
- Le suivi du diabète de type 2 doit être rigoureux et multidimensionnel, utiliser cet assistant du suivi adapté [le Suivi du diabète par Diabeclic](https://www.diabeclic.com/suivi-du-diabete)

{{%/article-summary%}}

L'intégralité du suivi préconisé pour la personne vivant avec un diabète de type 2 est visualisable sur [Diabeclic - Suivi du diabète](https://www.diabeclic.com/suivi-du-diabete), sous forme d'un tableau de soins adapté au patient (avec bibliographie et imprimable).

En effet, **il est inenvisageable de tenter une synthèse pour la prise en soins du diabète** tant elle est vaste et pluridisciplinaire.

{{%collapse "Les points vitaux du diabète type 2" "show" %}}

- Toute personne avec un diabète type 2 est à {{< modal-btn modal-risque-cardiovasculaire-diabete >}}haut voire très haut risque cardiovasculaire{{< /modal-btn >}}
- Arrêt du tabac
- Hypertension artérielle  
Objectif tensionnel **< 130/80** mmHg (*ESC 2019*).
- LDL cible (*ESC 2019*)  
  - {{< modal-btn modal-statine-intensite >}}&lt; 0,7 g/L{{< /modal-btn >}}
  - {{< modal-btn modal-statine-intensite >}}&lt; 0,55 g/L{{< /modal-btn >}} si {{< modal-btn modal-risque-cardiovasculaire-diabete >}}maladie cardiovasculaire, > 20 ans d'évolution ou ≥ 3 autres FRCV{{< /modal-btn >}}
- Activité physique  
**Au moins 150 minutes** (2h30) d'activité physique par semaine (modérée à intense).
- Cible d'HbA1c  
Globalement **7%** (sauf complications avancées)(*SFD 2019*).
- En cas de surpoids  
Négocier une perte de poids (5-10%).
- Régimé méditerranéen

{{% /collapse %}}
{{%collapse "Escalade thérapeutique" "show" %}}

*Version préliminaire.*

Les choix préférentiels sont entourés ou en couleur par défaut.

---

<form class="border p-4 mb-4">
<fieldset class="m-0">
<legend>Comorbidités</legend>
  <input type="checkbox" id="obese" class="d-none">
  <label for="obese" class="chip chip-action chip-filter">Obésité</label>
  <input type="checkbox" id="mcv" class="d-none" disabled>
  <label for="mcv" class="chip chip-action chip-filter" data-toggle="tooltip" title="Maladie cardiovasculaire">MCV</label>
  <input type="checkbox" id="irc" class="d-none" disabled>
  <label for="irc" class="chip chip-action chip-filter" data-toggle="tooltip" title="Insuffisance rénale chronique">IRC</label>
  <input type="checkbox" id="ic" class="d-none" disabled>
  <label for="ic" class="chip chip-action chip-filter" data-toggle="tooltip" title="Insuffisance cardiaque">Insuf. cardiaque</label>
</fieldset>
</form>
<h3 class="typography-overline">1<sup>re</sup> intention</h3>
<button class="chip chip-action mb-2" type="button" data-toggle="modal" data-target="#modal-metformine">Metformine</button>
<p class="text-warning my-2">La metformine doit toujours être maintenue.</p>
<!-- 2e intention -->
<h3 class="typography-overline mt-3">Bithérapie - Ajouter au choix</h3>
<div class="mb-2 choix-standard">
  <button class="chip chip-action flex-grow-1 border border-primary" type="button" data-toggle="modal" data-target="#modal-idpp4">iDDP4</button>
  <button class="chip chip-action flex-grow-1" type="button" data-toggle="modal" data-target="#modal-su">SU</button>
</div>
<div class="mb-2 choix-obese">
  <button class="chip chip-action flex-grow-1 border border-primary" type="button">iSGLT2</button>
  <button class="chip chip-action flex-grow-1" type="button">GLP-1 RA</button>
</div>
<div class="mb-2 choix-ic">
  <button class="chip chip-action" type="button">iSGLT2</button>
</div>
<!-- 3e intention -->
<h3 class="typography-overline mt-3">Trithérapie - Selon les traitements essayés</h3>
<div class="mb-2 choix-standard">
  <div class="accordion mb-5" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h4 class="card-title">Après iDPP4</h4>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action text-info" data-toggle="modal" data-target="#modal-su">Ajouter un SU</li>
          <li class="list-group-item list-group-item-action text-info">Ajouter un iSGLT2</li>
          <li class="list-group-item list-group-item-action text-info">Substituer par un GLP-1 RA</li>
          <li class="list-group-item list-group-item-action">Substituer par une insuline basale</li>
           <li class="list-group-divider" role="separator"></li>
          <li class="list-group-item font-weight-bold">Si iDD4 inefficace</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-su">Substituer par un SU</li>
          <li class="list-group-item list-group-item-action">Substituer par un iSGLT2</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h4 class="card-title">Après sulfamide</h4>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
         <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action text-info" data-toggle="modal" data-target="#modal-idpp4">Ajouter un iDPP4</li>
          <li class="list-group-item list-group-item-action text-info">Ajouter un iSGLT2</li>
          <li class="list-group-item list-group-item-action text-info">Ajouter un GLP-1 RA</li>
          <li class="list-group-item list-group-item-action">Substituer par une insuline basale</li>
           <li class="list-group-divider" role="separator"></li>
          <li class="list-group-item font-weight-bold">SU avec hypoglycémies sévères/répétées</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-idpp4">Substituer par un iDPP4</li>
          <li class="list-group-item list-group-item-action">Substituer par un iSGLT2</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <h4 class="card-title">Après iSGLT2</h4>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action text-info" data-toggle="modal" data-target="#modal-idpp4">Ajouter un iDPP4</li>
          <li class="list-group-item list-group-item-action text-info" data-toggle="modal" data-target="#modal-su">Ajouter un SU</li>
          <li class="list-group-item list-group-item-action text-info">Ajouter un GLP-1 RA</li>
          <li class="list-group-item list-group-item-action">Ajouter une insuline basale</li>
           <li class="list-group-divider" role="separator"></li>
          <li class="list-group-item font-weight-bold">iSGLT2 inefficace</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-su">Substituer par un SU</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-iddp4">Substituer par un iDPP4</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <h4 class="card-title">Après GLP-1 RA</h4>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action text-info">Ajouter une basale</li>
          <li class="list-group-item list-group-item-action text-info" data-toggle="modal" data-target="#modal-su">Ajouter un SU</li>
          <li class="list-group-item list-group-item-action text-info">Ajouter un iSGLT2</li>
           <li class="list-group-divider" role="separator"></li>
          <li class="list-group-item font-weight-bold">GLP-1 RA inefficace</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-su">Substituer par un SU</li>
          <li class="list-group-item list-group-item-action">Substituer par un iSGLT2</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
<script>
window.onload = () => {
  $(function () {
    const allElems = $('[class*="choix-"]')
    $('[class*="choix-"]:not(.choix-standard)').addClass('d-none')
    $(':checkbox').on('change', function() {
      if ( $(':checkbox:checked').length === 0 ){
        allElems.addClass('d-none')
        $(`.choix-standard`).removeClass('d-none')
      }
      else if ($(this).is(':checked')){
        allElems.addClass('d-none')
        $(`.choix-${this.id}`).removeClass('d-none')
      }
    });
  });
}
</script>

{{% /collapse %}}
{{%collapse "Sources" %}}

- {{< references/esc-dyslipidemie >}}
- {{< references/sfd-dt2 >}}

{{% /collapse %}}
{{% modal title="Diabète et RCV selon ESC 2019" id="modal-risque-cardiovasculaire-diabete"%}}

{{< clinique/risque-cardiovasculaire-diabete >}}

{{% /modal %}}
{{% modal title="Statines et réduction du LDL" id="modal-statine-intensite"%}}

{{< traitements/statine-intensite >}}

{{% /modal %}}
{{% modal title="Metformine" id="modal-metformine"%}}

{{< traitements/metformine >}}

{{% /modal %}}
{{% modal title="Sulfamides hypoglycémiants" id="modal-su"%}}

{{< traitements/su >}}

{{% /modal %}}
{{% modal title="Gliptines" id="modal-idpp4"%}}

{{< traitements/idpp4 >}}

{{% /modal %}}
