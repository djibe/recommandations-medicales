+++
title = "Générateur et modèle de contrat de remplacement du médecin généraliste libéral"
titleSeo = "Modèle et contrat remplacement du médecin généraliste"
description = "Générateur et modèle de contrat de remplacement de médecin généraliste libéral d'après le modèle du CNOM"
longHtml = true
auteurs = ["Jean-Baptiste FRON"]
date = "2022-12-05T12:18:00+02:00"
publishdate = "2022-12-08"
lastmod = "2023-12-21"
annees = "2023"
sources = ["CNOM"]
tags = []
image = true
imageSrc = "storyset / Freepik"
todo = "validate form > Store data > Copier > Télécharger .doc"
+++

**RecoMédicales** vous facilite la création d'un contrat de remplacement de médecin généraliste d'après le modèle officiel du Conseil de l'Ordre (CNOM).
{.lead}

## Générer et éditer un contrat de remplacement pour le médecin généraliste

Créer un contrat de remplacement pour le médecin libéral depuis le navigateur web. Il vous faut ensuite l'envoyer à votre Conseil départemental ([annuaire](https://www.conseil-national.medecin.fr/lordre-medecins/conseils-regionaux-departementaux/conseils-departementaux-lordre), bandeau de droite: "Contacter mon conseil").

> Aucune donnée n'est transmise (comme partout ailleurs sur **RecoMédicales**)

<form class="card card-body shadow-none border flex-wrap mb-3" id="contract-generator">
<fieldset>
<legend class="typography-overline">Médecin installé</legend>
<div class="form-group d-flex">
  <input type="radio" id="contract-sex-f" name="contract-sex" class="d-none">
  <label for="contract-sex-f" class="chip chip-action chip-choice">Madame</label>
  <input type="radio" id="contract-sex-m" name="contract-sex" class="d-none">
  <label for="contract-sex-m" class="chip chip-action chip-choice">Monsieur</label>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-name">Prénom et NOM du médecin installé</label>
  <input class="form-control" id="contract-name" type="text" autocomplete="name" required>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-address">Adresse du médecin installé</label>
  <input class="form-control" id="contract-address" type="text" required>
  <small class="form-text">Adresse complète sur 1 ligne</small>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-spe">Spécialité</label>
  <input class="form-control" id="contract-spe" type="text" value="Médecin généraliste" autocomplete="off" required>
</div>
<div class="form-group floating-label textfield-box form-ripple w-50">
  <label for="contract-inscription">RPPS</label>
  <input class="form-control" id="contract-inscription" type="text" inputmode="numeric" pattern="[0-9]{11}" aria-label="RPPS à 11 chiffres" maxlength="11" required>
  <small class="form-text">Le RPPS a 11 chiffres</small>
</div>
</fieldset>
<fieldset>
<legend class="typography-overline">Médecin remplaçant</legend>
<div class="form-group d-flex">
  <input type="radio" id="contract-sex-substitute-f" name="contract-sex-substitute" class="d-none" value="f">
  <label for="contract-sex-substitute-f" class="chip chip-action chip-choice">Madame</label>
  <input type="radio" id="contract-sex-substitute-m" name="contract-sex-substitute" class="d-none" value="m">
  <label for="contract-sex-substitute-m" class="chip chip-action chip-choice">Monsieur</label>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-name-substitute">Prénom et NOM du remplaçant</label>
  <input class="form-control" id="contract-name-substitute" type="text" autocomplete="off" required>
</div>
<div class="form-group floating-label textfield-box form-ripple">
  <label for="contract-address-substitute">Adresse du remplaçant</label>
  <input class="form-control" id="contract-address-substitute" type="text" autocomplete="off" required>
  <small class="form-text">Adresse complète sur 1 ligne</small>
</div>
<div class="d-flex">
<div class="form-group floating-label textfield-box form-ripple w-50 mr-3">
  <label for="contract-inscription-substitute">RPPS ou licence</label>
  <input class="form-control" id="contract-inscription-substitute" type="text" required>
</div>
<div class="form-group floating-label textfield-box form-ripple w-50">
  <label class="mb-2" for="contract-urssaf">Siret</label>
  <input class="form-control" id="contract-urssaf" type="text" inputmode="numeric" pattern="[0-9]{14}" maxlength="14">
  <small class="form-text">Le numéro URSSAF a 14 chiffres</small>
