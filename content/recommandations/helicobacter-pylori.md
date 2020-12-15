+++
title = "Helicobacter pylori"
prefix = " "
shortname = "HP"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-12-02T15:14:41+02:00
publishdate = 2020-12-02
lastmod = 2020-12-07
categories = ["hepato-gastro-enterologie"]
guidelineyears = "2017"
sources = ["HAS", "CNPGHE"]
tags = ["EOGD", "IPP"]
anglais = [" Helicobacter pylori"]
sctid = "80774000"
draft = false
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
Bactérie intestinale responsable d'infections aboutissants  des *ulcères gastro-duodénaux* et de *cancers gastriques* (adénocarcinomes et lymphomes du MALT).  
Son éradication prévient la survenue de ces complications.

### Abréviations

**EOGD:** Endoscopie œso-gastro-duodénale  
**HP:** Helicobacter pylori (ou H. pylori)  
**IPP:** Inhibiteurs de la pompe à protons

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Endoscopie œso-gastro-duodénale

L'*EOGD* doit être systématique pour analyse anatomopathologique, mise en culture avec recherche d'*H. pylori* et antibiogramme.

{{% /collapse %}}
{{%collapse "Traitement de Helicobacter pylori" %}}

{{%warning%}} En cas de grossesse ou d'allaitement, il faut différer le traitement.{{%/warning%}}

### Traitement de référence de l'Helicobacter pylori

Traitement de première intention d'une infection prouvée à H. pylori avec fonction rénale normale.

**Tout traitement antibiotique doit être suivi d'un contrôle d'éradication** (voir chapitre suivant *Contrôle de la guérison*).

{{%info%}}

Trithérapie pendant 10 jours:

- Oméprazole 20 mg matin et soir pendant le repas
- Amoxicilline 1 g matin et soir
- Clarithromycine 500 mg matin et soir

{{%/info%}}

#### Résistance à la clarithromycine

En cas de résistance à la *clarithromycine*, la *lévofloxacine* remplace la clarithromycine:

- Oméprazole 20 mg matin et soir pendant le repas pendant 10 jours
- Amoxicilline 1 g matin et soir pendant 10 jours
- Lévofloxacine 500 mg x 1/j pendant 10 jours

#### Résistance clarithromycine et lévofloxacine

En cas de double résistance *clarithromycine* et *lévofloxacine*, quadrithérapie avec bismuth:

- Oméprazole 20 mg matin et soir pendant le repas pendant 10 jours
- Pylera®: 3 gélules **x 4/j**  
(Après les repas du matin, du midi, du soir et au coucher, avec un grand verre d’eau)

{{%warning%}} Arrêt immédiat du traitement et avis médical en cas de signes neurologiques {{%/warning%}}

#### Allergie documentée à l'amoxicilline

Si allergie documentée à l’amoxicilline et souche sensible à la clarithromycine, trithérapie par:

- Oméprazole 20 mg matin et soir pendant le repas pendant 10 jours
- Clarithromycine 500 mg matin et soir pendant 10 jours
- Métronidazole 500 mg matin et soir

###### Allergie amoxicilline et résistance clarithromycine

Quadrithérapie avec bismuth (idem *Résistance clarithromycine et lévofloxacine*):

- Oméprazole 20 mg matin et soir pendant le repas pendant 10 jours
- Pylera®: 3 gélules **x 4/j**  

### Équivalences des IPP

IPP: une dose matin et soir pendant 10 jours  
Ésoméprazole 20 mg, lansoprazole 30 mg, oméprazole 20 mg, pantoprazole 40 mg ou rabéprazole 20 mg pendant le repas.

{{% /collapse %}}
{{%collapse "Contrôle de la guérison" %}}

### Test respiratoire à l'urée marquée

{{%info%}}
**Ordonnance pour la pharmacie**

Helikit® 75 mg. 1 boîte

---

**Ordonnance pour le laboratoire**

Réalisation du test Helikit®

Au moins 4 semaines après la fin du traitement.  
Vous ne devez pas avoir bu, ni mangé, ni fumé depuis la veille au soir.
{{%/info%}}

**Le contrôle de l'éradication d'H. pylori doit être systématique.**

Il doit être réalisé au moins 4 semaines après la fin de tout traitement  
ET au moins 2 semaines après l'arrêt total des IPP.

Il est réalisé à jeun au laboratoire avec un test acheté sur ordonnance en pharmacie.

En cas de test positif, recours à un avis spécialisé (Centre national de référence des Campylobacters et Hélicobacters).

### Antigène fécal

La recherche fécale d'H. pylori est une alternative au test respiratoire mais mais n'est pas remboursé.

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid >}}
graph TB
  suspicion["Suspicion d'ulcère"] --> gastro("Gastro-entérologue<br>EOGD")
  style suspicion stroke:#0077ff, stroke-width:1px
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

### Traitement probabiliste en l'absence de l'antibiogramme d'H. pylori

{{< mermaid >}}
graph TB
  probabiliste["H. pylori prouvé<br>ET antibiogramme manquant"] --> grossesse("Grossesse ou<br>allaitement ?")
  style probabiliste stroke:#0077ff, stroke-width:1px
    grossesse -- Non --> choix("Traitement au choix")
      choix -- Alternative 1 --> concomitant("<b>Quadrithérapie 14j</b><br>IPP + amoxicilline<br>+ clarithromycine<br>+ métronidazole")
      concomitant --> controle("<b>Test respiratoire</b><br>4 semaines après la fin du ttt<br>(≥ 2 semaines sans IPP)")
      choix -- Alternative 2 --> bismuth("<b>Quadrithérapie 10j</b><br>IPP + sel de bismuth<br>+ tétracycline + métronidazole")
        bismuth --> controle
          controle -- Négatif --> ok(Bactérie éradiquée)
          controle -- Positif --> switch(Utiliser le traitement alternatif)
            switch --> surv("<b>Test respiratoire</b>")
              surv -- Négatif --> ok2(Bactérie éradiquée)
              surv -- Positif --> EOGD("EOGD + antibiogramme<br>Avis spécialisé de HP")
    grossesse -- Oui --> reporter("Reporter le<br>traitement")

{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Informations du patient" %}}

- [Fiche info patient HAS et CNPHGE. La recherche de Helicobacter pylori (03.2019)](https://www.has-sante.fr/upload/docs/application/pdf/2019-03/helicobacter_recherche.pdf)
- [Questions-réponses HAS. Helicobacter pylori : recherche et traitement](https://www.has-sante.fr/jcms/c_2911396/fr/helicobacter-pylori-recherche-et-traitement)

{{% /collapse %}}
{{%collapse "Sources" %}}

- [HAS et CNPHGE. Traitement de l’infection par Helicobacter pylori chez l’adulte. Mai 2017.](https://www.has-sante.fr/upload/docs/application/pdf/2017-06/dir83/helicobacter_fiche_pertinence_traitement.pdf)
- [Groupe d'Études Français des Helicobacter (GEFH). Site officiel.](http://www.helicobacter.fr/)

TODO:

- http://www.helicobacter.fr/acces-aux-professionnels-de-la-sante/diagnostic-traitement-et-suivi-deradication/suivi-de-leradication/
- https://www.has-sante.fr/jcms/c_2911396/fr/helicobacter-pylori-recherche-et-traitement

{{% /collapse %}}
