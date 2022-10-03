+++
title = "Vitamine D et supplémentation"
prefix = "la "
titleSeo = "supplémentation Vitamine D"
description = "Recommandations sur les apports et la supplémentation en vitamine D. Aliments riches, 1000 UI par jour, indications au dosage et cible selon l'âge, nourrisson"
synonyms = ["Cholécalciferol vitamine D3", "ergocalciférol vitamine D2"]
auteurs = ["Jean-Baptiste FRON"]
date = "2020-04-15T00:28:29+02:00"
publishdate = "2020-04-15"
lastmod = "2022-03-31"
specialites = ["endocrinologie", "pediatrie"]
annees = "2022"
sources = ["SFP", "HAS", "SFR"]
tags = ["depistage", "vitamine d", "chute", "nourrisson", "enfant", "adolescent"]
anglais = ["Vitamin D"]
image = true
imageSrc = "Illustration de la vitamine D par pch.vector / Freepik"
sctid = "30178006"
flowchart = true
todo = "calcium enfant dans screenshots"
+++

{{%article-summary%}}

- Supplémentation de 400-800 UI/j toute la croissance
- Cible adulte: > 50 nmol/L
- 75 nmol/L à partir de 65 ans ou pathologie à risque, chutes
- {{< modal-btn modal-calcium-cible >}}Apports en calcium recommandés{{< /modal-btn >}} et {{< modal-btn modal-calcium >}}aliments riches en calcium{{< /modal-btn >}}

Articles liés: {{< modal-btn modal-calcium-cible >}}apports en calcium recommandés{{< /modal-btn >}}, {{< modal-btn modal-calcium >}}aliments riches en calcium{{< /modal-btn >}} et [ostéoporose]({{< relref "osteoporose.md" >}})

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Vitamine D
: La vitamine D participe à la régulation du métabolisme phosphocalcique et prévient: **rachitisme, ostéomalacie, douleurs musculaires diffuses**.  
L'unité internationale est le **nmol/L**.
: **Bénéfices de la supplémentation en vitamine D**  
Réduit les fractures non vertébrales des +65 ans, réduit les chutes des +70 ans quand les taux sériques sont supérieurs à 30 ng/mL. Aliments riches: poissons et produits laitiers.
: Selon l'Inserm, une carence en vitamine D serait fortement liée au développement de la maladie d'Alzheimer. D'autant plus que le sujet est carencé en caroténoïdes et acides gras polyinsaturés (*[Féart 2017](https://presse.inserm.fr/la-vitamine-d-une-nouvelle-piste-contre-la-maladie-dalzheimer/28364/)*).

Carence en vitamine D de l'adulte et de l'enfant
: Taux sérique de vitamine D < 30 nmol/L.  
Risque élevé de *rachitisme*.

Déficit en vitamine D de l'adulte et de l'enfant
: 30 < **taux sérique** < 50 nmol/L.

Seuil de toxicité de la vitamine D
: Taux sérique > 375 nmol/L.  
Ne pas supplémenter au-delà 150 nmol/L.

### Épidémiologie sur la vitamine D en France

Principaux aliments riches en vitamine D: poissons et produits laitiers (*Anses*).

- **Déficit en vitamine D**  
  75% des adultes, 70% des enfants.
- **Carence en vitamine D**  
  7% des adultes, 13% des adolescents, 4% des enfants.

> *Étude Esteban (Santé Publique France)*

### Abréviations

25OHD (25-OH-D)
: vitamine D-25

HAS
: Haute autorité de santé

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

{{%/collapse%}}
{{%collapse "Conversion d'unités de la vitamine D" %}}

Convertir dans les 2 sens: nmol/L (unités internationales) et ng/mL.

<div class="form-group mb-5">
  <label for="nmolInput">nmol/L</label>
  <input type="number" class="form-alternative" id="nmolInput" value="50" min="1" max="400" oninput="ngInput.value = Math.round(this.value * 0.4)">
  <label for="ngInput" class="ml-5">ng/mL</label>
  <input type="number" style="width:68px" class="form-alternative" id="ngInput" value="20" oninput="nmolInput.value = Math.round(this.value * 2.496)">
</div>

Vitamine D3 cholécalciférol: 1 µg = 40 UI

{{%/collapse%}}
{{%collapse "Facteurs de risque de carence" %}}

### Personnes à risque de complications par carence en vitamine D