</div>
</div>

**NB.** Le remplaçant doit fournir son assurance professionnelle

</fieldset>
<fieldset>
<legend class="typography-overline">Contrat</legend>
<div class="d-flex">
<div class="form-group floating-label textfield-box form-ripple w-50 mr-3">
  <label for="contract-date">Fait le</label>
  <input class="form-control" id="contract-date" type="date">
</div>
<div class="form-group floating-label textfield-box form-ripple w-50">
  <label for="contract-retrocession">Rétrocession (%)</label>
  <input class="form-control" id="contract-retrocession" type="number" min="20" max="100" required>
</div>
</div>
<div class="form-group floating-label textfield-box">
  <label for="contract-duration">Période (texte libre)</label>
  <textarea class="form-control" id="contract-duration" placeholder="ex: les mercredis du 01/01/2023 au 31/12/2023 | les 4, 5 et 6 mars 2023 ..." rows="3"></textarea>
</div>
<small>En cas de remplacement régulier de courte durée, préciser le/les jour(s) ou la/les demi-journée(s) de remplacement.</small>
<div class="form-group mt-4 ml-4 custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="contract-competition" onclick="document.getElementById('contract-competition-block').classList.toggle('d-none')">
  <label class="custom-control-label" for="contract-competition">Clause de non-concurrence</label>
</div>

Adapter l'article 8 en en cas d'activation de la clause de non-concurrence.

</fieldset>
<p class="text-center my-3">Chrome/Edge: cliquez ici avant de lancer l'impression</p>
<button class="btn btn-outline-primary d-print-none mt-4" type="button" id="contract-btn" onclick="printPageArea('contract-generated')">
  <svg class="svg-primary mr-2" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg> Imprimer le contrat
