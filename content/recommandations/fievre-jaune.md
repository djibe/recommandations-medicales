+++
id = "0190e8c3-2942-7492-a9f1-db98e776253b"
title = "Fièvre jaune"
prefix = "la "
noindex = true
description = "Recommandations pour la prévention de la fièvre jaune par vaccination. Pour un voyage, qui vacciner et où se vacciner contre la fièvre jaune"
synonyms = ["Fièvre amarile", "typhus amaril", "vomito negro"]
auteurs = ["Jean-Baptiste FRON"]
date = "2021-02-12T08:55:00+02:00"
publishdate = "2021-02-12"
lastmod = "2024-04-26"
specialites = ["infectiologie"]
annees = "2024"
sources = ["MinSanté", "HCSP"]
tags = ["vaccin", "voyage"]
english = ["Yellow fever"]
sctid = "16541001"
icd10 = ["A95.9"]
image = true
imageSrc = "Moustique de la fièvre jaune, *Aedes aegypti*. James Gathany, domaine public via Wikimedia Commons"
todo = "clinique"
flowchart = true
+++

{{%article-summary%}}

La fièvre jaune et une maladie à [déclaration obligatoire]({{< relref "maladies-declaration-obligatoire.md" >}}).

La vaccination contre la fièvre jaune est:

