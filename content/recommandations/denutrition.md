+++
title = "Dénutrition du sujet âgé, de l'adulte et de l'enfant"
prefix = "la "
titleSeo = "Dénutrition"
description = "Recommandations: critères de dénutrition chez la personne âgée, l'adulte et l'enfant, dépistage de la dénutrition par score MNA et compléments alimentaires"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-11-19T11:25:57+01:00"
publishdate = "2021-11-23"
lastmod = "2021-11-30"
specialites = ["endocrinologie"]
annees = "2021"
sources = ["HAS", "FFN", "SFNCM"]
tags = ["demence", "depistage"]
anglais = ["Undernutrition"]
sctid = "65404009"
flowchart = true
image = false
imageSrc = ""
todo = "SEO, FFN, liste CNO: Clinutren, Delical, Fortimel, Fresubin, Renutryl..., https://www.sfncm.org/outils-education/outils/realises-par-la-sfncm"
+++

{{%article-summary%}}

- Dépister avec le {{< modal-btn modal-mna >}}Mini Nutritional Assessment{{< /modal-btn >}} (MNA, ≥ 1/an après 70 ans)
- Le diagnostic est clinique: association d'un critère phénotypique et d'un critère étiologique
- Un IMC élevé n'exclut pas une dénutrition
- Poids hebdomadaire et à chaque consultation (reporté dans les dossier médical, DMP, carnet de santé...)
- Bilan étiologique, enrichir l'alimentation, soins bucco-dentaires ± CNO

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Dénutrition
: *Malnutrition* dans la CIM-10.
: << État d'un organisme en déséquilibre nutritionnel >>. Possible par un déficit d'apport isolé, une augmentation des dépenses ou des pertes ou une association de ceux-ci.  
Le déséquilibre nutritionnel est caractérisé par un bilan énergétique et/ou protéique négatif aboutissant à une *perte de poids* ou une *fonte musculaire*.  
Elle touche > 2 millions de français.
: **Facteurs de risque:** cancer, syndrome inflammatoire, escarre, toxicomanies, démence et dégénératif, troubles de déglutition et bucco-dentaires (dont candidose), précarité, régime restrictif.