- Iatrogène  
  Corticoïdes au long cours, traitements anti-épileptiques, anti-aromatases, analogues de la GnRH.
- Maladies endocriniennes et dermatologiques  
  Hyperparathyroïdie ...
- Malabsorption, maldigestion, cholestase, insuffisance hépatique  
  [Maladie cœliaque]({{< relref "maladie-coeliaque.md" >}}), mucoviscidose, chirurgie bariatrique.
- [Insuffisance rénale chronique]({{< relref "insuffisance-renale-chronique.md" >}}), syndrome néphrotique
- Anorexie mentale
- Sujets âgés à {{< modal-btn modal-risque-chute >}}risque de chute{{< /modal-btn >}}

### 3 objectifs pour les personnes à risque

1. Taux ≥ 75 nmol/L avec dosage initial
1. Protocole de correction rapide
1. Apports calciques ≥ 1 g/j

{{%/collapse%}}
{{%collapse "Apports cibles en vitamine D selon l'âge" %}}

La supplémentation en vitamine D peut être instaurée et suivie sans dosage de la vitamine D sauf chez les sujets à risque mentionnés plus haut (voir *Patients à risque*).

S'assurer d'apports calciques suffisants:

- {{< modal-btn modal-calcium-cible >}}Apports en calcium cibles selon l'âge{{< /modal-btn >}}
- Avant 18 ans: ≥ 3 portions de produits laitiers quotidiens  
  - Eaux riches en calcium si apports légèrement insuffisants (Courmayeur, Hépar et Contrex)
  - Sinon supplémentation en calcium 500 à 1000 mg/j (apports < 300 mg/j ou vegan)
- Évaluer les apports calciques si fracture ou douleurs osseuses

{{< table title="Apports en vitamine D recommandés en 2022 selon le profil du patient" >}}
| Population                         | Apports (UI/j) ou cibles (25OHD) recommandés | Source           |
|------------------------------------|----------------------------------------------|------------------|
| 0 - 2 ans                          | 400-800 UI/j                                 | *Bacchetta 2022* |
| 2 - 18 ans                         | Apports quotidiens voire 50.000 UI/trimestre<br>ou 80-100.000 UI novembre et février | *Bacchetta 2022* |
| 2 - 18 ans à risque<br>Sujet noir, obèse, 0 exposition, vegan | 800-1600 UI/j voire 50.000 UI/6sem<br>ou 80-100.000 UI/trimestre | *Bacchetta 2022* |
| Grossesse                          | 80-100.000 UI à 7 mois de grossesse          | *CNGOF 8e mois*  |
| Mineur                             | &gt; 75 nmol/L                               | *Bacchetta 2022* |
| Adulte                             | &ge; 50 nmol/L                               | *Annweiler 2018* |
| Adulte &ge; 65 ans                 | &ge; 75 nmol/L                               | *Annweiler 2018* |
| Adulte à risque, dépendant, chutes | &ge; 75 nmol/L                               | *Annweiler 2018* |
| Résident en EHPAD                  | &ge; 75 nmol/L et cible calcique 1200 mg/j   | *Annweiler 2018* |
| Ostéoporose, biphosphonates        | &ge; 75 nmol/L                               | *Annweiler 2018* |
{{< /table >}}

> Apports quotidiens préférés chez l'enfant et l'adolescent: vitamine D2 (Stérogyl® 400 UI/gte) ou D3 (ZymaD® 300 UI/gte ou Adrigyl® 333 UI/gte). Sinon vitamine D3 en ampoule (*Bacchetta 2022*)  
Ne pas utiliser d'autres formes de supplémentations.

{{% /collapse %}}
{{%collapse "Quand doser la vitamine D ?" %}}

1. Suspicion de rachitisme
2. Suspicion d'ostéomalacie (fatigue musculaire, douleurs osseuses)
3. À 3 mois d'une transplantation rénale
4. Avant et après une chirurgie bariatrique
5. Personne âgée avec chutes répétées  
  Noter sur l'ordonnance << Évaluation et prise en charge des personnes âgées sujettes aux chutes répétées >>
6. Traitement préconisant une mesure de la vitamine D (ex. biphosphonate)

> *HAS 2013* et *Conditions de prise en charge par l'Assurance Maladie*

et aussi

