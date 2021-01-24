+++
title = "Conduite à tenir devant un prurit"
prefix = "la "
shortname = "Prurit"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-10-02T17:43:41+02:00
publishdate = 2020-10-02
lastmod = 2021-01-03
categories = ["dermatologie"]
guidelineyears = "2018"
sources = ["CEDEF"]
tags = ["prurit"]
anglais = ["Itching"]
sctid = "418290006"
draft = false
flowchart = true
todo = "Prescrire, médicaments responsables, algo, lire dermato-info"
+++

{{%article-summary%}}

- Éliminer une gale.
- Prurit chronique nu chez jeune adulte doit faire évoquer un lymphome.
- Prurit nu non évident: biologie, radio de thorax, écho abdo.

{{%/article-summary%}}
{{%collapse "Définition" %}}

Prurit
: Sensation de démangeaison localisée ou généralisée, atteignant la peau ou certaines muqueuses.  
Il s'agit d'un diagnostic d'interrogatoire.

Prurit physiologique
: Discret, principalement le soir ou lors du déshabillage.

Prurit pathologique
: Prurit entraînant des **lésions de grattage** ou ayant un retentissement sur la vie quotidienne.

Prurigo
: Lésions provoquées par le grattage: papules excoriées, croûteuses ou encore nodules.

Lichénification
: Épaississement de la peau lorsque le prurit est chronique avec une peau grisâtre, recouverte de fines squames dessinant un quadrillage.

{{% /collapse %}}
{{%collapse "Étiologie" %}}

### Dermatoses prurigineuses

- Ectoparasitoses  
Gale et pédiculose.
- Piqûres d'insectes
- Dermatite atopique
- Dermatite de contact  
Caustique, irritative, allergique.
- Urticaire, dermographisme
- Mastocytose cutanée
- Psoriasis
- Lichen plan
- Pemphigoïde bulleuse
- Lymphomes cutanés  
Mycosis fongoïde et syndrome de Sézary.
- Dermatophytoses

### Prurit d'origine systémique

- Cholestase et insuffisance hépatique
- Insuffisance rénale chronique et hémodialyse
- Hémopathies malignes  
Maladie de Hodgkin et Vaquez.
- Dysthyroïdies
- Infection chronique  
VIH, hépatite B, [hépatite C]({{< relref "hepatite-c.md" >}})
- Carences  
Fer, vitamines.
- Parasitoses  
Ascaridiose, toxocarose, tropicales.

### Autres causes

- Grossesse (cholestase intra-hépatique de la grossesse)  
Prurit généralisé, sévère, nu. Cholestase biologique.  
Aussi: pemphigoïde gravidique, éruption polymorphe de la grossesse.
- Iatrogène
- Xérose cutanée
- Prurit sénile  
Physiologique. Caractère insomniant contraste avec rareté des lésions.
- Prurit psychogène (diagnostic d'élimination)  
Pathologie psychiatrique associée, événement stressant.

{{% /collapse %}}
{{%collapse "Clinique" %}}

{{%warning%}}Tout prurit nu et chronique chez un adulte jeune doit faire évoquer un lymphome.{{%/warning%}}

Le prurit est un diagnostic d'interrogatoire.

### Interrogatoire

- Notion de contage, symptômes dans l'entourage
- Voyage
- Animaux domestiques
- Antécédents personnels et familiaux atopiques
- Traitements en cours
- Caractères du prurit
  - Ancienneté
  - Horaire de survenue
  - Topographie
  - Sévérité  
  Insomnie, troubles du comportement, gêne dans le travail ou la vie quotidienne.
  - Facteurs déclenchants et soulageants
  - Évolution par poussées ou chronique
- Autres symptômes
- Profession
- Conduites sexuelles à risque

### Examen physique

- Recherche de lésions élémentaires
- Zones de grattage
- Dermographisme
- Hépatomégalie, splénomégalie
- Adénopathies palpables

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

Bilan de première intention devant un prurit nu sans cause évidente: biologie, radio de thorax, écho abdo.

### Biologique

- NFS
- Bilan hépatique  
ASAT, ALAT, GGT, PAL, bilirubine totale.
- Créatininémie
- TSH
- Sérologies VIH, VHB, VHC

### Radiographie thoracique

### Échographie abdominale

La biopsie cutanée n’est pas indiquée si aucune lésion clinique. En pratique chez le sujet âgé , le dosage des anticorps anti-membrane basale est fréquent.

{{% /collapse %}}
{{%collapse "Traitement" %}}

### Symptomatique

- Limiter les facteurs irritants  
Antiseptiques, savon parfumé, vêtements serrés et rêches.
- Couper les ongles courts
- Savons surgras
- Émollients quotidiens  
Cérat de Galien, Cold Cream.
- Antihistaminique de première génération  
Hydroxyzine ou doxépine le soir.

Avis dermatologique pour photothérapie UVB.

**NB.** Les antihistaminiques ne sont actifs que sur les prurits histamino-médiés. Donc pour l'urticaire chronique.

### Étiologique

Traitement de la cause et des facteurs aggravants.

Substitution d'un traitement suspect.

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid title="Conduite à tenir devant un prurit" >}}
graph TB
  prurit["Prurit"] --> examen("Interrogatoire<br>Clinique")
  style prurit stroke:#006ef4, stroke-width:1px
    examen --> orientation("Signes évocateurs <br>de pathologie ?")
      orientation -- Oui --> tttSpe("Traitement spécifique")
      orientation -- Non --> bilan("<b>Prurit nu: éliminer un lymphome</b><br>NFS, BH, BR, TSH<br>Sérologies VIH et VH<br>RxT<br>Échographie abdominale")
    examen --> etiologie("<b>Causes principales</b><br>- Gale, poux<br>- Dermatite atopique/contact<br>- Urticaire<br>- Psoriasis<br>- Lichen<br>- Pemphigoïde<br>- Autres")
{{< /mermaid >}}

{{% /collapse %}}
{{%collapse "Sources" %}}

- [Prescrire Rédaction. Prurit lié à une affection cutanée et antihistaminiques H1 oraux. Février 2019.](https://prescrire.org/)
- [CEDEF. Item 113 - UE 4. Prurit. Ann Dermatol Venereol. 2018](https://document.cedef.org/enseignement/em-consulte/2017/pdf/ANNDER-2481.pdf)
- [Dermato-info. Le prurit et le prurigo.](https://dermato-info.fr/fr/les-maladies-de-la-peau/le-prurit-et-le-prurigo)

{{% /collapse %}}
