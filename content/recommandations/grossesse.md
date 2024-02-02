+++
title = "Grossesse"
prefix = "la "
noindex = true
description = "Recommandations de prise en charge au cours de la grossesse: événements physiologiques ou pathologiques"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2022-06-27T13:48:14+02:00"
publishdate = "2023-02-06"
lastmod = "2024-01-31"
specialites = ["gynecologie-obstetrique"]
annees = "2022"
sources = ["CNGOF", "CRAT", "SFD"]
tags = ["depistage", "grossesse", "prevention"]
anglais = ["Pregnancy"]
sctid = "118185001"
icd10 = ""
image = true
imageSrc = "Illustration de la grossesse par stories / Freepik"
todo = "fiche ANSM vaccins, grossesse altitude, critères TSH, dépression post-partum http://beh.santepubliquefrance.fr/beh/2023/18/2023_18_1.html"
chart = true
+++

{{%article-summary%}}

*Vaste chapitre en chantier*

- 0 alcool et 0 tabac pendant la grossesse, interroger à chaque consultation
- Vaccins grippe et coqueluche à chaque grossesse et 3 doses cumulées de Covid-19
- [Nata](https://play.google.com/store/search?q=NATA&c=apps): l'appli officielle du suivi de grossesse multilingue
- Besoins en [calcium]({{< relref "apports-calcium.md" >}}): 1 g/j (*IOF*)

Chapitres dédiés:

- [Acné pendant la grossesse]({{< relref "acne.md" >}})
- [Alimentation pendant la grossesse (MangerBouger)](https://www.mangerbouger.fr/manger-mieux/a-tout-age-et-a-chaque-etape-de-la-vie/les-recommandations-et-conseils-avant-pendant-et-apres-la-grossesse/manger-equilibre-avant-pendant-et-apres-la-grossesse)
- [Anémie]({{< relref "anemie.md" >}})
- [Arrêt du tabac]({{< relref "arret-tabac.md" >}}) et de l'[alcool]({{< relref "sevrage-alcool.md" >}})
- [Contraception du post-partum]({{< relref "contraception.md" >}})
- [Covid-19 à haut risque de forme grave]({{< relref "covid-19.md" >}})
- [Dépression]({{< relref "depression.md" >}})
- [Diabète gestationnel]({{< relref "diabete-gestationnel.md" >}})
- [Écoulement mamelonnaire]({{< relref "ecoulement-mamelonnaire.md" >}})
- [Hémorroïdes]({{< relref "hemorroides.md" >}})
- [Hypertension artérielle et grossesse]({{< relref "hypertension-arterielle.md" >}})
- [Hypothyroïdie pendant la grossesse]({{< relref "hypothyroidie.md" >}})
- [Incontinence fécale]({{< relref "incontinence-fecale.md" >}})
- [Infection urinaire pendant la grossesse]({{< relref "infection-urinaire-cystite-pyelonephrite.md" >}})
- [Interruption volontaire de grossesse]({{< relref "interruption-volontaire-grossesse.md" >}})
- [Mycoses pendant la grossesse]({{< relref "mycoses-dermatophytes-candidoses.md" >}})
- [Phlébite et score LEFt pendant la grossesse]({{< relref "thrombose-veineuse-profonde.md" >}})
- [Post-partum]({{< relref "post-partum.md" >}})
- [Reflux pendant la grossesse]({{< relref "reflux-gastro-oesophagien.md" >}})
- [Syndrome du canal carpien]({{< relref "syndrome-canal-carpien.md" >}})
- [Varicelle pendant la grossesse]({{< relref "varicelle.md" >}})
- [Violences faites aux femmes]({{< relref "violences-femmes.md" >}})
- [Vomissements et nausées pendant la grossesse]({{< relref "vomissements-grossesse-hyperemese-gravidique.md" >}})

{{%/article-summary%}}
{{%collapse "La maternité en France"%}}

{{< figure-chart title="Évolution du nombre de maternités en France métropolitaine et naissances vivantes depuis 1975. Dr JB Fron d’après Drees Les établissements de santé - édition 2022 (fiche 21). NB. Échelle non linéaire en abscisse" >}}

<script>
const chartOptions = {
  series: [{
    name: 'Maternités',
    data: [1369, 1035, 814, 695, 581, 519, 471, 458]
  },
  {
    name: 'Naissances vivantes',
    data: [745.065, 768.461, 734.338, 774.782, 796.896, 790.290, 719.737, 696.900]
  }],
  chart: { type: 'line', height: 280 },
  markers: { size: 0 },
  stroke: { colors: ['#4150f5', '#ffa600'], curve: 'smooth', width: 4 },
  title: { text: 'Évolution du nombre de maternités en France métropolitaine' },
  xaxis: { categories: [1975, 1985, 1996, 2000, 2006, 2012, 2018, 2020] },
  yaxis: [
    {
      title: { text: 'Maternités'},
      labels: { style: { colors: '#757575' }},
      decimalsInFloat: 0,
      tickAmount: 4,
      min: 0
    },
    {
      opposite: true,
      title: { text: 'Naissances vivantes (milliers)' },
      decimalsInFloat: 1,
    }
  ],
  tooltip: {
    y: [{ formatter: function(value) { return value} },
      { formatter: function(value) { return value }}]
  },
}
</script>

Malgré ces fermetures de maternités, **43 %** des maternités ont réalisé en 2020 **moins de 3 accouchements par jour**. – *[Drees Les établissements de santé - édition 2022 (fiche 21)](https://drees.solidarites-sante.gouv.fr/publications-documents-de-reference-communique-de-presse/panoramas-de-la-drees/les-etablissements)*
{.alert .alert-info}

{{% /collapse %}}
{{%collapse "Calendrier de grossesse" %}}

{{< card-link-external title="Calendrier gestationnel" url="http://gestaclic.fr/calculette.html" subtitle="par GestaClic" >}} {{< card-link-external title="Calendrier de grossesse" url="https://www.perinat-nef.org/public-2/calendrier-de-grossesse/" subtitle="par nef" >}}

{{< outils/terme >}}

{{% /collapse %}}
{{%collapse "Désir de grossesse et bilan pré-conceptionnel" %}}

### Désir de grossesse

Prise de 0,4 à 0,8 mg/j d'acide folique (*USPTF*)

[HAS. Projet de grossesse : informations, messages de prévention, examens à proposer. 2009. (PDF)](https://www.has-sante.fr/upload/docs/application/pdf/2010-01/projet_de_grossesse_informations_messages_de_prevention_examens_a_proposer_-_fiche_de_synthese.pdf)

{{% /collapse %}}
{{%collapse "Médicaments et vaccins pendant la grossesse" %}}

{{< references/le-crat >}}

### Vaccins chez la femme enceinte

Vaccins à réaliser pendant la grossesse ([chapitre dédié Vaccination]({{< relref "vaccination.md" >}})):

- Covid-19 ARNm au 1er trimestre (RR de réanimation sans vaccination: 18)
- dTcaPolio à chaque grossesse entre 20 et 36 SA (BoostrixTetra, Repevax)
- Avant ou en début de période épidémique: [grippe]({{< relref "grippe.md" >}})

> – {{< references/calendrier-vaccinal >}} et *Vaccination Info Service*

{{< card-link-external title="Tableau Vaccins et grossesse" url="https://ansm.sante.fr/uploads/2022/04/27/20220427-dossier-medicament-grossesse-vaccins-tableau.pdf" subtitle="par l'ANSM" >}}

{{% /collapse %}}
{{%collapse "Prévention de l'allo-immunisation Rhésus D" %}}

Pour toutes les femmes: double détermination du groupe sanguin RhD et rechercher d'agglutinines irrégulières (RAI) dès le premier trimestre de grossesse.

### Femme Rhésus D négatif

- Information sur l'immunisation anti-rhésus D (dépistage, suivi, prévention)
- Détermination du RhD chez le conjoint  
  Si le conjoint est RhD+ ou inconnu : génotypage RhD fœtal sur sang maternel à partir de 11 SA (que la grossesse soit unique ou multiple)
- Si génotypage RhD fœtal:
  - Fœtus RhD positif: injection d'immunoglobuline humaine anti-D (IgRh, [Rhophylac® 300](https://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=68484547&typedoc=R)) à 28 SA (avant si évènement à risque)
  - Fœtus RhD négatif: 2e génotypage après 15 SA à au moins 2 semaines du premier. Si RhD négatif confirmé, pas de prévention d'allo-immunisation nécessaire.
  - Le RhD fœtal ne peut être déterminé sur 2 prélèvements: considérer comme RhD positif

> – *CNGOF 2017*

{{% /collapse %}}
{{%collapse "Imageries et grossesse" %}}

Un scanner thoraco-abdominopelvien avec ou sans injection de produit de contraste peut être réalisé s'il est indiqué pour la mère, << la balance bénéfice/risque de cet examen devant prévaloir à la décision de sa réalisation >>.

> – *CNGOF/SFMU/SFAR 2022*

{{% /collapse %}}
{{%collapse "Urgences pendant la grossesse" %}}

### Traumatisme pendant la grossesse

Chute ou traumatisme thoraco-abdominal non grave: examen obstétrical systématique après 20 SA

> – *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement imminent

Signes prédictifs d'accouchement imminent à l'interrogatoire:

- Multiparité
- Antécédent d'accouchement extrahospitalier ou rapide
- Contractions utérines douloureuses et rapprochées
- Envie de pousser

Toucher vaginal avant appel urgent de l'équipe obstétricale prévue.

En ville, position gynécologique suggérée pour pouvoir réaliser la manœuvre de Mc Roberts (décubitus dorsal, cuisses hyperfléchies sur le tronc et avec possibilité d'abaisser la tête fœtale dans l'axe ombilico-coccygien).

Pas d'épisiotomie systématique.

> – *CNGOF/SFMU/SFAR 2022*

### Menace d'accouchement prématuré (MAP)

Pas de transport en SAMU systématique des MAP.

> – *CNGOF/SFMU/SFAR 2022*

{{% /collapse %}}
{{%collapse "Prise de poids pendant la grossesse" %}}

*Section en chantier*
{.alert .alert-info}

AET
: apport énergétique total
{.dl-inline}

### Augmentation des besoins énergétiques au cours de la grossesse

{{< table title="Augmentation des besoins énergétiques pendant la grossesse selon Anses 2019" class="table-sm" >}}
| Terme de la grossesse | Augmentation des apports (kcal/j) |
|-----------------------|----------------------------------:|
| T1                    |                                70 |
| T2                    |                               260 |
| T3                    |                               500 |
| Allaitement           |                               500 |
{{< /table >}}

> *[Anses. Avis de l'Agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail relatif à l'actualisation des repères alimentaires du PNNS pour les femmes enceintes ou allaitantes. 2019. (PDF)](https://www.anses.fr/fr/system/files/NUT2017SA0141.pdf)*

Il est déconseillé de descendre sous 1600 kcal/j (même si [obésité]({{< relref "obesite-adulte.md" >}}), *[Eades et al 2017](https://pubmed.ncbi.nlm.nih.gov/28531829/)*)

### Objectif de prise de poids pendant la grossesse

{{< table title="Prise de poids recommandée selon l'indice de masse corporelle avant la grossesse. Dr JB Fron d'après IOM Pregnancy Weight Guidelines 2009" >}}
| Morphotype   | IMC avant grossesse (kg/m²) | Prise de poids recommandée <br>pendant la grossesse (kg) |
|--------------|----------------------------:|---------------------------------------------------------:|
| Maigreur     |                      < 18,5 |                                                12,5 - 18 |
| Poids normal |                 18,5 - 24,9 |                                                11,5 - 16 |
| Surpoids     |                   25 - 29,9 |                                                 7 - 11,5 |
| Obésité      |                        ≥ 30 |                                                    5 - 9 |
{{< /table >}}

> *[Louvet et al; Société Francophone du Diabète (SFD). Nutrition et diabète gestationnel. Recommandations de bonnes pratiques. 2022. (PDF)](https://www.sfdiabete.org/sites/www.sfdiabete.org/files/files/ressources/reco_nutrition_diabete_gestationnel_2022.pdf)*

{{% /collapse %}}
{{%collapse "FMC gratuites" %}}

{{< card-link-external title="MOOC Santé mentale périnatale au cours des 1000 premiers jours" subtitle="EPSM et PATH ..." url="https://pns-mooc.com/fr/mooc/25/presentation">}}

{{< youtube id="NA3R3ZdaBew" title="Déni de grossesse : percevoir les grossesses non perçues (Pédagogie Numérique en Santé)" >}}

{{% /collapse %}}
{{%sources%}}

- [Ministère de la Santé. Vaccination contre le Covid-19 et maternité. 2023. (PDF)](https://sante.gouv.fr/IMG/pdf/fiche_-_vaccination_contre_le_covid-19_et_maternite.pdf)
- [Vaccination Info Service. Femmes enceintes. 06/06/2023.](https://professionnels.vaccination-info-service.fr/Recommandations-vaccinales-specifiques/Personnes-exposees-a-des-risques-specifiques/Femmes-enceintes)
- [Medqual. La vaccination des femmes enceintes. VacciNews 03. 2023. (PDF)](https://medqual.fr/images/VACCINEWS/LETTRES/VACCINEWS_3.pdf)
- [US Preventive Services Task Force, Barry MJ et al. Folic Acid Supplementation to Prevent Neural Tube Defects: US Preventive Services Task Force Reaffirmation Recommendation Statement. JAMA. 2023.](https://jamanetwork.com/journals/jama/fullarticle/2807739)
- [CNGOF, SFMU, SFAR. Prise en charge des urgences obstétricales en médecine d'urgence. Recommandations de Pratiques Professionnelles. 2022.](https://sfar.org/prise-en-charge-des-urgences-obstetricales-en-medecine-durgence/)
- [CNGOF. Vaccin anti SARS-CoV-2 et grossesse 3e injection ? Avis du 17 novembre 2021. (PDF)](http://www.cngof.net/Publications-CNGOF/Pratique-clinique/COVID-19/CNGOF-GRIG-171021-3e%20dose%20vaccin%20anti%20SARS-COV2%20femmes%20enceintes.pdf)
- [CNGOF. Prévention de l'allo-immunisation Rhésus D chez les patientes de groupe Rhésus D négatif. 2017. (PDF)](https://cngof.fr/rpc/)

### Bibliographie en attente

- [HAS. Situations pathologiques pouvant relever de l'hospitalisation à domicile au cours de l'ante et du post-partum. 2011.](https://www.has-sante.fr/jcms/c_1066375/fr/situations-pathologiques-pouvant-relever-de-l-hospitalisation-a-domicile-au-cours-de-l-ante-et-du-post-partum)
- [Boisseau N. Physical Activity During the Perinatal Period: Guidelines for Interventions During the Perinatal Period from the French National College of Midwives. J Midwifery Womens Health. 2022.](https://onlinelibrary.wiley.com/doi/10.1111/jmwh.13425)
- [HAS. Grossesse, accouchement et suivi postnatal. Panorama.](https://www.has-sante.fr/jcms/p_3286443/fr/grossesse-accouchement-et-suivi-postnatal)
- [Service-Public. A-t-on droit à des absences liées à la grossesse dans la fonction publique ? 24/11/2023.](https://www.service-public.fr/particuliers/vosdroits/F34536)

{{%/sources%}}
