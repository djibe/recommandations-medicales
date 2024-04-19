+++
title = "Le projet des Recommandations médicales"
noindex = true
description = "Présentation du projet RecoMédicales développé pour tous les médecins généralistes. Créé pour accéder à l'information nécessaire aux soins primaires"
longHtml = true
breadcrumbTitle = "Projet"
auteurs = ["Jean-Baptiste FRON"]
date = "2021-07-06T09:56:35+02:00"
publishdate = "2021-07-07"
lastmod = "2023-06-16"
todo = "https://ansm.sante.fr/actualites/lansm-publie-un-rapport-sur-la-consommation-des-antibiotiques-entre-2000-et-2020"
chart = true
+++

<img class="figure-img img-fluid mb-5" src="/images/icons/projet.svg" loading="eager" decoding="async" importance="high" fetchpriority="high" alt="RecoMédicales: le projet" style="border-radius:24px">

Je suis Jean-Baptiste Fron, médecin généraliste diplômé à Lille en 2014. En parallèle de mon activité de médecin généraliste, je maintiens depuis 2019 le projet RecoMédicales. Vous trouvez actuellement +200 fiches pratiques que j'ai compilées à partir des publications des sociétés savantes de référence et que j'essaie de faire valider par des spécialistes du domaine.
{.typography-body-1}

## Motivation du projet

Comme tous mes confrères, je suis confronté quotidiennement à la nécessité d'obtenir rapidement les éléments de référence pour réaliser des prises en charge de qualité au cours de mes consultations de médecine générale. À cet effet, je me heurte à plusieurs obstacles, que je liste ci-dessous.

### L'état de l'art évolue rapidement et sa dissémination aux généralistes est très limitée

L'**État de l'art** est dispersé sur internet (HAS, sociétés savantes ...), dans des documents trop longs, souvent dans des PDF dissimulés. Il n'est pas adapté aux soins primaires, quand il n'est tout simplement pas détenu par des éditeurs à but lucratif (Elsevier...). De plus, le rythme des publications est rapide.

> Les progrès de la médecine n'atteignent guère les généralistes

### Le généraliste ne peut tout savoir et ne peut souvent pas accéder aux informations pertinentes en temps utile pour la consultation

Le médecin généraliste est le premier intervenant de la grande majorité des soins. Il est donc exposé à tous les motifs de consultation, sans avoir toujours accès aux informations nécessaires pour offrir un premier bilan optimal.

Il ne peut pas tout savoir, et l'humain ne retient au mieux que 10% de ce qu'il apprend. Seul un assistant informationnel permettrait de résoudre ce dilemme.

> L'information pertinente doit être accessible rapidement pendant la consultation

### La formation médicale continue (FMC) est peu efficace

