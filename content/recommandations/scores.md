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
lastmod = "2023-02-10"
specialites = []
annees = "2023"
sources = []
tags = ["risque cardiovasculaire"]
anglais = []
sctid = ""
image = true
imageSrc = "Scores cliniques par slidesgo / Freepik"
todo = "texte"
+++

Sélection de grilles et scores essentiels en pratique quotidienne de médecine générale, classés par appareil.

## Cardiovasculaire {.typography-overline}

HTA: [carnet international d'automesure tensionnelle (PDF)](https://www.stridebp.org/images/training_bp/HBPM_Form_for_patients.pdf)

- ACFA: {{< modal-btn modal-chads >}}score CHA<sub>2</sub>DS<sub>2</sub>-VASc{{< /modal-btn >}}
- AOMI: {{< modal-btn modal-depistage-prevalent >}}critères de dépistage chez le +55 ans{{< /modal-btn >}}
- Apnées du sommeil: {{< modal-btn modal-saos >}}critères de dépistage{{< /modal-btn >}}
- Phlébite: {{< modal-btn modal-tvp >}}Score de Wells, Constans et LEFt pour la grossesse{{< /modal-btn >}}
- Risque cardiovasculaire
  - Calcul du {{< scores/heartscore >}}
  - {{< modal-btn modal-rcv >}}Risque cardiovasculaire et LDL cible{{< /modal-btn >}}
  - {{< modal-btn modal-statine-intensite >}}Efficacité des statines{{< /modal-btn >}}
- {{< modal-btn score-nyha >}}Score NYHA{{< /modal-btn >}}
- Traitements: {{%modal-btn "modal-iec"%}}IEC + TZD/ICa{{%/modal-btn%}}, {{%modal-btn "modal-ara2"%}}ARA2 + TZD/ICa{{%/modal-btn%}}

## Dermatologie {.typography-overline}

{{< modal-btn modal-dc >}}Les dermocorticoïdes{{< /modal-btn >}} (molécules par activité, manipulation)

## Diabète {.typography-overline .mt-4}

- {{< modal-btn modal-hba1c >}}Cibles d'HbA1c{{< /modal-btn >}}
- {{< modal-btn modal-saos-diabete >}}Dépistage des apnées du sommeil chez le diabétique{{< /modal-btn >}}
- {{< modal-btn modal-rcv-diabete >}}Risque cardiovasculaire du diabétique{{< /modal-btn >}}
- [Risque de diabète à 10 ans](https://www.diabeclic.com/findrisc)
- Traitements  
  {{< modal-btn modal-metformine >}}Metformine{{< /modal-btn >}}, {{< modal-btn modal-isglt2 >}}iSGLT2{{< /modal-btn >}}, {{< modal-btn modal-glp1ra >}}GLP-1{{< /modal-btn >}}, {{< modal-btn modal-su >}}sulfamides{{< /modal-btn >}}, {{< modal-btn modal-idpp4 >}}iDPP4{{< /modal-btn >}}, {{< modal-btn modal-insuline >}}insuline{{< /modal-btn >}}.

## Hépato-gastroentérologie {.typography-overline .mt-4}

Fibrose hépatique avec {{< modal-btn modal-fib4 >}}score FIB-4{{< /modal-btn >}} annuel si: obésité, [diabète de type 2]({{< relref "diabete-type-2.md" >}}), [VIH avec lipodystrophie]({{< relref "vih-sida.md" >}}), cytolyse inexpliquée, stéatose échographique

## Neurologie {.typography-overline}

Douleurs neuropathiques: {{< modal-btn modal-score-dn4 >}}questionnaire DN4{{< /modal-btn >}}

## Pneumologie {.typography-overline}

- {{< modal-btn modal-fagerstrom >}}Test de Fagerström simplifié{{< /modal-btn >}} ou {{< modal-btn modal-fagerstrom6 >}}complet{{< /modal-btn >}}
- {{< modal-btn modal-depistage-bpco >}}Critères de dépistage de la BPCO{{< /modal-btn >}} et {{< modal-btn modal-severite-bpco >}}sévérité de l'obstruction bronchique (VEMS){{< /modal-btn >}}
- {{< modal-btn modal-score-mmrc >}}Score mMRC de la dyspnée{{< /modal-btn >}}
- *{{< modal-btn modal-score-act >}}Asthma Control Test™{{< /modal-btn >}}*
- Traitements  
  {{< modal-btn modal-ttt-baca >}}Bronchodilatateurs de courte durée{{< /modal-btn >}}, {{< modal-btn modal-ttt-csi >}}corticoïdes inhalés (CSI){{< /modal-btn >}}, {{< modal-btn modal-ttt-laba-csi >}}LABA + CSI{{< /modal-btn >}}

## Psychiatrie {.typography-overline}

- Repérage d'une dépression: {{< modal-btn modal-phq9 >}}PHQ-9{{< /modal-btn >}}, {{< modal-btn modal-had >}}HAD{{< /modal-btn >}}
- Repérage d'une anxiété: {{< modal-btn modal-gad7 >}}GAD-7{{< /modal-btn >}}, {{< modal-btn modal-had >}}HAD{{< /modal-btn >}}
- Troubles du comportement alimentaire: {{< modal-btn modal-scoff >}}dépistage (score SCOFF-F){{< /modal-btn >}}
- Alcool recherche de mésusage: {{< modal-btn modal-audit >}}questionnaire AUDIT{{< /modal-btn >}}, {{< modal-btn modal-deta >}}CAGE/DETA{{< /modal-btn >}}, {{< modal-btn modal-face >}}FACE{{< /modal-btn >}}
- Cannabis usage problématique: {{< modal-btn modal-cast >}}CAST{{< /modal-btn >}}
- Benzodiazépines dépendance: {{< modal-btn modal-score-ecab >}}ECAB{{< /modal-btn >}}

## Urologie {.typography-overline}

- Dysfonction érectile: {{< modal-btn modal-iief5 >}}IIEF-5{{< /modal-btn >}}
- Hypertrophie de la prostate HBP: {{< modal-btn modal-ipss >}}IPSS{{< /modal-btn >}}

<!-- Modals -->
{{% modal title="Scores de risque de TVP" id="modal-tvp" size="lg"%}}

{{< scores/tvp >}}

{{% /modal %}}
{{% modal title="Score CHA2DS2-VASc selon ESC 2020" id="modal-chads"%}}

{{< scores/cha2ds2vasc >}}

{{% /modal %}}
{{% modal title="Échelle NYHA" id="score-nyha"%}}

{{< scores/nyha >}}

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
{{% modal title="Risque cardiovasculaire selon ESC 2021" id="modal-rcv"%}}

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
{{% modal title="Test de Fagerström simplifié" id="modal-fagerstrom"%}}

{{< scores/fagerstrom >}}

{{% /modal %}}
{{% modal title="Test de Fagerström de dépendance au tabac" id="modal-fagerstrom6"%}}

{{< scores/fagerstrom6 >}}

{{% /modal %}}
{{% modal title="Sévérité de l'obstruction bronchique" id="modal-severite-bpco"%}}

{{< scores/severite-bpco >}}

{{% /modal %}}
{{% modal title="Auto-questionnaire pour la BPCO" id="modal-depistage-bpco"%}}

{{< clinique/depistage-bpco-gold >}}

{{% /modal %}}
{{% modal title="Échelle de dyspnée du Medical Research Council modifiée" id="modal-score-mmrc"%}}

{{< scores/mmrc >}}

{{% /modal %}}
{{% modal title="Dépistage des apnées par le score STOP-BANG" id="modal-saos"%}}

{{< scores/stop-bang >}}

{{% /modal %}}
{{% modal title="Dépistage du SAOS et diabète" id="modal-saos-diabete"%}}

{{< scores/saos-diabete >}}

{{% /modal %}}
{{% modal title="bronchodilatateurs de courte durée d'action" id="modal-ttt-baca"%}}

{{< traitements/baca >}}

{{% /modal %}}
{{% modal title="Corticoïdes inhalés" id="modal-ttt-csi"%}}

{{< traitements/csi >}}

{{% /modal %}}
{{% modal title="LABA + CSI inhalés" id="modal-ttt-laba-csi"%}}

{{< traitements/laba-csi >}}

{{% /modal %}}
{{% modal title="Asthma Control Test" id="modal-score-act"%}}

{{< scores/asthma-control-test >}}

{{% /modal %}}
{{% modal title="Dépistage de la fibrose hépatique" id="modal-fib4"%}}

{{< scores/fib4 >}}

{{% /modal %}}
{{% modal title="Dépistage des TCA avec SCOFF-F" id="modal-scoff"%}}

{{< scores/scoff >}}

{{% /modal %}}
{{% modal title="Questionnaire AUDIT-C" id="modal-audit"%}}

{{< scores/audit-c >}}

{{% /modal %}}
{{% modal title="Score CAGE-DETA de mésusage de l'alcool" id="modal-deta"%}}

{{< scores/deta >}}

{{% /modal %}}
{{% modal title="Questionnaire FACE de mésusage de l'alcool" id="modal-face"%}}

{{< scores/face >}}

{{% /modal %}}
{{% modal title="Score PHQ-9" id="modal-phq9"%}}

{{< scores/phq9 >}}

{{% /modal %}}
{{% modal title="Score GAD-7" id="modal-gad7"%}}

{{< scores/gad7 >}}

{{% /modal %}}
{{% modal title="Score HAD" id="modal-had"%}}

{{< scores/had >}}

{{% /modal %}}
{{% modal title="Score CAST de mésusage du cannabis" id="modal-cast"%}}

{{< scores/cast >}}

{{% /modal %}}
{{% modal title="Échelle ECAB" id="modal-score-ecab"%}}

{{< scores/ecab >}}

{{% /modal %}}
{{% modal title="Score IIEF-5 de la dysfonction érectile" id="modal-iief5"%}}

{{< scores/iief5 >}}

{{% /modal %}}
{{% modal title="Score IPSS des symptômes de l'HBP" id="modal-ipss"%}}

{{< scores/ipss >}}

{{% /modal %}}
