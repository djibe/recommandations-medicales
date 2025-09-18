+++
id = "0192fd62-5e36-7d55-8542-236d0ad0c8a2"
title = "Infertilité du couple"
titleSeo = "Infertilité du couple"
prefix = "l'"
description = "Recommandations pour la prise en charge de l'infertilité du couple. Bilan après 12 mois examen clinique, bilan hormonal FSH, échographie pelvienne, spermogramme"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2023-09-28T16:02:04+02:00"
publishdate = "2023-10-02"
lastmod = "2024-03-15"
specialites = ["gynécologie-obstétrique", "urologie"]
annees = "2023"
sources = ["CNGOF", "ESHRE", "AFU"]
tags = ["cancer", "coeliaque", "douleur pelvienne", "infertilite", "vaccin"]
english = ["Infertility"]
sctid = "8619003"
icd10 = ["N97", "N97.9", "N46"]
image = true
imageSrc = "L'infertilité du couple. vectorjuice / Freepik"
chart = true
flowchart = true
+++

{{%article-summary%}}

- L'infertilité est définie comme l'absence de grossesse après plus de 12 mois de rapports sexuels réguliers sans contraception. Le bilan est débuté dès 6 mois chez la femme à partir de 35 ans
- Les facteurs pronostiques principaux chez la femme: âge, poids et tabagisme
- L'examen clinique avec un interrogatoire exhaustif concerne l'homme et la femme et recherche d'autres facteurs de risque (pathologie pelvienne, infections génito-urinaires, traitement gonadotoxique ...)
- Le bilan d'infertilité de la femme comporte: TSH, sérologies IST, prélèvement vaginal, échographie pelvienne endovaginale 3D à J2-J3, AMH si AMP. Si {{< modal-btn modal-reserve-ovarienne >}}signe de baisse de la réserve ovarienne{{< /modal-btn >}}: bilan hormonal FSH, LH, œstradiol, AMH
- Bilan d'infertilité de l'homme: sérologies IST, spermogramme, spermocytogramme et spermoculture
- La prise en charge de l'infertilité associe des mesures hygiéno-diététique comme l'arrêt du tabac (voir *Traitement*), un régime méditerranéen et un suivi spécialisé dans un centre d'**Assistance Médicale à la Procréation** (AMP, [annuaire](https://www.procreation-medicale.fr/les-centres-autorises/))

{{%/article-summary%}}
{{%collapse "Définitions" %}}

Infertilité (ou infécondité)
: Selon l'*OMS*: absence de grossesse après plus de 12 mois de rapports sexuels réguliers sans contraception. Elle est primaire ou secondaire selon la survenue antérieure de grossesse dans le couple.
: Elle est dite **inexpliquée** en cas de bilan normal du couple avant 40 ans.
: Facteurs pronostiques principaux chez la femme: âge, poids (IMC > 35 divise par 2 à 4), tabagisme (dose-dépendant).
: Un couple sur 5 consulte pour infertilité.

Stérilité
: Incapacité totale pour un couple d'avoir un enfant. Elle concerne 4% des couples en France. **Terme à éviter**.

{{< table title="Définitions des anomalies au spermogramme et spermocytogramme. Dr JB Fron d'après *OMS 2021*" class="table-wrap" >}}
| Terme          | Définition                                                                                                           |
|----------------|----------------------------------------------------------------------------------------------------------------------|
| Hypospermie    | Volume d'éjaculat < 1,4 mL à 2 reprises                                                                              |
| Oligospermie   | Numération < 15 M/mL ou < 39 millions de spermatozoïdes dans l'éjaculat                                              |
| Azoospermie    | Absence totale de spermatozoïdes: obstructive (obstacle sur les voies excrétrices) ou non (défaut de spermatogenèse) |
| Asthénospermie | < 30% de spermatozoïdes mobiles                                                                                      |
| Tératospermie  | < 4% de spermatozoïdes normaux (Kruger) ou < 23% de spermatozoïdes (David modifiée)                                  |
| Nécrospermie   | > 46% de spermatozoïdes << morts >>                                                                                  |
{{< /table >}}

### Abréviations

AFU
: Association Française d'Urologie

AMH
: hormone antimüllérienne

AMP
: Assistance médicale à la procréation

CNGOF
: Collège National des Gynécologues et Obstétriciens Français

E2
: œstradiol

