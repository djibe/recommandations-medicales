+++
title = "Savoir si un patient est décédé"
noindex = true
titleSeo = "Savoir si un patient est décédé"
description = "Outil officiel matchID pour retrouver la trace ou savoir si une personne est décédée"
auteurs = ["Jean-Baptiste FRON"]
date = "2023-11-27T19:23:00+02:00"
publishdate = "2023-11-27"
lastmod = "2025-02-18"
annees = "2025"
sources = []
tags = []
image = true
imageSrc = "matchID"
+++

Il peut être difficile de retrouver des patients de sa propre patientèle. Pourtant un outil officiel très puissant permet de retrouver tout décès d'un citoyen.
{.lead .mb-5}

## Retrouver un patient est décédé

Entrer le nom du patient pour retrouver les données d'enregistrement de son décès. Pour les femmes mariées, utiliser leur nom de jeune fille (nom de naissance).

Des méthodes de recherche avancée sont disponibles sur le [site matchID](https://deces.matchid.io/search?advanced=true) du Ministère de l'Intérieur.

<form class="d-flex align-items-center my-4">
  <div class="floating-label textfield-box form-ripple flex-grow-1">
    <label for="matchid">Nom du patient</label>
    <input class="form-control" id="matchid" type="search">
  </div>
  <button class="btn btn-lg btn-primary btn-shaped ml-2" onClick="window.open(`https://deces.matchid.io/search?q=${document.getElementById('matchid').value}`); return false;">
  <svg aria-hidden="true" fill="currentColor" class="input-group-text mr-2" height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
  Rechercher</button>
</form>

Les données affichées sont collectées par l'Insee chaque mois. Le service *matchID* est financé par le Ministère de l'Intérieur.
