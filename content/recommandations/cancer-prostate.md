+++
title = "Cancer de la prostate"
prefix = "le "
shortname = "ADK prostatique"
synonyms = ["Adénocarcinome prostatique"]
auteurs = ["Jean-Baptiste FRON"]
date = 2020-09-27T19:51:30+02:00
publishdate = 2020-09-27
lastmod = 2020-09-27
categories = ["urologie"]
guidelineyears = "2019"
sources = ["EAU"]
tags = ["depistage", "cancer", "PSA"]
anglais = ["Carcinoma of prostate"]
sctid = "254900004"
draft = false
flowchart = true
todo = "<1 ng or 2 ng, Ref HAS, https://curie.fr/dossier-pedagogique/cancer-de-la-prostate-les-facteurs-de-risque"
+++

{{%article-summary%}}

- Proposer le dépistage à partir de 45 ans si espérance de vie ≥ 10 ans.
- Répéter le PSA tous les 1 à 8 ans selon le PSA précédent.

{{%/article-summary%}}
{{%collapse "Définition" %}}

Histologie
: **Adénocarcinome** sporadique (80%), héréditaire (10%) ou familial (10%).

Évolution
: Initiale intra-capsulaire (cancer localisé) puis **métastatique ganglionnaire et osseux** (foie et poumon rares).  
< 20% des patients ont des métastases à 10 ans.

Facteurs pronostics
: Volume tumoral, **score de Gleason** au diagnostic.

Facteurs de risque
: Principal: Âge > 55 ans.  
Héréditaire si ≥ 3 cas dans les apparentés au 1<sup>er</sup> degré.

{{% /collapse %}}
{{%collapse "Épidémiologie" %}}

- 1<sup>er</sup> cancer en France (71.000 cas/an)
- 3<sup>e</sup> cause de décès par cancer de l'homme (8700/an).
- Âge médian au diagnostic: 74 ans.

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

- Antécédents familiaux de cancer prostatique
- Symptômes frustes  
Génito-urinaire  
Métastatique (douleurs lombaires osseuses surtout)

### Examen clinique

**Toucher rectal**  
Physiologique: prostate souple, régulière, élastique, bords bien délimités, sillon médian palpable.

{{% /collapse %}}
{{%collapse "Dépistage" %}}

{{%info%}}Dosage du PSA pour tous les hommes à partir de 45 ans ayant une espérance de vie ≥ 10 ans.{{%/info%}}

Le dépistage est répété selon le résultat:

- < 2 ng/mL - dépistage répété tous les 8 ans
- 2-4 ng/mL - dépistage tous les 2-4 ans
- ≥ 4 ng/mL - adresser à l’urologue pour stratification du risque (IRM, biopsies)

Arrêter le dépistage quand l’espérance de vie est < 10 ans.

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid >}}
graph TB
  homme["Homme ≥ 45 ans<br>et Espérance de vie > 10 ans"] --> symptomes("Symptômes urinaires<br>Signes d'alarme<br>≥ 3 cas au 1<sup>er</sup> degré")
  style homme stroke:#0077ff, stroke-width:1px
    symptomes -- Non --> PSA
      PSA -- "&lt; 2 ng/mL" --> leger(PSA à 8 ans)
      PSA -- "2-4 ng/mL" --> modere(PSA à 2-4 ans)
      PSA -- "≥ 4 ng/mL" --> severe("Urologue<br>Toucher rectal<br>+/- IRM et biopsies")
    symptomes -- Oui --> severe
{{< /mermaid >}}

> Figure. Dépistage du cancer de la prostate et conduite à tenir devant une augmentation du PSA d'après [European Association of Urology 2019](https://www.europeanurology.com/article/S0302-2838(19)30347-1/fulltext)

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Gandaglia G et al. Structured Population-based Prostate-specific Antigen Screening for Prostate Cancer: The European Association of Urology Position in 2019. Eur Urol. août 2019;76(2):142-50](https://www.europeanurology.com/article/S0302-2838(19)30347-1/fulltext)
- [HAS. Détection précoce du cancer de la prostate. Mai 2013.](https://www.has-sante.fr/upload/docs/application/pdf/2013-07/referentieleps_format2clic_kc_prostate_vfinale.pdf)

{{% /collapse %}}