ESHRE
: {{%lang%}}European Society of Human Reproduction and Embryology{{%/lang%}}

GEU
: grossesse extra-utérine

HSG
: hystérosalpingographie

ICSI
: injection intracytoplasmique de spermatozoïde

SALF
: Société d'Andrologie de Langue Française
{.dl-inline}

### Fertilité selon l'âge de la femme

La fertilité est maximale avant 25 ans, diminue dès 31 ans, chute après 35 ans, dépasse 50% à partir de 40 ans et devient quasi nulle à 45 ans (où la grossesse devient à très haut risque).

En *AMP* les chances de grossesse avec naissance vivante sont très diminuées à partir de 40 ans et quasi nulles à partir de 43 ans. L'Assurance Maladie prend en charge l'AMP jusqu'au premier jour des 43 ans.

Chaque femme a une réserve ovarienne différente, maximale à la naissance.

Les marqueurs de **réserve ovarienne** sont: âge de la patiente, FSH et E2, AMH et compte des follicules antraux.

{{< figure-chart title="Taux d'accouchement par ponction en FIV (ICSI) en intraconjugal selon l'âge de la femme à la ponction en 2022 (Tableaux AMP15 et AMP23). Dr JB Fron d'après [Agence de la Biomédecine](https://rams.agence-biomedecine.fr/amp-avec-ovocytes-et-spermatozoides-du-couple)" >}}

<script>
const chartOptions1 = {
  chart: { type: 'bar', height: 256 },
  series: [
  {
    name: 'Taux par ponction - hors ICSI',
    type: 'column',
    data: [19.5, 18.2, 15.2, 12.4, 6.6, 2.0]
  },
  {
    name: 'Taux par ponction - ICSI',
    type: 'column',
    data: [17.7, 17.3, 13.7, 10.1, 6.5, 1.5]
  }],
  title: { text: 'Taux d’accouchement par ponction en FIV (ICSI et hors ICSI) selon l’âge de la femme' },
  xaxis: { categories: ['< 30', '30-34', '35-37', '38-39', '40-42', '≥ 43'] },
  yaxis: [
    {
      labels: {
        style: { colors: '#757575' }
      },
      decimalsInFloat: 0,
      tickAmount: 2,
      max: 100
    },
  ],
  tooltip: {
    y: [
      { formatter: function(value) { return `${value} %`; }},
      { formatter: function(value) { return `${value} %`; }}
    ] },
  dataLabels: {
    formatter: function(value) { return `${value} %`; }
  }
}
</script>

### Fertilité selon l'âge de l'homme

L'âge paternel réduit la fertilité spontanée, allonge le délai de conception et augmente le risque de fausses couches spontanées (FCS). Les risques obstétricaux, néonataux et malformatifs (dont trisomie 21) augmentent également avec son âge.

Les résultats des traitements de l'infertilité diminuent avec l'âge de l'homme.

L'Assurance Maladie prend en charge les frais d'AMP pour les hommes jusqu'à 60 ans.

{{% /collapse %}}
{{%collapse "Clinique" %}}

L'examen clinique concerne chaque membre du couple.

### Interrogatoire

- Comorbidités: diabète, épilepsie, maladie auto-immune
- Antécédents gynécologiques  
  Gestité, parité, [SOPK]({{% relref "syndrome-ovaires-polykystiques-sopk.md" %}}), hyperprolactinémie, aménorrhée, infections génitales dont IST, [salpingite]({{% relref "infections-genitales-hautes.md" %}}), [endométriose]({{% relref "endometriose.md" %}}), [IVG]({{% relref "interruption-volontaire-grossesse.md" %}}), GEU, chirurgies pelviennes ([appendicectomie]({{% relref "appendicite-aigue.md" %}}), myomectomie).
- Antécédents masculins  
  Fertilité antérieure, [cryptorchidie]({{% relref "cryptorchidie.md" %}}), [épididymite]({{% relref "infection-genitale-uretrite-orchiepididymite.md" %}}), torsion du testicule, traumatisme ou [cancer du testicule]({{% relref "cancer-testicule.md" %}}), [hernie inguinale]({{% relref "hernie-parietale.md" %}}) dans l'enfance, oreillons, infections génito-urinaires, [IST](/tags/ist/), chimiothérapie, expositions professionnelles (boulanger, cuisinier, pesticides, solvants, radiations, sauna, hammam).
