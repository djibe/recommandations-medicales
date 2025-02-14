+++
id = "0190e8c4-2ae3-7502-858a-b4f68b398045"
title = "Hépatite A (VHA)"
noindex = true
prefix = "l'"
description = "Recommandations pour la prise en charge de l'hépatite A. Indications à la vaccination et lors d'un voyage. Vaccins disponibles chez l'adulte et l'enfant"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-02-10T18:52:41+02:00"
publishdate = "2021-02-10"
lastmod = "2024-04-26"
specialites = ["hepato-gastro-enterologie"]
annees = "2024"
sources = ["MinSanté", "Pasteur"]
tags = ["fatigue", "hepatite", "HSH", "IST", "prevention", "vaccin", "voyage"]
english = ["Hepatitis A"]
sctid = "40468003"
icd10 = ["B15", "B15.9"]
image = true
imageSrc = "Pays à risque modéré à élevé d'infection par le virus de l'hépatite A. OMS 2010"
todo = "symptômes/fatigue, vaccin combiné"
flowchart = true
+++

{{%article-summary%}}

- Vacciner contre l'hépatite A: [HSH]({{% relref "hsh.md" %}}), enfant amené à séjourner en zone endémique, 14 jours autour d'un cas
- Le seul traitement de l'hépatite A est préventif par les mesures d'hygiène et la vaccination
- Vaccin dans le cadre d'un voyage: 1 injection 15 jours avant le départ et rappel à 6 mois (voire +), dès 1 an
- Hépatite A aiguë: [maladie à déclaration obligatoire]({{% relref "maladies-declaration-obligatoire.md" %}}) et prise en charge symptomatique

{{%/article-summary%}}
{{%collapse "Définition" %}}

Hépatite A
: Maladie infectieuse du foie causée par le virus de l'hépatite A (VHA) avec une transmission féco-orale (péril fécal).  
L'hépatite A est l'hépatite la plus fréquente au monde et peut être bénigne à grave (exceptionnellement **fulminante**) avec une guérison entraînant une immunité à vie.
: Les zones de **haute endémicité** de l'hépatite A sont: Afrique, Moyen-Orient, Asie et Amérique latine.

### Abréviations

HSH
: homme ayant des relations sexuelles avec des hommes

VHA
: virus de l'hépatite A
{.dl-inline}

{{% /collapse %}}
{{%collapse "Personnes à vacciner" %}}

Indications à la vaccination hépatite A:

- Jeune résidant en établissement de l'enfance en situation de handicap
- Mucoviscidose
- Pathologie à risque d'hépatopathie chronique: [hépatite B]({{% relref "hepatite-b.md" %}}), [hépatite C]({{% relref "hepatite-c.md" %}}), [alcool]({{% relref "sevrage-alcool.md" %}})
- Enfant de +1 an né de personne venant de zone endémique et susceptible d'y séjourner
- [HSH]({{% relref "hsh.md" %}})
- Entourage d'un cas d'hépatite A aiguë  
  Le plus tôt possible sans sérologie préalable, délai max de 14j après les premiers signes du cas si:
  - Jamais vacciné hépatite A
  - et né après 1945
  - et sans antécédent d'[ictère]({{% relref "ictere.md" %}})
  - et sans séjour > 1 an en zone de forte endémicité
  - Sinon: sérologie en urgence pour vaccination < 14j
- Entourage d'un cas d'une communauté précaire  
  Dans les 14 jours après le début des signes chez le cas.
- Professionnels
  - médecins avec exercice de pédiatrie ou de handicap
  - de la petite enfance (enfants sans propreté)
  - accueil de personnes handicapées
  - collecte des eaux usées et égouts
  - restauration collective
  - militaires
- Voyageurs
  - Toute personne > 1 an voyageant en zone avec hygiène précaire
  - Injection au moins 15 jours avant le départ
  - Sérologie si antécédent d'ictère, enfance en zone d'endémie ou né avant 1945

{{% /collapse %}}
{{%collapse "Voyage - Faut-il vacciner contre l'hépatite A ?" %}}

> [!INFO]
> La vaccination est recommandée à partir de l'âge de 1 an pour tous les voyageurs devant séjourner dans un pays où le niveau d'hygiène est faible, quelles que soient les conditions du séjour. (*HCSP 2023*)

{{< card-link-external title="Vaccins recommandés par l'Institut Pasteur pour un voyage" url="https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage" subtitle="Institut Pasteur" image="pasteur" >}}

{{% /collapse %}}
{{%collapse "Vaccins disponibles pour l'hépatite A" %}}

La vaccination peut être réalisée par un pharmacien ou un infirmier sans ordonnance.

### Vaccins hépatite A pour adultes

Vaccins après 15 ans:

{{< traitements/vaccin-hepatite-a >}}

### Vaccins hépatite A pour enfants

Vaccins possible de 1 à 15 ans:

- [Avaxim 80®](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=63777215&typedoc=R)  
  1 dose avec rappel à 6-36 mois (max 7 ans).
- [Havrix 720®](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=60152436&typedoc=R)  
  1 dose avec rappel à 6-12 mois (max 5 ans).

### Vaccination hépatite A et voyage

Une injection du vaccin **au moins 15 jours avant le départ**.  
Rappel à 6 mois ou plus selon la spécialité administrée.

Vaccins combinés: VHA-typhoïde Tyavax® et VHA-VHB Twinrix adulte®

{{% /collapse %}}
{{%collapse "Prévention de l'hépatite A" "show" %}}

{{< mermaid title="Prise en charge de la prévention de l'hépatite A par le médecin généraliste. Dr JB Fron d'après Ministère de la Santé" >}}
graph TB
  prévention["<b>Prévention de l'hépatite A</b>"] --> vaccination("<b>Vaccination</b><br>—<br>- HSH<br>- Enfant handicapé en résidence<br>- Mucoviscidose<br>- Hépatopathie, alcool<br>- Certains professionnels<br>- Voyage: vérifier sur Pasteur")
    prévention --> hygiène("<b>Mesures d'hygiène</b><br>—<br>Prévention du péril fécal:<br>lavage des mains, aliments cuits")
  style prévention stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- {{< references/calendrier-vaccinal >}}
- [Ministère de la Santé. L'hépatite A. 26/03/2024.](https://solidarites-sante.gouv.fr/soins-et-maladies/maladies/maladies-infectieuses/article/l-hepatite-a)
- [Vaccination Info Service Professionnels. Hépatite A. 21/09/2023.](https://professionnels.vaccination-info-service.fr/Maladies-et-leurs-vaccins/Hepatite-A)
- [Organisation Mondiale de la Santé. Hépatite A. 20/07/2023.](https://www.who.int/fr/news-room/fact-sheets/detail/hepatitis-a)

### Bibliographie en attente

- [AFEF. Hépatite A](https://afef.asso.fr/hepatite-a/)
- [Reconnaissance possible en Maladie professionnelle dans le cadre du Tableau 45](https://www.inrs.fr/publications/bdd/mp/tableau.html?refINRS=RG%2045)

{{%/sources%}}
