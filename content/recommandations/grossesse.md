+++
title = "Grossesse"
prefix = "la "
noindex = true
description = "TODO:"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2022-06-27T13:48:14+02:00"
publishdate = "2023-01-03"
lastmod = "2023-01-03"
specialites = ["gynecologie-obstetrique"]
annees = "2022"
sources = ["CNGOF", "SFD"]
tags = ["depistage", "prevention"]
anglais = []
sctid = ""
draft = true
image = false
imageSrc = ""
todo = "HTA gravidique"
+++

{{%article-summary%}}

- 0 alcool et 0 tabac pendant la grossesse
- [Calendrier de grossesse de GestaClic](http://gestaclic.fr/calculette.html)

Chapitres dédiés:

- [Arrêt du tabac]({{< relref "arret-tabac.md" >}})
- [Acné pendant la grossesse]({{< relref "acne.md" >}})
- [Contraception du post-partum]({{< relref "contraception.md" >}})
- [Diabète gestationnel]({{< relref "diabete-gestationnel.md" >}})
- [Infection urinaire pendant la grossesse]({{< relref "infection-urinaire-cystite-pyelonephrite.md" >}})
- [Interruption volontaire de grossesse]({{< relref "interruption-volontaire-grossesse.md" >}})

{{%/article-summary%}}
{{%collapse "Médicaments et vaccins pendant la grossesse" %}}

### Médicaments pendant la grossesse

Contrôler la sécurité d'utilisation d'un médicament pendant la grossesse ou l'allaitement.

<form class="d-flex align-items-center my-4">
  <div class="floating-label textfield-box form-ripple flex-grow-1">
    <label for="grossesse-crat">Médicament</label>
    <input class="form-control" id="grossesse-crat" type="search">
  </div>
  <button class="btn btn-primary ml-3" onClick="window.open(`http://lecrat.fr/articleSearchSaisie.php?recherche=${document.getElementById('grossesse-crat').value}`); return false;">Rechercher</button>
</form>

{{< references/le-crat >}}

### Vaccins chez la femme enceinte

Vaccins à réaliser pendant la grossesse ([fiche Vaccination]({{< relref "vaccination.md" >}})):

- dTcaPolio à chaque grossesse entre 20 et 36 SA (BoostrixTetra, Repevax)
- En période épidémique: grippe, Covid-19

> {{< references/calendrier-vaccinal >}}

{{% /collapse %}}
{{%collapse "Vomissements pendant la grossesse" %}}

> Prise en charge des nausées et vomissements gravidiques d'après les recommandations *CNGOF 2022*

Nausées et vomissements gravidiques
: Nausées et vomissements débutant au premier trimestre de grossesse en l'absence d'autre étiologie.
: Ils sont **non compliqués** en l'absence de critères d'hyperémèse gravidique.
: Atteint 50-90% des femmes enceintes. Souvent modérés sans atteinte de la qualité de vie et cèdent à la fin du premier trimestre. Cependant 35% ont des symptômes invalidants avec un impact marqué sur la vie personnelle. 0,3 à 3,6% sont hospitalisées.

Hyperémèse gravidique (hyperemesis gravidarum HG)
: Nausées et vomissements gravidiques sévères avec au moins un critère parmi: amaigrissement ≥ 5%, signe de déshydratation, {{< modal-btn modal-puqe >}}score PUQE ≥ 7{{< /modal-btn >}}.
: L'origine de l'hyperémèse gravidique est mal comprise. Elle est un facteur de risque de naissance prématurée et de petit poids de naissance. Pour la mère, risque de troubles ioniques et carentiels à l'origine d'une encéphalopathie de Gayet-Wernicke ainsi qu'un retentissement psychiatrique pouvant persister (stress, troubles anxio-dépressifs, idées suicidaires, stress post-traumatique). Risque de récidive de 15-81%.
: Diagnostic différentiel: hépatite, pancréatite, appendicite, pyélonéphrite, torsion d'annexe, hyperthyroïdie.

{{< outils/variation-poids >}}

{{%warning%}}

### Critères d'hospitalisation pour vomissements gravidiques

Proposer une hospitalisation en cas d'hyperémèse gravidique avec au moins un critère parmi:

- Amaigrissement ≥ 10%
- Signes de déshydratation  
  Soif intense, pli cutané, hypotension orthostatique puis permanente, tachycardie compensatrice, aplatissement des jugulaires externes, oligurie, sécheresse cutanée.
- {{< modal-btn modal-puqe >}}Score PUQE ≥ 13{{< /modal-btn >}}
- Hypokaliémie < 3 mmol/L
- Hyponatrémie < 120 mmol/L
- Créatininémie > 100 µmol/L (1,13 mg/dL)
- Résistance au traitement
{{%/warning%}}

Pour en savoir plus: durant l'hospitalisation, pas d'isolement, supplémentation systématique en vitamine B1 (thiamine) voire K.

### Examens complémentaires

En cas de vomissements non compliqués: échographie obstétricale seule pour éliminer une cause secondaire de vomissements (grossesse multiple ou môlaire).

#### Bilan d'une hyperémèse gravidique

- Bilan sanguin: ionogramme, créatininémie, bandelette urinaire
- Échographie obstétricale

### Traitement des vomissements pendant la grossesse

Prise en charge et traitements recommandés pour les vomissements pendant la grossesse:

- Arrêter les vitamines et la supplémentation en fer, sauf la vitamine B9
- Adapter le mode de vie selon les préférences personnelles
- <mark>Traitements de première intention</mark>
  - Consultation de contrôle à 72 heures nécessaire
  - Doxylamine
  - Doxylamine + pyroxidine
  - Dimenhydrinate
  - Symptômes légers ({{< modal-btn modal-puqe >}}Score PUQE < 6{{< /modal-btn >}})  
    Gingembre, ~~vitamine B6 (pyridoxine)~~, acupression, acupuncture, électrostimulation même si leur efficacité n'est pas prouvée.
- Traitement de 2<sup>e</sup> intention  
  Métoclopramide
- Soutien psychologique
- Ne pas utiliser: aromathérapie
- Aggravation des symptômes sous traitement: bilan complémentaire  
  NFS, CRP, ASAT, ALAT, lipasémie, TSH, T4L, échographie abdominale.

#### Prise en charge des vomissements sévères

Prise en charge de l'hyperémèse gravidique:

- Hospitalisation si critères remplis (voir plus haut)  
  sinon essai des traitements de première intention (voir plus haut).
- Soutien psychologique
- Association de patientes  
  [Association de lutte contre l'hyperémèse gravidique](https://www.associationhg.fr) et [9 mois avec ma bassine](https://www.facebook.com/9moisavecmabassine/).

Sur prescription spécialisée uniquement pour l'hyperémèse gravidique: ondansétron, corticoïdes IV en dernier recours. (TODO: annexe 6)

TODO: Figure 1

{{% /collapse %}}
{{%collapse "Pour en savoir plus: Poids pendant la grossesse" %}}

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

Il est déconseillé de descendre sous 1600 kcal/j (même si obésité, *[Eades et al 2017](https://pubmed.ncbi.nlm.nih.gov/28531829/)*)

### Objectif de prise de poids pendant la grossesse

{{< table title="Prise de poids recommandée selon l'indice de masse corporelle avant la grossesse. Dr JB Fron d'après IOM Pregnancy Weight Guidelines 2009" >}}
| Morphotype   | IMC avant grossesse (kg/m²) | Prise de poids recommandée <br>pendant la grossesse (kg) |
|--------------|----------------------------:|---------------------------------------------------------:|
| Maigreur     |                      < 18,5 |                                                12,5 - 18 |
| Poids normal |                 18,5 - 24,9 |                                                11,5 - 16 |
| Surpoids     |                   25 - 29,9 |                                                 7 - 11,5 |
| Obésité      |                        ≥ 30 |                                                    5 - 9 |
{{< /table >}}

{{% /collapse %}}
{{%sources%}}

- [Deruelle P. et al. Consensus formalisé d'experts du Collège national des gynécologues et obstétriciens français : prise en charge des nausées et vomissements gravidiques et de l'hyperémèse gravidique. Gynécologie Obstétrique Fertilité & Sénologie. 2022. (PDF)](http://www.cngof.fr/pratiques-cliniques/recommandations-pour-la-pratique-clinique/apercu?path=RPC%2BCOLLEGE%252F2023%252FCFE-Nausees-et-vomissements-gravidiques-2022.pdf)
- [Louvet et al; SFD. Nutrition et diabète gestationnel. Recommandations de bonnes pratiques. 2022. (PDF)](https://www.sfdiabete.org/sites/www.sfdiabete.org/files/files/ressources/reco_nutrition_diabete_gestationnel_2022.pdf)

{{%/sources%}}
{{% modal title="Score PUQE des vomissements gravidiques" id="modal-puqe"%}}

{{< scores/puqe >}}

{{% /modal %}}

≤≥±®æœŒÈ³ÂSpO<sub>2</sub>
