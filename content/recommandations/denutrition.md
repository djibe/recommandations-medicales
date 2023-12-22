+++
title = "Dénutrition du sujet âgé, de l'adulte et de l'enfant"
prefix = "la "
titleSeo = "Dénutrition"
description = "Recommandations: critères de dénutrition chez la personne âgée, l'adulte et l'enfant, dépistage de la dénutrition par score MNA et compléments alimentaires"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-11-19T11:25:57+01:00"
publishdate = "2021-11-23"
lastmod = "2023-04-06"
specialites = ["endocrinologie"]
annees = "2021"
sources = ["HAS", "FFN", "SFNCM"]
tags = ["demence", "depistage"]
anglais = ["Undernutrition"]
sctid = "65404009"
icd10 = "E46"
image = false
imageSrc = ""
flowchart = true
todo = "courbes enfants, FFN, liste CNO: Clinutren, Delical, Fortimel, Fresubin, Renutryl..., https://www.sfncm.org/outils-education/outils/realises-par-la-sfncm"
+++

{{%article-summary%}}

- Dépister une dénutrition avec le {{< modal-btn modal-mna >}}questionnaire Mini Nutritional Assessment (MNA){{< /modal-btn >}} (dépistage annuel après 70 ans, à chaque visite chez l'enfant)
- Le diagnostic de dénutrition est clinique: association d'un critère phénotypique (amaigrissement, IMC bas, sarcopénie) et d'un critère étiologique (anorexie, malabsorption, inflammation)
- Un IMC élevé n'exclut pas une dénutrition (normal 18,5 - 25 kg/m² chez l'adulte et 21-25 après 70 ans, 3-97 percentiles chez l'enfant)
- Suivi de la dénutrition: poids hebdomadaire avec surveillance à chaque consultation (noté dans les dossier médical, DMP, carnet de santé)
- Prise en charge d'une dénutrition: bilan étiologique, enrichir l'alimentation, soins bucco-dentaires voire compléments alimentaires

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Dénutrition
: *Malnutrition* dans la CIM-10.
: << État d'un organisme en déséquilibre nutritionnel >>. Possible par un déficit d'apport isolé, une augmentation des dépenses ou des pertes ou une association de ceux-ci.  
Le déséquilibre nutritionnel est caractérisé par un bilan énergétique et/ou protéique négatif aboutissant à une *perte de poids* ou une *fonte musculaire*.
: La dénutrition touche +2 millions de Français chaque année.

Albuminémie
: Elle doit être dosée par immunonéphélémétrie ou immunoturbidimétrie (pas d'électrophorèse).  
Elle n'est qu'un *critère de sévérité* de la dénutrition et non un critère diagnostique.

Syndrome de renutrition inappropriée
: Manifestations adverses cliniques et biologiques observées à la renutrition de patients dénutris ou ayant subi un jeûne ou une restriction alimentaire prolongée (*SFNCM*).
: Cliniquement: œdèmes, défaillance d'organes, troubles électrolytiques.

### Facteurs de risque de dénutrition

Situations et facteurs de risque de dénutrition:

- [Cancer](/tags/cancer/) (prévalence de 40%)
- Syndrome inflammatoire
- Pathologie digestive, insuffisance rénale, respiratoire, hépatique ou cardiaque
- Escarre
- Toxicomanie
- Démence et maladie neuropsychiatrique  
  Anorexie mentale, [Alzheimer]({{< relref "maladie-alzheimer.md" >}}), [Parkinson]({{< relref "maladie-parkinson.md" >}}).
- Troubles de déglutition et bucco-dentaires (dont [candidose]({{< relref "mycoses-dermatophytes-candidoses.md" >}}))
- Précarité
- Régime restrictif

### Dépense énergétique de base et densité énergétique des nutriments

La dépense de base pour un homme de 70 kg est estimée à **1500 kcal** par jour. Elle est plus faible chez la femme et après 40 ans.

Le calcul du **débit énergétique de base** (DEB) de référence selon l'âge et la corpulence du sujet est calculé avec la Harris et Benedict (disponible dans la section suivante).

La dépense énergétique totale quotidienne est aux environs de **2500 kcal/j** (35 kcal/kg) pour un adulte standard.

Les apports hydriques quotidiens sont estimés à 2 L/j pour les femmes et à 2,5 L/j pour les hommes.

Rappel de la densité énergétique des nutriments:

- Glucides, protéines: 4 kcal par gramme
- Lipides: 9 kcal
- Alcool: 7 kcal

Un régime alimentaire est dit << équilibré >> avec les apports suivants:

- Glucides 40-55%
- Lipides: 35-40%
- Protides: 10-20% (15-20% chez le +70 ans)

> *CDU-HGE 2022*

### Abréviations

AS
: apport satisfaisant

CIM-10
: classification internationale des maladies 10<sup>e</sup> révision (OMS)

CNO
: complémentation nutritionnelle orale

DPE
: dénutrition protéino-énergétique

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
{{%collapse "Calculs: perte de poids - estimation de la taille ..." %}}

### Perte de poids

{{< outils/variation-poids >}}

### Calcul de la dépense énergétique de base selon la Formule de Harris et Benedict

La formule de Harris-Benedict permet d'estimer le **débit énergétique de base** (DEB). Citée par FFN et SFNCM. La [formule de Black et al est également reconnue](https://pubmed.ncbi.nlm.nih.gov/8641250/).

L'estimation des **besoins énergétiques totaux** applique au DEB un facteur de 1 à 1,5 selon l'intensité métabolique auquel son organisme est soumis.

<div class="card-body rounded-lg border mb-3" style="max-width: 280px">
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="harris-age">Âge (ans)</label>
    <input class="form-control" id="harris-age" type="number" min="5" max="120">
  </div>
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="harris-height">Taille (cm)</label>
    <input class="form-control" id="harris-height" type="number" min="50" max="220">
  </div>
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="harris-weight">Poids (kg)</label>
    <input class="form-control" id="harris-weight" type="number" min="20" max="300">
  </div>
  <div class="form-group">
    <label for="harris-calc-female">Débit énergétique de base (DEB en kcal)</label>
    <input class="form-control" id="harris-calc-female" type="text" placeholder="Compléter les mesures" readonly>
    <input class="form-control" id="harris-calc-male" type="text" placeholder="Compléter les mesures" readonly>
  </div>
</div>
<script>
  window.addEventListener('load', () => {
  $(function () {
    $('#harris-age, #harris-height, #harris-weight').on('input', () => {
      console.log('start');
      const age = $('#harris-age').val();
      const height = $('#harris-height').val();
      const weight = $('#harris-weight').val();
      if (age > 0 && height > 0 && weight > 0) {
        $('#harris-calc-female').val('Femme: ' + Math.round(655.0955 + (9.5634 * weight) + (1.8496 * height) - (4.6756 * age)));
        $('#harris-calc-male').val('Homme: ' + Math.round(66.4730 + (13.7516 * weight) + (5.0033 * height) - (6.7550 * age)));
      }
    })
  })
})
</script>

> [Harris JA, Benedict FG. A Biometric Study of Human Basal Metabolism. Proc Natl Acad Sci U S A. 1918;4(12):370-373. doi:10.1073/pnas.4.12.370](https://pubmed.ncbi.nlm.nih.gov/16576330/)

### Estimation des besoins énergétiques de l'enfant (règle 100/50/25)

{{< table title="Estimation du besoin énergétique de l'enfant (règle 100/50/25)" >}}
| Poids attendu pour<br>la taille (kg) | Apports quotidiens (kcal)            |
|----------------------------------:|--------------------------------------|
|                              0-10 | 100 kcal/kg                          |
|                             10-20 | 1000 + 50 kcal/kg au-dessus de 10 kg |
|                              > 20 | 1500 + 25 kcal/kg au-dessus de 20 kg |
{{< /table >}}

### Estimation de la taille selon Chumlea

Après 60 ans, lorsque la taille n'est pas mesurable par une toise (alitement, troubles de la statique dorsale), on l'estime par la *formule de Chumlea* (extrapolation à partir de la distance talon-genou).

<div class="card-body rounded-lg border mb-5" style="max-width: 280px">
  <div class="form-group">
    <input type="radio" id="chumlea-female" name="chumlea-radio" class="d-input-none" value="f" required checked>
    <label for="chumlea-female" class="chip chip-action chip-choice">Femme</label>
    <input type="radio" id="chumlea-male" name="chumlea-radio" class="d-input-none" value="h">
    <label for="chumlea-male" class="chip chip-action chip-choice">Homme</label>
  </div>
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="chumlea-age">Âge (ans)</label>
    <input class="form-control" id="chumlea-age" type="number" min="60" max="120">
  </div>
  <div class="form-group floating-label textfield-box form-ripple">
    <label for="chumlea-jambe">Taille de la jambe (cm)</label>
    <input class="form-control" id="chumlea-jambe" type="number" min="20" max="80">
    <small class="form-text">Distance talon-genou</small>
  </div>
  <div class="form-group">
    <label for="chumlea-calc">Taille estimée (cm)</label>
    <input class="form-control" id="chumlea-calc" type="text" placeholder="Compléter les mesures" readonly>
  </div>
</div>
<script>
  window.addEventListener('load', () => {
  $(function () {
    $('[name="chumlea-radio"], #chumlea-age, #chumlea-jambe').on('input', () => {
      let age = $('#chumlea-age').val();
      let jambe = $('#chumlea-jambe').val();
      if (age > 0 && jambe > 0) {
        if ($('#chumlea-female').is(':checked')) {
          $('#chumlea-calc').val(Math.round(84.88 - (0.24 * age) + (1.83 * jambe)))
        } else if ($('#chumlea-male').is(':checked')){
          $('#chumlea-calc').val(Math.round(64.19 - (0.04 * age) + (2.03 * jambe)))
        }
      }
    })
  })
})
</script>

> **Détail.** Mesure talon-genou: en décubitus dorsal, genoux à 90°, avec toise pédiatrique posée sous le pied et la partie mobile appuyée au-dessus du genou.  
[Chumlea WC, Roche AF, Steinbaugh ML. Estimating stature from knee height for persons 60 to 90 years of age. J Am Geriatr Soc 1985;33(2):116-20.](https://agsjournals.onlinelibrary.wiley.com/doi/10.1111/j.1532-5415.1985.tb02276.x)

{{% /collapse %}}
{{%collapse "Clinique" %}}

Évaluation nutritionnelle de l'adulte.

### Interrogatoire

- Pathologie évolutive  
  Troubles digestifs (diarrhée chronique), maladie chronique, traitements en cours.
- Activité physique quotidienne, autonomie
- Fatigabilité à l'effort
- Évolution du poids
- Alimentation
  - Rythme, quantités
  - Modifications du régime et ancienneté
  - Journal des jours précédents
- État psychologique

### Examen clinique

Voir les outils dans la section précédente.

- Poids et variation, taille, IMC
- Périmètre du milieu du bras non dominant
- Examen cardio-respiratoire
- Capacité à se relever en étant accroupi, fatigabilité
- Œdèmes déclives, ascite (hypoalbuminémie)
- État bucco-dentaire
- État cutané et phanères: xérose cutanée, pli cutané, ongles et cheveux secs et cassants, lèvres (chéilite, [perlèche]({{< relref "mycoses-dermatophytes-candidoses.md" >}})) et langue (glossite)
- Faciès et palpation des masses musculaires

Les mesures anthropométriques nécessitent un équipement dédié.

> Le poids de référence est mesuré déshabillé, vessie vide, à jeun sur une balance étalonnée

### Examens biologiques

- NFS ([lymphopénie]({{< relref "lymphopenie.md" >}})), CRP (syndrome inflammatoire)
- Bandelette urinaire
- Créatininurie des 24 heures  
  Reflet de la masse musculaire. 1 g/24h = 17-20 kg de masse musculaire
- Albuminémie (normale 38-45 g/L)
- Transthyrétine (= préalbumine)  
  Demi-brève (2 jours) reflétant les apports récents.

### Évaluation nutritionnelle

Interpréter en fonction des résultats le profil de dénutrition:

- Protéino-énergétique (anomalies poids/anthropométrie) ou protéique (hypoalbuminémie avec poids/anthropométrie normaux conservés)
- Aiguë ou chronique (protéines, vitesse d'amaigrissement)
- Gravité de la dénutrition (clinique, albuminémie, préalbuminémie, CRP)

{{% /collapse %}}
{{%collapse "Dénutrition du sujet âgé +70 ans" %}}

Chez le plus de 70 ans, le dépistage de la dénutrition doit être au moins annuel (*HAS*)
{.alert .alert-info}

### 1. Diagnostic de dénutrition chez le sujet âgé

Critères de dénutrition de la *HAS 2021* du sujet âgé. Diagnostic de dénutrition en cas d'association d'un critère phénotypique et d'un critère étiologique:

- Critères phénotypiques de dénutrition
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

Si le critère étiologique disparaît (reprise de l'alimentation, guérison d'une maladie), le diagnostic de dénutrition persiste tant que persiste le critère phénotypique
{.alert .alert-info}

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

Critère de dénutrition *HAS* chez l'adulte. Diagnostic de dénutrition en cas d'association d'un critère phénotypique et d'un critère étiologique:

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

### 1. Diagnostic de dénutrition chez l'enfant

Critères de dénutrition *HAS* chez l'enfant. Diagnostic de dénutrition de l'enfant (sujet **-18 ans**) en cas d'association d'un critère phénotypique et d'un critère étiologique:

- Critères phénotypiques
  - Perte de poids ≥ 5% en 1 mois  
    ou ≥ 10% en 6 mois  
    ou ≥ 10% par rapport au poids habituel avant le début de la maladie
  - IMC < courbe 18,5 kg/m² ([courbes d'IMC IOTF](https://afpa.org/outil/courbes-de-croissance-filles-francaises/))
  - Stagnation pondérale aboutissant à un décalage du poids 2 couloirs en dessous ([courbes poids IOTF](https://afpa.org/outil/courbes-de-croissance-filles-francaises/))
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
{{%collapse "Traitement de la dénutrition" %}}

Prise en charge de la dénutrition de l'adulte:

- Traitement étiologique
- Évaluation diététique ([annuaire](https://www.nutritionclinique.fr/annuaire?zoom=11&is_mile=0&directory_radius=20&keywords=&address=&directory_radius=20&center=&address_type=))
- Soins bucco-dentaires et de la langue
- Lutte contre la polymédication
- Enrichir l'alimentation
  - Débit énergétique basal (formule de Harris-Benedict) x 1,2-1,5
  - Cible énergétique 30-40 kcal/kg/j
  - Cible protéique 1,2-1,5 g/kg/j
  - Renforcer le petit déjeuner
  - Enrichir avec: poudre de lait entier, lait concentré entier, fromage râpé, œufs, crème fraîche épaisse, beurre fondu, huile, poudres de protéines, pâtes/semoules enrichies
- Complément nutritionnel oral (voir plus bas)
- Dénutrition sévère: nutrition entérale
- Maintien d'une activité physique
- [Site officiel d'information pour le public](https://www.nutritionclinique.fr)
- Appli patient pour enrichir: Poids plus ([Android](https://play.google.com/store/apps/details?id=com.poids&hl=fr), [iOS](https://apps.apple.com/fr/app/poidsplus/id1308936761))

### Compléments nutritionnels oraux (CNO)  

Place des compléments alimentaires:

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
{{%collapse "Surveillance de la renutrition" %}}

Réévaluation de la dénutrition **à chaque consultation**, au moins mensuelle (trimestrielle chez l'adulte).

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

### Exemple de questions d'évaluation du suivi de la dénutrition

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

{{< mermaid title="Prise en charge d'une personne à risque de dénutrition. Dr JB Fron d'après HAS/FFN 2021" >}}
graph TB
accTitle:Prise en charge d'une personne à risque de dénutrition d'après HAS et FFN 2021
  fdr["<b>Personne à risque de dénutrition</b><br>—<br>- +70 ans (dépistage annuel)<br>- Cancer<br>- Maladie inflammatoire<br>- Escarre<br>- Démence, dégénératif<br>- Troubles de déglutition et bucco-dentaires<br>- Toxicomanie<br>- Régime amaigrissant"]
  style fdr stroke:#4150f5, stroke-width:1px
    fdr -- Repérage --> MNA("Score MNA ≤ 11 ?")
      MNA -- Oui --> critères("<b>≥ 1 critère phénotypique</b><br>—<br>- PP ≥ 5% en 1 mois<br>ou ≥ 10% en 6 mois ou avant la maladie<br>- IMC &lt; 18,5 (22 si âgée)<br>- Sarcopénie<br>- Enfant: stagnation pondérale avec<br>décalage poids 2 couloirs<br>—<br><b>≥ 1 critère étiologique</b><br>—<br>- Réduction apports ≥ 50% &gt; 1 sem<br>ou toute réduction &gt; 2 sem<br>- Malabsorption, maldigestion<br>- Situation d'agression")
        critères --> bilan("- Bilan étiologique et de sévérité<br>- Degré de sévérité")
          bilan --> traitement("- Traitement étiologique<br>- Enrichir l'alimentation<br>- Avis diététique<br>- Soins bucco-dentaires")
            traitement --> surveillance("- Suivi à 1-3 mois<br>- Poids 1/sem<br>± CNO")
              surveillance -.-> ent("- Avis spécialisé<br>± Nutrition entérale")
{{< /mermaid >}}

> CNO = complément alimentaire; MNA = {{%lang%}}Mini Nutritional Assessment{{%/lang%}}; PP = perte de poids, sem = semaine

{{%/collapse%}}
{{%sources%}}

{{< youtube id="1uehBQjbbFU" title="La minute RECO HAS | Dénutrition : pour un meilleur diagnostic (Pr Éric Fontaine)" >}}

- Collège des universitaires français d'hépato-gastro-entérologie (CDU-HGE). Dénutrition chez l'adulte. Réussir ses ECNi. 2022.
- [HAS, FFN. Diagnostic de la dénutrition chez la personne de 70 ans et plus. Recommandation de bonne pratique. Novembre 2021.](https://www.has-sante.fr/jcms/p_3165944/fr/diagnostic-de-la-denutrition-chez-la-personne-de-70-ans-et-plus)
- Prescrire Redaction. Complémentation nutritionnelle orale chez les adultes dénutris : conditions de remboursement en France en 2020. Rev Prescrire. Mai 2020.
- [HAS, FFN. Diagnostic de la dénutrition de l'enfant et de l'adulte. Recommandation de bonne pratique. Novembre 2019.](https://has-sante.fr/jcms/p_3118872/fr/diagnostic-de-la-denutrition-de-l-enfant-et-de-l-adulte)
- [Hankard R; SFP. Établir une stratégie nutritionnelle chez un enfant dénutri. 2017.](https://pap-pediatrie.fr/hepato-gastro/etablir-une-strategie-nutritionnelle-chez-un-enfant-denutri)
- [Hankard R et al; SFP. Dépister la dénutrition de l'enfant en pratique courante. 2012. (PDF)](https://www.sfpediatrie.com/sites/www.sfpediatrie.com/files/medias/documents/recos-sfp-cn_depistage_denutrition_oct_2012_0.pdf)
- [HAS. Stratégie de prise en charge en cas de dénutrition protéino-énergétique chez la personne âgée. Synthèse des recommandations professionnelles. 2007.](https://www.has-sante.fr/jcms/c_546549/fr/strategie-de-prise-en-charge-en-cas-de-denutrition-proteino-energetique-chez-la-personne-agee)
- [SFNCM. Dénutrition chez l'adulte de 18 à 69 ans et la personne de 70 ans et plus. (PDF)](https://www.ameli.fr/sites/default/files/Documents/Affiche_D%C3%A9nutrtion_SFNCM_14.pdf)
- [Lutte contre la dénutrition](https://www.luttecontreladenutrition.fr)

### Bibliographie en attente

- [Collège National des Pédiatres Universitaires (CNPU), Collège National Hospitalier et Universitaire de Chirurgie Pédiatrique (CNHUCP). Dénutrition. Pédiatrie Réussir son DFASM. 2021.](https://www.pedia-univ.fr/deuxieme-cycle/referentiel/gastroenterologie-nutrition-chirurgie-abdominopelvienne/denutrition)
- [Société Francophone de Nutrition Clinique et Métabolisme - Référentiels](https://www.sfncm.org/outils-education/recommandations/referentiels)

{{%/sources%}}
{{% modal title="Définition de la sarcopénie" id="modal-sarcopenie"%}}

{{< clinique/denutrition-sarcopenie >}}

{{% /modal %}}
{{% modal title="Mini Nutritional Assessment version courte" id="modal-mna"%}}

{{< scores/mna >}}

{{% /modal %}}
