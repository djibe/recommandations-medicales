+++
title = "Hépatite C"
prefix = "l'"
shortname = "VHC"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = 2020-09-06T20:18:41+02:00
publishdate = 2020-09-06
lastmod = 2020-09-06
categories = ["infectiologie"]
guidelineyears = "2019"
sources = ["HAS"]
tags = ["hepatite"]
anglais = ["Viral hepatitis type C"]
sctid = "50711007"
draft = false
+++

{{%article-summary%}}



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
- [HSH]({{< ref "hsh.md" >}})
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

- Consommation d'alcool
- Consommation de drogues
- Rapports sexuels à risque
- Antécédents de transfusion
- Diabète

### Examen clinique

Poids, taille, **IMC**

{{% /collapse %}}
{{%collapse "Conduite à tenir" "show" %}}

{{< mermaid >}}
graph TB
  serologie[Sérologie/Anticorps anti-VHC] --> serologie+(Positive)
  style serologie stroke:#6200ee, stroke-width:1px
  serologie+ --> pcr(RT-PCR VHC<br>Sérologies VIH 1 + 2 + VHB)
  pcr --> mg(Adresser Hépato-gastro<br>Dépister l'entourage<br>Déclarer ALD)
  serologie --> serologie-(Négative)
  serologie- -.-> infRecente(Suspicion d'infection récente)
  infRecente -- 3 mois --> 3mois(Sérologie de contrôle)
  serologie- -.-> immunodep(Immunodépression)
  immunodep --> pcr2(RT-PCR VHC)
{{< /mermaid >}}

{{< mermaid >}}
graph TB
  trod[TROD VHC] --> trod+(Positif)
  trod+ --> serologie(Sérologie VHC)
    serologie -- Positive --> pcr(RT-PCR sur même prélèvement)
    pcr --> mg(Adresser Hépato-gastro<br>Dépister l'entourage<br>Déclarer ALD)
    serologie -- Négative --> TODO
  trod[TROD VHC] --> trod-(Négatif<br>Diagnostic infirmé)
  trod- -.-> infRecente(Suspicion d'infection récente)
  infRecente -- 3 mois --> 3mois(Sérologie de contrôle<br>ou TROD)
{{< /mermaid >}}

{{%/collapse%}}
{{%collapse "Information du patient" %}}

- Maladie grave pouvant être guérie le plus souvent
- Les soins liés à la maladie et ses complications sont intégralement remboursés
- Nécessité de prévenir tous les sujets avec contact à risque
- Consignes d'hépatoprotection
- Associations de patients

{{% /collapse %}}
{{%collapse "Sources" %}}

- [HAS. Hépatite C : prise en charge simplifiée chez l'adulte. Septembre 2019](https://www.has-sante.fr/jcms/c_2911891/fr/hepatite-c-prise-en-charge-simplifiee-chez-l-adulte)

{{% /collapse %}}
