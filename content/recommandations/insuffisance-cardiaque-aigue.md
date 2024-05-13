+++
title = "Insuffisance cardiaque aiguë (ICA)"
titleSeo = "Insuffisance cardiaque aiguë"
prefix = "l'"
description = "Recommandations pour la prise en charge de l'insuffisance cardiaque aiguë: constantes, SAMU, tableau clinique (OAP, choc cardiogénique) et étiologie arythmie"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2023-09-25T17:35:10+02:00"
publishdate = "2023-10-05"
lastmod = "2023-12-01"
specialites = ["cardiologie"]
annees = "2023"
sources = ["ESC"]
tags = ["dyspnee", "ferritine", "HTA", "risque cardiovasculaire", "toux"]
anglais = ["Acute heart failure (AHF)"]
sctid = "56675007"
icd10 = "I50.9"
image = true
imageSrc = "Turgescence jugulaire droite témoignant d'une insuffisance cardiaque droite. James Heilman, MD, CC BY-SA 3.0, via Wikimedia Commons"
todo = "pediatrie"
flowchart = true
+++

{{%article-summary%}}

- L'insuffisance cardiaque aiguë est l'apparition ou l'aggravation rapide de symptômes ou signes d'insuffisance cardiaque, assez sévères pour nécessiter une évaluation médicale et mener à une hospitalisation ou un passage aux *Urgences*
- Lorsque le médecin généraliste constate des signes et symptômes d'insuffisance cardiaque, l'évaluation des paramètres vitaux et clinique doit être rapide pour décider de l'appel immédiat du SAMU ou non
- Dans l'attente du SAMU: installer en position adaptée, monitorer les constantes, rechercher un facteur déclenchant CHAMPIT (coronarien, hypertension, arythmie, souffle cardiaque, infection), anémie, phlébite
- Électrocardiogramme (ECG) si disponible

Chapitres liés: [fibrillation atriale]({{< relref "fibrillation-atriale.md" >}}), [insuffisance cardiaque chronique]({{< relref "insuffisance-cardiaque-chronique.md" >}}), [hypertension artérielle maligne]({{< relref "hypertension-arterielle-maligne.md" >}}), [embolie pulmonaire]({{< relref "embolie-pulmonaire.md" >}})

{{%/article-summary%}}
{{%collapse "Définition" %}}

Insuffisance cardiaque aiguë
: Définition *ESC 2021*: apparition ou aggravation rapide de symptômes ou signes d'insuffisance cardiaque, assez sévères pour nécessiter une évaluation médicale et mener à une hospitalisation ou un passage aux *Urgences*.
: Le patient nécessite une évaluation urgente, l'introduction ou l'augmentation du traitement intraveineux et un bilan étiologique.
: La mortalité aiguë et à un an est élevée (respectivement 4-10% et 25-30%).

{{% /collapse %}}
{{%collapse "Clinique" %}}

Appel du SAMU en cas de signes de suspicion d'insuffisance cardiaque aiguë mal tolérée ou d'aggravation rapide.
{.alert .alert-warning}

En attendant le SAMU, étayer les tableaux cliniques cardiaques possibles et renseigner pour le SAMU:

- Pression artérielle monitorée, fréquence cardiaque
- Fréquence respiratoire, SpO<sub>2</sub>
- Glycémie capillaire si troubles neurologiques
- Auscultation cardiorespiratoire
- ECG si disponible
- Température, poids habituel, taille
- Antécédents cardiovasculaires (SCA, FA, insuffisance cardiaque ...)
- Facteurs de risque cardiovasculaire
- Traitements en cours
- ECG antérieur
- Contexte: non observance, alitement, long voyage, plâtre, post-opératoire, écart diététique
- Signes d'insuffisance cardiaque droite  
  {{< clinique/insuffisance-cardiaque-droite >}}