</button>
</form>
<script>
  // Contract generator by djibe
  window.addEventListener( 'load', () => {
    const sexMan = document.getElementById('contract-sex-m')
    const sexSubstituteMan = document.getElementById('contract-sex-substitute-m')
    const titleFull = document.getElementsByClassName('contract-title-full')
    const titleSubstituteFull = document.getElementsByClassName('contract-title-substitute-full')
    const titleShort = document.getElementsByClassName('contract-title-short')
    const titleSubstituteShort = document.getElementsByClassName('contract-title-substitute-short')
    const titlePronoun = document.getElementsByClassName('contract-title-pronoun')
    const titleSubstitutePronoun = document.getElementsByClassName('contract-title-substitute-pronoun')
    const titleSubstitutePronoun2 = document.getElementsByClassName('contract-title-substitute-pronoun2')
    const name = document.getElementById('contract-name')
    const nameElems = document.getElementsByClassName('contract-name-text')
    const address = document.getElementById('contract-address')
    const addressElems = document.getElementsByClassName('contract-address-text')
    const addressSubstitute = document.getElementById('contract-address-substitute')
    const addressSubstituteElems = document.getElementsByClassName('contract-address-substitute-text')
    const spe = document.getElementById('contract-spe')
    const speElems = document.getElementsByClassName('contract-spe-text')
    const inscription = document.getElementById('contract-inscription')
    const inscriptionElems = document.getElementsByClassName('contract-inscription-text')
    const inscriptionSubstitute = document.getElementById('contract-inscription-substitute')
    const inscriptionSubstituteElems = document.getElementsByClassName('contract-inscription-substitute-text')
    const nameSubstitute = document.getElementById('contract-name-substitute')
    const nameSubstituteElems = document.getElementsByClassName('contract-name-substitute-text')
    const urssaf = document.getElementById('contract-urssaf')
    const urssafElems = document.getElementsByClassName('contract-urssaf-text')
    const duration = document.getElementById('contract-duration')
    const durationElems = document.getElementsByClassName('contract-duration-text')
    const date = document.getElementById('contract-date')
    date.value = new Date().toISOString().substring(0, 10);
    const dateElems = document.getElementsByClassName('contract-date-text')
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
    [...document.querySelectorAll('#contract-generator input')].forEach((elem) => { elem.addEventListener('change', () => editContract() ) });
    [...document.querySelectorAll('#contract-generator textarea')].forEach((elem) => { elem.addEventListener('change', () => editContract() ) });
    const editContract = () => {
      [...titleFull].forEach((elem) => { elem.textContent = setPolite(sexMan).full });
      [...titleSubstituteFull].forEach((elem) => { elem.textContent = setPolite(sexSubstituteMan).subFull });
      [...titleShort].forEach((elem) => { elem.textContent = setPolite(sexMan).subShort });
      [...titleSubstituteShort].forEach((elem) => { elem.textContent = setPolite(sexSubstituteMan).subShort });
      [...titlePronoun].forEach((elem) => { elem.textContent = setPolite(sexMan).pronoun });
      [...titleSubstitutePronoun].forEach((elem) => { elem.textContent = setPolite(sexSubstituteMan).pronoun });
      [...titleSubstitutePronoun2].forEach((elem) => { elem.textContent = setPolite(sexSubstituteMan).pronoun2 });
      [...nameElems].forEach((elem) => { elem.textContent = name.value });
      [...addressElems].forEach((elem) => { elem.textContent = address.value });
      [...addressSubstituteElems].forEach((elem) => { elem.textContent = addressSubstitute.value });
      [...speElems].forEach((elem) => { elem.textContent = spe.value });
      [...inscriptionElems].forEach((elem) => { elem.textContent = inscription.value });
      window.localStorage.setItem('contract-inscription', inscription.value);
      [...nameSubstituteElems].forEach((elem) => { elem.textContent = nameSubstitute.value });
      [...urssafElems].forEach((elem) => { elem.textContent = urssaf.value });
      window.localStorage.setItem('contract-urssaf', urssaf.value);
      [...inscriptionSubstituteElems].forEach((elem) => { elem.textContent = inscriptionSubstitute.value });
      [...durationElems].forEach((elem) => { elem.textContent = duration.value });
      window.localStorage.setItem('contract-duration', duration.value);
      [...dateElems].forEach((elem) => { elem.textContent = setContractDate(date.value) });
      retrocessionElem.textContent = retrocession.value;
    }
    const setContractDate = (dateVal) => { return (dateVal != null && dateVal.length !== 0)?new Date(dateVal).toLocaleDateString('fr') : new Date().toLocaleDateString('fr') };
    const setPolite = ( radio ) => { return (radio.checked)?isMan() : isWoman() }
    const isMan = () => {
      return obj = {
        full: 'le docteur',
        pronoun: 'il',
        pronoun2: 'lui',
        subFull: 'Monsieur',
        subShort: 'M.'
      }
    };
    const isWoman = () => {
      return obj = {
        full: 'la docteure',
        pronoun: 'elle',
        pronoun2: 'elle',
        subFull: 'Madame',
        subShort: 'Mme'
      }
    };
    editContract();
  })
  function printPageArea(areaID) {
      const printContent = document.getElementById(areaID).innerHTML;
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
  };
</script>
<div class="card card-body user-select-all mb-4" id="contract-generated">
<div class="sheet">

Contrat de remplacement  
en exercice libéral
{.typography-headline-5 .text-primary .text-center}

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

<span class="contract-title-full">La docteure</span> <span class="contract-name-text">X</span>, <span class="contract-spe-text">Médecin généraliste</span>  
N° RPPS <span class="contract-inscription-text">...</span>  
exerçant à <span class="contract-address-text">...</span>

d'une part
{.text-right}

Et

<span class="contract-title-substitute-full">Madame</span> <span class="contract-name-substitute-text">Z</span>  
RPPS/license: <span class="contract-inscription-substitute-text">...</span>  
Adresse: <span class="contract-address-substitute-text">...</span>  
SIRET: <span class="contract-urssaf-text">...</span>

d'autre part
{.text-right}

### PRÉAMBULE {.typography-headline-6 .text-center}

Dans le souci de respecter l'obligation déontologique qui est la sienne d'assurer la permanence des soins et conformément aux dispositions de l'article R.4127-65 du code de la santé publique (code de déontologie), <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> a contacté <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span>, régulièrement autorisé(e), en vertu de l'article L.4131-2 du code de la santé publique, pour prendre en charge, lors de la cessation temporaire de son activité professionnelle habituelle, les patients qui feraient appel à <span class="contract-title-substitute-pronoun2">elle</span>. Pour permettre le bon déroulement de ce remplacement, <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> met à la disposition de <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> son cabinet de consultations sis <span class="contract-address-text">...</span> et son secrétariat.