La FMC des médecins est obligatoire depuis le 24 avril 1996 ([CN FMCH. L'obligation de formation médicale continue (PDF)](https://solidarites-sante.gouv.fr/IMG/pdf/diapos_fmcph.pdf)), et la loi a été renforcée plusieurs fois depuis lors.

Pourtant, des exemples comme les *prescriptions d'antibiotiques* ou le *suivi du diabète* (voir ci-dessous) ne montrent pas de signes d'amélioration à la hauteur du temps de formation consacré.

Plus simplement, 30% des diabétiques traités par monothérapie n'avaient pas de metformine en 2019 (*Assurance Maladie. Charges et Produits 2019*) ou 30% des personnes traitées par Lévothyrox n'avaient pas eu de dosage de la TSH avant la prescription (*HAS 2022*).

> Si un schéma ne donne pas les résultats escomptés, il faut en chercher d'autres

{{< figure-chart title="Consommation d'antibiotiques en secteur de ville en France sur la période 2009-2019 (<a href='https://www.santepubliquefrance.fr/maladies-et-traumatismes/infections-associees-aux-soins-et-resistance-aux-antibiotiques/resistance-aux-antibiotiques/documents/rapport-synthese/la-consommation-d-antibiotiques-en-secteur-de-ville-en-france-2009-2019.-synthese-preliminaire-des-indicateurs-disponibles-sous-geodes' rel='external nofollow noopener'>Santé Publique France</a>).<br><b>DQD:</b> doses quotidiennes définies/1000 hab/j (DDD en anglais)" >}}

<script>
const chartOptions1 = {
  series: [{
    name: "DQD",
    data: [[2009, 23.3], [2010, 23.4], [2011, 24], [2012, 24.2], [2013, 24], [2014, 23.1], [2015, 23.8], [2016, 24.1], [2017, 23], [2018, 22.8], [2019, 22.2]]
  }],
  chart: {
    height: 192,
    type: 'line',
  },
  stroke: { colors: ['#4150f5'], curve: 'smooth', width: 4 },
  title: { text: 'Consommation en ville de tous les antibiotiques à usage systémique' },
  yaxis: { decimalsInFloat: 1, min: 0 }
}
</script>
{{< figure-chart title="Proportion de personnes diabétiques traitées pharmacologiquement ayant bénéficié des examens de suivi recommandés, France entière en 2001, 2007 et 2013. Dr JB Fron d’après <em><a href='https://www.santepubliquefrance.fr/maladies-et-traumatismes/diabete/documents/article/suivi-des-examens-recommandes-dans-la-surveillance-du-diabete-en-france-en-2013' rel='external nofollow noopener'>Fosse-Edorh 2015</a></em> et <a href='https://www.santepubliquefrance.fr/maladies-et-traumatismes/diabete/articles/etude-entred-2001-2003' rel='external nofollow noopener'>Entred 2001-2003</a>.<br><b>Légende:</b> Au moins 1 examen réalisé dans l’année pour chaque item (3 pour l’HbA<sub>1c</sub>)" id="chart-2" >}}
<script>
const chartOptions2 = {
  series: [{
    name: '2001',
    data: [30, 32, 43, 30, 72, 16, 66]
  }, {
    name: '2007',
    data: [35, 33, 62, 38, 80, 26, 71]
  }, {
    name: '2013',
    data: [35, 36, 62, 50, 84, 30, 74]
  }],
  theme: { monochrome: { enabled: true }},
  fill: { opacity: 0.6 },
  markers: { size: 2, hover: {
        size: 5
      } },
  chart: { height: 480, type: 'radar' },
  title: { text: 'Diabétiques ayant bénéficié des examens recommandés' },
  xaxis: {
    categories: ['Cs cardiologique ou ECG', 'Cs dentaire', 'Cs ophtalmo/2 ans', '3 HbA1c', 'Créatininémie', 'Microalbuminurie', 'Bilan lipidique'],
    labels: {
      style: { colors: ['#757575', '#757575', '#757575', '#757575', '#757575', '#757575', '#757575'] }
    }
  }
}
</script>
{{< figure-chart title="Indicateurs de qualité du parcours des patients à risque ou atteints de bronchopneumopathie chronique obstructive (BPCO). Dr JB Fron d’après <a href='https://www.has-sante.fr/upload/docs/application/pdf/2022-04/iqss_2022_-_indicateurs_bpco_developpement-_synthese_mars_2022.pdf' rel='external nofollow noopener'>HAS 2022 (PDF)</a>.<br><b>Légende:</b> Indicateurs en partant de midi: Taux de dépistage des personnes à risque de BPCO, couverture vaccinale antigrippale annuelle, spirométrie ou EFR annuelle. Après hospitalisation pour exacerbation de BPCO: consultation de suivi dans les 7 jours (Cs J7), réévaluation pneumologique dans les 2 mois (Cs J60), bronchodilatateur de longue durée (BDLA), recours à la réhabilitation respiratoire" id="chart-3" >}}
<script>
const chartOptions3 = {
  series: [{
    name: '2022',
    data: [21.3, 52.7, 34.2, 41.9, 30.9, 74, 31.1]
  }],
  theme: { monochrome: { enabled: true }},
  fill: { opacity: 0.6 },
  markers: { size: 2, hover: {
        size: 5
      } },
  chart: { height: 360, type: 'radar' },
  title: { text: 'Parcours de soins de la BPCO' },
  xaxis: {
    categories: ['Dépistage', 'Vaccin grippe', 'Spirométrie', 'Cs J7', 'Cs J60', 'BDLA', 'Réhabilitation'],
    labels: {
      style: { colors: ['#757575', '#757575', '#757575', '#757575', '#757575', '#757575', '#757575'] }
    }
  }
}
</script>

### Un texte ne suffit pas

Comme tous les médecins, mes notes au format texte ne m'ont pas permis d'appréhender la complexité croissante de la médecine moderne: des scores, des arbres de décisions se décrivent difficilement avec des mots.

Cette limitation est récurrente sur les sites existants, pourtant d'une grande qualité: [Medg.fr](https://www.medg.fr/), [ebmfrance](https://www.ebmfrance.net), [doctofiche](https://doctofiche.fr), [inanutshell](https://www.inanutshell.ch/fr/), [Medix](http://www.medix.free.fr), [Ordotype](https://www.ordotype.fr), [Wikimedecine](https://www.wikimedecine.fr/Accueil), [wikimedi.ca](https://wikimedi.ca/wiki/Accueil), [WeLinkCare](https://www.welinkcare.com).

**RecoMédicales** n'est pas adapté aux étudiants (voir [ECNi](https://www.ecni.fr), [Freecn](https://www.freecn.io) et [prepECN](https://prepecn.com)).

> L'outil doit être dynamique en cas de forte complexité (scores, escalade thérapeutique ...)

## Objectifs du Projet

Le projet << RecoMédicales >> vise à produire un démonstrateur de plateforme informatique **permettant à tous les généralistes d'accéder rapidement aux informations médicales les plus récentes nécessaires à chaque prise en charge**.

Le démonstrateur doit être **hautement interactif, simple d'emploi, gratuit et Open Source**.

Le **contenu** de la plateforme opérationnelle suivant le démonstrateur devra être **validé** par les autorités médicales et/ou spécialistes respectifs, et **tenu à jour en permanence**.

**L'effort pourra alors être principalement consacré à la création, la validation et la mise à jour du contenu médical de la plateforme opérationnelle, ainsi qu'à sa maintenance.**

**Cette plateforme pourrait également être utile à la formation permanente et/ou au retour d'expérience.**

## Résultats actuels et moyens mis en œuvre

Chaque personne compétente pourra juger sur le site à quel point ces objectifs sont déjà atteints.

Il faut noter que le développement du démonstrateur a demandé un effort limité au regard des bénéfices attendus. Le démonstrateur disponible sur ce site a nécessité environ 1,5 ans de travail à temps partiel, avec des compétences médicales et informatiques.

## Prochaines étapes

- Finalisation du démonstrateur (fiches, validation, etc.)
- Engagement d'agence de santé
- Démonstrations aux praticiens, autorités et organisations compétentes, médias spécialisés
- Test par un échantillon significatif de praticiens

## Remerciements

Je tiens ici à remercier tous ceux qui m'ont soutenu dans ce projet, mon épouse médecin généraliste, les spécialistes qui ont bien voulu vérifier et valider les différentes fiches, et tous ceux qui m'aident, me conseillent et m'encouragent.

Je vous remercie pour votre attention,

*Dr Jean-Baptiste FRON*
{.lead .mt-5}
