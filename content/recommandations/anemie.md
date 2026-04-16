+++
id = "019d9674-d798-70dc-a0cd-43574a6d8805"
title = "Anémie"
titleSeo = "In case of long title or delete whole line (max 70 ch ... or more)"
prefix = "la "
description = "Title 2-22 words and description 160 characters max"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2026-04-16T15:21:05+02:00"
publishdate = "2026-04-16"
lastmod = "2026-04-16"
specialites = ["hématologie"]
annees = "2025"
sources = ["MaRIH"]
tags = []
english = ["Anemia"]
sctid = "https://browser.ihtsdotools.org/?perspective=full&conceptId1=44054006&edition=MAIN/2022-10-31&release=&languages=en"
icd10 = ["sctid > Concept Details > Refsets"]
draft = true
image = false
imageSrc = ""
rank = "false"
todo = "descr > summary > liens > photo > newsletter > flow > Kanban"
flowchart = true
+++

{{%article-summary%}}

TODO: (at the end)

Chapitre lié: [anémie ferriprive]({{% relref "anemie-ferriprive.md" %}})

{{%/article-summary%}}
{{%collapse "Définition" %}}

### Abréviations

ACG
: {{%lang%}}American College of Gastroenterology{{%/lang%}}
{.dl-inline}

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

### Examen clinique

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}


{{% /collapse %}}
{{%collapse "Traitement" %}}


{{% /collapse %}}
{{%collapse "Prise en charge de l'anémie avec suspicion de carence en fer" "show" %}}

{{< mermaid title="Prise en charge d'une anémie avec suspicion de carence en fer. Dr JB Fron d'après Les Clés du Diagnostic et sfh" >}}
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

### Bibliographie en attente

- Société française d'hématologie (sfh). Anémie chez l'adulte et l'enfant. Hématologie Réussir son DFASM. 2021.
- Prescrire
- Cochrane
- [Minerva](https://minerva-ebp.be/)
- [Cismef](https://www.cismef.org/cismef/)
- [NICE Clinical guidance](https://www.nice.org.uk/guidance/conditions-and-diseases)

{{%/sources%}}

’≤≥±®æœŒÈ⅓¼½¾¹²³^4^ÂSpO~2~ -- ‰
