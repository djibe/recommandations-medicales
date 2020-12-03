+++
title = "Helicobacter pylori"
prefix = "l'"
shortname = "HP"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-12-02T15:14:41+02:00
publishdate = 2020-12-02
lastmod = 2020-12-02
categories = ["hepato-gastro-enterologie"]
guidelineyears = "2017"
sources = ["HAS", "CNPGHE"]
tags = ["EOGD", "IPP"]
anglais = []
sctid = ""
draft = true
+++

{{%article-summary%}}

- Confirmation systématique par EOGD et antibiogramme
- Reporter le traitement si grossesse/allaitement
- Traitement adapté à l'antibiogramme
- Contrôle de l'éradication systématique

{{%/article-summary%}}
{{%collapse "Définition" %}}

Helicobacter pylori
: **Abréviation:** H. pylori.  
Bactérie intestinale responsable d'*ulcères gastro-duodénaux* et de *cancers gastriques* (adénocarcinomes et lymphomes du MALT).  
Son éradication prévient la survenue de ces complications.

### Abréviations

**EOGD:** Endoscopie œso-gastro-duodénale  
**HP:** Helicobacter pylori (ou H. pylori)  
**IPP:** Inhibiteurs de la pompe à protons

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Endoscopie œso-gastro-duodénale

L'*EOGD* doit être systématique pour analyse anatomopathologique et mise en culture avec recherche d'H. pylori.

{{% /collapse %}}
{{%collapse "Traitement d'Helicobacter pylori" %}}

En cas de grossesse ou allaitement, il faut différer le traitement.

Test respiratoire à l'urée marquée.

Ttt si fonction rénale normale

ttt de ref: IPP + amox + clari

> En cas de résistance à la clarithromycine, prescription d’une trithérapie associant un IPP, amoxicilline et lévofloxacine 500 mg x 1/j

--> À  défaut,  prescription  d’une  quadrithérapie  «  avec  bismuth  »  associant  oméprazole,  sel  de  bismuth, tétracycline et métronidazole.
Arrêt immédiat si signes neuro
Pylera® : 3 gélules 4 fois/jour (après les repas du matin, du midi, du soir et au coucher, avec un grand verre d’eau) associé à oméprazole 20 mg matin et soir en insistant sur l’importance de l’observance de cette prise 4 fois/jour.

En cas d’allergie documentée à l’amoxicilline et de souche sensible à la clarithromycine, prescription d’une trithérapie associant un IPP, clarithromycine et métronidazole. En cas d’allergie documentée à l’amoxicilline et de résistance à la clarithromycine, prescription d’une quadrithérapie « avec bismuth ».

PP : une dose matin et soir (ésoméprazole 20 mg, lansoprazole 30 mg, oméprazole 20 mg, pantoprazole 40 mg, rabéprazole 20 mg) pendant le repas

En cas d’échec, recours à un avis spécialisé (Centre national de référence des Campylobacters et Hélicobacters).

---

Oméprazole 20 mg matin et soir pendant le repas pendant 10 jours

Amoxicilline 1 g matin et soir pendant 10 jours

Clarithromycine 500 mg matin et soir pendant 10 jours

---

Ordonnance pour la pharmacie

Helikit 75 mg. 1 boîte

---

Au laboratoire

Réalisation du test Helikit  
Au moins 4 semaines après la fin du traitement.
Vous ne devez pas avoir bu, ni mangé, ni fumé depuis la veille au soir.

{{% /collapse %}}
{{%collapse "Contrôle de la guérison" %}}

### Test respiratoire à l'urée marquée

Le contrôle de l'éradication d'H. pylori doit être systématique.

Il doit être réalisé au moins 4 semaines après la fin du traitement (tri ou quadrithérapie)  
ET au moins 2 semaines après l'arrêt total des IPP.

Il est réalisé à jeun au laboratoire avec un test acheté sur ordonnance en pharmacie.

### Antigène fécal

La recherche fécale d'H. pylori est une alternative au test respiratoire mais mais non remboursable.

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid >}}
graph TB
  suspicion["Suspicion d'ulcère"] --> gastro("Gastro-entérologue<br>EOGD")
  style suspicion stroke:#6200ee, stroke-width:1px
    gastro --> grossesse("Grossesse ou<br>allaitement ?")
      grossesse -- Non --> antibiogramme("Antibiogramme<br>Sensible clarithromycine ?")
        antibiogramme -- Sensible --> tri1("<b>Trithérapie 10j</b><br>IPP + amoxicilline<br>+ clarithromycine")
          tri1 --> controle("<b>Test respiratoire</b><br>4 semaines après la fin du ttt<br>(≥ 2 semaines sans IPP)")
        antibiogramme -- "Résistant" --> levofloS("Sensible lévofloxacine ?")
          levofloS -- Sensible --> levoflo("<b>Trithérapie 10j</b><br>IPP + amoxicilline<br>+ lévofloxacine") --> controle
          levofloS -- "Résistant" --> quadrit("<b>Quadrithérapie 10j</b><br>IPP + sel de bismuth<br>+ tétracycline + métronidazole") --> controle
          controle -- Négatif --> ok(Bactérie éradiquée)
          controle -- Positif --> avis(Avis du gastro-entérologue)
      grossesse -- Oui --> reporter("Reporter le<br>traitement")
{{< /mermaid >}}

> Arbre décisionnel. Traitement de l'Helicobacter pylori. D'après [HAS/CNPHGE 2017](https://www.has-sante.fr/upload/docs/application/pdf/2017-06/dir83/helicobacter_fiche_pertinence_traitement.pdf).

{{% /collapse %}}
{{%collapse "Sources" %}}

- [HAS et CNPHGE. La recherche de Helicobacter pylori. Mars 2019.](https://www.cnrch.fr/wp-content/uploads/2019/04/APP199_DOC_INFO_RECHERCHE_HELICO_PATIENT_CD_2019_03_13_V0.pdf)
- [HAS et CNPHGE. Traitement de l’infection par Helicobacter pylori chez l’adulte. Mai 2017.](https://www.has-sante.fr/upload/docs/application/pdf/2017-06/dir83/helicobacter_fiche_pertinence_traitement.pdf)
- [Groupe d'Études Français des Helicobacter (GEFH). Site officiel.](http://www.helicobacter.fr/)

TODO: http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/diagnostic-traitement-et-suivi-deradication/suivi-de-leradication/
https://www.has-sante.fr/jcms/c_2911396/fr/helicobacter-pylori-recherche-et-traitement

{{% /collapse %}}
