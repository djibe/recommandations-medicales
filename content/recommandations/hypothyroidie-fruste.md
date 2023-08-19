+++
title = "Hypothyroïdie fruste"
prefix = "l'"
description = "Recommandations pour la prise en charge de l'hypothyroïdie fruste. Surveillance de la TSH et des anticorps anti-TPO et indications au traitement lévothyroxine"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2020-07-21T19:40:41+02:00"
publishdate = "2020-07-21"
lastmod = "2023-03-27"
specialites = ["endocrinologie"]
annees = "2022"
sources = ["HAS", "ANSM"]
tags = ["TSH"]
anglais = ["Subclinical hypothyroidism"]
sctid = "54823002"
icd10 = "E03.8"
image = true
imageSrc = "Illustration de la thyroïde par le National Institutes of Health (NIH) sur Foter.com / CC BY-NC"
flowchart = true
+++

{{%article-summary%}}

- Définition de l'hypothyroïdie fruste: TSH supérieure à la borne supérieure du laboratoire avec T4L dans l'intervalle du laboratoire
- +60 ans: borne supérieure de TSH = décennie du patient (ex. 8 mUI/L de 80 à 89 ans)
- Indications au traitement par lévothyroxine (LT4) pour une hypothyroïdie fruste selon l'intensité des symptômes et un élément parmi:  
  TSH > 10 mUI/L (> 20 si +65 ans et avis entre 10 et 20), anticorps anti-TPO positifs, signes cliniques d'hypothyroïdie, goitre, antécédents cardiovasculaires ou facteurs de risque cardiovasculaire.
- En l'absence de traitement, contrôle de la TSH:
  - À 1 an puis tous les 2-3 ans
  - Si +65 ans: TSH à 3-6 mois puis tous les 6 mois puis annuelle
  - Annuel en antécédent de traitement thyroïdien chirurgical ou radioactif
