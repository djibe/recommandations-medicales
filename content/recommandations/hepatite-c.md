+++
title = "Hépatite C"
prefix = "l'"
shortname = "VHC"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-09-06T20:18:41+02:00
publishdate = 2020-09-06
lastmod = 2020-09-07
categories = ["infectiologie"]
guidelineyears = "2019"
sources = ["HAS"]
tags = ["hepatite", "prurit"]
anglais = ["Viral hepatitis type C"]
sctid = "50711007"
draft = false
flowchart = true
+++

{{%article-summary%}}

- Dépister largement (voir Qui dépister?)
- Prise en charge spécialisée

{{%/article-summary%}}
{{%collapse "Épidémiologie" %}}

74.000 personnes non diagnostiquées en France en 2014 (chez les 18-80 ans contre 101.000 en 2004).

{{% /collapse %}}
{{%collapse "Qui dépister?" %}}

- Toute personne qui a pu avoir un contact avec le VHC
- Personnes ayant eu avant 1992:
  - une transfusion ou ayant pu être transfusés  
Chirurgie lourde (cardiaque, vasculaire, cérébrale, digestive, pulmonaire, gynéco-obstétricale,
rachidienne, prothèse de hanche ou de genou, etc.),  
Séjour en réanimation,  
Accouchement difficile,  
Hémorragie digestive,  
Soins à la naissance en néonatalogie ou en pédiatrie (grand prématuré, exsanguino-transfusion)
  - une greffe de tissu, cellules ou organe
- Hémodialyse
- Drogue IV ou pernasale
- Né de mère VHC+
- Partenaires sexuels de VHC+
- [HSH]({{< relref "hsh.md" >}})
- Entourage de VHC+
- Prisonnier
- Tatoutage, piercing, mésothérapie, acupuncture
- Immigré, soigné ou séjour prolongé en zone d'endémie (Égypte, Pakistan, Europe de l'Est et méditerranéenne, Afrique et Asie)
- ALAT élevées sans cause connue
- VIH+ ou VHB+
- Professionnel de santé lors d'AES

{{% /collapse %}}
{{%collapse "Clinique" %}}

### Interrogatoire

- Traitements déjà utilisés contre le VHC
- Consommation d'alcool (questionnaires AUDIT, CAGE-DETA, FACE)
- Consommation de drogues
- Rapports sexuels à risque
- Antécédents de transfusion
- Diabète

### Examen clinique

- Poids, taille, **IMC**
- Signes d'insuffisance hépatique
- Signes de cirrhose

{{% /collapse %}}
{{%collapse "Examens complémentaires" %}}

### Sérologie VHC

- Négative  
Pas d'infection par le VHC, sauf infection récente ou immunodépression sévère (voir Conduite à tenir).
- Positive  
Nécessité de sérologie de contrôle et RT-PCR VHC.

### RT-PCR VHC (ou charge virale)

Systématique lorsque 2 sérologies sont positives (ou 1 TROD+ + 1 sérologie+).

### Bilan si diagnostic positif

- Sérologie VIH et VHB
- NFS-plaquettes
- INR
- créatininémie et clairance CDK-EPI
- ASAT, ALAT, GGT, PAL, bilirubine totale
- Albuminémie
- Glycémie à jeun

### Fibrose hépatique

Par le spécialiste. Test non invasif en 1<sup>re</sup> intention.

{{% /collapse %}}
{{% collapse "Traitement" %}}

**Objectifs:** réduire la mortalité toutes causes et obtenir une guérison virologique.  
**Guérison:** ARN du VHC indétectable dans le plasma au moins 12 semaines après l'arrêt du traitement. Obtenue dans 90% des cas avec les AAD.

### Mesures générales