- Tableau clinique de l'insuffisance cardiaque aiguë:
  - Œdème aigu du poumon (OAP)  
    Dyspnée, orthopnée, polypnée, cyanose, expectoration mousseuse rose saumonée, grésillement laryngé, wheezing, sibilants ± crépitants.
  - Tamponnade  
    Orthopnée, tachycardie, assourdissement des bruits du cœur, turgescence jugulaire, pouls paradoxal (diminue à l'inspiration profonde).
  - Décompensation aiguë d'insuffisance cardiaque chronique
  - Choc cardiogénique  
    PAS < 90 mmHg ou chute > 30 mmHg pendant ≥ 30 min, choc << froid >>, cyanose, marbrures, oligurie, sueurs, confusion.
- Recherche de facteur de décompensation *CHAMPIT*: coronarien - hypertension - arythmie - mécanique (CIV, insuffisance mitrale aiguë) - [embolie pulmonaire]({{< relref "embolie-pulmonaire.md" >}}) - infection - tamponnade et anémie, phlébite
- Joindre les [directives anticipées]({{< relref "directives-anticipees.md" >}})

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

La batterie d'examens urgents de l'insuffisance cardiaque (**ECG** si disponible, BNP, troponine, radiographie thoracique ...) est hospitalière uniquement.

{{% /collapse %}}
{{%collapse "Traitement de l'insuffisance cardiaque aiguë" %}}

Appel du SAMU en cas de signes de suspicion d'insuffisance cardiaque aiguë mal tolérée ou d'aggravation rapide.
{.alert .alert-warning}

La prise en charge d'une insuffisance cardiaque aiguë est une urgence:

- Décompensation légère: augmentation des diurétiques, contrôles de doses maximales, recherche d'un facteur de décompensation
- OAP: assis ou demis-assis en attendant le SAMU, dérivé nitré sublingual si PAS > 100 mmHg
- Choc cardiogénique: monitoring en attendant le SAMU

{{% /collapse %}}
{{%collapse "Prise en charge de l'insuffisance cardiaque aiguë" "show" %}}

{{< mermaid title="Prise en charge de l'insuffisance cardiaque aiguë par le médecin généraliste. Dr JB Fron d'après ESC 2023 et 2021" >}}
graph TB
  suspicion["<b>Suspicion d'insuffisance<br>cardiaque aiguë</b><br>—<br>Apparition ou aggravation<br>de signes d'IC:<br>- Dyspnée, orthopnée<br>- Œdèmes des membres inférieurs<br>- Hypotension<br>- Cyanose, marbrures<br>- Oligurie, sueurs<br>- Confusion"] --> clinique("<b>Évaluation clinique rapide</b><br>—<br>- Constantes<br>- SpO<sub>2</sub><br>- Glycémie capillaire<br>- Examen cardiovasculaire") --> SAMU(Appel du SAMU) --> attente("Dans l'attente:<br>- Position adaptée<br>- Monitoring<br>- ECG si disponible<br>- Étayer le tableau clinique:<br>coronarien, OAP, tamponnade,<br>infection, anémie ...<br>- Bilans récents")
  style suspicion stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [McDonagh TA et al. 2023 Focused Update of the 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2023.](https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehad195/7246292)
- [McDonagh T et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure: Developed by the Task Force for the diagnosis and treatment of acute and chronic heart failure of the European Society of Cardiology (ESC) With the special contribution of the Heart Failure Association (HFA) of the ESC. European Heart Journal. 2021.](https://doi.org/10.1093/eurheartj/ehab368)
- [Collège National des Enseignants de Cardiologie. Insuffisance cardiaque. Item 232 UE8. Cardiologie 2e édition. Octobre 2019.](https://www.sfcardio.fr/page/chapitre-18-item-234-insuffisance-cardiaque-de-ladulte)

### Bibliographie en attente

[Collège National des Pédiatres Universitaires (CNPU), Collège National Hospitalier et Universitaire de Chirurgie Pédiatrique (CNHUCP). Détresse respiratoire aiguë. Pédiatrie Réussir son DFASM. 2021.](https://www.pedia-univ.fr/deuxieme-cycle/referentiel/pneumologie-cardiologie/detresse-respiratoire-aigue)

{{%/sources%}}
