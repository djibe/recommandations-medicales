+++
title = "Générateur de contrat et modèle de contrat pour le remplacement en médecine libérale"
titleSeo = "Générateur et modèle de contrat de remplacement"
description = "Modèle de contrat pour les remplacements de médecins libéraux et générateur de contrat"
auteurs = ["Jean-Baptiste FRON"]
date = "2022-12-05T12:18:00+02:00"
publishdate = "2022-12-05"
lastmod = "2022-12-05"
sources = ["CNOM"]
tags = []
printPlugin = true
draft = true
image = true
imageSrc = "storyset / Freepik"
todo = "durée m-j > sexe H > plugin > webkit-autofill > Copier > Télécharger .doc"
+++

Le moment de signer le contrat de remplacement donne toujours les mêmes suées aux médecins concernés. On ne sait plus où l'on a rangé le précédent, on la flemme de changer les noms.  
Bref, c'est la plaie et on remercie l'Ordre ne pas nous permettre d'éditer ce contrat facilement.
{.lead}

## Générer un contrat de remplacement

Créez votre contrat de remplacement en quelques clics.  
Évidemment aucune donnée n'est récoltée (comme partout ailleurs sur RecoMédicales).

<div class="card card-body shadow-none border flex-wrap mb-5" id="contract-generator">

### Médecin installé {.typography-overline}

<div class="form-group d-flex">
  <input type="radio" id="contract-sex-f" name="contract-sex" class="d-none" value="f" required>
  <label for="contract-sex-f" class="chip chip-action chip-choice">Madame</label>
  <input type="radio" id="contract-sex-m" name="contract-sex" class="d-none" value="m">
  <label for="contract-sex-m" class="chip chip-action chip-choice">Monsieur</label>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-name">Prénom et NOM du médecin installé</label>
  <input class="form-control" id="contract-name" type="text" autocomplete="name" required>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-address">Adresse du médecin installé</label>
  <input class="form-control" id="contract-address" type="text" autocomplete="street-address" required>
  <small class="form-text">Adresse complète sur 1 ligne</small>
</div>
<div class="form-group floating-label textfield-box form-ripple w-50">
  <label for="contract-inscription">Numéro ordinal</label>
  <input class="form-control" id="contract-inscription" type="text" required>
</div>

### Médecin remplaçant {.typography-overline .mt-4}

<div class="form-group d-flex">
  <input type="radio" id="contract-sex-substitute-f" name="contract-sex-substitute" class="d-none" value="f" required>
  <label for="contract-sex-substitute-f" class="chip chip-action chip-choice">Madame</label>
  <input type="radio" id="contract-sex-substitute-m" name="contract-sex-substitute" class="d-none" value="m">
  <label for="contract-sex-substitute-m" class="chip chip-action chip-choice">Monsieur</label>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-name-substitute">Prénom et NOM du remplaçant</label>
  <input class="form-control" id="contract-name-substitute" type="text" autocomplete="off" required>
</div>
<div class="form-group floating-label textfield-box form-ripple w-50">
  <label class="mb-2" for="contract-name-substitute">Siret</label>
  <input class="form-control" id="contract-urssaf" type="number" max="99999999999999" autocomplete="off">
  <small class="form-text">Numéro URSSAF à 14 chiffres</small>
</div>

**NB.** Le remplaçant doit fournir son assurance professionnelle

### Contrat {.typography-overline .mt-4}

<div class="d-flex">
<div class="form-group floating-label textfield-box form-ripple w-50 mr-3">
  <label for="contract-date">Fait le</label>
  <input class="form-control" id="contract-date" type="date" required>
</div>
<div class="form-group floating-label textfield-box form-ripple w-50">
  <label for="contract-retrocession">Rétrocession (%)</label>
  <input class="form-control" id="contract-retrocession" type="number" min="20" max="100" required>
</div>
</div>
<div class="form-group floating-label textfield-box">
  <label for="contract-duration">Période (texte libre)</label>
  <textarea class="form-control" id="contract-duration" placeholder="ex. 01/01/2023 au 31/12/2023, ou 4, 5 et 6 mars 2023 ..." rows="3"></textarea>
</div>
<small>En cas de remplacement régulier de courte durée, préciser le/les jour(s) ou la/les demi-journée(s) de remplacement.</small>
<div class="form-group mt-4 ml-4 custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="contract-competition" onclick="document.getElementById('contract-competition-block').classList.toggle('d-none')">
  <label class="custom-control-label" for="contract-competition">Clause de non-concurrence</label>
</div>

Adapter l'article 8 en en cas d'activation de la clause de non-concurrence.