- Antécédents familiaux (consanguinité, hypofertilité, médicaments pendant la grossesse, thrombophilie, [ménopause précoce]({{% relref "insuffisance-ovarienne-prematuree.md" %}}), mucoviscidose)
- Traitements en cours
- Toxiques: [alcool]({{% relref "sevrage-alcool.md" %}}), [tabac]({{% relref "arret-tabac.md" %}}) (consommation, paquets-années), cannabis, autres
- Activité physique
- Régime alimentaire, dépister un TCA ({{< modal-btn modal-scoff >}}questionnaire SCOFF{{< /modal-btn >}}) (*HAS/FFAB 2019*)
- Suivi gynécologique, dernier frottis cervico-vaginal
- Date d'arrêt de la contraception
- Durée et régularité des cycles
- **Signes de baisse de la réserve ovarienne**
  {{< clinique/reserve-ovarienne >}}
- Symptômes: dysménorrhée, douleurs pelviennes
- Fréquence et distribution sur le cycle des rapports sexuels (fenêtre ovulatoire, troubles relationnels)
- Troubles sexuels: dyspareunie, [dysfonction érectile]({{% relref "dysfonction-erectile.md" %}}) ou sexuelle ([éjaculation prématurée]({{% relref "ejaculation-prematuree.md" %}}) ...)
- Situation de précarité, vulnérabilité
- Vaccinations

### Examen clinique

- Poids et variations, taille, IMC
- Pression artérielle
- Femme
  - Signes d'hyperandrogénie  
    {{< clinique/hyperandrogenie >}}.
  - Examen des seins, galactorrhée
  - Examen gynécologique
- Homme
  - Hypogonadisme: pilosité, gynécomastie
  - L'examen physique par un urologue ou andrologue: hypospadias, varicocèle, verge, volume testiculaire et consistance, épididyme, canaux déférents

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

> << Aucune exploration invasive ne doit avoir lieu tant que les investigations de base, moins invasives, n'ont pas été réalisées >>. -- *CNGOF 2010*

L'*OMS* préconise le bilan **à partir du stade d'infertilité** (12 mois de rapports réguliers sans contraception). Le *CNGOF* 6 mois après 35 ans et 12 mois avant.

Évaluation selon les facteurs de risque chez la femme après **35 ans** ou en cas de facteur spécifique (traitement gonadotoxique, salpingite, ou de l'homme: cryptorchidie, épididymite, torsion aiguë du cordon spermatique, traumatisme testiculaire, cure de hernie inguinale dans l'enfance, monorchidie, varicocèle).

### Bilan de l'infertilité chez la femme

- [TSH](/tags/tsh/)
- Sérologies [VIH]({{% relref "vih-sida.md" %}}), [VHB]({{% relref "hepatite-b.md" %}}), [VHC]({{% relref "hepatite-c.md" %}}), [syphilis]({{% relref "syphilis.md" %}}), rubéole, toxoplasmose ± [varicelle]({{% relref "varicelle.md" %}})
- Prélèvement vaginal
- Échographie pelvienne endo-vaginale 3D à J2-J3
- Si {{< modal-btn modal-reserve-ovarienne >}}signe de baisse de la réserve ovarienne{{< /modal-btn >}}: bilan hormonal (de J2 à J4): **FSH**, LH, œstradiol, AMH
- Si AMP: bilan hormonal AMH de J2 à J4
- Considérer: [sérologie *Chlamydia*]({{% relref "chlamydia-trachomatis.md" %}}), [sérologie cœliaque]({{% relref "maladie-coeliaque.md" %}}) (systématique selon *ESsCD* par IgA totales, IgA anti-transglutaminase)
- Suspicion de pathologie tubo-pelvienne (GEU, appendicite compliquée, chirurgie pelvienne, maladie inflammatoire pelvienne, endométriose, *Chlamydia* ou hydrosalpynx):
  - Hystérosalpingographie (HSG) ou hystérosonographie en première partie de cycle  
    En première intention selon *CNGOF 2010*.
  - Cœlioscopie
- Suspicion d'anomalie endo-cavitaire: hystéroscopie
- Bilan normal avant 30 ans: proposer cœlioscopie

En cas de découverte d'endométriose minime à légère, l'infertilité n'est plus décrite comme *inexpliquée*.

> Les tests non cités ci-dessus (ex. test post-coïtal, prolactine) ne sont pas recommandés en dehors d'une prescription par un centre spécialisé.

