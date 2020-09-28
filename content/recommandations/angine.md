+++
title = "Angine"
prefix = "l'"
shortname = "M"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
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
todo = "traitement"
+++

{{%article-summary%}}

- Toujours viral avant 3 ans.
- TDR de 3 à 14 ans et score de Mc Isaac au-delà.
- TDR et ATB accessibles directement en pharmacie ([JO 08/03/2020](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000041697956)).

{{%/article-summary%}}
{{%collapse "Définition" %}}

Angine
: Infection des amygdales palatines voire de l'ensemble du pharynx.  
La majorité des infections est virale.
: Le streptocoque β hémolytique du groupe A (SGA ou Streptococcus pyogenes) est la 1<sup>re</sup> bactérie responsable des angines bactériennes avec un pic entre 4 et 15 ans.  
Il est responsable de 25-40 % des angines de l'enfant, 10-25 % des angines de l'adulte.

{{% /collapse %}}
{{%collapse "Clinique" %}}

- Angine érythémateuse ou érythémato-pultacée
- Scarlatine

{{% /collapse %}}
{{%collapse "Score de Mac Isaac" %}}

{{< outils/mac-isaac >}}

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid >}}
graph TB
  angine["Angine"] --> moins3("< 3 ans") --> viral("Viral")
  style angine stroke:#6200ee, stroke-width:1px
    angine --> 314ans("3 à 14 ans") --> TDR("TDR") -- "+" --> ATB
      TDR -- "-" --> viral
    angine --> 15plus("≥ 15 ans") --> score("Mac Isaac") -- "≥ 2" --> ATB
      score -- "< 2" --> viral
{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Journal Officiel. Arrêté du 6 mars 2020 relatif à l'autorisation du protocole de coopération « Prise en charge de l'odynophagie par l'infirmier diplômé d'Etat ou le pharmacien d'officine dans le cadre d'une structure pluri-professionnelle ». 08/03/2020](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000041697956)
- [SPILF. Propositions de la SPILF pour des antibiothérapies plus courtes. Mars 2017.](https://www.infectiologie.com/UserFiles/File/spilf/atb/info-antibio/info-antibio-2017-mars.pdf)
- [SPILF/HAS. Fiche mémo - Rhinopharyngite aiguë et angine aiguë de l’adulte. Novembre 2016.](https://www.has-sante.fr/upload/docs/application/pdf/2016-11/v1-fm_rhino-angine_adulte_cd-171116.pdf)

{{% /collapse %}}
