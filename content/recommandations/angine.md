+++
title = "Angine"
prefix = "l'"
shortname = "M"
synonyms = []
auteurs = ["Jean-Baptiste FRON", "Marie"]
date = 2020-09-28T10:46:41+02:00
publishdate = 2020-09-28
lastmod = 2020-09-28
categories = ["infectiologie", "ORL"]
guidelineyears = "2017"
sources = ["HAS"]
tags = ["TROD", "SGA"]
anglais = ["Tonsilitis"]
sctid = "90176007"
draft = false
image = true
imageSrc = "Photo by Fireflyez76 on Foter.com / CC BY-ND"
todo = "lire campus ORL"
+++

{{%article-summary%}}

- Toujours viral avant 3 ans.
- TDR de 3 à 14 ans et score de Mc Isaac au-delà.
- TDR et ATB accessibles directement en pharmacie si contrat de soins avec le pharmacien ([JO 08/03/2020](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000041697956)).

{{%/article-summary%}}
{{%collapse "Définition" %}}

Angine
: Infection des amygdales palatines voire de l'ensemble du pharynx.  
La majorité des infections est virale.
: Le streptocoque β hémolytique du groupe A (**SGA ou Streptococcus pyogenes**) est la 1<sup>re</sup> bactérie responsable des angines bactériennes avec un pic entre 4 et 15 ans.  
Il est responsable de 25-40 % des angines de l'enfant, 10-25 % des angines de l'adulte.

TDR
: Test de Diagnostic Rapide du SGA. Test de dépistage Rapide à Orientation Diagnostique (TROD) de l'angine. Aussi appelé Streptatest®.

{{% /collapse %}}
{{%collapse "Complications" %}}

- Phlegmon péri-amygdalien
- Complications infectieuses locales
- Cellulites cervicales profondes extensives
- Adénite cervicale suppurative (ou adénophlegmon latérocervical)
- Rhumatisme articulaire aigu (RAA)
- Glomérulonéphrite aiguë post-streptococcique (GNA)

> "Les angines à SGA évoluent le plus souvent favorablement en 3-4 jours même en l’absence de traitement antibiotique. Cependant, elles peuvent donner lieu à des complications potentiellement graves (syndromes post-streptococciques : rhumatisme articulaire aigu (RAA), glomérulonéphrite aiguë (GNA), et complications septiques loco-régionales dont la prévention justifie la mise en œuvre d’une antibiothérapie."

{{% /collapse %}}
{{%collapse "Clinique" %}}

- Angine érythémateuse ou érythémato-pultacée
- Scarlatine

Autres formes d'angine:

- Diphtérie
- Gonocoque
- Anaérobies

{{% /collapse %}}
{{%collapse "Score de Mac Isaac" %}}

{{< outils/mac-isaac >}}

{{% /collapse %}}
{{%collapse "Traitement" %}}

- Antalgique, antipyrétique  
Paracétamol voire antalgique palier 2.
- Pas d'AINS ni corticoïdes
- La persistance de fièvre, dysphagie après 3 jours doit faire évoquer une infection intercurrente.
- Scarlatine  
Traitement identique avec éviction scolaire limitée à 48 heures.

### Antibiothérapie

Indication: angine chez les +3 ans avec TDR positif.

#### Adulte

{{% info %}}Amoxicilline 1g matin et soir pendant 6 jours{{% /info %}}

- Allergie vraie à la pénicilline
  - C2G céfuroxime-axétil 250 mg x 2/j pendant 4 jours
  - ou C3G céfpodoxime-proxétil 100 mg x 2/j pendant 5 jours
  - ou C3G céfotiam-hexétil 200 mg x 2/j pendant 5 jours
- Contre-indication aux bêtalactamines
  - macrolide azithromycine 500 mg 1 prise quotidienne pendant 3 jours  
  - ou clarithromycine 250 mg x 2/j pendant 5 jours
  - ou josamycine 1g x 2/j pendant 5 jours

#### Enfant

{{% info %}}Amoxicilline 50 mg/kg/j en 2 prises pendant 6 jours{{% /info %}}

- Allergie vraie à la pénicilline
  - C3G céfpodoxime 8 mg/kg/j en 2 prises (max 400 mg/j) 5 jours
- Contre-indication aux bêtalactamines
  - azithromycine 20 mg/kg/j x 1/j (max 500 mg/j) 3 jours
  - ou josamycine 15 mg/kg/j en 2 prises (max 1g/j)

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid >}}
graph TB
  angine[Angine] --> moins3("&lt; 3 ans") --> viral(Viral)
  style angine stroke:#0077ff, stroke-width:1px
    angine --> 314ans("3 à 14 ans") --> TDR("TDR") -- "Positif" --> ATB("<b>Antibiothérapie 6j</b><hr>Adulte: amoxicilline 1g x 2/j<br>Enfant: amox 25 mg/kg x 2/j")
      TDR -- Négatif --> viral
    angine --> 15plus("≥ 15 ans") --> score(Mac Isaac) -- "≥ 2" --> ATB
      score -- "&lt; 2" --> viral
{{< /mermaid >}}

> Figure. Conduite à tenir devant une angine.

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Journal Officiel. Arrêté du 6 mars 2020 relatif à l'autorisation du protocole de coopération « Prise en charge de l'odynophagie par l'infirmier diplômé d'Etat ou le pharmacien d'officine dans le cadre d'une structure pluri-professionnelle ». 08/03/2020](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000041697956)
- [SPILF. Propositions de la SPILF pour des antibiothérapies plus courtes. Mars 2017.](https://www.infectiologie.com/UserFiles/File/spilf/atb/info-antibio/info-antibio-2017-mars.pdf)
- [SPILF/HAS. Fiche mémo - Rhinopharyngite aiguë et angine aiguë de l’adulte. Novembre 2016.](https://www.has-sante.fr/upload/docs/application/pdf/2016-11/v1-fm_rhino-angine_adulte_cd-171116.pdf)
- [Campus d'ORL - Collège Français d'ORL et de Chirurgie Cervico-faciale. Item 146 (ex item 77) : Angines de l'adulte et de l'enfant et rhinopharyngites de l'enfant.](http://campus.cerimes.fr/orl/enseignement/angine/site/html/5.html)

{{% /collapse %}}
