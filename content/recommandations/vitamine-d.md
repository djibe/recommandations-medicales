+++
title = "Vitamine D"
prefix = "la "
shortname = "vit-D"
synonyms = ["Cholécalciferol"]
auteurs = ["Jean-Baptiste FRON"]
date = 2020-04-15T00:28:29+02:00
publishdate = 2020-04-15
lastmod = 2021-12-09
specialites = ["endocrinologie", "pediatrie"]
annees = "2019"
sources = ["HAS", "SFP", "SFR"]
tags = ["depistage", "vitamine d", "chute", "nourrisson", "enfant", "adolescent"]
anglais = ["Vitamin D"]
image = true
imageSrc = "Illustration de la vitamine D par pch.vector / Freepik"
sctid = "30178006"
flowchart = true
draft = false
todo = "graph correction, relecture protocole correction"
+++

Voir aussi: {{< modal-btn modal-calcium-cible >}}cibles calciques selon l'âge{{< /modal-btn >}}, {{< modal-btn modal-calcium >}}aliments riches en calcium{{< /modal-btn >}} et [ostéoporose]({{< relref "osteoporose.md" >}}).

{{%collapse "Définitions" %}}

Vitamine D
: La vitamine D participe à la régulation du métabolisme phosphocalcique et prévient: **rachitisme, ostéomalacie, douleurs musculaires diffuses**.  
L'unité internationale est le **nmol/L**.
: **Bénéfices de la supplémentation**  
Réduit les fractures non vertébrales des +65 ans, réduit les chutes des +70 ans quand les taux sériques sont supérieurs à 30 ng/mL.
: Selon l'Inserm, une carence en vitamine D serait fortement liée au développement de la maladie d'Alzheimer. D'autant plus que le sujet est carencé en caroténoïdes et acides gras polyinsaturés (*[Féart C., Samieri C. 2017](https://presse.inserm.fr/la-vitamine-d-une-nouvelle-piste-contre-la-maladie-dalzheimer/28364/)*).

Carence en vitamine D de l'adulte et de l'enfant
: Taux sérique de vitamine D < 30 nmol/L.  
Risque élevé de *rachitisme*.

Déficit en vitamine D de l'adulte et de l'enfant
: 30 < **taux sérique** < 50 nmol/L.

Seuil de toxicité de la vitamine D
: Taux sérique > 375 nmol/L.  
Ne pas supplémenter au-delà 150 nmol/L.

{{%info%}}À tous les âges, des apports quotidiens de 1000 UI/j sont recommandés{{%/info%}}

### Épidémiologie

- **Déficit en vitamine D**  
75% des adultes, 70% des enfants.
- **Carence en vitamine D**  
7% des adultes, 13% des adolescents, 4% des enfants.

> Santé Publique France. Étude Esteban.

### Abréviations

**25OHD:** cholécalciférol  
**IRC:** insuffisance rénale chronique  
**UI:** unités internationales

{{%/collapse%}}
{{%collapse "Conversion d'unités de la vitamine D" %}}

Convertir dans les 2 sens: nmol/L (unités internationales) et ng/mL.

<div class="form-group">
  <label for="nmolInput">nmol/L</label>
  <input type="number" class="form-alternative" id="nmolInput" value="50" min="1" max="400" oninput="ngInput.value = Math.round(this.value * 0.4)">
  <label for="ngInput" class="ml-5">ng/mL</label>
  <input type="number" style="width:68px" class="form-alternative" id="ngInput" value="20" oninput="nmolInput.value = Math.round(this.value * 2.496)">
</div>

{{%/collapse%}}
{{%collapse "Patients à risque" %}}

### Personnes à risque de complications par carence en vitamine D

- Iatrogène  
  Corticoïdes au long cours, anti-aromatases, analogues de la GnRH.
- Maladies endocriniennes  
  Hyperparathyroïdie.
- Malabsorption  
  [Maladie cœliaque]({{< relref "maladie-coeliaque.md" >}}), mucoviscidose, chirurgie bariatrique.
- [Insuffisance rénale chronique]({{< relref "insuffisance-renale-chronique.md" >}})
- Sujets âgés à {{< modal-btn modal-risque-chute >}}risque de chute{{< /modal-btn >}}

### 3 objectifs pour les personnes à risque

1. Taux ≥ 75 nmol/L avec dosage initial
1. Protocole de correction rapide
1. Apports calciques ≥ 1 g/j

{{%/collapse%}}
{{%collapse "Apports cibles en vitamine D selon l'âge" %}}

