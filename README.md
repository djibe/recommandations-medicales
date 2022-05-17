# Le site des Recommandations Médicales

**Projet Open Source, gratuit et indépendant visant à partager l'État de l'Art de la pratique en médecine de premier recours.**

[Recommandations Médicales](https://recomedicales.fr/) est développé pour tous les médecins généralistes et les internes/médecins qui souhaitent s'informer, se former et accéder en 2 clics à tout ce dont ils ont besoin en consultation.

## Pourquoi ce projet ?

Plusieurs constats:

- Le médecin généraliste est exposé à toutes les situations
- Or nous ne retenons que 10% de ce que nous lisons
- Donc même en apprenant TOUT, nous ne retiendrions que 10%, ce qui est insuffisant
- Nous avons donc besoin d'avoir un accès permanent à de l'information fiable pour guider nos consultations
- De plus, les enjeux de Santé publique ([hypertension artérielle](https://recomedicales.fr/recommandations/hypertension-arterielle/), [diabète](https://recomedicales.fr/recommandations/diabete-type-2/), [BPCO](https://recomedicales.fr/recommandations/bronchopneumopathie-chronique-obstructive/), [ostéoporose](https://recomedicales.fr/recommandations/osteoporose/)) sont d'une complexité croissante, hors de portée de simples fiches textes et de nos petits cerveaux.

Seul un outil numérique peut nous aider.

## Les points forts du projet

- Open Source
- Participatif  
Tout le monde peut commenter le travail, participer à l'élaboration et demander plus d'informations.
- Indépendant  
Aucun financement de l'industrie. Jamais.
- Gratuit
- Validé  
Faire valider chaque fiche par un expert ou la Société savante de référence (certaines fiches pour le moment).
- \+ Simple  
Segmentation des chapitres pour accéder rapidement à l'info recherchée: 1 question = 1 réponse.
- \+ Visuel  
Présence d'un arbre décisionnel pour balayer rapidement la prise en charge de la pathologie.
- \+ Pratique  
Accès immédiat au score ou calcul de risque numérique.
- \+ Sûr  
Accès à l'ordonnance ou bilan de première intention.
- \+ Moderne  
Finie l'information cachée au fond d'un PDF.
- \+ Récent  
Proposer les connaissances validées les plus récentes.
- \+ Mobile  
Le site s'adapte à tous les écrans.
- \+ Rapide  
Très léger.
- \+ Transparent  
Toute modification est historisée pour plus de traçabilité.
- \+ Ouvert  
Accessible à toute la francophonie.

et aussi...

- Low tech  
Seulement à base de fichiers textes éditables par tout le monde.
- Résistant  
Pas de bases de données, facile à sauvegarder et déménager.
- Sans frais  
Aucun coût d'hébergement.
- Flux RSS  
Pour se tenir informé sans naviguer de site en site.

## Ce qui manque pour le moment

- **Vous !**
- Plus de contenu
- La certification des Sociétés savantes (en cours avec GRIO, Club Jeunes Hypertensiologues)
- La certification des autorités (HAS ...)

## Utiliser le projet sur votre PC

Le plus simple est de communiquer par mail. Si vous voulez mettre les mains dans le projet, suivez le guide.

1. Télécharger [Git](https://git-scm.com/downloads) (installez avec les options par défaut) et [NodeJS](https://nodejs.org/download/release/v15.14.0/) (à l'installation de NodeJS, cochez "Automatically install the necessary tools. Note this will also install Chocolatery", on en a besoin)  
  Node v15 ets nécessaire pour compiler le CSS.
2. Sur votre PC, dans le dossier où vous voulez placer le projet, ouvrir une Invite de Commande en mode administrateur et tapez `git clone https://github.com/djibe/recommandations-medicales.git`
3. puis `choco install hugo-extended`, puis `A`
4. puis placer la *Commande* dans le dossier de recommandations-medicales
5. puis `npm install`
6. puis `npm run server`, le site est accessible sur `http://localhost:1313/`

[![Ouvrir l'éditeur du code source dans le navigateur](https://open.vscode.dev/badges/open-in-vscode.svg)](https://vscode.dev/github/djibe/recommandations-medicales)

### Créer un nouvel article

`npm run article`. Le fichier article.md est créé dans le dossier /content/recommandations.  
Tous les articles sont au [format Markdown](https://towardsdatascience.com/the-ultimate-markdown-cheat-sheet-3d3976b31a0) qui permet d'écrire du texte brut avec quelques enrichissements pour se concentrer sur le contenu.

### Faciliter l'édition

Je recommande l'éditeur de texte/code gratuit [Visual Studio Code](https://code.visualstudio.com/download) avec les extensions suivantes: Bracket Pair Colorizer 2, Code Spell Checker et French - Code Spell Checker, Color Highlight, EditorConfig for VS Code, Hugo Language and Syntax Support, Markdown All in One, npm-ui, Path Intellisense, TOML Language Support.

## Dernière compilation du site

[![Netlify Status](https://api.netlify.com/api/v1/badges/327af24a-1868-47c1-959c-7c0afe3b1891/deploy-status)](https://app.netlify.com/sites/recommandations-medicales/deploys)
