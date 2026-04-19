+++
id = "019d9674-d798-70dc-a0cd-43574a6d8805"
title = "Anémie"
prefix = "l'"
description = "TODO:"
noindex = true
longHtml = true
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2026-04-16T15:21:05+02:00"
publishdate = "2026-04-17"
lastmod = "2026-04-17"
specialites = ["hématologie"]
annees = "2025"
sources = ["MaRIH"]
tags = []
english = ["Anemia"]
sctid = "271737000"
icd10 = ["D64", "D64.9"]
image = true
imageSrc = "Illustration de l'anémie. macrovector / Freepik"
rank = "false"
todo = "descr > summary > liens > newsletter > Kanban | codes ICD10, index"
flowchart = true
+++

{{%article-summary%}}

Page en construction, publiée pour disposer de l'arbre de décision devant une anémie

Chapitre lié: [anémie ferriprive]({{% relref "anemie-ferriprive.md" %}})

{{%/article-summary%}}
{{%collapse "Définition" %}}

{{< clinique/anemie-definition >}}

| Tabagisme (cig/j) | Ajustement du taux d'Hb (g/dL) |
| :---------------: | -----------------------------: |
|        Non        |                  0&nbsp;&nbsp; |
|      Fumeur       |                           -0,3 |
|       < 10        |                           -0,3 |
|       10-19       |                           -0,5 |
|       ≥ 20        |                           -0,6 |
{caption="Ajustement du taux d'hémoglobine pour les fumeurs. Dr JB Fron d'après *OMS 2024*" class="table-sm"}

### Abréviations

Hb
: hémoglobine

MaRIH
: filière des maladies rares immuno-hématologiques

VGM
: volume globulaire moyen
{.dl-inline}

{{% /collapse %}}
{{%collapse "Prise en charge de l'anémie" "show" %}}

{{< mermaid title="Prise en charge d'une anémie. Dr JB Fron d'après Les Clés du Diagnostic et sfh" >}}
graph TB
  anémie["<b>Anémie</b><br>—<br>- Femme: Hb &lt; 12 g/dL <br>- Homme: Hb &lt; 13 g/dL"] --> VGM(VGM ?) -- "&lt; 80 fl" --> microcytaire("Anémie microcytaire<br>± hypochrome<br>(CCMH &lt; 32)") --> ferritine("Ferritinémie<br>± CRP") --> ferriprive("Voir anémie<br>ferriprive")
    VGM -- "Normal<br>80-98 fl" --> normocytaire(Anémie<br>normocytaire) --> réticulocytes(Réticulocytes)
      réticulocytes --"≥ 120 G/L:<br>Anémie<br>régénérative"--> hémolytique("- Régénération<br>post hémorragique<br>- ou mécanisme hémolytique:<br>Bilirubine libre,<br>LDH, haptoglobine") --> frottis("Frottis sanguin<br>Schizocytes ?") --> oui(Oui) -- "Thrombopénie<br>&lt; 100 G/L" --> thrombopénie("Sd de microangiopathie<br>thrombotique:<br>Avis spécialisé en urgence<br>(CNR MAT)")
        oui --> valve("Anémie hémolytique<br>isolée avec<br>valve cardiaque") --> cardiologue(Avis cardiologique)
        frottis --> non(Non) --> normal("- Frottis normal<br>- ou sphérocytes<br>- ou agglutinats<br>d'hématies") --> EDA("Examen direct<br>à l'antiglobuline<br>(EDA)")
          EDA -- "EDA +" --> AHAI("AHAI très probable:<br>Centre CeReCAI")
          EDA -- "EDA -" --> ceramic("AHAI peu probable:<br>Centre CeRAMIC")
      réticulocytes -- "&lt; 120 G/L:<br>Anémie<br>arégénérative" --> carence("- Vitamines B9, B12<br>- TSH<br>- Créatinine<br>- CRP<br>- Fausse anémie:<br>EPS, splénomégalie") -- "Normales<br>et macrocytaire" --> hématologue("Hématologue<br>pour myélogramme")
        carence -- "Anomalie" --> correction(Correction)
    VGM -- "&gt; 98 fl" --> macrocytaire(Anémie<br>macrocytaire) --> réticulocytes
  style anémie stroke:#4150f5, stroke-width:1px
{{< /mermaid >}}

{{% /collapse %}}
{{%sources%}}

- [Michel M, et al; Filière de santé Maladies Rares Immuno-hématologiques. Anémie normo ou macrocytaire. Les Clés du Diagnostic. 2025.](https://clesdudiagnostic.fr/cles-du-diagnostic/anemie-normo-ou-macrocytaire-vgm-98-fl/)
- [Guideline on haemoglobin cutoffs to define anaemia in individuals and populations. Geneva: World Health Organization; 2024. (PDF)](https://iris.who.int/bitstream/handle/10665/376196/9789240088542-eng.pdf?sequence=1)
- [OMS. Concentrations en hémoglobine permettant de diagnostiquer l'anémie et d'en évaluer la sévérité. Système d'informations nutritionnelles sur les vitamines et les minéraux. 2011.](https://www.who.int/fr/publications-detail/WHO-NMH-NHD-MNM-11.1)

### Bibliographie en attente

- Société française d'hématologie (sfh). Anémie chez l'adulte et l'enfant. Hématologie Réussir son DFASM. 2021.

{{%/sources%}}
