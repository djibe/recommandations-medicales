+++
id = "0190e8bf-1807-73cc-a0fa-033af0b58bc1"
title = "Contraception"
prefix = "la "
description = "Recommandations contraception avec tous les contraceptifs disponibles et leurs contre-indications (phlébite), coter les consultations contraception gratuites..."
longHtml = true
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-09-19T20:09:50+02:00"
publishdate = "2021-09-21"
lastmod = "2025-04-06"
specialites = ["gynécologie-obstétrique", "thérapeutique", "urologie"]
annees = "2019"
sources = ["CNGOF", "HAS"]
tags = ["contraception", "grossesse", "MVTE"]
english = ["Contraception"]
sctid = "13197004"
icd10 = ["Z30"]
atc = "G03A"
image = true
imageSrc = "La contraception. stories / Freepik"
chart = true
todo = "rankok, oubli https://questionsexualite.fr/choisir-sa-contraception/ma-contraception-et-moi/que-faire-en-cas-d-oubli-de-pilule, modal DIU, nb grossesses efficacité, ONU contraceptions pays, critères reconsult DIU, graph risque thromboembo, macroprogestatifs à dose antigonadotrope, 360medics, inducteur enz p9, cat vmts et diarrhées p9, contraception définitive https://ansm.sante.fr/uploads/2024/02/13/20240212-epi-phare-rapport-vasectomie.pdf"
flowchart = true
+++

{{%article-summary%}}

- Consultation annuelle gratuite pour la contraception avant 26 ans (cotation G Exo 3)  
  Coter la première consultation contraception avant 26 ans: CCP (46€ avec tiers payant AMO)