### Bilan de l'infertilité chez l'homme

Bilan à la recherche d'une cause d'infertilité masculine:

- Sérologies VIH, VHB, VHC, syphilis
- Spermogramme, spermocytogramme et spermoculture  
  Après 2-7 jours d'abstinence (*AFU/SALF*), dans un laboratoire expérimenté. En cas de résultat < 5^e^ percentile, nouvel examen à 3 mois.
- Anomalie du spermogramme, pathologie testiculaire suspectée ou bilan du couple normal: échographie testiculaire
- Hypogonadisme, anomalie du spermogramme, troubles sexuels: FSH et testostérone libre entre 8 et 11h

Consultation d'andrologie en cas d'anomalie du spermogramme.

{{% /collapse %}}
{{%collapse "Traitement de l'infertilité" %}}

> [!WARNING]
> << Il est donc recommandé de ne pas proposer de prise en charge médicale d'infécondité à une patiente au-delà de 43 ans >>. -- *CNGOF 2010*
> << Il est recommandé de discuter au cas par cas la prise en charge de l'homme infécond à partir de l'âge de 60 ans >>. -- *CNGOF 2010*

Informer sur la chute de la fertilité liée à l'âge.

La prise en charge spécialisée de l'infertilité après un an relève du centre d'**Assistance Médicale à la Procréation** (AMP, [annuaire](https://www.procreation-medicale.fr/les-centres-autorises/)).

Adresser après 6 mois de rapports non protégés chez la femme après 35 ans ou en cas de facteur de risque d'infertilité (voir *Clinique*), 12 mois avant 35 ans.

### Mesures hygiéno-diététiques

Les mesures hygiéno-diététiques sont proposées pour le couple infertile:

- [Arrêt du tabac]({{% relref "arret-tabac.md" %}}), cannabis et de l'[alcool]({{% relref "sevrage-alcool.md" %}}) (< 5 U/semaine)
- Réduire la consommation de café à moins de 5 tasses quotidiennes
- Correction d'un surpoids
- {{< modal-btn modal-regime >}}Régime méditerranéen{{< /modal-btn >}}
- Activité physique régulière
- Femme:
  - Éviter les exercices physiques intenses, répétés et réguliers
  - [Obésité]({{% relref "obesite-adulte.md" %}}) avec IMC 35-50: suivi par nutritionniste (*HAS 2023*)
  - Supplémentation en acide folique 0,4 mg/j
- Homme: éviter les pantalons serrés, éviter la chaleur et les polluants organo-chlorés et pesticides
- Rapports sexuels 1 jour sur 2 dans les 5 jours qui précèdent l'ovulation  
  Pas d'amélioration au-delà.
- Mise à jour du [calendrier vaccinal]({{% relref "vaccination.md" %}})

Veiller à offrir **soutien psychologique** et psychothérapie.

> << L'acupuncture chez les femmes n'est probablement pas recommandée >>. -- *ESHRE 2023*

En centre spécialisé, différents traitements sont possibles: citrate de clomifène, pompe à LHRH, chirurgie, fécondation in-vitro (FIV), insémination intra-utérine (IIU), stimulation ovarienne (SO) ...

{{% /collapse %}}
{{% collapse "Prise en charge de l'infertilité du couple" "show" %}}

{{< mermaid title="Prise en charge de l'infertilité du couple. Drs Alaedine Benani et JB Fron d'après CNGOF et ESHRE 2023, AFU">}}
graph TB
  diagnostic("<b>Infertilité</b><br>—<br>Absence de grossesse<br>pendant 12 mois<br>(6 mois si F +35 ans)") --> clinique("<b>Clinique</b><br>—<br>- Antécédents<br>- Traitements, toxiques<br>- Mode de vie<br>-Ancienneté<br>- Cycles, rapports<br>- Symptômes<br>- Examen clinique") -- Homme --> bilan("<b>Bilan de l'homme</b><br>—<br>- Sérologies IST<br>- Spermogramme avec<br>spermocytogramme<br>et spermoculture<br>- Selon comorbidités: hormones,<br>échographie testiculaire") --> AMP("Centre d'Assistance Médicale<br>à la Procréation (AMP)")
    bilan -- Spermogramme anormal --> andrologue("Échographie testiculaire<br>et andrologue") -.-> AMP
  style diagnostic stroke:#4150f5, stroke-width:1px
    clinique -- Femme --> bilanFemme("<b>Bilan de la femme</b><br>—<br>- TSH<br>- Sérologies IST voire autres<br>- Prélèvement vaginal<br>- Échographie pelvienne<br>endo-vaginale 3D à J2-J3<br>- AMH si AMP<br>- Selon critères: hormones") --> AMP
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Sonigo C, et al. Prise en charge de première intention du couple infertile: Mise à jour des RPC 2010 du CNGOF [First line management of infertile couple. Guidelines for Clinical Practice of the French College of Obstetricians and Gynecologists 2022.]. Gynecol Obstet Fertil Senol. 2024.](https://www.sciencedirect.com/science/article/abs/pii/S2468718924000370)
- [Gibbons T, et al. Timed intercourse for couples trying to conceive. Cochrane Database of Systematic Reviews. 2023.](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD011345.pub3/full/fr)
- [Romualdi D, et al; ESHRE Guideline Group on Unexplained Infertility. Evidence-based guideline: unexplained infertility. Hum Reprod. 2023.](https://academic.oup.com/humrep/advance-article/doi/10.1093/humrep/dead150/7246182)
- [Huyghe E, et al. Recommandations de l'AFU et de la SALF concernant l'évaluation de l'homme infertile. Prog Urol. 2021.](https://www.urofrance.org/recommandation/recommandations-de-lafu-et-de-la-salf-concernant-levaluation-de-lhomme-infertile/)
- [CNGOF. Avis du CNGOF en matière de conditions d'âge. 07/02/2021. (PDF)](https://cngof.fr/app/uploads/2023/06/AMP-Avis-CNGOF-limites-age-07-02-21.pdf?x53169)
- [Boitrelle F, et al. The Sixth Edition of the WHO Manual for Human Semen Analysis: A Critical Review and SWOT Analysis. Life (Basel). 2021.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8706130/)
- [World Health Organization. WHO laboratory manual for the examination and processing of human semen, 6th ed. World Health Organization. 2021.](https://www.who.int/publications/i/item/9789240030787)
- Collège national des gynécologues et obstétriciens français (CNGOF). Item 38 Infertilité du couple : conduite de la première consultation. Gynécologie obstétrique Réussir son DFASM. 2021.
- {{< references/college-endocrino >}}
- [Boedt T, et al. Preconception lifestyle advice for people with infertility. Cochrane Database of Systematic Reviews. 2021.](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD008189.pub3/full/fr)
- [Collège Français des Enseignants en Urologie (CFEU). Stérilité du couple : conduite de la première consultation Item 38. Référentiel du collège d'urologie 5ème édition. 2021.](https://www.urofrance.org/lafu-academie/formation-du-college/referentiel-du-college-durologie-5eme-edition/chapitre-02-sterilite-du-couple-conduite-de-la-premiere-consultation/)
- [Wang R, et al. Interventions for unexplained infertility: a systematic review and network meta‐analysis. Cochrane Database of Systematic Reviews. 2019.](https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD012692.pub2/full/fr)
- [Hédon B, et al; CNGOF. La prise en charge du couple infertile. Recommandations pour la pratique clinique. 2010. (PDF)](https://cngof.fr/app/pdf/RPC//RPC%20DU%20CNGOF/Obst%C3%A9trique/Contraception%20et%20Sant%C3%A9%20Reproductive/Infertilit%C3%A9%202010-RPC.pdf?x60010)
- [Agence de la Biomédecine. Assistance médicale à la procréation - Principaux chiffres de l'activité.](https://rams.agence-biomedecine.fr/principaux-chiffres-de-lactivite)

### Bibliographie en attente

[Jones CA, et al. Initial assessment of infertility in primary care. BMJ. 2025.](https://www.bmj.com/content/390/bmj-2024-079609) (payant)

{{%/sources%}}
{{% modal title="Signes de baisse de la réserve ovarienne" id="modal-reserve-ovarienne"%}}

{{< clinique/reserve-ovarienne >}}

> -- *CNGOF 2010*

{{% /modal %}}
{{% modal title="Dépistage des TCA avec SCOFF-F" id="modal-scoff"%}}

{{< scores/scoff >}}

{{% /modal %}}
{{% modal title="Régime méditerranéen" id="modal-regime"%}}

{{< traitements/regime-mediterraneen >}}

{{% /modal %}}
