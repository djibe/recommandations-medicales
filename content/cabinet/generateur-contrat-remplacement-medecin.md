+++
title = "Générateur et modèle de contrat de remplacement du médecin généraliste libéral"
titleSeo = "Éditer un contrat de remplacement de médecin"
description = "Générateur et modèle de contrat de remplacement de médecin généraliste libéral d'après le modèle du CNOM"
longHtml = true
noSearchContent = true
auteurs = ["Jean-Baptiste FRON"]
date = "2022-12-05T12:18:00+02:00"
publishdate = "2022-12-08"
lastmod = "2026-10-06"
annees = "2026"
sources = ["CNOM"]
tags = []
image = true
imageSrc = "storyset / Freepik"
todo = "Copier > Télécharger .doc"
+++

**RecoMédicales** vous facilite la création d'un contrat de remplacement de médecin généraliste d'après le modèle officiel du Conseil de l'Ordre (CNOM).
{.lead}

## Générer et éditer un contrat de remplacement pour le médecin généraliste {.mt-5}

Créer un contrat de remplacement pour le médecin libéral depuis le navigateur web. Le médecin remplacé l'envoie ensuite à son Conseil départemental de l'Ordre ([annuaire des CDOM](https://www.conseil-national.medecin.fr/contacts-ordre-des-medecins)).

> [!INFO]
> Aucune donnée n'est transmise (comme partout ailleurs sur **RecoMédicales**)

<div id="form-section">
  <div class="card">
      <div class="card-body">
        <form id="contratForm">
          <div class="row">
            <!-- Médecin Remplacé -->
            <div class="col-12">
              <h5 class="text-secondary mb-4">Médecin Remplacé</h5>
              <div class="form-group floating-label textfield-box form-ripple">
                <label for="nomRemplace">Prénom et Nom</label>
                <input type="text" class="form-control" id="nomRemplace" autocomplete="on" required oninvalid="setCustomValidity('Nom manquant')" onchange="this.setCustomValidity('')">
              </div>
              <div class="form-group">
                <label for="adresseCabinet">Adresse complète du cabinet</label>
                <textarea class="form-control" id="adresseCabinet" rows="3" autocomplete="on" required oninvalid="setCustomValidity('Adresse manquante')" onchange="this.setCustomValidity('')"></textarea>
              </div>
              <div class="form-group floating-label textfield-box form-ripple w-50">
                <label for="numOrdreRemplace">RPPS</label>
                <input type="text" class="form-control" id="numOrdreRemplace" inputmode="numeric" pattern="[0-9]{11}" aria-label="RPPS à 11 chiffres" maxlength="11" required oninvalid='setCustomValidity("RPPS non valide")' onchange='this.setCustomValidity("")'>
              </div>
              <small class="form-text">Le RPPS a 11 chiffres</small>
            </div>
            <!-- Remplaçant -->
            <div class="col-12">
              <hr class="my-4">
              <h5 class="text-secondary mb-4">Médecin remplaçant</h5>
              <div class="form-group floating-label textfield-box">
                <label for="statutRemplacant">Statut</label>
                <select class="form-control" id="statutRemplacant">
                  <option value="medecin">Médecin inscrit au Tableau</option>
                  <option value="etudiant">Étudiant avec licence de remplacement</option>
                </select>
              </div>
              <div class="form-group floating-label textfield-box">
                <label for="nomRemplacant">Prénom et Nom</label>
                <input type="text" class="form-control" id="nomRemplacant" required oninvalid="setCustomValidity('Nom manquant')" onchange="this.setCustomValidity('')">
              </div>
              <div class="form-group floating-label textfield-box" id="champsLicence" style="display: none;">
                <label for="numLicence">Numéro de Licence de remplacement</label>
                <input type="text" class="form-control" id="numLicence" oninvalid="setCustomValidity('Numéro manquant')" onchange="this.setCustomValidity('')">
              </div>
              <div class="form-group floating-label textfield-box" id="champsOrdre" style="display: flex;">
                <label for="numOrdreRemplacant">RPPS</label>
                <input type="text" class="form-control" id="numOrdreRemplacant" required inputmode="numeric" pattern="[0-9]{11}" aria-label="RPPS à 11 chiffres" maxlength="11" oninvalid='setCustomValidity("RPPS non valide")' onchange='this.setCustomValidity("")'>
              </div>
              <div class="form-group floating-label textfield-box">
                <label for="adresseRemplacant">Adresse du remplaçant</label>
                <input type="text" class="form-control" id="adresseRemplacant" required oninvalid="setCustomValidity('Adresse manquante')" onchange="this.setCustomValidity('')">
              </div>
              <div class="form-group floating-label textfield-box w-50">
                <label for="numUrssaf">Siret</label>
                <input type="text" class="form-control" id="numUrssaf" required inputmode="numeric" pattern="[0-9]{14}" maxlength="14" oninvalid="setCustomValidity('Le Siret a 14 chiffres')" onchange="this.setCustomValidity('')">
                <small class="form-text">Le numéro URSSAF a 14 chiffres</small>
              </div>
            </div>
          </div>
          <!-- Conditions -->
          <div class="row">
            <div class="col-12">
              <hr class="my-4">
              <h5 class="text-secondary mb-4">Conditions</h5>
              <div class="form-group">
                <label for="periodeRemplacement">Période(s) de remplacement</label>
                <textarea class="form-control" id="periodeRemplacement" name="periodeRemplacement" rows="3" placeholder="Ex: Du 1er au 15 août 2026, ou tous les mercredis de l'année 2026..." required oninvalid="setCustomValidity('Période manquante')" onchange="this.setCustomValidity('')"></textarea>
              </div>
              <div class="d-flex">
                <div class="form-group floating-label textfield-box w-50 mr-3">
                  <label for="dateContrat">Fait le</label>
                  <input type="date" class="form-control" id="dateContrat" required oninvalid="setCustomValidity('Date de contrat manquante')" onchange="this.setCustomValidity('')">
                </div>
                <div class="form-group floating-label textfield-box w-50">
                  <label for="tauxRetrocession">Rétrocession (%)</label>
                  <input type="number" class="form-control" id="tauxRetrocession" min="10" max="100" required oninvalid="setCustomValidity('Rétrocession manquante')" onchange="this.setCustomValidity('')">
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-primary btn-lg px-4 mr-2">Générer le contrat</button>
              </div>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
<!-- SECTION CONTRAT (Cachée par défaut) -->
<div id="resultatContrat" class="card card-body border shadow-none" style="display: none;">
    <!-- Boutons déplacés en haut -->
    <div class="action-buttons mb-4 text-center">
        <button class="btn btn-primary mr-2" onclick="imprimerContrat()"><svg class="mr-2" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M19 8h-1V3H6v5H5c-1.66.0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55.0 1 .45 1 1v4h-2z"></path><circle cx="18" cy="11.5" r="1"></circle></svg> Imprimer le contrat</button>
        <button class="btn btn-outline-primary" onclick="exporterWord()"><svg class="svg-primary mr-2" height="24px" viewBox="0 -960 960 960" width="24px"><path aria-hidden="true" d="m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121h-80v-81H480v-200H240v560h240v80H240Zm0-80v-560 560Z"/></svg> Exporter en Word (.docx)</button>
    </div>
    <hr class="mb-4">
    <div id="contenuContrat" class="text-justify"></div>
</div>
<script>
    // Gestion de l'affichage des champs selon le statut
    const statutSelect = document.getElementById('statutRemplacant');
    const champsLicence = document.getElementById('champsLicence');
    const champsOrdre = document.getElementById('champsOrdre');
    statutSelect.addEventListener('change', function() {
        if (this.value === 'etudiant') {
            champsLicence.style.display = 'flex';
            champsOrdre.style.display = 'none';
        } else {
            champsLicence.style.display = 'none';
            champsOrdre.style.display = 'flex';
        }
    });
    // Chargement des données du LocalStorage
    window.onload = function() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('dateContrat').value = today;

        const savedData = JSON.parse(localStorage.getItem('infosMedecinRemplace'));
        if (savedData) {
            document.getElementById('nomRemplace').value = savedData.nomRemplace || '';
            document.getElementById('numOrdreRemplace').value = savedData.numOrdreRemplace || '';
            document.getElementById('adresseCabinet').value = savedData.adresseCabinet || '';
            document.getElementById('tauxRetrocession').value = savedData.tauxRetrocession || '70';
        }
    };

    // Sauvegarder les informations
    function sauvegarderInfos() {
        const infos = {
            nomRemplace: document.getElementById('nomRemplace').value,
            numOrdreRemplace: document.getElementById('numOrdreRemplace').value,
            adresseCabinet: document.getElementById('adresseCabinet').value,
            tauxRetrocession: document.getElementById('tauxRetrocession').value
        };
        localStorage.setItem('infosMedecinRemplace', JSON.stringify(infos));
    }

    // Génération du contrat
    document.getElementById('contratForm').addEventListener('submit', function(e) {
        e.preventDefault();
        genererLeTexte();
    });

    function genererLeTexte() {
        sauvegarderInfos();
        const data = {
            statut: document.getElementById('statutRemplacant').value,
            nomRemplace: document.getElementById('nomRemplace').value,
            numOrdreRemplace: document.getElementById('numOrdreRemplace').value,
            adresseCabinet: document.getElementById('adresseCabinet').value,
            nomRemplacant: document.getElementById('nomRemplacant').value,
            adresseRemplacant: document.getElementById('adresseRemplacant').value,
            numUrssaf: document.getElementById('numUrssaf').value,
            numLicence: document.getElementById('numLicence').value,
            numOrdreRemplacant: document.getElementById('numOrdreRemplacant').value,
            periodeRemplacement: document.getElementById('periodeRemplacement').value.replace(/\n/g, '<br>'),
            tauxRetrocession: document.getElementById('tauxRetrocession').value,
            dateContrat: new Date(document.getElementById('dateContrat').value).toLocaleDateString('fr-FR')
        };

        let html = '';
        // En-tête (commun)
        html += `<h2 class="text-center mb-4">CONTRAT DE REMPLACEMENT EN EXERCICE LIBÉRAL</h2>`;
        html += `<p class="text-center mb-5"><small>Articles R.4127-65 et R.4127-91 du code de la santé publique (code de déontologie médicale)</small></p>`;
        html += `<p><strong>Entre</strong></p>`;
        html += `<p>Le Docteur <strong>${data.nomRemplace}</strong> (N° d'inscription au Tableau : ${data.numOrdreRemplace}), exerçant à ${data.adresseCabinet}, d'une part,</p>`;
        html += `<p><strong>Et</strong></p>`;

        if (data.statut === 'etudiant') {
            html += `<p>Madame / Monsieur <strong>${data.nomRemplacant}</strong>, étudiant(e) en médecine, domicilié(e) à ${data.adresseRemplacant}, titulaire de la licence de remplacement suivante : ${data.numLicence}, immatriculé(e) à l'URSSAF sous le n° ${data.numUrssaf}, d'autre part,</p>`;
        } else {
            html += `<p>Le Docteur <strong>${data.nomRemplacant}</strong>, inscrit(e) au Tableau de l'Ordre (${data.numOrdreRemplacant}), domicilié(e) à ${data.adresseRemplacant}, immatriculé(e) à l'URSSAF sous le n° ${data.numUrssaf}, d'autre part,</p>`;
        }

        // Préambule
        html += `<h5 class="mt-4 text-center">PRÉAMBULE</h5>`;
        html += `<p>Dans le souci de respecter l'obligation déontologique qui est la sienne d'assurer la permanence des soins et conformément aux dispositions de l'article R.4127-65 du code de la santé publique (code de déontologie médicale), le Docteur ${data.nomRemplace} a contacté `;
        if (data.statut === 'etudiant') {
            html += `M. / Mme ${data.nomRemplacant}, régulièrement autorisé(e) en vertu de l'article L.4131-2 du code de la santé publique, pour prendre en charge`;
        } else {
            html += `le Docteur ${data.nomRemplacant}, médecin remplaçant(e), pour prendre en charge`;
        }
        html += `, lors de la cessation temporaire de son activité professionnelle habituelle, les patients qui feraient appel à lui/elle.</p>`;
        html += `<p>Pour permettre le bon déroulement de ce remplacement, le Docteur ${data.nomRemplace} met à la disposition de ${data.statut === 'etudiant' ? 'M. / Mme' : 'Docteur'} ${data.nomRemplacant} son cabinet de consultations sis ${data.adresseCabinet} et son secrétariat.</p>`;
        html += `<p>${data.statut === 'etudiant' ? 'M. / Mme' : 'Le Docteur'} ${data.nomRemplacant} assume de ce fait toutes les obligations inscrites dans le code de déontologie. Il/Elle ne peut aliéner son indépendance professionnelle sous quelque forme que ce soit.</p>`;
        html += `<p class="mt-4"><strong>Il a été convenu ce qui suit :</strong></p>`;

        // Article 1
        html += `<p><strong>Article 1er</strong><br>`;
        html += `Dans le souci de la permanence des soins, le Docteur ${data.nomRemplace} charge ${data.statut === 'etudiant' ? 'M. / Mme' : 'le Docteur'} ${data.nomRemplacant}, qui accepte, de le/la remplacer temporairement auprès des patients qui feraient appel à lui/elle.<br>`;
        html += `Les patients doivent être avertis, dès que possible, de la présence d'un(e) remplaçant(e), notamment lors de toute demande de visite à domicile ou de rendez-vous au cabinet médical.<br>`;
        html += `${data.statut === 'etudiant' ? 'M. / Mme' : 'Le Docteur'} ${data.nomRemplacant} doit consacrer à cette activité tout le temps nécessaire selon des modalités qu'il/elle fixe librement.<br>`;
        html += `Il/Elle s'engage à donner, à tout malade faisant appel à lui/elle, des soins consciencieux et attentifs dans le respect des dispositions du code de déontologie.</p>`;

        // Article 2
        html += `<p><strong>Article 2</strong><br>`;
        html += `Le présent contrat de remplacement est prévu pour la ou les périodes suivantes :<br>`;
        html += `<strong>${data.periodeRemplacement}</strong><br>`;
        if (data.statut === 'etudiant') {
            html += `<br>Son éventuel renouvellement est subordonné au respect des dispositions de l'article L.4131-2 du code de la santé publique.`;
        }
        html += `</p>`;

        // Article 3
        html += `<p><strong>Article 3</strong><br>`;
        html += `Pendant la durée du présent contrat de remplacement et pour les besoins de son exécution, ${data.statut === 'etudiant' ? 'M. / Mme' : 'le Docteur'} ${data.nomRemplacant} a l'usage des locaux professionnels, installations et appareils que le Docteur ${data.nomRemplace} met à sa disposition. Il/Elle en fait un usage raisonnable.<br>`;
        html += `Compte tenu du caractère par nature provisoire de l'activité du remplaçant(e), celui-ci/celle-ci s'interdit toute modification des lieux ou de leur destination.</p>`;

        // Article 4
        html += `<p><strong>Article 4</strong><br>`;
        html += `${data.statut === 'etudiant' ? 'M. / Mme' : 'Le Docteur'} ${data.nomRemplacant} exerce son art en toute indépendance. Il/Elle est seul(e) responsable vis-à-vis des patients et des tiers des conséquences de son exercice professionnel et conserve seul(e) la responsabilité de son activité professionnelle pour laquelle il/elle s'assure personnellement à ses frais à une compagnie notoirement solvable.</p>`;

        // Article 5
        html += `<p><strong>Article 5</strong><br>`;
        html += `${data.statut === 'etudiant' ? 'M. / Mme' : 'Le Docteur'} ${data.nomRemplacant} utilise conformément à la convention nationale les ordonnances ainsi que les feuilles de soins et imprimés pré-identifiés au nom du Docteur ${data.nomRemplace} et/ou sa propre carte de professionnel dans son activité relative aux seuls patients du Docteur ${data.nomRemplace}.<br>`;
        html += `En outre, il/elle doit faire mention de son identification personnelle sur les ordonnances, feuilles de soins et imprimés réglementaires qu'il/elle sera amené(e) à remplir.</p>`;

        // Article 6
        html += `<p><strong>Article 6</strong><br>`;
        html += `Les deux co-contractants procèdent à des déclarations fiscales et sociales indépendantes et supportent personnellement, chacun en ce qui le concerne, la totalité de leurs charges fiscales et sociales afférentes audit remplacement.</p>`;

        // Article 7
        html += `<p><strong>Article 7</strong><br>`;
        html += `${data.statut === 'etudiant' ? 'M. / Mme' : 'Le Docteur'} ${data.nomRemplacant} perçoit l'ensemble des honoraires correspondant aux actes effectués sur les patients à qui il/elle a donné ses soins.<br>`;
        html += `Il/Elle doit remplir les obligations comptables normales et habituelles qui lui sont imposées réglementairement.<br>`;
        html += `En fin de remplacement, le Docteur ${data.nomRemplace} reverse à ${data.statut === 'etudiant' ? 'M. / Mme' : 'au Docteur'} ${data.nomRemplacant} <strong>${data.tauxRetrocession} %</strong> du total des honoraires perçus et à percevoir correspondant au remplacement.<br>`;
        html += `Conformément aux dispositions de l'article R.4127-66 du code de la santé publique, le remplacement terminé, le/la remplaçant(e) doit cesser toute activité s'y rapportant et transmettre les informations nécessaires à la continuité des soins.</p>`;

        // Article 8 à 12
        html += `<p><strong>Article 8 (Installation)</strong><br>`;
        html += `En application de l'article R.4127-86, si le remplacement dure plus de trois mois (consécutifs ou non), le remplaçant ne pourra s'installer pendant deux ans en concurrence directe avec le médecin remplacé, à moins d'un accord notifié au Conseil départemental.</p>`;
        html += `<p><strong>Article 9 & 10 (Litiges)</strong><br>`;
        html += `Tous les litiges relatifs à la validité, l'interprétation ou l'exécution du contrat sont soumis avant tout recours à une conciliation confiée au conseil départemental de l'Ordre des médecins.</p>`;
        html += `<p><strong>Article 11 & 12 (Transmission)</strong><br>`;
        html += `Les parties affirment sur l'honneur n'avoir passé aucune contre-lettre. Ce contrat sera communiqué au conseil départemental de l'Ordre avant le début du remplacement.</p>`;

        // Signatures
        html += `<div class="my-5 row">
                    <div class="col-12 text-center mb-4">
                        <p>Fait en trois exemplaires<br>(dont un pour le conseil départemental)<br>
                        Le <strong>${data.dateContrat}</strong></p>
                    </div>
                    <div class="col-6 text-center">
                        <p><strong>Le Docteur Remplacé</strong></p>
                        <br><br><br>
                        <p><em>Signature</em></p>
                    </div>
                    <div class="col-6 text-center">
                        <p><strong>Le/La Remplaçant(e)</strong></p>
                        <br><br><br>
                        <p><em>Signature</em></p>
                    </div>
                 </div>`;

        document.getElementById('contenuContrat').innerHTML = html;
        document.getElementById('resultatContrat').style.display = 'block';
    }

    // Nouvelle fonction Pure JS pour imprimer uniquement le div
    function imprimerContrat() {
        const contenu = document.getElementById('contenuContrat').innerHTML;
        // Ouvre une fenêtre virtuelle cachée
        const fenetreImpression = window.open('', '_blank');
       // Injecte uniquement le HTML du contrat et les styles essentiels
fenetreImpression.document.write(`
          <html>
            <head>
              <title>Impression du Contrat</title>
              <!-- On injecte Bootstrap pour conserver la mise en forme (text-center, colonnes, etc.) -->
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
              <style>body { padding: 40px; font-family: Roboto, system-ui, Arial, sans-serif; color: #000; } .text-justify { text-align: justify; } @media print { @page { margin: 2cm; }}</style>
  </head>
<body onload="window.print(); window.close();">${contenu}</body></html>`);
fenetreImpression.document.close();
}
// Fonction d'export Word inchangée
    function exporterWord() {
        const contenu = document.getElementById('contenuContrat').innerHTML;
        const htmlPre = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Contrat de Remplacement</title></head><body>
        `;
        const htmlPost = `</body></html>`;
        const blob = new Blob(['\ufeff', htmlPre, contenu, htmlPost], {
            type: 'application/msword'
        });
        const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(htmlPre + contenu + htmlPost);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Contrat_Remplacement.doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
</script>

> Fait avec ❤️ par Jean-Baptiste Fron

## Source {.mt-5}

- [Conseil national de l'Ordre des médecins. Modèles de contrats. 16/10/2023.](https://www.conseil-national.medecin.fr/documents-demarches/documents-types-medecins/cabinet-carriere/modeles-contrats)
