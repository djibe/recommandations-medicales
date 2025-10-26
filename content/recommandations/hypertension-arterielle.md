+++
id = "0190e8c5-4353-7e23-9466-894d00a8c7a3"
title = "Hypertension artérielle (HTA)"
prefix = "l'"
titleSeo = "Hypertension artérielle HTA"
description = "Recommandations HTA 2023 diagnostic et traitement de l'hypertension artérielle. Cibles tensionnelles selon le profil, carnet d'automesure, associations IEC ..."
longHtml = true
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-09-28T19:13:55+02:00"
publishdate = "2021-10-03"
lastmod = "2024-06-28"
specialites = ["cardiologie"]
annees = "2024"
sources = ["ESH", "USPTF", "ESC"]
tags = ["céphalées", "démence", "dépistage", "épreuve effort", "grossesse", "HTA", "néphropathie", "obésité", "risque cardiovasculaire", "SAS", "vertige"]
english = ["Arterial hypertension", "high blood pressure"]
sctid = "38341003"
icd10 = ["I10", "I11", "I15"]
image = true
imageSrc = "Illustration de l'hypertension artérielle par vectorjuice / Freepik"
todo = "normes enfants [925,930,931], clinical frailty scale [969] , SEO 'reco hta', modale automesure, A LIRE: Bernatos plus de 80 ans dépendants polypatho (ehpad) : 149, ESC 2018 tableau 4+19 - src157, https://afpa.org/outil/normes-cardiorespiratoires-utiles/"
flowchart = true
+++

{{%article-summary%}}

- Dépister l'hypertension artérielle dès 3 ans, au moins tous les 3 ans après 40 ans (annuellement selon la *USPTF*, ⅓ des adultes sont hypertendus et les 3/4 ne sont pas contrôlés)
- Mesurer la pression artérielle de façon standardisée avec un tensiomètre validé (voir *Mesure au cabinet* et [tensiomètres validés]({{% relref "tensiometres-electroniques-valides.md" %}}))
- Confirmer le diagnostic par mesures et automesures ou MAPA répétées, conserver le grade et le stade d'hypertension au diagnostic
- Rechercher des complications et calculer le {{%modal-btn "modal-rcv"%}}risque cardiovasculaire{{%/modal-btn%}} {{< scores/heartscore >}} en prévention primaire pour déterminer le LDL cible
- Traitement selon le grade d'hypertension (voir *Définitions*) et mesures hygiéno-diététiques systématiques
- Les cibles tensionnelles dépendent du profil (120-129 / 70-79 mmHg avant 80 ans) et ne sont valables que pour les mesures de tension au cabinet
- Objectif d'un seul comprimé antihypertenseur combiné et informer sur les conséquences d'une hypertension non traitée ([accidents cardiovasculaires](/tags/risque-cardiovasculaire/), démence)
- Bithérapies antihypertensives de référence: {{%modal-btn "modal-iec"%}}IEC + TZD/ICa{{%/modal-btn%}} ou {{%modal-btn "modal-ara2"%}}ARA2 + TZD/ICa{{%/modal-btn%}}

