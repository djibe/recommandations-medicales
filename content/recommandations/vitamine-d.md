+++
id = "0190e8d7-0af7-7af3-ae47-dd6da77d4f9e"
title = "Vitamine D et supplémentation"
prefix = "la "
titleSeo = "supplémentation Vitamine D"
description = "Recommandations sur les apports et la supplémentation en vitamine D. Aliments riches, 1000 UI par jour, indications au dosage et cible selon l'âge, nourrisson"
synonyms = ["Cholécalciferol vitamine D3", "ergocalciférol vitamine D2"]
auteurs = ["Jean-Baptiste FRON"]
date = "2020-04-15T00:28:29+02:00"
publishdate = "2020-04-15"
lastmod = "2025-02-04"
specialites = ["endocrinologie", "pediatrie", "therapeutique"]
annees = "2022"
sources = ["SFP", "HAS", "SFR"]
tags = ["depistage", "vitamine d", "chute", "nourrisson", "enfant", "adolescent"]
english = ["Vitamin D"]
sctid = "30178006"
icd10 = ["E55", "E55.9"]
atc = "A11CC"
image = true
imageSrc = "La vitamine D. pch.vector / Freepik"
flowchart = true
todo = "rankok | questionnaire VDSP vitamineD 2018 src23 et src25, autre quest src26, formule calcul Zitterman src72"
+++

{{%article-summary%}}

- La vitamine D est une hormone essentielle du métabolisme phosphocalcique étant également effectrice sur d'autres organes comme le système nerveux et le côlon et mieux absorbée pendant les repas (lipophile)
- Les enfants nécessitent une supplémentation quotidienne en vitamine D de 400 à 800 UI durant toute leur croissance
- Taux sérique cible en vitamine D pour un adulte: 50 nmol/L et plus
- Cible de vitamine D supérieure à 75 nmol/L à partir de 65 ans ou en cas de pathologie à risque ou de chutes. Protocole de correction systématique et apports au long cours. Dosage initial de la vitamine D uniquement pour certaines pathologies
- Une [supplémentation en calcium]({{% relref "apports-calcium.md" %}}) est nécessaire en cas de comorbidités

Articles liés: [ostéoporose post-ménopausique]({{% relref "osteoporose.md" %}}) ou [masculine]({{% relref "osteoporose-masculine.md" %}})

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Vitamine D
: La vitamine D participe à la régulation du métabolisme phosphocalcique et prévient: **rachitisme, ostéomalacie, douleurs musculaires diffuses**. Elle a également d'autres effets tissulaires. L'unité internationale est le **nmol/L**.
: **Bénéfices de la supplémentation en vitamine D**: réduction des fractures non vertébrales après 65 ans, réduction des chutes des +70 ans quand les taux sériques sont supérieurs à 75 nmol/L (30 ng/mL).
: Selon l'*Inserm*, une carence en vitamine D serait fortement liée au développement de la [maladie d'Alzheimer]({{% relref "maladie-alzheimer.md" %}}). D'autant plus que le sujet est carencé en caroténoïdes et acides gras polyinsaturés (*[Féart 2017](https://presse.inserm.fr/la-vitamine-d-une-nouvelle-piste-contre-la-maladie-dalzheimer/28364/)*).

Carence en vitamine D de l'adulte et de l'enfant
: Taux sérique de vitamine D < 30 nmol/L. Risque élevé de *rachitisme*.

Déficit en vitamine D de l'adulte et de l'enfant
: 30 < **taux sérique** < 50 nmol/L.

Seuil de toxicité de la vitamine D
: Taux sérique > 375 nmol/L.  
Ne pas supplémenter au-delà 150 nmol/L.

### Épidémiologie sur la vitamine D en France

- **Déficit en vitamine D**: 75% des adultes et 70% des enfants
- **Carence en vitamine D**: 7% des adultes, 13% des adolescents et 4% des enfants

> -- *Étude ESTEBAN (Santé Publique France)*

### Abréviations

25OHD (25-OH-D)
: vitamine D-25 ou calcidiol

calcitriol
: vitamine D active (1, 25 OH vitamine D)

HAS
: Haute Autorité de Santé

IRC
: insuffisance rénale chronique

SFP
: Société française de pédiatrie

UI
: unités internationales

vitamine D2
: ergocalciférol

vitamine D3
: cholécalciférol (ou colécalciférol)
{.dl-inline}

{{% /collapse %}}
{{%collapse "Conversion des unités de la vitamine D" %}}

