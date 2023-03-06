+++
title = "Hypothyroïdie fruste"
prefix = "l'"
description = "Recommandations pour la prise en charge de l'hypothyroïdie fruste. Surveillance de la TSH et des anticorps et indications au traitement lévothyroxine"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2020-07-21T19:40:41+02:00"
publishdate = "2020-07-21"
lastmod = "2022-10-30"
specialites = ["endocrinologie"]
annees = "2019"
sources = ["HAS", "ANSM"]
tags = ["TSH"]
anglais = ["Subclinical hypothyroidism"]
sctid = "54823002"
icd10 = "E03.8"
image = true
imageSrc = "Illustration de la thyroïde par le National Institutes of Health (NIH) sur Foter.com / CC BY-NC"
flowchart = true
todo = "read MAJ https://www.em-select.com/article/1229908, simplifier ?"
+++

{{%article-summary%}}

- Définition de l'hypothyroïdie fruste: TSH élevée avec T4L normale
- Indications au traitement par lévothyroxine:  
  TSH > 10 mUI/L, anticorps anti-TPO positifs, TSH > 4 mUI/L pendant la grossesse
- Traitement d'épreuve si hypothyroïdie fruste avec signes cliniques évocateurs
- On dit << fruste >> et non << frustre >> (qui n'existe pas, [Académie française](https://www.dictionnaire-academie.fr/article/A9F1803))

Chapitre lié: [hypothyroïdie]({{< relref "hypothyroidie.md" >}})

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Hypothyroïdie fruste (ou infraclinique)
: TSH élevée de façon isolée.  
TSH > 4mUI/L à 2 reprises (espacées d'un mois) avec T4L normale.
: Prévalence de l'hypothyroïdie fruste en France: 2,5%.
: Chez le +80 ans: prendre comme valeur limite haute 7 mUI/L.

Hypothyroïdie patente
: TSH élevée et T4L diminuée (voir [hypothyroïdie]({{< relref "hypothyroidie.md" >}})).

Lorsque la TSH est modérément élevée, de 4 à 10 mUI/L, renouveler le dosage TSH + T4L à 2 mois.

### Évolution de l'hypothyroïdie fruste

Évolution en 3 parts égales vers: une normalisation, une stabilisation ou une évolution vers une [hypothyroïdie clinique]({{< relref "hypothyroidie.md" >}}).

### Facteurs prédictifs d'évolution vers une hypothyroïdie patente

- TSH initiale haute (≥ 10 mUI/L)
- Anticorps anti-TPO positifs
- Age +60 ans
- Antécédents thyroïdiens
- Antécédents médicamenteux  
  Amiodarone, lithium, interféron.

{{% /collapse %}}
{{%collapse "Clinique" %}}

Clinique inconstante au cours de l'hypothyroïdie fruste.  
Perturbations du bilan lipidique.

Si TSH > 10: augmentation du risque cardiovasculaire, des répercussions neuro-psychologiques et de la qualité de vie.

{{% /collapse %}}
{{%collapse "Traitement de l'hypothyroïdie fruste" %}}

Pas de dépistage de l'hypothyroïdie en population générale.  
Dépistage ciblé: femme +60 ans et facteurs de risque.

### Indications au traitement par lévothyroxine

Prise en charge de l'hypothyroïdie fruste en cas de situation:

- TSH > 10 mUI/L
- Anticorps anti-TPO positifs
- TSH > 4 mUI/L pendant la grossesse
- Traitement d'épreuve si hypothyroïdie fruste avec signes cliniques évocateurs

Débuter la lévothyroxine à posologie basse, croissante par paliers jusqu'à obtenir une TSH normale (voir la [fiche hypothyroïdie]({{< relref "hypothyroidie.md" >}})).

### Femme enceinte

Hypothyroïdie fruste et grossesse:

- Possible majoration des risques: hématome rétro-placentaire, prématurité, DRA néonatale
- Dépistage si signes évocateurs: antécédents thyroïdiens personnels/familiaux, notion d'anticorps thyroïdiens, maladie auto-immune
- Examens: TSH, T4L, anticorps anti-TPO
- Si TSH > 3 mUI/L: surveillance rapprochée avec TSH à 1 mois
- Traitement systématique dès que la TSH > 4 mUI/L
- TSH cible < 2,5 mUI/L

{{% /collapse %}}
{{%collapse "Conduite à tenir devant une hypothyroïdie fruste" "show" %}}

**Découverte fortuite de TSH > 4 mUI/L sans signes cliniques:**

- Dépistage chez population à risque (à revoir)
- Bilan systématique

**Bilan à 1 mois avec TSH, T4L, anticorps anti-TPO**.

- Si T4L basse: hypothyroïdie (voir fiche)
- Si T4L normale
  - TSH > 10 mUI/L: traitement immédiat
  - Anticorps anti-TPO+: traitement immédiat
- Si enceinte avec TSH > 4 mUI/L: traitement immédiat
- Sinon: contrôle TSH à 6 mois puis annuel en l'absence de normalisation

{{< mermaid title="Prise en charge de l'hypothyroïdie fruste. Dr JB Fron d'après HAS 2019" >}}
graph TB
accTitle: Prise en charge de l'hypothyroïdie fruste d'après HAS 2019
  decouverte[TSH augmentée] -- Contrôle à 1 mois + T4L--> TSH[TSH augmentée] -- T4L normale --> hTFruste(Hypothyroïdie fruste) --> anomalies("<b>Anomalies?</b><br>—<br>- TSH &gt; 10<br>- Anticorps anti-TPO+<br>- Grossesse et TSH &gt; 4<br>- Clinique d'hypothyroïdie") -- Oui --> traitement(Traitement par lévothyroxine)
  style decouverte stroke:#4150f5, stroke-width:1px
  TSH -- T4L basse --> hT(Hypothyroïdie patente)
    click hT "{{< relref "hypothyroidie.md" >}}" "Ouvrir dans un onglet" _blank
    anomalies -- Non --> surveillance("Surveillance à 6 mois<br>puis annuelle")
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Mooijaart SP et al. Association Between Levothyroxine Treatment and Thyroid-Related Symptoms Among Adults Aged 80 Years and Older With Subclinical Hypothyroidism. JAMA. 2019.](https://doi.org/10.1001/jama.2019.17274)
- [HAS. Hypothyroïdie. Pertinence des soins. 2019.](https://www.has-sante.fr/portail/jcms/c_2910740/fr/pertinence-des-soins-hypothyroidie)
- [Laboureau-Soares S. et al. Hypothyroïdies acquises de l'adulte. EMC. Doi 10.1016/S1155-1941(09)50473-8](https://www.em-select.com/article/224074)

### À lire

- [Lazarus J. et al. 2014 European Thyroid Association Guidelines for the Management of Subclinical Hypothyroidism in Pregnancy and in Children. European Thyroid Journal. 2014.](https://etj.bioscientifica.com/view/journals/etj/3/2/ETJ362597.xml)
- [Pearce S. et al. 2013 ETA Guideline: Management of Subclinical Hypothyroidism. Eur Thyroid J. 2013. (PDF)](https://www.eurothyroid.com/files/download/ETA-Guideline-Management-of-Subclinical-Hypothyroidism.pdf)

{{%/sources%}}
