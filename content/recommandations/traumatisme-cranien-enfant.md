+++
title = "Traumatisme crânien de l'enfant"
prefix = "le "
shortname = "TC enfant"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-11-08T14:17:41+02:00
publishdate = 2020-11-08
lastmod = 2020-11-08
specialites = ["neurologie", "pediatrie"]
annees = "2015"
sources = ["SFMU"]
tags = ["enfant", "trauma cranien", "Glasgow"]
anglais = ["Head injury"]
sctid = "82271004"
flowchart = true
todo = "score glasgow, examen clinique"
+++

{{%article-summary%}}

- Rechercher immédiatement les signes de gravité.
- Appel du 15 en cas de signes de signe de gravité pour scanner cérébral.
- Remettre les [Consignes de surveillance à donner aux parents](/print/tc-enfant-consignes.pdf) dans les autres cas.

{{%/article-summary%}}
{{%collapse "Définition" %}}

Traumatisme crânien léger (TCL)
: Score de Glasgow (GCS) ≥ 13.
: Ils représentent 95% des traumatismes crâniens de l'enfant. < 10% ont lésion intracrânienne (LIC) et < 1% nécessitent neurochirurgie.

{{% /collapse %}}
{{%collapse "Signes de gravité du traumatisme crânien chez l'enfant" %}}

{{%warning%}}
Indications à l'**hospitalisation en urgence** avec **scanner cérébral** (≥ 1 parmi)  
OU si **appréciation de gravité par le médecin:**

- Âge < 3 mois
- AVP  
  - Voiture. Si un passager est éjecté du véhicule, tué ou en cas de tonneau
  - Cycliste sans casque
  - Chute > 0,9 m avant 2 ans
  - Chute > 1,5 m après 2 ans
  - TC par un objet à forte cinétique
- GCS pédiatrique < 15
- Agitation, somnolence, lenteur du discours ou questions répétitives
- Pleurs inconsolables ou comportement anormal selon les parents
- Perte de connaissance
- Signes cliniques de lésion de base du crâne
  - Embarrure
  - Ecchymose rétro-auriculaire
  - Ecchymose péri-orbitaire
  - Otorragie ou hémotympan
  - Rhinnorhée/otorrhée évocatrice de LCR
- Vomissements ou céphalées importantes chez l'enfant après 2 ans
- Hématome sous-cutané ou céphalhématome occipital, temporal ou pariétal avant 2 ans
- Suspicion de maltraitance
{{%/warning%}}

> Critères PECARN ({{%lang%}}Pediatric Emergency Care Applied Research Network{{%/lang%}}) 2009.

**En l'absence de signes de gravité, la prise en charge ambulatoire est envisageable**.

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

> "La radiographie de crâne n’a pas d’indication, à l’exception de la suspicion de maltraitance". (SFMU)

Aucun examen en l'absence de signe de gravité ou de gravité estimée par le médecin.

{{% /collapse %}}
{{%collapse "Prise en charge ambulatoire du traumatisme crânien léger" %}}

La surveillance du traumatisme crânien léger à domicile est possible si:

- Aucun signe de gravité.
- L'examen ne donne pas d'impression de gravité.
- Surveillance possible à domicile pendant 48 heures par les parents
- Entourage adapté
- Explications des signes devant amener à appeler le 15
- Remise des [Consignes de surveillance à donner aux parents](/print/tc-enfant-consignes.pdf)

{{% /collapse %}}
{{%collapse "Informations aux parents lors d'une PEC ambulatoire du TC léger" %}}

Appeler le 15 en cas de:

- Perte de conscience ou baisse de vigilance telle la somnolence (difficultés à garder les yeux ouverts)
- Confusion (désorientation dans le temps, l’espace: « où suis-je » ?...)
- Somnolence persistante au-delà d’une heure à un moment de la journée où votre enfant est censé être bien réveillé (donc en dehors des heures de sieste)
- Difficultés à réveiller votre enfant
- Problèmes de compréhension ou d’expression
- Perte d’équilibre, difficultés à la marche
- Faiblesse musculaire d’un bras et/ou d’une jambe
- Problèmes de vision
- Maux de tête violents et persistants
- Vomissements
- Toute crise telle une perte de connaissance brutale
- Écoulement de liquide clair à partir du nez, d’une oreille
- Saignement de l’une ou des deux oreilles
- Perte d’audition de l’une ou des deux oreilles

Remise des [Consignes de surveillance à donner aux parents](/print/tc-enfant-consignes.pdf)

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid title="Conduite à tenir devant un traumatisme crânien de l'enfant. Dr JB FRON d'après SFMU 2015" >}}
graph TB
  TC[Traumatisme crânien] --> GCS(Score de Glasgow)
  style TC stroke:#006ef4, stroke-width:1px
  GCS -- "#lt; 13" --> TCgrave(TC grave) --> SAMU("<b>SAMU</b>")
  GCS -- "≥ 13" --> TCleger(TC léger) --> gravite(Signes de gravité ?)
    gravite -- Oui --> SAMU
    gravite -- Non --> ambulatoirePossible("Examen sans impression de gravité<br>ET Surveillance à domicile 48h par les parents<br>ET Entourage adapté")
      ambulatoirePossible -- Non --> SAMU
      ambulatoirePossible -- Oui --> consignes("Surveillance ambulatoire<br>Consignes orales et écrites")

{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Sources" %}}

- [SFMU. Traumatisme crânien léger de l’enfant. Urgences 2015](https://www.sfmu.org/upload/70_formation/02_eformation/02_congres/Urgences/urgences2015/donnees/pdf/039.pdf)

{{% /collapse %}}
