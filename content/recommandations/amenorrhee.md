+++
id = "019ab729-a302-78ff-be7d-c5aad0eb9d12"
title = "Aménorrhée"
prefix = "l'"
description = "Recommandations pour le diagnostic et la prise en charge des aménorrhée primaire et aménorrhée secondaire. Examen clinique, bilan avec FSH, LH, oestrogènes, IRM"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2025-11-24T19:38:58+01:00"
publishdate = "2025-12-05"
lastmod = "2025-12-05"
specialites = ["endocrinologie", "gynécologie-obstétrique"]
annees = "2024"
sources = ["ASRM", "CEEDMM"]
tags = ["cancer", "coeliaque", "douleur pelvienne", "infertilité"]
english = ["Amenorrhea", "functional hypothalamic amenorrhea (FHA)"]
sctid = "14302001"
icd10 = ["N91.2"]
draft = true
image = false
imageSrc = ""
todo = "summary > liens > photo > newsletter > flow > Kanban | dgccrf tests gs"
flowchart = true
+++

{{%article-summary%}}

TODO: (at the end)

{{%/article-summary%}}
{{%collapse "Définition" %}}

Aménorrhée
: Absence de cycle menstruel, chez la fille à partir de 15 ans avec ou sans développement pubertaire (**aménorrhée primaire** principalement génétique) ou par son interruption plus de 3 mois chez une femme préalablement réglée de façon régulière (**aménorrhée secondaire**, surtout acquise), ou 6 mois en cas de cycles irréguliers.
: Toute aménorrhée, même après l'arrêt d'une contraception hormonale, doit être explorée. De même pour l'absence de développement des seins à partir de 13 ans.

**NB.** << L'absence de règles est physiologique pendant la grossesse, la lactation et la ménopause. >> -- *CEEDMM*

Ménarche
: Période des premières menstruations. En France, en moyenne, à 12,8 ans (*Gaudineau et al*).

{{< table title="Définitions de l'aménorrhée" >}}
| Définition            | Durée              | Source   |
|-----------------------|--------------------|----------|
| Cycle normal          | 28 jours (24-38)   | *FIGO 2018* |
| Spanioménorrhée       | < 25 ou > 38 jours (oligoménorrhée) | *FIGO 2018* |
| Aménorrhée primaire   | ∞                  | *ASRM 2024* |
| Aménorrhée secondaire | > 3 mois (6 si irréguliers) | *ASRM 2024* |
{{< /table >}}

### Abréviations

ASRM
: {{%lang%}}American Society for Reproductive Medicine{{%/lang%}}

CEEDMM
: Collège des Enseignants d'Endocrinologie, Diabète et Maladies Métaboliques

DDR
: date des dernières règles

E2
: œstradiol

IOP
: insuffisance ovarienne prématurée (ex ménopause précoce)

PRL
: prolactine
{.dl-inline}

{{% /collapse %}}
{{%collapse "Étiologie" %}}

L'orientation étiologique est guidée par le type d'aménorrhée: primaire ou secondaire.

### Aménorrhée primaire

Les principales causes d'aménorrhée primaire sont génétiques ou chromosomiques.

- Hypogonadismes hypogonadotrophiques congénitaux:
  - Syndromes congénitaux
  - Syndrome de Kallmann (anosmie, gène KAL-1)
  - chromosomique: syndrome de Turner (formule 45,X ou mosaïque 45,X/46,XX)
- Hypogonadismes hypergonadotrophiques:
  - Syndrome de Rokitanski (agénésie utérine et vaginale haute)
  - Syndrome d'insensibilité aux androgènes (formule 46,XY)
- Causes gynécologiques:
  - Hématocolpos: accumulation intra-utérine des règles par imperforation de l'hymen. Développement pubertaire et utérus présent.
  - Agénésie utérine (agénésie müllérienne de caryotype 46,XX; anomalies sévères de la biosynthèse ou de la réceptivité aux
androgènes caryotype 46,XY)

### Aménorrhée secondaire

L'aménorrhée secondaire résulte le plus souvent d'une pathologie acquise après la puberté:

- Physiologique:
  - **Grossesse**  
    Elle doit être écartée en cas retard de règles d'une semaine chez une femme avec cycles réguliers.
  - Allaitement
  - Ménopause  
    Elle est dite *naturelle* à partir de 45 ans.
