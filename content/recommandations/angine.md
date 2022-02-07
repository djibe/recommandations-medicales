+++
title = "Angine"
prefix = "l'"
shortname = "M"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-09-28T10:46:41+02:00
publishdate = 2020-09-28
lastmod = 2022-02-07
specialites = ["ORL"]
annees = "2021"
sources = ["HAS", "SPILF"]
tags = []
anglais = ["Tonsilitis"]
sctid = "90176007"
draft = false
image = true
imageSrc = "Angine, photo de Fireflyez76 sur Foter.com / CC BY-ND"
flowchart = true
todo = "Collège"
+++

{{%article-summary%}}

- Toujours viral avant 3 ans
- TDR de 3 à 14 ans et score de Mc Isaac au-delà
- Le TDR peut être réalisé par le pharmacien, ajouter sur l'ordonnance: << si TROD angine positif, sous 7 jours calendaires >> (*[Arrêté du 13/12/21](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044483134)*)

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Angine
: Infection amygdalienne aiguë palatine voire de l'ensemble du pharynx.  
La majorité des infections est virale.
: Le streptocoque β-hémolytique du groupe A (*SGA* ou *Streptococcus pyogenes*) est la 1<sup>re</sup> bactérie responsable des angines bactériennes avec un pic entre 4 et 15 ans.  
Il est responsable de 25-40 % des angines de l'enfant, 10-25 % des angines de l'adulte.

TDR
: *Test de Diagnostic Rapide* du SGA ou *Test de dépistage Rapide à Orientation Diagnostique* (TROD) de l'angine. Aussi appelé Streptatest®.

### Complications de l'angine

- Phlegmon péri-amygdalien
- Complications infectieuses locales
- Cellulites cervicales profondes extensives
- Adénite cervicale suppurative (ou adénophlegmon latérocervical)
- Rhumatisme articulaire aigu (RAA)
- Glomérulonéphrite aiguë post-streptococcique (GNA)

> << Les angines à SGA évoluent le plus souvent favorablement en 3-4 jours même en l'absence de traitement antibiotique. Cependant, elles peuvent donner lieu à des complications potentiellement graves (syndromes post-streptococciques: rhumatisme articulaire aigu (RAA), glomérulonéphrite aiguë (GNA), et complications septiques loco-régionales dont la prévention justifie la mise en œuvre d'une antibiothérapie. >> (*Collège*)

{{% /collapse %}}
{{%collapse "Clinique" %}}

{{%info%}}L'aspect de l'oropharynx n'est pas prédictif de l'angine à SGA (*Collège*){{%/info%}}

- Début brutal
- Odynophagie intense
- Fièvre
- Amygdalite érythémateuse ou érythémato-pultacée
- Adénopathies satellites sensibles
- Autres signes
  - Douleurs abdominales
  - Exanthème, scarlatine
  - Signes de rhinopharyngite

Autres formes d'angine:

- Vésiculeuse  
Dite herpangine par coxsackie ou VZV.
- Pseudomembraneuse  
Mononucléose ou diphtérie.
- Gonocoque
- Anaérobies (ulcéreuse dite *de Vincent*)  
Éliminer agranulocytose, hémopathie/cancer.

{{%info%}}Pour mieux visualiser les amygdales, demander à l'enfant de rugir comme un lion ou de bailler la bouche ouverte (*Pr Douglas Paauw*){{%/info%}}

{{% /collapse %}}
{{%collapse "Score de Mac Isaac" %}}

{{< scores/mac-isaac >}}

Le TDR peut être réalisé par le pharmacien, ajouter sur l'ordonnance: << si TROD angine positif, sous 7 jours calendaires >>.

{{% /collapse %}}
{{%collapse "Traitement de l'angine" %}}

- Antalgique, antipyrétique  
Paracétamol voire antalgique palier 2.
- Pas d'AINS ni corticoïdes
- La persistance de fièvre, dysphagie après 3 jours doit faire évoquer une infection intercurrente.
- Scarlatine  
Traitement identique avec éviction scolaire limitée à 48 heures.

### Antibiothérapie

Indication: angine chez les +3 ans avec TDR positif.

#### Adulte

{{% info %}}Amoxicilline 1 g matin et soir pendant 6 jours{{% /info %}}

- Allergie vraie à la pénicilline
  - C2G céfuroxime-axétil 250 mg x 2/j pendant 4 jours
  - ou C3G céfpodoxime-proxétil 100 mg x 2/j pendant 5 jours
  - ou C3G céfotiam-hexétil 200 mg x 2/j pendant 5 jours
- Contre-indication aux bêtalactamines
  - macrolide azithromycine 500 mg 1 prise quotidienne pendant 3 jours  
  - ou clarithromycine 250 mg x 2/j pendant 5 jours
  - ou josamycine 1 g x 2/j pendant 5 jours

#### Enfant

{{%info%}}Amoxicilline 50 mg/kg/j en 2 prises pendant 6 jours{{%/info%}}

- Allergie vraie à la pénicilline
  - C3G céfpodoxime 8 mg/kg/j en 2 prises (max 400 mg/j) 5 jours
- Contre-indication aux bêtalactamines
  - azithromycine 20 mg/kg/j x 1/j (max 500 mg/j) 3 jours
  - ou josamycine 15 mg/kg/j en 2 prises (max 1g/j)

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid title="Conduite à tenir devant une angine. Dr JB FRON d'après SPILF/HAS 2016" >}}
graph TB
  angine[Angine] --> moins3("&lt; 3 ans") --> viral(Viral)
  style angine stroke:#4150f5, stroke-width:1px
    angine --> 314ans(3 à 14 ans) --> TDR(TDR) -- "Positif" --> ATB("<b>Antibiothérapie 6j</b><hr>Adulte: amoxicilline 1g x 2/j<br>Enfant: amox 25 mg/kg x 2/j")
      TDR -- Négatif --> viral
    angine --> 15plus("&ge; 15 ans") --> score(Mac Isaac) -- "&ge; 2" --> ATB
      score -- "&lt; 2" --> viral
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [HAS. Choix et durées d'antibiothérapie préconisées dans les infections bactériennes courantes. Recommander les bonnes pratiques. 15/07/2021.](https://www.has-sante.fr/jcms/p_3278764/fr/choix-et-durees-d-antibiotherapie-preconisees-dans-les-infections-bacteriennes-courantes)
- [SPILF. Propositions de la SPILF pour des antibiothérapies plus courtes. Mars 2017. (PDF)](https://www.infectiologie.com/UserFiles/File/spilf/atb/info-antibio/info-antibio-2017-mars.pdf)
- [SPILF/HAS. Fiche mémo - Rhinopharyngite aiguë et angine aiguë de l'adulte. Novembre 2016.](https://www.has-sante.fr/jcms/c_2722754/fr/choix-et-duree-de-l-antibiotherapie-rhinopharyngite-aigue-et-angine-aigue-de-l-enfant)
- [Collège Français d'ORL et de Chirurgie Cervico-faciale. Angines de l'adulte et de l'enfant et rhinopharyngites de l'enfant. Item 146 UE6.](https://campusorl.fr/espace-etudiants/2eme-cycle-ecni/item-146-angines-de-ladulte-et-de-lenfant-et-rhinopharyngites-de-lenfant/)

{{%/sources%}}
