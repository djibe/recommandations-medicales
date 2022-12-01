+++
title = "Arrêt du tabac ou sevrage tabagique"
titleSeo = "Arrêt du tabac"
prefix = "l'"
description = "TODO:"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2022-11-21T14:11:22+01:00"
publishdate = "2022-12-01"
lastmod = "2022-12-01"
specialites = ["addictologie"]
annees = "2019"
sources = ["HAS", "INCa"]
tags = ["adolescent", "depistage", "dyspnee", "HTA", "infertilite", "nephropathie", "prevention", "risque cardiovasculaire", "SAS", "tabac"]
anglais = ["Smoking cessation therapy"]
sctid = "710081004"
chart = true
flowchart = true
image = true
imageWEBP = true
imageSrc = "Composants toxiques de la cigarette par La Ligue contre le cancer"
todo = "Collège, prise de poids, aider à gérer la rechute: HAS p.33+35+36"
+++

{{%article-summary%}}

- Le tabagisme est la première cause de mortalité évitable
- Dépister systématiquement le tabagisme et rappeler le conseil d'arrêt:  
  << Fumez-vous ? >>, si oui: << Arrêter de fumer est la décision la plus importante que vous pouvez prendre pour protéger votre santé. Je peux vous aider si vous le souhaitez >>