- Hypogonadismes hypogonadotrophiques acquis (causes centrales):
  - **Tumeurs hypothalamo-hypophysaires** (crâniopharyngiomes ++)
  - Hypothalamique fonctionnel: **anorexie mentale**, **sport intense** (athlètes), **carence en lipides**  
    Prolactine et IRM normales. Diagnostic d'élimination après un bilan normal.
  - Hypophysites lymphocytaires du post-partum
  - Hémochromatose
  - Maladies de système (histiocytose, sarcoïdose)
  - Radiothérapie encéphalique
  - Traumatisme hypophysaire
  - Maladies chroniques (maladie de Crohn, maladie cœliaque, insuffisance respiratoire, insuffisance rénale terminale ou hépatique ...)
  - Médicaments (opioïdes, corticoïdes ...)
  - Syndrome de Sheehan (rarissime)  
    Après un accouchement avec choc hémorragique.
  - Hyperprolactinémie: **dysthyroïdie**, médicaments (neuroleptiques et apparentés, antidépresseurs, antihistaminiques), tumeurs hypothalamo-hypophysaires (adénome à prolactine ++)
- **Insuffisances ovariennes** (hypogonadisme hypergonadotrope de causes périphériques):
  - Causes chromosomique: syndrome de Turner
  - Cause génétique: syndrome de l'X fragile (gène FMR1)  
    Recherche systématique pour une IOP avant 40 ans.
- Aménorrhées secondaires associées à une hyperandrogénie  
  Pic de LH présent, sécrétion de progestérone, sécrétion d'œstradiol persistante mais non cyclique. Aménorrhée, spanioménorrhée depuis les premières règles.
  - **Syndrome des ovaires polykystiques** (SOPK) +++  
    Depuis l'adolescence: hyperandrogénie, surpoids (50 %), insulinorésistance (50 %).
  - Tumeurs ovariennes: hyperandrogénie avec **virilisme**
  - Pathologie surrénalienne
    - **Déficit en 21-hydroxylase** modéré  
      17-hydroxyprogestérone matinale sérique > 10 ng/mL.
    - [Syndrome de Cushing]({{% relref "syndrome-cushing.md" %}})
    - Tumeur surrénalienne: hyperandrogénie avec **virilisme**
- Pathologie utérine
  - Synéchies post-opératoires: IVG, accouchement traumatique
  - Tuberculose utérine
- Anomalies génétiques: irrégularités menstruelles depuis la puberté (avec souvent une contraception œstroprogestative pour << régulariser les règles >>)

{{% /collapse %}}
{{%collapse "Clinique" %}}

> [!INFO]
> << Chez toute femme normale, après la puberté, avant la ménopause et en dehors de la grossesse, les règles doivent être régulières. C'est-à-dire qu’elles doivent survenir tous les 28 jours en moyenne (la normale est entre 26 et 31 jours). >> -- *CEEDMM*

La présence d'irrégularités menstruelles avant l'aménorrhée (spanioménorrhée, oligoménorrhée) ne modifie pas l'enquête étiologique.

### Interrogatoire

- Antécédents
- Antécédents familiaux
- Traitements en cours  
  Contraception, corticoïdes, opioïdes, neuroleptiques, anti-vomitifs.
- Niveau d'activité physique
- Apports en lipides
- Pour une **aménorrhée primaire:**
  - Antécédents familiaux: retard pubertaire, aménorrhée, hypogonadisme, infertilité
  - Carence nutritionnelle
  - Symptômes: anosmie
- Pour une **aménorrhée secondaire:**
  - Absence de bilan chez une femme ≥ 45 ans
  - Antécédents: gynécologiques, obstétricaux, IVG, chirurgie ovarienne, maladie cœliaque, radiothérapie, chimiothérapie
  - Âge de la ménarche, date des dernières règles
  - Régularité des règles auparavant (normale 26-31 jours), durée (normale 2 à 5 jours)
  - Rapports non protégés
  - Symptômes: douleurs pelviennes cycliques, bouffées de chaleur, douleurs pelviennes cycliques, dyspareunie, hyperandrogénie (hirsutisme, séborrhée, acné), galactorrhée, céphalées, signes visuels

### Examen clinique

- **Poids et variations**, taille, **IMC**
- Courbes de croissance
- Pression artérielle, fréquence cardiaque
- Auscultation cardiaque
- Examen cutané

> [!INFO]
> Adresser à l'endocrinologue et/ou gynécologique toute aménorrhée (spanioménorrhée ou oligoménorrhée).

#### Examen devant une aménorrhée primaire