Convertir dans les 2 sens les unités de mesure de la vitamine D: nmol/L (unités internationales) et ng/mL.

<div class="form-group mb-5">
  <label for="nmolInput">nmol/L</label>
  <input type="number" class="form-alternative" id="nmolInput" value="50" min="1" max="400" oninput="ngInput.value = Math.round(this.value * 0.4)">
  <label for="ngInput" class="ml-5">ng/mL</label>
  <input type="number" style="width:68px" class="form-alternative" id="ngInput" value="20" oninput="nmolInput.value = Math.round(this.value * 2.496)">
</div>

> Vitamine D3 (cholécalciférol): 1 µg = 40 UI

{{% /collapse %}}
{{%collapse "Facteurs de risque de carence" %}}

### Sujets à risque de complications par carence en vitamine D

- Iatrogène  
  [Corticoïdes au long cours]({{% relref "corticoides.md" %}}), traitements anti-épileptiques, [anti-aromatases]({{% relref "cancer-sein.md" %}}), analogues de la GnRH.
- Maladies endocriniennes et dermatologiques: hyperparathyroïdie ...
- Malabsorption, maldigestion, cholestase, insuffisance hépatique  
  [Maladie cœliaque]({{% relref "maladie-coeliaque.md" %}}), mucoviscidose, [pancréatite chronique]({{% relref "pancreatite-chronique.md" %}}), cholangites, [chirurgie bariatrique]({{% relref "obesite-adulte.md" %}}).
- [Maladie rénale chronique]({{% relref "insuffisance-renale-chronique.md" %}}), syndrome néphrotique
- Anorexie mentale
- Sujets âgés à {{< modal-btn modal-risque-chute >}}risque de chute{{< /modal-btn >}}

**NB.** À partir de 65 ans (sauf exposition solaire et bonne santé), le risque d'hypovitaminose est marqué. Correction de 300.000 UI sur 3 mois et protocole d'entretien sans dosage.

### Trois objectifs pour les personnes à risque de carence

1. Taux ≥ 75 nmol/L avec dosage initial
2. Protocole de correction rapide
3. [Apports calciques]({{% relref "apports-calcium.md" %}}) ≥ 1 g/j

{{% /collapse %}}
{{%collapse "Apports cibles en vitamine D selon l'âge" %}}

