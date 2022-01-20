+++
title = "Dyspepsie"
prefix = "la "
shortname = "Dyspepsie"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-07-17T20:11:06+02:00"
publishdate = "2021-08-18"
lastmod = "2021-08-18"
specialites = ["hepato-gastro-enterologie"]
annees = "2019"
sources = ["SNFGE"]
tags = ["EOGD", "gastrite", "IPP"]
anglais = ["Dyspepsia"]
sctid = "162031009"
flowchart = true
image = false
imageSrc = ""
+++

{{%article-summary%}}

- Rechercher un diabète et des troubles du comportement alimentaire
- Indications à l'EOGD: signes d’alarme (perte de poids, anémie, dysphagie, hémorragie digestive), âge > 50 ans, échec du traitement médical, antécédent familial ou personnel de cancer digestif
- Recherche d'*Helicobacter pylori* (sérologie, test respiratoire) SI EOGD non indiquée
- IPP simple dose 4-8 semaines, augmentation possible x 2/j
- Éviter les repas gras
- Essai d'éviction séquentiel de certains aliments

{{%/article-summary%}}
{{%collapse "Définition" %}}

Dyspepsie
: Syndrome défini par une douleur ou un inconfort chronique centré sur l'épigastre.  
Les symptômes peuvent être: brûlures épigastriques, satiété précoce, pesanteur épigastrique post-prandiale, ballonnement, plénitude gastrique, nausées, éructations voire vomissements.
: En cas de pyrosis ou de régurgitations prédominants, le diagnostic de [RGO]({{< relref "reflux-gastro-oesophagien.md" >}}) est le plus probable.  
Rechercher un *diabète* et des *troubles du comportement alimentaire*.

La classification de Rome IV distingue 2 grands syndromes:

1. Syndrome de douleur épigastrique (EPS)  
{{%class%}}Indépendant des repas ou soulagé par le repas.{{%/class%}}
1. Syndrome de détresse post-prandial (PDS)  
{{%class%}}Symptômes déclenchés par les repas.{{%/class%}}

### Causes principales

Proches de celles de l'intestin irritable (souvent associé): anomalies de la sensibilité
et des contrôles réflexes des fonctions digestives, inflammation, infections gastro-intestinales, facteurs génétiques, dysautonomie, troubles psychologiques.

### Abréviations

**EOGD:** endoscopie œso-gastro-duodénale (ou gastroscopie)  
**IPP:** inhibiteurs de la pompe à protons  
**RGO:** reflux gastro-œsophagien  
**RHD:** régime hygiéno-diététique (ou mesures hygiéno-diététiques)  
**TCA:** trouble du comportement alimentaire

{{% /collapse %}}
{{%collapse "Signes d'alarme" %}}

{{%danger%}}
Signes de gravité nécessitant la réalisation d'examens complémentaires:

- Âge > 50 ans
- Amaigrissement
- Anémie
- Dysphagie
- Odynophagie
{{%/danger%}}

{{%/collapse%}}
{{%collapse "Examens complémentaires" %}}

### Endoscopie œso-gastro-duodénale (EOGD)

Indications:

- Signes d'alarme
- Âge > 50 ans
- Âge < 50 ans avec résistance au traitement médical
- Antécédent familial ou personnel de cancer digestif

### Recherche d'*Helicobacter pylori*

Chez le < 50 ans en 1<sup>re</sup> intention (sauf indication à l'EOGD): sérologie HP ou test respiratoire.  
Alternative: IPP simple dose 4-8 semaines.

### Imagerie abdominale

Échographie abdominale ± scanner thoraco-abdominal ou IRM.  
Si résistance au traitement médical.

{{% /collapse %}}
{{%collapse "Traitement de la dyspepsie" %}}

- Âge > 50 ans: guidé par l'EOGD
- Âge < 50 ans
  - Test thérapeutique avec IPP simple dose 4-8 semaines  
  Oméprazole 20 mg/j, ésoméprazole 40 mg/j.
  - Si bilans rassurants et réponse insuffisante: essai IPP simple dose x 2/j avant le repas
- Pas de régime alimentaire spécifique
  - Éviter les aliments gras (ralentissent vidange gastrique)
  - Éviction des aliments identifiés comme gênants
  - Test d'éviction séquentiel des aliments acides (duodénum), épicés (intestins), hypercaloriques ou riches en fibres
- Éradication d'*[Helicobacter pylori]({{< relref "helicobacter-pylori.md" >}})* si positif

### Pour en savoir plus - Autres traitements possibles

Sur avis spécialisé uniquement:

- Prokinétiques gastriques  
  Dompéridone, érythromycine faible dose, prucalopride.
- Anti-émétiques  
  Métoclopramide, halopéridol.
- Accomodation gastrique  
  Buspirone.
- Amitryptiline, mirtazapine, sulpiride
- Hypnose, psychothérapie
- Intervention pylorique

{{% /collapse %}}
{{%collapse "Conduite à tenir devant une dyspepsie" "show" %}}

{{< mermaid title="Conduite à tenir devant une dyspepsie. Dr JB Fron d'après SNFGE 2019" >}}
graph TB
Dyspepsie
style Dyspepsie stroke:#4150f5, stroke-width:1px
  Dyspepsie --> gravite("- Signes d'alarme ?<br>- Âge &ge; 50 ans ?")
    gravite -- Non --> bilan("- Glycémie à jeun<br>- Troubles du comportement alimentaire<br>- Recherche Helicobacter")
      bilan --> traitement("- Éviter les aliments gras<br>- IPP simple dose 4-8 semaines")
        traitement -. Échec .-> EOGD
    gravite -- Oui --> EOGD
{{< /mermaid >}}

{{%/collapse%}}
{{%sources%}}

- [Mion F, SNFGE et GFNG. Prise en charge de la dyspepsie. Conseil de pratique. Janvier 2019. (PDF)](https://www.snfge.org/sites/default/files/recommandations/dyspepsie_2019.pdf)
- [Bruley des Varannes S. Prise en charge de la dyspepsie fonctionnelle. POST'U 2011 Paris.](https://www.fmcgastro.org/postu-main/archives/postu-2011-paris/textes-postu-2011-paris/prise-en-charge-de-la-dyspepsie-fonctionnelle/)

{{%/sources%}}