- Hospitalisation pour exacerbation de [BPCO]({{< relref "bronchopneumopathie-chronique-obstructive.md" >}}) (*GOLD*)
- Enfant en allaitement maternel sans supplémentation pendant des mois (*SFD*)
- Enfants à peau pigmentée sans supplémentation avec arcature des membres inférieurs (*SFD*)
- Prématuré < 32 SA ou < 1,5 kg (*Bacchetta 2022*)  
  Cible de vitamine D 50-120 nmol/L
- Bilan initial de [maladie rénale chronique]({{< relref "insuffisance-renale-chronique.md" >}}) (*HAS 02/2012*)
- Enfant avec supplémentation prolongée à des doses excessives (*Bacchetta 2022*)

En dehors des 6 indications (+ suppléments), préciser sur l'ordonnance la raison.  
En dosage de complaisance, préciser << Non remboursable >> sur la prescription (9,45€, code B35).  
{{%class%}}92 millions d'euros de dosages de vitamine D en 2011{{%/class %}}

{{% /collapse %}}
{{%collapse "Protocoles de correction d'une carence en vitamine D" %}}

### Protocole de correction de la carence en vitamine D

Posologie selon le résultat du dosage de vitamine D:

- Taux sériques de 50 à 75 nmol/L (30 ng/mL)  
  Forte dose 50.000 UI/semaine pendant 4 semaines.
- Taux sériques < 50 nmol/L (20 ng/mL)  
  50.000 UI/semaine pendant 8 semaines.

Puis enchaîne sur le protocole d'entretien.  
Utiliser des ampoules de 100.000 UI en cas de nécessité d'une 2<sup>e</sup> correction.

> Protocole de correction de carence en vitamine D selon *Souberbielle JC 2019*

### Protocole d'entretien après carence en vitamine D

#### Entretien mensuel pendant 3 à 6 mois

{{%info%}}
50.000 UI par mois pendant 3 à 6 mois

Nouveau dosage 1 semaine après la fin du traitement.
{{%/info%}}

#### Dosage et adaptation du protocole d'entretien

Dose réajustée selon le nouveau résultat du dosage de vitamine D après 3 à 6 mois d'entretien:

- Dosage < 75 nmol/L (30 ng/mL)  
  - 80 à 100.000 UI par mois
  - ou 50.000 UI/14j
  - pendant 3 à 6 mois
- Dosage > 150 nmol/L (60 ng/mL)  
  Espacer l'entretien à 50.000 UI tous les 2 mois.
- Entre 75 et 150  
  Conserver le rythme d'entretien.

> Protocole d'entretien après carence en vitamine D selon *Souberbielle JC 2019*

Intensification de la supplémentation si:

- Sujet à peau très foncée
- Absence d'exposition estivale
- Traitement à risque: rifampicine, phénobarbital, phénytoïne
- Obésité, régime carencé (vegan)

{{% /collapse %}}
{{%collapse "Spécialités de vitamine D disponibles" %}}

### Spécialités de vitamine D3 par galénique

<ul class="list-group mw-480">
  {{< list-item title="Ampoule" subtitle="Cholécalciférol 200, 100, 80 ou 50.000 UI" >}}
  {{< list-item title="Capsule molle" subtitle="Kipos® 100.000 UI" >}}
  {{< list-item title="Gouttes" subtitle="Adrigyl® 333 UI/goutte, ZymaD® 300 UI/goutte" >}}
</ul>

### Spécialité de vitamine D2

Stérogyl® 400 UI/gte

{{% /collapse %}}
{{%collapse "Conduite à tenir pour la supplémentation en vitamine D" "show" %}}

