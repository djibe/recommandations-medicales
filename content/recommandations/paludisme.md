+++
title = "Paludisme"
prefix = "le "
shortname = "Palu"
synonyms = ["Malaria"]
auteurs = ["Jean-Baptiste FRON"]
date = 2021-02-17T12:42:00+02:00
publishdate = 2021-02-17
lastmod = 2021-02-20
specialites = ["infectiologie"]
annees = "2021"
sources = ["MinSante", "Pasteur"]
tags = ["vaccin", "voyage"]
anglais = []
sctid = ""
draft = false
slider = true
paludisme = true
image = false
imageSrc = ""
todo = "snomed, piqures, http://medecinetropicale.free.fr/cours/conseilpaludisme.pdf"
+++

{{%article-summary%}}

- Évoquer devant toute fièvre en retour de voyage

{{%/article-summary%}}
{{%collapse "Indications à la prophylaxie palustre selon le pays de destination" %}}

Ces 3 sites permettent d'évaluer les recommandations concernant la nécessité d'un traitement préventif contre le paludisme.

<div class="d-flex flex-wrap">

{{< card-link title="Vaccins recommandés et prévention palustre selon l'Institut Pasteur pour un voyage" url="https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage" subtitle="Institut Pasteur" image="pasteur" >}}

{{< card-link title="Vaccins et conseils par pays" url="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/" subtitle="France Diplomatie" image="ministere" >}}

{{< card-link title="Vaccins recommandés et conseils médicaux par destination" url="https://www.pasteur-lille.fr/vaccinations-voyages/" subtitle="Pasteur Lille" image="pasteur" >}}

</div>

{{% /collapse %}}
{{%collapse "Molécules en prévention du paludisme" %}}

<div class="card card-body">
  <p class="card-title">Prophylaxie palustre selon le poids</p>
  <div class="form-group">
    <label for="weight">Poids</label>
    <div class="d-flex align-items-center">
      <input type="text" value="60" id="weight" oninput="weightInput.value = this.value">
      <input type="number" class="form-alternative ml-3" id="weightInput" value="60" min="5" max="60">
    </div>
  </div>
  <p class="card-text mb-1">Chloroquine</p>
  <p id="nivaquine">1 cp par jour ou 4 cuillères-mesure par jour (100 mg)</p>
  <hr>
  <p class="card-text mb-1">Atovaquone/proguanil</p>
  <p id="atovaquone">1 cp (250/100 mg) par jour pendant le repas à heure fixe</p>
  <hr>
  <p class="card-text mb-1">Méfloquine</p>
  <p id="mefloquine">1 cp à 250 mg 1 fois par semaine</p>
  <hr>
  <p class="card-text mb-1">Doxycycline monohydratée ou hyclate</p>
  <p id="doxycycline">1 cp à 100 mg pendant le dîner <span class="text-muted">(si 8+ ans)</span></p>
</div>

### Chloroquine

Spécialité: [Nivaquine®](http://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=65130778&typedoc=R) (cp, sirop) uniquement.

- Patient ≥ 60 kg  
Chloroquine 100 mg 1 cp par jour
- Adulte et enfant < 60 kg  
1,7 mg/kg en 1 prise par jour
- Enfant < 10 kg  
1 cuillère-mesure (25 mg), 1 jour sur 2

{{%info%}}
À débuter le jour du départ et poursuivre 4 semaines après le retour.  
**Contraception efficace** pour hommes et femmes jusqu'à **8 mois** après l'arrêt du traitement (soit 9 mois après le retour).  
Contre-indiqué si grossesse ou allaitement.
{{%/info%}}

### Atovaquone-proguanil

Spécialités: [atovaquone/proguanil gén 250/100 mg](http://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=66395950&typedoc=R) et [atovaquone/proguanil gén 62,5/25 mg](http://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=68303281&typedoc=R), cp uniquement.

- Personne ≥ 40 kg  
1 cp (250/100 mg) par jour pendant le repas à heure fixe
- Enfant de 31 à 39 kg  
3 cp (62,5/25 mg) par jour en 1 prise pendant le repas à heure fixe
- Enfant de 21 à 30 kg  
2 cp (62,5/25 mg) par jour en 1 prise pendant le repas à heure fixe
- Enfant de 11 à 20 kg  
1 cp (62,5/25 mg) par jour pendant le repas à heure fixe

{{%info%}}
À débuter la veille ou le jour du départ et poursuivre 7 jours après le retour.

La prise en continu est limitée à 3 mois consécutifs.
{{%/info%}}

### Méfloquine

Spécialité: [Lariam®](http://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=65999556&typedoc=R) (cp sécable) uniquement.

- Personne ≥ 45 kg  
1 cp à 250 mg 1 fois par semaine
- Enfant de 31 à 45 kg
3/4 cp à 250 mg 1 fois par semaine
- Enfant de 20 à 30 kg
1/2 cp à 250 mg 1 fois par semaine
- Enfant de 15 à 19 kg
1/4 cp à 250 mg 1 fois par semaine

Peut être utilisée pendant la grossesse.

**Effets indésirables:** anxiété, tristesse, dépression, agitation, confusion, tendance suicidaire, céphalées, vertiges, troubles du sommeil.  
Arrêt immédiat en cas de survenue.

{{%info%}}
À débuter au moins 10 jours avant le départ et poursuivre 3 semaines après le retour.  
Au mieux 3 semaines avant pour évaluer correctement la tolérance.  
{{%/info%}}

### Doxycycline (monohydrate ou hyclate)

Spécialités uniquement si **âge ≥ 8 ans**

- [Doxycycline monohydratée](http://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=63307856&typedoc=R) cp 50/100 mg ou [Doxycycline hyclate](http://base-donnees-publique.medicaments.gouv.fr/affichageDoc.php?specid=67061569&typedoc=R) cp 50/100 mg
  - Poids ≥ 40 kg  
  1 cp à 100 mg pendant le dîner
  - Poids < 40 kg  
  1 cp à 50 mg pendant le dîner

{{%info%}}
À débuter le jour de l'arrivée et poursuivre 4 semaines après le retour.  
Débuter au mieux 3 semaines avant pour évaluer correctement la tolérance.

Prendre pendant le dîner, au moins 1h avant le coucher.

Contre-indiqué avant 8 ans et pendant la grossesse.
{{%/info%}}

{{% /collapse %}}
{{%collapse "Source" %}}

[Institut Pasteur. Recommandations générales - Prévention du paludisme.](https://www.pasteur.fr/fr/centre-medical/vaccination/recommandations-generales#prvention-du-paludisme)

{{% /collapse %}}