Chapitres liés: [automesure tensionnelle]({{% relref "automesure-tensionnelle.md" %}}), [le carnet d'automesure tensionnelle à imprimer](https://www.stridebp.org/wp-content/uploads/HBPM_Form_for_patients.pdf)

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Hypertension artérielle
: Maladie chronique la plus fréquente définie une pression artérielle systolique (PAS) ≥ **140 mmHg** et/ou diastolique ≥ **90 mmHg** au cabinet (135/85 mmHg en automesure et 130/80 mmHg en MAPA, *ESH 2024*) à partir de 16 ans. Avant 16 ans: pression artérielle ≥ 95^e^ percentile.
: Le seuil de traitement est 14/9 **de 18 à 79 ans** et de 160 mmHg après 80 ans mais un seuil plus bas est à considérer. Chez le **sujet fragile**, les seuils sont individualisés.
: Premier facteur de morbi-mortalité modifiable dans le monde.  
La plupart du temps *asymptomatique*, elle augmente le risque d'insuffisance cardiaque, coronaropathie, AVC, fibrillation atriale, dégradation cognitive et démence.
: La réduction de la systolique de 10 mmHg (et de 5 mmHg pour la diastolique) réduit le risque d'évènement cardiovasculaire de 20%, la mortalité de 10-15 %, le risque d'AVC de 35%, de SCA de 20%, d'insuffisance cardiaque de 40%. Le traitement allonge l'[espérance de vie]({{% relref "esperance-vie-age-france.md" %}}).
: 3/4 des patients ne sont pas contrôlés principalement par défaut d'**observance** (à 6 mois: 2/3 - 1 an: 50%) et **inertie du médecin**.

Hypertension artérielle résistante
: Pressions mesurées au cabinet ≥ 140/90 mmHg et confirmées au domicile par MAPA (AMT à défaut) malgré un traitement optimal et bien suivi avec RHD et au moins 3 traitements à doses maximales tolérées (IEC/ARA2, TZD, ICa). Concerne 10% des hypertendus.
: Risques de l'hypertension résistante: augmentation des complications hypertensives, [insuffisance rénale]({{% relref "insuffisance-renale-chronique.md" %}}) et événements cardiovasculaires.

### Grades de l'hypertension artérielle

> [!INFO]
> << Un dépistage moins fréquent (*ex* tous les 3 à 5 ans) est approprié pour les adultes 18-39 ans sans surrisque d'hypertension ayant déjà eu une mesure de la pression artérielle >> (surrisque: origines Africaines, surpoids, tension normale haute). -- *USPTF 2021*

{{< table title="Grades d'hypertension artérielle selon les mesures de pression artérielle au cabinet à partir de 16 ans. Dr JB Fron d'après *ESH 2023* et *USPTF 2021*" class="table-wrap" >}}
| Catégorie                 | Systolique (mmHg) |       | Diastolique (mmHg) | Action                                                                        |
|---------------------------|:-----------------:|:-----:|:------------------:|-------------------------------------------------------------------------------|
| Optimale                  | < 120             | et    | < 80               | Surveillance min. /5 ans sans surrisque (*USPTF 2021*)                        |
| Normale                   | 120-129           | et    | 80-84              | Surv. min. /3 ans (6 mois si FRCV, *ESC 2018*)                                |
| Normale haute             | 130-139           | et/ou | 85-89              | Surv. **annuelle**, éliminer HTA masquée par AMT/MAPA, traiter si THRCV       |
| Hypertension grade&nbsp;1 | 140-159           | et/ou | 90-99              | Éliminer blouse blanche par AMT/MAPA, essai RHD 3-6 mois, traiter si HRCV     |
| Hypertension grade&nbsp;2 | 160-179           | et/ou | 100-109            | Confirmer par AMT/MAPA en qq j/sem, **traitement immédiat** et contrôle sous 3 mois |
| Hypertension grade&nbsp;3 | ≥ 180             | et/ou | ≥ 110              | Traitement immédiat et cible atteinte sous 3 mois                             |
| Hypertension systolique isolée | ≥ 140        | et    | < 90               | Traitement selon le grade de la PAS                                           |
| Hypertension diastolique isolée | < 140       | et    | ≥ 90               | Traitement selon le grade de la PAD                                           |
| Hypertension nocturne (MAPA) | ≥ 120          | et/ou | ≥ 70               | Suivi hypertensiologue                                                        |
{{< /table >}}

> **AMT =** automesure tensionnelle ; **HRCV/THRCV =** {{%modal-btn "modal-rcv"%}}haut/très haut risque CV{{%/modal-btn%}}.  
Utiliser la plus haute valeur des mesures standardisées effectuées au cabinet.  
RHD pour tous dès tension *normale haute*.  
Découverte ≥ 65 ans: traiter si antihypertenseurs bien tolérés. Sinon attendre grade 2.  
Découverte ≥ 80 ans: traiter si ≥ grade 2.  
L'HTA systolique isolée est gradée selon la même échelle des valeurs systoliques.  
Dépistage rapproché chez le +50 ans.

4 situations après la réalisation des mesures standardisées au cabinet et au domicile (AMT et/ou MAPA):

1. Normotension  
  Pressions au cabinet et ambulatoires normales. Rythme de surveillance selon le tableau ci-dessus.
2. Hypertension permanente  
  Hypertension au cabinet et au domicile. Traitement selon tableau ci-dessus.
3. Hypertension blouse blanche (15-25 %)  
  Hypertension au cabinet et absente au domicile. RHD et dépistage annuel. Envisager un traitement en {{%modal-btn "modal-rcv"%}}risque cardiovasculaire élevé ou très élevé{{%/modal-btn%}}
4. Hypertension masquée (10-20 %)  
  Hypertension absente au cabinet et observée au domicile. Automesures au moindre doute ([Hundemer et al 2025](https://www.sciencedirect.com/science/article/pii/S2589790X25000356)). RHD et traitement selon le grade de l'hypertension.

### Stades d'hypertension artérielle

Au grade d'hypertension artérielle on ajoute la précision du stade d'hypertension:

- Stade 1: hypertension artérielle non compliquée
- Stade 2: complications de l'hypertension (HVG, AOMI, rétinopathie), insuffisance rénale stade 3 (DFG 30-59) ou diabète
- Stade 3: maladie cardiovasculaire ou insuffisance rénale stade 4 ou 5 (DFG < 30)

### Abréviations

AMT
: automesure tensionnelle ({{%lang%}}home blood pressure monitoring - HBPM{{%/lang%}})

ARA2
: antagoniste des récepteurs de l'angiotensine 2

CV
: cardiovasculaire

DASH
: {{%lang%}}Dietary Approaches to Stopping Hypertension{{%/lang%}}

ECG
: électrocardiogramme

FRCV
: facteur de risque cardiovasculaire

ICa
: inhibiteur calcique (ou anticalcique)

IEC
: inhibiteur de l'enzyme de conversion de l'angiotensine

MAPA
: mesure ambulatoire de la pression artérielle ({{%lang%}}ambulatory BP monitoring - ABPM{{%/lang%}})

MCV
: maladie cardiovasculaire

PAD
: pression artérielle diastolique

PAS
: pression artérielle systolique

RHD
: régime hygiéno-diététiques (ou mode de vie)

SCA
: syndrome coronarien aigu

SRA
: système rénine angiotensine

TZD
: diurétique thiazidique
{.dl-inline}

### Épidémiologie de l'hypertension artérielle

- En France
  - Prévalence: 30% chez l'adulte avec 17 millions d'hypertendus (+60% ont +60 ans, *BEH 2023*)  
    Parmi lesquels 6 millions ne le savent pas et 4 millions ne sont pas contrôlés.
  - L'HTA est responsable de 36,2 % des hospitalisations pour maladies cardio-neuro-vasculaires ou rénales (*BEH 2025*)
  - Décès: 55.000 en 2021 (8,5 %)
- Dans le monde
  - 1,28 milliard d'hypertendus (150 millions en Europe)
  - Prévalence: ⅓ des adultes
  - Décès: 10 millions chaque année
  - Malgré les progrès thérapeutiques, l'espérance de vie corrigée de l'incapacité a augmenté seulement de 40% depuis 1990
- Morbidité
  - Chaque élévation de 20 mmHg de systolique double le risque d'AVC ou de décès coronarien

{{% /collapse %}}
{{%collapse "Mesure de la pression artérielle au cabinet" %}}

> [!WARNING]
> Les mesures de pression artérielle sur la table d'examen ne sont pas valables. -- *ESH 2021*

Toute personne majeure devrait avoir la mesure de pression artérielle (PA) dans son dossier et connaître ses valeurs.

Une mesure standardisée est nécessaire pour le contrôle des objectifs tensionnels:

- Conditions de mesure
  - Assis au calme depuis au moins 3 à 5 minutes
  - Température ambiante confortable
  - Sans tabac, café, alimentation ou exercice physique dans les 30 minutes
  - Vessie vide
  - Adossé, les jambes non croisées avec les pieds posés à plat
  - Personne ne parle pendant et entre les mesures
  - Retrait de tous les vêtements de la zone de mesure
- Technique validée
  - **[Tensiomètre électronique validé uniquement]({{% relref "tensiometres-electroniques-valides.md" %}})** ou manuel chez l'enfant
  - Brassard huméral validé et calibré régulièrement (annuel)
  - Bras nu posé sur le bureau
  - Le centre du brassard est posé en regard de l'artère brachiale et le milieu du brassard doit être au niveau du sternum médian
  - Brassard de taille adaptée
  - 1 doigt peut être aisément glissé sous le brassard à ses extrémités
- Mesures
  - Utiliser le bras avec les valeurs les plus hautes  
    Une différence de 15-20 mmHg nécessite un avis cardiologique (asymétrie tensionnelle).
  - **3 mesures espacées de 1 minute** et noter la moyenne des 2 dernières
  - En manuel: gonfler 20-30 mmHg au-delà de la disparition du premier bruit de Korotkoff. Dégonfler de 2-3 mmHg/s.
  - **Enfants, grossesse, arythmie**: contrôler manuellement la tension (ou avec un appareil validé)
  - Diagnostic si ≥ 140/90 mmHg
- Dossier médical
  - Noter les valeurs systoliques et diastoliques dans le dossier médical
  - Noter l'heure de la dernière prise des antihypertenseurs
- [Hypotension orthostatique]({{% relref "hypotension-orthostatique.md" %}})
  - Rechercher si antihypertenseurs, signes évocateurs ou fragile (âgé, neurodégénératif, diabète)
  - Mesure au lever à 1 et 3 minutes
- Moyenne des pressions  
  - Utiliser ≥ 2 mesures sur ≥ 2 consultations espacées de 1-4 semaines pour estimer les pressions
  - **Confirmer le diagnostic** par automesure ou MAPA
- Information du patient  
  Donner au patient ses mesures oralement et par écrit.

> -- *ESH 2024* ([poster (PDF)](https://www.stridebp.org/wp-content/uploads/Office_BP_measurements_Poster.pdf))

L'automesure tensionnelle doit être utilisée en complément (effet blouse blanche fréquent, hypertension masquée, hypertension résistante), d'autant plus si les valeurs sont limites 130-159 / 85-99 mmHg.

En cas de discordance mesures au cabinet et automesure/MAPA, répéter les mesures ambulatoires et privilégier des MAPA.

### Le tensiomètre électronique

Voir les [tensiomètres validés]({{% relref "tensiometres-electroniques-valides.md" %}}) pour la mesure automatisée de la pression artérielle.

Le brassard est spécifique de chaque appareil.

{{% /collapse %}}
{{%collapse "Objectifs tensionnels" "show" %}}

> [!INFO]
> Une diastolique entre 70 et 79 mmHg est la cible pour tout hypertendu. La pression cible doit être atteinte sous 3 mois.

{{< table title="Synthèse des cibles de pression artérielle au cabinet selon le profil de l'adulte de plus de 18 ans. Dr JB Fron d'après les dernières recommandations en vigueur" >}}
| Population          | Objectif (mmHg) | Source     |
|---------------------|----------------:|------------|
| Cible minimale      | < 140/80        | ESH 2024   |
| 18-79 ans           | 120-129/70-79   | ESH 2024   |
| +80 ans (min/max)   | 140-150/80<br>130-139/70-79 | ESH 2024 |
| Fragilité           | Individualisé   | ESH 2024   |
| HTA résistante      | idem générale   | ESH 2023   |
| [AIT/AVC]({{% relref "accident-vasculaire-cerebral.md" %}}) | idem générale | ESH 2023 |
| [AOMI]({{% relref "arteriopathie-obliterante-membres-inferieurs.md" %}}) | 120-140/90 | ESC 2017 LEAD |
| [Coronaropathie]({{% relref "syndrome-coronarien-chronique.md" %}}) | idem générale | ESH 2023   |
| [Diabète]({{% relref "diabete-type-2.md" %}}) | idem générale<br>< 130/80 | ESH 2023<br>ADA 2023 |
| [Fibrillation atriale]({{% relref "fibrillation-atriale.md" %}}) | idem générale | ESH 2023 |
| [Insuffisance cardiaque]({{% relref "insuffisance-cardiaque-chronique.md" %}}) | idem générale | ESH 2023 |
| [Insuffisance rénale]({{% relref "insuffisance-renale-chronique.md" %}}) | < 130/80<br>< 120/90 | ESH 2023<br>KDIGO 2021 |
| Greffe rénale       | < 130/80        | ESH 2023, KDIGO 2021 |
| Grossesse           | < 140/90        | ESH 2023   |
{{< /table >}}

Abaisser encore la cible systolique si bien tolérée sans passer sous 120/70 mmHg (*ESH 2024*). Détail pour chaque pathologie sur la page du chapitre concerné.

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

- Facteurs de risque d'hypertension
  - Antécédents personnels et familiaux  
    Diabète, HTA, maladie cardiovasculaire, AIT/AVC, maladie rénale, [goutte]({{% relref "goutte.md" %}}), [pré-éclampsie]({{% relref "pre-eclampsie.md" %}}), [ménopause précoce]({{% relref "insuffisance-ovarienne-prematuree.md" %}}), [cancer](/tags/cancer/).
  - Date du diagnostic de l'hypertension, valeurs au diagnostic, aggravation rapide
  - Traitements en cours, traitements essayés, observance
  - Tabagisme, drogues
  - Alimentation, sel
  - Alcool
  - Niveau d'activité physique, sédentarité
  - [Dysfonction érectile]({{% relref "dysfonction-erectile.md" %}})  
    Aggravée par TZD et BB. IPDE5 sans risque sauf dérivés nitrés ou alpha-bloquant.
- Signes cardiovasculaires
  - Céphalées, vertiges, syncopes, troubles de la vision, régression cognitive
  - Douleurs thoraciques, dyspnée, œdèmes, palpitations, syncope
  - Soif, polyurie, nycturie, hématurie, infections urinaires récidivantes
  - Extrémités froides, claudication ou douleurs de repos, ulcères, périmètre de marche
  - Signes évocateurs d'hypertension secondaire (voir ci-dessous)

### Signes d'hypertension artérielle secondaire

Signes devant faire évoquer une hypertension secondaire et nécessitant une évaluation par un hypertensiologue:

- HTA grade 2-3 avant 40 ans
- HTA d'apparition ou d'aggravation rapide
- Antécédents d'infections urinaires récidivantes
- Hypertension résistante
- Hypertension artérielle sévère ou [maligne]({{% relref "hypertension-arterielle-maligne.md" %}})
- Multiples complications de l'hypertension
- [Apnées du sommeil]({{% relref "syndrome-apnees-obstructives-sommeil.md" %}}) ({{< modal-btn modal-saos >}}dépistage{{< /modal-btn >}})
- Drogues, corticoïdes, sprays nasaux, automédication, contraception, chimiothérapie, yohimbine, réglisse
- Phéochromocytome  
  Épisodes répétés de sueurs - céphalées - palpitations.
- [Hyperaldostéronisme primaire]({{% relref "hyperaldosteronisme-primaire.md" %}})  
  *Hypokaliémies* spontanées ou sous diurétiques, fatigue musculaire, tétanie.
- [Syndrome de Cushing]({{% relref "syndrome-cushing.md" %}})  
  Faciès lunaire et rouge, obésité tronculaire et bosse de bison, fonte musculaire et fatigue, atrophie cutanée et ecchymoses faciles, vergetures pourpres, retard de cicatrisation, doigts très minces, hirsutisme, troubles de l'humeur, dysménorrhées, corticoïdes chroniques.
- [Dysthyroïdie](/tags/tsh/)
- Grossesse en cours ou contraception œstroprogestative (5% développent une HTA)

Principales causes d'hypertension secondaire: **[hyperaldostéronisme primaire]({{% relref "hyperaldosteronisme-primaire.md" %}})** (ratio aldostérone/rénine plasmatiques), **néphropathie** et **sténose des artères rénales** (échodoppler). Syndrome de Cushing, phéochromocytome et coarctation de l'aorte sont plus rares.

Dans l'attente de la MAPA: observance, automesures avec appareil validé, revérifier des {{< modal-btn modal-saos >}}apnées du sommeil{{< /modal-btn >}}, mesures hygiéno-diététiques, bilan des complications, traitements à risque (AINS, spray nasal, toxiques, automédication).

### Examen clinique

> [!INFO]
> << La mesure de la tension artérielle devrait faire partie de toute visite médicale, même chez les mineurs. >> (*ESH 2023*), à partir de 3 ans (ou avant si cardiopathie, néphropathie, prématurité)

- Poids, taille, IMC, tour de taille
- Pression artérielle, fréquence cardiaque
- Comparaison de la pression artérielle aux 2 bras
- Recherche d'une [hypotension orthostatique]({{% relref "hypotension-orthostatique.md" %}}) (systématique si +65 ans, diabète)
- Auscultation cardiaque, palpation et auscultation des trajets artériels
- Si possible: [mesure de l'IPS]({{% relref "arteriopathie-obliterante-membres-inferieurs.md" %}})
- Examen neurologique
- Bandelette urinaire
- +65 ans: dépistage cognitif par {{< scores/mmse >}} ou {{< scores/moca >}}
- Signes d'hypertension secondaire
  - Tâches café au lait
  - Contact lombaire
  - Signes d'un [syndrome de Cushing]({{% relref "syndrome-cushing.md" %}}), d'une [acromégalie]({{% relref "acromegalie.md" %}}) ou de [dysthyroïdie](/tags/tsh/)

{{% /collapse %}}
{{%collapse "Bilan initial de l'hypertension artérielle" %}}

### Bilan de l'HTA

- NFS
- Glycémie à jeun
- Bilan lipidique: Cholestérol LDL, HDL, CT, TG
- Rénine, aldostérone, rapport aldostérone / rénine (le matin, prélevé assis et sans restriction sodée)
- Acide urique (marqueur de RCV)
- Calcémie, albuminémie
- Dépistage des complications
  - Ionogramme sanguin, créatinine, DFG {{< modal-btn modal-ckd-epi >}}CKD-EPI{{< /modal-btn >}}
  - Rapport albuminurie/créatininurie (RAC) sur échantillon
  - **ECG 12 dérivations**
  - Fond d'œil

{{% /collapse %}}
{{%collapse "Mesures hygiéno-diétetiques" %}}

Mesures hygiéno-diétetiques au long cours pour la prise en charge de l'hypertension artérielle:

- Restriction sodée < 5 g/j  
  Ou substituer par KCl sauf insuffisance rénale ou nécessité de régime pauvre ne potassium.
- [Arrêt du tabac]({{% relref "arret-tabac.md" %}}) et réduction de la [consommation d'alcool]({{% relref "sevrage-alcool.md" %}})  
  < 2 verres/j/homme, < 1/j si femme.
- {{< modal-btn modal-regime >}}Régime méditerranéen{{< /modal-btn >}} ou DASH
- Correction d'un surpoids et d'une [obésité]({{% relref "obesite-adulte.md" %}}) abdominale (102 cm homme, 88 cm femme)  
  Cible < 94 cm homme et 80 cm femme.
- Activité physique quotidienne
  - Au moins 2h30 à 5h d'{{< modal-btn modal-met >}}intensité modérée{{< /modal-btn >}} hebdomadaire (ou la moitié d'intense)
  - Renforcement musculaire 2-3 fois par semaine
  - [Guide patient HAS HTA](https://www.has-sante.fr/jcms/p_3391319/fr/l-activite-physique-pour-votre-sante-hypertension-arterielle) (PDF)
- {{%modal-btn "modal-rcv"%}}LDL cible selon le risque cardiovasculaire{{%/modal-btn%}}
- Pas de bénéfice avec l'aspirine en prévention primaire
- Contrôle du stress: méditation, yoga
- Associations de patients: [Comité Français de Lutte Contre l'Hypertension Artérielle (CFLCHTA)](http://www.comitehta.org), [Fédération Française de Cardiologie](https://www.fedecardio.org)

> -- *ESH 2023* et *ESC 2021*

{{% /collapse %}}
{{%collapse "Traitement de l'hypertension artérielle" %}}

La prise en charge de l'hypertension est toujours associée aux mesures hygiéno-diétetiques et la surveillance de l'observance.

- Privilégier d'emblée une bithérapie en essayant de conserver un seul comprimé
- Titration jusqu'à la dose maximale tolérée (diastolique minimale: 70 mmHg)
- Aucune différence entre une prise le matin ou le soir (*étude TIME*) mais **observance meilleure le matin** (*ESH 2023*)
- Pas d'arrêt du traitement sur le seul critère d'âge
- Les bêtabloquants sont privilégiés en cas de maladie cardiovasculaire ([insuffisance cardiaque]({{% relref "insuffisance-cardiaque-chronique.md" %}}), [angor]({{% relref "syndrome-coronarien-chronique.md" %}}), [infarctus]({{% relref "syndrome-coronarien-aigu.md" %}}), [FA]({{% relref "fibrillation-atriale.md" %}})) ou grossesse  
- Suivi 1-2/mois jusqu'à la cible (*ESH 2023*) puis contrôle à 3-6 mois la première année
- Suivi au long cours: 1-2/an si équilibrée (*ESH 2023*)
- Intérêt de l'éducation thérapeutique pour maximiser l'observance
- Tant que la pression reste supérieure à 160/100 mmHg: pas de séjour en altitude au-delà de 2500m
- Surveillance biologique (*ESH 2023* et *HAS 2016*)
  - Annuelle: ionogramme, créatininémie, DFG, rapport albuminurie/créatininurie
  - Tous les 3 ans: glycémie à jeun, bilan lipidique
- Surveillance ECG
  - ECG tous les 3 à 5 ans
  - Test d'effort: recommandé si angor et ECG normal, envisager pour activité physique adaptée APA (*SFC 2018*)
- Réévaluation des complications au **minimum tous les 2 ans**

### Traitement de première intention de l'hypertension artérielle non compliquée

Prise en charge de l'hypertension artérielle par bithérapie au choix parmi:

<button class="chip chip-action" type="button" data-toggle="modal" data-target="#modal-iec">IEC + TZD</button>
<button class="chip chip-action" type="button" data-toggle="modal" data-target="#modal-iec">IEC + ICa</button>
<button class="chip chip-action" type="button" data-toggle="modal" data-target="#modal-ara2">ARA2 + TZD</button>
<button class="chip chip-action" type="button" data-toggle="modal" data-target="#modal-ara2">ARA2 + ICa</button>

- Envisager une **monothérapie** si: +80 ans, sujet fragile, HTA < 150/95 mmHg à faible risque cardiovasculaire ou tension normale haute avec maladie cardiovasculaire
- Chez le sujet à peau noire: {{< modal-btn modal-tzd-ica >}}TZD + ICa{{< /modal-btn >}} aussi possible
- L'ajout d'un IEC/ARA2 à l'anticalcique réduit la survenue d'œdèmes et l'association au thiazidique réduit la survenue d'hypokaliémie
- Pas d'arrêt brutal: BB, ICa, diurétique, antihypertenseur central

La baisse de pression artérielle intervient en 1 à 2 semaines après l'introduction du traitement, pouvant se prolonger jusqu'à 2 mois.
{.text-black-secondary}

### Traitement de niveau 2

{{< modal-btn modal-triple >}}IEC/ARA2 + TZD + ICa{{< /modal-btn >}} en 1 seul comprimé (non remboursés).

Pour être remboursé: associer <button class="chip chip-action" type="button" data-toggle="modal" data-target="#modal-iec">IEC + ICa</button> ou <button class="chip chip-action" type="button" data-toggle="modal" data-target="#modal-ara2">ARA2 + ICa</button> et hydrochlorothiazide

### Traitement de niveau 3

**Hypertension résistante:** avis spécialisé + mesures hygiéno-diététiques rappelées + ajout de [spironolactone](https://bdpm.ansm.sante.fr/medicament/63145849/extrait#tab-rcp) 25-50 mg/j (ou bêtabloquant, alpha-bloquant, antihypertenseur central).

Chez l'insuffisant rénal sévère: IEC/ARA2 + ICa + diurétique de l'anse + chlortalidone (ou BB ou alpha-bloquant ou antihypertenseur central).

En cas d'hypertension artérielle résistant, éliminer:

Défaut d'observance, effet blouse blanche, mesures de PA non standardisées, {{< modal-btn modal-saos >}}apnées du sommeil{{< /modal-btn >}}, calcifications des artères brachiales, inertie du médecin, consommation de sel, HTA secondaire, [maladie rénale]({{% relref "insuffisance-renale-chronique.md" %}}).

### Améliorer l'observance du traitement antihypertenseur

Éléments pouvant favoriser l'observance du traitement:

- Côté médecin
  - Informer sur les conséquences de l'hypertension et donc les raisons et bénéfices du traitement et des RHD
  - Autonomisation du patient
  - Renforcer le comportement en informant sur l'amélioration des paramètres cliniques
  - Réévaluer les freins à la prise du traitement
  - Collaborer avec infirmiers et pharmaciens
- Côté patient
  - Prise du traitement le matin
  - Automesure tensionnelle
  - ETP en groupe
  - Élaborer les stratégies de changement
  - Auto-gestion
  - Utilisation de rappels
  - Soutien de l'entourage et de soignants
- Traitement
  - Objectif d'un comprimé unique
  - Emballage façon pilulier

{{% /collapse %}}
{{%collapse "Hypertension et grossesse" %}}

Particularités de l'hypertension artérielle pendant la grossesse:

- Seuil diagnostique habituel  
  PAS ≥ 140 mmHg et/ou PAD ≥ 90 mmHg avec brassard manuel ou appareil validé.
- Classification différente
  - HTA modérée: 140-159/90-109 mmHg
  - HTA sévère: ≥ 160/110 mmHg, nécessite une hospitalisation en urgence
- [Tensiomètres pour la grossesse]({{% relref "tensiometres-electroniques-valides.md" %}})
- Traiter si ≥ 140/90 mmHg
- Tension cible < 140/90 mmHg
- Définitions
  - HTA pré-existante: précède la grossesse ou apparaît avant 20 semaines de grossesse, persiste > 6 semaines [post-partum]({{% relref "post-partum.md" %}}) ± protéinurie
  - **Hypertension artérielle gestationnelle**: apparaît **après 20 semaines** de grossesse et se résout généralement dans les 6 semaines post-partum
  - HTA pré-existante avec HTA gestationnelle surajoutée avec protéinurie
  - [Pré-éclampsie]({{% relref "pre-eclampsie.md" %}}): HTA gravidique avec protéinurie
  - Hypertension anténatale non classifiée: découverte après 20 semaines de grossesse sans connaissance de valeurs pré-gestationnelles. La surveillance après 6 semaines du post-partum aide au diagnostic rétrospectif.
- Bilan mensuel  
  BU (albuminurie si protéines +), NFS, ASAT, ALAT, créatininémie, uricémie.
- Bilan étiologique
  - Échodoppler des artères utérines (après 22 SA)
  - Recherche des signes de phéochromocytome

Traitements de préférence: [méthyldopa](https://bdpm.ansm.sante.fr/medicament/60578560/extrait#tab-rcp) (nombreux comprimés - Aldomet® - [CRAT](http://www.lecrat.fr/7193/)), [labétalol](https://bdpm.ansm.sante.fr/medicament/65193337/extrait#tab-rcp) (Trandate® 2/j, [CRAT](http://www.lecrat.fr/7158/)) voire anticalcique ([nifédipine LP](https://bdpm.ansm.sante.fr/medicament/66932763/extrait#tab-rcp) 1/j - [CRAT](http://www.lecrat.fr/7173/) > nicardipine).

> [!WARNING]
> Contre-indication aux IEC/ARA2 et inhibiteurs de la rénine pendant la grossesse.

{{% /collapse %}}
{{%collapse "Prise en charge de l'hypertension artérielle" "show" %}}

{{< mermaid title="Prise en charge de l'hypertension artérielle de l'adulte. Drs Alaedine Benani et JB Fron d'après ESH 2024 et 2023" >}}
graph TB
  HTA["<b>Dépistage de l'HTA chez le +16 ans</b><br>—<br>- Minimum tous les 3 ans<br>- Annuel si: +40 ans, proche de 14/9<br>maladie cardiovasculaire"] --> seuil("Mesure et appareil standardisés<br>PAS ≥ 140 mmHg<br>et/ou PAD ≥ 90 mmHg ?") -- Oui --> confirmation(<b>Confirmation</b><br>—<br>- Automesure 7 jours<br>- MAPA<br>- 2-3 consultations<br>espacées 1-4 sem.)
  style HTA stroke:#4150f5, stroke-width:1px
    confirmation --> diagnostic("<b>Diagnostic</b><br>—<br>- Clinique<br>- Risque cardiovasculaire<br>(SCORE2 ou MCV)<br>- Biologie<br>- ECG<br>- Ophtalmo<br><br>Répéter dépistages<br>min. tous les 3 ans")
      diagnostic -- Grade 1 sans MCV --> RHD(RHD) -. Échec 3-6 mois .-> traitement
      diagnostic --> traitement("<b>Traitement</b><br>—<br>- Régime hygiéno-diététique:<br>tabac, sel, méditerranéen,<br>surpoids, activité physique<br>- Bithérapie 2 en 1<br>et titration<br>- Cible &lt; 130/80 mmHg") -. Comorbidités .-> cardiologue("<b>Cardiologue</b><br>—<br>- Maladie cardiovasculaire<br>- Susp HTA secondaire:<br>grade 2-3 avant 40 ans,<br>apparition/aggrav. rapide,<br>résistante ou sévère<br>complications multiples,<br>hypokaliémies, Cushing")
    seuil -- "Oui et ..." --> urgent("- MCV<br>- HTA ≥ 18/11<br>- Complication HTA") --> diagnostic
{{< /mermaid >}}

> **MCV =** maladie cardiovasculaire ; **RHD =** régime hygiéno-diététique

### Prise en charge après le diagnostic d'hypertension artérielle

1. Confirmer le diagnostic par automesure/MAPA
2. Noter dans le dossier les valeurs pré-traitement et le grade de l'hypertension (voir *Définitions*)
3. Rechercher une *maladie cardiovasculaire* (MCV) et des complications de l'hypertension  
    - *ECG 12D*, *Fond d'œil* si HTA grade 2-3 ou diabète, {{< modal-btn modal-depistage-prevalent >}}recherche d'AOMI{{< /modal-btn >}}
    - Échocardiographie si anomalie ECG ou suspicion d'HVG
    - Échodoppler des artères rénales si atteinte rénale ou suspicion d'HTA secondaire
    - IRM cérébrale si déclin cognitif, antécédent familial d'hémorragie cérébrale à l'âge moyen ou de démence précoce
4. Définir le {{%modal-btn "modal-rcv"%}}risque cardiovasculaire{{%/modal-btn%}}.  
  En l'absence de maladie cardiovasculaire, calculer le risque {{< scores/heartscore >}}.
5. Adresser au service d'hypertension si: suspicion d'HTA secondaire (voir *Clinique*) ou résistante, bilan des complications

{{% /collapse %}}
{{%collapse "FMC gratuites" %}}

{{< card-link-external title="Blood pressure monitoring" url="https://stridebp.dayonetech.uk/login.aspx" subtitle="Par les sociétés européennes et internationales de cardiologie">}}

{{< youtube id="iDS0vAyLO9w" title="Recommandations ESH 2023 : Diagnostic et dépistage de l'HTA (SFHTA)" >}}

{{< youtube id="szPRUb6vh98" title="Mieux dépister et contrôler la pression artérielle (Fréquence Médicale)" >}}

{{< video mp4="https://media.frequencemedicale.com/JDF/20220921_JDF_JEAN_JACQUES_MOURAD_HTA_02.mp4" poster="https://www.frequencemedicale.com/media/fmtype/images/jdf1dec2022-1669884495.png" description="HTA : stratégie en cas de mauvais contrôle par une bithérapie ? (Pr Jean-Jacques Mourad par FréquenceMédicale)" >}}

{{% /collapse %}}
{{%sources%}}

- [Tock R. Impact d'un modèle de soins infirmiers assisté par Internet, dirigé par des infirmières spécialisées dans un cadre de collaboration multidisciplinaire sur la gestion de l'hypertension artérielle. Minerva. 2025.](https://minerva-ebp.be/FR/Analysis/913)
- [Grave C, et al. Le fardeau de l'hypertension artérielle en France en 2021. Bull Epidemiol Hebd. 2025.](https://beh.santepubliquefrance.fr/beh/2025/12/2025_12_1.html)
- [Anses. Les substituts au sel de table : un risque pour la santé. 2025.](https://www.anses.fr/fr/content/les-substituts-au-sel-de-table-un-risque-pour-la-sante)
- [Kreutz R, et al. 2024 European Society of Hypertension clinical practice guidelines for the management of arterial hypertension. Eur J Intern Med. 2024.](https://www.ejinme.com/article/S0953-6205(24)00238-3/fulltext)
- [SFHTA. Disponibilité des trithérapies fixes d'antihypertenseurs pour contribuer à un meilleur contrôle tensionnel des hypertendus : prise de position de la Société Française d'Hypertension Artérielle (SFHTA). 2024. (PDF)](https://www.sfhta.eu/wp-content/uploads/2024/02/Disponibilite-des-tritherapies-fixes-dantihypertenseurs-prise-de-position-de-la-SFHTA.pdf)
- [US Preventive Services Task Force. Screening for Hypertensive Disorders of Pregnancy: US Preventive Services Task Force Final Recommendation Statement. JAMA. 2023.](https://jamanetwork.com/journals/jama/fullarticle/2809680)
- {{< references/esh-2023 >}}
- [Whealton S, et al. Why Is Cuff Size So Important and Other Factors That Affect Accurate Blood Pressure Measurement. ACC. 2023.](https://www.acc.org/Latest-in-Cardiology/Articles/2023/06/05/19/18/Why-Is-Cuff-Size-So-Important-and-Other-Factors-That-Affect-Accurate-BP-Measurement)
- [Olié V, et al. Épidémiologie de l'hypertension artérielle en France : prévalence élevée et manque de sensibilisation de la population. BEH. 2023.](http://beh.santepubliquefrance.fr/beh/2023/8/2023_8_1.html)
- {{< references/ada-soc >}}
- {{< references/esc-cvd >}}
- [Stergiou GS, et al. 2021 European Society of Hypertension practice guidelines for office and out-of-office blood pressure measurement. J Hypertens. 2021.](https://doi.org/10.1097/hjh.0000000000002843)
- [Cheung A, et al. Executive summary of the KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease. Kidney International. 2021.](https://doi.org/10.1016/j.kint.2020.10.026)
- [US Preventive Services Task Force, Krist AH, Davidson KW, et al. Screening for Hypertension in Adults: US Preventive Services Task Force Reaffirmation Recommendation Statement. JAMA. 2021.](https://jamanetwork.com/journals/jama/fullarticle/2779190)
- {{< references/college-endocrino >}}
- {{< references/esc-diabetes >}}
- {{< references/esc-hta >}}
- [SFHTA. Hypertension artérielle du sujet noir. 2017. (PDF)](https://www.sfhta.eu/wp-content/uploads/2018/10/SFHTA_Fiche_technique_HTA-du-sujet-noir_Decembre-2017.pdf)
- [HAS, SFHTA. Prise en charge de l'hypertension artérielle de l'adulte. Fiche mémo. Septembre 2016.](https://www.has-sante.fr/jcms/c_2059286/fr/prise-en-charge-de-l-hypertension-arterielle-de-l-adulte)
- [SFHTA. HTA et grossesse. Consensus d'experts. 2015. (PDF)](https://sfhta.eu/wp-content/uploads/2017/03/Consensus-dexperts-HTA-et-Grossesse-de-la-SFHTA-Dec.-2015.pdf)

### Bibliographie en attente

- [Huart J, Jouret F. Traitement médicamenteux de l'hypertension artérielle : recommandations ESC 2024 vs ESH 2023. Le Journal de Cardiologie. 2025.](https://www.tvcjdc.be/fr/article/23701033/)
- [McEvoy J, et al, ESC Scientific Document Group. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension: Developed by the task force on the management of elevated blood pressure and hypertension of the European Society of Cardiology (ESC) and endorsed by the European Society of Endocrinology (ESE) and the European Stroke Organisation (ESO). European Heart Journal. 2024.](https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehae178/7741010)
- [Charchar FJ et al. Lifestyle management of hypertension: International Society of Hypertension position paper endorsed by the World Hypertension League and European Society of Hypertension. J Hypertens. 2023.](https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/37712135/)
- [Duly-Bouhanick B et al; SFHTA. HTA de l'enfant et de l'adolescent. Consensus d'experts. 2022. (PDF)](https://sfhta.eu/wp-content/uploads/2022/06/2020-11-27_recos-seules-HTA-enfants-et-ado-V2-du-02.06.2022.pdf)
- [Collège National des Enseignants de Cardiologie (CNEC). Hypertension artérielle de l'adulte et de l'enfant. Item 224. Cardiologie 2e édition. 2022.](https://www.sfcardio.fr/publication/chapitre-04-item-224-hypertension-arterielle-de-ladulte-et-de-lenfant/)
- [Xi B, et al. Establishing International Blood Pressure References Among Nonoverweight Children and Adolescents Aged 6 to 17 Years. Circulation. 2016.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4729639/#SD1)

{{%/sources%}}
{{% modal title="Risque cardiovasculaire selon ESC 2021" id="modal-rcv"%}}

{{< clinique/risque-cardiovasculaire >}}

{{% /modal %}}
{{% modal title="Dépistage selon le score PREVALENT" id="modal-depistage-prevalent"%}}

{{< scores/aomi-prevalent >}}

{{% /modal %}}
{{% modal title="Dépistage des apnées par le score STOP-BANG" id="modal-saos"%}}

{{< scores/stop-bang >}}

{{% /modal %}}
{{% modal title="Régime méditerranéen" id="modal-regime"%}}

{{< traitements/regime-mediterraneen >}}

{{% /modal %}}
{{% modal title="IEC dans l'hypertension" id="modal-iec" %}}

{{< traitements/iec >}}

{{% /modal %}}
{{% modal title="ARA2 dans l'hypertension" id="modal-ara2" %}}

{{< traitements/ara2 >}}

{{% /modal %}}
{{% modal title="Trithérapie dans l'hypertension" id="modal-triple"%}}

{{< traitements/hta-tritherapie >}}

{{% /modal %}}
{{% modal title="Association TZD + ICa dans l'hypertension" id="modal-tzd-ica"%}}

{{< traitements/hta-tzd-ica >}}

{{% /modal %}}
{{% modal title="Intensité d'activité physique et MET" id="modal-met"%}}

{{< clinique/activite-physique-intensite >}}

{{% /modal %}}
{{% modal title="DFG selon CKD-EPI" id="modal-ckd-epi"%}}

{{< scores/ckd-epi >}}

{{% /modal %}}
