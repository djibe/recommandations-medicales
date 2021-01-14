+++
title = "Hypothyroïdie fruste"
prefix = "l'"
shortname = "hThyroïdie fruste"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-07-21T19:40:41+02:00
publishdate = 2020-07-21
lastmod = 2020-07-21
categories = ["endocrinologie"]
guidelineyears = "2019"
sources = ["HAS", "ANSM", "Prescrire"]
tags = ["hypothyroidie", "TSH", "Hashimoto"]
anglais = ["Subclinical hypothyroidism"]
sctid = "54823002"
draft = false
flowchart = true
+++

{{%article-summary%}}

- TSH élevée avec T4L normale
- Indications au traitement  
TSH > 10 mUI/L, anticorps anti-TPO positifs, TSH > 4 mUI/L pendant la grossesse
- Traitement d'épreuve si hypothyroïdie fruste avec signes cliniques évocateurs

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Hypothyroïdie fruste (ou infraclinique)
: **TSH élevée de façon isolée**  .
TSH > 4mUI/L à 2 reprises (espacées d'un mois) avec T4L normale.
: Chez le +80 ans: prendre comme valeur limite haute 7 mUI/L.

[Hypothyroïdie patente]({{< relref "hypothyroidie.md" >}})
: **TSH élevée et T4L diminuée**.

Lorsque la TSH est modérément élevée, de 4 à 10 mUI/L, renouveler le dosage TSH + T4L à 2 mois.

### Épidémiologie

Prévalence en France: 2,5%.

### Évolution

- Normalisation 1/3
- Stabilisation 1/3
- Hypothyroïdie 1/3

{{% /collapse %}}
{{%collapse "Facteurs prédictifs d'évolution vers une hypothyroïdie" %}}

- TSH initiale haute (≥ 10 mUI/L)
- Anticorps anti-TPO positifs
- Age > 60 ans
- Antécédents thyroïdiens
- Antécédents médicamenteux (Amiodarone, Lithium, Interféron)

{{% /collapse %}}
{{%collapse "Clinique" %}}

Clinique inconstante.

Si TSH > 10: augmentation du risque cardio-vasculaire, de répercussions neuro-psychologiques et qualité de vie.

Perturbations du bilan lipidique.

{{% /collapse %}}
{{%collapse "Traitement" %}}

Pas de dépistage de la population générale.  
Dépistage ciblé: femme > 60 ans et facteurs de risque.

### Indications au traitement

- TSH > 10 mUI/L
- Anticorps anti-TPO positifs
- TSH > 4 mUI/L pendant la grossesse
- Traitement d'épreuve si hypothyroïdie fruste avec signes cliniques évocateurs

Débuter la lévothyroxine à posologie basse, croissante par paliers jusqu'à obtenir une TSH normale (voir la [fiche hypothyroïdie]({{< relref "hypothyroidie.md" >}})).

### Femme enceinte

- Possible majoration des risques: hématome rétro-placentaire, prématurité, DRA néonatale.
- Dépistage si signes évocateurs: ATCD thyroïdiens personnels/familiaux, notion d'anticorps thyroïdiens, maladie auto-immune
- Examens: TSH, T4L, anticorps anti-TPO
- Si TSH > 3 mUI/L : surveillance rapprochée avec TSH à 1 mois
- Traitement systématique dès que la TSH > 4 mUI/L
- TSH cible < 2,5 mUI/L

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

**Découverte fortuite de TSH > 4 mUI/L sans signes cliniques:**

- Dépistage chez population à risque (à revoir)
- Bilan systématique

**Bilan à 1 mois avec TSH, T4L, anticorps anti-TPO**

- Si T4L basse : hypothyroïdie (voir fiche)
- Si T4L normale et TSH > 10 mUI/L : traitement immédiat
- Si T4L normale et anticorps anti-TPO+ : traitement immédiat
- Si enceinte avec TSH > 4 mUI/L : traitement immédiat
- Sinon : contrôle TSH à 6 mois puis annuel en l'absence de normalisation

{{< mermaid >}}
graph TB
  decouverte["TSH augmentée"] --"Contrôle à 1 mois"--> TSH["TSH augmentée"] -- "T4L normale" --> hTFruste("Hypothyroïdie fruste") --> anomalies("<b>Anomalies?</b><br>- TSH > 10<br>- Anticorps anti-TPO +<br>- Grossesse et TSH > 4<br>- Clinique d'hypothyroïdie") --"Oui"--> traitement("Traitement")
  style decouverte stroke:#0077ff, stroke-width:1px
  TSH -- "T4L basse" --> hT("Hypothyroïdie patente")
    anomalies --"Non"--> surveillance("Surveillance à 6 mois<br>puis annuelle")
{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Mooijaart SP et al. Association Between Levothyroxine Treatment and Thyroid-Related Symptoms Among Adults Aged 80 Years and Older With Subclinical Hypothyroidism. JAMA. 30 oct 2019;1‑11.](https://jamanetwork.com/journals/jama/fullarticle/2753909)
- [HAS. Hypothyroïdie – pertinence des soins. Mars 2019](https://www.has-sante.fr/portail/jcms/c_2910740/fr/pertinence-des-soins-hypothyroidie)
- [ANSM. Médicaments à base de lévothyroxine. 31/10/2018](https://ansm.sante.fr/S-informer/Actualite/Medicaments-a-base-de-levothyroxine-Point-de-suivi-de-la-diversification-de-l-offre-therapeutique)
- [S. Laboureau-Soares et al. Hypothyroïdies acquises de l'adulte. EMC. Doi 10.1016/S1155-1941(09)50473-8](https://www.em-select.com/article/224074)

{{% /collapse %}}