</div>
<div class="sheet">

<span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> assume de ce fait toutes les obligations inscrites dans le code de déontologie. <span class="contract-title-substitute-pronoun text-capitalize">Elle</span> ne peut aliéner son indépendance professionnelle sous quelque forme que ce soit.

*Il a été convenu ce qui suit*
{.text-center}

**Article 1er**

Dans le souci de la permanence des soins, <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> charge <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> qui accepte, de le remplacer temporairement auprès des patients qui feraient appel à <span class="contract-title-substitute-pronoun2">elle</span>.

Les patients doivent être avertis, dès que possible, de la présence d'un(e) remplaçant(e), notamment lors de toute demande de visite à domicile ou de rendez-vous au cabinet médical.

<span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> doit consacrer à cette activité tout le temps nécessaire selon des modalités qu'<span class="contract-title-substitute-pronoun">elle</span> fixe librement<sup>1</sup>. <span class="contract-title-substitute-pronoun text-capitalize">Elle</span> s'engage à donner, à tout malade faisant appel à <span class="contract-title-substitute-pronoun2">elle</span>, des soins consciencieux et attentifs dans le respect des dispositions du code de déontologie.

Hors le cas d'urgence, <span class="contract-title-substitute-pronoun">elle</span> peut, dans les conditions de l'article R.4127-47 du code de la santé publique (code de déontologie), refuser ses soins pour des raisons professionnelles ou personnelles.

**Article 2**

Le présent contrat de remplacement est prévu pour une période couvrant <span class="contract-duration-text"></span> compris.

Son éventuel renouvellement est subordonné au respect des dispositions de l'article L.4131-2 du code de la santé publique.

**Article 3**

Pendant la durée du présent contrat de remplacement et pour les besoins de son exécution, <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> a l'usage des locaux professionnels, installations et appareils que <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> met à sa disposition. <span class="contract-title-substitute-pronoun text-capitalize">Elle</span> doit en faire un usage raisonnable.

Compte tenu du caractère par nature provisoire de l'activité du remplaçant/de la remplaçante, celle-ci /celui-ci s'interdit toute modification des lieux ou de leur destination.

<small>1 Il est recommandé que les modalités habituelles de fonctionnement du cabinet soient précisées au remplaçant/à la remplaçante, dans le souci de la permanence des soins.</small>

</div>
<div class="sheet">

**Article 4**

<span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> exerce son art en toute indépendance. <span class="contract-title-substitute-pronoun">Elle</span> est seul(e) responsable vis-à-vis des patients et des tiers des conséquences de son exercice professionnel et conserve seul(e) la responsabilité de son activité professionnelle pour laquelle <span class="contract-title-substitute-pronoun">elle</span> s'assure personnellement à ses frais à une compagnie notoirement solvable. <span class="contract-title-substitute-pronoun text-capitalize">Elle</span> doit apporter la preuve de cette assurance avant le début de son activité.²

**Article 5**

<span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> utilise conformément à la convention nationale les ordonnances ainsi que les feuilles de soins et imprimés pré-identifiés au nom de <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> et/ou sa CPF³ dans son activité relative aux seuls patients de <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span>.

En outre, <span class="contract-title-substitute-pronoun">elle</span> doit faire mention de son identification personnelle sur les ordonnances, feuilles de soins et imprimés réglementaires qu'<span class="contract-title-substitute-pronoun">elle</span> sera amené(e) à remplir.

**Article 6**

Les deux co-contractants procèdent à des déclarations fiscales et sociales indépendantes et supportent personnellement, chacun(e) en ce qui les concerne, la totalité de leurs charges fiscales et sociales afférentes au dit remplacement.

**Article 7**

<span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> perçoit l'ensemble des honoraires correspondant aux actes effectués sur les patients à qui <span class="contract-title-substitute-pronoun">elle</span> a donné ses soins.

<span class="contract-title-substitute-pronoun text-capitalize">Elle</span> doit remplir les obligations comptables normales et habituelles qui lui sont imposées réglementairement.

En fin de remplacement, <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> reverse à <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> <span id="contract-retrocession-text">...</span>% du total des honoraires perçus et à percevoir correspondant au remplacement<sup>4</sup>.

