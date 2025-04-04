+++
title = "Ameli Pro : résoudre les problèmes courants (connexion, Cryptolib, carte vitale)"
noindex = true
titleSeo = "Ameli Pro: résoudre les problèmes"
description = "Outils pour identifier et résoudre les problèmes de connexion au portail AmeliPro de l'Assurance Maladie"
auteurs = ["Jean-Baptiste FRON"]
date = "2023-04-11T13:08:00+02:00"
publishdate = "2023-04-11"
lastmod = "2024-11-11"
annees = "2024"
sources = []
tags = []
image = true
imageSrc = "Assurance Maladie"
+++

Les problèmes de connexion à *Ameli Pro* sont courants et peuvent provenir de différents dysfonctionnements. Cet article vise à identifier et corriger des problèmes courants occasionnés par l'ordinateur du médecin.
{.lead .mb-5}

{{< card-link title="Article lié: Lecteurs de carte CPS" url="/cabinet/lecteurs-carte-vitale/" class="my-5">}}

## Les logiciels et certificats à installer sur l'ordinateur du médecin

Ameli Pro et tous les services en ligne proposant une connexion avec la carte CPS ont plusieurs pré-requis:

- Des lecteurs de carte à puces ou un lecteur Sesam-vitale
- Les services de carte à puce activés sous Windows ou MacOS  
  Sous Windows: taper `services.msc` dans le menu démarrer, vérifier que le service "Carte à puce" a bien pour "Type de démarrage": `Automatique`
- Installer **ATSAM** 4.65.00 ([Windows](https://e.pcloud.link/publink/show?code=XZSG9CZdtj4sK11baJLxtkdq0xEJfug4csy) ou [Mac](https://e.pcloud.link/publink/show?code=XZjG9CZYa8ykmijt78orzNt2lNVv76Tp4h7))
- Pour lire la **carte vitale** depuis le navigateur internet, l'extension officielle "Lecture Carte Vitale" est nécessaire ([navigateur Chrome/Edge](https://chrome.google.com/webstore/detail/lecture-carte-vitale/kpjpglcbcgnblkigbedgaoegjbifejka?hl=fr) ou [Firefox](https://addons.mozilla.org/fr/firefox/addon/lecture-carte-vitale/))

{{< table title="Logiciels nécessaires pour faire le fonctionnement de la carte CPS sur l'ordinateur du médecin." >}}
| Logiciel                | Version | Téléchargement                                                                      |
|-------------------------|--------:|-------------------------------------------------------------------------------------|
| ATSAM (Windows)         | 4.65.00 | [Lien](https://e.pcloud.link/publink/show?code=XZSG9CZdtj4sK11baJLxtkdq0xEJfug4csy) |
| ATSAM (MacOS)           | 4.65.00 | [Lien](https://e.pcloud.link/publink/show?code=XZjG9CZYa8ykmijt78orzNt2lNVv76Tp4h7) |
| Cryptolib CPS (Windows) |   5.2.2 | [Lien](https://e.pcloud.link/publink/show?code=XZMRbxZvYgl3uQffJ89WXhW8VC1qyEnPqGk) |
{{< /table >}}

### ATSAM

![Logo du logiciel ATSAM](/images/logos/atsam.webp "100px")

Le paquet ATSAM de l'Assurance Maladie installe: Cryptolib CPS (mais pas la dernière version), certificats pour la carte à puce), SrvSVCNAM (connexion aux services Ameli Pro), AmeliPro Connect (voir plus bas) et DiagAM (diagnostic des erreurs de connexion aux services Ameli Pro).

Les fichiers mentionnés peuvent également être téléchargés depuis [la page dédiée d'Ameli Pro](https://espacepro.ameli.fr/inscription/#/aide): aller au pied de page > Configuration.
{.alert .alert-info}

### AmeliPro Connect

Pour éviter ces conflits de navigateur internet, l'Assurance Maladie propose **AmeliPro Connect**, un navigateur internet indépendant pour la connexion à ses services du portail Ameli Pro.

Il est installé avec le paquet *ATSAM* (voir *Les logiciels et certificats à installer*).

## Diagnostiquer son ordinateur

En cas de problème de connexion, lancer le logiciel **DiagAM** de l'Assurance Maladie.

![Logo du logiciel DiagAM](/images/logos/diagam.webp "248px")

Une évaluation des modules et certificats vitaux permet normalement de relever une erreur et permettre de télécharger le composant corrompu pour le réparer.

Si le logiciel *DiagAM* est introuvable, il faut réinstaller le paquet *ATSAM* de l'Assurance Maladie (voir *Les logiciels et certificats à installer*).