Albuminémie
: Elle doit être dosée par immunonéphélémétrie ou immunoturbidimétrie (pas d'électrophorèse).  
Elle n'est qu'un *critère de sévérité* de la dénutrition et non un critère diagnostique.

Syndrome de renutrition inappropriée
: Manifestations adverses cliniques et biologiques observées à la renutrition de patients dénutris ou ayant subi un jeûne ou une restriction alimentaire prolongée (*SFNCM*).
: Cliniquement: œdèmes, défaillance d'organes, troubles électrolytiques.

### Abréviations

CIM-10
: classification internationale des maladies 10<sup>e</sup> révision (OMS)

CNO
: complémentation nutritionnelle orale

FFN
: Fédération française de nutrition

HAS
: Haute Autorité de Santé

IMC
: indice de masse corporelle (en kg/m²)

MNA®
: {{%lang%}}Mini Nutritional Assessment{{%/lang%}} (Nestlé)

PE
: protéino-énergétique

SFNCM
: Société Francophone de Nutrition Clinique et Métabolisme
{.dl-inline}

{{% /collapse %}}
{{%collapse "Calculs: perte de poids - estimation de la taille" %}}

### Perte de poids

<div class="card-body border mb-5 mw-480">
<form class="d-block d-lg-flex form-variation-poids">
  <div class="form-ripple mr-3">
    <label for="poids-initial">Poids initial (kg)</label>
    <input class="form-control" id="poids-initial" type="number" min="3" max="200">
  </div>
  <div class="form-ripple mr-3">
    <label for="poids-actuel">Poids actuel (kg)</label>
    <input class="form-control" id="poids-actuel" type="number" min="3" max="200">
  </div>
  <div>
    <label for="variation">Variation</label>
    <input class="form-control" id="variation" type="text" placeholder="Préciser les poids" readonly>
  </div>
</form>
</div>
<script>
  // Outil de calcul de la variation de poids
  document.addEventListener( 'DOMContentLoaded', event => {
    const initial = document.getElementById('poids-initial')
    const final = document.getElementById('poids-actuel')
    const variation = document.getElementById('variation');
    [initial, final].forEach(elem => elem.addEventListener('input', () => { calc() }))
    const calc = () => { if (initial.value > 0 && final.value > 0) { variation.value = parseInt((final.value - initial.value) / initial.value * 100) + ' %' }}
  })
</script>

### Estimation de la taille selon Chumlea

Après 60 ans, lorsque la taille n'est pas mesurable par une toise (alitement, troubles de la statique dorsale), on l'estime par la *formule de Chumlea* (extrapolation à partir de la distance talon-genou).

<div class="card-body border mb-5" style="max-width: 280px">
<form>
  <div class="form-group">
    <input type="radio" id="chumlea-1" name="chumlea-radio" class="d-input-none" value="f" required checked>
    <label for="chumlea-1" class="chip chip-action chip-choice">Femme</label>
    <input type="radio" id="chumlea-1bis" name="chumlea-radio" class="d-input-none" value="h">
    <label for="chumlea-1bis" class="chip chip-action chip-choice">Homme</label>
  </div>
  <div class="form-group form-ripple">
    <label for="chumlea-age">Âge (ans)</label>
    <input class="form-control" id="chumlea-age" type="number" min="60" max="120">
  </div>
  <div class="form-group form-ripple">
    <label for="chumlea-jambe">Taille de la jambe (cm)</label>
    <input class="form-control" id="chumlea-jambe" type="number" min="20" max="80">
    <small class="form-text">Distance talon-genou (précisions plus bas)</small>
  </div>
  <div class="form-group">
    <label for="chumlea-calc">Taille estimée (cm)</label>
    <input class="form-control" id="chumlea-calc" type="text" placeholder="Compléter les mesures" readonly>
  </div>
</form>
</div>
<script>
  window.onload = () => {
  $(function () {
    $('[name="chumlea-radio"], #chumlea-age, #chumlea-jambe').on('input', function () {
      let age = $('#chumlea-age').val();
      let jambe = $('#chumlea-jambe').val();
      if (age > 0 && jambe > 0) {
        if ($('#chumlea-1').is(':checked')) {
          $('#chumlea-calc').val(Math.round(84.88 - (0.24 * age) + (1.83 * jambe)))
        } else if ($('#chumlea-1bis').is(':checked')){
          $('#chumlea-calc').val(Math.round(64.19 - (0.04 * age) + (2.03 * jambe)))
        }
      }
    })
  });
}
</script>

> **Détail.** Mesure talon-genou: en décubitus dorsal, genoux à 90°, avec toise pédiatrique posée sous le pied et la partie mobile appuyée au-dessus du genou.  
[Chumlea WC, Roche AF, Steinbaugh ML. Estimating stature from knee height for persons 60 to 90 years of age. J Am Geriatr Soc 1985;33(2):116-20.](https://agsjournals.onlinelibrary.wiley.com/doi/10.1111/j.1532-5415.1985.tb02276.x)

{{% /collapse %}}
{{%collapse "Dénutrition du sujet âgé" %}}

Chez l'adulte de plus de 70 ans, le dépistage doit être au moins annuel.

### 1. Diagnostic de dénutrition chez le sujet âgé

- Critères phénotypiques
  - Perte de poids ≥ 5% en 1 mois  
  ou ≥ 10% en 6 mois  
  ou ≥ 10% par rapport au poids habituel avant le début de la maladie
  - IMC < 22
  - {{< modal-btn modal-sarcopenie >}}Sarcopénie confirmée{{< /modal-btn >}}
- Critères étiologiques
  - Réduction de la prise alimentaire ≥ 50% pendant > 1 semaine  
  ou toute réduction des apports pendant > 2 semaines par rapport à la consommation habituelle ou aux besoins PE
  - Malabsorption, maldigestion
  - Situation d'agression (hypercatabolisme protéique)  
  Pathologie aiguë, chronique évolutive ou maligne évolutive.

{{%info%}}Si le critère étiologique disparaît (reprise de l'alimentation, guérison d'une maladie), le diagnostic de dénutrition persiste tant que persiste le critère phénotypique{{%/info%}}

### 2. Dénutrition sévère ?

{{%warning%}}
Dénutrition sévère si ≥ 1 critère parmi:

- IMC < 20
- Perte de poids
  - ≥ 10% en 1 mois
  - ≥ 15% en 6 mois
  - ≥ 15% par rapport au poids habituel avant le début de la maladie
- Albuminémie < 30 g/L
{{%/warning%}}

{{% /collapse %}}
{{%collapse "Dénutrition de l'adulte" %}}

### 1. Diagnostic de dénutrition chez l'adulte

- Critères phénotypiques
  - Perte de poids ≥ 5% en 1 mois  
  ou ≥ 10% en 6 mois  
  ou ≥ 10% par rapport au poids habituel avant le début de la maladie
  - IMC < 18,5
  - {{< modal-btn modal-sarcopenie >}}Réduction quantifiée de la masse et/ou de la fonction musculaires{{< /modal-btn >}}
- Critères étiologiques
  - Réduction de la prise alimentaire ≥ 50% pendant > 1 semaine  
  ou toute réduction des apports pendant > 2 semaines par rapport à la consommation habituelle ou aux besoins PE
  - Malabsorption, maldigestion
  - Situation d'agression (hypercatabolisme protéique)  
  Pathologie aiguë, chronique évolutive ou maligne évolutive.

### 2. Sévérité de la dénutrition chez l'adulte

- Dénutrition modérée si ≥ 1 parmi:
  - 17 < IMC < 18,5
  - Perte de poids ≥ 5% en 1 mois ou ≥ 10% en 6 mois ou ≥ 10% par rapport au poids habituel avant le début de la maladie
  - 30 g/L < Albuminémie < 35 g/L
- **Dénutrition sévère** si ≥ 1 parmi:
  - IMC ≤ 17
  - Perte de poids ≥ 10% en 1 mois ou ≥ 15% en 6 mois ou ≥ 15% par rapport au poids habituel avant le début de la maladie
  - Albuminémie ≤ 30 g/L

Réévaluation à chaque consultation et minimum sous 3 mois.

{{% /collapse %}}
{{%collapse "Dénutrition de l'enfant" %}}

Enfant < 18 ans.

### 1. Diagnostic de dénutrition chez l'enfant

- Critères phénotypiques
  - Perte de poids ≥ 5% en 1 mois  
  ou ≥ 10% en 6 mois  
  ou ≥ 10% par rapport au poids habituel avant le début de la maladie
  - IMC < courbe 18,5 kg/m² (courbes IMC IOTF [filles](https://cress-umr1153.fr/wp-content/uploads/2018/03/Courbes-IMC-filles-1-18-ans-AFPA-CRESS-Inserm-CGM-2018.pdf), [garçon](https://cress-umr1153.fr/wp-content/uploads/2018/03/Courbes-IMC-garcons-1-18-ans-AFPA-CRESS-Inserm-CGM-2018.pdf))
  - Stagnation pondérale aboutissant à un décalage du poids 2 couloirs en dessous (courbes poids IOTF [filles](https://cress-umr1153.fr/wp-content/uploads/2018/03/Courbes-Taille-et-Poids-filles-1-18-ans-AFPA-CRESS-Inserm-CGM-2018.pdf), [garçon](https://cress-umr1153.fr/wp-content/uploads/2018/03/Courbes-Taille-et-Poids-garcons-1-18-ans-AFPA-CRESS-Inserm-CGM-2018.pdf))
  - Réduction de la masse et/ou de la fonction musculaires
- Critères étiologiques
  - Réduction de la prise alimentaire ≥ 50% pendant > 1 semaine  
  ou toute réduction des apports pendant > 2 semaines par rapport: à la consommation alimentaire habituelle quantifiée ou aux besoins protéino-énergétiques estimés
  - Malabsorption, maldigestion
  - Situation d'agression (hypercatabolisme protéique)  
  Pathologie aiguë, chronique évolutive ou maligne évolutive.

### 2. Sévérité de la dénutrition chez l'enfant

- Dénutrition modérée si ≥ 1 parmi:
  - 17 < IMC < 18,5
  - Perte de poids ≥ 5% et ≤ 10% en 1 mois ou ≥ 10% et ≤ 15% en 6 mois par rapport au poids habituel avant le début de la maladie
  - Stagnation pondérale aboutissant à un poids situé entre 2 et 3 couloirs en dessous du couloir habituel
- Dénutrition sévère si ≥ 1 parmi:
  - IMC ≤ courbe 17
  - Perte de poids > 10% en 1 mois ou > 15% en 6 mois par rapport au poids habituel avant le début de la maladie
  - Stagnation pondérale aboutissant à un poids situé ≥ 3 couloirs en dessous du couloir habituel
  - Infléchissement statural avec perte ≥ 1 couloir

Réévaluation à chaque consultation, au moins mensuelle.

{{% /collapse %}}
{{%collapse "Traitement" %}}

Traitement de la dénutrition de l'adulte.

- Traitement étiologique
- Évaluation diététique
- Soins bucco-dentaires et de la langue
- Lutte contre la polymédication
- Enrichir l'alimentation
  - Cible énergétique 30-40 kcal/kg/j
  - Cible protéique 1,2-1,5 g/kg/j
  - Enrichir avec: Poudre de lait entier, lait concentré entier, fromage râpé, œufs, crème fraîche épaisse, beurre fondu, huile, poudres de protéines, pâtes/semoules enrichies
- Complément nutritionnel oral (voir plus bas)
- Dénutrition sévère: nutrition entérale
- Maintien d'une activité physique
- [Site officiel d'information pour le public](https://www.nutritionclinique.fr/)

### Compléments nutritionnels oraux (CNO)  

- Objectif  
  - Minimal ou ≥ 70 ans: supplément de 400 cal/j et/ou 30 g/j de protéines
  - Maximal: 1000 kcal/j et 80 g/j de protéines
- En collations variées à distance des repas
  - ≥ 2h des repas. Ex: 16h et avant le coucher
  - Éviter jeûne > 12h
- Prescription
  - 1<sup>re</sup> prescription limitée à 1 mois
  - Renouvellements de 3 mois
  - Ex: Complémentation nutritionnelle orale pour adultes: mélange hyperprotidique et hyperénergétique pour un apport de 400 kcal/j et 30 g/j de protéines; 2 unités par jour à 16h et 21h pendant 4 semaines
- Conservation  
Une fois ouvert, 2h à température ambiante et 24h au réfrigérateur.
- Effets indésirables: nausées, vomissements, diarrhées

{{% /collapse %}}
{{%collapse "Surveillance" %}}

Réévaluation à chaque consultation, au moins mensuelle (trimestrielle mois chez l'adulte).

- Poids (1/sem, même balance), IMC
- Albuminémie max 1/mois
- Évolution du facteur étiologique
- Appétit et consommation alimentaire
  - [Échelle visuelle analogique](https://www.sefi-nutrition.com/utiliser-sefi) ou verbale
  - Échelle semi-quantitative (portions)
  - Calculés par un diététicien
- Force musculaire  
{{< modal-btn modal-sarcopenie >}}Préhension{{< /modal-btn >}} ou test du lever de chaise.
- État bucco-dentaire
- Mastication et déglutition
- Niveau d'activité physique

### Exemple de questions

[Appli patient Poids plus](https://play.google.com/store/apps/details?id=com.poids&hl=fr)

- Combien faites-vous de repas par jour ?
- Mangez-vous tout votre repas ?
- Est-ce qu'il y a certains aliments que vous ne mangez pas ?
- Avez-vous besoin d'une aide pour manger ?
- Avez-vous des difficultés pour mâcher ou avaler certains aliments ?
- Quel est votre poids ? Avez-vous perdu du poids depuis une semaine, un mois ?
- Avez-vous diminué votre consommation alimentaire depuis une semaine, un mois ?

> *SFNCM CNO*

{{% /collapse %}}
{{%collapse "Conduite à tenir devant une dénutrition" "show" %}}

{{< mermaid title="Conduite à tenir devant une personne à risque de dénutrition. Dr JB Fron d'après HAS/FFN 2021" >}}
graph TB
  fdr["<b>Personne à risque de dénutrition</b><hr>- &ge; 70 ans (dépistage annuel)<br>- Cancer<br>- Maladie inflammatoire<br>- Escarre<br>- Démence, dégénératif<br>- Troubles de déglutition et bucco-dentaires<br>- Toxicomanie<br>- Régime"]
  style fdr stroke:#4150f5, stroke-width:1px
    fdr --> MNA("Score MNA &le; 11 ?")
      MNA -- Oui --> criteres("<b>&ge; 1 critère phénotypique</b><hr>- PP &ge; 5% en 1 mois<br>ou &ge; 10% en 6 mois ou avant la maladie<br>- IMC &lt; 18,5 (22 si âgée)<br>- Sarcopénie<br>- Enfant: stagnation pondérale avec<br>décalage poids 2 couloirs<hr><b>&ge; 1 critère étiologique</b><hr>- Réduction apports &ge; 50% &gt; 1 sem<br>ou toute réduction &gt; 2 sem<br>- Malabsorption, maldigestion<br>- Situation d'agression")
        criteres --> bilan("- Bilan étiologique et de sévérité<br>- Degré de sévérité")
          bilan --> traitement("- Traitement étiologique<br>- Enrichir l'alimentation<br>- Avis diététique<br>- Soins bucco-dentaires")
            traitement --> surveillance("- Suivi à 1-3 mois<br>- Poids 1/sem<br>&plusmn; CNO")
              surveillance -.-> ent("- Avis spécialisé<br>&plusmn; Nutrition entérale")
{{< /mermaid >}}

> CNO = complément alimentaire; MNA = {{%lang%}}Mini Nutritional Assessment{{%/lang%}}; PP = perte de poids, sem = semaine

{{%/collapse%}}
{{%sources%}}

{{< youtube id="1uehBQjbbFU" title="La minute RECO HAS | Lombalgie commune (Pr Éric Fontaine)" >}}

- [HAS, FFN. Diagnostic de la dénutrition chez la personne de 70 ans et plus. Recommandation de bonne pratique. Novembre 2021.](https://www.has-sante.fr/jcms/p_3165944/fr/diagnostic-de-la-denutrition-chez-la-personne-de-70-ans-et-plus)
- Prescrire Redaction. Complémentation nutritionnelle orale chez les adultes dénutris : conditions de remboursement en France en 2020. Rev Prescrire. Mai 2020.
- [HAS, FFN. Diagnostic de la dénutrition de l'enfant et de l'adulte. Recommandation de bonne pratique. Novembre 2019.](https://has-sante.fr/jcms/p_3118872/fr/diagnostic-de-la-denutrition-de-l-enfant-et-de-l-adulte)
- [HAS. Stratégie de prise en charge en cas de dénutrition protéino-énergétique chez la personne âgée. Synthèse des recommandations professionnelles. 2007.](https://www.has-sante.fr/jcms/c_546549/fr/strategie-de-prise-en-charge-en-cas-de-denutrition-proteino-energetique-chez-la-personne-agee)
- [Lutte contre la dénutrition](https://www.luttecontreladenutrition.fr/)

### À lire

- [Hankard R.; SFP. Établir une stratégie nutritionnelle chez un enfant dénutri. 2017.](https://pap-pediatrie.fr/hepato-gastro/etablir-une-strategie-nutritionnelle-chez-un-enfant-denutri)
- [Société Francophone de Nutrition Clinique et Métabolisme - Référentiels](https://www.sfncm.org/outils-education/recommandations/referentiels)

{{%/sources%}}
{{% modal title="Définition de la sarcopénie" id="modal-sarcopenie"%}}

{{< clinique/denutrition-sarcopenie >}}

{{% /modal %}}
{{% modal title="Mini Nutritional Assessment version courte" id="modal-mna"%}}

{{< scores/mna >}}

{{% /modal %}}
