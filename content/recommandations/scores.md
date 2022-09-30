+++
title = "Scores et outils cliniques"
noindex = true
url = "/scores"
titleSeo = "Scores pour la clinique"
description = "Scores médicaux utiles au quotidien pour la pratique du médecin généraliste"
prefix = ""
longHtml = true
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-12-14T15:58:37+01:00"
publishdate = "2021-12-14"
lastmod = "2022-09-30"
specialites = []
annees = "2022"
sources = []
tags = ["risque cardiovasculaire"]
anglais = []
sctid = ""
image = true
imageSrc = "Scores cliniques par slidesgo / Freepik"
todo = "texte, ACT"
+++

Ensemble de grilles et scores essentiels en pratique quotidienne de médecine générale, classés par organe.

## Cardiovasculaire {.typography-overline}

- [Carnet d'automesure tensionnelle 2021 (PDF)](https://www.stridebp.org/images/training_bp/HBPM_Form_for_patients.pdf)
- {{< modal-btn modal-depistage-prevalent >}}Dépistage AOMI ≥ 55 ans{{< /modal-btn >}}
- {{< modal-btn modal-saos >}}Dépistage des apnées du sommeil{{< /modal-btn >}}
- Risque cardiovasculaire
  - Calcul du {{< scores/heartscore >}}
  - {{< modal-btn modal-rcv >}}Risque cardiovasculaire et LDL cible{{< /modal-btn >}}
  - {{< modal-btn modal-statine-intensite >}}Efficacité des statines{{< /modal-btn >}}
- {{< modal-btn score-nyha >}}Score NYHA{{< /modal-btn >}}
- Traitements
  - {{%modal-btn "modal-iec"%}}IEC + TZD/ICa{{%/modal-btn%}}
  - {{%modal-btn "modal-ara2"%}}ARA2 + TZD/ICa{{%/modal-btn%}}

## Dermatologie {.typography-overline}

{{< modal-btn modal-dc >}}Dermocorticoïdes{{< /modal-btn >}}

## Diabète {.typography-overline .mt-4}

- {{< modal-btn modal-hba1c >}}Cibles d'HbA1c{{< /modal-btn >}}
- {{< modal-btn modal-saos-diabete >}}Dépistage des apnées du sommeil{{< /modal-btn >}} (avec un diabète)
- {{< modal-btn modal-rcv-diabete >}}Risque CV du diabétique{{< /modal-btn >}}
- [Risque de diabète à 10 ans](https://www.diabeclic.com/findrisc)
- Traitements
  - {{< modal-btn modal-metformine >}}Metformine{{< /modal-btn >}}
  - {{< modal-btn modal-idpp4 >}}iDPP4{{< /modal-btn >}}
  - {{< modal-btn modal-isglt2 >}}iSGLT2{{< /modal-btn >}}
  - {{< modal-btn modal-glp1ra >}}GLP-1{{< /modal-btn >}}
  - {{< modal-btn modal-su >}}Sulfamides{{< /modal-btn >}}
  - {{< modal-btn modal-insuline >}}Insuline{{< /modal-btn >}}

## Neurologie {.typography-overline}

{{< modal-btn modal-score-dn4 >}}Questionnaire DN4{{< /modal-btn >}}

## Pneumologie {.typography-overline}

- {{< modal-btn modal-depistage-bpco >}}Dépistage BPCO{{< /modal-btn >}}
- {{< modal-btn modal-score-mmrc >}}Score mMRC{{< /modal-btn >}}

<!-- Modals -->

{{% modal title="Échelle NYHA" id="score-nyha"%}}

{{< scores/nyha >}}

{{% /modal %}}
{{% modal title="Échelle de dyspnée du Medical Research Council modifiée" id="modal-score-mmrc"%}}

{{< scores/mmrc >}}

{{% /modal %}}
{{% modal title="Objectifs glycémiques selon SFD 2021" id="modal-hba1c"%}}

{{< clinique/objectifs-hba1c >}}

{{% /modal %}}
{{% modal title="Statines et réduction du LDL" id="modal-statine-intensite"%}}

{{< traitements/statine-intensite >}}

{{% /modal %}}
{{% modal title="Dépistage selon le score PREVALENT" id="modal-depistage-prevalent"%}}

{{< scores/aomi-prevalent >}}

{{% /modal %}}
{{% modal title="Risque cardiovasculaire selon ESC 2019" id="modal-rcv"%}}

{{< clinique/risque-cardiovasculaire >}}

{{% /modal %}}
{{% modal title="Diabète et RCV selon ESC 2019" id="modal-rcv-diabete"%}}

{{< clinique/risque-cardiovasculaire-diabete >}}

{{% /modal %}}
{{% modal title="Régime méditerranéen" id="modal-regime"%}}

{{< traitements/regime-mediterraneen >}}

{{% /modal %}}
{{% modal title="Metformine" id="modal-metformine"%}}

{{< traitements/metformine >}}

{{% /modal %}}
{{% modal title="Sulfamides hypoglycémiants" id="modal-su"%}}

{{< traitements/su >}}

{{% /modal %}}
{{% modal title="Gliptines" id="modal-idpp4"%}}

{{< traitements/idpp4 >}}

{{% /modal %}}
{{% modal title="Inhibiteurs du co-transporteur SGLT2" id="modal-isglt2"%}}

{{< traitements/isglt2 >}}

{{% /modal %}}
{{% modal title="Agonistes du récepteur GLP-1" id="modal-glp1ra"%}}

{{< traitements/glp1ra >}}

{{% /modal %}}
{{% modal title="Insuline basale" id="modal-insuline"%}}

{{< traitements/insuline >}}

{{% /modal %}}
{{% modal title="IEC dans l'hypertension" id="modal-iec" %}}

{{< traitements/iec >}}

{{% /modal %}}
{{% modal title="ARA2 dans l'hypertension" id="modal-ara2" %}}

{{< traitements/ara2 >}}

{{% /modal %}}
{{% modal title="Vaccination anti-pneumococcique" id="modal-vaccin-pneumocoque"%}}

{{< traitements/vaccin-pneumocoque >}}

{{% /modal %}}
{{% modal title="Dermocorticoïdes" id="modal-dc" size="lg" %}}

{{< traitements/dermocorticoides >}}

{{% /modal %}}
{{% modal title="Questionnaire DN4" id="modal-score-dn4"%}}

{{< scores/dn4 >}}

{{%/modal%}}
{{% modal title="Auto-questionnaire pour la BPCO" id="modal-depistage-bpco"%}}

{{< clinique/depistage-bpco-gold >}}

{{% /modal %}}
{{% modal title="Échelle de dyspnée du Medical Research Council modifiée" id="modal-score-mmrc"%}}

{{< scores/mmrc >}}

{{% /modal %}}
{{% modal title="Score STOP-BANG" id="modal-saos"%}}

{{< scores/stop-bang >}}

{{% /modal %}}
{{% modal title="Dépistage du SAOS et diabète" id="modal-saos-diabete"%}}

{{< scores/saos-diabete >}}

{{% /modal %}}
