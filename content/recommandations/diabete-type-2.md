+++
title = "Diabète de type 2"
prefix = "le "
shortname = "DT2"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2020-04-27T17:23:12+02:00"
publishdate = "2020-04-27"
lastmod = "2022-01-27"
specialites = ["endocrinologie"]
annees = "2021"
sources = ["SFD", "ESC", "EASD", "ADA", "HAS"]
tags = ["bariatrique", "diabete", "HTA", "insuline", "retinopathie", "nephropathie",  "risque cardiovasculaire", "neuropathie", "obesite", "SAS", "vaccin"]
anglais = ["Diabetes mellitus type 2"]
sctid = "44054006"
image = true
imageSrc = "Illustration du diabète par vectorjuice / Freepik"
todo = "glinides, IAG, https://assurance-maladie.ameli.fr/sites/default/files/2020-09-22-cp-signature-avenant-4-pedicures-podologues.pdf | IRC: risque hypo SU/insuline, adapt poso | IRC sévère: insu/répa/lira/séma/dula/vilda | IRC terminale: insu/répa/vilda | IC: met > iSGLT2 (voire lira/séma/dula sauf ICFEd ou sita) | MCV: met > GLP1/iSGLT2 (maintien si insuline), sitagliptine si recours | GS: cible 6,5%, < 0.95 jeun et 1,2 H2. Post-IDM + diabète: simva + ezetimibe"
+++

{{%article-summary%}}

