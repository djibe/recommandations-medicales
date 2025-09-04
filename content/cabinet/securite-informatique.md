+++
title = "La sécurité informatique pour le médecin généraliste"
titleSeo = "Sécurité informatique du médecin"
noindex = true
longHtml = true
description = "Outils et consignes de sécurité pour la protection des données de santé: mots de passe, longueur et gestionnaire, antivirus, téléchargements"
auteurs = ["Jean-Baptiste FRON"]
date = "2023-10-08T21:30:00+02:00"
publishdate = "2023-10-09"
lastmod = "2025-02-02"
annees = "2025"
sources = []
tags = []
image = true
imageSrc = "la sécurité informatique par unDraw"
todo = "Gmail, win10/11, mises à jour, sauvegardes"
+++

Le médecin travaille aujourd'hui en permanence avec un ordinateur, traitant toute la journée les **données de santé** de ses patients. Un niveau de sécurité maximale est donc nécessaire pour les protéger à tous les niveaux (mots de passe, logiciels, antivirus ...)
{.lead .mb-5}

## Installer des logiciels

Le téléchargement et l'installation de logiciels est l'une des sources d'introduction de virus. L'outil [UnigetUI](https://www.marticliment.com/wingetui/) ([téléchargement](https://github.com/marticliment/UniGetUI/releases/latest/download/UniGetUI.Installer.exe)) permet d'installer des logiciels depuis des dépôts semblables à l'*AppStore* et le *Google Play Store*, évitant de rapatrier un fichier vérolé depuis un site inconnu.

Les logiciels présentés plus bas peuvent être installés avec **UnigetUI**.

![L'antivirus Microsoft Defender](/images/icons/microsoft-defender.png "112px")

## Les antivirus

> Les informations ci-dessous proviennent des comparatifs d'antivirus [AV-Test](https://www.av-test.org/fr/) et [AV-Comparatives](https://www.av-comparatives.org/consumer/).

L'antivirus par défaut de Windows, **Microsoft Defender** assure une protection efficace en dehors de pérégrinations sur internet. Il faut néanmoins s'assurer qu'il est bien actif: dans le menu Démarrer, tapez << Sécurité Windows >> et cliquer sur l'application correspondante. Aller dans **Protection contre les virus et les menaces** et vérifier que tous les modules sont activés.

Antivirus gratuits alternatifs: [Avast Free](https://www.avast.com/fr-fr/free-antivirus-download#pc), [AVG Free](https://www.avg.com/fr-fr/free-antivirus-download#pc), [Bitdefender Free](https://www.bitdefender.com/fr-fr/consumer/free-antivirus) (disponibles depuis **UnigetUI**). Les mêmes antivirus gratuits sont recommandés sur le téléphone portable. Malwarebytes Antimalware est également intéressant pour faire des scans occasionnels.

**Antivirus payants** de haute protection: Avira, Bitdefender, GDATA, McAfee, Norton.

> L'antivirus russe *Kaspersky* n'est pas cité, selon les [préconisations de l'ANSSI](https://www.cert.ssi.gouv.fr/cti/CERTFR-2022-CTI-001/) (Agence nationale de la sécurité des systèmes d'information).

Sur Mac, un antivirus peut être ajouté, et les grands noms sont tous efficaces: [Avast Free](https://www.avast.com/fr-fr/free-mac-security), [AVG Free](https://www.avg.com/fr-fr/avg-antivirus-for-mac), [Avira Free](https://www.avira.com/fr/free-antivirus-mac), [Bitdefender Free](https://www.bitdefender.com/fr-fr/consumer/virus-scanner-for-mac), Trend Micro.

Sur mobile, les mêmes noms DOIVENT être utilisés.

## Les mots de passe

Toujours selon l'ANSSI, pour les applications ayant accès à des données de santé, un mot de passe fort **généré aléatoirement** est nécessaire et devrait être associé à une authentification multifacteurs (carte CPS avec ProSantéConnect, code SMS ...).

Pour être fort à très fort, un mot de passe doit compter **au moins 15 caractères**. Un mot de passe long est meilleur qu'un mot de passe court mais compliqué.

Tous les navigateurs internet récents permettent de générer des mots de passe forts.

### Les gestionnaires de mots de passe

Le respect de ces standards de sécurité sont accessibles facilement par chacun sous réserve de l'utilisation d'un **gestionnaire de mots de passe**.

Les navigateurs récents peuvent gérer ces mots de passe (Google Chrome et Google Wallet sur mobile, Microsoft Edge et l'appli Authenticator sur mobile) sous réserve que le mot de passe du compte Google/Microsoft... soit lui aussi fort et géré avec une double authentification (SMS ou code).

Les gestionnaires de mots de passe dédiés recommandés sont: 1Password, Bitwarden, Dashlane, Enpass, Keepass, NordPass.

## Formations gratuites sur la cybersécurité

{{< card-link-external title="OpenClassrooms" url="https://openclassrooms.com/fr/courses/5870206-decouvrez-les-bases-de-la-securite-numerique" subtitle="MOOC gratuit" >}}

{{< card-link-external title="SensCyber" url="https://www.cybermalveillance.gouv.fr/sens-cyber/apprendre" subtitle="Le site officiel CyberMalveillance du gouvernement" >}}

{{< card-link-external title="Cours sur la sécurité" url="https://esante-formation.coorpacademy.com/catalog?goal=cert_hZZ6wT4v69" subtitle="par l'Agence du Numérique en Santé" >}}

## Accompagnement en cas d'attaque informatique

En cas de problème de sécurité informatique, vous pouvez commencer par appeler votre prestataire et consulter [17Cyber.gouv.fr](https://17cyber.gouv.fr)

## Sources

- [CNIL. Mots de passe : une nouvelle recommandation pour maîtriser sa sécurité. 14/10/2022.](https://www.cnil.fr/fr/mots-de-passe-une-nouvelle-recommandation-pour-maitriser-sa-securite)
- [Agence nationale de la sécurité des systèmes d'information (ANSSI). recommandations relatives à l'authentification multifacteur et aux mots de passe.](https://www.ssi.gouv.fr/guide/recommandations-relatives-a-lauthentification-multifacteur-et-aux-mots-de-passe/)
