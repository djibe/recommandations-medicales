+++
title = "Cryptorchidie"
prefix = "la "
description = "Recommandations pour le diagnostic et la prise en charge de la cryptorchidie. Echographie abdominale et chirurgie avant deux ans pour préserver le testicule"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-04-30T16:38:00+02:00"
publishdate = "2021-05-01"
lastmod = "2023-11-30"
specialites = ["pediatrie", "urologie"]
annees = "2021"
sources = ["Collèges", "SFP"]
tags = ["depistage"]
anglais = ["Cryptorchidism"]
sctid = "204878001"
icd10 = "Q53.9"
image = true
imageSrc = "La cryptorchidie. Lamiot via Wikipedia Commons, CC BY-SA 3.0"
flowchart = true
+++

{{%article-summary%}}

- Dépistage systématique de la cryptorchidie: palper les bourses de tous les petits garçons (2 à 4% atteints)
- La chirurgie d'un testicule cryptorchide est réalisée idéalement à partir d'un an
- Surveillance post-opératoire du testicule pendant un an (risque d'atrophie testiculaire)
- Réévaluation du garçon à la puberté pour surveiller le développement pubertaire
- Éducation du patient sur l'auto-palpation pour le dépistage du [cancer du testicule]({{< relref "cancer-testicule.md" >}})

{{%/article-summary%}}
{{%collapse "Définition" %}}

Cryptorchidie
: Localisation inaboutie du testicule soit par obstacle à sa descente intra-abdominale, soit par descente incomplète (alors situé à la racine de la bourse ou devant le pubis). Problèmes d'adhérences pouvant le garder piégé.  
Elle est différente de l'*ectopie testiculaire* où le testicule n'est pas sur le trajet attendu.
: Évolution: **la moitié descend spontanément sous 6 mois**, ⅔ à 1 an ont migré vers les bourses.
: Enjeux: hypogonadisme, [infertilité]({{< relref "infertilite-couple.md" >}}) (30-40% si unilatéral à 80% si bilatéral), torsion du cordon spermatique, [cancer du testicule]({{< relref "cancer-testicule.md" >}}) (RR de 30-40).

Testicule oscillant ou << testicule ascenseur >>
: Testicule palpé de façon intermittente entre la bourse et la région inguinale.

### Épidémiologie de la cryptorchidie

- Prévalence: 2 à 4% des nouveaux-nés, 1% des garçons à 1 an, 20 à 30% des prématurés
- L'atteinte est bilatérale dans 20% des cas

{{% /collapse %}}
{{%collapse "Clinique" %}}

Le diagnostic de cryptorchidie est clinique par palpation des bourses.

3 situations:

- Testicule palpé en inguinal au-dessus de la bourse, mais fixé et impossible à descendre
- Testicule palpé mais très mobile et ne restant dans la bourse que par intermittence
- Testicule jamais palpé  
  Soit intra-abdominal, soit atrophique.

Rechercher d'autres anomalies associées:

- Antécédents familiaux de cryptorchidie
- Micropénis (verge < 2 cm chez le nouveau-né à terme)
- Hypospadias
- Autres anomalies: ligne médiane, cardiaque, rénale

La palpation de la bourse est plus facile avec le garçon assis en tailleur.
{.alert .alert-info}

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

Échographie abdomino-scrotale
{.alert .alert-info}

Autres bilans d'une cryptorchidie: avis endocrinien, cœlioscopie exploratrice.

En cas de cryptorchidie bilatérale: caryotype si hypospade.

{{% /collapse %}}
{{%collapse "Traitement de la cryptorchidie" %}}

La prise en charge de la cryptorchidie est chirurgicale par *orchidopexie* **avant 2 ans** (première consultation avant 6 mois, idéalement avant 1 an).

Indications au traitement chirurgical d'un enfant cryptorchide:

- Testicule palpable mais au-dessus de la bourse
- Testicule cryptorchide: exploration par cœlioscopie

Déroulement:

- Hospitalisation courte 1-2 jours
- Éviter piscine et vélo pendant 15 jours
- Nécessite toujours une surveillance spécialisée à distance  
  Atrophie testiculaire secondaire dans 1-2% des cas à 6-12 mois post-chirurgie.
- Pose de prothèse à la puberté

Surveillance annuelle des testicules oscillants (30% nécessiteront une intervention chirurgicale).

Ensuite, suivi de la puberté et apprentissage de l'auto-palpation pour le dépistage du [cancer du testicule]({{< relref "cancer-testicule.md" >}}). Ne pas attendre en cas d'[infertilité]({{< relref "infertilite-couple.md" >}}) à l'âge adulte.

### Information des parents d'un garçon cryptorchide

[Document d'information des parents de l'AFU](https://www.urofrance.org/base-bibliographique/cryptorchidie-intervention-chirurgicale-pour-cryptorchidie) et le [document d'Ameli sur la cryptorchidie](https://www.ameli.fr/assure/sante/themes/cryptorchidie-testicule-non-descendu-ectopie-testiculaire/comprendre-cryptorchidie).

Risque de découvrir un testicule atrophié.  
Risque d'atrophie testiculaire secondaire et ses retentissements sur la stérilité.  
En l'absence de testicule ou simple présence d'un reliquat, exérèse de ce dernier et mise en place de prothèse à l'adolescence.

{{% /collapse %}}
{{%collapse "Prise en charge de la cryptorchidie" "show" %}}

{{< mermaid title="Prise en charge de la cryptorchidie par le médecin généraliste. Dr JB Fron d'après Collèges 2021 et SFP" >}}
graph TB
  dépistage["Dépistage de la cryptorchide chez<br>tous les nourrissons masculins"] --> palpation("Palpations répétées des bourses") --> présent(Testicule en place)
    palpation --> oscillant(Testicule oscillant) --> chirurgien("Avis du chirurgien<br>pédiatrique avant 6 mois:<br>- Chirurgie avant 2 ans<br>- Endocrinologue") -- Adolescence --> puberté("- Suivi pubertaire<br>- Auto-palpation testiculaire<br>- Risque infertilité")
    palpation --> absent("Testicule(s) absent(s)<br>= cryptorchidie<br>—<br>Recherche anomalie verge,<br>syndromique") --> chirurgien
  style dépistage stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{%/collapse%}}
{{%sources%}}

- [Ameli. Comprendre la cryptorchidie ou testicule non descendu. 13/01/2023.](https://www.ameli.fr/assure/sante/themes/cryptorchidie-testicule-non-descendu-ectopie-testiculaire/comprendre-cryptorchidie)
- [Collège Français des Enseignants en Urologie (CFEU). Pathologie génito-scrotale chez le garçon et chez l'homme. Item 50. Référentiel du collège d'urologie 5ème édition. 2021. (PDF)](https://www.urofrance.org/wp-content/uploads/2021/11/Item-50-Pathologies-genito-scrotale.pdf)
- {{< references/college-endocrino >}}
- [Le Moal J et al. Variations spatiotemporelles du risque de cryptorchidies opérées en France et hypothèses environnementales. Santé publique France. 2021.](https://www.santepubliquefrance.fr/docs/variations-spatiotemporelles-du-risque-de-cryptorchidies-operees-en-france-et-hypotheses-environnementales)
- [Gueorguieva I, Bouvattier C; SFP. Cryptorchidie. Pas à Pas en Pédiatrie. 2017.](https://pap-pediatrie.fr/endocrinologie/cryptorchidie)

{{%/sources%}}
