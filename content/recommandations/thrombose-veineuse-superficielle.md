+++
title = "Thrombose veineuse superficielle"
prefix = "la "
shortname = "TVS"
synonyms = ["Phlébite superficielle", "paraphlébite"]
auteurs = ["Jean-Baptiste FRON"]
date = 2021-03-29T10:47:00+02:00
publishdate = 2021-03-29
lastmod = 2021-03-29
specialites = ["cardiologie"]
annees = "2019"
sources = ["SFC", "SPLF"]
tags = ["anticoagulant", "HBPM", "MVTE"]
anglais = []
sctid = ""
draft = true
flowchart = true
image = false
imageSrc = ""
todo = "revoir def, clinique, provoquée ou non, classes contention, revoir molécules cancer"
+++

{{%article-summary%}}

- Échodoppler veineux systématique pour éliminer une TVP surajoutée

TODO:

{{%/article-summary%}}
{{%collapse "Définition" %}}

### Abréviations

**AOD:** anticoagulant oral direct (anciennement NACO)  
**AVK:** anti-vitamine K  
**EP:** embolie pulmonaire  
**HBPM:** héparine de bas poids moléculaire  
**HNF:** héparine non fractionnée  
**LEFt:** Left Edema First trimester  
**MI:** membre inférieur  
**MVTE:** maladie veineuse thromboembolique  
**TIH:** thrombopénie induite à l'héparine  
**TVP:** thrombose veineuse profonde  
**UI:** unités internationales

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Échodoppler veineux

Systématique en suspicion de TVS afin de ne pas méconnaître une TVP.

{{% /collapse %}}
{{%collapse "Traitement" %}}

### Anticoagulation

Ne pas utiliser d'AOD en première intention.  
Associer une contention élastique à visée antalgique.

Conduite à tenir pour une TVS inaugurale selon le résultat de l'écho-doppler:

- Hémorragie active ou risque hémorragique élevé
  - Calcul du risque hémorragique avec le {{< modal-btn modal-score-riete >}}score de RIETE{{< /modal-btn >}}
  - Pas d'anticoagulation
  - Surveillance clinique et écho-doppler de contrôle dans les 7 jours
- TVS symptomatique isolée > 5 cm de longueur située à > 3 cm de la jonction saphéno-fémorale
  - dits critères de Calisto avec doses préventives
  - Fondaparinux SC (Arixtra®) 2,5 mg/j pendant 45 jours
- TVS à < 3 cm de la jonction saphéno-fémorale  
Anticoagulation curative pendant 3 mois.
- Pas de données pour les autres cas de TVS

#### Anticoagulation en récidive de TVS

Première récidive de TVS non provoquée (doses préventives): Fondaparinux SC (Arixtra®) 2,5 mg/j pendant 45 jours.

### Traitement des cas particuliers

Cancer
: Discussion au cas par cas de la poursuite de l'anticoagulation préventive > 45 jours.
: Si extension sous anticoagulation préventive confirmée au doppler: HBPM dose curative pendant 3 mois.

Grossesse
: dd

{{% /collapse %}}
{{%collapse "Conduite à tenir devant une TVS" "show" %}}

{{< mermaid title="Conduite à tenir devant une suspicion de thrombose veineuse superficielle. Dr JB FRON d'après Sanchez 2019" >}}
graph TB
  tvs[Suspicion de TVS]
  style tvs stroke:#006ef4, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Source" %}}

[Sanchez O. et al. Recommandations de bonne pratique pour la prise en charge de la maladie veineuse thromboembolique chez l'adulte. Version courte. Revue des Maladies Respiratoires (2019).](https://doi.org/10.1016/j.rmr.2019.01.003)

{{% /collapse %}}
{{% modal title="Score hémorragique de RIETE" id="modal-score-riete" size="lg"%}}

{{< scores/riete >}}

{{% /modal %}}