- Stades de Tanner (voir plus bas)
- Examen gynécologique  
  Trophicité du vagin et du col, échographie pelvienne (taille et position des gonades, utérus).

{{< clinique/tanner-sein >}}

{{< clinique/tanner-pilosite >}}

### Examen devant une aménorrhée secondaire

- Signes d'hyperandrogénie:  
  {{< clinique/hyperandrogenie >}}.
- Voire un virilisme:  
  {{< clinique/virilisme >}}.

> **NB.** 1/3 des tests de grossesse sont non conformes (*[DGCCRF](https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/les-autotests-de-fertilite-au-banc-dessai)*)

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Bilan de l'aménorrhée primaire

- Sans développement pubertaire: ==œstradiol (E2), FSH, LH==
- Développement pubertaire normal: ==échographie pelvienne==
- Un test de grossesse peut être proposé

**Conduite à tenir selon les résultats du bilan:**

- En cas d'échographie pelvienne:
  - Agénésie utérine: syndromes de Rokitanski ou d'insensibilité aux androgènes
  - Structures normales: imperforation hyménéale ou aménorrhée secondaire
- Si les gonadotrophines sont basses:
  - IRM hypophysaire (tumeur)
  - Bilan d'une suspicion fonctionnelle: NFS, ionogramme, glycémie, bicarbonate, urée, créatinine, bilan hépatique, CRP (*ES*)
  - Éliminer une dénutrition
  - Rechercher un syndrome de Kallmann (anosmie, bulbes olfactifs absents en IRM)
- Si les gonadotrophines sont hautes (FSH augmentée, estradiol indosable):
  - Adresser à l'endocrinologue pour un caryotype (syndrome de Turner, insuffisance ovarienne prématurée)

### Bilan de l'aménorrhée secondaire

Le bilan de l'aménorrhée secondaire débute par des ==**ßHCG**==.

Bilan complémentaire en cas de ßhCG négative:

- Œstradiol (E2), FSH, LH
- Prolactine (PRL)
- Testostéronémie totale
- TSH

Conduite à tenir selon les résultats du bilan:

- **Hyperprolactinémie**  
  **Prolactine élevée**, E2 et LH bas, FSH basse ou normale.
- **SOPK**  
  E2 d'une phase folliculaire (~ 30-70 pg/mL), LH normale/augmentée, FSH basse/normale, testostérone totale normale/augmentée
- **Déficit gonadotrope**  
  E2 bas, LH et FSH basses ou anormalement normales.
- **Insuffisance ovarienne**  
  E2 bas, FSH très élevée, LH élevée.

{{% /collapse %}}
{{%collapse "Traitement" %}}

> [!WARNING]
> << Un traitement œstroprogestatif sans exploration préalable est donc toujours illégitime. >> -- *CEEDMM*

La prise en charge de l'aménorrhée est étiologique et spécialisée: endocrinologue, gynécologue.

En cas d'hypogonadisme hypogonadotrophique ou syndrome de Kallmann: conseil génétique.

{{% /collapse %}}
{{% collapse "Prise en charge de l'aménorrhée" "show" %}}

### Prise en charge de l'aménorrhée primaire

{{< mermaid title="Prise en charge de l'aménorrhée primaire. CEEDMM">}}
graph TB
  primaire["Aménorrhée primaire"] --> clinique("<b>Clinique</b><br>—<br>- Antécédents<br>- Stades de Tanner<br>- Examen gynécologique") --> normal(Développement<br>pubertaire normal) --> bilan("- Examen clinique<br>- Échographie pelvienne")
    bilan --> imperforation(Imperforation<br>hyménéale)
    bilan --> agénésie(Agénésie:<br>sd Rokitanski,<br>insensibilité<br>aux androgènes)
    bilan --> aménorrhéeSecondaire(Aménorrhée<br>secondaire)
  clinique --> anormal(Développement<br>pubertaire absent) --> bilan2("- Œstradiol<br>- FSH, LH")
    bilan2 -- "FSH ↑ et<br>E2 indosable" --> Turner("- Sd de Turner<br>- IOP")
    bilan2 -- "FSH ↓ et<br>E2 indosable" --> IRM(IRM hypophysaire) ==> tumeur(Tumeur hypothalamo-<br>hypophysaire)
      IRM ==> dénutrition(Dénutrition)
      IRM --> Kallmann("Congénital:<br>Kallmann (anosmie)")
  style primaire stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

### Prise en charge de l'aménorrhée secondaire

