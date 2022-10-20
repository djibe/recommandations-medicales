+++
title = "Interruption volontaire de grossesse"
prefix = "l'"
titleSeo = "Interruption de grossesse IVG"
description = "Recommandations pour la prise en charge ambulatoire de l'interruption volontaire de grossesse (IVG). Terme autorisé, examen gynécologique, échographie pelvienne"
synonyms = ["IVG", "avortement"]
auteurs = ["Jean-Baptiste FRON"]
date = "2020-09-16T10:54:41+02:00"
publishdate = "2020-09-16"
lastmod = "2022-10-18"
specialites = ["gynecologie-obstetrique"]
annees = "2021"
sources = ["CNGOF", "HAS"]
tags = ["contraception"]
anglais = ["Legally induced abortion"]
sctid = "39406005"
chart = true
flowchart = true
image = true
imageSrc = "Illustration de l'IVG par stories / Freepik"
+++

{{%article-summary%}}

- L'interruption volontaire de grossesse (IVG) est autorisée jusqu'à 14 semaines d'aménorrhée (SA), en ville jusqu'à 9 SA (depuis avril 2021)
- Temps de réflexion d'une semaine (sauf délai avancé)
- Systématiques: calcul du terme + examen gynécologique + groupe sanguin + échographie pelvienne
- Centres et praticiens réalisant des IVG: [ivg.gouv](https://ivg.gouv.fr/) (téléphone {{<phone>}}0 800 08 11 11{{</phone>}}) et [ivglesadressess.org](https://ivglesadresses.org/)

Chapitres liés: [contraception]({{< relref "contraception.md" >}}) et [contraception d'urgence]({{< relref "contraception-urgence.md" >}})

{{%/article-summary%}}
{{%collapse "Calcul du terme" %}}

{{< outils/terme >}}

{{% /collapse %}}
{{%collapse "Introduction" %}}

> << Les échecs contraceptifs dus au défaut d'observance sont l'une des principales causes de recours à l'interruption volontaire de grossesse (IVG) en France >> (*CNGOF 2018*).

> << Dans tous les cas où cela est possible, les femmes doivent pouvoir choisir la méthode, médicamenteuse ou chirurgicale, et recevoir une information détaillée. Cette information renforce la satisfaction des femmes après IVG. >>

### Épidémiologie de l'interruption volontaire de grossesse

- En 2021: 208.200 IVG en métropole
- Taux de recours de 14,9 IVG pour 1000 femmes de 15 à 49 ans en métropole (29,5 dans les DROM)  
  Pic chez les **20-29 ans** avec 24,8 IVG/1000 femmes.
- 1/3 des IVG est réalisé en ville
- 76% des IVG sont médicamenteuses
- Depuis l'autorisation de 2004: 1 IVG médicamenteuse sur 6 a lieu en libéral (soit 18.273 en 2007, 3/4 par gynécologue, 1/4 par médecin généraliste)

<figure class="figure border alert my-4">
  <div id="chart"></div>
  <figcaption><b>Figure. </b>Évolution du ratio d'avortement France entière de 1990 à 2021. (<em>Drees 2022</em>)<br>
  Le ratio d'avortement correspond au rapport entre le nombre d'IVG et le nombre de naissances vivantes. En 2021, 30 IVG pour 100 naissances vivantes (<em>Drees 2022</em>)</figcaption>
</figure>
<script>
const chartOptions = {
  series: [{
    name: "Ratio d'avortement",
    data: [[1990, 0.26], [1991, 0.27], [1992, 0.26], [1993, 0.27], [1994, 0.27], [1995, 0.26], [1996, 0.27], [1997, 0.27], [1998, 0.27], [1999, 0.27], [2000, 0.25], [2001, 0.27], [2001, 0.27], [2002, 0.28], [2003, 0.27], [2004, 0.28], [2005, 0.27], [2006, 0.28], [2007, 0.28], [2008, 0.27], [2009, 0.27], [2010, 0.27], [2011, 0.27], [2012, 0.27], [2013, 0.28], [2014, 0.28], [2015, 0.28], [2016, 0.28], [2017, 0.28], [2018, 0.30], [2019, 0.31], [2020, 0.30], [2021, 0.30]]
  }],
  chart: {
    height: 256,
    type: 'line',
  },
  markers: {size: 0},
  stroke: { colors: ['#4150f5'], curve: 'smooth', width: 4 },
  title: { text: 'Évolution du ratio d\'avortement de 1990 à 2021' },
  xaxis: { tickAmount: 7 },
  yaxis: { decimalsInFloat: 2, tickAmount: 3 }
}
</script>

{{% /collapse %}}
{{%collapse "Traitement médical" %}}

{{%info%}}L'interruption de grossesse par un médecin généraliste en ville (ou sage-femme) est possible jusqu'à 9 SA, à condition d'une formation suffisante et de convention avec établissement de santé autorisé{{%/info%}}

### Conditions

{{%warning%}}Informer du risque d'échec de l'IVG médicamenteuse avec recours à la chirurgie possible{{%/warning%}}

Les métrorragies (témoin de l'efficacité) surviennent 3 à 4 heures après la prise du misoprostol.  
Les douleurs abdomino-pelviennes sont quasi-constantes.

### Grossesse de moins de 7 SA

{{%info%}}

- Mifépristone 600 mg par voie orale (Mifégyne® 200 mg cp)
- À 24-48h: misoprostol 400 µg par voie orale (Gymiso® 200 µg cp)

OU

- Mifépristone 200 mg par voie orale (Mifégyne® 200 mg cp)
- À 24-48h: misoprostol 400 µg par voie transmuqueuse orale ou sublinguale (Gymiso® 200 µg cp)
{{%/info%}}

> Voie transmuqueuse orale: placer les comprimés entre la joue et la gencive, puis avaler les fragments résiduels après 30 minutes.

**Visite de contrôle à 2 semaines** SYSTÉMATIQUE pour vérifier l'expulsion (IVG chirurgicale sinon, possible jusqu'à 14 SA).

### Grossesse de 7 à 9 SA

{{%info%}}

- Mifépristone 200 mg par voie orale (Mifégyne® 200 mg cp)
- À 24-48h: misoprostol 800 µg par voie transmuqueuse orale ou sublinguale (Gymiso® 200 µg cp)
{{%/info%}}

{{%class%}}Taux de grossesse évolutive: < 8 SA - 0,5% | 8-9 SA - 1,5%{{%/class%}}

### Grossesse après 9 SA

Traitement chirurgical uniquement passées 9 semaines d'aménorrhée.

{{% /collapse %}}
{{%collapse "Déroulement de l'IVG" %}}

Toute patiente qui désire une IVG doit obtenir un rendez-vous **dans les 5 jours** suivant son appel.  
Plus l'IVG intervient précocement pendant la grossesse, plus le risque de complications est faible.

### Première consultation

- Informations claires et précises sur la procédure d'IVG et remise de documents écrits
- Temps de réflexion d'une semaine avant la 2<sup>e</sup> consultation
- Proposer un entretien spécialisé d'information, soutien et écoute (obligatoire pour les mineures)
- Préciser l'âge gestationnel par **date des dernières règles (DDR) + examen clinique + échographie pelvienne**

### 2<sup>e</sup> consultation

- Consentement écrit de la pratique de l'IVG
- Proposer le dépistage des [IST](/tags/ist/) (*[Chlamydia]({{< relref "chlamydia-trachomatis.md" >}})*, [VIH]({{< relref "vih-sida.md" >}})...), vérifier le statut du [frottis cervico-vaginal]({{< relref "cancer-col-uterus.md" >}})
- Aborder la [contraception]({{< relref "contraception.md" >}}) future, possibilité de la prescrire en avance
- **Groupe sanguin ABO-Rhésus systématique**

**NB.** Comprendre l'échec de la contraception actuelle + éducation à la [contraception d'urgence]({{< relref "contraception-urgence.md" >}}).

### 3<sup>e</sup> consultation

- Conditions de réalisation de l'IVG à domicile: compréhension, distance domicile – centre hospitalier référent (ouvert 24/7) de maximum 1 heure. Laisser le choix du lieu: domicile ou hôpital.
- Expliquer la conduite à tenir en cas de survenue d'effets indésirables (hémorragie, douleur) + support écrit
- Remise de fiche de liaison avec les éléments essentiels  
- Prise de **mifépristone**  
  Remettre une fiche de conseils sur les suites normales de l'IVG + numéro de téléphone à appeler en cas d'urgence
- Délivrance du **misoprostol** si prise à domicile.  
  Sinon revenir en consultation dans 36-48h.  
  Si prise à domicile et Rhésus négatif: injection immédiate des immunoglobulines anti-D
- Intérêt de ne pas être seule lors de la prise du misoprostol à domicile.
- Prescription d'antalgiques de palier 1 (ibuprofène à dose antalgique) et 2
- Prescription de la contraception  
  **NB.** Contraception hormonale (progestative ou COP) doit être débutée le jour de la prise de la prostaglandine.
- Évaluer l'intérêt d'un arrêt de travail

### 4<sup>e</sup> consultation: si choix de prise avec le médecin généraliste

- Prise du misoprostol + check-list ci-dessus
- Prévention de l'incompatibilité rhésus si femme Rhésus négatif: immunoglobulines anti-D 200 µg IM au plus tard dans les 72h qui suivent les saignements.
- Visite de contrôle OBLIGATOIRE  
  Prévue entre 14 et 21<sup>e</sup> jour post-IVG
- Examen clinique, dosage bêta-hCG plasmatiques OU échographie pelvienne  
  Recours à l'IVG chirurgicale si échec.
- Vérifier l'observance de la contraception
- Proposer un accompagnement psychologique

{{% /collapse %}}
{{%collapse "Prévention des IVG" %}}

[Contraception efficace]({{< relref "contraception.md" >}}) adaptée pour tous les couples en âge de procréer en l'absence de désir de grossesse.  
Informer sur le recours à la [contraception d'urgence]({{< relref "contraception-urgence.md" >}}).

{{% /collapse %}}
{{%collapse "Conduite à tenir pour une interruption volontaire de grossesse" "show" %}}

{{< mermaid title="Prise en charge d'une IVG par le médecin généraliste. Dr JB Fron d'après HAS 2021" >}}
graph TB
  demande[Demande d'IVG]
  style demande stroke:#4150f5, stroke-width:1px
    demande --> cs("Calcul du terme (DDR)<br>&plusmn; examen")
    cs --> orientation("Orienter pour RDV sous 5j<hr>0 800 08 11 11<br>ivglesadresses.org")
      orientation -- "&lt; 10 SA" --> med(Traitement médical<br>ambulatoire)
        med --> suivi("<b>Consultation de suivi</b><hr>- Contrôle à J14-J21<br>- bHCG, examen<br>- Contraception<br>&plusmn; Prévention alloI rhésus<br>- Suivi psychologique")
      orientation -- 10-14 SA --> chir(Aspiration chirurgicale) --> suivi
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Drees. Interruptions volontaires de grossesse : la baisse des taux de recours se poursuit chez les plus jeunes en 2021. Études et résultats. 2022.](https://drees.solidarites-sante.gouv.fr/publications-communique-de-presse/etudes-et-resultats/interruptions-volontaires-de-grossesse-la)
- [HAS. Interruption volontaire de grossesse par méthode médicamenteuse - Mise à jour. 12/04/2021.](https://www.has-sante.fr/jcms/p_3223429/fr/interruption-volontaire-de-grossesse-par-methode-medicamenteuse-mise-a-jour)
- [HAS. La HAS valide l'extension de l'IVG médicamenteuse à domicile jusqu'à 9 semaines. 10/04/2020.](https://www.has-sante.fr/jcms/p_3179352/fr/la-has-valide-l-extension-de-l-ivg-medicamenteuse-a-domicile-jusqu-a-9-semaines)
- [Drees. 224300 interruptions volontaires de grossesse en 2018. Septembre 2019.](https://drees.solidarites-sante.gouv.fr/etudes-et-statistiques/publications/etudes-et-resultats/article/224-300-interruptions-volontaires-de-grossesse-en-2018)
- [HAS. Réévaluation de la stratégie de dépistage des infections à Chlamydia trachomatis. 23/10/2018.](https://www.has-sante.fr/jcms/c_2879401/fr/reevaluation-de-la-strategie-de-depistage-des-infections-a-chlamydia-trachomatis)
- [CNGOF.  Contraception – Recommandations pour la pratique clinique. 2018](http://www.cngof.fr/pratiques-cliniques/recommandations-pour-la-pratique-clinique?folder=RPC%2BCOLLEGE%252F2018)
- [HAS. Réévaluation de la stratégie de dépistage de l'infection à VIH en France. Mars 2017.](https://www.has-sante.fr/jcms/c_2024411/fr/reevaluation-de-la-strategie-de-depistage-de-l-infection-a-vih-en-france)
- [CNGOF. L'interruption volontaire de grossesse. Recommandations pour la pratique clinique. 2016. (PDF)](http://www.cngof.fr/pratiques-cliniques/recommandations-pour-la-pratique-clinique/apercu?path=RPC%2BCOLLEGE%252F2016%252FRPC_2016_IVG.pdf)
- [HAS. Interruption volontaire de grossesse par méthode médicamenteuse. Décembre 2010. (PDF)](https://www.has-sante.fr/portail/upload/docs/application/pdf/2011-04/ivg_methode_medicamenteuse_-_recommandations_-_mel_2011-04-28_11-39-11_882.pdf)

{{%/sources%}}
