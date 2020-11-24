+++
title = "Toux chronique"
prefix = "la "
shortname = "toux"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-09-15T10:55:41+02:00
publishdate = 2020-09-15
lastmod = 2020-09-15
categories = ["pneumologie"]
guidelineyears = "2020"
sources = ["SFORL", "RevMed"]
tags = ["toux", "RGO", "asthme", "ORL"]
anglais = ["chronic cough"]
sctid = "68154008"
draft = false
todo = "spirométrie?, ttt épreuve?, EOGD?, MAJ graph"
+++

{{%article-summary%}}

- Recommandations pour la toux chronique native (voir Définitions)
- Vérifier les signes de gravité
- Radio de thorax et spirométrie
- Éviction IEC et tabac puis traitement d'épreuve de la cause la plus probable
- 3 causes majeures +/- surajoutées: asthme, STOVAS, RGO
- Traitement d'épreuve important et long

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Toux chronique native
1. Durée > 3 semaines
1. Sans tendance à l'amélioration
1. En dehors d'un épisode identifié susceptible d'être en cause

Toux aiguë
: Épisode de toux d'une durée de moins de 3 semaines.

Toux subaiguë
: Épisode de toux d'une durée de 3 à 8 semaines.

Toux chronique
: Épisode de toux d'une **durée supérieure à 8 semaines** (Irwin et coll. 1998 gB).

Syndrome de toux d'origine des voies aériennes supérieures (**STOVAS**)
: Désigne les pathologies stimulant les récepteurs de toux (par production de mucus ou irritation).  
Aussi appelé **écoulement postérieur**.  
Se manifeste par une congestion nasale, un écoulement postérieur ou une rhinorrhée.
: Comprend: rhinite allergique, rhinite non allergique (vasomotrice par stimulus olfactif, changement de température, humidité), rhinite post-infectieuse, sinusite bactérienne, rhinite sur anomalie anatomique (déviation septale, polypes) ou rhinite irritative (droid, fumée, irritant)

{{% /collapse %}}
{{%collapse "Signes de gravité" %}}

{{% danger %}}
- AEG
- Syndrome infectieux (fièvre, sueurs nocturnes…)
- Dyspnée d’effort
- Hémoptysie
- Apparition/modification de la toux chez un fumeur
- Dysphonie
- Dysphagie
- Fausses routes
- Adénopathie(s) cervicale(s) suspecte(s)
- Anomalies majeures de l’examen clinique cardiopulmonaire
{{%/danger%}}

{{% /collapse %}}
{{%collapse "Étiologie chez l'adulte" %}}

**Causes devant être éliminées:**

### Médicamenteuse

- **IEC**  
{{%class%}}3/4 des toux médicamenteuses. Présente chez 5 à 20% des patients traités. À l'arrêt, résolution en 1 jour à 1 mois.{{%/class%}}
- Autres  
Sartans, bêta-bloquants, interféron alpha 2b, thérapeutiques inhalées.
- Plus rares  
Morphine et dérivés, méthotrexate.

### Coqueluche

### Tabagisme  

Discerner la toux par irritation de la **BPCO** et du **cancer des VADS**.

---

Autres causes à éliminer (par ordre anatomique):

### Cause ORL

- Syndrome de toux d'origine des voies aériennes supérieures (STOVAS ou écoulement postérieur)
- Asthme
- [RGO]({{< ref "reflux-gastro-oesophagien.md" >}})

Autres causes fréquentes:

- Bronchite chronique à éosinophiles non asthmatique (BENA)  
Toux chronique isolée avec spirométrie normale, bronchoprovocation négative, NO exhalé positif.
- Bronchiectasies
- BPCO

- Hypersensibilité du réflexe à la toux  
Associée dans la plupart des toux chronique. Peut être testée par la capsaïcine.

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

- Antécédents (infections ORL à répétition), terrain atopique
- Traitements en cours  
Vérifier l'imputabilité sur [Pneumotox](https://www.pneumotox.com/drug/index/).
- Tabagisme et drogues
- Profession et expositions professionnelles
- Caractère invalidant
  - Retentissement physique ou psycho-social
  - Toux insomniante, émétisante, asthéniante
  - Fractures de côte, douleur musculaire aiguë, révélation/majoration de hernie ou prolapsus
  - Perte d’urines, céphalées, perte de connaissance
- Signes de gravité (voir chapitre ci-dessus)
- Caractères de la toux
  - Rythme nyctéméral et saisonnier
  - Symptômes ORL associés
  - Facteurs aggravants et calmants

#### Orientation étiologique

- Asthme  
Toux spasmodique, nocturne, au froid, à l'effort, en cas de brouillard.
- Rhinite  
Antécédents de sinusite, rhinorrhée postérieure, raclement de gorge, obstruction nasale, troubles de l'odorat.
- Reflux gastro-œsophagien  
Survenue après les repas ou en position penchée en avant ou décubitus.

La toux peut être multifactorielle.

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Radiographie thoracique

**La radiographie thoracique (RT) de face est systématique.**

### Spirométrie

**La spirométrie est systématique dans le bilan d'une toux chronique.** (RevMedCH)

{{% /collapse %}}
{{%collapse "Traitement d'épreuve" %}}

### D'un STOVAS

Corticoïde nasal (mométasone, fluticasone, budésonide).

Une réponse partielle est en faveur du diagnostic.

Si suspicion persiste malgré échec: **scanner des sinus, consultation ORL**.

### D'un RGO

Traitement d'épreuve par IPP (RevMedCH) (ou EOGD d'emblée selon la SNFGE).

Oméprazole 40mg 20 minutes avant le repas pendant 3 mois.  
Traitement prolongé par adjonction d'une toux réflexe.

### D'un asthme

BDCA.

### Traitement probabiliste combiné

Une autre approche consiste à associer les 3 traitements jusqu'à amélioration. Puis retirer les traitements un à un.

{{% /collapse %}}
{{%collapse "Conduite à tenir chez l'adulte" "show" %}}

{{< mermaid >}}
graph TB
  toux["Toux > 8 semaines"] --> examen("Anamnèse, examen clinique, RT")
  style toux stroke:#6200ee, stroke-width:1px
    examen --> IEC
      IEC("IEC ou tabac") --Arrêt--> resolution(Résolution) --Non--> RT
    examen --> RT(Radio évocatrice ?)
      RT --Oui--> investigation("Investigations<br>Traitement spécifique")
      RT --Non--> epreuve("Traitement d'épreuve<br>Asthme (3-6 sem), STOVAS (3-6 sem) ou RGO (2-3 mois)<br>ou combiné")
        epreuve -.-> stovas("Échec mais suspicion STOVAS") --> scanner("Scanner des sinus<br>+ consultation ORL")
{{< /mermaid >}}

**NB.** La SNFGE préconise une EOGD devant une toux chronique (signe atypique de RGO).

{{% /collapse %}}
{{%collapse "Sources" %}}

- [SFORL. Recommandation pour la pratique clinique - La toux chronique chez l'adulte. Texte court. 06/2020](https://www.sforl.org/wp-content/uploads/2020/02/TOUX-CHRONIQUE-ADULTE-long.pdf)
- [Revue Médicale Suisse. Toux chronique de l’adulte : évaluation et prise en charge.  Rev Med Suisse 2014; volume 10. 2196-2201 ](https://www.revmed.ch/RMS/2014/RMS-N-451/Toux-chronique-de-l-adulte-evaluation-et-prise-en-charge)

{{% /collapse %}}
