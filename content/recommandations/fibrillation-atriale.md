+++
title = "Fibrillation atriale"
prefix = "la "
shortname = "FA"
synonyms = ["Fibrillation auriculaire"]
auteurs = ["Jean-Baptiste FRON"]
date = 2020-10-05T17:43:41+02:00
publishdate = 2020-10-05
lastmod = 2020-10-05
categories = ["cardiologie"]
guidelineyears = "2013"
sources = ["SFC", "SFGG"]
tags = ["ACFA", "AOD", "anticoagulant", "SAOS"]
anglais = ["MSM"]
sctid = "76102007"
draft = true
todo = "ESC 2020, Source 2013 bonne pour EGS, source 2013 pour AVK sujet âgé"
+++

{{%article-summary%}}

- Le diagnostic est clinico-ECG

{{%/article-summary%}}
{{%collapse "Définition" %}}

Fibrillation atriale (FA)
: Arythmie caractérisée par une activation atriale anarchique désorganisant la fonction mécanique des oreillettes.
: Le flux sanguin est limité avec constitution de caillots pouvant être libérés sous forme d'emboles artériels.
: Toutes les cardiopathies peuvent se compliquer de FA.

FA paroxystique
: Épisodes cédant spontanément en moins de 7 jours.

FA persistante
: Épisode persistant plus de 7 jours sans résolution spontanée.
: Devient permanente quand une cardioversion n'a pas été proposée ou a échoué.

FA permanente
: Tous les ECG sont en FA pendant au moins 1 an.

FA de détection récente
: Découverte de la FA sans aucun recul pour typer la durée de l'épisode.

{{% /collapse %}}
{{%collapse "Épidémiologie" %}}

600.000 à 1 million de patients, les 2/3 ont plus de 75 ans.

Prévalence augmente avec l'âge et atteint 10-20% après 80 ans.

Coût de 3000€/patient/an.

Cout globale de 2,5 milliards (50% liés aux hospitalisations).

{{% /collapse %}}
{{%collapse "Facteurs favorisants" %}}

- Facteurs de risque cardiovasculaire
  - Âge
  - Hypertension artérielle
  - Diabète
  - Obésité
- Insuffisance cardiaque
- Insuffisance coronaire

### Causes extra-cardiaques

Recherche systématique.

- Infection broncho-pulmonaire
- Iatrogénie  
Diurétiques, théophylline, salbutamol, anti-arythmique
- Hypokaliémie
- Hyperthyroïdie
- Embolie pulmonaire
- BPCO
- Insuffisance respiratoire
- Syndrome d'apnées du sommeil

{{% /collapse %}}
{{%collapse "Complications" %}}

La fibrillation atriale augmente le risque de mortalité de 50 à 90%.

- Accident vasculaire cérébral (AVC)
- Embolie
- Démence (+ 40%)

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

- FRCV
- Traitements en cours
- Symptômes  
dyspnée, palpitations, douleur thoracique, malaises, chutes, syncope, asthénie, anxiété

Facteurs déclenchants
Ancienneté

Pouls irrégulier
Recherche comorbidités
Complications
  HTA

### Évaluation gériatrique standardisée

- Cognitif. MMSE  
Plus rapides: MIS (Memory Impairment Screen), test des 5 mots, test de l'horloge
- Dépendance  
ADL ou IADL
- Symptômes dépressifs
- Etat nutritionnel
- Risque de chute
- Contexte de vie

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### ECG

Systématique pour confirmer le diagnostic:  
Absence d'onde P, trémulation de la ligne de base, rythme irrégulier.

### Bilan biologique

- NFS
- Ionogramme sanguin, créatininémie
- Glycémie à jeun
- TP, TCA
- TSH

Point d'appel: CRP, BH, troponine, albuminémie, BU
Si digoxine: digoxinémie

### Radiographie thoracique (RT)

Non SYS

### Echocardiographie transthoracique (ETT)

SYS

### Holter-ECG

Indications:

- Lipothymies, syncopes
- Insuffisance cardiaque non expliquée

### ETO

Indications: Cardioversion rapide, AVC à répétition.

{{% /collapse %}}
{{%collapse "Prévention" %}}

- Contrôle des facteurs de risque cardiovasculaire
- Limiter la consommation d'alcool (source)

{{% /collapse %}}
{{%collapse "CHA2DS2VASc" "show" %}}

Score proposé en 2010 par l'ESC (source 44).

<div class="alert border rounded-lg mb-4 mb-lg-5" style="max-width: 800px">
  <div class="row">
    <div class="col-12 col-md-9">
      <input type="checkbox" id="age75" class="d-none" value="2">
      <label for="age75" class="chip chip-action chip-filter">Age ≥ 75</label>
      <input type="checkbox" id="age65" class="d-none" value="1">
      <label for="age65" class="chip chip-action chip-filter">Age 65 à 74</label>
      <input type="checkbox" id="hta" class="d-none" value="1">
      <label for="hta" class="chip chip-action chip-filter">HTA</label>
      <input type="checkbox" id="diabetes" class="d-none" value="1">
      <label for="diabetes" class="chip chip-action chip-filter">Diabète</label>
      <input type="checkbox" id="insuff" class="d-none" value="1">
      <label for="insuff" class="chip chip-action chip-filter">Insuffisance cardiaque/Dysfonction VG</label>
      <input type="checkbox" id="stroke" class="d-none" value="2">
      <label for="stroke" class="chip chip-action chip-filter">Antécédent AVC/AIT</label>
      <input type="checkbox" id="woman" class="d-none" value="1">
      <label for="woman" class="chip chip-action chip-filter">Femme > 65 ans</label>
      <input type="checkbox" id="disease" class="d-none" value="1">
      <label for="disease" class="chip chip-action chip-filter">Maladie vasculaire (IDM, AOMI, plaque aortique)</label>
    </div>
    <div class="col-12 col-md-3">
      <p class="typography-overline text-black-secondary mt-4 mt-md-0 mb-1">Score CHA<sub>2</sub>DS<sub>2</sub>-VASc</p>
      <p id="counter" class="font-weight-bold" style="font-size: 3rem;line-height: 1.2;margin-bottom: 0;">0</p>
      <p id="explain" class="typography-body-2 text-muted mb-0">Pas d'antithrombotique</p>
    </div>
  </div>
</div>
<script>
  // Score CHA2DS2VASc par djibe
  let score = 0;
  const Text = document.getElementById('explain');
  const Age75 = document.getElementById('age75');
  const Age65 = document.getElementById('age65');
  [...document.querySelectorAll('input[type="checkbox"]')].forEach(function(checkbox) {
    checkbox.addEventListener('change', function(e) {
      if (Age75.checked) {
        Age65.checked = false;
      }
      if (e.target.checked) {
        score += parseInt(e.target.value, 10)
      } else {
        score -= parseInt(e.target.value, 10)
      }
      document.getElementById('counter').innerHTML = score
      if (score === 0){
        Text.innerHTML = 'Pas d\'antithrombotique'
      } else {
        Text.innerHTML = 'Anticoagulation'
      }
    })
  })
</script>

{{% /collapse %}}
{{%collapse "Traitement" %}}

### Anticoagulation

#### 1. Évaluation du risque hémorragique

AVK
Surtout si sujet âgé ou valve mécanique, pb observance?
INR cible 2-3. Contrôle /15-21j

// Intro AVK en gériatrie

Scores HEMORR2HAGES (+ adapaté pour AVK > 80 ans) ou HAS-BLED (ESC, + simple, pop + jeune)

Aspirine si refus anticoag

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Société Française de Gériatrie et Gérontologie et Société Française de Cardiologie. prise en charge de la fibrillation atriale du sujet âgé. La Revue de Gériatrie, tome 38, n°7, septembre 2013](http://www.revuedegeriatrie.fr/documents/fibrillation_atriale.pdf)

{{% /collapse %}}