</div>
<script>
  // Contract generator by djibe
  window.addEventListener( 'DOMContentLoaded', event => {
    const name = document.getElementById('contract-name')
    const nameElems = document.getElementsByClassName('contract-name-text')
    const address = document.getElementById('contract-address')
    const addressElems = document.getElementsByClassName('contract-address-text')
    const inscription = document.getElementById('contract-inscription')
    const inscriptionElem = document.getElementById('contract-inscription-text')
    const nameSubstitute = document.getElementById('contract-name-substitute')
    const nameSubstituteElems = document.getElementsByClassName('contract-name-substitute-text')
    const urssaf = document.getElementById('contract-urssaf')
    const urssafElem = document.getElementById('contract-urssaf-text')
    const duration = document.getElementById('contract-duration')
    const durationElem = document.getElementById('contract-duration-text')
    const date = document.getElementById('contract-date')
    const dateElem = document.getElementById('contract-date-text')
    const retrocession = document.getElementById('contract-retrocession')
    const retrocessionElem = document.getElementById('contract-retrocession-text')
    const competition = document.getElementById('contract-competition')
    isInscriptionStored();
    isUrssafStored();
    isDurationStored();
    function isInscriptionStored() {
      const valueStored = localStorage.getItem('contract-inscription');
      if (valueStored){ inscription.value = valueStored };
    };
    function isUrssafStored() {
      const valueStored = localStorage.getItem('contract-urssaf');
      if (valueStored){ urssaf.value = valueStored };
    }
    function isDurationStored() {
      const valueStored = localStorage.getItem('contract-duration');
      if (valueStored){ duration.value = valueStored };
    }
    [...document.querySelectorAll('#contract-generator input')].forEach((elem) => { elem.addEventListener('change', () => editContract() ) })
    const editContract = () => {
      [...nameElems].forEach((elem) => {elem.textContent = name.value});
      [...addressElems].forEach((elem) => {elem.textContent = address.value});
      inscriptionElem.textContent = inscription.value;
      window.localStorage.setItem('contract-inscription', inscription.value);
      [...nameSubstituteElems].forEach((elem) => {elem.textContent = nameSubstitute.value});
      urssafElem.textContent = urssaf.value;
      window.localStorage.setItem('contract-urssaf', urssaf.value);
      durationElem.textContent = duration.value;
      window.localStorage.setItem('contract-duration', duration.value);
      dateElem.textContent = setContractDate(date.value);
      retrocessionElem.textContent = retrocession.value;
    }
    const setContractDate = (dateVal) => { return (dateVal != null && dateVal.length !== 0)?new Date(dateVal).toLocaleDateString('fr') : new Date().toLocaleDateString('fr') };
    editContract();
  })
</script>

<div class="card card-body user-select-all mb-4">
<section class="sheet">

Modèle de contrat de remplacement  
en exercice libéral
{.typography-headline-4 .text-primary .text-center}

Articles R.4127-65 et R.4127-91 du code de la santé publique (code de déontologie médicale)
{.text-center}

Remplacement par un(e) étudiant(e) en médecine titulaire d'une  
licence de remplacement
{.text-primary .text-center}

adopté le 9 février 1996  
MAJ 2 octobre 2008  
MAJ 10 septembre 2020
{.text-center}

Entre

