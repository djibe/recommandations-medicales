+++
title = "Endométriose"
prefix = "l'"
shortname = "Endométriose"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2021-04-03T13:12:00+02:00
publishdate = 2021-04-05
lastmod = 2021-04-05
specialites = ["gynecologie-obstetrique"]
annees = "2017"
sources = ["CNGOF", "HAS"]
tags = ["contraception", "douleur pelvienne"]
anglais = []
sctid = ""
draft = true
flowchart = true
image = false
imageSrc = ""
todo = "EHP-5, prescrire, autres sources"
+++

{{%article-summary%}}

- Le diagnostic est clinique
- Prise en charge seulement quand symptomatique ou avec retentissement
- Examen gynécologique et échographie pelvienne
- Contraception œstroprogestative ou DIU au LNG
- IRM pelvienne et avis du spécialiste si signes profonds, désir de grossesse, échec du traitement ou masse ovarienne

{{%/article-summary%}}
{{%collapse "Définition" %}}

Endométriose
: Atteinte pelvienne féminine de définition histologique avec la présence de glandes ou stroma endométrial en dehors de l'utérus.  
Elle est pathologique lorsqu'elle entraîne des **douleurs pelviennes** ou une **infertilité**.
: L'origine de l'endométriose est multifactorielle avec l'action de facteurs génétiques (hérédité), environnementaux et liés aux menstruations (ménarche précoce, volume important, cycles courts).  
Il n'existe pas d'arguments pour une aggravation de l'importance et l'étendue des lésions endométriosiques avec le temps.
: Aucune association endométriose-cancer de l'ovaire n'est prouvée.

Endométriose superficielle
: Endométriose limitée au péritoine.

Endométriose profonde
: Endométriose infiltrant l'espace rétropéritonéal ou les viscères.

Endométriome ovarien
: Kyste endométriosique de l'ovaire.

Dysménorrhée
: Douleurs pelviennes ou dorsales menstruelles ou quelques jours avant.

### Abréviations

**DIU:** dispositif intra-utérin (ou stérilet)  
**EHP-5:** échelle de qualité de vie {{%lang%}}Endometriosis Health Profile-5{{%/lang%}}  
**LNG:** lévonorgestrel  
**TV:** toucher vaginal

{{% /collapse %}}
{{%collapse "Clinique" %}}

{{%info%}}Pas de bilan complémentaire en dysménorrhée isolée contrôlée par une contraception (sauf souhait de grossesse immédiat).{{%/info%}}

### Interrogatoire

- Dysménorrhées intenses
  - Intensité ≥ 8 (EAN)
  - Résistance aux paliers 1
  - Absentéisme
  - Qualité de vie: {{< modal-btn modal-score-ehp5 >}}échelle EHP-5{{< /modal-btn >}}
- Signes de lésions profondes
  - Dyspareunies profondes
  - Douleurs à la défécation à recrudescence cataméniale
  - Signes fonctionnels urinaires à recrudescence cataméniale
- Infertilité

### Examen clinique

- Examen gynécologique orienté
  - Lésions bleutées à l'examen
  - Palpation de nodules  
  Au niveau des ligaments utérosacrés ou du cul-de-sac de Douglas
  - Douleur en mise en tension des ligaments utérosacrés
  - Utérus rétroversé
  - Annexes fixées au TV

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

Pas de bilan biologique.

### Échographie pelvienne

Dans le bilan initial, pour une évaluation de l'extension des lésions.  
L'écho a les mêmes performances que l'IRM pour le diagnostic d'endométriome.

L'échographie endovaginale peut faire partie du bilan de 2<sup>e</sup> intention.

Après la ménopause, avis gynécologique systématique en cas d'endométriome.

**NB.** Pas de surveillance par imagerie des patientes asymptomatiques.

### IRM pelvienne

Indications:

- Symptômes d'endométriose profonde
  - Dyspareunies profondes
  - Douleurs à la défécation à recrudescence cataméniale
  - Signes fonctionnels urinaires à recrudescence cataméniale
- Résistance au traitement médical
- Masse ovarienne indéterminée

Pour le bilan d'extension en vue d'un suivi gynécologique.

{{% /collapse %}}
{{%collapse "Traitement" %}}

{{%info%}}Tout traitement autre que la contraception et l'antalgie relève du spécialiste.{{%/info%}}

### Mesures générales

- Antalgie
  - Palier 1
  - Éviter les AINS au long cours
  - Évaluation spécialisée en douleurs chronique  
  Gynéco, douleur, sexologue, psychologue, assistant social.
- Autres
  - Acupuncture, ostéopathie, yoga
  - Aucun régime ou supplémentation n'a de bénéfice prouvé

### Traitements de première intention

- Contraception orale combinée (COC = œstroprogestative)
- DIU au lévonorgestrel 52 mg

Chez l'adolescente: COC ou microprogestative et avis si échec.

### Traitements de deuxième intention

- Contraception orale microprogestative au désogestrel
- Implant à l'étonogestrel
- Diénogest
- GnRHa en association

### Infertilité

Accompagnement par une équipe d'Assistance Médicale à la Procréation (AMP).

{{% /collapse %}}
{{%collapse "Conduite à tenir devant une endométriose" "show" %}}

{{< mermaid title="Conduite à tenir devant une suspicion d'endométriose. Dr JB FRON d'après HAS 2017" >}}
graph TB
  endometriose["<b>Suspicion d'endométriose</b><hr>- Dysménorrhées intenses<br>- Dyspareunies<br>- Douleurs pelviennes<br>non menstruelles<br>- Infertilité"] --> clinique("- Symptômes<br>- Évaluation du retentissement<br>(EAN, EHP-5, absentéisme)<br>- Examen gynécologique<br>- Échographie pelvienne")
  style endometriose stroke:#006ef4, stroke-width:1px
    clinique --> indicationsBilan("- Signes d'endométriose profonde ?<br>(dyspareunies, dl défécation, SFU)<br>- Infertilité ?<br>- Endométriome en écho ?")
      indicationsBilan -- Non --> souhaitGrossesse(Souhait de grossesse&nbsp;?)
        souhaitGrossesse -- Non --> contraception(Contraception hormonale)
          contraception -- Efficace --> poursuite(Poursuite sans bilan)
          contraception -- Résistance --> bilan
        souhaitGrossesse -- Oui --> bilan
      indicationsBilan -- Oui --> bilan("<b>Bilan d'endométriose profonde</b><hr>- IRM pelvienne<br>&#177; Écho endovaginale")
{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Sources" %}}

- [HAS et CNGOF. Prise en charge de l’endométriose. Recommandation de bonne pratique. Décembre 2017.](https://www.has-sante.fr/jcms/c_2819733/fr/prise-en-charge-de-l-endometriose)

{{% /collapse %}}
{{% modal title="Échelle EHP-5" id="modal-score-ehp5"%}}

{{< scores/ehp5 >}}

{{% /modal %}}
