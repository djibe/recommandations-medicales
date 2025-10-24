+++
id = "0190e8be-576f-7e5c-806e-12b0ca3f7291"
title = "Certificat d'absence de contre-indication à la pratique du sport (CACI)"
prefix = "le "
titleSeo = "Certificat contre-indication sport"
description = "Recommandations pour l'établissement du certificat d'absence de contre-indication à la pratique du sport CACI. Examens complémentaires, ECG, épreuve d'effort"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2020-10-08T20:02:41+02:00"
publishdate = "2020-10-08"
lastmod = "2025-07-03"
specialites = ["certificats"]
annees = "2025"
sources = ["JO", "SFC"]
tags = ["épreuve effort", "prévention"]
english = []
sctid = ""
icd10 = ["Z02.7"]
image = true
imageSrc = "Le certificat médical d'absence de contre-indication (CACI) à la pratique du sport. pikisuperstar / Freepik"
chart = true
todo = "rein unique, Bio > 35 ans, type 1A (sources 12-13), quel examen clinique, https://www.has-sante.fr/upload/docs/application/pdf/2018-10/guide_aps_chapitre_6_la_consultation_medicale_ap.pdf, duree certif plongee, https://pubmed.ncbi.nlm.nih.gov/36256586/, https://www.fmfpro.org/est-ce-que-les-CACI-servent-vraiment-a-quelque-chose/, https://www.conseil-national.medecin.fr/sites/default/files/external-package/bulletin/1vyilzi/medecins_89.pdf"
flowchart = true
+++

{{%article-summary%}}