- Seul le préservatif est efficace contre les [IST](/tags/ist/) (partiellement contre les [HPV]({{% relref "cancer-col-uterus.md" %}}), gratuit sans ordonnance en pharmacie pour les -26 ans)
- Aide au choix de la contraception: [QuestionSexualité - Choisir sa contraception](https://questionsexualite.fr/choisir-sa-contraception) et [comparatif des contraceptions](https://questionsexualite.fr/choisir-sa-contraception/ma-contraception-et-moi/tableau-comparatif-pour-vous-guider-dans-votre-choix-de-contraception), [Annuaire des centres de santé sexuelle](https://ivg.gouv.fr/les-centres-de-sante-sexuelle.html)
- Contraceptions très efficaces de première intention: contraception œstroprogestative, stérilet, implant
- Démarrer une contraception hormonale: débuter le *1er jour des règles*  
  ou démarrage à tout moment du cycle: vérifier l'absence de grossesse, préservatif 7 jours, risque de métrorragies pendant la 1^re^ plaquette.
- Informer sur la [contraception d'urgence]({{% relref "contraception-urgence.md" %}}), savoir [gérer un oubli de pilule](https://www.oubli.formagyn.fr), et informer sur la surveillance des troubles de l'humeur (dépression)
- Pas d'interaction DIU et anti-inflammatoires AINS

Les contraceptions définitives ne sont pas encore traitées.

Chapitres lié: [J'ai oublié ma pilule]({{% relref "jai-oublie-ma-pilule.md" %}}), [acné]({{% relref "acne.md" %}}), [IVG]({{% relref "interruption-volontaire-grossesse.md" %}}), [ménopause]({{% relref "menopause.md" %}})

{{%/article-summary%}}
{{%collapse "Définition" %}}

Contraception
: Ensemble des moyens visant à éviter une grossesse.
: Elle peut être COP (contraception œstroprogestative), progestative, par dispositif intra-utérin, par mesures barrières ou naturelles.

Le défaut d'observance est l'une des causes principales des grossesses non planifiées.

### Évolution de la fécondité des françaises

{{< figure-chart title="Évolution de la fécondité en France métropolitaine de 1950 à nos jours. Dr JB Fron d’après [Insee 2024](https://www.insee.fr/fr/statistiques/7746164?sommaire=7746197). Échelle de temps non linéaire.<br><b>Légende:</b> Indicateur conjoncturel de fécondité (ICF), plus communément appelé nombre d’enfants par femme" >}}
<script>
const chartOptions1 = {
  series: [{
    name: 'ICF',
    data: [2.947, 2.74, 2.48, 1.945, 1.778, 1.874, 2.016, 1.782, 1.639]
  }],
  chart: { type: 'line', height: 240 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5'], curve: 'smooth', width: 3 },
  title: { text: 'Évolution de la fécondité en France métropolitaine' },
  xaxis: { categories: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2023] },
  yaxis: [
    {
      title: { text: 'Enfants par femme' },
      decimalsInFloat: 2,
      min: 1,
    }
  ]
}
</script>

### Abréviations

CNGOF
: Collège National des Gynécologues et Obstétriciens Français

COC
: contraception orale combinée (ou œstroprogestative. COP utilisée par le *CNGOF*)

COP
: contraception œstroprogestative (abréviation utilisée par le *CNGOF*)

DIU
: dispositif intra-utérin (ou stérilet)

DMPA
: produits contraceptifs injectables à base d'acétate de médroxyprogestérone dépôt

EE
: éthinyl-estradiol

EP
: [embolie pulmonaire]({{% relref "embolie-pulmonaire.md" %}})

FRCV
: facteur de risque cardiovasculaire

GEU
: grossesse extra-utérine

LNG
: lévonorgestrel

MVTE
: [maladie veineuse thromboembolique](/tags/mvte/)

TVP
: [thrombose veineuse profonde]({{% relref "thrombose-veineuse-profonde.md" %}})
{.dl-inline}

{{% /collapse %}}
{{%collapse "Contre-indications aux oestroprogestatifs et progestatifs" %}}

Les œstroprogestatifs augmentent le risque de [thromboembolie veineuse](/tags/mvte/) d'un facteur 3 à 6 (plus important la 1^re^ année). Seules les COP contenant ≥ 50 µg d'EE sont associées au risque d'accident artériel, sauf facteur de risque cardiovasculaire associé (dose-dépendant avec tabac ≥ 15 cigarettes quotidiennes).

{{%info%}}

### Contre-indications formelles aux œstrogènes

- Grossesse (*[CRAT](https://www.lecrat.fr/6225/)*)
- Allaitement: les 6 premières semaines (*[CRAT](https://www.lecrat.fr/6211/)*)
- Antécédent personnel de thrombose veineuse superficielle selon *SFMV 2019*
- Antécédent familial au 1^er^ degré
  - [Infarctus du myocarde]({{% relref "syndrome-coronarien-aigu.md" %}}) ou AVC chez homme -55 ans ou femme -65 ans
  - MVTE (thrombose veineuse profonde, embolie pulmonaire) avant 50 ans  
    Ou nombre élevé d'apparentés quel que soit le degré.
- [Hypertension artérielle]({{% relref "hypertension-arterielle.md" %}})
- Dyslipidémie non contrôlée
- [Diabète type 1]({{% relref "diabete-type-1.md" %}}) depuis +20 ans ou compliqué
- [Migraine avec aura]({{% relref "migraine.md" %}})  
  (Pourrait être considérée selon l'*ESC 2021*)
- Migraine de novo ou aggravation des migraines sous œstroprogestatifs
- Thrombophilie
- {{< modal-btn modal-rcv >}}Risque cardiovasculaire élevé{{< /modal-btn >}}
- Antécédent personnel de [cancer du sein]({{% relref "cancer-sein.md" %}})  
  Contre-indication à toute contraception hormonale.
- Antécédent personnel de tumeur ovarienne de la granusola adulte avec traitement conservateur
- Toute contraception hormonale est déconseillée après adénocarcinome séreux ou endométrioïde de bas grade [de l'ovaire]({{% relref "cancer-ovaire.md" %}})

Privilégier une contraception non hormonale après traitement d'un [carcinome hépatocellulaire]({{% relref "carcinome-hepatocellulaire.md" %}}) (pour la fonction hépatique).

### Œstrogènes possibles sous réserve

Possibles seulement si 1 seul facteur de risque cardiovasculaire isolé parmi:

- Âge ≥ 35 ans
- Surpoids, [obésité]({{% relref "obesite-adulte.md" %}})
- [Tabac > 15 cig/j]({{% relref "arret-tabac.md" %}})
- Dyslipidémie contrôlée
- [Diabète type 2]({{% relref "diabete-type-2.md" %}})
- [Migraine sans aura]({{% relref "migraine.md" %}})

> -- *CNGOF 2018 et SFEMC 2021*
{{%/info%}}

La contraception *progestative seule* (pilule, implant ou DIU) ne modifie pas les risques veineux et artériels (sauf acétate de médroxyprogestérone intramusculaire). Elle est recommandée en cas de contre-indication figurant ci-dessus.

### Contre-indications aux progestatifs

- MVTE en cours
- Saignements génitaux inexpliqués
- Cancer du sein ou de l'utérus
- Pathologie hépatique sévère

{{% /collapse %}}
{{%collapse "Spécialités de contraceptifs" "show" %}}

> [!INFO]
> La contraception intra-utérine peut être proposée aux adolescentes et aux nullipares (*CNGOF 2018*). Le risque d'infection haute est < 1%, même en cas de portage de gonocoque ou Chlamydia (*CNGOF 2018 IGH*).

| Type        | EE (µg)  | Progestatif (mg) | Spécialités     |
| ----------- | -------: | ---------------- | --------------- |
| 2G          | 30/40    | LNG 0,15-0,2     | Adepal, Pacilia |
| 2G          | 30/40/30 | LNG 0,05-0,075-0,125 | Trinordiol, Daily |
| 2G          | 30       | LNG 0,15         | gén, Ludeal, Milevoni 150, Minidril, Optidril 28j, Qiade |
| 2G          | 20       | LNG 0,1          | Asterluna/continu, gén, Leeloo/continu, Lolistrel/continu, Lovavulo, Optilova 28j, Milevoni 100 |
| 3G          | 35       | Norgestimate 0,25 | NR: Femi, Naravela, Optikinzy 28j |
| 3G          | 35       | Norgestimate 0,18/215/25 | NR: Triafemi (-continu), Trinara, gén |
| P2          | 0        | LNG 0,03         | Microval        |
| P3          | 0        | Désogestrel 0,075 | Antigone, Cérazette 28j NR, désogestrel 75, Désopop, Elfasette, Optimizette |
| Implant     | 0        | Etonogestrel     | Nexplanon (18-40 ans) |
| Anneau      | 15       | Etonogestrel 0,12 | NR: Etoring, Nuvaring, gén (18-40 ans) |
| Patch       | 20       | Norelgestromine 0,15 | NR: Evra (18-45 ans, < 90 kg) |
| DIU cuivre  | 0        | 0                | 7Med, CCD, Mona Lisa. et [autre liste (PDF)](http://www.apima.org/img_bronner/Tableau_contraceptifs.pdf) |
| DIU         | 0        | LNG              | Donasert, Kyleena, Mirena |
| Préservatif | 0        | 0                | Be Loved, Eden, Eden perlés, Manix Classic, Manix sensitivity (sans latex), Sortez couverts !, Sure & Smile |
| Cape cervicale | 0     | 0                | Be Loved free, Ormelle, So sexy & Smile  |
{caption="Spécialités de contraception disponibles en France en 2026 (sauf dernières générations et DMPA qui augmentent le risque vasculaire) et préservatifs remboursés. Dr JB Fron d'après *BDPM* et *Assurance Maladie*" class="table-wrap" id="table-pilule"}

> **EE** = éthinyl-estradiol ; **gén** = générique ; **LNG** = lévonorgestrel ; **NR** = non remboursé. Les pilules de 1^re^ génération ne sont plus disponibles en France.  
Autres contraceptions: diaphragme, capes cervicales (NR), spermicides (NR), retrait, stérilisation, méthode *Ogino*.

Les générations de pilules œstroprogestatives correspondent à la date de mise sur le marché du progestatif (P3: désogestrel, gestodène et norgestimate; P4: drospirénone). **Utiliser LNG et norgestimate en première intention**, les autres progestatifs de 3^e^ et 4^e^ générations doublent le risque de MVTE (*HAS 2013*).  
Pas d'arrêt brutal d'une contraception de 3-4^e^ génération bien tolérée.

Présenter les contraceptions par *[groupe d'efficacité](https://questionsexualite.fr/choisir-sa-contraception/ma-contraception-et-moi/tableau-comparatif-pour-vous-guider-dans-votre-choix-de-contraception)* (plutôt que par nombre de grossesses): hormonale (pilule 2^e^ génération, progestative, implant), DIU, [contraception d'urgence]({{% relref "contraception-urgence.md" %}}) et stérilisation.  
Patch et anneau vaginal réservés en intolérance aux moyens déjà listés (sur-risque thrombo-embolique).
Ces moyens efficaces sont **gratuits jusqu'à 25 ans révolus** (sauf patch et anneau qui ont risque de MVTE augmenté, *[Service public](https://www.service-public.fr/particuliers/actualites/A15158)*).

> Possibilité de faire renouveler une fois le contraceptif oral pour 6 mois en présentation d'une ordonnance de moins d'un an.

{{% /collapse %}}
{{%collapse "Clinique" %}}

Nécessité d'une consultation dédiée pour la primo-prescription d'une contraception, renouvelée à 3 mois puis annuelle.

### Interrogatoire

- Âge
- Antécédents personnels  
  [Dépression]({{% relref "depression.md" %}}), {{< modal-btn modal-rcv >}}risque cardiovasculaire élevé{{< /modal-btn >}}, HTA, dyslipidémie, diabète type 1, migraine (préciser l'aura), thrombophilie, cancer (du sein), MVTE, IST, GEU, chirurgie.
- Antécédents familiaux au 1^er^ degré  
  IDM/AVC chez homme < 55 ans ou femme < 65 ans, MVTE (TVP, EP) < 50 ans ou épisodes répétés quel que soit le degré.
- Traitements en cours
- Tabac
- Profession
- Rapports non protégés
- Contraception
  - Attentes et besoin
  - Connaissances
  - Contraceptions antérieures
  - DDR, allaitement en cours, gestité et parité, IVG
  - Efficaces: pilule, implant, stérilet, patch, anneau, stérilisation
  - IST et SIDA
  - Coût
  - Quand débuter, horaire adapté pour éviter l'oubli, Appli de rappel, anticiper le renouvellement
  - Contraception d'urgence et conduite en cas d'oubli
  - Effets indésirables, signaler le traitement lors de prescriptions
  - Recours médecin, pharmacien, sage-femme, infirmière, conseillère conjugale et familiale

### Examen clinique

- Poids, taille, IMC
- Pression artérielle  
  5 % développent une [hypertension artérielle]({{% relref "hypertension-arterielle.md" %}}) sous COP (*ESC 2018*).
- Examen des seins
- Examen gynécologique  
  N'est pas nécessaire pour la 1^re^ consultation (sauf symptôme ou antécédent).
- {{%modal-btn "modal-hyperandrogenie"%}}Signes d'hyperandrogénie{{%/modal-btn%}}
- Frottis selon le rythme du dépistage à partir de 25 ans
- Recherche [Chlamydia]({{% relref "chlamydia-trachomatis.md" %}}) chez 15-25 ans ou partenaires multiples

Reconsulter si: effets indésirables, douleurs pelviennes, [ménorragies]({{% relref "menorragies.md" %}}).

### Examens complémentaires

#### Contraception estroprogestative (COP)

Bilan après 3-6 mois de contraception (avant et renouvelé en antécédent familial métabolique) puis **tous les 5 ans** si bilan normal:

- Bilan lipidique
- Glycémie à jeun
- Antécédent au 1^er^ degré avant 60 ans de MVTE: avis hématologique

> -- *HAS 2019*

#### DIU

> [!INFO]
> Pas de dépistage systématique des IST avant la pose du dispositif intra-utérin (DIU, stérilet) sauf personne à risque ou antécédent d'infection génitale haute. (*CNGOF 2018*)

{{% /collapse %}}
{{%collapse "Cotation des actes" %}}

### Première consultation contraception gratuite

Pour une première consultation chez une jeune femme ou un jeune homme -26 ans, coter **CCP** (46€, une seule fois) avec tiers payant AMO.

La première consultation reprend les types de contraceptifs groupés par efficacité, leurs avantages, limites et inconvénients, la [contraception d'urgence]({{% relref "contraception-urgence.md" %}}) et les [IST](/tags/ist/).

### Consultation contraception gratuite avant 26 ans

- La consultation: coter G (30 €) avec Exo 3 (dit *Soins particuliers exonérés*, comme pour Covid)  
  Cocher TP AMO + AMC sur la feuille de soins.
- Les actes (stérilet, implant): coter l'acte avec Exo 3

#### Secret de la contraception chez les mineurs

Pour les mineurs désirant le secret:

- Rédiger une ordonnance dédiée avec mention << contraception mineurs >> et son âge
- Facturer
  - Sur la FSE Sesam sans vitale, G + Exo 3 avec **NIR anonyme** 2 55 55 55 *CCC* 042/XX pour la mineure et 1 55 55 55 *CCC* 042/XX pour le mineur (la date de naissance doit être exacte) et TP AMO + AMC
  - *CCC* doit être remplacé par le numéro de la CPAM du patient en ajoutant un 1 derrière le numéro du département (331 pour la Gironde), sauf 64 et DOM
  - Ensuite *XX*, la clé du NIR anonyme, [doit être calculée ici](https://commentcalculer.fr/calcul/cle-nir/)

> -- *[Ameli](https://www.ameli.fr/sites/default/files/Documents/Modalites-facturation-contraception-Medecins-SF-Labo.pdf)*

### Stérilet

- Pose: JKLD001 (38,40 €)
- Ablation non cotée sauf remplacement du stérilet: JKKD001 (38,40 €)

{{% /collapse %}}
{{%collapse "Précisions sur les classes disponibles" %}}

Les contraceptifs hormonaux sont habituellement démarrés le *1er jour des règles*.  
Le << Quickstart >> ou démarrage à tout moment du cycle peut être proposé à toute femme avec les précautions suivantes: vérifier l'absence de grossesse, préservatif 7 jours, risque de métrorragies pendant la 1^re^ plaquette.
{.alert .alert-info}

**Effets secondaires habituels:** métrorragies (progestatifs ++), acné, prise de poids, troubles de libido ou de l'humeur.

### Les œstroprogestatifs

- Contre-indiqués dans plusieurs situations (voir *Contre-indications aux œstroprogestatifs*)
- Efficacité identique quelle que soit la voie d'administration
- Les œstroprogestatifs n'augmentent globalement pas le risque de cancer (voir *Contraception et cancer*)
- EE + lévonorgestrel/norgestimate en première intention
- Schéma continu possible si: symptômes cataméniaux, [ménorragies]({{% relref "menorragies.md" %}}) fonctionnelles, [endométriose]({{% relref "endometriose.md" %}}) ou choix personnel.
- 5 % développent une [hypertension artérielle]({{% relref "hypertension-arterielle.md" %}}) (*ESC 2018 HTA*)
- Les progestatifs de 3e génération (gestodène, désogestrel sauf le norgestimate), la drospirénone ou l'acétate de cyprotérone augmentent plus le risque de MVTE que le lévonorgestrel
- Les œstroprogestatifs par voies non orales (patch, anneau) ont probablement le même sur-risque veineux

### Les dispositifs intra-utérins (DIU)

> [!WARNING]
> Métrorragies ou douleurs pelviennes persistantes sous stérilet: bilan avec échographie pelvienne ± ASP.

- Contraception la moins chère (28,37 € pour 5 ans, Mirena 97€ pour 8 ans)
- Le DIU ne contre-indique pas les AINS
- Un antécédent de GEU n'est pas une contre-indication
- Cotation CCAM
  - Pose du stérilet JKLD001 (38,40 €)
  - Ablation non cotée sauf remplacement du stérilet JKKD001 (38,40 €)
- Pose du dispositif intra-utérin
  - Pose à n'importe quel moment du cycle (en l'absence de grossesse)
  - Pas de dépistage systématique des [IST](/tags/ist/) avant la pose  
    Dépistage des IST le jour de la prescription voire avant la pose si à risque (notamment *[Chlamydia]({{% relref "chlamydia-trachomatis.md" %}})* chez les 15-25 ans ou partenaires multiples non protégés).
  - Seuls le toucher vaginal avec examen bimanuel et l'inspection cervicale sont formellement recommandés avant la pose d'un DIU
  - Couper les fils à 2-3 cm de leur saillie (plus courts si gênants)
  - Préciser la date du retrait
- Informer sur la modification des saignements selon le stérilet
- Contrôle annuel de la visibilité des fils
- Affection intercurrent sous stérilet
  - [Grossesse]({{% relref "grossesse.md" %}}) intra-utérine sur DIU: retirer le stérilet si les fils sont accessibles
  - IST ou infection génitale haute: pas de retrait d'emblée.
  - VIH pré-SIDA  
  Le stérilet n'augmente pas le risque de progression du virus ni le risque de transmission au partenaire.

{{%info%}}
La contraception intra-utérine ne constitue pas un facteur de risque de grossesse extra-utérine (GEU)

---

Le stérilet n'est pas un facteur d'infection pelvienne (sauf dans les 21 jours à 4 mois).
{{%/info%}}

### L'implant progestatif

- Contraception la plus efficace
- Possible jusqu'à l'obésité morbide de 56 kg/m² pour une durée de 3 ans
- Cotation CCAM
  - Pose QZLA004 (18,38 €)
  - Ablation QZGA002 (41,80 €)

{{% /collapse %}}
{{%collapse "Méthodes naturelles et barrières" %}}

### Méthodes naturelles

Efficacité moindre par rapport aux méthodes très efficaces (DIU, hormonales).  
Nécessitent une abstinence pendant la période fertile.

Méthode MAMA: voir *Contraception selon le profil > Post-partum*

<< La méthode du retrait n'est pas recommandée comme une méthode de contraception >> -- *CNGOF 2018*

### Méthodes barrières

Les préservatifs sont les seules barrières contre les IST. Informer sur la *Contraception d'urgence*.

- Physique  
  Préservatif masculin/féminin, cape cervicale ou diaphragme.
  - Cape/diaphragme doivent être laissés en place ≥ 6 heures après le rapport et combinés avec spermicides.
- Chimique = spermicides  
  Efficacité seuls est faible.
- Associées

{{% /collapse %}}
{{%collapse "Contraception selon le profil" %}}

### Adolescente

- Temps seule pour la confidentialité
- Gratuité avant 26 ans
- Préservatif associé pour la prévention des IST et vaccination HPV
- DIU et implant (AMM à partir de 18 ans) possibles et très efficaces
- COP: préférer avec 30 µg EE (risque d'oubli, minéralisation osseuse. Avis d'experts)

### Femme après 40 ans

- Informer: risques de grossesse, vasculaire, métabolique
- Privilégier DIU et microprogestatifs
- Réévaluer une COP, arrêter Ogino
- DIU cuivre posé après 40 ans (LNG après 45 ans): peut être laissé jusqu'à la [ménopause]({{% relref "menopause.md" %}})
- [Ménorragies]({{% relref "menorragies.md" %}}) ou dysménorrhées (explorées): DIU LNG préféré
- Stérilisation intéressante

#### Femme après 50 ans

- Contraception non hormonale: poursuivre jusqu'à 12 mois d'[aménorrhée]({{% relref "amenorrhee.md" %}})
- Contraception hormonale
  - Arrêt de COP
  - Dosages hormonaux inutiles. Remplacement par méthode barrière quelques mois et méthode non hormonale si persistance des cycles.

### Obésité

- Toutes les contraceptions sont efficaces
- Chirurgie bariatrique:
  - les contraceptions réversibles de longue durée sont privilégiées (implant, DIU cuivre ou hormonal)
  - arrêt des œstroprogestatifs 4-6 semaines avant et 6 semaines après l'opération
  - si une forme orale est choisie: prévenir du risque d'inefficacité en cas de trouble digestifs (vomissements, diarrhées) avec complément par préservatif
  - en prévision d'une grossesse: consultation nutritionnelle en amont, suivi diététique, supplémentation multivitaminique toute la grossesse (10 mg zinc, 1 mg cuivre, max 9 mg de bêta carotène), acide folique 0,4 mg/j jusqu'à 12 SA, dosages adaptés au moins trimestriels (ferritine, vitamine B12 ...)

> -- *BARIA-MAT*

### Contraception du post-partum (pp)

{{< traitements/contraception-pp >}}

### Contraception pendant l'allaitement

- Progestatif:
  - désogestrel 75 µg/j, lévonorgestrel 30 µg/j
  - dispositif intra-utérin au lévonorgestrel
  - implant sous-cutané
  - Progestatif injectable à longue durée (médroxyprogestérone): Dépo-Provera®
- Estroprogestatif:
  - **Possible après les 6 semaines suivant l'accouchement**
- Contraception d'urgence: lévonorgestrel, ulipristal

> -- *[CRAT](https://www.lecrat.fr/6228/)*

{{% /collapse %}}
{{%collapse "Gestion des effets indésirables de la contraception" %}}

[Métrorragies](#métrorragies) - [Acné](#acné) - [Libido](#libido) - [Prise de poids](#prise-de-poids) - [Céphalées](#céphalées) - [Troubles de l'humeur](#troubles-de-lhumeur)

### Métrorragies

Le plus souvent par mauvaise observance (sauf progestatifs récents), mais il faut éliminer: infection, pathologie endométriale ou une cause fonctionnelle.

Examens: examen gynécologique, échographie pelvienne, bactériologie des leucorrhées. Dosage de bhCG si suspicion de mauvaise observance ou de grossesse.

Métrorragies idiopathiques mal tolérées depuis ≥ 3 mois, proposer:

- Changement de contraception
- Augmentation de la dose d'œstrogènes
- Modification du progestatif
- Patch ou anneau

### Acné

Habituelle avec COP de 2^e^ génération.

Proposer:

- Lévonorgestrel
- Puis norgestimate
- Changement de contraception
- COP triphasique avec 35 µg d'EE et norgestimate: Triafemi (non remboursée)

Si insuffisant: traitement de l'[acné]({{% relref "acne.md" %}}), avis dermatologique.

### Libido

Étayer la part hormonale et psychologique imputable.  
Changement de contraception à discuter.

### Prise de poids

> [!INFO]
> Les contraceptions hormonales ne sont pas associées à une prise de poids. (*CNGOF 2018*)

L'implant sous-cutané à l'étonogestrel ou le DMPA injectable peuvent parfois augmenter modérément le poids.  
Réaliser un bilan complet si prise de poids importante.

### Céphalées

> [!WARNING]
> Contre-indication formelle aux œstroprogestatifs si migraines de novo ou aggravation des migraines pré-existantes.

La survenue de céphalées sous contraceptifs hormonaux peuvent être le marqueur d'un risque vasculaire. Réévaluation clinique cardiovasculaire.

Migraines cataméniales sous COP, proposer au choix:

- Schéma continu
- Œstrogènes percutanés  
  1,5 mg gel/j ou patch 100 µg/24h pendant les 7 jours libres.

### Troubles de l'humeur

> << Il n'existe pas de preuve solide permettant d'établir que l'utilisation d'une contraception hormonale est un facteur de risque de troubles de l'humeur >> -- *CNGOF 2018*

Étayer les aspects psychologiques et discuter un changement de contraception en parallèle.

{{% /collapse %}}
{{%collapse "Interactions médicamenteuses" %}}

> [!INFO]
> Pas de contre-indication aux AINS avec le DIU cuivre. (*CNGOF 2018*)

Contrôler les interactions médicamenteuses en cas de cotraitement.

### Inducteurs enzymatiques

Réduisent l'efficacité contraceptive.  
Préservatif jusqu'au cycle suivant en cas de traitement court par un *inducteur enzymatique*:

- Millepertuis
- Antiépileptiques  
Carbamazépine, fosphénytoïne, phénytoïne, phénobarbital, primidone.
- Antituberculeux
- Antirétroviraux
- Vémura/dabrafénib
- Bosentan
- Aprépitant

Si prise le mois précédent, utiliser si besoin une contraception d'urgence (doubler la dose de LNG).  
En traitement prolongé, utiliser une contraception non hormonale.

### Autres

- Charbon: délai > 2h de distance avec la prise hormonale
- Contraception fortement dosée en EE et traitement ci-dessous: risque d'augmentation des concentrations en EE  
  Étoricoxib, atorvastatine, antifongique azolé (kétoconazole...), bocéprévir.

{{% /collapse %}}
{{%collapse "Contraception et cancers" %}}

> Il n'est pas retrouvé d'augmentation de l'incidence ou de la mortalité par cancer (tous confondus) chez les utilisatrices de contraception -- *CNGOF 2018*

### Contraception œstroprogestative et cancers

Modifications des risques de cancers liées à l'utilisation d'une contraception œstroprogestative:

- Augmentation de l'incidence  
  Modérée du risque du **cancer du sein** avec une COP, qui diminue après l'arrêt de la contraception hormonale.
- Diminution de l'incidence (prolongée après l'arrêt)
  - [Cancer de l'endomètre]({{% relref "cancer-endometre.md" %}})
  - Cancer de l'ovaire
  - Hémopathies malignes
  - [Cancer colorectal]({{% relref "cancer-colorectal.md" %}})

### Contraception par stérilet hormonal et cancers

Le DIU au LNG réduit les cancers de l'endomètre et de l'ovaire.

> << Les bénéfices en terme contraceptifs sont supérieurs aux risques >> (*CNGOF 2018*). Ces informations doivent être délivrées aux patientes et ne modifient pas la participation aux dépistages des cancers.

#### Contraception et cancer en cours de traitement

Délai minimal conseillé de 6-12 mois après la fin du traitement pour envisager une grossesse (souvent plus). Une contraception est nécessaire au long du traitement et choisie selon le risque d'interactions.

- Immunodépression  
  Le risque d'IST fait préférer le préservatif, le DIU LNG (avec recherche préalable de gonocoque/*Chlamydia*).
- Vomissements  
  Préférer implant, préservatif (voire patch, anneau).
- Risque thromboembolique  
  - Risque augmenté par le cancer. Éviter les œstroprogestatifs pour ne pas cumuler les risques.
  - Cancer non hormonodépendant: les macroprogestatifs à dose antigonadotrope limitent le risque thromboembolique et permettent une aménorrhée.  
  Alternative: agonistes de la GnRH.

Chez l'homme: recommander le préservatif avec les nouvelles thérapies.

#### Contraception après cancer

> [!WARNING]
> Après un [cancer du sein]({{% relref "cancer-sein.md" %}}), toutes les contraceptions hormonales sont contre-indiquées.

Une contraception doit être systématiquement envisagée en l'absence de [ménopause]({{% relref "menopause.md" %}}).

- Cancer du sein  
  Contraception non hormonale par DIU cuivre privilégiée.
- Hépatocarcinome  
  Privilégier les contraceptions non hormonales.

#### Contraception et prédisposition familiale au cancer

BRCA 1 ou BRCA 2 et Syndrome de Lynch: Toute contraception peut être proposée.

{{% /collapse %}}
{{%collapse "Information du patient" %}}

{{< card-link-external title="QuestionSexualité" url="https://questionsexualite.fr/choisir-sa-contraception/ma-contraception-et-moi/tableau-comparatif-pour-vous-guider-dans-votre-choix-de-contraception" subtitle="Choisir sa contraception">}}

- [Santé BD: La contraception, c'est quoi ?](https://santebd.org/les-fiches-santebd/sexualite-contraception/vie-affective-et-sexuelle-la-contraception-la-contraception-cest-quoi)
- [Santé BD: Les moyens de contraception](https://santebd.org/les-fiches-santebd/sexualite-contraception/vie-affective-et-sexuelle-la-contraception-les-moyens-de-contraception)
- [Ameli. Comment bien choisir sa contraception ?](https://www.ameli.fr/assure/sante/themes/contraception/choisir-mode-contraception)

{{< card-link-external title="Les centres de santé sexuelle" url="https://ivg.gouv.fr/les-centres-de-sante-sexuelle.html">}}

- Différence efficacité théorique-pratique: importance de l'observance
- Éviter l'automédication avec un traitement hormonal  
Y compris phytothérapie, compléments alimentaires.
- Réduction de mortalité du cancer de l'ovaire et des cancers en général
- L'augmentation de la mortalité par cancer du sein est controversée

{{% /collapse %}}
{{%collapse "Pour en savoir plus"%}}

### Bénéfices de la contraception

#### Bénéfices de la contraception œstroprogestative

Bénéfices similaires pour les différentes voies d'administration (orale, vaginale, transdermique).

- Réduction des cancers
  - [Cancer de l'endomètre]({{% relref "cancer-endometre.md" %}}) (RR 0,76)
  - [Cancer de l'ovaire]({{% relref "cancer-ovaire.md" %}}) (RR 0,73)
  - [Cancer du côlon]({{% relref "cancer-colorectal.md" %}}) (RR 0,81)
  - Hémopathies malignes
- Améliorations des troubles du cycle menstruel
  - [Ménorragies]({{% relref "menorragies.md" %}})
  - Dysménorrhées
  - [Syndrome prémenstruel]({{% relref "syndrome-premenstruel.md" %}})
- Améliore les symptômes de l'endométriose
- Réduction des pathologies bénignes des seins et utérus
  - Fibrokystes du sein sans atypie
  - Fibroadénomes mammaires
  - Myomes
- Réduction de l'incidence de la [polyarthrite rhumatoïde]({{% relref "polyarthrite-rhumatoide.md" %}}) (OR 0,84)
- [Acné]({{% relref "acne.md" %}})  
  COP uniquement à visée contraceptive.

#### Bénéfices de la contraception progestative

- [Endométriose]({{% relref "endometriose.md" %}}) (en 2^e^ intention)
- Dysménorrhée (implant, désogestrel)
- Douleurs pelviennes chronique par congestion veineuse (implant)

#### Bénéfices du DIU LNG

- [Ménorragies]({{% relref "menorragies.md" %}}) (traitement de référence et de prévention de l'anémie)
- Dysménorrhée (après exploration)
- [Endométriose]({{% relref "endometriose.md" %}})  
  En 1^re^ intention en alternative à la COP et après chirurgie.

#### Bénéfices du DIU cuivre

- [Cancer de l'endomètre]({{% relref "cancer-endometre.md" %}})
- [Cancer du col de l'utérus]({{% relref "cancer-col-uterus.md" %}})

### Méthodes de contraception utilisées en France

{{< figure-chart title="Méthodes de contraception des françaises de 15 à 49 ans en 2016. Dr JB Fron d'après [Rahib D 2017](https://www.santepubliquefrance.fr/determinants-de-sante/sante-sexuelle/documents/enquetes-etudes/barometre-sante-2016-contraception-quatre-ans-apres-la-crise-de-la-pilule-les-evolutions-se-poursuivent)" id="chart-2" >}}

<script>
const chartOptions2 = {
  series: [36.5, 25.6, 15.5, 8, 4.6, 4.5, 4.3, 1],
  chart: { type: 'donut' },
  title: { text: 'Contraceptions utilisées par les femmes en France' },
  labels: ['Pilule', 'Stérilet', 'Préservatif', 'Aucune', 'Autres', 'Stérilisation', 'Implant', 'Patch/anneau']
}
</script>

{{% /collapse %}}
{{%collapse "Prise en charge par contraception" "show" %}}

{{< mermaid title="Prise en charge d'une contraception par le médecin généraliste. Dr JB Fron d'après CNGOF et HAS" >}}
graph TB
  contraception["<b>Contraception</b><br>—<br>Personne en âge de procréer<br>sans désir d'enfant.<br>Information sur la<br>contraception d'urgence."] --> homme("<b>Homme</b><br>—<br>- Préservatif<br>- Vasectomie")
  contraception --> femme("<b>Femme</b><br>—<br>DIU cuivre<br>et ...") -- Estrogènes --> estrogènes("<b>Contre-indication<br>aux estrogènes ?</b><br>—<br>- ATCD familial 1er degré:<br>IDM/AVC précoce<br>MVTE avant 50 ans<br>ou répétés<br>- HTA<br>- Dyslipidémie non contrôlée<br>- DT1 &gt; 20 ans<br>- Migraine avec aura<br>- Migraine de novo ou aggravation<br>sous estrogènes<br>- Thrombophilie<br>- Risque cardiovasculaire élevé<br>- Antécédent de cancer du sein,<br>tumeur ovarienne,<br>carcinome hépatocellulaire") -- Non --> réserves("<b>Max 1 parmi:</b><br>—<br>- Âge &ge; 35 ans<br>- Surpoids, obésité<br>- Tabac &gt; 15 cig/j<br>- Dyslipidémie contrôlée<br>- DT2<br>- Migraine sans aura") -- Oui --> estrogènes2("Pilule lévonorgestrel<br>ou norgestimate") -. Inadaptée .-> estrogènes3("- Patch 18-45 ans<br>- Anneau 18-40 ans<br>- 3e, 4e génération")
    femme -- Progestatif --> progestatif("<b>Contre-indications<br>aux progestatifs</b><br>—<br>- MVTE en cours<br>- Saignements génitaux inexpliqués<br>- Cancer sein ou utérus<br>- Pathologie hépatique sévère") -- Non --> progestatif2("À tout âge:<br>- Pilule progestative<br>- DIU hormonal<br>- Implant de 18 à 40 ans")
    femme -- Définitive --> définitive("Gynécologue")
  style contraception stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Ameli Médecin. Des préservatifs sans latex pris en charge par l'Assurance Maladie. 27/03/2025.](https://www.ameli.fr/medecin/actualites/des-preservatifs-sans-latex-pris-en-charge-par-l-assurance-maladie)
- [ANSM. Progestatifs et risque de méningiome : recommandations pour limiter ce risque. 18/12/2023.](https://ansm.sante.fr/actualites/progestatifs-et-risque-de-meningiome-recommandations-pour-limiter-ce-risque)
- [ANSM. Les stérilets contenant le plus d'hormone présenteraient davantage de risque de troubles dépressifs. 14/02/2023.](https://ansm.sante.fr/actualites/les-sterilets-contenant-le-plus-dhormone-presenteraient-davantage-de-risque-de-troubles-depressifs)
- [Collège Français des Enseignants en Urologie (CFEU). Contraception. Item 36. Référentiel du collège d'urologie 5ème édition. 2021. (PDF)](https://www.urofrance.org/wp-content/uploads/2021/11/Item-36-Contraception-.pdf)
- {{< references/college-endocrino >}}
- [HAS. Contraception : consultations initiale et de suivi. 2020.](https://www.has-sante.fr/jcms/p_3122291/fr/contraception-consultations-initiale-et-de-suivi)
- [HAS. Contraception chez la femme à risque cardiovasculaire. Recommandation de bonne pratique. 2019.](https://www.has-sante.fr/jcms/c_1638478/fr/contraception-chez-la-femme-a-risque-cardiovasculaire)
- [HAS. Contraception chez la femme en post-partum. Recommandation de bonne pratique. 2019.](https://www.has-sante.fr/jcms/c_1369193/fr/contraception-chez-la-femme-en-post-partum)
- [HAS. Contraception : prescriptions et conseils aux femmes. 2019.](https://www.has-sante.fr/jcms/c_1752432/fr/contraception-prescriptions-et-conseils-aux-femmes)
- [RFCRPV. Quels risques d'interaction médicamenteuse au cours de la contraception ? 2019.](https://www.rfcrpv.fr/quels-risques-dinteraction-medicamenteuse-au-cours-de-la-contraception/)
- [Quilliot D, et al. Grossesses après chirurgie bariatrique: recommandations pour la pratique clinique (groupe BARIA-MAT). Nutrition Clinique et Métabolisme. 2019.](https://www.sciencedirect.com/science/article/abs/pii/S098505621930528X) (payant)
- [CNGOF. Contraception. Recommandations pour la pratique clinique. 2018. (PDF)](https://cngof.fr/app/uploads/2025/11/Contraception202018_RPC.pdf?x26468)
- [Robin F, et al; CNGOF. Faut-il vraiment avoir peur de la pilule contraceptive ? 2017. (PDF)](https://cngof.fr/app/uploads/2023/06/piluleCNGOF-2017-09.pdf?x53169)
- CNGOF. Contraception du post-partum : recommandations pour la pratique clinique.
- [HAS. Contraception : focus sur les méthodes efficaces. Actualités & Pratiques. 2013.](https://www.has-sante.fr/upload/docs/application/pdf/2013-05/contraception_focus_methodes_2013-05-22_18-09-35_548.pdf)

### Bibliographie en attente

- [Ovsepyan V, et al. Practical Recommendations for Minimizing Pain and Anxiety with IUD Insertion. J Am Board Fam Med. 2024.](https://www.jabfm.org/content/37/6/1150)
- [Ciangura C, et al. Clinical Practice Guidelines for Childbearing Female Candidates for Bariatric Surgery, Pregnancy, and Post-partum Management After Bariatric Surgery. OBES SURG. 2019.](https://link.springer.com/article/10.1007/s11695-019-04093-y)
- [The College of Sexual & Reproductive Healthcare (CoSRH). CoSRH CEU Guidance: Recommended Actions after incorrect Use of Combined Hormonal Contraception (e.g. late or missed pills, ring and patch). 2020.](https://www.cosrh.org/Public/Documents/fsrh-ceu-guidance-recommended-actions-after-incorrect-use.aspx)
- [The College of Sexual & Reproductive Healthcare (CoSRH). CoSRH Clinical Guideline: Quick Starting Contraception. 2017.](https://www.cosrh.org/Public/Public/Standards-and-Guidance/Quick-Starting-Contraception.aspx)
- [The College of Sexual & Reproductive Healthcare (CoSRH). CoSRH Guidelines & Statements.](https://www.cosrh.org/Public/Standards-and-Guidance/cosrh-guidelines-and-statements.aspx)
- [HAS. Contraception chez la femme adulte et de l'adolescente en âge de procréer (hors post-partum et post-IVG). 2019.](https://www.has-sante.fr/jcms/c_1752542/fr/contraception-chez-la-femme-adulte-et-de-l-adolescente-en-age-de-procreer-hors-post-partum-et-post-ivg)
- [HAS. Contraception chez la femme après une interruption volontaire de grossesse (IVG). 2019.](https://www.has-sante.fr/jcms/c_1753312/fr/contraception-chez-la-femme-apres-une-interruption-volontaire-de-grossesse-ivg)
- [HAS. Contraception chez les patientes transplantées (rein, foie, coeur, poumon). 2019.](https://www.has-sante.fr/jcms/c_2870343/fr/contraception-chez-les-patientes-transplantees-rein-foie-coeur-poumon)
- [HAS. Stérilisation à visée contraceptive chez l'homme et chez la femme. 2019.](https://www.has-sante.fr/jcms/c_1752765/fr/sterilisation-a-visee-contraceptive-chez-l-homme-et-chez-la-femme)
- [HAS. Contraception chez l'homme. 2019.](https://www.has-sante.fr/jcms/c_1757909/fr/contraception-chez-l-homme)
- [HAS. Efficacité des méthodes contraceptives. 2014.](https://www.has-sante.fr/jcms/c_1757924/fr/efficacite-des-methodes-contraceptives)

{{%/sources%}}
{{% modal title="Risque cardiovasculaire selon ESC 2025" id="modal-rcv"%}}

{{< clinique/risque-cardiovasculaire >}}

{{% /modal %}}
{{% modal title="Signes d'hyperandrogénie"%}}

{{< clinique/hyperandrogenie >}}

{{% /modal %}}

{{< card-link-external title="MOOC Contraception - L'affaire de tous" url="https://www.pns-mooc.com/fr/mooc/7/presentation" subtitle="e-learning du CNGOF">}}
