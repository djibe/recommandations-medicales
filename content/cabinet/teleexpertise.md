+++
title = "Demande de téléexpertise par le médecin généraliste"
titleSeo = "Demande de téléexpertise"
noindex = true
description = "Demander une téléexpertise médicale pour un patient. Comment faire ? Comment facturer la téléexpertise ? Quelles plateformes utiliser ?"
auteurs = ["Jean-Baptiste FRON"]
date = "2022-08-31T09:25:00+02:00"
publishdate = "2022-08-31"
lastmod = "2025-01-15"
specialites = []
annees = "2025"
sources = []
tags = []
image = true
imageSrc = "de la téléexpertise par macrovector / Freepik"
todo = "https://medicam.mipih.fr"
+++

La téléexpertise (TLE) permet de demander un avis médical spécialisé de façon différée: ni le patient ni l'expert ne doivent être présents, elle est dite asynchrone.
{.lead}

La téléexpertise vous permet ainsi de demander une conduite à tenir pour une **question simple** (ou des photos) sans urgence.
{.lead}

Les exemples de demandes de téléexpertise peuvent être variés: avis sur le diagnostic ou l'urgence d'une lésion dermatologique, ECG de dépistage, interrogation sur une anomalie biologique, adaptation d'un traitement ou tout autre motif ou question pertinente.  
La téléexpertise permet ainsi d'offrir à chaque patient la conduite à tenir adaptée sans forcément recourir à une consultation spécialisée.

