+++
id = "0190e8c6-e9b4-700f-a034-7bddc4ac244e"
title = "Interruption volontaire de grossesse (IVG)"
prefix = "l'"
titleSeo = "Interruption volontaire de grossesse IVG"
description = "Recommandations pour la prise en charge ambulatoire de l'interruption volontaire de grossesse (IVG). Terme autorisé, examen gynécologique, échographie pelvienne"
synonyms = ["Avortement"]
auteurs = ["Jean-Baptiste FRON"]
date = "2020-09-16T10:54:41+02:00"
publishdate = "2020-09-16"
lastmod = "2024-10-03"
specialites = ["gynécologie-obstétrique"]
annees = "2021"
sources = ["CNGOF", "HAS"]
tags = ["contraception", "grossesse"]
english = ["Legally induced abortion"]
sctid = "39406005"
icd10 = ["O04", "O04.9"]
image = true
imageSrc = "Illustration de l'IVG par stories / Freepik"
chart = true
flowchart = true
todo = "SEO 'recommandation ivg'"
+++

{{%article-summary%}}

- L'interruption volontaire de grossesse (IVG) est autorisée jusqu'à 16 semaines d'aménorrhée (SA), en ville jusqu'à 9 SA (IVG médicamenteuse)
- Bilan systématique avant l'IVG: calcul du terme, examen gynécologique, groupe sanguin et échographie pelvienne
- Liste des centres et praticiens réalisant des interruptions volontaires de grossesse (IVG): [ivg.gouv](https://ivg.gouv.fr) (téléphone {{<phone>}}0 800 08 11 11{{</phone>}}) et [ivglesadresses.org](https://ivglesadresses.org)

Chapitres liés: [contraception]({{% relref "contraception.md" %}}) et [contraception d'urgence]({{% relref "contraception-urgence.md" %}})

{{%/article-summary%}}
{{%collapse "Calcul du terme de grossesse" %}}

{{< outils/terme >}}

{{% /collapse %}}
{{%collapse "Introduction" %}}

> [!INFO]
> << Les échecs contraceptifs dus au défaut d'observance sont l'une des principales causes de recours à l'interruption volontaire de grossesse (IVG) en France >>. --  *CNGOF 2018*

> << Dans tous les cas où cela est possible, les femmes doivent pouvoir choisir la méthode, médicamenteuse ou chirurgicale, et recevoir une information détaillée. Cette information renforce la satisfaction des femmes après IVG. >>

### Épidémiologie de l'interruption volontaire de grossesse

- En 2021: 208.200 IVG en métropole
- Taux de recours de 14,9 IVG pour 1000 femmes de 15 à 49 ans en métropole (29,5 dans les DROM)  
  Pic chez les **20-29 ans** avec 24,8 IVG/1000 femmes.
- ⅓ des IVG est réalisé en ville
- 76% des IVG sont médicamenteuses
- Depuis l'autorisation de 2004: 1 IVG médicamenteuse sur 6 a lieu en libéral (soit 18.273 en 2007, 3/4 par gynécologue, 1/4 par médecin généraliste)

{{< figure-chart title="Évolution du nombre d'interruptions de grossesse annuelles (comptant les reprises) et du ratio d'avortement France entière de 1990 à 2023. (*Drees 2024*)<br>Le ratio d'avortement correspond au rapport entre le nombre d'IVG et le nombre de naissances vivantes. Ex: en 2023, 35 IVG pour 100 naissances vivantes (*Drees 2024*)" >}}

<script>
const chartOptions1 = {
  series: [{
    name: 'Nombre d’IVG',
    data: [208325, 211533, 204105, 203679, 202426, 193763, 202567, 204157, 211075, 210735,
    205099, 215611, 220070, 216436, 221587, 219421, 228678, 226812, 222188, 222277,
    225836, 221970, 219148, 228984, 227055, 220319, 216189, 217416, 225162, 232999,
    222469, 223763, 242040, 251169]
  },
  {
    name: 'Ratio d’avortement',
    data: [0.26, 0.27, 0.26, 0.27, 0.27, 0.26, 0.27, 0.27, 0.27, 0.27,
    0.25, 0.27, 0.28, 0.27, 0.28, 0.27, 0.28, 0.28, 0.27, 0.27,
    0.27, 0.27, 0.27, 0.28, 0.28, 0.28, 0.28, 0.28, 0.30, 0.31,
    0.29, 0.29, 0.32, 0.35]
  }],
  chart: { type: 'line', height: 320 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#ffa600'], curve: 'smooth', width: 4 },
  title: { text: 'Évolution de l’activité d’IVG en France de 1990 à 2023' },
  xaxis: {
    categories: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    tickAmount: 7
  },
  yaxis: [
    {
      title: {
        text: 'IVG',
        style: { color: '#4150f5' }
      },
      labels: { style: { colors: '#757575' }},
      min: 0,
      decimalsInFloat: 0
    },
    {
      seriesName: 'Ratio',
        opposite: true,
        title: {
          text: 'Ratio',
          style: {color: '#ffa600'}
        },
        labels: { style: { colors: '#757575' }},
        min: 0
    }
  ]
}
</script>

### Abréviations

CNGOF
: Collège National des Gynécologues et Obstétriciens Français

IVG
: interruption volontaire de grossesse
{.dl-inline}

{{% /collapse %}}
{{%collapse "IVG médicamenteuse" %}}

### Conditions de l'IVG médicamenteuse

{{%info%}}L'interruption volontaire de grossesse par un médecin généraliste en ville (ou sage-femme) est possible jusqu'à 9 semaines d'aménorrhée (SA), à condition d'une formation suffisante et de convention avec établissement de santé autorisé{{%/info%}}

> [!WARNING]
> Informer du risque d'échec de l'IVG médicamenteuse avec recours à la chirurgie possible.

Les métrorragies (témoin de l'efficacité) surviennent 3 à 4 heures après la prise du misoprostol.  
Les **douleurs abdomino-pelviennes** sont quasi-constantes.

### Grossesse de moins de 7 SA

{{%info%}}

- Mifépristone 600 mg par voie orale (Mifégyne® 200 mg cp)
- À 24-48h: misoprostol 400 µg par voie orale (Gymiso® 200 µg cp)

OU

- Mifépristone 200 mg par voie orale (Mifégyne® 200 mg cp)
- À 24-48h: misoprostol 400 µg par voie transmuqueuse orale ou sublinguale (Gymiso® 200 µg cp)
{{%/info%}}

> Voie transmuqueuse orale: placer les comprimés entre la joue et la gencive, puis avaler les fragments résiduels après 30 minutes.

**Visite de contrôle à 2 semaines** systématique pour vérifier l'expulsion (IVG chirurgicale sinon, possible jusqu'à 14 SA).

### Grossesse de 7 à 9 SA

{{%info%}}

- Mifépristone 200 mg par voie orale (Mifégyne® 200 mg cp)
- À 24-48h: misoprostol 800 µg par voie transmuqueuse orale ou sublinguale (Gymiso® 200 µg cp)
{{%/info%}}

{{%class%}}Taux de grossesse évolutive: avant 8 SA - 0,5% | 8-9 SA - 1,5%{{%/class%}}

### Grossesse après 9 SA

IVG chirurgicale uniquement passées 9 semaines d'aménorrhée, possible jusqu'à 16 semaines d'aménorrhée.

{{% /collapse %}}
{{%collapse "Déroulement de l'IVG" %}}

Toute patiente qui désire une IVG doit obtenir un rendez-vous (ou une téléconsultation) **dans les 5 jours** suivant son appel.  
Plus l'IVG intervient précocement pendant la grossesse, plus le risque de complications est faible.

### Première consultation

- Informations claires et précises sur la procédure d'IVG et remise de documents écrits
- Temps de réflexion abrogé
- Proposer un entretien spécialisé d'information, soutien et écoute (obligatoire pour les mineures)
- Préciser l'âge gestationnel par **date des dernières règles (DDR) + examen clinique + échographie pelvienne**

### 2^e^ consultation

- Consentement écrit de la pratique de l'IVG
- Proposer le dépistage des [IST](/tags/ist/) (*[Chlamydia]({{% relref "chlamydia-trachomatis.md" %}})*, [VIH]({{% relref "vih-sida.md" %}})...), vérifier le statut du [frottis cervico-vaginal]({{% relref "cancer-col-uterus.md" %}})
- Aborder la [contraception]({{% relref "contraception.md" %}}) future, possibilité de la prescrire en avance
- **Groupe sanguin ABO-Rhésus systématique**

**NB.** Comprendre l'échec de la contraception actuelle + éducation à la [contraception d'urgence]({{% relref "contraception-urgence.md" %}}).

### 3^e^ consultation

- Conditions de réalisation de l'IVG à domicile: compréhension, distance domicile - centre hospitalier référent (ouvert 24/7) de maximum 1 heure. Laisser le choix du lieu: domicile ou hôpital.
- Expliquer la conduite à tenir en cas de survenue d'effets indésirables (hémorragie, douleur) + support écrit
- Remise de fiche de liaison avec les éléments essentiels  
- Prise de **mifépristone**  
  Remettre une fiche de conseils sur les suites normales de l'IVG + numéro de téléphone à appeler en cas d'urgence
- Délivrance du **misoprostol** si prise à domicile.  
  Sinon revenir en consultation dans 36-48 heures.  
  Si prise à domicile et Rhésus négatif: injection immédiate des immunoglobulines anti-D
- Intérêt de ne pas être seule lors de la prise du misoprostol à domicile.
- Prescription d'antalgiques de palier 1 (ibuprofène à dose antalgique) et 2
- Prescription de la contraception  
  **NB.** Contraception hormonale (progestative ou COP) doit être débutée le jour de la prise de la prostaglandine.
- Évaluer l'intérêt d'un arrêt de travail

### 4^e^ consultation: si choix de prise avec le médecin généraliste

- Prise du misoprostol + check-list ci-dessus
- Prévention de l'incompatibilité rhésus si femme Rhésus négatif: immunoglobulines anti-D 200 µg IM au plus tard dans les 72 heures qui suivent les saignements.
- Visite de contrôle obligatoire  
  Prévue entre 14 et 21^e^ jour post-IVG
- Examen clinique, dosage bêta-hCG plasmatiques OU échographie pelvienne  
  Recours à l'IVG chirurgicale si échec.
- Vérifier l'observance de la contraception
- Proposer un accompagnement psychologique

{{% /collapse %}}
{{%collapse "L'IVG chez les mineures" %}}

L'interruption volontaire de grossesse est **accessible à quiconque quel que soit son âge**. Les mineures doivent être accompagnées par la **personne majeure** de leur choix et l'accord parental n'est pas nécessaire.

L'IVG est totalement gratuit pour les mineures.

> -- *[ivg.fr. Conditions d'accès à l'IVG. 2024.](https://ivg.gouv.fr/acceder-a-ivg)*

{{% /collapse %}}
{{%collapse "Prévention des IVG" %}}

[Contraception efficace]({{% relref "contraception.md" %}}) adaptée pour tous les couples en âge de procréer en l'absence de désir de grossesse.

Informer sur le recours à la [contraception d'urgence]({{% relref "contraception-urgence.md" %}}).

{{% /collapse %}}
{{%collapse "Conduite à tenir pour une interruption volontaire de grossesse" "show" %}}

{{< mermaid title="Prise en charge d'une IVG par le médecin généraliste en France. Dr JB Fron d'après HAS 2021 modifiée par loi 2022-295" >}}
graph TB
  demande[Demande d'IVG]
  style demande stroke:#4150f5, stroke-width:1px
    demande --> cs("Calcul du terme (DDR)<br>± examen")
    cs --> orientation("Orienter pour RDV sous 5j<br>—<br>0 800 08 11 11<br>ivglesadresses.org")
      orientation -- "&lt; 10 SA" --> med(Traitement médical<br>ambulatoire)
        med --> suivi("<b>Consultation de suivi</b><br>—<br>- Contrôle à J14-J21<br>- bHCG, examen<br>- Contraception<br>± Prévention allo-immunisation rhésus<br>- Suivi psychologique")
      orientation -- 10-16 SA --> chir(Aspiration chirurgicale) --> suivi
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Drees. La hausse des IVG réalisées hors établissement de santé se poursuit en 2023. Études et résultats. 2024.](https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/etudes-et-resultats/interruptions-volontaires-de-grossesse-la)
- [Service-Public. Interruption volontaire de grossesse (IVG). 25/04/2024.](https://www.service-public.fr/particuliers/vosdroits/F1551)
- [HAS. Interruption volontaire de grossesse par méthode médicamenteuse - Mise à jour. 12/04/2021.](https://www.has-sante.fr/jcms/p_3223429/fr/interruption-volontaire-de-grossesse-par-methode-medicamenteuse-mise-a-jour)
- [HAS. La HAS valide l'extension de l'IVG médicamenteuse à domicile jusqu'à 9 semaines. 10/04/2020.](https://www.has-sante.fr/jcms/p_3179352/fr/la-has-valide-l-extension-de-l-ivg-medicamenteuse-a-domicile-jusqu-a-9-semaines)
- [Drees. 224300 interruptions volontaires de grossesse en 2018. Septembre 2019.](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/etudes-et-resultats/article/224-300-interruptions-volontaires-de-grossesse-en-2018)
- [HAS. Réévaluation de la stratégie de dépistage des infections à Chlamydia trachomatis. 23/10/2018.](https://www.has-sante.fr/jcms/c_2879401/fr/reevaluation-de-la-strategie-de-depistage-des-infections-a-chlamydia-trachomatis)
- [CNGOF. Contraception. Recommandations pour la pratique clinique. 2018. (PDF)](https://cngof.fr/rpc/?x72671)
- [HAS. Réévaluation de la stratégie de dépistage de l'infection à VIH en France. Mars 2017.](https://www.has-sante.fr/jcms/c_2024411/fr/reevaluation-de-la-strategie-de-depistage-de-l-infection-a-vih-en-france)
- [CNGOF. L'interruption volontaire de grossesse. Recommandations pour la pratique clinique. 2016. (PDF)](https://cngof.fr/app/pdf/RPC//RPC%20DU%20CNGOF/Obst%C3%A9trique/Contraception%20et%20Sant%C3%A9%20Reproductive/IVG%202016-RPC.pdf?x60010)

### Bibliographie en attente

- [Tessema GA, et al. Interpregnancy interval and adverse pregnancy outcomes among pregnancies following miscarriages or induced abortions in Norway (2008-2016): A cohort study. PLOS Medicine. 2022.](https://doi.org/10.1371/journal.pmed.1004129)
- [HAS. Contraception chez la femme après une interruption volontaire de grossesse (IVG). 2019.](https://www.has-sante.fr/jcms/c_1753312/fr/contraception-chez-la-femme-apres-une-interruption-volontaire-de-grossesse-ivg)

{{%/sources%}}