- [Findrisc: risque de diabète à 10 ans](https://www.diabeclic.com/findrisc)
- Sevrage tabagique obligatoire
- Points vitaux obligatoires (voir plus bas)
- Traitements: {{< modal-btn modal-metformine >}}metformine{{< /modal-btn >}}, {{< modal-btn modal-idpp4 >}}iDPP4{{< /modal-btn >}}, {{< modal-btn modal-glp1ra >}}GLP-1{{< /modal-btn >}}, {{< modal-btn modal-isglt2 >}}iSGLT2{{< /modal-btn >}}, {{< modal-btn modal-su >}}sulfamides{{< /modal-btn >}}

{{%/article-summary%}}

Le suivi préconisé pour la personne vivant avec un diabète de type 2 est visualisable sur [Diabeclic - Suivi du diabète](https://www.diabeclic.com/suivi-du-diabete), sous forme d'un tableau de soins adapté au patient (avec bibliographie et imprimable).

{{%collapse "Définitions"%}}

Diabète
: Hyperglycémie chronique dont le diagnostic est biologique (définitions *ADA 2019*):
    - 2 glycémies à jeun ≥ 1,26 g/L
    - ou HbA1c ≥ 6,5%
    - ou HGPO H2 ≥ 2 g/L
    - Symptômes et glycémie ≥ 2 g/L
: L'atteinte coronaire est plus étendue, sévère et diffuse. 6-35% ont une ischémie myocardique sans angor et 50% des infarctus du myocarde sont **silencieux** (*SFD 2021 CAD*). Responsable majeur est le **LDL**.

Hyperglycémie modérée à jeun (HGMAJ)
: Ou *prédiabète*, correspond au stade précurseur du diabète.  
La glycémie à jeun est mesurée de 1 à 1,25 g/L (HGPO H2 < 1,4 g/L).
: La perte d'1 kg réduit de 43% le risque de DT2 (*ESC 2019 diabetes*).

Rémission du diabète
: Définitions *EASD 2021*:
    - Diabète sous régime seul depuis ≥ 3 mois avec HbA1c < 6,5% (48 mmol/mol)
    - HbA1c < 6,5% à au moins 3 mois de la chirurgie bariatrique et de l'arrêt de tout traitement
    - HbA1c < 6,5% à au moins 6 mois du changement de mode de vie et au moins 3 mois de l'arrêt de tout traitement
: Lorsque la mesure de l'HbA1c n'est pas fiable, recours à la glycémie à jeun < 1,26 g/L ou estimation par automesure (la glycémie moyenne doit être < 6,5% d'équivalent HbA1c).
: Le *dépistage des complications* doit être poursuivi, avec la surveillance de l'HbA1c tous les 3-12 mois.

### Conversion des unités du diabète

<div class="form-group">
  <label for="hba1cInput">HbA<sub>1c</sub> (%, dit NGSP)</label>
  <input type="number" class="form-alternative" id="hba1cInput" step="0.1" value="7" min="4" max="16" onchange="hba1cIfccInput.value = Math.round((parseInt(this.value, 10) - 2.152) /0.09148); eagInput.value = Math.round(parseInt(this.value, 10) * 28.7 - 46.7)">
  <div class="my-3">
  <label for="hba1cIfccInput">HbA<sub>1c</sub> (mmol/mol, dit IFCC)</label>
  <input type="number" class="form-alternative" id="hba1cIfccInput" value="53" min="1" max="160" onchange="hba1cInput.value = Math.round((parseInt(this.value, 10) * 0.09148 + 2.152) / 0.1) * 0.1; eagInput.value = Math.round((parseInt(this.value, 10) * 0.09148 + 2.152) * 28.7 - 46.7)">
  </div>
  <label for="eagInput">Glycémie moyenne estimée (mg/dL)</label>
  <input type="number" style="width:68px" class="form-alternative" id="eagInput" value="154" min="1" onchange="hba1cInput.value = Math.round(((parseInt(this.value, 10) + 46.7) / 28.7) / 0.1) * 0.1">
</div>

{{% /collapse %}}
{{%collapse "Les points vitaux du diabète type 2" "show" %}}

{{%warning%}}Toute personne avec un diabète type 2 est à {{< modal-btn modal-rcv-diabete >}}haut voire très haut risque cardiovasculaire{{< /modal-btn >}} (rarement modéré) {{%class%}}(risque CV x 3-4){{%/class%}}{{%/warning%}}

- Arrêt du tabac
- [Hypertension artérielle]({{< relref "hypertension-arterielle.md" >}})
  - Seuil diagnostique ≥ 140/90 mmHg (160 après 80 ans, {{%class%}}*ESC 2018*{{%/class%}})
  - Cible 120-130/70-79 mmHg {{%class%}}(*ESC 2019 diabetes*){{%/class%}}
  - ≥ 65 ans: 130-139/70-79 mmHg {{%class%}}(*ESC 2019 diabetes*){{%/class%}}
  - Bithérapie d'emblée {{%modal-btn "modal-iec"%}}IEC + TZD/ICa{{%/modal-btn%}} ou {{%modal-btn "modal-ara2"%}}ARA2 + TZD/ICa{{%/modal-btn%}}
- LDL cible {{%class%}}(*ESC 2019*){{%/class%}}  
  - {{< modal-btn modal-statine-intensite >}}< 0,7 g/L{{< /modal-btn >}}
  - {{< modal-btn modal-statine-intensite >}}< 0,55 g/L{{< /modal-btn >}} si {{< modal-btn modal-rcv-diabete >}}maladie cardiovasculaire, > 20 ans d'évolution ou ≥ 3 autres FRCV{{< /modal-btn >}}
- Activité physique  
{{%class "text-black-secondary" %}}**Au moins 150 minutes** (2h30) d'activité physique par semaine (modérée à intense). Endurance et renforcement musculaire. Commencer par 1000 pas supplémentaires/j.{{%/class%}}
- Cible d'HbA<sub>1c</sub>  
{{< modal-btn modal-hba1c >}}Globalement **7%**{{< /modal-btn >}} {{%class%}}(*SFD 2021*){{%/class%}}.
- Surpoids  
Perte de poids (5-10%) ou chirurgie bariatrique.
- {{< modal-btn modal-regime >}}Régime méditerranéen{{< /modal-btn >}}
- Dépister des {{< modal-btn modal-saos >}}apnées du sommeil{{< /modal-btn >}} {{%class%}}(65-85%){{%/class%}} et [dysfonction érectile](https://doi.org/10.1016/j.diabet.2011.09.003)
- ALD 8 et proposer [Sophia](https://www.ameli.fr/assure/sante/assurance-maladie/service-sophia-pour-les-personnes-diabetiques)

{{%info%}}Le contrôle glycémique, tensionnel et lipidique réduit la survenue d'événements cardiovasculaires de 75% (*ESC 2019 diabetes*){{%/info%}}

{{% /collapse %}}
{{%collapse "Escalade thérapeutique" %}}

*Version préliminaire d'après SFD 2021*

- Cliquer sur la classe thérapeutique pour afficher plus d'informations
- Les classes thérapeutiques de préférence sont entourées ou signalées avec un indicateur bleu
- **Objectif 0 hypo !**

<form class="border p-4 my-4">
  <fieldset class="m-0">
    <legend>Comorbidités</legend>
    <input type="radio" name="assistant" id="standard" class="d-input-none" checked>
    <label for="standard" class="chip chip-action chip-choice">Sans</label>
    <input type="radio" name="assistant" id="obese" class="d-input-none">
    <label for="obese" class="chip chip-action chip-choice" data-toggle="tooltip" title="Obésité grade 2">IMC &ge; 35</label>
    <input type="radio" name="assistant" id="mcv" class="d-input-none" disabled>
    <label for="mcv" class="chip chip-action chip-choice" data-toggle="tooltip" title="Maladie cardiovasculaire">MCV</label>
    <input type="radio" name="assistant" id="mrc" class="d-input-none">
    <label for="mrc" class="chip chip-action chip-choice" data-toggle="tooltip" title="Maladie rénale chronique">MRC</label>
    <input type="radio" name="assistant" id="ic" class="d-input-none" disabled>
    <label for="ic" class="chip chip-action chip-choice" data-toggle="tooltip" title="Insuffisance cardiaque">Insuf. cardiaque</label>
    <input type="radio" name="assistant" id="grossesse" class="d-input-none" disabled>
    <label for="grossesse" class="chip chip-action chip-choice" data-toggle="tooltip" title="Grossesse">Grossesse</label>
  </fieldset>
</form>
<h3 class="typography-overline">Toujours</h3>
<p>Changement des habitudes alimentaires, lutte contre la sédentarité et activité physique adaptée.<br>Réévaluation à 3-6 mois.</p>
<h3 class="typography-overline">1<sup>re</sup> intention</h3>
<button class="chip chip-action flex-grow-1" type="button" data-toggle="modal" data-target="#modal-metformine">Metformine</button>
<button class="chip chip-action flex-grow-1 choix-mrc" type="button" data-toggle="modal" data-target="#modal-isglt2">+ iSGLT2</button>
<p class="font-weight-bold my-2">La metformine doit être maintenue au long cours.</p>
<!-- 2e intention -->
<h3 class="typography-overline mt-3">Bithérapie <span class="choix-standard choix-obese">- Ajouter au choix</span></h3>
<p class="mt-4 text-black-secondary">Possibilité de proposer d'emblée une bithérapie si déséquilibre initial important (HbA<sub>1c</sub> &gt; 9%)</p>
<div class="mb-2 choix-standard">
  <button class="chip chip-action flex-grow-1 border border-primary" type="button" data-toggle="modal" data-target="#modal-idpp4">iDDP4</button>
  <button class="chip chip-action flex-grow-1 border border-primary" type="button" data-toggle="modal" data-target="#modal-isglt2">iSGLT2</button>
  <button class="chip chip-action flex-grow-1 border border-primary" type="button" data-toggle="modal" data-target="#modal-glp1ra">GLP-1</button>
  <button class="chip chip-action flex-grow-1" type="button" data-toggle="modal" data-target="#modal-su">SU</button>
</div>
<div class="mb-2 choix-obese">
  <button class="chip chip-action flex-grow-1 border border-primary" type="button" data-toggle="modal" data-target="#modal-glp1ra">GLP-1</button>
  <button class="chip chip-action flex-grow-1 border border-primary" type="button" data-toggle="modal" data-target="#modal-isglt2">iSGLT2</button>
  <button class="chip chip-action flex-grow-1" type="button" data-toggle="modal" data-target="#modal-idpp4">iDPP4</button>
  <button class="chip flex-grow-1" type="button">IAG</button>
  <h3 class="typography-overline mt-3">Troisième ligne</h3>
  <p>Si insuffisants: avis endocrinologique et informer sur la chirurgie bariatrique</p>
</div>
<div class="mb-2 choix-mrc">
  <button class="chip chip-action" type="button" data-toggle="modal" data-target="#modal-glp1ra">GLP-1</button>
  <h3 class="typography-overline mt-3">Trithérapie - Selon les traitements essayés</h3>
  <button class="chip chip-action mb-3" type="button" data-toggle="modal" data-target="#modal-insuline">Insuline</button>
  <p>En maintenant l'iSGLT2 ou le GLP-1.<br>
  Suivi spécialisé systématique.</p>
</div>
<div class="mb-2 choix-ic">
  <button class="chip chip-action" type="button">iSGLT2</button>
</div>
<!-- 3e intention -->
<div class="mb-2 choix-standard">
<h3 class="typography-overline mt-3">Trithérapie - Selon les traitements essayés</h3>
<div class="accordion mb-5" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" role="button">
      <h4 class="card-title">Après iDPP4</h4>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-glp1ra">Substituer par un GLP-1</li>
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-isglt2">Ajouter un iSGLT2</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-su">Ajouter un SU</li>
          <li class="list-group-item list-group-item-action">Substituer par une insuline basale</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
      <h4 class="card-title">Après iSGLT2</h4>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-glp1ra">Substituer ou ajouter un GLP-1</li>
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-idpp4">Ajouter un iDPP4</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-su">Ajouter un SU</li>
          <li class="list-group-item list-group-item-action">Ajouter une insuline basale</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" role="button">
      <h4 class="card-title">Après GLP-1</h4>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-isglt2">Ajouter un iSGLT2</li>
          <li class="list-group-item list-group-item-action" data-toggle="modal" data-target="#modal-su">Ajouter un SU</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
      <h4 class="card-title">Après sulfamide</h4>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div>
         <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-glp1ra">Substituer ou ajouter un GLP-1</li>
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-idpp4">Ajouter un iDPP4</li>
          <li class="list-group-item list-group-item-action lgi-choice" data-toggle="modal" data-target="#modal-isglt2">Ajouter un iSGLT2</li>
          <li class="list-group-item list-group-item-action">Substituer par une insuline basale</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- 4e intention -->
<h3 class="typography-overline mt-3">4e intention</h3>
<ul>
  <li>Avis endocrinologique de préférence</li>
  <li>Sinon metformine + <a role="button" data-toggle="modal" href="#modal-glp1ra">GLP1</a> + <a role="button" data-toggle="modal" href="#modal-isglt2">iSGLT2</a>/<a role="button" data-toggle="modal" href="#modal-su">SU</a></li>
  <li>ou metformine + <a role="button" data-toggle="modal" href="#modal-insuline">insuline basale</a></li>
</ul>
</div>
<script>
window.onload = () => {
  $(function () {
    const allElems = $('[class*="choix-"]')
    $('[class*="choix-"]:not(.choix-standard)').addClass('d-input-none')
    $(':radio').on('change', function() {
      if ( $(':radio:checked').length === 0 ){
        allElems.addClass('d-input-none')
        $(`.choix-standard`).removeClass('d-input-none')
      }
      else if ($(this).is(':checked')){
        allElems.addClass('d-input-none')
        $(`.choix-${this.id}`).removeClass('d-input-none')
      }
    });
  });
}
</script>

{{% /collapse %}}
{{%collapse "Dépistage des complications" %}}

{{< table title="Rythme de dépistage des complications du diabète. Dr JB Fron d'après Sociétés Savantes mentionnées" class="table-wrap">}}
| Appareil     | Soins                                                                                            | Source                   |
|--------------|--------------------------------------------------------------------------------------------------|--------------------------|
| AAA          | Échographie si homme 65-75 ans et tabac (sevré < 20 ans) ou 50-75 ans avec ATCD familial AAA 1er degré          | ESC 2014 aortic          |
| AOMI         | Symptômes + pouls annuels, IPS au diagnostic puis /5-10 ans                                      | ESC 2019 diabetes        |
| Aspirine prev primaire | 75-100 mg envisageable si {{< modal-btn modal-rcv-diabete >}}(très) haut risque CV{{< /modal-btn >}} ou {{< modal-btn modal-coronaire-diabete >}}coronaire{{< /modal-btn >}} sans risque de saignement | ESC 2019 diabetes |
| Aspirine prev secondaire | 75-160 mg ± associé selon la pathologie, prolonger bi-antiagrégants si bien toléré (max 3 ans) | ESC 2019 diabetes |
| Chir bariatrique | < 65 ans et IMC ≥ 40 OU IMC ≥ 35 avec ≥ 1: HTA, SAOS ou autres, diabète type 2, ostéo-articulaires invalidantes, NASH | HAS 2009 obésité |
| Dentaire     | Suivi annuel                                                                                     | IDF 2009                 |
| ECG          | Annuel (VPN très faible)                                                                         | SFD 2021 CAD             |
| Épreuve d'effort | Angor, dyspnée inexpliquée, réduction des performances, {{< modal-btn modal-coronaire-diabete >}}très haut risque coronaire{{< /modal-btn >}} (/3-5 ans) | SFD 2021 CAD |
| Fibrate      | Envisager si {{< modal-btn modal-coronaire-diabete >}}(très) haut risque coronaire{{< /modal-btn >}} avec LDL cible mais TG > 2 g/L et HDL bas | SFD 2021 CAD |
| Neuropathie  | Dépistage annuel monofilament                                                                    | ESC 2019 diabetes        |
| Rénal        | Créatininémie, albuminurie sur échantillon annuels                                               | ESC 2019 diabetes        |
| Rétinopathie | Dépistage annuel. Tous les 2 ans si: pas d'insuline, équilibre tensionnel et glycémique optimaux | SFD 2016                 |
| Score calcique | {{< modal-btn modal-coronaire-diabete >}}≥ 2 facteurs de haut risque coronaire{{< /modal-btn >}} &plusmn; EE | SFD 2021 CAD |
| Vaccins      | Covid-19, grippe, {{< modal-btn modal-vaccin-pneumocoque >}}pneumocoque{{< /modal-btn >}}        | Calendrier vaccinal 2021 |
{{< /table >}}

> **AAA** = anévrysme de l'aorte abdominale ; **EE** = épreuve d'effort ; **aspirine:** IPP si risque élevé de saignement digestif  
Épreuve d'effort: évaluer les facteurs de risque: FRCV usuels, tour de taille, ancienneté du diabète, HbA<sub>1c</sub>, complications, dysfonction érectile, SAOS, NASH

{{% /collapse %}}
{{%collapse "Appareillage" %}}

- 1 autopiqueur annuel
- Lecteur de glycémie  
  - 1 lecteur/4 ans
  - **Indications à l'autosurveillance glycémique:** insuline envisagée ou en cours, insulinosécréteur avec suspicion d'hypoglycémie, visée pédagogique en cible non atteinte, déséquilibre aigu (infection, corticoïdes, suspension du traitement), (désir de) grossesse
- Capteur de glycémie
  - Indications: patient ≥ 4 ans avec insulinothérapie intensifiée (pompe ou ≥ 3 injections/j) et pratiquant une ASG ≥ 3/j.
  - Prescription initiale par endocrinologue
  - 26 capteurs/an remboursés ([Freestyle Libre 2](https://www.federationdesdiabetiques.org/federation/actualites/freestyle-libre-2-c-est-officiel-le-dispositif-bientot-pris-en-charge))

> *[Ameli 2021](https://www.ameli.fr/medecin/exercice-liberal/memos/suivi/auto-surveillance-glycemique-du-patient-diabetique-systeme-freestyle-libre)*

{{% /collapse %}}
{{%sources%}}

- {{< references/sfd-dt2 >}}
- [Riddle M.C. et al. Consensus report: definition and interpretation of remission in type 2 diabetes. Diabetologia. 2021.](https://link.springer.com/article/10.1007/s00125-021-05542-z)
- [Monnier L. et al. Updated management of dyslipidaemia in diabetes: A new step towards more stringent targets. Diabetes Epidemiology and Management. Volume 1. 2021.](https://doi.org/10.1016/J.DEMAN.2021.100001)
- [Valensi P. et al. Risk stratification and screening for coronary artery disease in asymptomatic patients with diabetes mellitus: Position paper of the French Society of Cardiology and the French-speaking Society of Diabetology. Diabetes & Metabolism. Volume 47. Issue 2. 2021.](https://doi.org/10.1016/j.diabet.2020.08.002)
- {{< references/esc-dyslipidemie >}}
- {{< references/esc-diabetes >}}
- {{< references/esc-hta >}}
- [Borel AL et al; SFD, SFRMS, SPLF. Prise en charge du syndrome d'apnées obstructives du sommeil chez la personne vivant avec un diabète : contexte, dépistage, indications et modalités de traitement. Med Mal Metab 2018. (PDF)](https://www.sfdiabete.org/sites/www.sfdiabete.org/files/files/ressources/position_sfd_splf_sfrms_saos_et_diab_mmm_2018.pdf)
- [Massin P et al; SFD. Référentiel pour le dépistage et la surveillance des complications oculaires du patient diabétique. Validé par la Société Francophone du Diabète (SFD) et par la Société Française d'Ophtalmologie (SFO). Med Mal Metab. 2016;10(8):774-84. (PDF)](https://www.sfdiabete.org/sites/www.sfdiabete.org/files/files/ressources/referentiel_complications_oculaires_sfd_sfo_mmm.pdf)
- [IDF. Oral health for people with diabetes. 2009. (PDF)](https://www.idf.org/component/attachments/attachments.html?id=729&task=download)

### À lire

- [Thivolet C. et al; SFD. Télésurveillance et diabète. Prise de position de la Société francophone du diabète (SFD). Med Mal Metab 2021; 15: 437–448. (PDF)](https://www.sfdiabete.org/sites/www.sfdiabete.org/files/files/ressources/referentiel2021sfd_telesurveillanceetdiabete.pdf)

{{%/sources%}}
{{% modal title="Objectifs glycémiques selon SFD 2021" id="modal-hba1c"%}}

{{< clinique/objectifs-hba1c >}}

{{% /modal %}}
{{% modal title="Diabète et RCV selon ESC 2019" id="modal-rcv-diabete"%}}

{{< clinique/risque-cardiovasculaire-diabete >}}

{{% /modal %}}
{{% modal title="Diabète et risque coronaire selon SFD 2021" id="modal-coronaire-diabete"%}}

{{< clinique/risque-coronaire-diabete >}}

{{% /modal %}}
{{% modal title="Dépistage du SAOS et diabète" id="modal-saos"%}}

{{< scores/saos-diabete >}}

{{% /modal %}}
{{% modal title="Statines et réduction du LDL" id="modal-statine-intensite"%}}

{{< traitements/statine-intensite >}}

{{% /modal %}}
{{% modal title="Régime méditerranéen" id="modal-regime"%}}

{{< traitements/regime-mediterraneen >}}

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
{{% modal title="Inhibiteurs du co-transporteur SGLT2" id="modal-isglt2"%}}

{{< traitements/isglt2 >}}

{{% /modal %}}
{{% modal title="Agonistes du récepteur GLP-1" id="modal-glp1ra"%}}

{{< traitements/glp1ra >}}

{{% /modal %}}
{{% modal title="Insuline basale" id="modal-insuline"%}}

{{< traitements/insuline >}}

{{% /modal %}}
{{% modal title="IEC dans l'hypertension" id="modal-iec" size="lg"%}}

{{< traitements/iec >}}

{{% /modal %}}
{{% modal title="ARA2 dans l'hypertension" id="modal-ara2" size="lg"%}}

{{< traitements/ara2 >}}

{{% /modal %}}
{{% modal title="Vaccination anti-pneumococcique" id="modal-vaccin-pneumocoque"%}}

{{< traitements/vaccin-pneumocoque >}}

{{% /modal %}}
