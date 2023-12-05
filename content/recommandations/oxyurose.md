+++
title = "Oxyurose"
prefix = "l'"
description = "Recommandations pour le diagnostic et la prise en charge de l'oxyurose. Scotch-test anal, traitement antiparasitaire par flubendazole Fluvermal et l'entourage"
synonyms = ["Entérobiase"]
auteurs = ["Jean-Baptiste FRON"]
date = "2023-07-17T17:38:12+02:00"
publishdate = "2023-07-18"
lastmod = "2023-12-01"
specialites = ["hepato-gastro-enterologie", "infectiologie", "pediatrie"]
annees = "2022"
sources = ["Collèges"]
tags = ["enfant", "nourrisson", "prurit"]
anglais = ["Enterobiasis", "oxyuriasis", "pinworm infection"]
sctid = "266162007"
icd10 = "B80"
image = true
imageSrc = "Deux femelles *Enterobius vermicularis* signant une oxyurose. Erich gasboy, CC BY, via Wikimedia Commons"
flowchart = true
+++

{{%article-summary%}}

- L'oxyurose est une parasitose cosmopolite et inter-humaine qui atteint surtout les enfants et leur entourage
- Évoquer une oxyurose en cas de prurit anal (vespéral et nocturne), vulvovaginite chez la petite fille ou de signes moins spécifiques: troubles du sommeil (cauchemars), irritabilité, difficultés de concentration
- Le diagnostic d'oxyurose est clinique avec la visualisation de ver blanc centimétrique dans les selles ou la culotte. Sinon bilan avec Scotch-test anal et analyse au laboratoire
- La prise en charge de l'oxyurose comprend un traitement anti-parasitaire dose unique de flubendazole avec renouvellement à 2 ou 3 semaines de tout l'entourage exposé (foyer, collectivité)
- Mesures associées anti-parasitaires: lavage des mains fréquent, ongles courts linge de toilette et de lit à 60°C

{{%/article-summary%}}
{{%collapse "Définition" %}}

Oxyurose
: Infection digestive par l'helminthe strictement humain *Enterobius vermicularis*, dit oxyure, de la famille des nématodes intestinaux.

### Abréviations

Anofel
: Association française des enseignants et praticiens hospitaliers titulaires de parasitologie et mycologie médicales

CMIT
: Collège des Universitaires des Maladies Infectieuses et Tropicales
{.dl-inline}

{{% /collapse %}}
{{%collapse "Clinique" %}}

Tableau clinique, signes et symptômes de l'oxyurose:

- Parasite cosmopolite
- Infection fréquente chez les [enfants](/tags/enfant/) et leur entourage
- Contamination interhumaine directe (mains, sous-vêtements, literie ...) et auto-infestation par grattage anal
- Symptômes de l'oxyurose:
  - Asymptomatique
  - Prurit anal (vespéral et nocturne)
  - Vulvovaginite chez la petite fille
  - Troubles mictionnels
  - Lésions périnéales de grattage
  - Douleurs abdominales, diarrhées
  - Troubles du sommeil (cauchemars), irritabilité, difficultés de concentration

Le diagnostic d'oxyurose est clinique lorsque des **vers blancs centimétriques** sont vus dans les selles ou sur la marge anale.

{{% /collapse %}}
{{%collapse "Diagnostic différentiel" %}}

### Autres causes de prurit anal

- [Hémorroïdes]({{< relref "hemorroides.md" >}})
- Abcès anal
- Fistule anale
- [Dermatite atopique]({{< relref "dermatite-atopique.md" >}}) ou de contact
- [Psoriasis]({{< relref "psoriasis.md" >}})
- [Candidose]({{< relref "mycoses-dermatophytes-candidoses.md" >}})
- [Ténia]({{< relref "tenia.md" >}})
- Condylomes
- Herpès
- Atteinte périnéale d'une MICI

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

Le diagnostic peut être réalisé avec le **<< Scotch®-test >> anal** (test de Graham ou test à la cellophane adhésive).

Application matinale de ruban adhésif transparent sur la marge anale le matin (en déplissant les plis radiés de l'anus) puis recollé sur une surface porte-objet et analyse au laboratoire pour la mise en évidence des œufs.

Une [éosinophilie]({{< relref "hypereosinophilie.md" >}}) peut également être observée.

{{% /collapse %}}
{{%collapse "Traitement de l'oxyurose" %}}

L'oxyurose doit toujours être traitée
{.alert .alert-info}

La prise en charge de l'oxyurose comprend le traitement de tous les sujets de l'entourage (foyer, collectivité) à 2 reprises (*CMIT*):

- Lavage des mains régulier
- Couper les ongles courts et les brosser
- Changer et laver le linge de nuit à 60°C, les doudous
- Antiparasitaire benzimidazolé: <mark>flubendazole ([Fluvermal®](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=68636624&typedoc=R) à partir de 12 mois) 100 mg (1 cp ou 1 cm) dose unique à renouveler à J15</mark> (ou J21)  
  ou [albendazole](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=69731801&typedoc=R) (posologie selon l'âge) dose unique à renouveler à J15 (ou J21)

{{% /collapse %}}
{{%collapse "Prise en charge de l'oxyurose" "show" %}}

{{< mermaid title="Prise en charge de l'oxyurose par le médecin généraliste. Dr JB Fron d'après Collèges" >}}
graph TB
  suspicion["<b>Suspicion d'oxyurose</b><br>—<br>Enfant ++ ou entourage:<br>- Prurit anal<br>vespéral et nocturne<br>- Vulvovaginite<br>- Troubles mictionnels<br>- Lésions de grattage périnéales<br>- Douleurs abdominales, diarrhées<br>- Troubles du sommeil, irritabilité"] --> clinique("<b>Clinique</b><br>—<br>- Entourage<br>- Symptômes<br>- Examen anal") --> vers(Oxyures observés ?) -- Oui --> traitement("<b>Traitement systématique</b><br>—<br>- Entourage<br>- Hygiène des mains<br>- Linge de corps, draps<br>- Flubendazole dose unique") -- J15 --> répéter(Flubendazole dose unique)
      vers -- Non --> scotch(Scotch-test anal) -- Positif --> traitement
        scotch -- Négatif répété --> différentiel
    clinique -- Diagnostic différentiel --> différentiel("Prurit anal:<br>- Hémorroïdes<br>- Abcès, fistule anale<br>- Eczéma, psoriasis<br>- Candidose<br>- Condylomes<br>- Herpès<br>- MICI")
  style suspicion stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{%/collapse%}}
{{%sources%}}

- Association Française des Enseignants & Praticiens Hospitaliers titulaires de Parasitologie & Mycologie Médicale (Anofel). Chapitre 11: Oxyurose. 2022.
- [CMIT. Parasitoses digestives : giardiose, amoebose, téniasis, ascaridiose, oxyurose. Item 172. ECN.Pilly. 2021. (PDF)](https://www.infectiologie.com/UserFiles/File/pilly-etudiant/ecn-2020-172-web.pdf)
- Prescrire Redaction. Oxyurose. Premiers Choix Prescrire. Rev Prescrire. 2021.

{{%/sources%}}