- Déclarer l'ALD 6
- Proscire toute interaction avec les antiviraux ([Outil en ligne HEP Drug Interactions](https://www.hep-druginteractions.org/checker))  
Enquête sur l'automédication++
- Éviter toute consommation d'alcool
- Lutte contre surpoids/obésité
- Équilibre strict d'un diabète
- Vaccination hépatite A
- Vaccination hépatite B (après sérologie négative)
- Vaccination grippe annuelle
- Vaccination pneumocoque
- Prévention des contaminations  
Pas de partage des rasoirs, brosse à dent.  
Matériel à usage unique en cas d'acte invasif (drogue IV).

### Antiviraux d'Action Directe (AAD)

Manipulation par le spécialiste.

Contrôle de la RT-PCR VHC 12 semaines après la fin du traitement.  
**NB.** Persistance des anticorps après la guérison.

3 classes avec associations variées:

- Inhibiteurs de protéase NS3A/4A (grazoprévir, voxilaprévir, glécaprévir)
- Inhibiteurs de la protéine NS5A (lédipasvir, elbasvir, pibrentasvir, velpastavir)
- Inhibiteurs de NS5B (sofosbuvir)

{{% /collapse %}}
{{% collapse "Surveillance" %}}

- Surveillance adaptée au traitement
- Contrôle de la RT-PCR VHC 12 semaines après la fin du traitement.
- Si persistance de conduites à risque: RT-PCR VHC annuelle.
- Persistance des mesures d'hépatoprotection

{{% /collapse %}}
{{% collapse "Conduite à tenir" "show" %}}

{{< mermaid >}}
graph TB
  serologie[Sérologie VHC] --> serologie+(Positive)
  style serologie stroke:#006ef4, stroke-width:1px
  serologie+ --> controle(Sérologie de contrôle)
    controle -- Positive --> pcr(RT-PCR VHC<br>Sérologies VIH 1 + 2 + VHB)
    controle -- Négative --> controleNegatif(To Do)
    pcr --> mg(Adresser Hépatologue<br>Dépister l'entourage)
  serologie --> serologie-(Négative<br>Diagnostic infirmé)
  serologie- -.-> infRecente(Suspicion d'infection récente)
    infRecente -- 3 mois --> 3mois(Sérologie de contrôle)
  serologie- -.-> immunodep(Immunodépression)
    immunodep --> pcr2(RT-PCR VHC)
{{< /mermaid >}}

{{< mermaid >}}
graph TB
  trod[TROD VHC] --> trod+(Positif)
  style trod stroke:#006ef4, stroke-width:1px
  trod+ --> serologie(Sérologie VHC)
    serologie -- Positive --> pcr(RT-PCR sur même prélèvement)
    pcr --> mg(Adresser Hépatologue<br>Dépister l'entourage)
    serologie -- Négative --> TODO(To Do)
  trod --> trod-(Négatif<br>Diagnostic infirmé)
    trod- -.-> infRecente(Suspicion d'infection récente)
    infRecente -- 3 mois --> 3mois(Sérologie VHC<br>ou TROD)
  trod --> trodIncertain(TROD ininterprétable)
    trodIncertain --> 3mois
{{< /mermaid >}}

{{%/collapse%}}
{{%collapse "Information du patient" %}}

- [Proposer de participer à la cohorte ComPare de l'APHP](https://compare.aphp.fr/participer/je-participe.html)
- Maladie grave pouvant être guérie le plus souvent
- Les soins liés à la maladie et ses complications sont intégralement remboursés
- Informations sur les modes de transmission
- Informations sur les traitements
  - Importance de l'observance
  - Effets indésirables des traitements
- Contrôle des comorbidités
- Contrôle des addictions
- Nécessité de prévenir tous les sujets avec contact à risque
- Consignes d'hépatoprotection
- Associations de patients

{{% /collapse %}}
{{%collapse "Sources" %}}

- [HAS. Hépatite C : prise en charge simplifiée chez l'adulte. Mars 2019 MAJ Septembre 2019.](https://www.has-sante.fr/jcms/c_2911891/fr/hepatite-c-prise-en-charge-simplifiee-chez-l-adulte)

{{% /collapse %}}