- Obligatoire pour tout séjour en Guyane, dès 1 an (possible dès 9 mois) et certains pays ([Pasteur](https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage))
- Indispensable pour tous les pays endémiques ou épidémiques
- Réalisée en centre de vaccination homologué ([annuaire](https://solidarites-sante.gouv.fr/prevention-en-sante/preserver-sa-sante/vaccination-fievre-jaune))
- Au moins 10 jours avant le départ
- Par 1 dose unique
- Associée à la prévention contre les piqûres de moustiques (PPAV)

{{%/article-summary%}}
{{%collapse "Définition" %}}

Fièvre jaune
: Maladie hémorragique virale aiguë transmise par des moustiques infectés aux tropiques d'Afrique, d'Amérique centrale et d'Amérique du Sud. L'[ictère]({{< relref "ictere.md" >}}) engendré est à l'origine du nom de la maladie.
: La prévention passe par la lutte contre les piqûres de moustiques et la vaccination avant un voyage en zone infectée.

### Abréviations

PPAV
: protection personnelle anti-vectorielle (= protection contre les piqûres de moustiques et autres insectes)

PVVIH
: personne vivant avec le VIH
{.dl-inline}

{{% /collapse %}}
{{%collapse "Vaccination contre la fièvre jaune" %}}

> << La vaccination est la mesure de prévention la plus efficace contre la fièvre jaune. >> – *Ministère de la Santé*

Personnes éligibles à la vaccination contre la fièvre jaune:

- Résidant en Guyane
  - Nourrisson de 9 à 24 mois: une dose puis rappel à partir de 6 ans (délai max 10 ans)
  - Vaccination obligatoire chez le +1 an
  - Rappel à l'âge de 6 ans si vacciné avant l'âge de 2 ans
  - Rappel à 10 ans si vacciné pendant la grossesse ou [PVVIH]({{< relref "vih-sida.md" >}})
  - Rappel à 10 ans si immunodépression avec suivi du taux d'anticorps ± nouveau rappel
  - Rappel si vaccination date de +10 ans ET circulation active du virus
- Voyage en Guyane: obligatoire chez le +1 an
- Personnel de laboratoire manipulant du virus de fièvre jaune  
  Rappel à 10 ans.
- Voyage  
  Vaccination recommandée voire **obligatoire** pour de nombreux pays (voir plus bas).

> – *Calendrier vaccinal*

Le vaccin fièvre jaune est un vaccin vivant et donc contre-indiqué chez l'immunodéprimé et la femme allaitante.
{.alert .alert-warning}

### Voyage - faut-il vacciner contre la fièvre jaune ?

La vaccination anti-amarile est indispensable pour tout séjour en zone endémique ou épidémique. Elle doit être réalisée dans un centre homologué (voir *Liste des centres*).

En l'absence de vaccination, le séjour en zone d'endémicité est fortement déconseillé.

{{< card-link-external title="Vaccins recommandés par l'Institut Pasteur pour un voyage" url="https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage" subtitle="Institut Pasteur" image="pasteur" >}}

### Contre-indications à la vaccination anti-amarile

La vaccination anti-amarile est contre-indiquée en cas de:

- Adulte PVVIH ou enfant +5 ans avec CD4 < 200/mm³ (lire HCSP pour les enfants)
- Transplanté
- Greffé de cellules souches hématopoïétiques (CSH) depuis < 2 ans ou immunosuppression ou GVH chronique
- Chimiothérapie terminée depuis < 6 mois
- Immunosuppression, biothérapie ou corticothérapie: lire HCSP

> Pour la grossesse, si le voyage ne peut être reporté, << la vaccination contre la fièvre jaune doit être effectuée quel que soit le terme de la grossesse >> – *[CRAT](https://www.lecrat.fr/9431/)*

{{% /collapse %}}
{{%collapse "Liste des centres de vaccinations fièvre jaune agréés" %}}

La **vaccination anti-amarile** est réalisée dans un centre homologué avec remise d'un **certificat de vaccination** valable à vie.

1 dose au moins 10 jours avant le départ sans rappel (possible dès l'âge de 9 mois) dans un centre agréé.

{{< card-link-external title="Liste des centres de vaccination fièvre jaune (anti-amarile) par département" url="https://solidarites-sante.gouv.fr/prevention-en-sante/preserver-sa-sante/vaccination-fievre-jaune" subtitle="Ministère de la Santé" image="ministere" >}}

{{% /collapse %}}
{{%collapse "Mesures de prévention" %}}

Mesures de protection contre les piqûres:

{{< traitements/ppav >}}

{{% /collapse %}}
{{%collapse "Prévention de la fièvre jaune" "show" %}}

{{< mermaid title="Prise en charge de la prévention de la fièvre jaune par le médecin généraliste. Dr JB Fron d'après HCSP et Ministère de la Santé" >}}
graph TB
  prévention["<b>Prévention de la fièvre jaune</b>"] --> vaccination("<b>Vaccination</b><br>—<br>- Guyane<br>- Laboratoire du virus<br>- Voyage: vérifier sur Pasteur") -- Vaccin indiqué --> centre("Liste des centres de<br>vaccination anti-amarile")
    prévention --> moustiques("<b>Protection personnelle<br>anti-vectorielle (PPAV)</b><br>—<br>- Moustiquaires imprégnées:<br>lit, fenêtres<br>- Répulsifs cutanés<br>- Climatisation, ventilation<br>- Diffuseurs<br>- Raquettes électriques")
  style prévention stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- {{< references/calendrier-vaccinal >}}
- [Ministère de la Santé. Fièvre jaune. 2024.](https://sante.gouv.fr/soins-et-maladies/maladies/maladies-infectieuses/la-fievre-jaune)
- [Ministère de la Santé. Liste des centres de vaccination habilités à effectuer la vaccination contre la fièvre jaune (anti-amarile). Janvier 2024.](https://solidarites-sante.gouv.fr/prevention-en-sante/preserver-sa-sante/vaccination-fievre-jaune)
- {{< references/voyageur >}}
- [OMS. Fièvre jaune. 31/05/2023.](https://www.who.int/fr/news-room/fact-sheets/detail/yellow-fever)
- [Institut Pasteur. Fièvre jaune : mieux comprendre les rares effets secondaires des vaccins. 26/04/2021.](https://www.pasteur.fr/fr/journal-recherche/actualites/fievre-jaune-mieux-comprendre-rares-effets-secondaires-vaccins)
- [OMS. Mise à jour sur la fièvre jaune dans le monde, 2020. iris. 2021.](https://iris.who.int/handle/10665/344323)
- [HCSP. Vaccination de rappel contre la fièvre jaune pour la Guyane. Nouvelles recommandations. 17/12/2015.](https://www.hcsp.fr/Explore.cgi/avisrapportsdomaine?clefr=531)

{{%/sources%}}
{{% modal title="Répulsifs pour la PPAV" id="modal-repulsifs" size="lg" %}}

{{< traitements/repulsifs >}}

{{% /modal %}}