- Personnes majeures: un certificat sportif est valable 3 ans sauf exceptions (voir *[Disciplines nécessitant un certificat](#disciplines-nécessitant-un-certificat-de-sport-annuel)*)
- Pour les mineurs: [questionnaire de santé QS - Sport](https://www.formulaires.service-public.fr/gf/cerfa_15699.do) sauf exceptions (cf ci-dessus). Certificat médical requis uniquement si au moins 1 réponse positive.  
  Pour les parents: [simulateur de Service-public.fr](https://www.service-public.fr/simulateur/calcul/certificatMedical) pour savoir si un certificat est requis.
- Préciser l'accès aux compétitions le cas échéant
- Pour les indications à l'ECG, au test d'effort et à l'échocardiographie: voir [Bilans](#bilans-chez-les-sportifs)
- Informer systématiquement sur les *[10 règles d'or](#information-des-sportifs)* de la pratique sportive et l'intérêt de l'apprentissage du massage cardiaque
- La consultation n'est pas prise en charge par l'*Assurance Maladie*
- La mort subite atteint (quasi) exclusivement les hommes d'âge moyen et il est bien plus efficace d'apprendre à réaliser le massage cardiaque, de signaler les symptômes à l'effort et de corriger les facteurs de risque cardiovasculaire avant les accidents
- Certificats des fédérations: [basketball](/print/ffbasket.pdf), [football](/print/fffoot.pdf), [plongée](/print/ffplongee.pdf), [tir](/print/fftir.pdf), [volleyball](/print/ffvolley.pdf)

Chapitres liés: [certificats médicaux de l'adulte]({{% relref "certificats-medicaux-majeurs.md" %}}), [test d'effort]({{% relref "epreuve-effort.md" %}})

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Certificat médical d'absence de contre-indication à la pratique sportive (CACI)
: Réglementé par les dispositions du code du sport (L. 231-2 et L. 231-2-3) qui prévoient la présentation d'un license de moins d'un an pour l'inscription à une fédération sportive.
: La présentation du certificat médical est exigée tous les 3 ans pour les adultes.  
Les autres années, le licencié (ou son représentant légal) renseigne un questionnaire de santé [QS-SPORT](https://www.formulaires.service-public.fr/gf/cerfa_15699.do).
: Les mineurs complètent un [questionnaire de santé](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043486824) sauf sport à risque (voir *Disciplines nécessitant un certificat...*) ou réponse positive au *questionnaire de santé*.

{{%info%}}
Absence de preuve formelle de l'efficacité des bilans proposés pour prévenir la mort subite pendant le sport chez des sujets asymptomatiques. (*Marijon 2021*)

---

Tous mes remerciements au Pr E. Marijon pour sa relecture attentive de cette section
{{%/info%}}

Mort subite du sportif
: Environ 1000 cas/an (sur 40.000 morts subites annuelles). Elle atteint quasi exclusivement des hommes (95%) d'âge moyen (46,6 ans en moyenne) avec une pratique de loisir (5% de jeunes athlètes, 20/an).
: Le risque de mort subite d'une femme (5% des cas) est infime (30x inférieure à 45-54 ans).
: La cause n'est pas retrouvée dans 75% des cas (manque d'autopsies). Elle est principalement coronaire (75%) et inaugurale pour la moitié; et aussi cardiopathie non ischémique (15-20%), troubles du rythme (5-10%). Avant 35 ans, la 1^re^ cause est la cardiomyopathie hypertrophique.  
\> 50% avaient eu des symptômes typiques dans le mois qui précède.
: 93% des cas surviennent en présence d'un témoin.  
La survie sans séquelles dépend énormément de la formation de la population au massage cardiaque. La survie à la sortie d'hospitalisation atteint désormais 66,7% en France contre 24% il y a quelques années.

> -- *Marijon 2021*

{{< figure-chart title="Incidence moyenne annuelle de la mort subite du sportif par million de sportifs de 15 à 75 ans selon l'âge et le sexe. Dr JB Fron d'après Marijon 2013" >}}

<script>
const chartOptions1 = {
  series: [{
    name: 'Femmes',
    data: [0.39, 0.47, 0.5, 0.49, 0.67, 0.62]
  }, {
    name: 'Hommes',
    data: [4.01, 6.53, 10.18, 14.81, 17.46, 8.5]
  }],
  colors:['#ff0581', '#4150f5'],
  chart: { height: 280 },
  title: { text: 'Incidence annuelle de la mort subite chez le sportif' },
  subtitle: { text: 'Par million de participants par tranche d’âge' },
  xaxis: { categories: ['15-24', '25-34', '35-44', '45-54', '55-64', '65-75'] },
  yaxis: { decimalsInFloat: 0, min: 0 },
  tooltip: {
    y: { formatter: function (val) { return val + ' morts subites/million' } }
  }
}
</script>

### Abréviations

CACI
: certificat d'absence de contre-indication

EE
: épreuve d'effort

FMT
: fréquence maximale théorique

FRCV
: facteur de risque cardiovasculaire

MS
: mort subite
{.dl-inline}

{{% /collapse %}}
{{%collapse "Disciplines nécessitant un certificat de sport annuel" %}}

Dites << disciplines à contraintes particulières >> nécessitant un certificat médical annuel:

1. Plongée subaquatique y compris souterraine
2. Compétitions avec risque de choc "rendant incapable de se défendre"  
  Arts martiaux, boxe.
3. Utilisation d'arme à feu ou à air comprimé  
  Tir, ball-trap, biathlon.
4. *Compétitions* avec conduite de véhicule terrestre à moteur  
  Sport auto, motocyclisme ... sauf karting ou modélisme automobile radioguidé.
5. Disciplines motonautiques

> -- *Décret 2023-853 du 31 août 2023*

L'inscription à une *compétition* nécessite la présente d'une license sportive datant de moins de 3 ans. En l'absence de license, d'un certificat médical de moins d'un an.

{{% /collapse %}}
{{%collapse "Considérations cliniques" %}}

{{%warning%}}

### Signes d'appel chez le sportif

- Baisse récente des performances
- Sensation de limitation
{{%/warning%}}

- Activité  
  Type, fréquence, intensité, niveau.
- Antécédents familiaux  
  Cardiopathie, mort subite.
- Antécédents personnels
- Facteurs de risque cardiovasculaire et {{< modal-btn modal-risque-cv >}}risque cardiovasculaire{{< /modal-btn >}}
- Vaccinations
- Examen clinique rachis et cardio-vasculaire +++
  - Pression artérielle aux 2 bras, fréquence cardiaque
  - Souffle cardiaque, palpation des fémorales
  - Signes de Marfan
  - Examen couché et debout
- Contre-indications
  - Cardiomyopathie, myocardite (temporaire)
  - Sport de combat. Myopie forte, organe pair unique. Avis ophtalmo.
  - Plongée. Antécédent de pneumothorax, troubles ORL
- Éducation (voir *Information des sportifs*)
- Enquête familiale  
  Indications: mort subite chez ≤ 45 ans ou cause héréditaire avérée.
- Porteur de défibrillateur  
  Seuls les sports de type 1A sont autorisés (bowling, golf, pétanque).

{{% /collapse %}}
{{%collapse "Bilans chez les sportifs: ECG, test d'effort" %}}

### Indications à l'électrocardiogramme chez le sportif

Critères de réalisation d'un électrocardiogramme (ECG) 12 dérivations chez le sportif de haut niveau ou licencié (compétition ou non):

- 12-25 ans: tous les 3 ans
- 25-35 ans: un ECG si jamais eu
- Adulte de haut niveau: une échocardiographie

> -- *SFC 2022*

### Indications au test d'effort maximal

- Homme +40 ans ou femme ménopausée sédentaire reprenant une {{< modal-btn modal-met >}}activité intense{{< /modal-btn >}}
- Sportif symptomatique ([angor]({{% relref "syndrome-coronarien-chronique.md" %}}), perte de performances)
- Sportif à {{< modal-btn modal-risque-cv >}}risque cardiovasculaire élevé ou très élevé{{< /modal-btn >}}

> -- *SFC 2022*

[Liste nationale de centres de tests d'effort recommandés par le Club des Cardiologues du Sport (non exhaustive)](https://www.clubcardiosport.com/etablissements-v02-max)

{{% /collapse %}}
{{%collapse "Information des sportifs" %}}
  
> << Appeler - masser - défibriller >> (93% des morts subites au sport arrivent devant témoin) -- *[FédéCardio: Savez-vous sauver ?](https://www.fedecardio.org/je-me-teste/savez-vous-sauver/)*

Informer sur les 10 règles d'or pour le sportif:

1. Signaler toute douleur dans la poitrine ou essoufflement anormal à l'effort
2. Signaler toute palpitation cardiaque survenant à l'effort ou juste après
3. Signaler tout malaise survenant à l'effort ou juste après
4. Respecter un échauffement et une récupération de 10 minutes lors des activités sportives
5. Boire 3 à 4 gorgées d'eau toutes les 30 minutes (exercice et compétition)
6. Éviter les activités intenses en cas de température extrême (< 5°C ou > 30°C) ou de pic de pollution
7. Ne pas fumer et jamais dans les 2 heures qui suivent le sport
8. Jamais de dope et éviter l'automédication
9. Pas de sport intense en cas de fièvre ou dans les 8 jours suivant un épisode grippal  
  Informer: les microbes ne sont pas éliminés par la sueur.
10. Bilan médical avant de reprendre une activité sportive à partir de 35 ans chez l'homme, 45 ans chez la femme

> -- *[ClubCardioSport. Les 10 règles d'or. Argumentaire. (PDF)](https://www.clubcardiosport.com/sites/www.clubcardiosport.com/files/inline-files/argu_scientifique.pdf)*

{{% /collapse %}}
{{%collapse "FMC gratuites" %}}

{{< card-link-external title="Documentation des Cardiologues du Sport" url="https://www.clubcardiosport.com/documentation" subtitle="Club Cardio Sport">}}

{{< card-link-external title="MOOC Prescrire le sport santé sur ordonnance" url="https://www.mooc-sportsante.com/course/prescrire-le-sport-sante-sur-ordonnance/" subtitle="Par l'IRBMS">}}

{{< card-link-external title="Guide méthodologique Sport et Santé" url="https://www.mooc-sportsante.com/course/guide-methodologique/" subtitle="Par l'IRBMS">}}

{{% /collapse %}}
{{%collapse "Choix du bilan chez le sportif" "show" %}}

{{< mermaid title="Prise en charge du dépistage cardiovasculaire du sportif par le médecin généraliste. Dr JB Fron d'après SFC 2022" >}}
graph TB
  suspicion["<b>Sportif de haut niveau<br>ou licencié ?</b>"] -- Oui --> ECG("<b>ECG</b><br>—<br>- 12-25 ans:<br>tous les 3 ans<br>- 25-35 ans: 1 ECG<br>si jamais eu") --> testEffort("<b>Test d'effort</b><br>—<br>Indications:<br>- Sédentaire (H +40 ans<br>ou F ménopausée)<br>reprenant activité intense<br>- Sportif symptomatique<br>- Sportif à risque<br>cardiovasculaire élevé") --> ETT("<b>ETT</b> chez l'adulte<br>de haut niveau")
  style suspicion stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Kim JH, et al. A contemporary review of sudden cardiac arrest and death in competitive and recreational athletes. Lancet. 2024.](https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)02086-5/abstract)
- [Journal Officiel. Décret n° 2023-853 du 31 août 2023 relatif à la liste des disciplines sportives à contraintes particulières. Legifrance.](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000050038179)
- [CCS, GERS-P. Position commune du Club des Cardiologues du Sport (CCS) et du Groupe Sport (GERS-P) de la Société Française de Cardiologie sur le bilan cardio-vasculaire recommandé pour la pratique sportive. 2022.](https://www.sfcardio.fr/publication/recommandations-sur-le-bilan-cardiovasculaire-recommande-pour-la-pratique-sportive)
- [Karam N, et al. Evolution of Incidence, Management, and Outcomes Over Time in Sports-Related Sudden Cardiac Arrest. J Am Coll Cardiol. 2022.](https://www.sciencedirect.com/science/article/abs/pii/S0735109721081572)
- [Marijon E, et al. Prévention de la mort subite du sportif : état des lieux. Archives des Maladies du Coeur et des Vaisseaux - Pratique. 2021.](https://doi.org/10.1016/J.AMCP.2021.04.003)
- [Anys S, et al. Faut-il un screening cardiaque du sportif : pour ou contre ?. La Revue du Praticien. 2021.](https://www.larevuedupraticien.fr/article/faut-il-un-screening-cardiaque-du-sportif-pour-ou-contre-2)
- [Journal Officiel. Décret 2021-564. 07/05/2021.](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043486809)
- [CNOM. Certificats de non contre-indication à la pratique du sport. Médecins n°69. sept-oct 2020](https://www.conseil-national.medecin.fr/sites/default/files/external-package/bulletin/m05mhm/medecins_69.pdf)
- [Marijon E, et al. Characteristics and Outcomes of Sudden Cardiac Arrest During Sports in Women. Circ Arrhythm Electrophysiol. 2013.](https://doi.org/10.1161/circep.113.000651)
- [Marijon E, et al. Incidence of Sports-Related Sudden Death in France by Specific Sports and Sex. JAMA. 2013;310(6):642-643.](https://jamanetwork.com/journals/jama/fullarticle/1728703)
- [Marijon E, et al. Sports-Related Sudden Death in the General Population. Circulation. 2011.](https://doi.org/10.1161/CIRCULATIONAHA.110.008979)
- [Société Française de Cardiologie (SFC). Recommandations concernant le contenu du bilan cardiovasculaire de la visite de non contre indication à la pratique du sport en compétition entre 12 et 35 ans. 2009.](https://www.sfcardio.fr/publication/recommandations-concernant-le-contenu-du-bilan-cardiovasculaire-de-la-visite-de-non)
- [CNOM. Certificats de non contre indication à la pratique du sport](https://www.conseil-national.medecin.fr/publications/communiques-presse/certificats-indication-pratique-sport)
- [Club des Cardiologues du Sport](https://www.clubcardiosport.com/)

### Bibliographie en attente

- SFC 2009
- [Recommendations for competitive sports participation in athletes with cardiovascular disease: A consensus document from the Study Group of Sports Cardiology of the Working Group of Cardiac Rehabilitation and Exercise Physiology and the Working Group of Myocardial and Pericardial Diseases of the European Society of Cardiology.](https://academic.oup.com/eurheartj/article/26/14/1422/560900)
- [Recommendations for participation in leisure-time physical activity and competitive sports of patients with arrhythmias and potentially arrhythmogenic conditions Part II: Ventricular arrhythmias, channelopathies and implantable defibrillators.](https://academic.oup.com/eurjpc/article/13/5/676/5933252)
- [Eligibility and Disqualification Recommendations for Competitive Athletes With Cardiovascular Abnormalities: Preamble, Principles, and General Considerations: A Scientific Statement From the American Heart Association and American College of Cardiology.](https://www.sciencedirect.com/science/article/pii/S0735109715065481)
- [Recommendations for participation in leisure-time physical activity and competitive sports of patients with arrhythmias and potentially arrhythmogenic conditions. Part 2: ventricular arrhythmias, channelopathies, and implantable defibrillators: A position statement of the Section of Sports Cardiology and Exercise from the European Association of Preventive Cardiology (EAPC) and the European Heart Rhythm Association (EHRA), both associations of the European Society of Cardiology.](https://academic.oup.com/europace/article/23/1/147/5864077)
- [FFESSM. Recommandations de bonnes pratiques suivi médical du plongeur. 01/04/2021.](https://medical.ffessm.fr/actualites/recommandations-de-bonnes-pratiques-suivi-medical-du-plongeur)

{{%/sources%}}
{{% modal title="Risque cardiovasculaire selon ESC 2021" id="modal-risque-cv"%}}

{{< clinique/risque-cardiovasculaire >}}

{{% /modal %}}
{{% modal title="Intensité d'activité physique et MET" id="modal-met"%}}

{{< clinique/activite-physique-intensite >}}

{{% /modal %}}
