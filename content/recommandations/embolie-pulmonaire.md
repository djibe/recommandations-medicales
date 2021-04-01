+++
title = "Embolie pulmonaire"
prefix = "l'"
shortname = "EP"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2021-03-18T20:16:00+02:00
publishdate = 2021-03-18
lastmod = 2021-03-18
specialites = ["cardiologie"]
annees = "2019"
sources = ["SFC", "SPLF"]
tags = ["dyspnee", "MVTE"]
anglais = []
sctid = ""
draft = true
flowchart = true
image = true
imageWEBP = true
imageSrc = "scientificanimations.com, CC BY-SA 4.0"
todo = "flowchart, carnet AVK"
+++

{{%article-summary%}}

- Évoquer devant une dyspnée, douleur thoracique ou malaise non expliqué par un autre diagnostic
- Signes de gravité: hypotension artérielle, état de choc, détresse respiratoire
- La suspicion clinique d'un cas stable est évaluée avec le score de Genève ou de Wells
- Une suspicion faible d'EP peut être infirmée par la règle PERC  
Sauf > 50 ans, grossesse ou post-partum (> urgences)
- Adresser aux urgences toute suspicion d'EP non infirmée par la règle PERC
- Voir [thrombose veineuse profonde]({{< relref "thrombose-veineuse-profonde.md" >}})

{{%/article-summary%}}

{{%collapse "Définition" %}}

### Abréviations

**AOD:** anticoagulant oral direct (ex-NACO)  
**EP:** embolie pulmonaire  
**MVTE:** maladie veineuse thromboembolique  
**PERC:** {{%lang%}}Pulmonary Embolism Rule-out Criteria{{%/lang%}}  
**TVP:** thrombose veineuse profonde

{{% /collapse %}}
{{%collapse "Épidémiologie" %}}

Hospitalisations annuelles: 35.000  
Mortalité hospitalière: 5%

{{% /collapse %}}
{{%collapse "Signes de gravité" %}}

{{%warning%}}
Appel du 15 en présence d'au moins 1 parmi:

- Hypotension artérielle
- État de choc
- Détresse respiratoire
{{%/warning%}}

{{% /collapse %}}
{{%collapse "Probabilité clinique d'embolie pulmonaire" %}}

{{%warning%}}&ge; 50 ans, grossesse ou post-partum = Urgences{{%/warning%}}

Sauf critères de gravité ou profil cité ci-dessus, utiliser l'un de ces scores validés pour déterminer la probabilité clinique d'embolie pulmonaire.

{{< scores/wells-ep >}}

### Signes cliniques d'une embolie pulmonaire

Évoquer une embolie pulmonaire devant des signes respiratoires ou hémodynamiques associés à:

- Dyspnée
- Douleur thoracique atypique
- Malaise

{{% /collapse %}}
{{%collapse "Éliminer une embolie pulmonaire - Règle PERC" %}}

{{%info%}}
La **règle PERC** permet d'éliminer une suspicion faible d'embolie pulmonaire **avant 50 ans, en-dehors de la grossesse et du post-partum**.  
L'hémodynamique doit être stable.
{{%/info%}}

La réponse aux 8 questions suivantes doit être négative pour infirmer une suspicion faible d'EP:

1. Âge ≥ 50 ans
2. Fréquence cardiaque ≥ 100/min
3. SpO<sub>2</sub> < 95% AA
4. Hémoptysie ?
5. Œdème unilatéral d’un membre inférieur ?
6. Traitement œstrogénique ?
7. Antécédent personnel MVTE ?
8. Hospitalisation pour traumatisme ou chirurgie sous AG dans les 4 dernières semaines ?

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

{{%warning%}}Toute suspicion d'EP doit être explorée aux urgences (sauf probabilité faible infirmée par la règle PERC){{%/warning%}}

{{%info%}}
Si réception de D-dimères pour suspicion d'EP au cabinet:

- Le diagnostic d'EP est infirmé quand les D-dimères sont négatifs
- Le seuil de positivité des D-dimères après 50 ans est l'âge x 10
- Adresser aux urgences en cas D-dimères positifs pour angioscanner
{{%/info%}}

### Examens: pour en savoir plus

#### D-dimères

Indications:

- Probabilité clinique faible non écartée par la règle PERC
- Probabilité clinique intermédiaire

#### Angioscanner thoracique

Indications:

- D-dimères augmentés  
En prenant en compte l'adaptation de l'âge après 50 ans.
- Probabilité clinique forte

{{% /collapse %}}
{{%collapse "Traitement" %}}

{{%warning%}}Toute suspicion d'EP doit être explorée aux urgences (sauf probabilité faible infirmée par la règle PERC).{{%/warning%}}

{{% /collapse %}}
{{%collapse "Surveillance" %}}

- Consultation de suivi dans les 30 jours de la sortie
  - Efficacité et tolérance du traitement
  - Observance
  - Adéquation du traitement  
  Risque hémorragique, posologie
  - Bilan étiologique  
  Indication à la recherche de cancer, thrombophilie, SAPL.
  - Rechercher une dyspnée d'effort ({{< modal-btn score-nyha >}}score NYHA{{< /modal-btn >}}, {{< modal-btn score-mmrc >}}score mMRC{{< /modal-btn >}})
- Consultation de suivi à 3 et 6 mois
  - Efficacité et tolérance du traitement
  - Synthèse du bilan étiologique
  - Argumenter la poursuite ou l'arrêt des anticoagulants
- TVP proximale associée:  
chaussettes de contention classe 3 au moins 6 mois.

### Anticoagulation

#### AOD

Seuls apixaban et rivaroxaban ont l'AMM.  
Éducation du patient.

#### AVK

- INR cible 2,5 (2 - 3)
- Éducation du patient
- Carnet de suivi

### Filtre cave

Si posé temporairement, retrait doit être programmé dès la reprise d'Anticoagulation curative.

{{% /collapse %}}
{{%collapse "Source" %}}

[Sanchez O. et al. Recommandations de bonne pratique pour la prise en charge de la maladie veineuse thromboembolique chez l'adulte. Version courte. Revue des Maladies Respiratoires (2019).](https://doi.org/10.1016/j.rmr.2019.01.003)

{{% /collapse %}}
{{% modal title="Échelle NYHA" id="score-nyha"%}}

{{< scores/nyha >}}

{{% /modal %}}
{{% modal title="Échelle de dyspnée du Medical Research Council modifiée" id="score-mmrc"%}}

{{< scores/mmrc >}}

{{% /modal %}}
