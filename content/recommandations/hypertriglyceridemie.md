+++
id = "019d2fff-a177-7211-b087-46d2d541f878"
title = "Hypertriglycéridémie"
prefix = "l'"
description = "TODO:"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2026-03-27T16:52:41+01:00"
publishdate = "2026-03-30"
lastmod = "2026-03-30"
specialites = ["cardiologie", "endocrinologie"]
annees = "2025"
sources = ["ESC", "EAS"]
tags = ["risque cardiovasculaire"]
english = ["Hypertriglyceridaemia", "hypertriglyceridemia"]
sctid = "302870006"
icd10 = ["E78.1"]
draft = true
image = false
imageSrc = ""
todo = "descr > summary > liens > photo > newsletter > flow > Kanban"
+++

{{%article-summary%}}

TODO: (at the end)

{{%/article-summary%}}
{{%collapse "Définition" %}}

Hypertriglycéridémie
: Taux de triglycérides plasmatiques à jeun supérieur à 2 g/L (2,3 mmol/L -- *ESC/EAS 2019*). Ils sont un facteur indépendant du risque cardiovasculaire (dès 1,5 g/L, mais moindre que le LDL-cholestérol).
: Ses complications sont liées au risque cardiovasculaire et celui de pancréatite aiguë (dès 4,4 g/L mais surtout au-delà de 8,8 g/L -- 10 mmol/L).

> *NB.* Les fibrates ont un effet modéré sur la réduction du taux de triglycérides et ne réduisent pas le risque cardiovasculaire.

### Abréviations

EAL
: exploration d'une anomalie lipidique (ou bilan lipidique)

ESC
: {{%lang%}}European Society of Cardiology{{%/lang%}}

HTG
: hypertriglycéridémie

TG
: triglycérides (ou triacylglycérols)
{.dl-inline}

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

- Antécédents: cardiovasculaires ++, [pancréatite aiguë]({{% relref "pancreatite-aigue.md" %}})
- Antécédents familiaux de dyslipidémie, d'évènements cardiovasculaires
- Apports alimentaires en fructose (fruits, miel) et graisses

### Examen clinique

TODO:

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Bilan de l'hypertriglycéridémie

Le bilan de l'hypertriglycéridémie est celui d'une dyslipidémie:

- Bilan lipidique (EAL, à jeun pendant 10-12h pour l'hypertriglycéridémie)  
  2 dosages espacés de 1-12 semaines. Jeûne privilégié en cas de syndrome métabolique, diabète, hypertriglycéridémie.
- ± Glycémie à jeun
- Recherche d'hyperlipidémie secondaire:
  - TSH
  - PAL, bilirubine
  - albuminurie/créatininurie
- Pré-thérapeutique: ALAT, CPK
- Selon le niveau de risque cardiovasculaire: consultation de cardiologie

> En cas de LDL très élevé (> 2 g/L), évoquer une [hypercholestérolémie familiale]({{% relref "hypercholesterolemie-familiale.md" %}}) et adresser au spécialiste.

**NB.** Une hypertriglycéridémie peut fausser le résultat de l'HbA~1c~.

{{% /collapse %}}
{{%collapse "Traitement de l'hypertriglycéridémie" %}}

> [!INFO]
> << Les fibrates ne sont pas indiqués pour réduire le cholestérol sérique ou le LDL-cholestérol. >> -- *ESC 2025*

Les **statines** sont le traitement de référence d'une hypertriglycéridémie (réduction de 10 à 20 %). **Il n'existe pas de cible de triglycéridémie**, mais un taux < 1,5 g/L (1,7 mmol/L) indique un risque cardiovasculaire plus faible et un taux plus élevé nécessite une réévaluation cardiovasculaire.

Recommandations pour la prise en charge de l'hypertriglycéridémie:

- Évaluation du risque cardiovasculaire ({{< modal-btn modal-risque-cv >}}prévention secondaire{{< /modal-btn >}}, [prévention primaire]({{% relref "score2.md" %}}))
- **Mesures hygiéno-diététiques pour la réduction des triglycérides:** {{< modal-btn modal-regime >}}régime méditerranéen{{< /modal-btn >}} ou DASH
  - Perte de poids, réduire l'alcool et les sucres (dont le fructose)
  - Réduire les graisses saturées
  - Augmenter les apports en oméga 3
  - Augmenter les apports en fibres
  - Activité physique
- Si TG > 2 g/L (2,3 mmol/L) et échec des mesures hygiéno-diététiques: {{< modal-btn modal-statine-intensite >}}statine{{< /modal-btn >}} de forte intensité
  - Si TG > 2 g/L sous statine en prévention primaire ou à haut risque cardiovasculaire: l'ajout de fénofibrate ou bézafibrate peut être considéré
- ~~Icosapent éthyl~~ (NR)
- Correction des facteurs de risque cardiovasculaire:
  - [Sevrage tabagique]({{% relref "arret-tabac.md" %}})
  - Réduction de l'alcool
  - Activité physique quotidienne (30-60 minutes/j d'{{< modal-btn modal-met >}}intensité modérée{{< /modal-btn >}}), entraînement en résistance ≥ 2 j/semaine
  - Lutte contre la sédentarité
  - Correction d'un surpoids et d'une obésité abdominale (tour de taille femme/homme ≥ 88/102 cm)
  - Dépistage de l'[hypertension artérielle]({{% relref "hypertension-arterielle.md" %}})



{{% /collapse %}}
{{%sources%}}

- [Mach F, et al. 2025 Focused Update of the 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J. 2025.](https://academic.oup.com/eurheartj/article/46/42/4359/8234482)
- WIP [Collège National des Enseignants de Cardiologie, Société Française de Cardiologie. Dyslipidémies. Item 223. Médecine cardiovasculaire - Réussir son DFASM. 2022.](https://www.sfcardio.fr/formation/dfasm/)
- {{< references/esc-cvd >}}
- [HAS. VAZKEPA (isocapent éthyl). Commission de la transparence. 2021.](https://www.has-sante.fr/jcms/p_3314513/fr/vazkepa-isocapent-ethyl)
- [Mach F, et al. 2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J. 2020.](https://academic.oup.com/eurheartj/article/41/1/111/5556353)

### Bibliographie en attente

- Prescrire
- [Bouillet B, Boulestreau R, Aboyans V, et al. Management of dyslipidemia in adults. A consensus statement from the French Society of Endocrinology (SFE), the French-speaking Diabetes Society (SFD), the New French-speaking Atherosclerosis Society (NSFA) and the French Society of Cardiology (SFC). Arch Cardiovasc Dis. 2026.](https://www.sciencedirect.com/science/article/pii/S1875213626000057)
- Collège endoc

{{%/sources%}}
{{% modal title="Régime méditerranéen" id="modal-regime"%}}

{{< traitements/regime-mediterraneen >}}

{{% /modal %}}
{{% modal title="Intensité d'activité physique et MET" id="modal-met"%}}

{{< clinique/activite-physique-intensite >}}

{{% /modal %}}
{{% modal title="Statines et réduction du LDL" id="modal-statine-intensite"%}}

{{< traitements/statine-intensite >}}

{{% /modal %}}
{{% modal title="Risque cardiovasculaire selon ESC 2025" id="modal-risque-cv"%}}

{{< clinique/risque-cardiovasculaire >}}

{{% /modal %}}