- Critères très différents pendant la grossesse: voir la section dédiée du chapitre [hypothyroïdie avérée]({{< relref "hypothyroidie.md" >}})
- On dit << fruste >> et non << frustre >> (qui n'existe pas, [Académie française](https://www.dictionnaire-academie.fr/article/A9F1803))

Chapitre lié: [hypothyroïdie avérée]({{< relref "hypothyroidie.md" >}}) (TSH > 10 mUI et T4L < borne inférieure du laboratoire)

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Hypothyroïdie fruste (ou infraclinique)
: TSH élevée de façon isolée.  
TSH > borne supérieure du laboratoire à 2 reprises (espacées de 6 semaines) avec T4L normale.
: Prévalence de l'hypothyroïdie fruste en France: 2,5%.
: Chez le +60 ans: borne supérieure de TSH = décennie du patient (ex. 8 mUI/L de 80 à 89 ans)

Hypothyroïdie avérée
: TSH > 10 mUI/L (20 si +65 ans) et T4L < borne inférieure du laboratoire (voir [hypothyroïdie avérée]({{< relref "hypothyroidie.md" >}})).

Lorsque la TSH est modérément élevée, de 4 à 10 mUI/L, renouveler le dosage TSH + T4L à 6 semaines.

### Évolution de l'hypothyroïdie fruste

Évolution en 3 parts égales vers: une normalisation, une stabilisation ou une évolution vers une [hypothyroïdie clinique]({{< relref "hypothyroidie.md" >}}).

### Facteurs prédictifs d'évolution vers une hypothyroïdie patente

- TSH initiale haute (> 10 mUI/L)
- Anticorps anti-TPO positifs
- Age +65 ans
- Antécédents thyroïdiens
- Antécédents médicamenteux  
  Amiodarone, lithium, interféron.

{{% /collapse %}}
{{%collapse "Clinique" %}}

Clinique inconstante au cours de l'hypothyroïdie fruste.  
Perturbations du bilan lipidique.

Si TSH > 10 mUI/L: augmentation du risque cardiovasculaire, des répercussions neuro-psychologiques et de la qualité de vie.

{{% /collapse %}}
{{%collapse "Traitement de l'hypothyroïdie fruste" %}}

Pas de dépistage de l'hypothyroïdie en population générale.

### Indications au traitement par lévothyroxine

Prise en charge substitutive de l'hypothyroïdie fruste en cas de:

- TSH > 10 mUI/L  
  \> 20 si +65 ans et avis entre 10 et 20
- Anticorps anti-TPO positifs
- Signes cliniques d'hypothyroïdie
- Goitre
- Antécédents cardiovasculaires ou facteurs de risque cardiovasculaire

Débuter la lévothyroxine à 25-50 µg/j, avec paliers de 12 µg toutes les 6-8 semaines (voir la [fiche hypothyroïdie]({{< relref "hypothyroidie.md" >}})).

En l'absence d'amélioration clinique malgré une TSH normalisée sur 3-4 mois, l'arrêt du traitement peut se discuter.

{{%info%}}
Dans les autres cas, surveillance de la TSH:

- À 1 an puis tous les 2-3 ans si TSH stable
- Si +65 ans: TSH à 3-6 mois, renouvelée 6 mois plus tard puis annuelle si stable
- Annuelle en cas d'antécédent de traitement thyroïdien chirurgical ou radioactif
{{%/info%}}

{{% /collapse %}}
{{%collapse "Prise en charge de l'hypothyroïdie fruste" "show" %}}

{{< mermaid title="Prise en charge de l'hypothyroïdie fruste. Dr JB Fron d'après HAS 2022" >}}
graph TB
  decouverte["TSH augmentée<br>chez l'adulte"] -- Contrôle à 6 semaines + T4L --> TSH["TSH &gt; borne supérieure<br>(corrigée chez le +60 ans)"] -- T4L normale --> hTFruste(Hypothyroïdie fruste) --> anomalies("<b>Anomalies?</b><br>—<br>- TSH &gt; 10 mUI/L (20 si +65 ans)<br>(+65 ans: avis entre 10 et 20)<br>- Anticorps anti-TPO+<br>- Clinique d'hypothyroïdie<br>- Goitre<br>- Maladie ou facteurs de risque<br>cardiovasculaire") -- Oui --> traitement("Traitement par lévothyroxine:<br>débuter à 25-50 µg<br>(demi-dose si +65 ans fragile)<br>et suivi classique")
  click traitement "{{< relref "hypothyroidie.md" >}}" "Ouvrir dans un onglet" _blank
  style decouverte stroke:#4150f5, stroke-width:1px
  TSH -- T4L basse --> hT("Hypothyroïdie avérée")
    click hT "{{< relref "hypothyroidie.md" >}}" "Ouvrir dans un onglet" _blank
    anomalies -- Non --> surveillance("- Surveillance à 1 an<br>puis tous les 2-3 ans<br>- Rapprochée si +65 ans<br>ou chirurgie/irradiation thyroïdienne")
  decouverte -- "TSH &gt; 10<br>et T4L &lt; borne inf." --> hT
{{< /mermaid >}}

> T4L "normale" et "basse" fait référence aux valeurs d'intervalle du laboratoire

{{% /collapse %}}
{{%sources%}}

- [HAS. Prise en charge des hypothyroïdies. 2022.](https://www.has-sante.fr/jcms/p_3216305/fr/prise-en-charge-des-dysthyroidies-chez-l-adulte)
- [Mooijaart SP et al. Association Between Levothyroxine Treatment and Thyroid-Related Symptoms Among Adults Aged 80 Years and Older With Subclinical Hypothyroidism. JAMA. 2019.](https://doi.org/10.1001/jama.2019.17274)
- [HAS. Hypothyroïdie. Pertinence des soins. 2019.](https://www.has-sante.fr/portail/jcms/c_2910740/fr/pertinence-des-soins-hypothyroidie)
- [Laboureau-Soares S. et al. Hypothyroïdies acquises de l'adulte. EMC. Doi 10.1016/S1155-1941(09)50473-8](https://www.em-select.com/article/224074)

### Bibliographie en attente

- [Lazarus J. et al. 2014 European Thyroid Association Guidelines for the Management of Subclinical Hypothyroidism in Pregnancy and in Children. European Thyroid Journal. 2014.](https://etj.bioscientifica.com/view/journals/etj/3/2/ETJ362597.xml)
- [Pearce S. et al. 2013 ETA Guideline: Management of Subclinical Hypothyroidism. Eur Thyroid J. 2013. (PDF)](https://www.eurothyroid.com/files/download/ETA-Guideline-Management-of-Subclinical-Hypothyroidism.pdf)

{{%/sources%}}
