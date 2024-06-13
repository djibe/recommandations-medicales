+++
title = "Dyspepsie"
prefix = "la "
description = "Recommandations pour le diagnostic et la prise en charge de la dyspepsie. Douleur ou inconfort digestif. Indications à la fibroscopie et traitement par IPP"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-07-17T20:11:06+02:00"
publishdate = "2021-08-18"
lastmod = "2022-09-30"
specialites = ["hepato-gastro-enterologie"]
annees = "2019"
sources = ["SNFGE"]
tags = ["EOGD", "gastrite", "IPP"]
anglais = ["Dyspepsia"]
sctid = "162031009"
icd10 = "K30"
flowchart = true
image = false
imageSrc = ""
todo = "image"
+++

{{%article-summary%}}

- La dyspepsie est un syndrome défini par une douleur ou un inconfort chronique centré sur l’épigastre
- Devant une plainte de dyspepsie, rechercher un [diabète](/tags/diabete/) et des troubles du comportement alimentaire
- Indications au bilan par fibroscopie gastrique: signes d'alarme (perte de poids, anémie, dysphagie, hémorragie digestive), âge supérieur à 50 ans, échec du traitement médical, antécédent familial ou personnel de [cancer digestif](/tags/cancer/)
- Rechercher une [infection à *Helicobacter pylori*]({{< relref "helicobacter-pylori.md" >}}) (sérologie ou test respiratoire) si la fibroscopie n'est pas indiquée
- Prise en charge de la dyspepsie par IPP simple voire double dose pendant 4 à 8 semaines, éviter les repas gras
- Essai d'éviction séquentiel de certains aliments suspects de causer les symptômes

{{%/article-summary%}}
{{%collapse "Définition" %}}

Dyspepsie
: Syndrome défini par une douleur ou un inconfort chronique centré sur l'épigastre.  
Les symptômes de la dyspepsie sont peu spécifiques: brûlures épigastriques, satiété précoce, pesanteur épigastrique post-prandiale, ballonnement abdominal, plénitude gastrique, nausées, éructations voire vomissements.
: En cas de pyrosis ou de régurgitations prédominants, le diagnostic de [reflux gastrique]({{< relref "reflux-gastro-oesophagien.md" >}}) est le plus probable.  
Toujours rechercher un *[diabète]({{< relref "diabete-type-2.md" >}})* et des *troubles du comportement alimentaire*.

La classification de Rome IV distingue 2 grands syndromes dyspeptiques:

1. Syndrome de douleur épigastrique (EPS)  
{{%class%}}Indépendant des repas ou soulagé par le repas.{{%/class%}}
1. Syndrome de détresse post-prandial (PDS)  
{{%class%}}Symptômes déclenchés par les repas.{{%/class%}}

### Étiologie de la dyspepsie

Les causes principales de la dyspepsie sont proches de celles de l'[intestin irritable]({{< relref "syndrome-intestin-irritable.md" >}}) (qui est souvent associé): anomalies de la sensibilité et des contrôles réflexes des fonctions digestives, inflammation, infections gastro-intestinales, facteurs génétiques, dysautonomie, troubles psychologiques.

### Abréviations

EOGD
: endoscopie œso-gastro-duodénale (ou gastroscopie)

IPP
: inhibiteurs de la pompe à protons

RGO
: reflux gastro-œsophagien

RHD
: régime hygiéno-diététique (ou mesures hygiéno-diététiques)

SNFGE
: Société Nationale Française de Gastro-Entérologie

TCA
: trouble des conduites alimentaires
{.dl-inline}

{{% /collapse %}}
{{%collapse "Signes d'alarme" %}}

{{%danger%}}
Signes de gravité devant un syndrome dyspeptique nécessitant la réalisation d'examens complémentaires:

- Âge +50 ans
- Amaigrissement
- Anémie
- Dysphagie
- Odynophagie
{{%/danger%}}

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

Le bilan est ciblé devant une dyspepsie.

### Endoscopie œso-gastro-duodénale (EOGD)

Indications à la fibroscopie gastrique:

- Signes d'alarme
- Âge +50 ans
- Âge < 50 ans avec résistance au traitement médical
- Antécédent familial ou personnel de cancer digestif

### Recherche d'*Helicobacter pylori*

Chez le moins de 50 ans en première intention (sauf indication à la fibroscopie): sérologie *Helicobacter pylori* ou test respiratoire.  
Alternative: inhibiteur de la pompe à protons (IPP) simple dose 4-8 semaines.

### Imagerie abdominale

L'imagerie est réalisée lorsque les symptômes sont résistants au traitement médical.
Échographie abdominale voire scanner thoraco-abdominal ou IRM.

{{% /collapse %}}
{{%collapse "Traitement de la dyspepsie" %}}

Prise en charge de la dyspepsie:

- Âge +50 ans: traitement guidé par les résultats de la fibroscopie gastrique
- Âge < 50 ans
  - Test thérapeutique avec IPP simple dose 4-8 semaines  
    Oméprazole 20 mg/j, ésoméprazole 40 mg/j.
  - Si bilans rassurants et réponse insuffisante: essai IPP simple dose x 2/j avant le repas
- Pas de régime alimentaire spécifique
  - Éviter les aliments gras (ralentissent vidange gastrique)
  - Éviction des aliments identifiés comme gênants
  - Test d'éviction séquentiel des aliments acides (duodénum), épicés (intestins), hypercaloriques ou riches en fibres
- Éradication d'*[Helicobacter pylori]({{< relref "helicobacter-pylori.md" >}})* si positif

### Pour en savoir plus - Autres traitements possibles de la dyspepsie

Autres traitements de la dyspepsie, sur avis spécialisé uniquement:

- Prokinétiques gastriques  
  Dompéridone, érythromycine faible dose, prucalopride.
- Anti-émétiques  
  Métoclopramide, halopéridol.
- Accomodation gastrique  
  Buspirone.
- Amitryptiline, mirtazapine, sulpiride
- Hypnose, psychothérapie
- Chirurgie d'intervention du pylore

{{% /collapse %}}
{{%collapse "Prise en charge de la dyspepsie" "show" %}}

{{< mermaid title="Conduite à tenir et prise en charge d'une dyspepsie. Dr JB Fron d'après SNFGE 2019" >}}
graph TB
  Dyspepsie
  style Dyspepsie stroke:#4150f5, stroke-width:1px
    Dyspepsie --> gravite("- Signes d'alarme ?<br>- Âge ≥ 50 ans ?")
      gravite -- Non --> bilan("- Glycémie à jeun<br>- Troubles du comportement alimentaire<br>- Recherche Helicobacter")
        bilan --> traitement("- Éviter les aliments gras<br>- IPP simple dose 4-8 semaines")
          traitement -. Échec .-> EOGD
      gravite -- Oui --> EOGD
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

[Mion F. Prise en charge de la dyspepsie. Conseil de pratique. SNFGE et GFNG. 2019. (PDF)](https://www.snfge.org/sites/www.snfge.org/files/medias/documents/dyspepsie_2019_0.pdf)

{{%/sources%}}
