+++
title = "Cancer de la prostate"
prefix = "le "
description = "Recommandations pour la prise en charge du cancer de la prostate. Indications au dépistage et conduite à tenir selon le PSA, toucher rectal et avis urologique"
synonyms = ["Adénocarcinome prostatique"]
auteurs = ["Jean-Baptiste FRON"]
relecteur = "Dr J. OLIVIER (AFU)"
date = "2020-09-27T19:51:30+02:00"
publishdate = "2020-09-27"
lastmod = "2023-10-30"
specialites = ["urologie"]
annees = "2023"
sources = ["EAU", "AFU", "HAS", "USPTF"]
tags = ["cancer", "depistage"]
anglais = ["Prostate cancer (PCa)"]
sctid = "254900004"
icd10 = "C61"
image = true
imageSrc = "Illustration du cancer de la prostate par brgfx / Freepik"
flowchart = true
todo = "tableau espérance de vie"
+++

{{%article-summary%}}

- Proposer le dépistage du cancer de la prostate (CaP, préférer << détection précoce >>) par toucher rectal et dosage du PSA après information éclairée aux hommes asymptomatiques ayant espérance de vie de +15 ans (~70 ans) (EAU, AFU et Commission européenne):
  - **Hommes à risque augmenté:** +50 ans, +45 ans avec antécédent familial de CaP ou d'origine africaine, +40 ans avec BRCA2
  - Tous les 2 ans
  - voire tous les 8 ans (**4** pour l'*AFU*) si risque faible: PSA < 1 ng/mL à 40 ans ou < 2 à 60 ans
- Toute anomalie au toucher rectal ou un PSA > 2 ng/mL impose un avis urologique (seuil de 4 pour l'*AFU*)  
  Redoser le PSA (intervalle min 2 semaines) si le 1<sup>er</sup> dosage est compris de 3 à 10 ng/mL.
- Consultation d'oncogénétique en cas de: CaP métastatique, CaP avant 50 ans, plusieurs cas avant 60 ans, contexte de cancer sein-ovaire (voir *Dépistage du cancer*)
- Définitions de récidive biologique après traitement (voir *Traitement*)
- Après traitement, le suivi spécialisé est long (10 ans)

Chapitre lié: [hypertrophie bénigne de la prostate]({{< relref "hypertrophie-benigne-prostate.md" >}})

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Cancer de la prostate (CaP)
: Dégénérescence tumorale prostatique en **adénocarcinome**: sporadique (80%), héréditaire (10%) ou familial (10%).
: L'évolution initiale est intra-prostatique (cancer localisé) puis **métastatique ganglionnaire et osseuse** (foie et poumon rares). Moins de 20% des patients ont des métastases à 10 ans.

Cancer de la prostate héréditaire
: Au moins 2 cas au premier ou second degré de la même branche familiale ou antécédents de cancers du spectre de Lynch ({{< clinique/cancer-spectre-lynch >}}).

### Facteurs de risque de cancer de la prostate

> Aucun moyen préventif alimentaire ou pharmacologique du cancer de la prostate n'a été identifié (*EAU 2022*)
{.alert .alert-info}

- Principal facteur de risque: âge +50 ans
- Forme héréditaire (voir plus haut)
- Origine africaine
- Dans une moindre mesure: hypertension artérielle, obésité abdominale, consommation excessive d'alcool

**NB.** En cas d'hypogonadisme, la supplémentation en testostérone n'augmente pas le risque de cancer de la prostate.

### Facteurs pronostiques

Le pronostic du cancer de la prostate dépend des scores TNM, PSA, **scores de Gleason et ISUP** (évolution du Gleason) au diagnostic.

{{< table title="Risque de cancer de prostate (CaP) selon le taux de PSA. Agressif = CaP ISUP ≥ 2. EAU 2022" class="table-sm" >}}
| PSA (ng/mL) | Risque de CaP (%) | Risque de CaP agressif (%) |
|------------:|------------------:|---------------------------:|
| 0 - 0,5     | 6,6               | 0,8                        |
| 0,6 - 1     | 10,1              | 1                          |
| 1,1 - 2     | 17,0              | 2                          |
| 2,1 - 3     | 23,9              | 4,6                        |
| 3,1 - 4     | 26,9              | 6,7                        |
{{< /table >}}

> Le PSA libre n'a plus d'intérêt diagnostique (*AFU 2022*)

### Épidémiologie du cancer de la prostate

- **Incidence du cancer de la prostate:** 1<sup>er</sup> cancer de l'homme (50.000 cas en 2015)
- **Décès:** 3<sup>e</sup> cause de décès par cancer de l'homme (8500 en 2015)
- Âge médian au diagnostic: 74 ans
- Prévalence du cancer de la prostate à l'autopsie: 5% avant 30 ans et 59% chez les +79 ans  
  Enjeu de ne traiter que les cancers agressifs.
- Survie nette standardisée à 5 ans: 93% et 80% à 10 ans

{{< card-link-external title="Dépenses liées au cancer de la prostate" image="ameli" subtitle="Data ameli" url="https://data.ameli.fr/pages/pathologies/?refine.patho_niv1=Cancers&refine.patho_niv2=Cancer%20de%20la%20prostate">}}

### Abréviations

AFU
: Association française d'urologie

CaP
: cancer de la prostate

EAU
: Association européenne d'urologie ({{%lang%}}European Association of Urology{{%/lang%}})

EV
: espérance de vie

HBP
: hypertrophie bénigne de la prostate

INCa
: Institut national du cancer

ISUP
: score 2014 de l'{{%lang%}}International Society of Urological Pathology{{%/lang%}} (évolution du Gleason)

PSA
: {{%lang%}}prostate-specific antigen{{%/lang%}}

TR
: toucher rectal ({{%lang%}}digital rectal exam - DRE{{%/lang%}})
{.dl-inline}

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

La plupart des hommes atteints par le cancer de la prostate sont asymptomatiques ou les symptômes sont liés à une pathologie bénigne associée (ex. [hypertrophie de la prostate]({{< relref "hypertrophie-benigne-prostate.md" >}})).

- Antécédents
- Antécédents familiaux ([cancers](/tags/cancer/) de prostate, [sein]({{< relref "cancer-sein.md" >}}) et [ovaire]({{< relref "cancer-ovaire.md" >}}), mutation BRCA2)
- Origine africaine
- Exposition professionnelle aux pesticides
- Symptômes frustes génito-urinaire: dysurie
- Métastases
  - AEG
  - Anurie
  - Douleurs osseuses inflammatoires lombaires
  - Œdèmes des membres inférieures, signes neurologiques ...

**NB.** Un épisode isolé d'**hémospermie** n'est pas évocateur de cancer de la prostate et ne doit pas faire explorer ce diagnostic.

### Examen clinique

- Poids, taille, IMC, variations
- **Toucher rectal**
  - Prostate physiologique: prostate souple, régulière, élastique, bords bien délimités, sillon médian palpable
  - Prostate suspecte: nodule dur, irrégulier, indolore voire blindage pelvien
  - Sensibilité et spécificité en soins primaires < 60%
- Nutritionnel
+75 ans: dépistage gériatrique ({{< modal-btn modal-g8 >}}G8{{< /modal-btn >}}, VES13, FOG ...), cognitif [mini-COG (PDF)](https://mini-cog.com/wp-content/uploads/2022/03/Standardized-English-Mini-Cog-1-19-16-EN_v1-low-1.pdf)

**NB.** Toute anomalie au toucher rectal doit conduire à une consultation d'urologie.

{{% /collapse %}}
{{%collapse "Dépistage du cancer de la prostate" %}}

### Indications à une consultation d'oncogénétique

Indications à une consultation d'oncogénétique chez un homme ayant un **antécédent personnel ou familial** de:

- Cancer prostatique métastatique
- Cancer de la prostate à *haut risque* * avec antécédent familial de diagnostic de CaP avant 60 ans  
- Plusieurs antécédents familiaux de cancers prostatiques diagnostiqués avant 60 ans  
  ou d'un membre familial décédé d'un cancer de prostate
- Antécédents familiaux génétiques tumoraux ou de cancers multiples d'une branche familiale

> *EAU 2022*  
\* **Haut risque =** PSA > 20 ou Gleason > 7 (ISUP 4/5) ou cT2c ou cT3-4 ou cN+ (*EAU Table 4.2*)

Indications à une consultation d'oncogénétique selon l'*AFU 2022*:

- Suspicion de forme héréditaire de cancer de la prostate
  - 3 cas de CaP de la même branche familiale au 1<sup>er</sup> ou 2<sup>e</sup> degré
  - 2 cas de CaP avant 55 ans de la même branche familiale au 1<sup>er</sup> ou 2<sup>e</sup> degré
- Forme précoce de cancer de la prostate: CaP avant 50 ans
- CaP associé au [cancer du sein]({{< relref "cancer-sein.md" >}}) ou de l'[ovaire]({{< relref "cancer-ovaire.md" >}})  
  Mutation prédisposant (ex. BRCA2), cancer du sein (avant 40 ans, bilatéral ou de l'homme), un cas de cancer de l'ovaire

Une détection précoce peut être proposée à partir de 40 ans voire 10 ans avant le cas le plus jeune diagnostiqué.

### Dépistage du cancer de la prostate chez les hommes à risque par mesure du PSA

{{%warning%}}
**Hommes à risque augmenté de cancer de la prostate:** +50 ans, +45 ans avec antécédent familial de CaP ou d'origine africaine, +40 ans avec BRCA2 (*AFU* et *EAU 2022*).

Risque diminué de cancer de la prostate si PSA < 1 ng/mL à 40 ans et < 2 à 60 ans.
{{%/warning%}}

**Rappel.** La mesure du PSA est faussée à la hausse par une prostatite, une [HBP]({{< relref "hypertrophie-benigne-prostate.md" >}}) ou à l'inverse à la baisse par un IPDE5 (HBP, [dysfonction érectile]({{< relref "dysfonction-erectile.md" >}})).  
En cas de prise d'IPDE5, doubler la valeur du PSA (*McConnell 2003*).

{{%info%}}

#### Positions des organismes et sociétés savantes sur le dépistage du cancer de la prostate

Positions des différents comités sur la détection précoce du cancer de la prostate, après information éclairée:

- HAS 2013 et INCa 2016  
  Pas de dépistage systématique en population générale ni à haut risque ([INCa 2016. Le dépistage du cancer de la prostate - s'informer avant de décider](https://www.e-cancer.fr/Expertises-et-publications/Catalogue-des-publications/Le-depistage-du-cancer-de-la-prostate-S-informer-avant-de-decider)).
- Commission européenne 2022  
  PSA jusqu'à 70 ans.
- EAU 2023  
  Intérêt d'une détection précoce des *hommes à risque* ayant une [espérance de vie (EV) de +15 ans](https://ec.europa.eu/eurostat/databrowser/view/demo_mlexpec$DV_291/default/table)
- AFU 2022  
  Hommes de 50 (40 à 45 si *à risque*) à 70 ans avec espérance de vie de +10 ans, tous les 2 à 4 ans.
- USPTF 2018  
  Hommes de 55 à 69 ans.
{{%/info%}}

#### Prise en charge selon le résultat du PSA

Patient à risque **asymptomatique** informé demandant une détection précoce, dépistage par **toucher rectal et mesure du PSA total**:

- Toucher rectal normal
  - PSA < 1 ng/mL à 40 ans ou < 2 à 60 ans: répéter le dosage dans 8 ans
  - PSA 1<sup>er</sup> dosage de 3-10 ng/mL: refaire le dosage (min 2 semaines)
  - PSA 2<sup>e</sup> dosage de 2-10 ng/mL: avis urologique pour utilisation d'un score ou IRM prostatique (seuil de 4 ng/mL selon *AFU 2022*)
  - PSA +10 ng/mL: avis urologique
  - PSA en augmentation > 30%: avis urologique (*AFU*)
- Toucher rectal anormal: avis urologique

> *EAU 2022*

Le bilan diagnostique est aujourd'hui dominé par des scores permettant de stratifier le recours à l'IRM prostatique avant la biopsie de prostate.

#### Rythme de surveillance du PSA total

Répéter le dépistage par toucher rectal et dosage du PSA:

- Tous les 2 ans si:
  - PSA > 1 ng/mL à 40 ans
  - PSA > 2 ng/mL à 60 ans
- Tous les 8 ans en dessous de ces seuils (**4 ans** pour l'AFU)
- Arrêt du dépistage: [espérance de vie < 15 ans](https://ec.europa.eu/eurostat/databrowser/view/demo_mlexpec$DV_291/default/table) (10 ans selon *AFU*)

> Rythme de surveillance du PSA proposé par la *EAU 2022*

### Pour en savoir plus: la biopsie de prostate

La biopsie de prostate (voie transrectale ou transpérinéale) est indiquée en cas de lésion avancée à l'IRM prostatique.

Liste des complications de la biopsie prostatique par ordre de fréquence: hémospermie (37%), hématurie +1 jour, rectorragie < 2 jours, prostatite, fièvre, épididymite ...

{{% /collapse %}}
{{%collapse "Traitement du cancer de la prostate" %}}

Chapitre pour en savoir plus sur la prise en charge du cancer de la prostate, le traitement du cancer de la prostate dépend des décisions de la réunion de **concertation pluridisciplinaire** (RCP) et du souhait du patient.

Déclarer l'**[ALD n°30]({{< relref "affection-longue-duree.md" >}})**.

Plusieurs stratégies thérapeutiques sont disponibles pour la prise en charge du cancer de la prostate: **prostatectomie totale, radiothérapie, hormonothérapie, surveillance active** (détaillée plus bas) voire une ***Abstention-surveillance*** (patient asymptomatique avec cancer localisé et espérance de vie < 10 ans).

Toutes les techniques nécessitent un suivi spécialisé prolongé avec dosages réguliers du PSA: tous les 6 mois pendant 3 ans puis annuel.  
Après prostatectomie totale, la cible du PSA est < 0,2 ng/mL à 6 semaines.

### La surveillance active

La *surveillance active* est proposée pour un cancer à **faible risque évolutif** lorsque l'espérance de vie est supérieure à 10 ans.

Il s'agit d'une surveillance spécialisée prolongée avec examen clinique (min annuelle), PSA (min semestriel), IRM prostatique et biopsies tous les 2-3 ans.

### Définitions de la récidive biologique du cancer de la prostate selon le type de traitement

Le seuil de PSA total pour affirmer une récidive dépend du traitement radical:

- Prostatectomie totale: PSA > 0,4 ng/mL ascendant (confirmation sur 2 dosages successifs)
- Radiothérapie ± hormonothérapie: PSA Nadir (le plus bas mesuré) + 2 ng/mL
- Curiethérapie: idem
- HIFU (ultrasons): PSA Nadir + 1,2 ng/mL

> *AFU 2022*

### Complications des traitements

Complications fréquentes survenant dans les suites d'une prostatectomie (PT) radicale:

- Incontinence urinaire chronique (20%)
- [Dysfonction érectile]({{< relref "dysfonction-erectile.md" >}}) (2/3)

[Reconnaissance possible en Maladie professionnelle dans le cadre du Tableau 102](https://www.inrs.fr/publications/bdd/mp/tableau.html?refINRS=RG%20102): exposition aux pesticides ≥ 10 ans
{.alert .alert-info}

{{% /collapse %}}
{{%collapse "Prise en charge par le dépistage du cancer de la prostate" "show" %}}

{{< mermaid title="Dépistage du cancer de la prostate et conduite à tenir devant une augmentation du PSA. Dr JB Fron d'après AFU et EAU 2022" >}}
graph TB
accTitle: Dépistage du cancer de la prostate et conduite à tenir devant une augmentation du PSA d'après EAU 2022
  homme["Homme asymptomatique<br>avec Espérance de vie +15 ans<br>—<br>+50 ans<br>+45 ans avec antécédent familial<br>ou origine Africaine<br>+40 ans avec BRCA2"] -- Information éclairée --> depistage(TR + PSA<br>tous les 2 ans)
  style homme stroke:#4150f5, stroke-width:1px
    depistage ==> normal("<b>TR normal</b>")
      normal --> bas(PSA &lt; 1 à 40 ans<br>ou &lt; 2 à 60 ans) -- Répéter à 8 ans --> depistage
      normal --> intermediaire(PSA 3-10) --> controle("Contrôler le PSA<br>Intervalle ≥ 2 semaines")
        controle --> sup("PSA ≥ 2<br>(4 selon l'AFU)") --> urologue
        controle --> inf("PSA &lt; 2") --> depistage
      normal --> autre(Autre valeur) --> depistage
    depistage --> anormal(TR anormal<br>ou PSA +10 ng/mL) --> urologue(Avis urologique)
{{< /mermaid >}}

> PSA en ng/mL

{{% /collapse %}}
{{%sources%}}

{{< youtube id="cm7rIZAXHYU" title="Indication du toucher rectal en médecine (Urologie Lyon Sud)" >}}

- [Mottet N et al; EAU, EANM, ESTRO, ESUR, ISUP, SIOG. Guidelines on Prostate Cancer. 2023.](https://uroweb.org/guidelines/prostate-cancer)
- [Ploussard G et al. French AFU Cancer Committee Guidelines - Update 2022-2024: prostate cancer - Diagnosis and management of localised disease. Progrès en Urologie. 2022.](https://www.sciencedirect.com/science/article/pii/S116670872200344X)
- [Commission européenne. Union européenne de la santé: une nouvelle approche de l'UE en matière de détection du cancer - Un dépistage élargi et de meilleure qualité. Communiqué de presse. 20/09/2022.](https://ec.europa.eu/commission/presscorner/detail/fr/ip_22_5562)
- [Collège Français des Enseignants en Urologie (CFEU). Tumeur de prostate. Item 310. Référentiel du collège d'urologie 5ème édition. 2021. (PDF)](https://www.urofrance.org/wp-content/uploads/2021/11/Item-310-Tumeur-de-prostate.pdf)
- [Rozet F et al. Recommandations françaises du Comité de cancérologie de l'AFU – actualisation 2020–2022 : cancer de la prostate. Progrès en Urologie. 2020.](https://www.urofrance.org/recommandation/recommandations-francaises-du-comite-de-cancerologie-de-lafu-actualisation-2020-2022-cancer-de-la-prostate/?date=&themes=&search=%22)
- [Gandaglia G et al. Structured Population-based Prostate-specific Antigen Screening for Prostate Cancer: The European Association of Urology Position in 2019. Eur Urol. 2019.](https://www.europeanurology.com/article/S0302-2838(19)30347-1/fulltext)
- [US Preventive Services Task Force. Screening for Prostate Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018.](https://jamanetwork.com/journals/jama/fullarticle/2680553)
- [INCa. Synthèse sur les bénéfices et les risques d'un dépistage du cancer de la prostate par dosage du PSA. 2016.](https://www.e-cancer.fr/Expertises-et-publications/Catalogue-des-publications/Synthese-sur-les-benefices-et-les-risques-d-un-depistage-du-cancer-de-la-prostate-par-dosage-du-PSA)
- [INCa. La première prescription du PSA chez l'homme asymptomatique. 2016.](https://www.e-cancer.fr/Expertises-et-publications/Catalogue-des-publications/La-premiere-prescription-du-PSA-chez-l-homme-asymptomatique)
- [HAS. Détection précoce du cancer de la prostate. Mai 2013.](https://www.has-sante.fr/jcms/c_1623737/fr/detection-precoce-du-cancer-de-la-prostate)
- [HAS. ALD n°30 - Cancer de la prostate. Guide maladie chronique. 2012.](https://www.has-sante.fr/jcms/c_725257/fr/ald-n-30-cancer-de-la-prostate)
- [Horwich A et al. Prostate cancer: ESMO Consensus Conference Guidelines 2012. Annals of Oncology. 2012.](https://www.annalsofoncology.org/article/S0923-7534(19)37245-X/fulltext)
- [McConnell JD et al. The long-term effect of doxazosin, finasteride, and combination therapy on the clinical progression of benign prostatic hyperplasia. N Engl J Med. 2003.](https://www.nejm.org/doi/10.1056/NEJMoa030656)

### Bibliographie en attente

- [Hamdy FC et al. Fifteen-Year Outcomes after Monitoring, Surgery, or Radiotherapy for Prostate Cancer. N Engl J Med. 2023.](https://www.nejm.org/doi/10.1056/NEJMoa2214122)
[Ploussard G et al. French AFU Cancer Committee Guidelines - Update 2022-2024: prostate cancer - Management of metastatic disease and castration resistance. Progrès en Urologie. 2022.](https://www.sciencedirect.com/science/article/pii/S1166708722003438)

{{%/sources%}}
{{% modal title="Score G8" id="modal-g8"%}}

{{< scores/g8 >}}

{{% /modal %}}
