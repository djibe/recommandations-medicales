+++
title = "Conduite à tenir devant une splénomégalie"
prefix = "la "
shortname = "SM"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-09-27T17:43:41+02:00
publishdate = 2020-09-27
lastmod = 2020-09-27
specialites = ["hematologie"]
annees = "2000"
sources = []
tags = ["splenomegalie"]
anglais = ["Splenomegaly"]
sctid = "16294009"
draft = true
flowchart = true
todo = "TODO: more sources and publish, source on flowchart"
+++

{{%article-summary%}}

À compléter...

{{%/article-summary%}}
{{%collapse "Définition" %}}

Splénomégalie (SM)
: Présence d'une rate palpable chez un adulte.

{{% /collapse %}}
{{%collapse "Diagnostic différentiel" %}}

- Lobe gauche hépatique volumineux
- Tumeur gastrique (grande courbure)
- Tumeur du pancréas (queue)
- Tumeur colique (angle gauche)
- Adénopathie mésentériques ou rétro-péritonéales
- Surrénale hypertrophiée

{{% /collapse %}}
{{%collapse "Étiologie" %}}

Causes les plus fréquentes: **maladies hépatiques** (hypersplénisme), **hématologiques** (aiguës et chroniques) et **infectieuses** (parasitaires++).

### Contexte fébrile

La splénomégalie n'est qu'un symptôme.

- Cirrhose décompensée
- Septicémies  
Maladie d'Osler, brucellose, typhoïde
- Lupus érythémateux aigu disséminé
- Mononucléose infectieuse
- VIH
- Paludisme aigu
- Sarcoïdose
- Leucémie aiguë lymphoblastique ou leucémie lymphoïde chronique (LLC)

### Hémopathies

- Syndromes myéloprolifératifs  
Leucémie myéloïde chronique, Maladie de Vaquez, splénomégalie myéloïde chronique, thrombocytémie essentielle.
- Hémopathies lymphocytaires  
Leucémie lymphoïde chronique, maladie de Waldenström, leucémie à tricholeucocytes
- Lymphomes malins
- Anémies hémolytiques chroniques  
Minkowski-Chauffard, déficit en pyruvate-kinase érythrocytaire, thalassémie  majeure, drépanocytose, hémolyse par auto-anticorps anti-GR.

### Hypertension portale

- Cirrhose
- Blocs sus-hépatiques (syndrome de Budd-Chiari)
- Blocs sous-hépatiques  
Adénopathies  retro-péritonéales, tuberculose, lymphome, métastases, cancers de la tête du pancréas, pancréatite chronique.

### Grosses rates isolées

- Parasitoses  
Kala-Azar, kyste hydatique de la rate
- Kystes spléniques congénitaux
- Fibromes, angiomes spléniques
- Maladies de surcharge
Maladie de Gaucher, de Niemann-Pick.

{{% /collapse %}}
{{%collapse "Clinique" %}}

Le diagnostic est clinique.

### Palpation

{{%class%}}
En décubitus dorsal
{{%/class%}}

### Examen

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Échographie abdominale

Permet de ne pas confondre avec un gros rein gauche ou les autres organes de la région.  
La rate normale ne dépasse pas 12 x 6 x 3 cm (l x L x h).

{{% /collapse %}}
{{%collapse "Traitement de la splénomégalie" %}}

### Chirurgical: la splénectomie

Indications:

- Maladie de Minkowski-Chauffard
- Anémies hémolytiques auto-immunes cortico-résistantes
- Purpuras thrombopéniques cortico-résistants ou cortico-dépendants
- Splénomégalie mal tolérée (douleurs, hypersplénisme important, résistance à la chimiothérapie dans les hémopathies malignes (LMNH,  LLC, leucémie à tricholeucocytes).

Risque chirurgical dans  les  cirrhoses, la splénomégalie myéloïde.

{{% /collapse %}}
{{%collapse "Conduite à tenir chez l'adulte" "show" %}}

{{< mermaid title="Conduite à tenir devant une splénomégalie chez l'adulte" >}}
graph TB
  SM["Splénomégalie de l'adulte"] --> bio("NFS, VS, CRP<br>Bilan hépatique, TP TCA<br>Électrophorèse des protéines<br><br>+")
  style SM stroke:#4150f5, stroke-width:1px
    bio --> aigu("Tableau aigu<br>Fièvre, ADP, cardio,<br>éruption, ictère, angine") --> aiguBio("Hémoccultures<br>Sérologies virales?")
    bio --> hepatique("Hépatique<br>Hépatite, alcool, ictère<br>HTP, ascite") --> hepatiqueBio("Anomalies au 1er bilan")
    bio --> hemopathies("Hémopathies<br>ADP, anémie, hémorragies,<br>ictère, fièvre") --> hemopathiesBio("Myélogramme<br>Biopsie médullaire<br>RT<br>Scanner TA")
{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Pr Pris J. Médecine Toulouse. Orientation diagnostique devant une splénomégalie. (PDF)](http://www.medecine.ups-tlse.fr/dcem3/module14/332%20Orientation%20diagnostique%20devant%20une%20splenomegalie.pdf)

{{% /collapse %}}