{{< mermaid title="Prise en charge de l'aménorrhée secondaire. Dr JB Fron d'après CEEDMM">}}
graph TB
  secondaire["Aménorrhée secondaire"] --> clinique("<b>Clinique</b><br>—<br>- Antécédents<br>- Traitements<br>- Symptômes<br>- Dernières règles<br>- Rapports") --> hcg(ß-HCG) -- Négatifs --> bilan("<b>Bilan</b><br>—<br>- E2, FSH, LH<br>- PRL<br>- Testostérone<br>- TSH") -- "PRL ↑" --> IRM("IRM hypophysaire<br>sauf médicament<br>imputable") -- Positive --> tumeur("Adénome<br>hypophysaire, ...")
      IRM -- Négative --> iatrogénie(Iatrogénie)
    bilan -- "Testo &gt; 2N<br> E2 et FSH N" --> ovaire("- Échographie<br>ovarienne<br>- 21-hydroxylase<br>(endocrino)") --> SOPK("- Bloc 21-hydroxylase<br>- Tumeur virilisante<br>- Cushing")
    bilan -- "E2 ↓<br>FSH ↓ ou N" --> bas("Hypogonadisme<br>central") --> IRMc(IRM<br>hypophysaire) -- Positive --> crânio(Tumeur)
      IRMc -- Négative --> autres("- Fonctionnel<br>- Maladie de<br>système")
    bilan -- "FSH ↑<br>E2 ↓" --> caryotype(Caryotype) --> Turner("- Turner<br>- IOP")
    hcg -- Positifs --> grossesse(Grossesse)
  style secondaire stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- Prescrire Redaction. Troubles sexuels d'origine médicamenteuse chez les femmes. Rev Prescrire. 2025.
- [Marchand M. Gynécologie de l'enfant et de l'adolescente. 2025. (PDF)](https://www.elsevier-masson.fr/media/wysiwyg/PDF/FR/9782294786471_troubles_cycle.pdf)
- [Practice Committee of the American Society for Reproductive Medicine. Current evaluation of amenorrhea: a committee opinion. Fertil Steril. 2024.](https://www.fertstert.org/article/S0015-0282(24)00082-7/fulltext)
- {{< references/college-endocrino >}}
- [Trémollieres F, et al. Les femmes ménopausées : recommandations pour la pratique clinique du CNGOF et du GEMVi (Texte court). Gynécologie Obstétrique Fertilité & Sénologie. 2021.](https://www.sciencedirect.com/science/article/pii/S2468718921000593)
- [Klein DA, et al. Amenorrhea: A Systematic Approach to Diagnosis and Management. Am Fam Physician. 2019.](https://www.aafp.org/pubs/afp/issues/2019/0701/p39.html)
- [Munro MG, et al; FIGO Menstrual Disorders Committee. The two FIGO systems for normal and abnormal uterine bleeding symptoms and classification of causes of abnormal uterine bleeding in the reproductive years: 2018 revisions. Int J Gynaecol Obstet. 2018.](https://obgyn.onlinelibrary.wiley.com/doi/10.1002/ijgo.12666) (payant)
- [Gordon CM, et al. Functional Hypothalamic Amenorrhea: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2017.](https://academic.oup.com/jcem/article/102/5/1413/3077281)
- [American College of Obstetricians and Gynecologists Committee Opinion No. 651. Menstruation in girls and adolescents: using the menstrual cycle as a vital sign.  Obstet Gynecol. 2015.](https://journals.lww.com/greenjournal/fulltext/2015/12000/committee_opinion_no__651_summary__menstruation_in.54.aspx)
- [Gaudineau A, et al. Âge à la ménarche : résultats français de l'étude Health Behaviour in School-aged Children. Gynécologie Obstétrique & Fertilité. 2010.](https://www.em-consulte.com/article/256456/resume/age-a-la-menarche-resultats-francais-de-letude-)
- [de Tournemire R, Crosnier H. Pas à Pas en Pédiatrie. 2010.](https://pap-pediatrie.fr/pap-detail/i63n)
- [Petit A, et al. Hyperprolactinémies d'origine médicamenteuse: étude cas/non-cas dans la banque nationale de pharmacovigilance [Drug-induced hyperprolactinemia: a case-non-case study from the national pharmacovigilance database]. Therapie. 2003.](https://www.sciencedirect.com/science/article/abs/pii/S0040595716300804)

### Bibliographie en attente

- Collège gynéco
- Prescrire

**Mots-clé:** hypogonadisme hypogonadotrophique (ou hypogonadisme central)

{{%/sources%}}