La téléexpertise est remboursée à 100% pour tous les patients depuis le 1^er^ avril 2022, dans la limite de 4 demandes par an par patient. Vous êtes rémunérés **10€** pour la demande (20€ pour l'expert), pris en charge à 100% par l'Assurance Maladie pour tous les patients.

{{%collapse "Quels sont les services de téléexpertise pour le médecin généraliste ?" %}}

Liste des sites permettant de demander gratuitement une téléexpertise médicale. Ces solutions de téléexpertise gèrent les informations sociales du patient afin de vous permettre la facturation de 10€ due au médecin demandeur (dit *requérant*).

Vous devez d'abord créer un compte sur une plateforme de téléexpertise afin que l'expert connaisse vos coordonnées (qu'il précisera sur sa feuille de soins électronique).

- [Omnidoc](https://omnidoc.fr/medecins-generalistes/)
- [Direct AP-HP](https://direct.aphp.fr/) (TLE, avis téléphonique, staff) mais ne gère pas les remboursements
- [Medicam](https://cerbere.mipih.fr/auth/realms/medicam/login-actions/registration?client_id=medicam)
- Payants: Avis Doc (dermato), [CrossDoc](https://crossdoc.fr) (gastro-entérologie et nutrition pédiatrique), Medaviz
{.list-group}

Les plateformes régionales de téléexpertise mises en place par les ARS permettent également de demander des téléexpertises.

- Auvergne-Rhône-Alpes: [GCS Sara](https://www.sante-ara.fr/services/teleexpertise/) (facturation ok)
- Bourgogne-Franche-Comté: [Covotem](https://www.esante-bfc.fr/services/teleexpertise/)
- Centre - Val de Loire: [Telis](https://www.esante-centre.fr/portail_pro/services-e-sante/telis-plateforme-regionale-de-telesante-454-559.html)
- Gironde: [Alliance de Gironde](https://www-telemedecine.alliance-gironde.fr/portal-pro/accueil/authentification-6-6.html)
- Hauts de France: [prédice](https://www.predice.fr/portail-pro/services/teleexpertise-29-29.html?args=BaXCwDEzx%252AbQdO8DobsgYqICblUlNbrBeZY8RMXOgZelIdpCSDxNwBAjZDBCO%252A%252Ar5vuUAB5GWsGU0umTlO%252ApAw)
- Ile-de-France: [Ortif](https://ortif.sante-idf.fr/portail/#/fr/index)
- ...

**NB.** Je ne sais pas si ces dernières permettent la facturation.

{{% /collapse %}}
{{%collapse "Comment demander une téléexpertise ?" %}}

La demande de téléexpertise médicale est ouverte à tous les médecins. Elle n'est ouverte qu'aux spécialités conventionnées.

Le médecin demandeur est dit *requérant* et le médecin expert est dit *requis*.

**NB.** Il peut être intéressant de créer un brouillon de la demande en présence du patient pour compléter le dossier administratif avec la carte vitale du patient.

1. Connexion à la plateforme de téléexpertise de votre choix
2. Choix de l'expert (par spécialité, sage-femme possible) et complétion des informations administratives du patient
3. Rédaction de la demande (pièces-jointes possibles, ex. résultat biologique ou ECG)
4. Validation de la demande
5. Attente de l'expertise
6. Récupération du compte-rendu de téléexpertise et mise du rapport dans le dossier du patient et son DMP
7. Feuille de soins *Sesam sans vitale* pour le patient
    - Cotation RQD (requérant, 10€ sans autre acte ou majoration) en **AMO 100%**
    - *Exclusion du parcours de soins*
    - Passer en mode avancé d'édition pour saisir le prescripteur: renseigner le numéro Ameli de l'expert ayant effectué la téléexpertise
8. Confirmer la création de la FSE pour que l'expert (le requis) puisse faire la sienne avec les infos patient et vos coordonnées

{{% /collapse %}}
{{%collapse "Comment facturer une téléexpertise ?" %}}

La facturation d'une téléexpertise s'effectue toujours en mode *Sesam sans vitale* avec un tiers payant AMO total (la téléexpertise est prise en charge à 100% pour faciliter votre facturation).

### Facturer une téléexpertise en tant que médecin requérant

- La facturation se fait pour le patient concerné en mode *Sesam sans vitale* en contexte d'*Exclusion du parcours de soins*
- La cotation est **RQD** (10€), non cumulable avec d'autres actes ou majorations
- **Il faut appliquer le tiers payant AMO** (sinon c'est le patient qui sera payé !)

La FSE de la téléexpertise peut être réalisée le jour de la consultation mais sur une feuille de soins dédiée (seul RQD doit figurer en tiers payant AMO).

### Facturer une téléexpertise en tant que médecin requis (expert)

*Cette section n'a pas été vérifiée en pratique*

- La facturation se fait pour le patient concerné en mode *Sesam sans vitale* avec les informations fournies par le médecin requérant sur la plateforme
- La cotation est **TE2** (20€), non cumulable avec d'autres actes ou majorations
- Passer en mode d'édition de FSE avancé pour renseigner le **numéro AM du médecin requérant** dans une zone *Informations sur le prescripteur* de l'éditeur fournies par la plateforme de téléexpertise
- **Il faut appliquer le tiers payant AMO**

{{% /collapse %}}
{{%sources%}}

[Société Française de Dermatologie. Photographies en télédermatologie. 2021. (PDF)](https://www.sfdermato.org/upload/files/fichiers/groupes-thematiques/recos%20photos%20TD%20-%20v2%20FINALE.pdf)

- [Ameli Médecin. La téléexpertise. 04/01/2024.](https://www.ameli.fr/medecin/exercice-liberal/telemedecine/teleexpertise)
- [Ministère de la Santé. La téléexpertise. 04/05/2022.](https://solidarites-sante.gouv.fr/soins-et-maladies/prises-en-charge-specialisees/telesante-pour-l-acces-de-tous-a-des-soins-a-distance/article/la-teleexpertise)
- [HAS. Téléconsultation et téléexpertise : guide de bonnes pratiques. 2019.](https://www.has-sante.fr/jcms/c_2971632/fr/teleconsultation-et-teleexpertise-guide-de-bonnes-pratiques)

{{%/sources%}}

{{< card-link title="Article lié: Le forfait structure" subtitle="Prime pour la dématérialisation des soins" url="/cabinet/forfait-structure/" class="mt-5">}}