{{< mermaid title="Cibles d'apports en vitamine D (schéma simplifié). Dr JB Fron d'après Bacchetta J 2022 et Annweiler C 2018" >}}
graph TB
  apports[Objectifs d'apports<br>en vitamine D]
  style apports stroke:#4150f5, stroke-width:1px
    apports --> nourrisson(<b>0 - 2 ans</b><hr>400-800 UI/j<br>soit ZymaD 2 gtes/j)
    apports --> mineur("<b>2 - 18 ans</b><hr>400-800 UI/j<hr><b>À risque</b> (peau noire, obèse<br>aucune exposition, vegan):<br>800-1600 UI/j") -- Observance insuffisante --> alternative(50.000 UI/trimestre<br>ou 80-100.000 UI x2 l'hiver<hr><b>À risque:</b> 50.000 UI/6 semaines<br>ou 80-100.000 UI/trimestre)
    apports --> adulte(<b>Adulte</b><hr>25OHD &gt; 50 nmol/L)
      adulte --> 65(<b>+65 ans</b><hr>25OHD &gt; 75 nmol/L)
    apports --> risque(<b>Patient à risque</b><hr>- Risque de chutes<br>- Ostéoporose<br>- Corticoïdes, aromatases...<br>- Hyperparathyroïdie<br>- Malabsorption<br>- Insuffisance rénale) --> intensif("- Dosage initial<br>- 25OHD &gt; 75 nmol/L<br>- Correction rapide<br>- Apports calciques &gt; 1 g/j")
{{< /mermaid >}}

> Apports quotidiens préférés chez -18 ans: vitamine D2 (Stérogyl® 400 UI/gte) ou D3 (ZymaD® 300 UI/gte ou Adrigyl® 333 UI/gte). Sinon vitamine D3 en ampoule (*Bacchetta 2022*)  
Ne pas utiliser d'autres formes de supplémentations.

{{% /collapse %}}
{{%sources%}}

- [Bacchetta J. et al; SFP, SFneonatalogie, AFPA et al. Vitamin D and calcium intakes in general pediatric populations: A French expert consensus paper. Archives de pédiatrie. 2022. (PDF)](https://afpa.org/content/uploads/2022/03/Vitamin-D-and-calcium-intakes-in-general-pediatric-populations-A-French-expert-consensus-paper-20-02-2022.pdf)
- [Anses. Vitamine D : pourquoi et comment assurer un apport suffisant ? Septembre 2021.](https://www.anses.fr/fr/content/vitamine-d-pourquoi-et-comment-assurer-un-apport-suffisant)
- [Omedit Centre Val de Loire. Protocole de supplémentation en vitamine D en EHPAD. Décembre 2020. (PDF)](http://www.omedit-centre.fr/portail/gallery_files/site/136/2953/5062/10827.pdf)
- [Ameli. Dosage de la vitamine D. Décembre 2020.](https://www.ameli.fr/paris/laboratoire-danalyses-medicales/exercice-liberal/memos/dosage-vitamine)
- [Souberbielle JC et al. La supplémentation en vitamine D en France chez les patients ostéoporotiques ou à risque d'ostéoporose : données récentes et nouvelles pratiques. Revue du Rhumatisme. 2019. (PDF)](http://www.grio.org/documents/page246/la-supplementation-en-vitamine-d-grio-revrhum2019-2.pdf)
- [Esteban 2014-2016 – Chapitre dosages biologiques des vitamines et minéraux : pas de déficit important ou de carence à grande échelle](https://www.santepubliquefrance.fr/les-actualites/2019/esteban-2014-2016-chapitre-dosages-biologiques-des-vitamines-et-mineraux-pas-de-deficit-important-ou-de-carence-a-grande-echelle)
- [Annweiler C. et al. Vitamine D chez l'adulte : mise au point sur le dosage et la supplémentation. Gériatrie et psychologie Neuropsychiatrie du Vieillissement. 2018.](https://www.jle.com/fr/revues/gpn/e-docs/vitamine_d_chez_ladulte_mise_au_point_sur_le_dosage_et_la_supplementation_311580/article.phtml)
- [Briot K. et al. Actualisation 2018 des recommandations françaises du traitement de l'ostéoporose post-ménopausique. Revue du Rhumatisme. 2018.](https://www.sciencedirect.com/science/article/abs/pii/S1169833018300504)
- [Inserm. La vitamine D, une nouvelle piste contre la maladie d'Alzheimer ?. Mai 2017. (PDF)](https://presse.inserm.fr/la-vitamine-d-une-nouvelle-piste-contre-la-maladie-dalzheimer/28364/)
- [HAS. Utilité clinique du dosage de la vitamine D. Octobre 2013.](https://www.has-sante.fr/upload/docs/application/pdf/2013-02/utilite_clinique_du_dosage_de_la_vitamine_d_-_note_de_cadrage.pdf)
- [Société Française de Pédiatrie. La Vitamine D : une vitamine toujours d'actualité chez l'enfant et l'adolescent. Mise au point par le Comité de nutrition de la Société française de pédiatrie. 2012. (PDF)](https://afpa.org/content/uploads/2017/07/Reco_VIT_D_VersionFR_VF.pdf)
- [HAS. Guide du parcours de soins - Maladie rénale chronique de l'adulte. Février 2012. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2012-04/guide_parcours_de_soins_mrc_web.pdf)

### À lire

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
