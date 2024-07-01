+++
title = "Orgelet"
prefix = "l'"
description = "Recommandations pour la prise en charge d'une orgelet. Furoncle de la paupière à Staphylocoque doré avec traitement par collyre antibiotique pendant 8 jours"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-04-29T23:33:00+02:00"
publishdate = "2021-04-30"
lastmod = "2024-05-04"
specialites = ["ophtalmologie"]
annees = "2021"
sources = ["COUF"]
tags = []
english = ["Hordeolum externum", "sty"]
sctid = "1489008"
icd10 = "H00.0"
image = true
imageSrc = "Orgelet de la paupière supérieure droite. Andre Riemann, domaine public, via Wikimedia Commons"
flowchart = true
+++

{{%article-summary%}}

- L'orgelet est un furoncle du bord libre de la paupière
- Le diagnostic d'orgelet est clinique
- La prise en charge de l'orgelet consiste en un traitement antibiotique local pendant 8 jours
- Ne pas porter de lentilles de contact pendant toute la durée du traitement

Chapitres liés: [chalazion]({{< relref "chalazion.md" >}}), [furoncle]({{< relref "infection-cutanee-bacterienne.md" >}})

{{%/article-summary%}}

## Définition {.mt-5}

Orgelet
: Furoncle du bord libre de la paupière centré sur un follicule pilosébacé du cil.
: Infection bactérienne le plus souvent à *Staphylococcus aureus* (staphylocoque doré).  
Cliniquement, on observe une tuméfaction inflammatoire centrée par un point blanc au niveau du bord libre de la paupière.

## Traitement de l'orgelet {.mt-5}

- Prise en charge par traitement antibiotique pendant 8 jours
- Ne pas porter les lentilles de contact pendant toute la durée du traitement
- Penser à rechercher un [diabète](/tags/diabete/) en cas de récidives fréquentes (*Université St-Etienne*)
- Si échec: **avis ophtalmologique**

### Antibiothérapie dans le traitement de l'orgelet {.mt-5}

Prise en charge de l'orgelet par un collyre ou une pommade antibiotique **pendant 8 jours**.

{{< table title="Antibiotiques en collyre pour le traitement d'un orgelet. Dr JB Fron d'après BDPM" >}}
| Famille      | Spécialité  | Posologie |
|--------------|-------------|-----------|
| Acide fusidique | [fucithalmic 1% gel opht](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=69088419&typedoc=R) | 1 gte x 2/j |
| Cyclines*     | [aureomycine 1% pom opht](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=65889234&typedoc=R) | 1 appli x 1-2/j |
| Aminosides**  | [tobramycine 0,3% pom opht](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=61621356&typedoc=R) | 1 appli x 2-3/j |
| Ansamycines**  | [rifamycine 1 MUI/100 mg pom opht](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=68760013&typedoc=R) | 1 appli x 1-2/j |
{{< /table >}}

> *: ne pas utiliser chez l'enfant < 8 ans, femme enceinte ou allaitante  
  **: éviter pendant la grossesse

**Forme enkystée ou résistante** d'orgelet: incision du bord libre par l'ophtalmologue sous anesthésie locale.

## Prise en charge de l'orgelet {.mt-5}

{{< mermaid title="Prise en charge de l'orgelet par le médecin généraliste. Drs JB Fron et Alaedine Benani d'après COUF 2021" >}}
graph TB
  orgelet["<b>Orgelet</b><br>—<br>Furoncle du bord libre<br>de la paupière"] --> collyre("- Collyre antibiotique 8 jours<br>adapté à l'âge, sauf grossesse<br>- Pas de lentilles de contact") -. Échec .-> ophtalmologue(Ophtalmologue)
    collyre -. Récidives fréquentes .-> diabète("Rechercher<br>un diabète")
  style orgelet stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

## Sources {.mt-5}

- [Collège des Ophtalmologistes Universitaires de France (COUF). Pathologie des paupières. Chapitre 18. Item 86. 2021.](http://couf.fr/espace-etudiants/2eme-cycle-dcem/)
- [Afssaps. Collyres et autres topiques antibiotiques dans les infections oculaires superficielles. Recommandations. Médecine et Maladies Infectieuses. 2004.](https://www.sciencedirect.com/science/article/pii/S0399077X04002380)