- Note personnelle: informer sur le caractère gratuit et illimité sur ordonnance de la prise en charge des traitements d'aide à l'arrêt
- Pour tous les fumeurs: proposer une prise en charge par des [substituts nicotiniques]({{< relref "substituts-nicotiniques.md" >}}) pour viser l'abstinence voire une réduction de la consommation de tabac
- {{< modal-btn modal-fagerstrom >}}Score de Fagerström simplifié{{< /modal-btn >}} et [liste des substituts nicotiniques remboursés]({{< relref "substituts-nicotiniques.md" >}})
- Ressources patient: [brochure patient (PDF)](https://www.santepubliquefrance.fr/content/download/488808/3693220?version=1), [Tabac Info Service.fr](https://www.tabac-info-service.fr) ([l'appli avec e-coaching](https://play.google.com/store/apps/details?id=fr.cnamts.tis) ou au {{<phone>}}3989{{</phone>}}) et [l'annuaire des tabacologues](https://www.tabac-info-service.fr/je-trouve-un-tabacologue) ou des [CSAPA](https://annuaire.action-sociale.org/etablissements/readaptation-sociale/centre-de-soins-accompagnement-prevention-addictologie-197.html)

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Tabagisme
: Usage de tabac quelle que soit la forme: fumé (cigarette, cigare, tabac à rouler, pipe, narguilé), prisé, mâché (snus), associé ou non à d'autres substances (joint), etc.
: Risque de complications quelque soit la forme, la durée et la quantité (BPCO, maladie cardiovasculaire). Les risques sont identiques pour le tabagisme passif.
Le tabagisme est la deuxième cause de mortalité mondiale (5,1 millions de décès/an) et la première cause évitable de mortalité.

> << Il n'existe pas de seuil au-dessous duquel fumer ne représente pas de risque >> (*SPF*)

Craving
: Besoin irrépressible de consommer. Le craving est un symptôme de la dépendance.

CSAPA
: Centres de soins, d'accompagnement et de prévention en addictologie

Dépendance (ou addiction)
: Perte de la liberté de s'abstenir. Elle se caractérise par un désir compulsif de consommer associé à la perte de contrôle de la consommation.

Faux pas
: Prise isolée de tabac chez un sujet abstinent dans une démarche d'arrêt. On distingue le faux pas (lapse en anglais) de la rechute (relapse en anglais) par le fait que le faux pas est ponctuel.

### Bénéfices de l'arrêt

{{%info%}}<< Il n'est jamais trop tard pour arrêter (*HAS 2014*) >>  
Arrêter à 40 ans augmente l'espérance de vie de 7 ans, à 50 ans de 4 ans, à 60 ans de 3 ans.{{%/info%}}

Bénéfices importants sur la morbi-mortalité (cardiovasculaire et cancer du poumon ++).

*Section incomplète*

### Épidémiologie du tabagisme en France

- **Décès annuels:** 75.000 (2019 soit 205 morts/j)  
  Répartition: 47.000 cancers, 20.000 cardiovasculaires et 11.000 par maladies respiratoires.
- 20% des cancers attribuables au tabac (90% des cancers bronchopulmonaires) et 80% des BPCO
- Première cause de mortalité cardiovasculaire évitable
- **Fumeurs quotidiens:** 25% (4<sup>e</sup> rang de l'OCDE)
- 1 fumeur sur 2 meurt de son tabagisme
- 1100 morts/an suite au tabagisme passif
- Coût pour la société: 120 milliards d'euros/an (*OFDT*)

Début d'adolescence est prédictif de dépendance adulte et d'autres dépendances.

> Données *Santé Publique France*

{{< figure-chart title="Prévalence du tabagisme quotidien parmi les 18-75 ans en France de 2000 à 2020 (<em>SPF 2021</em>). NB: Échelle non linéaire années en abscisse" >}}

<script>
const chartOptions = {
  series: [{
    name: 'Moyenne',
    data: [30, 27.5, 29.7, 28.5, 29.4, 29.4, 26.9, 25.4, 24, 25.5]
  }],
  chart: { type: 'line', height: 280 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5'], curve: 'smooth', width: 4 },
  title: { text: 'Prévalence du tabagisme quotidien parmi les 18-75 ans' },
  xaxis: { categories: [2000, 2005, 2010, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
  yaxis: [
    {
      title: { text: 'Prévalence (%)'},
      labels: { style: { colors: '#757575' }},
      decimalsInFloat: 1,
      tickAmount: 4,
      min: 0
    }
  ],
  tooltip: { y: [{ formatter: function(value) { return `${value} %` }}] },
}
</script>

### Abréviations

TCC
: thérapie cognitive et comportementale

TNS
: traitement nicotinique de substitution ({{%lang%}}nicotine replacement therapy - NRT{{%/lang%}})
{.dl-inline}

### Complications du tabac

[Commander les brochures *SPF* Pourquoi arrêter de fumer](https://www.santepubliquefrance.fr/determinants-de-sante/tabac/documents/depliant-flyer/pourquoi-arreter-de-fumer)

Complications du tabagisme:

- Cancers
- Maladies cardiovasculaires
- Maladies respiratoires
- Parodontopathies: x 2,5-6 (NHANES III)
- DMLA
- Troubles de cicatrisation et vieillissement cutané
- Complications périopératoires
- Femmes: ostéoporose, ménopause précoce, AVC par contraception combinée
- Grossesse: GEU x2 (35% des GEU), fausse-couche précoce x3, MFIU (+47%), accouchement prématuré, RCIU et petit poids de naissance (-300g), réduction des capacités scolaires et cognitives de l'enfant, malformations congénitales
- Dysfonction érectile
- Tabagisme passif
  - IDM, AVC (x2), cancer du poumon (+25% si conjoint fume) ou maladie respiratoire, cancer des sinus
  - Nourrisson: mort subite x2
  - Enfant: otites, asthme, pneumopathie

Autres maladies avec sur-représentation de fumeurs: Algies vasculaires de la face, maladie de Verneuil, gastrite, ulcère gastro-duodénal, cataracte

Reproduction: réduit fertilité chez les deux sexes, les chances en AMP, allonge le délai de conception, aggrave l'effet d'âge sur la fécondité, augmente morbi-mortalité péri-natales.

{{% /collapse %}}
{{%collapse "Dépistage et évaluation de la dépendance au tabac" %}}

{{%info%}}1\) Dépister 2) Évaluer la dépendance 3) Conseil d'arrêt  
4) Motivation à l'arrêt{{%/info%}}

### 1) Dépistage du tabagisme

Le dépistage doit être systématique pour tous: Fumez-vous ?

Si oui: Avez-vous déjà essayé de fumer ?

> Voir l'arbre décisionnel en bas de la page

Demander l'accord du patient pour parler de sa consommation.

### 2) Évaluation de la dépendance à la nicotine

{{< modal-btn modal-fagerstrom6 >}}Fagerström complet{{< /modal-btn >}} ou version simplifiée ci-dessous.

<div class="card card-body py-0 my-3">
{{< scores/fagerstrom >}}
</div>

Rechercher également un syndrome de sevrage, une perte de contrôle, un désir persistant ou une incapacité à réduire ou arrêter sa consommation.

La dépendance est certaine en présence d'au moins 1 critère parmi:

- Rechute après une tentative d'arrêt
- Complications ([BPCO]({{< relref "bronchopneumopathie-chronique-obstructive.md" >}}), [artérite]({{{{< relref "arteriopathie-obliterante-membres-inferieurs.md" >}}}}), [cancer](/tags/cancer/) ...) ou risques encourus dans certaines situations spécifiques (intervention chirurgicale, grossesse ...)
- Souci constant d'approvisionnement de tabac

### 3) Conseil d'arrêt

Le conseil consiste à indiquer à un fumeur qu'il est bénéfique pour sa santé d'arrêter de fumer. Il s'adresse à tous les fumeurs, même en cas de cancer.

Rappeler que l'arrêt du tabac n'est pas qu'une question de volonté mais qu'il s'agit d'une addiction qui peut nécessiter une prise en charge thérapeutique par un professionnel.

{{%info%}}

#### Exemples de conseils d'arrêt

- Arrêter de fumer est la décision la plus importante que vous pouvez prendre pour protéger votre santé. Je peux vous aider si vous le souhaitez
- Il est important que vous arrêtiez de fumer, et je peux vous aider
- Je peux vous aider à arrêter de fumer. Ce sera sûrement plus facile que d'essayer tout seul
- Arrêter de fumer pendant que vous êtes malade est une bonne décision, ce peut être l'occasion de reprendre votre liberté face au tabac
- Fumer occasionnellement ou en faible quantité est encore dangereux
- Il n'est jamais trop tard pour arrêter et c'est encore mieux si on arrête tôt
- Continuer à fumer aggravera votre bronchite ou votre asthme (...), en revanche arrêter de fumer pourra améliorer votre santé de façon importante
- La fréquence des infections respiratoires des enfants est supérieure dans un environnement fumeur

> *HAS 2014*
{{%/info%}}

### 4) Évaluation de la motivation à l'arrêt

Étapes par lesquelles passe le fumeur selon le modèle descriptif des changements de comportements développé par Prochaska et DiClemente et prise en charge proposée:

1. Pré-intention: le patient n'a pas encore envisagé d'arrêter de fumer  
  Conseiller d'arrêter, proposer une {{< modal-btn modal-fagerstrom >}}évaluation du niveau de dépendance{{< /modal-btn >}}, proposer une réduction avec TNS et un soutien thérapeutique par un soignant.
2. Intention: il pense à arrêter de fumer mais est encore ambivalent  
  Encourager à arrêter avec les traitements recommandés, envisager une réduction.  
  Explorer l'ambivalence et la motivation (TODO: échelle analogique d'évaluation).
3. Décision: il prend la décision d'arrêter de fumer et élabore une stratégie d'arrêt  
  Conseiller de fixer une date d'arrêt.
4. Action: il est activement engagé dans le changement, il arrête de fumer  
  Prise en charge adaptée.
5. Maintien/liberté: il a recouvré sa liberté face à la dépendance, mais reconnaît qu'il doit demeurer vigilant pour éviter une rechute  
  Aider à gérer les symptômes de sevrage.

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

- Statut tabagique de tous les patients et leur entourage
  - Tous les modes de consommation du tabac
  - Dépendance: {{< modal-btn modal-fagerstrom >}}Fagerström-2{{< /modal-btn >}}
- Autres toxiques ({{< modal-btn modal-deta >}}alcool CAGE-DETA{{< /modal-btn >}}, {{< modal-btn modal-cast >}}cannabis CAST{{< /modal-btn >}}), addictions comportementales
- Facteurs de risque cardiovasculaires  
  Dont [contraception]({{< relref "contraception.md" >}}), hypertension artérielle, diabète, hérédité cardiovasculaire ...
- Antécédents  
  Cancer, [migraine]({{< relref "migraine.md" >}}), cardiovasculaires, respiratoires et signes évocateurs.
- Risque cardiovasculaire  
  {{< modal-btn modal-rcv >}}Prévention secondaire{{< /modal-btn >}} ou primaire ({{< scores/heartscore >}})
- Anxiété et dépression  
  {{< modal-btn modal-had >}}HAD{{< /modal-btn >}}, anxiété de Beck, dépression de Beck.

Informer sur les **signes de sevrage** en nicotine: troubles de l'humeur, insomnie, irritabilité, frustration, colère, anxiété, difficultés de concentration, augmentation de l'appétit, fébrilité.

{{% /collapse %}}
{{%collapse "Examens complémentaires chez un fumeur" %}}

Examens à envisager chez le fumeur:

- Dépistages des cancers recommandés (colorectal, sein, col de l'utérus)
- Dépistages: {{< modal-btn modal-depistage-bpco >}}BPCO{{< /modal-btn >}}, coronaropathie, {{< modal-btn modal-depistage-prevalent >}}pathologie vasculaire{{< /modal-btn >}}
- [Dépistage du cancer du poumon]({{< relref "cancer-poumon.md" >}})
- Dépistage de l'[anévrysme de l'aorte abdominale (AAA)]({{< relref "anevrysme-aorte-abdominale.md" >}}): Homme de 65 à 75 ans avec tabagisme actif ou sevré depuis < 20 ans  
  et Homme de 50 à 75 ans avec antécédent familial d'AAA au 1<sup>er</sup> degré (parents/fratrie)

{{% /collapse %}}
{{%collapse "Traitements du sevrage tabagique" %}}

Privilégier des **consultations dédiées** avec un **suivi hebdomadaire** puis mensuel pendant 3 à 6 mois.

Prise en charge du patient souhaitant arrêter de fumer:

- Suivi par un professionnel de santé
- Tabacologue ([annuaire](https://www.tabac-info-service.fr/je-trouve-un-tabacologue))  
  Indications: demande du patient, rechutes répétées, accompagnement psychologique spécifique, poly-addictions, comorbidités psychiatriques.
- Soutien psychologique ± TCC
- Suivi bucco-dentaire rigoureux
- Voire traitement médicamenteux
- Auto-support: [Tabac Info Service](https://www.tabac-info-service.fr/), appli [Kwit](https://play.google.com/store/apps/details?id=fr.kwit.android)

{{< references/tabac-info-service >}}

{{%warning%}}Non recommandés (sans efficacité démontrée) mais inoffensifs si le patient y tient: activité physique, acupuncture, hypnose{{%/warning%}}

### Traitements médicamenteux pour l'arrêt du tabac

Les traitements médicamenteux permettant de soulager les symptômes de sevrage en nicotine, de réduire l'envie de fumer et de prévenir les rechutes.

En première intention: **[substituts nicotiniques]({{< relref "substituts-nicotiniques.md" >}})** pour l'arrêt ou la réduction de consommation (pour tous).

#### Substituts nicotiniques (TNS)

{{%info%}}Promouvoir les substituts nicotiniques pour tous afin de réduire la consommation: Débuter avec 1 cigarette = 1 mg de nicotine. [Liste des substituts nicotiniques remboursés]({{< relref "substituts-nicotiniques.md" >}}){{%/info%}}

À savoir sur les traitements nicotiniques de substitution (TNS):

- Informer  
  Le TNS aide à réduire la consommation, augmente les chances d'arrêt, innocuité prouvée sur des années, ne nécessite pas un sevrage total.
- Toujours associer patch + forme orale en cas de manque
- Essayer pendant **au moins 3 mois à dose efficace**
- Si besoin appliquer plusieurs patchs  
  En cas d'intolérance cutanée, changer de site tous les jours ou changer de marque.
- Possibles dès 15 ans, aucune limitation pendant la grossesse
- Promouvoir en post-partum afin de réduire le nombre élevé de rechutes (80% dans l'année)
- Arrêt du tabac immédiat préconisé mais une réduction progressive sous TNS est possible

##### Adapter les doses de nicotine

Signes de sous-dosage en nicotine
: Continue à fumer ou pulsions, troubles de l'humeur, insomnie, irritabilité, frustration, colère, anxiété, difficultés de concentration, augmentation de l'appétit, fébrilité.

Signes de surdosage
: Palpitations, céphalées, bouche << pâteuse >>, diarrhée, nausées, lipothymies, insomnie.
{.dl-inline}

#### Varénicline

Traitement de deuxième intention chez l'adulte.

CI grossesse/allaitement

{{% /collapse %}}
{{%collapse "Pour en savoir plus" %}}

### Vidéos de formation

{{< video poster="https://splf.fr/wp-content/uploads/2021/11/Webinaire-2021-11-16-v2-1300-500.png" mp4="http://docs.splf.fr/videos/Webinaires/2021/Webinaire-SPLF-2021-11-16.mp4" description="Webinaire SPLF: Tabac comment aider nos patients à arrêter de fumer" width="600" height="330" >}}

### Entretien motivationnel

Approche relationnelle centrée sur le patient, dont le but est de susciter ou renforcer la motivation au changement, pour aider le patient à changer son comportement.

Il se fonde sur l'idée qu'une personne n'arrivera à des changements que si la motivation vient de la personne elle-même.  
L'attitude du professionnel consistera donc en une exploration empathique de l'ambivalence de la personne face au changement.

L'entretien motivationnel n'est pas une confrontation ou une persuasion.

#### Exemple de méthode d'entretien motivationnel

- << Que vous apporte le fait de fumer ? >>
- << Pour quelles raisons souhaiteriez-vous cesser de fumer ? >>
- << Avez-vous peur d'arrêter de fumer ? Si oui, pour quelles raisons ? >>
- << Si vous décidez d'arrêter de fumer, quelle confiance auriez-vous dans votre capacité à y parvenir ? >>

TODO: Évaluation du sentiment d'efficacité

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid title="Dépistage systématique du tabagisme et prise en charge de l'arrêt du tabac (hors bilan des complications). Dr JB Fron d'après HAS 2014" >}}
graph TB
  tabagisme["<strong>« Fumez-vous ? »</strong>"]
  style tabagisme stroke:#4150f5, stroke-width:1px
  tabagisme -- Oui --> essai("« Avez-vous déjà envisagé<br>d'arrêter de fumer ?<br>Voulez-vous qu'on<br>prenne le temps d'en parler ? »<br>Proposer une brochure")
    essai --> Oui --> debut("<b>Intention</b><hr>- Croyances, dépendance<br>- Conseiller d'arrêter<br>- Évaluer la motivation") --> arrêt(<b>Action</b><hr>- TNS<br>- Suivi hebdomadaire<br>- Appli Tabac Info<br>- Soutien psychologique)
    essai -- Non --> refus("<b>Pré-intention</b><hr>Conseiller d'arrêter<br>« Savez-vous qu'il existe<br>des moyens pour vous aider<br>à arrêter de fumer et<br>à soulager les<br>symptômes de sevrage ?»<br>- Rappeler votre disponibilité<br>- Proposer une réduction (&plusmn; TNS)")
  tabagisme -- Non --> antecedent("« Avez-vous<br>déjà fumé ? »")
    antecedent -- Oui --> ancien("« - Combien de temps ?<br>- Quand avez-vous<br>arrêté ? »")
      ancien -- Arrêt récent --> ancien1("« Vous avez pris une décision<br>bénéfique pour votre santé »<br>Évaluer les envies et leur gestion") --> ouvert("« Sachez que je suis<br>disponible pour vous aider<br>si vous craignez de rechuter »")
      ancien -- Arrêt ancien --> ancien2(Y penser lors<br>d'événements de vie) --> ouvert
    antecedent -- Non --> non(Non fumeur)
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

{{< card-link title="Se former aux addictions" subtitle="Intervenir Addictions" url="https://intervenir-addictions.fr">}}

- [Santé Publique France. Tabac.](https://www.santepubliquefrance.fr/determinants-de-sante/tabac)
- [INCa. Panorama des cancers en France - Édition 2022.](https://www.e-cancer.fr/Expertises-et-publications/Catalogue-des-publications/Panorama-des-cancers-en-France-Edition-2022)
- [HAS. Sevrage tabagique : des outils pour repérer et accompagner les patients. Article. 2019.](https://www.has-sante.fr/jcms/pprd_2974738/fr/sevrage-tabagique-des-outils-pour-reperer-et-accompagner-les-patients#:~:text=La%20HAS%20propose%20des%20modalit%C3%A9s,accompagner%20dans%20le%20sevrage%20tabagique)
- [INCa. Arrêt du tabac dans la prise en charge du patient atteinte de cancer. 2016.](https://www.e-cancer.fr/Expertises-et-publications/Catalogue-des-publications/Synthese-Arret-du-tabac-dans-la-prise-en-charge-du-patient-atteint-de-cancer-Systematiser-son-accompagnement)
- [HAS. Arrêt de la consommation de tabac : du dépistage individuel au maintien de l'abstinence en premier recours. 2014.](https://www.has-sante.fr/jcms/c_1718021/fr/arret-de-la-consommation-de-tabac-du-depistage-individuel-au-maintien-de-l-abstinence-en-premier-recours)
- [Tabac Info Service Pro](https://pro.tabac-info-service.fr/Je-m-informe/S-informer)
- [Association Addictions France (ex ANPAA)](https://addictions-france.org)
- [Intervenir Addictions](https://intervenir-addictions.fr)
- [Observatoire français des drogues et des tendances addictives (OFDT)](https://www.ofdt.fr)

{{%/sources%}}

{{< references/tabac-info-service >}}

{{% modal title="Test de Fagerström de dépendance au tabac" id="modal-fagerstrom"%}}

{{< scores/fagerstrom >}}

{{% /modal %}}
{{% modal title="Score CAGE-DETA de mésusage de l'alcool" id="modal-deta"%}}

{{< scores/deta >}}

{{% /modal %}}
{{% modal title="Score CAST de mésusage du cannabis" id="modal-cast"%}}

{{< scores/cast >}}

{{% /modal %}}
{{% modal title="Score HAD" id="modal-had"%}}

{{< scores/had >}}

{{% /modal %}}
{{% modal title="Auto-questionnaire pour la BPCO" id="modal-depistage-bpco"%}}

{{< clinique/depistage-bpco-gold >}}

{{% /modal %}}
{{% modal title="Dépistage selon le score PREVALENT" id="modal-depistage-prevalent"%}}

{{< scores/aomi-prevalent >}}

{{% /modal %}}
{{% modal title="Risque cardiovasculaire selon ESC 2021" id="modal-rcv"%}}

{{< clinique/risque-cardiovasculaire >}}

{{% /modal %}}