> [!INFO]
> Favoriser les apports naturels en vitamine D: activités de plein air, exposition solaire quotidienne de 30 minutes des bras et jambes (chez l'adulte, sans crème), alimentation variée (dont poissons gras). -- *Annweiler et al 2018*

La supplémentation en vitamine D est prescrite au long cours sans dosage de la vitamine D sauf chez les sujets à risque mentionnés plus haut (voir *Patients à risque*).

S'assurer également d'[apports calciques suffisants]({{% relref "apports-calcium.md" %}}).

{{< table title="Apports en vitamine D recommandés en 2025 selon le profil du patient" >}}
| Population                                                    | Apports (UI/j) ou cibles (25OHD) recommandés                                         | Source           |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------|------------------|
| 0 - 2 ans                                                     | 400-800 UI/j                                                                         | *Bacchetta 2025* |
| 2 - 18 ans                                                    | 400-800 UI/j<br>voire 50.000 UI/trimestre<br>ou 80-100.000 UI en novembre et février | *Bacchetta 2025* |
| 2 - 18 ans à risque<br>Peau noire, obésité, 0 exposition solaire, vegan | 800-1600 UI/j voire 50.000 UI/6sem<br>ou 80-100.000 UI/trimestre           | *Bacchetta 2025* |
| Grossesse                                                     | 80-100.000 UI à 7 mois de grossesse                                                  | *CNGOF 8e mois*  |
| Mineur                                                        | &gt; 75 nmol/L                                                                       | *Bacchetta 2022* |
| Adulte                                                        | ≥ 50 nmol/L                                                                          | *Annweiler 2018* |
| Adulte ≥ 65 ans                                               | ≥ 75 nmol/L                                                                          | *Annweiler 2018* |
| Adulte à risque, dépendant, chutes                            | ≥ 75 nmol/L                                                                          | *Annweiler 2018* |
| Résident en EHPAD                                             | ≥ 75 nmol/L et cible calcique 1200 mg/j                                              | *Annweiler 2018* |
| Ostéoporose, biphosphonates                                   | ≥ 75 nmol/L                                                                          | *Annweiler 2018* |
{{< /table >}}

> Apports quotidiens préférés chez l'enfant et l'adolescent: vitamine D2 (Stérogyl® 400 UI/gte) ou D3 (ZymaD® 300 UI/gte ou Adrigyl® 333 UI/gte) quotidienne. En cas de mauvaise observance, vitamine D3 en ampoule (*Bacchetta et al 2025*).

> [!WARNING]
> Ne pas utiliser d'autres formes de supplémentations de vitamine D.

{{% /collapse %}}
{{%collapse "Quand doser la vitamine D ?" %}}

Supplémentation quotidienne ou mensuelle **sans dosage de la vitamine D** chez les sujets en bonne santé (pas de pathologie ostéoporotique ou polypathologies, absence de chutes). -- *Souberbielle et al 2019*
{.alert .alert-warning}

Situations pouvant faire contrôler le taux de vitamine D:

1. Suspicion de rachitisme
2. Suspicion d'ostéomalacie (fatigue musculaire, douleurs osseuses)
3. À 3 mois d'une transplantation rénale
4. Avant et après une [chirurgie bariatrique]({{% relref "obesite-adulte.md" %}})
5. Personne âgée avec [chutes](/tags/chute/) répétées  
  Noter sur l'ordonnance << Évaluation et prise en charge des personnes âgées sujettes aux chutes répétées >>.
6. Traitement préconisant une mesure de la vitamine D (ex. [biphosphonate]({{% relref "osteoporose.md" %}}))

> -- *HAS 2013* et *Conditions de prise en charge par l'Assurance Maladie*

et aussi

- Hospitalisation pour exacerbation de [BPCO]({{% relref "bronchopneumopathie-chronique-obstructive.md" %}}) (*GOLD*)
- Enfant en [allaitement maternel]({{% relref "allaitement.md" %}}) sans supplémentation pendant des mois (*SFD*)
- Enfants à peau pigmentée sans supplémentation avec arcature des membres inférieurs (*SFD*)
- Enfant avec supplémentation prolongée à des doses excessives (*Bacchetta 2022*)
- Prématuré < 32 SA ou < 1,5 kg (*Bacchetta 2022*)  
  Cible de vitamine D: 50-120 nmol/L.
- Diagnostic et suivi de la [pancréatite chronique]({{% relref "pancreatite-chronique.md" %}}) (*ACG*, *BSG*)

En dehors des 6 indications (+ suppléments), préciser sur l'ordonnance la raison.

Pour un dosage de complaisance, préciser **<< NR >>** à côté du dosage (9,45 €, code B35).  
{{%class%}}36 millions d'euros de dosages de vitamine D en 2020.{{%/class %}}

{{% /collapse %}}
{{%collapse "Protocoles de correction d'une carence en vitamine D" %}}

### Protocole de correction de la carence en vitamine D

Posologie selon le résultat du dosage de vitamine D:

- Taux sériques de 50 à 75 nmol/L (30 ng/mL)  
  50.000 UI/semaine pendant 4 semaines.
- Taux sériques < 50 nmol/L (20 ng/mL)  
  50.000 UI/semaine pendant 8 semaines.

Puis enchaîner sur le [protocole d'entretien](#protocole-dentretien-après-carence-en-vitamine-d). Utiliser des ampoules de 100.000 UI en cas de nécessité d'une 2^e^ correction.

> -- Protocole de correction d'une hypovitaminose D selon *Souberbielle et al 2019*

### Protocole d'entretien après carence en vitamine D

En l'absence d'entretien, la carence en vitamine D récidive sous 6 mois.

#### Entretien mensuel pendant 3 à 6 mois

{{%info%}}
50.000 UI par mois pendant 3 à 6 mois

Nouveau dosage 1 semaine après la fin du traitement.
{{%/info%}}

#### Dosage et adaptation du protocole d'entretien

Dose réajustée selon le nouveau résultat du dosage de vitamine D après 3 à 6 mois d'entretien et **poursuivi à vie**:

- Dosage < 75 nmol/L (30 ng/mL)  
  - 80 à 100.000 UI par mois
  - ou 50.000 UI/14j
  - pendant 3 à 6 mois
- Dosage > 150 nmol/L (60 ng/mL): espacer à 50.000 UI tous les 2 mois
- Entre 75 et 150 nmol/L: conserver le rythme d'entretien

> -- Protocole d'entretien après carence en vitamine D selon *Souberbielle et al 2019*

Intensification de la supplémentation si:

- Sujet à peau très foncée
- Absence d'exposition estivale
- Traitement à risque: rifampicine, phénobarbital, phénytoïne
- [Obésité]({{% relref "obesite-adulte.md" %}}), régime carencé (vegan)

{{% /collapse %}}
{{%collapse "Aliments riches en vitamine D" %}}

Aliments naturellement riches en vitamine D:

- **Poissons gras:** hareng, sardine, saumon et maquereau
- Certains champignons: girolles, cèpes et morilles
- **Produits laitiers enrichis en vitamine D**
- Jaune d'œuf
- Chocolat noir
- Céréales de petit déjeuner enrichis en vitamine D
- Beurre et margarines
- Abats (notamment le foie)
- Dans une moindre mesure: viande

> -- *Anses* et [table Ciqual](https://ciqual.anses.fr/#/constituants/52100/vitamine-d-(%C2%B5g-100-g))

{{% /collapse %}}
{{%collapse "Spécialités de vitamine D disponibles" %}}

La vitamine D est [prise pendant le repas]({{% relref "medicaments-prise-repas.md" %}}).

### Spécialités de vitamine D3 (cholécalciférol) par galénique

- Ampoule  
  Cholécalciférol [50](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=66236866&typedoc=R), 80, [100.000 UI](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=61172819&typedoc=R) (200.000 UI à éviter).
- Capsule molle  
  Kipos® 100.000 UI, Uvecaps® 1000 UI/j ou 20.000 UI, Uvedose® 50.000 UI.
- Goutte  
  [Adrigyl®](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=66269026&typedoc=R) 333 UI/goutte, [ZymaD®](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=63902334&typedoc=R) 300 UI/goutte.

Spécialités avec calcium + vitamine D3 associés (prendre [à distance des repas]({{% relref "medicaments-prise-repas.md" %}})):

{{< traitements/calcium-vitd >}}

### Spécialité de vitamine D2

Stérogyl® 400 UI/gte (non recommandée).

{{% /collapse %}}
{{%collapse "Conduite à tenir pour la supplémentation en vitamine D" "show" %}}

{{< mermaid title="Cibles d'apports en vitamine D (schéma simplifié). Dr JB Fron d'après Bacchetta J 2022 et Annweiler C 2018" >}}
graph TB
  apports[Objectifs d'apports<br>en vitamine D]
  style apports stroke:#4150f5, stroke-width:1px
    apports --> nourrisson("<b>0 - 2 ans</b><br>—<br>400-800 UI/j<br>soit ZymaD 2 gtes/j")
    apports --> mineur("<b>2 - 18 ans</b><br>—<br>400-800 UI/j<br>—<br><b>À risque</b> (peau noire, obèse,<br>aucune exposition, vegan):<br>800-1600 UI/j") -- Observance insuffisante --> alternative("50.000 UI/trimestre<br>ou 80-100.000 UI x2 l'hiver<br>—<br><b>À risque:</b> 50.000 UI/6 semaines<br>ou 80-100.000 UI/trimestre")
    apports --> adulte("<b>Adulte</b><br>—<br>25OHD &gt; 50 nmol/L")
      adulte --> 65("<b>+65 ans</b><br>—<br>25OHD &gt; 75 nmol/L<br>Correction probabiliste<br>100.000 UI/mois 3 mois<br>puis entretien")
    apports --> risque("<b>Patient à risque</b><br>—<br>- Risque de chutes<br>- Ostéoporose<br>- Corticoïdes, aromatases...<br>- Hyperparathyroïdie<br>- Malabsorption<br>- Insuffisance rénale") --> intensif("- Dosage initial<br>- 25OHD &gt; 75 nmol/L<br>- Correction rapide<br>puis entretien<br>- Apports calciques &gt; 1 g/j")
{{< /mermaid >}}

> Apports quotidiens préférés chez -18 ans: vitamine D2 (Stérogyl® 400 UI/gte) ou D3 (ZymaD® 300 UI/gte ou Adrigyl® 333 UI/gte). Sinon vitamine D3 en ampoule (*Bacchetta 2022*).  
Ne pas utiliser d'autres formes de supplémentations.

{{% /collapse %}}
{{%sources%}}

- [Bacchetta J, et al; CRMR Maladies Rares du Calcium et du Phosphate, Société Française de pédiatrie, Société Française de Pharmacie Clinique, Conseil National de l'Ordre des Sages-Femmes, Collège National des Sages-femmes de France. Lettre du 23 janvier 2025. 2025. (PDF)](https://sfpc.eu/wp-content/uploads/2025/01/Vitamine-D-Courrier-Conjoint.pdf)
- [Ameli Médecin. Dosage de la vitamine D : le point sur la prescription et la prise en charge. 08/02/2024.](https://www.ameli.fr/medecin/actualites/dosage-de-la-vitamine-d-le-point-sur-la-prescription-et-la-prise-en-charge)
- [Bacchetta J et al; SFP, SFneonatalogie, AFPA et al. Vitamin D and calcium intakes in general pediatric populations: A French expert consensus paper. Archives de pédiatrie. 2022. (PDF)](https://afpa.org/content/uploads/2022/03/Vitamin-D-and-calcium-intakes-in-general-pediatric-populations-A-French-expert-consensus-paper-20-02-2022.pdf)
- [Anses. Vitamine D : pourquoi et comment assurer un apport suffisant ? 02/03/2022.](https://www.anses.fr/fr/content/vitamine-d-pourquoi-et-comment-assurer-un-apport-suffisant)
- [Omedit Centre Val de Loire. Protocole de supplémentation en vitamine D en EHPAD. Décembre 2020. (PDF)](https://www.omedit-centre.fr/medias/Protocole-supplementation-vitamine-D-EHPAD.pdf)
- [Ameli. Dosage de la vitamine D. 29/12/2020.](https://www.ameli.fr/paris/laboratoire-danalyses-medicales/exercice-liberal/memos/dosage-vitamine)
- [Souberbielle JC, et al. La supplémentation en vitamine D en France chez les patients ostéoporotiques ou à risque d'ostéoporose : données récentes et nouvelles pratiques. Revue du Rhumatisme. 2019. (PDF)](https://www.grio.org/documents/page246/la-supplementation-en-vitamine-d-grio-revrhum2019-2.pdf)
- [Esteban 2014-2016 -- Chapitre dosages biologiques des vitamines et minéraux : pas de déficit important ou de carence à grande échelle](https://www.santepubliquefrance.fr/les-actualites/2019/esteban-2014-2016-chapitre-dosages-biologiques-des-vitamines-et-mineraux-pas-de-deficit-important-ou-de-carence-a-grande-echelle)
- [Annweiler C, et al. Vitamine D chez l'adulte : mise au point sur le dosage et la supplémentation. Gériatrie et psychologie Neuropsychiatrie du Vieillissement. 2018.](https://www.jle.com/fr/revues/gpn/e-docs/vitamine_d_chez_ladulte_mise_au_point_sur_le_dosage_et_la_supplementation_311580/article.phtml)
- [Briot K, et al. Actualisation 2018 des recommandations françaises du traitement de l'ostéoporose post-ménopausique. Revue du Rhumatisme. 2018.](https://www.sciencedirect.com/science/article/abs/pii/S1169833018300504)
- [Inserm. La vitamine D, une nouvelle piste contre la maladie d'Alzheimer ?. 2017.](https://presse.inserm.fr/la-vitamine-d-une-nouvelle-piste-contre-la-maladie-dalzheimer/28364/)
- [HAS. Utilité clinique du dosage de la vitamine D. Octobre 2013.](https://www.has-sante.fr/upload/docs/application/pdf/2013-02/utilite_clinique_du_dosage_de_la_vitamine_d_-_note_de_cadrage.pdf)
- [Société Française de Pédiatrie. La Vitamine D : une vitamine toujours d'actualité chez l'enfant et l'adolescent. Mise au point par le Comité de nutrition de la Société française de pédiatrie. 2012. (PDF)](https://afpa.org/content/uploads/2017/07/Reco_VIT_D_VersionFR_VF.pdf)
- [HAS. Maladie rénale chronique de l'adulte. 2012. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2012-04/guide_parcours_de_soins_mrc_web.pdf)

### Bibliographie en attente

[HCSP. Avis relatif à la couverture des besoins de la population générale en vitamine D et en fer. 21/06/2022.](https://www.hcsp.fr/explore.cgi/avisrapportsdomaine?clefr=1251)

{{%/sources%}}
{{% modal title="Facteurs de risque de chute" id="modal-risque-chute"%}}

{{< clinique/facteur-risque-chute >}}

{{% /modal %}}
{{% modal title="Apports en calcium recommandés" id="modal-calcium-cible"%}}

{{< clinique/calcium-cible >}}

{{% /modal %}}
{{% modal title="Teneur en calcium des aliments" id="modal-calcium"%}}

{{< traitements/aliments-calcium >}}

{{% /modal %}}
{{% modal title="Apports en calcium recommandés pour l'enfant" id="modal-calcium-enfant"%}}

{{< traitements/calcium-enfants >}}

{{% /modal %}}