La docteure <span class="contract-name-text">X</span> (indiquer les qualités et numéro <span id="contract-inscription-text">d'inscription au Tableau</span>)  
exerçant à <span class="contract-address-text">...</span>

d'une part
{.text-right}

Et

Madame <span class="contract-name-substitute-text">Z</span> (indiquer l'adresse et les caractéristiques de la licence de
remplacement),  
Immatriculé(e) à l'URSSAF, sous le n° <span id="contract-urssaf-text">...</span>

d'autre part
{.text-right}

### PRÉAMBULE {.typography-headline-6 .text-center}

Dans le souci de respecter l'obligation déontologique qui est la sienne d'assurer la permanence des soins et conformément aux dispositions de l'article R.4127-65 du code de la santé publique (code de déontologie), la docteure <span class="contract-name-text">X</span> a contacté Mme <span class="contract-name-substitute-text">Z</span>, régulièrement autorisé(e), en vertu de l'article L.4131-2 du code de la santé publique, pour prendre en charge, lors de la cessation temporaire de son activité professionnelle habituelle, les patients qui feraient appel à elle/lui. Pour permettre le bon déroulement de ce remplacement, la docteure <span class="contract-name-text">X</span> met à la disposition de Mme <span class="contract-name-substitute-text">Z</span> son cabinet de consultations sis <span class="contract-address-text">...</span> et son secrétariat.

</section>
<div class="sheet">

Mme <span class="contract-name-substitute-text">Z</span> assume de ce fait toutes les obligations inscrites dans le code de déontologie. Elle/Il ne peut aliéner son indépendance professionnelle sous quelque forme que ce soit.

Il a été convenu ce qui suit
{.text-center}

**Article 1er**

Dans le souci de la permanence des soins, la docteure <span class="contract-name-text">X</span> charge Mme <span class="contract-name-substitute-text">Z</span> qui accepte, de le remplacer temporairement auprès des patients qui feraient appel à elle/lui.

Les patients doivent être avertis, dès que possible, de la présence d'un(e) remplaçant(e), notamment lors de toute demande de visite à domicile ou de rendez-vous au cabinet médical.

Mme <span class="contract-name-substitute-text">Z</span> doit consacrer à cette activité tout le temps nécessaire selon des modalités qu'elle/il fixe librement<sup>1</sup>. Elle/Il s'engage à donner, à tout malade faisant appel à elle/lui, des soins consciencieux et attentifs dans le respect des dispositions du code de déontologie.

Hors le cas d'urgence, elle/il peut, dans les conditions de l'article R.4127-47 du code de la santé publique (code de déontologie), refuser ses soins pour des raisons professionnelles ou personnelles.

**Article 2**

Le présent contrat de remplacement est prévu pour une période de ... mois (ou jours) s'étendant du <span id="contract-duration-text"></span> compris.

Son éventuel renouvellement est subordonné au respect des dispositions de l'article L.4131-2 du code de la santé publique.

**Article 3**

Pendant la durée du présent contrat de remplacement et pour les besoins de son exécution, Mme <span class="contract-name-substitute-text">Z</span> a l'usage des locaux professionnels, installations et appareils que la docteure <span class="contract-name-text">X</span> met à sa disposition. Elle/Il doit en faire un usage raisonnable.

Compte tenu du caractère par nature provisoire de l'activité du remplaçant/de la remplaçante, celle-ci /celui-ci s'interdit toute modification des lieux ou de leur destination.

<small>1 Il est recommandé que les modalités habituelles de fonctionnement du cabinet soient précisées au remplaçant/à la
remplaçante, dans le souci de la permanence des soins.</small>

</div>
<div class="sheet">

**Article 4**

Mme <span class="contract-name-substitute-text">Z</span> exerce son art en toute indépendance. Elle/Il est seul(e) responsable vis-à-vis des patients et des tiers des conséquences de son exercice professionnel et conserve seul(e) la responsabilité de son activité professionnelle pour laquelle elle /il s'assure personnellement à ses frais à une compagnie notoirement solvable. Elle/Il doit apporter la preuve de cette assurance avant le début de son activité.<sup>2</sup>

**Article 5**

Mme <span class="contract-name-substitute-text">Z</span> utilise conformément à la convention nationale les ordonnances ainsi que les feuilles de soins et imprimés pré-identifiés au nom de La docteure <span class="contract-name-text">X</span> et/ou sa CPF<sup>3</sup> dans son activité relative aux seuls patients de la docteure <span class="contract-name-text">X</span>.

En outre, elle/il doit faire mention de son identification personnelle sur les ordonnances, feuilles de soins et imprimés réglementaires qu'elle/il sera amené(e) à remplir.

**Article 6**

Les deux co-contractants procèdent à des déclarations fiscales et sociales indépendantes et supportent personnellement, chacun(e) en ce qui les concerne, la totalité de leurs charges fiscales et sociales afférentes au dit remplacement.

**Article 7**

Mme <span class="contract-name-substitute-text">Z</span> perçoit l'ensemble des honoraires correspondant aux actes effectués sur les patients à qui elle/il a donné ses soins.

Elle/Il doit remplir les obligations comptables normales et habituelles qui lui sont imposées réglementairement.

En fin de remplacement, la docteure <span class="contract-name-text">X</span> reverse à Mme <span class="contract-name-substitute-text">Z</span> <span id="contract-retrocession-text">...</span>% du total des honoraires perçus et à percevoir correspondant au remplacement<sup>4</sup>.

En cas de participation, au cours du remplacement, à la permanence des soins ambulatoire, le montant de la rémunération d'astreinte est dû à Mme <span class="contract-name-substitute-text">Z</span> qui a exécuté la/les garde(s).

Conformément aux dispositions de l'article R.4127-66 du code de la santé publique (code de déontologie médicale), le remplacement terminé, Madame <span class="contract-name-substitute-text">Z</span> doit cesser toute activité s'y rapportant et transmettre les informations nécessaires à la continuité des soins.

<small>2 Il serait souhaitable que la copie de cette assurance soit jointe au présent contrat</small>
<small>3 Carte de professionnel en formation</small>
<small>4 Le taux de rétrocession d'honoraires doit être en rapport avec les charges du cabinet</small>

</div>
<div class="sheet">

**Article 8**

Aux termes de l'article R4127-86 du code de la santé publique (code de déontologie médicale), un << médecin ou un étudiant qui a remplacé un de ses confrères pendant trois mois, consécutifs ou non, ne doit pas, pendant une période de deux ans, s'installer dans un cabinet où il puisse entrer en concurrence directe avec le médecin remplacé et avec les médecins qui, le cas échéant, exercent en association avec ce dernier, à moins qu'il n'y ait entre les intéressés un accord qui doit être notifié au conseil départemental.  
À défaut d'accord entre tous les intéressés, l'installation est soumise à l'autorisation du conseil départemental de l'Ordre. >>

<div class="d-none" id="contract-competition-block">

(Ne pas oublier de supprimer l'option non retenue)

**Option 1**

En application des dispositions ci-dessus si, au terme du remplacement prévu au présent contrat, la/le remplaçant(e) a remplacé la docteure <span class="contract-name-text">X</span> pendant une période de trois mois consécutifs ou non, elle/il ne pourra, pendant une durée de deux ans, s'installer dans un poste où elle/il puisse entrer en concurrence directe avec le médecin remplacé(e) ou éventuellement ses associé(e)s c'est-à-dire dans un rayon de .../ou dans la/les commune(s) de .... /ou dans l'/les arrondissements (préciser ici commune(s), arrondissement(s), ...).
</div>

**Option 2**

Conformément à la possibilité offerte par les dispositions ci-dessus, la docteure <span class="contract-name-text">X</span> renonce dès à présent à se prévaloir de l'interdiction d'installation prévue à l'article R4127-86 du code de la santé publique (code de déontologie médicale) et s'engage à donner à Mme <span class="contract-name-substitute-text">Z</span> l'accord éventuellement nécessaire de sa part à son installation et à notifier cet accord au conseil départemental.

**Article 9 : Conciliation**

Tous les litiges ou différends relatifs notamment à la validité, l'interprétation, l'exécution ou la résolution du présent contrat, sont soumis avant tout recours à une conciliation confiée au conseil départemental de l'Ordre des médecins, en application de l'article R.4127-56 du code de la santé publique (code de déontologie médicale).

**Article 10 : Arbitrage** <sup>5</sup>

En cas d'échec de la conciliation, les litiges ou différends relatifs à la validité, l'interprétation, l'exécution ou la résolution du présent contrat, seront soumis à l'arbitrage conformément au règlement d'arbitrage de la Chambre nationale d'arbitrage des médecins.

<small>5 La clause d'arbitrage (clause compromissoire) est facultative et les parties peuvent décider de ne pas y recourir ou encore y recourir dans des conditions différentes de celles proposées ci-dessus</small>
</div>
<div class="sheet">

**1re option :**

Dès à présent, les parties conviennent de soumettre leur litige à un arbitre unique.  
Le tribunal arbitral statuera avec les pouvoirs d'amiable compositeur.<sup>6</sup>  
Les parties peuvent faire appel de la sentence arbitrale.

**2e option :**

Dès à présent, les parties conviennent de soumettre leur litige à trois arbitres désignés selon les modalités définies à l'article 4 du règlement d'arbitrage de la Chambre nationale d'arbitrage des médecins.  
Le tribunal arbitral statuera avec les pouvoirs d'amiable compositeur. <sup>7</sup>  
Les parties renoncent à la possibilité de faire appel.

Le siège de la Chambre nationale d'arbitrage des médecins est fixé à PARIS 17, 4 rue Léon Jost.

**Article 11**

Les parties affirment sur l'honneur n'avoir passé aucune contre-lettre ou avenant relatif au présent contrat qui ne soit soumis au conseil départemental.

**Article 12**

Conformément aux dispositions des articles R.4127-65 (code de déontologie), ce contrat sera communiqué, avant le début du remplacement, par la docteure <span class="contract-name-text">X</span> au Conseil départemental au tableau duquel il est inscrit et par Mme <span class="contract-name-substitute-text">Z</span> au conseil départemental auprès duquel elle/il est enregistré(e).

Son renouvellement sera soumis à ces mêmes dispositions.

Fait en trois exemplaires  
(dont un pour le conseil départemental)  
le <span id="contract-date-text">...</span>
{.text-right}

<div class="d-flex justify-content-between"><p>La docteure <span class="contract-name-text">X</span></p><p>Madame <span class="contract-name-substitute-text">Z</span></p></div>

<small>6 Les parties peuvent renoncer à cette modalité de l'arbitrage et, dans ce cas, il suffit de supprimer la mention de l'amiable composition.</small>
<small>7 Les parties peuvent renoncer à cette modalité de l'arbitrage et, dans ce cas, il suffit de supprimer la mention de l'amiable composition.</small>

</div>
</div>

> Fait avec ❤️ par Jean-Baptiste Fron

## Source

[Conseil national de l'Ordre des médecins. Contrat pour un remplacement en libéral. 17/04/2019.](https://www.conseil-national.medecin.fr/documents-types-demarches/documents-types-internes/contrat-remplacement-liberal)
