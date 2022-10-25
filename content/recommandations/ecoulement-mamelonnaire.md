+++
title = "Écoulement mamelonnaire du sein"
prefix = "l'"
titleSeo = "Écoulement mamelonnaire"
description = "Recommandations pour la prise en charge d'un écoulement mamelonnaire. Signes de malignité et bilan recommandé: mammographie et échographie et avis spécialisé"
synonyms = ["Galactorrhée"]
auteurs = ["Jean-Baptiste FRON"]
date = "2021-10-21T19:43:29+02:00"
publishdate = "2021-10-21"
lastmod = "2022-10-25"
specialites = ["gynecologie-obstetrique"]
annees = "2017"
sources = ["CNGOF", "HAS"]
tags = []
anglais = ["Nipple discharge"]
sctid = "54302000"
flowchart = true
image = false
imageSrc = ""
todo = "galactorrhée"
+++

{{%article-summary%}}

- Un écoulement mamelonnaire est le plus souvent bénin
- Examen clinique exhaustif de tout écoulement mamelonnaire
- Écoulement du sein unilatéral: bilan mammographie + échographie  
  et adresser au spécialiste avec les résultats

Chapitre lié: [cancer du sein]({{< relref "cancer-sein.md" >}})

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Écoulement mamelonnaire (EM)
: Extériorisation de liquide par un ou deux mamelons. Il peut être unipore ou de plusieurs pores et avoir une couleur ou aspect variable. Il est spontané ou provoqué mais survient toujours en dehors de l'allaitement (jusqu'à 1 an) et du post-partum.

Galactorrhée
: Une galactorrhée (écoulement de lait) est physiologique pendant ou après la grossesse et jusqu'à 1 an après la fin de l'allaitement.

Pyramidectomie
: Mastectomie partielle, dite *chirurgie conservatrice*. Elle correspond à l'ablation d'un canal galactophorique et ses ramifications. [Procédé opératoire](https://www.docteur-benchimol.com/pyramidectomie-du-sein.html)

### Étiologie d'un écoulement mamelonnaire

Pathologies à l'origine d'un écoulement mamelonnaire:

- Endocrinologique
  - Adénome pituitaire
  - [Hypothyroïdie sévère]({{< relref "hypothyroidie.md" >}})
  - [Insuffisance rénale]({{< relref "insuffisance-renale-chronique.md" >}}) ou hépatique sévère
  - Production ectopique de prolactine (carcinome bronchogénique)
  - Pathologie hypothalamique
- Tumeur du sein
  - Papillomes intracanalaires, ectasie canalaire (80% des EM colorés)
  - [Carcinome canalaire]({{< relref "cancer-sein.md" >}})  
  Le risque de malignité augmente avec l'âge (+50 ans).

### Abréviations

EM
: écoulement mamelonnaire

PRL
: prolactine
{.dl-inline}

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

Éléments à rechercher à l'interrogatoire pour un écoulement mamelonnaire:

- Antécédents personnels  
  Grossesse, allaitement.
- Antécédents familiaux sénologiques, endocriniens et génétiques
- Traitements en cours  
  [Contraception]({{< relref "contraception.md" >}}) ou hormonal, antidépresseur, neuroleptique, anti-H2, anti-émétique, antihypertenseur.
- Toxiques  
  Amphétamine, marijuana, caféine en excès.
- Menstruations
- Dermatose mamelonnaire
- Écoulement mamelonnaire
  - Date et mode de survenue
  - Spontané ou provoqué  
    {{%class%}}Soutien-gorge serré{{%/class%}}
  - Uni ou bilatéral
  - Uni ou multipore
  - Étude du quadrant du canal pathologique
  - Couleur de l'écoulement (étaler sur compresse)  
    Laiteux, multicolore ou purulent. Les autres (clair, hydrique, séro-sanglant, sanglant) sont considérés comme pathologiques.  
    Coloré est associé à 3-21% de malignité (surtout sanglant si +50 ans).
  - Différencier de sécrétions péri-aréolaires
- Palpation mammaire
- Aires ganglionnaires

L'écoulement mamelonnaire (EM) bénin est typiquement lactescent, bilatéral, provoqué et multipore. Par sécrétions apocrines glandulaires mammaires.  

{{%warning%}}L'écoulement mamelonnaire pathologique est unilatéral, abondant, persistant, spontané et unipore{{%/warning%}}

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

{{%info%}}

### Bilan devant un écoulement mamelonnaire unilatéral

- Mammographies  
  {{%class%}}Faible sensibilité pour le diagnostic de cancer en EM.{{%/class%}}
- Échographie mammaire

Adresser au spécialiste avec les résultats.

> *CNGOF 2015*

{{%/info%}}

Un écoulement bilatéral ne nécessite pas d'imagerie sauf dépistage adapté ou aspect sanglant.  
Biopsie de toute lésion radiologique.

### IRM mammaire

Recours à l'IRM lorsque le bilan de première intention n'est pas contributif.

### Prolactinémie

Indications: EM lactescent multipore provoqué sans traitement à risque. Aménorrhée normalement associée.

### Pyramidectomie

Indication: imagerie normale et EM suspect (séro/sanglant, reproductible, unipore, persistant).

{{% /collapse %}}
{{%collapse "Conduite à tenir devant un écoulement mamelonnaire" "show" %}}

{{< mermaid title="Prise en charge d'un écoulement mamelonnaire. Dr JB Fron d'après CNGOF 2015" >}}
graph TB
  EM[Écoulement mamelonnaire]
  style EM stroke:#4150f5, stroke-width:1px
    EM --> clinique("- Antécédents<br>- Caractères<br>- Uni/bilatéral")
      clinique -- Unilatéral --> examens("- Mammo + écho<br>- PRL si lactescent multipore<br>&plusmn; IRM mammaire si normaux") --> seno(Avis sénologique)
      clinique -- Bilatéral --> maj(Mise à jour des dépistages) --> seno
{{< /mermaid >}}

> **PRL =** prolactine

{{%/collapse%}}
{{%sources%}}

- [Boisserie-Lacroix M., Lippa N. Prise en charge d'un écoulement mamelonnaire. La lettre du sénologue. n°72. 2016. (PDF)](https://www.edimark.fr/Front/frontpost/getfiles/24304.pdf)
- [Ouldamer L. et al. CNGOF. Exploration d'un écoulement mamelonnaire du sein uni- ou bilatéral : recommandations. Journal de Gynécologie Obstétrique et Biologie de la Reproduction. Volume 44. Issue 10. 2015. Pages 927-937.](https://doi.org/10.1016/J.JGYN.2015.09.035)
- [HAS. Dépistage et prévention du cancer du sein. Février 2015.](https://www.has-sante.fr/jcms/c_2024559/fr/depistage-et-prevention-du-cancer-du-sein)

{{%/sources%}}
