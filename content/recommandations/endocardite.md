+++
title = "Endocardite infectieuse"
prefix = "l'"
shortname = "Endocardite"
synonyms = []
auteurs = ["Jean-Baptiste FRON"]
date = "2021-08-18T11:07:22+02:00"
publishdate = "2021-09-07"
lastmod = "2021-09-07"
specialites = ["cardiologie"]
annees = "2015"
sources = ["ESC"]
tags = []
anglais = ["Endocarditis"]
sctid = "56819008"
draft = false
flowchart = true
image = true
imageSrc = "Végétation sur la tricuspide. Daisuke Koya, Kazuyuki Shibuya, Ryuichi Kikkawa et Masakazu Haneda: Materialscientist, via Wikimedia Commons"
+++

{{%article-summary%}}

- Mesures de prévention pour toutes les personnes à risque
- Antibioprophylaxie uniquement pour les patients à haut risque
- Amoxicilline per os 2 g 30-60 minutes avant (50 mg/kg chez l'enfant)
- Soutien psychologique
- Adresser aux urgences toute suspicion d'endocardite

{{%/article-summary%}}
{{%collapse "Définition" %}}

Endocardite infectieuse (EI)
: Infection d'une ou plusieurs valves cardiaques par une bactérie, plus rarement par des germes intracellulaires ou des levures. L'atteinte de l'endocarde pariétale est plus rare. *L'endocardite infectieuse est rare mais grave*.
: La porte d'entrée est cutanée (40%), nosocomiale, toxicomanie IV, bucco-dentaire (1/3), gastro-intestinale (23%), urogénitale (4%) et autres.
: Les germes sont les staphylocoques (30-50%, mauvais pronostic), *streptocoques gallolyticus* et entérocoques.
: La prophylaxie repose sur les mesures d'hygiène et pour les patients à haut risque d'endocardite: l'antibioprophylaxie en geste invasif.

{{%info%}}1/3 des personnes à haut risque ne bénéficient pas d'antibioprophylaxie lors des soins invasifs{{%/info%}}

{{% /collapse %}}
{{%collapse "Patients à risque d'endocardite" %}}

### Patients à haut risque d'endocardite infectieuse

{{%info%}}
Seules personnes éligibles à l'antibioprophylaxie en soins dentaires à haut risque:

1. Valve prothétique  
Mécanique, homogreffe ou bioprothèse.
1. Antécédent d'endocardite
1. Cardiopathie congénitale
     - Cyanogène
     - Matériel prothétique implanté dans les 6 mois ou avec persistance de shunt ou régurgitation valvulaire

> *ESC 2015*
{{%/info%}}

### Gestes odontologiques à risque chez ces personnes

- Manipulation de la région gingivale ou péri-apicale de la dent
- Perforation de la muqueuse orale

> *ESC 2015*

Les autres gestes (coloscopie, endoscopie bronchique ...) ne nécessitent pas d'antibioprophylaxie HORS contexte infectieux.

{{% /collapse %}}
{{%collapse "Clinique" %}}

Les manifestations de l'endocardite infectieuse sont variées avec des présentations parfois trompeuses.

**Tableau typique:** apparition ou majoration d'un *souffle cardiaque* en contexte *fébrile*.  
Évoquer devant: AVC, purpura, lombalgies fébriles.

{{%warning%}}
Évoquer devant toute insuffisance cardiaque fébrile

---

Réaliser des hémocultures avant la prescription d'antibiotiques
{{%/warning%}}

- Fièvre +++
- Signes cutanés (5-15%)
  - Purpura pétéchial
  - Nodosités d'Osler ("faux panaris") pathognomoniques
  - Placard érythémateux palmoplantaire (de Janeway)
- Signes respiratoires
  - Toux
  - Dyspnée ± fébrile
- Signes ophtalmologiques
  - Purpura conjonctival
  - Tâches de Roth (fond d'œil)
- Signes rhumatologiques  
Arthralgies, lombalgie, myalgie.
- Signes neurologiques  
AVC, abcès cérébral.
- Signes rénaux  
Protéinurie/hématurie isolée, insuffisance rénale.

{{% /collapse %}}
{{%collapse "Prévention" %}}

Pour les personnes à risque d'endocardite infectieuse:

- Carte patient avec niveau de risque
- Éducation du patient  
Consulter rapidement en cas de fièvre, hygiène corporelle et dentaire, pas d'automédication, déconseiller piercing et tatouage.
- Soins dentaires
  - Brossage des dents ≥ 2 fois/j
  - Dentiste x 1/an avec détartrage
- Personnes à haut risque d'endocardite
  - Dentiste x 2/an avec détartrage
  - Antibioprophylaxie lors des gestes invasifs dentaires uniquement  
  Manipulation de la région gingivale ou péri-apicale de la dent, perforation de la muqueuse orale.
  - Contre-indication aux brossettes interdentaires ou pratiques agressives TODO:
- Désinfection des plaies
- Dépistage organisé des cancers (colorectal dès 50 ans ++)
- Soutien psychologique
- Limiter le recours au cathéter central, IV et prolongé

### Antibioprophylaxie des personnes à haut risque

Prise orale unique (voire IV) 30-60 minutes avant le geste invasif à risque.

{{%info%}}Amoxicilline 2 g (50 mg/kg chez l'enfant){{%/info%}}

**Si allergie:** clindamycine 600 mg (20 mg/kg chez l'enfant).

{{% /collapse %}}
{{%collapse "Conduite à tenir pour les personnes à risque" "show" %}}

{{< mermaid title="Conduite à tenir pour les personnes à haut risque d'endocardite infectieuse. Dr JB Fron d'après ESC 2015" >}}
graph TB
  fdr[Personne à haut risque ?]
  style fdr stroke:#4150f5, stroke-width:1px
  fdr --> liste("1. Valve prothétique<br>2. Antécédent d'endocardite<br>3. Cardiopathie congénitale cyanogène,<br>shunt ou régurgitation")
    liste -- Oui --> mesures("<b>Mesures générales</b><hr>- Éducation du patient<br>- Consulter rapidement si fièvre<br>- Soins dentaires rigoureux<br>- Désinfection des plaies<br>- Dépistage organisé des cancers<br>- Limiter les cathéters")
      mesures -- Antibioprophylaxie --> antibioprophylaxie("Soins dentaires à haut risque:<br>Amoxicilline 2 g 30-60 min avant<hr>Pas d'antibioprophylaxie des autres gestes<br>(sauf sepsis)")
{{< /mermaid >}}

{{%/collapse%}}
{{%collapse "Sources" %}}

- [Duval X., Iung B. Prophylaxie de l’endocardite infectieuse. Archives des Maladies du Coeur et des Vaisseaux - Pratique. Volume 2021. Issue 298. 2021. Pages 12-15. ISSN 1261-694X.](https://doi.org/10.1016/j.amcp.2021.03.003)
- [Collège National des Enseignants de Cardiologie. Endocardite infectieuse. Item 149 - UE6. Cardiologie 2e édition. Octobre 2019.](https://sfcardio.fr/sites/default/files/2019-11/2015-2e_Ref_Cardio_ch11_endocardite.pdf)
- [Habib H. et al, ESC Scientific Document Group. 2015 ESC Guidelines for the management of infective endocarditis: The Task Force for the Management of Infective Endocarditis of the European Society of Cardiology (ESC) Endorsed by: European Association for Cardio-Thoracic Surgery (EACTS), the European Association of Nuclear Medicine (EANM). European Heart Journal. Volume 36. Issue 44. 21 November 2015. Pages 3075–3128.](https://doi.org/10.1093/eurheartj/ehv319)

{{% /collapse %}}