La supplémentation en vitamine D3 peut être instaurée et suivie sans dosage de la vitamine D sauf chez les sujets à risque mentionnés plus haut (voir *Patients à risque*).  
Éviter une supplémentation forte trop espacée (voir *Protocole d'administration* plus bas).

{{< table title="Recommandations d'apports en vitamine D en 2022 selon le profil du patient" >}}
| Population                         | Apports (UI/j) ou cibles (25OHD) recommandés |
|------------------------------------|----------------------------------------------|
| Nourrisson en allaitement maternel | Supplémentation quotidienne 1000-1200 UI/j<br>ZymaD® buvable en 3-4 gouttes par jour (300 UI/goutte) |
| Nourrisson en allaitement artificiel<br>Prématuré | 600-800 UI/j soit ZymaD® 2-3 gouttes/j<br>800-1000 UI/j soit 3 gouttes/j |
| 18 mois à 5 ans                    | 80 à 100.000 UI en novembre et février |
| 5 ans à 10 ans                     | Études en cours                        |
| 10 à 18 ans                        | 80 à 100.000 UI en novembre et février<br>ou 200.000 UI 1 fois l'hiver (observance) |
| Grossesse                          | 80 à 100.000 UI au début du 7<sup>e</sup> mois de grossesse |
| Adulte                             | &ge; 50 nmol/L |
| Adulte &ge; 65 ans                 | &ge; 75 nmol/L |
| Adulte à risque, dépendant, chutes | &ge; 75 nmol/L |
| Résident en EHPAD                  | &ge; 75 nmol/L et cible calcique 1200 mg/j |
| Ostéoporose, biphosphonates        | &ge; 75 nmol/L |
{{< /table >}}

{{% /collapse %}}
{{%collapse "Quand doser la vitamine D ?" %}}

1. Suspicion de rachitisme
1. Suspicion d'ostéomalacie (fatigue musculaire, douleurs osseuses)
1. À 3 mois d'une transplantation rénale
1. Avant et après une chirurgie bariatrique
1. Personne âgée avec chutes répétées.  
Noter sur l'ordonnance << Évaluation et prise en charge des personnes âgées sujettes aux chutes répétées >>
1. Traitement préconisant une mesure de la vitamine D

et aussi

- Hospitalisation pour exacerbation de [BPCO]({{< relref "bronchopneumopathie-chronique-obstructive.md" >}}) (*GOLD*)
- Enfant en allaitement maternel sans supplémentation pendant des mois (*SFD*)
- Enfants à peau pigmentée sans supplémentation avec arcature des membres inférieurs (*SFD*)
- Bilan initial de [maladie rénale chronique]({{< relref "insuffisance-renale-chronique.md" >}}) (*HAS 02/2012*)
- Probablement pour tous les épileptiques et diabétiques

En dehors des 6 indications (+ suppléments), préciser sur l'ordonnance la raison.  
En dosage de complaisance, préciser << Non remboursable >> sur la prescription (9,45€, code B35).  
{{%class%}}92 millions d'euros de dosages de vitamine D en 2011{{%/class %}}

{{% /collapse %}}
{{%collapse "Protocoles d'administration de la vitamine D" %}}

### Protocole de correction de la carence en vitamine D

Posologie selon le résultat du dosage de vitamine D:

- Taux sériques de 50 à 75 nmol/L (30 ng/mL)  
  50.000 UI/semaine pendant 4 semaines.
- Taux sériques < 50 nmol/L (20 ng/mL)  
  50.000 UI/semaine pendant 8 semaines.

Puis enchaîne sur le protocole d'entretien.  
Utiliser des ampoules de 100.000 UI en cas de nécessité d'une 2<sup>e</sup> correction.

> Protocole de correction de carence en vitamine D selon *Souberbielle 2019*

### Protocole d'entretien après carence en vitamine D

#### Entretien mensuel pendant 3 à 6 mois

{{%info%}}
50.000 UI x 1/mois pendant 3 à 6 mois

Nouveau dosage 1 semaine après la fin du traitement.
{{%/info%}}

#### Dosage et adaptation du protocole d'entretien

Posologie selon le nouveau résultat du dosage de vitamine D après 3 à 6 mois d'entretien:

- Dosage < 75 nmol/L (30 ng/mL)  
  - 80 à 100.000 UI par mois
  - ou 50.000 UI/14j
  - pendant 3 à 6 mois
- Dosage > 150 nmol/L (60 ng/mL)  
Espacer l'entretien à 50.000 UI tous les 2 mois.
- Entre 75 et 150  
Conserver le rythme d'entretien.

> Protocole d'entretien après carence en vitamine D selon *Souberbielle 2019*

Intensification si:

- Sujet à peau très foncée
- Absence d'exposition estivale
- Traitement à risque: rifampicine, phénobarbital, phénytoïne
- Obésité, régime carencé

{{% /collapse %}}
{{%collapse "Spécialités de cholécalciférol disponibles" %}}

### Spécialités de vitamine D par galénique

<ul class="list-group" style="max-width: 480px">
  {{< list-item title="Ampoule" subtitle="Cholécalciférol 200, 100, 80 ou 50.000 UI (Uvedose® ou autre)" >}}
  {{< list-item title="Capsule molle" subtitle="Kipos® 100.000 UI" >}}
  {{< list-item title="Gouttes" subtitle="Adrigyl® 333 UI/goutte, ZymaD® 300 UI/goutte" >}}
</ul>

{{% /collapse %}}
{{%collapse "Conduite à tenir pour la supplémentation en vitamine D" "show" %}}

{{< mermaid title="Cibles d'apports en vitamine D (schéma simplifié). Dr JB Fron d'après Souberbielle 2019" >}}
graph TB
  apports["Objectifs d'apports<br>en vitamine D"]
  style apports stroke:#4150f5, stroke-width:1px
    apports --> ns(<b>Nourrisson</b><br>2 à 4 gtte/j)
    apports --> enfant(<b>18 mois à<br>18 ans</b><br>80-100.000 UI<br> 2x l'hiver)
    apports --> adulte(<b>Adulte &gt; 50 ans</b><br>25OHD &gt; 50 nmol/L)
      adulte --> 65(<b>&gt; 65 ans</b><br>25OHD &gt; 75 nmol/L)
    apports --> risque(<b>Patient à risque</b><br>- Risque de chutes<br>- Corticoïdes, aromatases...<br>- Hyperparathyroïdie<br>- Malabsorption<br>- Insuffisance rénale) --> intensif("- Dosage initial<br>- 25OHD &gt; 75 nmol/L<br>- Correction rapide<br>- Apports calciques &gt; 1 g/j")
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [GOLD. Global strategy for the diagnosis, management and prevention of Chronic obstructive pulmonary disease. 2020.](https://goldcopd.org/2021-gold-reports/)
- [Omedit Centre Val de Loire. Protocole de supplémentation en vitamine D en EHPAD. Décembre 2020. (PDF)](http://www.omedit-centre.fr/portail/gallery_files/site/136/2953/5062/10827.pdf)
- [Ameli. Dosage de la vitamine D. 14 Novembre 2019.](https://www.ameli.fr/paris/laboratoire-danalyses-medicales/exercice-liberal/memos/dosage-vitamine)
- [Souberbielle J-C et al. La supplémentation en vitamine D en France chez les patients ostéoporotiques ou à risque d'ostéoporose : données récentes et nouvelles pratiques. Revue du Rhumatisme. 03/05/2019. (PDF)](http://www.grio.org/documents/page246/la-supplementation-en-vitamine-d-grio-revrhum2019-2.pdf)
- [Esteban 2014-2016 – Chapitre dosages biologiques des vitamines et minéraux : pas de déficit important ou de carence à grande échelle](https://www.santepubliquefrance.fr/les-actualites/2019/esteban-2014-2016-chapitre-dosages-biologiques-des-vitamines-et-mineraux-pas-de-deficit-important-ou-de-carence-a-grande-echelle)
- [Annweiler C et al. Vitamine D chez l'adulte : mise au point sur le dosage et la supplémentation. Gériatrie et psychologie Neuropsychiatrie du Vieillissement. Vol 16, n°1, mars 2018](https://www.jle.com/fr/revues/gpn/e-docs/vitamine_d_chez_ladulte_mise_au_point_sur_le_dosage_et_la_supplementation_311580/article.phtml)
- [Briot K et al. Actualisation 2018 des recommandations françaises du traitement de l'ostéoporose post-ménopausique. Revue du Rhumatisme. Volume 85. Issue 5. 2018.](https://www.sciencedirect.com/science/article/abs/pii/S1169833018300504)
- [Inserm. La vitamine D, une nouvelle piste contre la maladie d'Alzheimer ?. Mai 2017. (PDF)](https://presse.inserm.fr/la-vitamine-d-une-nouvelle-piste-contre-la-maladie-dalzheimer/28364/)
- [HAS. Utilité clinique du dosage de la vitamine D. Octobre 2013.](https://www.has-sante.fr/upload/docs/application/pdf/2013-02/utilite_clinique_du_dosage_de_la_vitamine_d_-_note_de_cadrage.pdf)
- [Société Française de Pédiatrie. La Vitamine D : une vitamine toujours d'actualité chez l'enfant et l'adolescent. Mise au point par le Comité de nutrition de la Société française de pédiatrie. 2012. (PDF)](https://afpa.org/content/uploads/2017/07/Reco_VIT_D_VersionFR_VF.pdf)
- [HAS. Guide du parcours de soins - Maladie rénale chronique de l'adulte. Février 2012. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2012-04/guide_parcours_de_soins_mrc_web.pdf)

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
