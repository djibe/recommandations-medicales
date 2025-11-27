+++
id = "0190e8c7-b9f2-74f8-9157-0223e3e0972b"
title = "Maladie de Lyme"
prefix = "la "
description = "Recommandations pour la prise en charge de la borréliose ou maladie de Lyme. Prévention, érythème migrant, examens diagnostiques et traitement par antibiotiques"
synonyms = ["Borréliose de Lyme (BL)"]
auteurs = ["Jean-Baptiste FRON"]
date = "2021-09-30T18:17:39+02:00"
publishdate = "2021-10-02"
lastmod = "2025-07-04"
specialites = ["dermatologie", "infectiologie"]
annees = "2025"
sources = ["HAS", "GPIP", "DGS"]
tags = ["prévention"]
english = ["Lyme disease", "tick bites"]
sctid = "23502006"
icd10 = ["A69.2"]
image = true
imageSrc = "Érythème migrant après piqûre de tique. monkeypuzzle / Foter"
todo = "update 2026"
flowchart = true
chart = true
modele = true
+++

{{%article-summary%}}

- La maladie de Lyme (plutôt borréliose de Lyme) est une infection par la bactérie *Borrelia burgdorferi*, transmise par une piqûre de tique, qui évolue en plusieurs phases en l'absence de traitement
- Zones à risque de tiques infectées: métropole entière (surtout Alsace, Lorraine, Limousin)
- Appliquer les mesures de prévention des piqûres de tique lors des balades en forêt, suivies d'une inspection au retour (voir *Prévention*)
- La prise en charge d'une piqûre de tique nécessite: pince ou tire-tique, auto-surveillance locale pendant 30 jours et [signalement de la piqûre](https://tiquotheque.fr/signalement/public/)
- Recommandations pour la prise en charge d'un érythème migrant: survenue dans les 30 jours de la piqûre, diagnostic clinique, antibiothérapie par doxycycline 200 mg/j pendant 10 jours, auto-surveillance de la disparition dans le mois, noter dans le dossier
- La recherche d'une maladie de Lyme dans sa forme disséminée n'est pas urgente et nécessite la notion de piqûre de tique (ou à défaut d'exposition aux tiques), des signes cliniques compatibles et une sérologie Lyme IgG. En cas de doute, contacter le centre de compétence [annuaire](https://crmvt.fr)
- Toute manifestation neurologique dans les suites d'un érythème migrant non traité ou d'une piqûre de tique avérée doit faire évoquer une neuroborréliose (complication neurologique de la maladie de Lyme)

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Maladie de Lyme
: Infection survenant lors d'une piqûre par une tique infectée par une bactérie de la famille des spirochètes: *Borrelia burgdorferi* sensu lato (voire *Borrelia garinii* ou *Borrelia afzelii*).
: Les autres maladies transmises par les tiques (maladies vectorielles à tiques) sont exceptionnelles.
: En cas de suspicion forte de Lyme disséminé, seuls 15 % ont un diagnostic réel de Lyme (*[Jacquet 2019](https://doi.org/10.1016/j.medmal.2018.06.002)*).  
Diagnostic différentiel: rhumatologique (15-43 %), neurologique (12-19 %), psychiatrique, psychologique (burn-out ++, 13-25 %), hématologique et auto-immun.

La sérologie de Lyme
: Sérologie en 2 temps sur les IgG uniquement: technique *Elisa* puis *Western blot* si positive ou équivoque.  
Elle peut être répétée à 3 semaines si négative en cas de forte suspicion clinique.
: La sérologie ne doit pas être réalisée devant un érythème migrant où la clinique est pathognomonique. Elle doit être réalisée en cas de suspicion de forme disséminée.
: Elle est considérée négative en l'absence d'apparition d'IgG au-delà de 6 semaines d'évolution.
: Des taux élevés d'anticorps de type IgG peuvent persister des années après la guérison clinique. Il n'existe pas de test permettant de différencier une cicatrice sérologique d'une infection active.
: << Les IgM isolément positives sont à interpréter avec prudence >>.

### Abréviations

ACA
: Acrodermatite chronique atrophiante. Forme disséminée tardive de la borréliose de Lyme.

BL
: borréliose de Lyme

CC MVT
: centre de compétences pour les maladies vectorielles à tiques (coordonnées sur le site de l'ARS)

CR MVT
: centre de référence de prise en charge pluridisciplinaire des MVT ([site officiel des 5 centres en France](https://crmvt.fr))

EM
: érythème migrant

GPIP
: Groupe de Pathologie Infectieuse Pédiatrique (de la Société Française de Pédiatrie)

LCS
: liquide cérébrospinal

MVT
: maladies vectorielles à tiques (borréliose de Lyme, méningo-encéphalite à tiques, tularémie, babésiose, anaplasmose granulocytique humaine, certaines rickettsioses et les infections à *Candidatus neoehrlichia mikurensis*)
{.dl-inline}

### Épidémiologie de la maladie de Lyme en France

L'incidence de la maladie de Lyme atteignait 53 cas/100.000 habitants en 2024 (*[Sentinelles](https://www.sentiweb.fr/france/fr/?page=table&maladie=18)*).

{{< figure-chart title="Incidence de la maladie de Lyme en France sur la période 2009-2024. Nombre de cas pour 100.000 habitants. ([Réseau Sentinelles](https://www.sentiweb.fr/france/fr/?page=maladies&mal=18))" >}}

<script>
  const chartOptions1 = {
    series: [{
      name: "Incidence",
      data: [42,42,41,44,55,41,51,84,69,104,76,91,71,51,59,53]
    }],
    xaxis: {
      categories: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      tickAmount: 5
    },
    chart: {
      height: 192,
      type: 'line',
    },
    stroke: { colors: ['#4150f5'], curve: 'smooth', width: 4 },
    title: { text: 'Incidence de la maladie de Lyme en France' },
    yaxis: { min: 0, max: 120 }
  }
</script>

{{% /collapse %}}
{{%collapse "Clinique" %}}

Évolution de la maladie de Lyme en 3 phases: localisée précoce (érythème migrant), disséminée précoce (évolution de moins de 6 mois) et disséminée tardive (après 6 mois). Recrudescence de mars à novembre et maladie plus fréquente après 60 ans.

{{%info%}}
La séropositivité *Borrelia* ne peut suffire à elle seule pour diagnostiquer une infection (nombreux asymptomatiques).

---

La découverte fortuite d'une sérologie de Lyme positive sans signes évocateurs ne doit pas engager d'autres examens.
{{%/info%}}

### Érythème migrant

Antibiothérapie de tout érythème migrant sans aucun examen complémentaire. En cas de doute, consultation de contrôle à 7 jours.
{.alert .alert-info}

L'érythème migrant (de Lipschutz) est présent pour 80% des borrélioses:

- Notion de piqûre locale de tique voire trace de la piqûre (inconstante)
- Survenue dans les **3 à 30 jours**:
  - **Macule rose à rouge, ovalaire**
  - Éclaircissement central inconstant
  - Croissance régulière centrifuge  
    Souvent **> 5 cm** au diagnostic.
  - Non prurigineuse
  - Plusieurs macules érythémateuses possibles  
    Surtout chez l'enfant: érythèmes migrants multiples (EMM).
  - Signes généraux (10-30 %): fatigue, fébricule, arthro-myalgies.
- Signes négatifs
  - Érythème douloureux
  - Ulcération, tâche noire, lésion croûteuse
  - Adénopathie satellite
  - Fièvre avec signes neuroméningés ou autre point d'appel clinique
  - Adresser en infectiologie ou au CC MVT car évoque une autre MVT (rickettsiose, tularémie)

L'érythème migrant guérit en 7 à 13 jours sous traitement antibiotique adapté (6 semaines sans). Remettre en cause le diagnostic si persiste en fin de traitement. [Photos d'érythèmes migrants](https://www.nice.org.uk/guidance/ng95/resources/lyme-disease-rash-images-pdf-4792273597).

> << Une simple rougeur au point de piqûre dans les premiers jours s'accompagnant de démangeaisons et de gonflement correspond à une réaction inflammatoire locale à la piqûre et ne nécessite pas de prise en charge >>. -- *HAS 2022*

### Forme disséminée précoce: Lymphocytome borrélien

Signes et symptômes du lymphocytome borrélien:

- Plaque ou nodule unique infiltré
- Croissance lente
- Couleur variable: **rose-rouge, rouge-brun**
- Asymptomatique ou douleur/prurit légers
- **Localisation spécifique**  
  Lobule oreille enfant, plaque aréolaire ou scrotum de l'adulte ou exceptionnellement visage, tronc ou membre.
- Avis dermatologique pour biopsie cutanée
- Sérologie *Borrelia* positive

### Forme disséminée tardive: Acrodermatite chronique atrophiante (ACA)

- Surtout après 50 ans
- Macule ou plaque d'un segment de membre, extensive et mal limitée
- Couleur variable: rouge sombre ou violacée
- Allodynie (20-60 %)
- Sérologie *Borrelia* positive (98%)

### Autres signes cliniques

> [!INFO]
> La sérologie Lyme est indiquée devant une monoarthrite subaiguë d'une grosse articulation en l'absence de diagnostic différentiel. Rechercher une exposition aux tiques dans les 2 ans.

Autres signes et symptômes de la maladie de Lyme:

- Rhumatologiques (signes associés aux atteintes cutanées de la BL)
  - Forme précoce: **arthralgies** (50 à 70%)
  - Forme disséminée: **monoarthrite du genou** (85%) ou oligoarthrite  
    Quelques semaines à 2 ans après la piqûre, poussées paroxystiques des douleurs articulaires avec intervalles libres.  
    Guérison sous 5 ans même sans antibiothérapie.
  - Sérologie *Borrelia*
  - Avis du CC MVT sans urgence (téléexpertise ou contact [sur le site](https://crmvt.fr))
- Cardiaques (évolution favorable pour 90%)
  - 0,3 à 4 % des cas, forme précoce (délai de 4 jours à 7 mois)
  - Sérologie *Borrelia*
  - Avis cardiologique en cas de symptômes cardiaques
  - **Blocs atrio-ventriculaires** surtout  
    Sérologie si idiopathique avec exposition aux tiques dans les 6 mois.
  - Péricardite  
    Sérologie en cas d'étiologie indéterminée.

### Neuroborréliose de Lyme

La neuroborréliose est présente dans 6,5 à 15 % des borrélioses de Lyme. Elle survient **durant la forme disséminée précoce** (moins de 6 mois pour +90% des cas, délai de 15 jours à 1 an).

> [!INFO]
> Toute manifestation neurologique dans les suites d'un érythème migrant non traité ou d'une piqûre de tique avérée doit faire évoquer une neuroborréliose: réaliser une sérologie de Lyme et adresser au centre de compétence des MVT ([annuaire](https://crmvt.fr)) pour investigations et ponction lombaire.

Atteintes neurologiques évocatrices:

- Méningoradiculites  
  - Radiculalgies atypiques, rebelles pouvant dépasser le territoire
  - Atteinte d'un membre, tronc ou céphalique
  - Sur la localisation d'une piqûre de tique
  - Paralysie faciale fréquemment associée avec céphalées
  - Antibiothérapie très efficace en quelques jours sur les douleurs
- **[Paralysie faciale]({{% relref "paralysie-faciale-idiopathique.md" %}})** (36% des neuroborrélioses)
  - Uni ou bilatérale (à bascule très évocatrice)
  - Surtout chez l'enfant
  - Indications à la sérologie *Borrelia*: voir Examens complémentaires
- Beaucoup plus rares: [méningites]({{% relref "meningite.md" %}}), myélites aiguës et encéphalites

> Évoquer une méningoradiculite de Lyme devant une atteinte radiculaire douloureuse, insomniante, et résistante aux antalgiques habituels. Rechercher une piqûre de tique dans l'année.

#### Pour en savoir plus: critères diagnostiques européens de la maladie de Lyme

1. Symptômes compatibles avec une neuroborréliose
2. Pléiocytose du liquide cérébro-spinal (LCS)
3. Anticorps anti-Borrelia dans le LCS

Diagnostic de maladie de Lyme certain si 3 critères - possible si 2 - exclu si ≤ 1.

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

> [!INFO]
> Toute recherche de maladie de Lyme nécessite la notion de piqûre de tique ou à défaut, d'exposition aux tiques.

### Sérologie de Lyme

Indications à la sérologie IgG *Borrelia burgdorferi*:

- **Atteintes dermatologiques** évocatrices
  - Lymphocytome borrélien
  - Acrodermatite chronique atrophiante
- **Neuroborréliose** (toute suspicion)
  - Radiculalgie insomniante, résistante avec exposition aux tiques dans l'année
  - PFP ci-dessous
- **Paralysie faciale périphérique** (PFP) si:  
  Solliciter le CC MVT en cas de doute.
  - Piqûre ou exposition aux tiques dans les 3 mois
  - ou antécédent de BL dans les 3 mois (érythème migrant ++)
  - ou PFP bilatérale
  - ou radiculalgies, céphalées, ou signes généraux associés (arthralgies, myalgies, asthénie)
  - ou survenue au printemps, été ou à l'automne
- **Arthrite subaiguë** non fébrile de grosse articulation (genou ++): en l'absence de diagnostic différentiel  
  Rechercher une exposition aux tiques dans les 2 ans.
- **Bloc atrio-ventriculaire** (BAV 1, 2 ou 3): si idiopathique avec exposition aux tiques dans les 6 mois

Les IgG apparaissent 6 semaines après la piqûre de tique.

Les anticorps ne protègent pas contre une nouvelle infection à *Borrelia burgdorferi*.

{{% /collapse %}}
{{%collapse "Prévention de la maladie de Lyme" %}}

[Ministère de la Santé: Maladie de Lyme et prévention des piqûres de tiques (PDF)](https://sante.gouv.fr/IMG/pdf/maladie_de_lyme_depliant_gp.pdf) et [Santé Publique France. Prévention de la borréliose de Lyme (PDF)](https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-a-transmission-vectorielle/borreliose-de-lyme/documents/depliant-flyer/maladie-de-lyme-et-prevention-des-piqures-de-tiques)

Les tiques sont cachées dans les hautes herbes, buissons et branches basses à toutes les altitudes et aussi dans les jardins (25% des piqûres).

Mesures de prévention de la maladie de Lyme:

- En forêt, marcher sur les chemins
- Vêtements longs couvrants
  - Pantalon, inséré dans les chaussettes (voire guêtres), chemise à manche longue serrant les poignets
  - De couleur claire pour faciliter le repérage
  - Chaussures fermées
  - Chapeau
- Répulsif cutané
  - En complément uniquement
  - Contre-indiqués si grossesse ou avant 2 ans
  - DEET cutané ou IR3535
  - Appliquer sur les zones découvertes, respecter les consignes d'usage
  - Ne pas appliquer en même temps que la crème solaire
- Inspection minutieuse
  - À chaque retour de zone d'exposition
  - Zones chaudes et humides: cuir chevelu, oreilles, nombril, organes génitaux
  - Répéter la recherche le lendemain
- Vaccination contre l'encéphalite à tiques  
  Avant séjour en zone rurale ou boisée en zone d'endémie.
- Aménagement des jardins  
  Couper l'herbe courte, éviter les tas de bois, traitement des animaux de compagnie.

Inefficaces: huiles essentielles (lavande, citronnelle), bracelets insecticides.

### Zones d'endémie des tiques

Les tiques sont dispersées sur la Métropole entière (surtout Alsace, Lorraine, Limousin), moins fréquentes en Méditerranée.

{{% /collapse %}}
{{%collapse "Extraction d'une tique" %}}

Le risque de borréliose de Lyme est faible après une piqûre de tique (1 à 4%, même en zone de forte endémie avec fixation prolongée de la tique).

### Prise en charge d'une morsure de tique

Prise en charge recommandée après une morsure de tique:

- L'extraire le plus rapidement possible
- Extraction mécanique avec un crochet à tique (tire-tique) ou pince fine. Avis du médecin en cas de problème.
- Ne pas utiliser de substances  
  Éther, huile, vernis ...
- Après le retrait, **désinfection** locale (antiseptique ou eau et savon)
- Lavage des mains au savon
- Photographie de la tique
- Noter la date et le lieu de la piqûre
- [Signaler la piqûre de tique en ligne](https://tiquotheque.fr/signalement/public/)
- Surveiller la zone pendant 4 semaines  
  Avis médical en cas d'apparition d'un érythème migrant (EM) qui signe une borréliose de Lyme.

En cas d'extraction incomplète: désinfection seule et surveillance régulière du site de la piqûre (*HCSP 2023*).

> [!WARNING]
> Pas d'antibiothérapie ou d'examens systématiques après extraction de tique (à discuter en pédiatrie si piqûres multiples avec succion > 48-72 heures. (*GPIP 2023*)

{{% /collapse %}}
{{%collapse "Traitement de la maladie de Lyme" %}}

Mesures générales de prise en charge de la maladie de Lyme:

- Antibiothérapie curative de toute forme de Borréliose de Lyme
- **Forestier:** maladie professionnelle
  - {{%class%}}[Tableau 19](https://www.inrs.fr/publications/bdd/mp/tableau.html?refINRS=RG%2019) du régime général et [5bis](https://www.inrs.fr/publications/bdd/mp/tableau.html?refINRS=RA%205%20BIS) du régime agricole.{{%/class%}}
  - Critères: manifestations cliniques et confirmée par sérologies

**NB.** Le traitement de la maladie de Lyme n'est pas une urgence médicale.

Le contrôle de la guérison d'une maladie de Lyme est clinique. Des taux élevés d'anticorps peuvent persister des années après la guérison.
{.alert .alert-info}

### Traitement de l'érythème migrant

L'antibiothérapie de référence de l'érythème migrant est la **doxycycline** (et l'amoxicilline en-dessous de 20 kg).

Recommandations pour la prise en charge de l'érythème migrans après piqûre de tique:

- Auto-surveillance de la lésion pendant 1 et consultation si persistance  
  Persistance à 1 mois: observance de l'antibiotique, étude d'un diagnostic différentiel, **avis dermatologique**.
- Photos avant et évolution sous traitement  

{{%info%}}

#### Choix de l'antibiotique pour un érythème migrant

Antibiothérapie de l'érythème migrant (par niveau d'intention):

1. ==**[Doxycycline](https://bdpm.ansm.sante.fr/medicament/67164569/extrait#tab-rcp) 100 mg x 2/j pendant 10 jours**== (14 si EM multiples)  
  Même pendant la grossesse ou l'allaitement ([CRAT](https://www.lecrat.fr/6396/)).
2. Amoxicilline 50 mg/kg/j (max 4 g/j) toutes les 8 heures pendant 14 jours
3. Azithromycine 1g à J1 puis 500 mg x 1/j de J2 à J5 pendant 5 jours

{{%/info%}}

Antibiothérapie de l'érythème migrant de l'enfant:

1. Enfant ≥ 20 kg: [doxycycline 4 mg/kg/j](https://bdpm.ansm.sante.fr/medicament/63836158/extrait#tab-rcp) (max 100 mg/prise et 200 mg/j) en 2 prises pendant 10 jours (14 si EM multiples)
2. Amoxicilline 50 mg/kg/j (max 4 g/j) toutes les 8 heures pendant 14 jours
3. Azithromycine 20 mg/kg x 1/j (max 500 mg/j) pendant 5 jours

### Traitement du lymphocytome borrélien

Prise en charge du lymphocytome borrélien avec des posologies identiques mais l'antibiothérapie dure **21 jours**.

La disparition des lésions cutanées prend 2 à 4 mois.

### Traitement des formes disséminées (neurologiques, rhumatologiques ...)

La prise en charge des formes disséminées de la borréliose de Lyme dépend exclusivement des centres de compétence ([annuaire](https://crmvt.fr)) en lien avec le spécialiste d'organe concerné (cardiologue, rhumatologue, neurologue).

{{% /collapse %}}
{{%collapse "Prise en charge de l'érythème migrant" "show" %}}

{{< mermaid title="Prise en charge de l'érythème migrant par le médecin généraliste. Dr JB Fron d'après HAS 2025" >}}
graph TB
  suspicion["<b>Piqûre de tique</b><br>—<br>- Extraction au tire-tique<br>- Inspection du reste du corps<br>- Auto-surveillance 30 jours"] -- "Sous 3 à 30 jours" --> érythème("<b>Érythème migrant</b><br>—<br>Large macule rosée:<br>- Antibiothérapie<br>doxycycline 100 mg x 2/j 10j<br>- Photos<br>- Signalement de tique<br>- Mesures de prévention<br>- Forestier: déclaration MP") -- "Autosurveillance<br>30 jours" --> contrôle(Consultation en cas<br>de nouveaux symptômes<br>ou persistance de signes fonctionnels) --> CC("Avis du CC MVT<br>sans urgence<br>(mail, téléexpertise)")
    suspicion -- Surveillance normale --> rien("Fin de la surveillance")
  style suspicion stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

{{< vimeo 314795586 >}}

{{< card-link-external title="Vrai et faux Lyme en 2022, comment faire ?" subtitle="par La Minute Rhumato" url="https://podcastaddict.com/episode/https%3A%2F%2Ftrack.podcastics.com%2F3584%2F138491.mp3&podcastId=3741301" image="podcast" >}}

- {{< references/voyageur >}}
- [HAS. Borréliose de Lyme et autres maladies vectorielles à tiques (MVT). 2025.](https://www.has-sante.fr/jcms/c_2857558/fr/borreliose-de-lyme-et-autres-maladies-vectorielles-a-tiques-mvt)
- [SPILF. Info-antibio N°103. Février 2025. (PDF)](https://www.infectiologie.com/UserFiles/File/spilf/atb/info-antibio/info-antibio-2025-02-lyme.pdf)
- [Gillet Y, et al; GPIP. Antimicrobial treatment of skin and soft tissue infections. Infect Dis Now. 2023.](https://www.sciencedirect.com/science/article/pii/S2666991923001495)
- [Cohen R, et al; GPIP. Antimicrobial treatment of infrequent bacterial species. Infect Dis Now. 2023.](https://www.sciencedirect.com/science/article/pii/S2666991923001574)
- [CMIT. Zoonoses. Item 173. ECN.Pilly. 2023. (PDF)](https://www.infectiologie.com/UserFiles/File/pilly-etudiant/items-edition-2023/pilly-2023-item-173.pdf)
- Prescrire Redaction. Érythème migrant après piqûre de tique. Premiers Choix Prescrire. Rev Prescrire. 2023.
- [HAS. Guide du parcours de soins de patients présentant une suspicion de borréliose de Lyme. 2022.](https://www.has-sante.fr/jcms/p_3323862/fr/guide-du-parcours-de-soins-de-patients-presentant-une-suspicion-de-borreliose-de-lyme)
- Prescrire Redaction. Borréliose de Lyme. Reconnaître des signes de dissémination. Rev Prescrire. 2022.
- [Anses. En forêt ou dans le jardin, attention aux tiques. 2022.](https://www.anses.fr/fr/content/en-for%C3%AAt-ou-dans-le-jardin-attention-aux-tiques)
- [Gocko X, et al. Lyme borreliosis and other tick-borne diseases. Guidelines from the French scientific societies. Médecine et Maladies Infectieuses. 2019.](https://www.sciencedirect.com/science/article/pii/S0399077X19306201)
- [HAS. Borréliose de Lyme et autres maladies vectorielles à tiques. Recommandations de bonne pratique. 2018.](https://www.has-sante.fr/jcms/c_2857558/fr/borreliose-de-lyme-et-autres-maladies-vectorielles-a-tiques)
- [Quinet B; SFP. Conduite à tenir devant une piqûre de tique chez l'enfant. Pas à Pas en Pédiatrie. 2017.](https://pap-pediatrie.fr/immuno-infectio-parasito/conduite-tenir-devant-une-piqure-de-tique-chez-lenfant)
- [Société Française de Pédiatrie. Guide de prescription d'antibiotique en pédiatrie. Archives de Pédiatrie. 2016. (PDF)](https://www.sfmu.org/upload/consensus/arcped_gpip_15_juin_new_couv_bs.pdf)
- [Santé Publique France. Borréliose de Lyme.](https://www.santepubliquefrance.fr/maladies-et-traumatismes/maladies-a-transmission-vectorielle/borreliose-de-lyme)
- [Centres de Référence des Maladies Vectorielles liées aux Tiques (CRMVT)](https://crmvt.fr)

### Bibliographie pour en savoir plus

- [Lantos PM, et al. Clinical Practice Guidelines by the Infectious Diseases Society of America, American Academy of Neurology, and American College of Rheumatology: 2020 Guidelines for the Prevention, Diagnosis, and Treatment of Lyme Disease. Neurology. 2021.](https://pubmed.ncbi.nlm.nih.gov/33257476/)
- [Mygland Å, et al. EFNS guidelines on the diagnosis and management of European Lyme neuroborreliosis. European Journal of Neurology. 2010.](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1468-1331.2009.02862.x)

{{%/sources%}}
{{% modele %}}

### Piqûre de tique

Extraction, [signaler la piqûre](https://tiquotheque.fr/signalement/public/), auto-surveillance 1 mois.

**Érythème migrant**

doxycycline 100 mg x 2/j pendant 10 jours

{{% /modele %}}
