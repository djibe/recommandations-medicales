+++
title = "Cancer de la prostate"
prefix = "le "
noindex = true
shortname = "ADK prostatique"
synonyms = ["Adénocarcinome prostatique"]
auteurs = ["Jean-Baptiste FRON"]
date = 2020-09-27T19:51:30+02:00
publishdate = 2020-09-27
lastmod = 2020-09-27
specialites = ["urologie"]
annees = "2019"
sources = ["EAU"]
tags = ["cancer", "depistage"]
anglais = ["Carcinoma of prostate"]
sctid = "254900004"
draft = false
flowchart = true
image = false
imageSrc = ""
todo = "<1 ng or 2 ng, Ref HAS, https://curie.fr/dossier-pedagogique/cancer-de-la-prostate-les-facteurs-de-risque, https://www.urofrance.org/recommandation/recommandations-francaises-du-comite-de-cancerologie-de-lafu-actualisation-2020-2022-cancer-de-la-prostate/?date=&themes=&search="
+++

{{%article-summary%}}

- *Ébauche de fiche*
- Proposer le dépistage à partir de 45 ans si espérance de vie ≥ 10 ans
- Répéter le PSA tous les 1 à 8 ans selon le PSA précédent

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Histologie
: **Adénocarcinome** sporadique (80%), héréditaire (10%) ou familial (10%).

Évolution
: Initiale intra-capsulaire (cancer localisé) puis **métastatique ganglionnaire et osseux** (foie et poumon rares).  
< 20% des patients ont des métastases à 10 ans.

Facteurs pronostiques
: Volume tumoral, **score de Gleason** au diagnostic.

Facteurs de risque du cancer de la prostate
: Principal: Âge > 55 ans.  
Héréditaire si ≥ 3 cas dans les apparentés au 1<sup>er</sup> degré.

### Épidémiologie

- Incidence: 1<sup>er</sup> cancer en France (71.000 cas/an)
- 3<sup>e</sup> cause de décès par cancer de l'homme (8700/an)
- Âge médian au diagnostic: 74 ans

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
{{%collapse "Dépistage du cancer de la prostate" %}}

{{%info%}}Dosage du PSA pour tous les hommes à partir de 45 ans ayant une espérance de vie ≥ 10 ans.{{%/info%}}

Le dépistage est répété selon le résultat:

- < 2 ng/mL: dépistage répété tous les 8 ans
- 2-4 ng/mL: dépistage tous les 2-4 ans
- ≥ 4 ng/mL: adresser à l'urologue pour stratification du risque (IRM, biopsies)

Arrêter le dépistage quand l'espérance de vie est < 10 ans.

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid title="Dépistage du cancer de la prostate et conduite à tenir devant une augmentation du PSA. Dr JB FRON d'après EAU 2019" >}}
graph TB
  homme["Homme &ge; 45 ans<br>et Espérance de vie &gt; 10 ans"] --> symptomes("Symptômes urinaires<br>Signes d'alarme<br>&ge; 3 cas au 1<sup>er</sup> degré")
  style homme stroke:#4150f5, stroke-width:1px
    symptomes -- Non --> PSA
      PSA -- "&lt; 2 ng/mL" --> leger(PSA à 8 ans)
      PSA -- 2-4 ng/mL --> modere(PSA à 2-4 ans)
      PSA -- "&ge; 4 ng/mL" --> severe("Urologue<br>Toucher rectal<br>&plusmn; IRM et biopsies")
    symptomes -- Oui --> severe
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Gandaglia G et al. Structured Population-based Prostate-specific Antigen Screening for Prostate Cancer: The European Association of Urology Position in 2019. Eur Urol. août 2019;76(2):142-50](https://www.europeanurology.com/article/S0302-2838(19)30347-1/fulltext)
- [HAS. Détection précoce du cancer de la prostate. Mai 2013.](https://www.has-sante.fr/jcms/c_1623737/fr/detection-precoce-du-cancer-de-la-prostate)

{{%/sources%}}