En cas de participation, au cours du remplacement, à la permanence des soins ambulatoire, le montant de la rémunération d'astreinte est dû à <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> qui a exécuté la/les garde(s).

Conformément aux dispositions de l'article R.4127-66 du code de la santé publique (code de déontologie médicale), le remplacement terminé, <span class="contract-title-substitute-full">Madame</span> <span class="contract-name-substitute-text">Z</span> doit cesser toute activité s'y rapportant et transmettre les informations nécessaires à la continuité des soins.

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

En application des dispositions ci-dessus si, au terme du remplacement prévu au présent contrat, la/le remplaçant(e) a remplacé <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> pendant une période de trois mois consécutifs ou non, <span class="contract-title-substitute-pronoun">elle</span> ne pourra, pendant une durée de deux ans, s'installer dans un poste où <span class="contract-title-substitute-pronoun">elle</span> puisse entrer en concurrence directe avec le médecin remplacé(e) ou éventuellement ses associé(e)s c'est-à-dire dans un rayon de .../ou dans la/les commune(s) de .... /ou dans l'/les arrondissements (préciser ici commune(s), arrondissement(s), ...).
</div>

**Option 2**

Conformément à la possibilité offerte par les dispositions ci-dessus, <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> renonce dès à présent à se prévaloir de l'interdiction d'installation prévue à l'article R4127-86 du code de la santé publique (code de déontologie médicale) et s'engage à donner à <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> l'accord éventuellement nécessaire de sa part à son installation et à notifier cet accord au conseil départemental.

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

Conformément aux dispositions des articles R.4127-65 (code de déontologie), ce contrat sera communiqué, avant le début du remplacement, par <span class="contract-title-full">la docteure</span> <span class="contract-name-text">X</span> au Conseil départemental au tableau duquel il est inscrit et par <span class="contract-title-substitute-short">Mme</span> <span class="contract-name-substitute-text">Z</span> au conseil départemental auprès duquel <span class="contract-title-substitute-pronoun">elle</span> est enregistré(e).

Son renouvellement sera soumis à ces mêmes dispositions.

Fait en trois exemplaires  
(dont un pour le conseil départemental)  
le <span class="contract-date-text">...</span>
{.text-right}

<div class="d-flex justify-content-between">
  <p><span class="contract-title-full">La docteure</span> <span class="contract-name-text">X</span></p>
  <p><span class="contract-title-substitute-full">Madame</span> <span class="contract-name-substitute-text">Z</span></p>
</div>

<small>6 Les parties peuvent renoncer à cette modalité de l'arbitrage et, dans ce cas, il suffit de supprimer la mention de l'amiable composition.</small>  
<small>7 Les parties peuvent renoncer à cette modalité de l'arbitrage et, dans ce cas, il suffit de supprimer la mention de l'amiable composition.</small>

</div>
<div class="sheet">

### Déclaration de remplacement<br>en exercice libéral {.text-uppercase .text-center .my-5}

Dans le cadre du contrat signé le <span class="contract-date-text">...</span>

<span class="contract-title-full">La docteure</span> <span class="contract-name-text">X</span>, <span class="contract-spe-text">Médecin généraliste</span>  
N° RPPS <span class="contract-inscription-text">...</span>  
exerçant à <span class="contract-address-text">...</span>

Demande l'autorisation de se faire remplacer
{.typography-headline-6 .text-uppercase}

<span class="contract-duration-text"></span>

Par

<span class="contract-title-substitute-full">Madame</span> <span class="contract-name-substitute-text">Z</span>  
RPPS/licence: <span class="contract-inscription-substitute-text">...</span>  
Adresse: <span class="contract-address-substitute-text">...</span>  
SIRET: <span class="contract-urssaf-text">...</span>

<div class="d-flex justify-content-between mt-5">
  <p class="font-weight-bold"><span class="contract-title-full">La docteure</span> <span class="contract-name-text">X</span></p>
  <p class="font-weight-bold"><span class="contract-title-substitute-full">Madame</span> <span class="contract-name-substitute-text">Z</span></p>
</div>

</div>
</div>

> Fait avec ❤️ par Jean-Baptiste Fron

## Source

[Conseil national de l'Ordre des médecins. Contrat pour un remplacement en libéral. 17/04/2019.](https://www.conseil-national.medecin.fr/documents-types-demarches/documents-types-internes/contrat-remplacement-liberal)
