+++
title = "e-CPS et authentification mobile du médecin"
titleSeo = "e-CPS et authentification"
noindex = true
noSearchContent = true
description = "Apprendre à créer sa carte e CPS afin de bénéficier de connexions facilitées en mobilité ou sans sa carte CPS"
auteurs = ["Jean-Baptiste FRON"]
date = "2022-01-20T09:00:00+02:00"
publishdate = "2022-01-20"
lastmod = "2026-09-20"
annees = "2026"
sources = ["ANS"]
tags = []
image = true
imageSrc = "slidesgo / Freepik"
todo = "écriture SEO + liens"
+++

La e-CPS est un service d'authentification forte du médecin en mobilité ou sans sa carte CPS. Au lieu d'utiliser un objet dont on dispose pour la connexion sécurisée (la carte CPS), on couple un numéro de téléphone à cette carte CPS, assortie d'un mot de passe.
{.lead}

La protection des données de santé impose un haut niveau de sécurité. L'authentification forte répond à cette nécessité et correspond à une connexion avec l'association d'un élément dont je dispose (la carte CPS) et un élément que je connais (le mot de passe).

Si vous recevez une notification de connexion de l'appli e-CPS et que vous n'êtes pas à l'origine de la connexion, refusez la connexion et référez-vous à la section *Fraude à la e-CPS*.
{.alert .alert-warning}

{{%collapse "Définitions" %}}

e-CPS
: La e-CPS est une version dématérialisée de la carte CPS.
: L'objectif est de pouvoir s'authentifier en prouvant que l'on est médecin (dite authentification forte) à un service qui ne nous connaît pas encore, ou de le faire sans carte CPS (en mobilité, lorsqu'il n'y a pas de lecteur CPS...).

ProSantéConnect
: Protocole qui permet de s'authentifier sur différents services de santé (ex: Mailiz) avec ses identifiants de l'Ordre. L'équivalent de "Se connecter avec Google" sur les sites Grand public.

{{% /collapse %}}
{{%collapse "Créer sa e-CPS" %}}

La e-CPS est une version dématérialisée de la carte CPS. Elle ne concerne donc que les professionnels de santé autorisés à en disposer.

Télécharger l'appli e-CPS sur l'[App Store](https://apps.apple.com/fr/app/e-cps/id1469033607) ou le [Play Store](https://play.google.com/store/apps/details?id=fr.asipsante.esante.wallet.prod).

### Créer sa e-CPS avec sa CPS

1. Depuis l'ordinateur avec la CPS branchée, aller sur <https://wallet.esw.esante.gouv.fr>
2. Cliquer sur le bouton **s'identifier avec PROSANTECONNECT**
3. À l'étape *Connectez-vous*, cliquer sur l'onglet **Carte CPS** puis **Se connecter avec la carte CPS**
4. Cliquer sur **J'accepte les CGU** et **Commencer l'activation**
5. À l'étape suivante, scanner le QR code affiché sur l'écran du PC avec l'appli e-CPS
6. Puis entrer sur l'ordinateur le code affiché sur le téléphone
7. Définir un code PIN pour l'appli e-CPS

Vous pouvez maintenant vous connecter à certains services avec votre smartphone.

### Créer sa e-CPS en mobilité ou sans sa carte CPS

Cette étape va passer par l'adresse de courriel associée à votre compte ordinal et nécessite un 2^e^ appareil pour afficher le QR code à venir.

1. Depuis le store, télécharger l'application e-CPS et la lancer
2. Appuyer sur **Commencer l'activation**
3. Faire défiler le texte de la license puis appuyer sur **Accepter**
4. Appuyer sur le bouton **Recevoir le courriel d'activation**
5. Dans le champ **Votre mode d'activation**, sélectionner **Identifiant RPPS**
6. Entrez votre numéro RPPS **précédé d'un 8** puis **confirmer en appuyant sur l'icône loupe**
7. Les coordonnées personnelles renseignées auprès du CNOM apparaissent, confirmer en appuyant sur **Envoyer ma demande d'activation**
8. Consulter la boîte mail sur le 2^e^ appareil
9. Sur l'appli e-CPS, appuyer sur **Scanner un QR code** et scanner le QR code
10. Demander la réception du SMS, l'activation est normalement automatique dès la réception du SMS
11. Choisir un code PIN et le confirmer

> [!WARNING]
> Si le numéro de téléphone portable à l'étape 7 n'est pas le bon, appeler le CNOM.

### Le guide d'installation en vidéo

{{< youtube id="LdCD9dCDWzM" title="Activer et utiliser la e-CPS en vidéo (ANS)" >}}

### Aide en cas d'échec d'installation

[FAQ e-CPS](https://esante.gouv.fr/produits-services/e-cps) ou {{<phone>}}0 806 800 213{{</phone>}}

{{% /collapse %}}
{{%collapse "Fraude à la e-CPS" %}}

La vaccination anti-covid a amené le lot de margoulins qui veulent accéder à *Vaccin Covid* d'Ameli Pro pour vendre de faux passes sanitaires.

Si vous recevez une notification de l'application e-CPS, refusez-là ! Puis signalez-le afin d'être exemptés de poursuites:

- L'Assurance Maladie: {{<phone>}}3608{{</phone>}}
- L'Agence du Numérique en Santé ([ANS](https://esante.gouv.fr/)): {{<phone>}}0 806 800 213{{</phone>}}
- Le CDOM
- La [police](https://www.pre-plainte-en-ligne.gouv.fr)

{{% /collapse %}}
