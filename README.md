# RecoMédicales : Le site des Recommandations Médicales

Dernières recommandations médicales pour la pratique en consultation du médecin généraliste.

> RecoMédicales is Open Source Medical information for the general practitioner

**Projet Open Source, gratuit et indépendant visant à partager l'État de l'Art de la pratique en médecine de premier recours.**

<a href="https://ko-fi.com/I3I4JVDWX" target="_blank" rel="external nofollow noopener"><img height="36" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Faire un don via ko-fi.com"></a>

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"></a><br>Cette œuvre est mise à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Licence Creative Commons Attribution - Pas d"Utilisation Commerciale 4.0 International</a>

[RecoMédicales](https://recomedicales.fr) est développé par 2 généralistes pour tous les médecins généralistes et les internes/médecins qui souhaitent s'informer, se former et accéder rapidement à tout ce dont ils ont besoin en consultation.

## Pourquoi RecoMédicales ?

Le projet est né suite à plusieurs constats:

- Le médecin généraliste est exposé à toutes les situations
- Or nous ne retenons que 10% de ce que nous lisons
- Donc même en apprenant TOUT, nous n'en saurions pas plus de 10%, ce qui est insuffisant
- Nous sommes donc dans la nécessité d'avoir un accès permanent à de l'information fiable pour guider nos consultations
- De plus, les enjeux de Santé publique ([hypertension artérielle](https://recomedicales.fr/recommandations/hypertension-arterielle/), [diabète type 2](https://recomedicales.fr/recommandations/diabete-type-2/), [BPCO](https://recomedicales.fr/recommandations/bronchopneumopathie-chronique-obstructive/), [ostéoporose](https://recomedicales.fr/recommandations/osteoporose/) sont d'une complexité croissante, hors de portée de simples fiches textes et de nos petits cerveaux.

Seul un outil numérique peut nous aider.

## Les points forts du projet

- Open Source  
  Accessible à tous, pour toujours.
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
  Le site s'adapte à tous les écrans, avec consultation hors ligne des chapitres déjà lus.
- \+ Rapide  
  Très léger.
- \+ Ouvert  
  Aucun identifiant nécessaire.
- \+ Transparent  
  Toute modification est historisée pour plus de traçabilité.
- \+ Discret  
  Aucun traçage de votre navigation, aucun cookie.

et aussi...

- Low tech  
  Seulement à base de fichiers textes modifiables par tout le monde.
- Connectable  
  Via les codes CIM-10 et SNOMED-CT, le site peut être branché à d'autres systèmes par une API.
- Résistant  
  Pas de bases de données, facile à sauvegarder et déménager.
- Sans frais  
  Aucun coût d'hébergement.
- Flux RSS  
  Pour se tenir informé des nouveaux chapitres sans naviguer de site en site.
- Diffusé  
  Nouveautés partagées par newsletter ou sur Twitter, Facebook et LinkedIn.

## Ce qui manque pour le moment

- **Vous !**
- L'application mobile (ça arrive ...)
- Plus de contenu
- La certification des Sociétés savantes
- Le soutien des autorités (Assurance Maladie ...)

## 🛠️ Utiliser le projet sur votre PC

Le plus simple est de communiquer par mail. Si vous voulez mettre les mains dans le projet, suivez le guide.

<details>
  <summary>Sous Windows</summary>

  1. Sur le PC, aller dans le dossier (au choix) où placer le projet et lancer Powershell ou le Terminal de Windows en mode administrateur (clic droit dans le dossier sous Windows 11)
  2. Entrer les commandes suivantes:
  3. `winget install --id CoreyButler.NVMforWindows --force`
  4. Fermer la commande et la relancer
  5. `git clone https://github.com/djibe/recommandations-medicales.git`
  6. puis placer la *Commande* dans le dossier `/recommandations-medicales`
  7. puis `nvm install 14` et `nvm use 14`
  8. puis `npm install`
  9. puis `npm run start:dev`, le site est accessible sur `http://localhost:1313/`

</details>

<details>
  <summary>Sous Linux</summary>

  Désinstaller Hugo si déjà installé et entrer les commandes dans l'ordre:

  1. `sudo apt install wget curl nodejs npm git-all golang-go -y`
  2. `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
  3. Fermer le terminal
  4. Ouvrir le terminal et entrer: `nvm install 14`
  5. Positionner le terminal sur le dossier souhaité
  6. `git clone https://github.com/djibe/recommandations-medicales.git`
  7. `cd recommandations-medicales`
  8. puis `npm install`
  9. puis `npm run start:dev`, le site est accessible sur `http://localhost:1313/`

</details>

[Ouvrir l'éditeur du code source dans le navigateur](https://vscode.dev/github/djibe/recommandations-medicales)

### Créer un nouvel article

Entrez la commande `npm run recommandations:new`.

Le fichier article.md est créé dans le dossier `/content/recommandations/`.

Tous les articles sont au [format Markdown](https://towardsdatascience.com/the-ultimate-markdown-cheat-sheet-3d3976b31a0) qui permet d'écrire du texte brut avec quelques enrichissements pour se concentrer sur le contenu.

### Faciliter l'édition du contenu

Je recommande l'éditeur de texte gratuit [Visual Studio Code](https://code.visualstudio.com/download) avec les extensions suivantes: Bracket Pair Colorizer 2, Code Spell Checker et French - Code Spell Checker, Color Highlight, EditorConfig for VS Code, Hugo Language and Syntax Support, Markdown All in One, **npm-ui**, Path Intellisense, TOML Language Support.

## Dernière compilation du site

[![Netlify Status](https://api.netlify.com/api/v1/badges/327af24a-1868-47c1-959c-7c0afe3b1891/deploy-status)](https://app.netlify.com/sites/recommandations-medicales/deploys)

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"></a><br>Cette œuvre est mise à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Licence Creative Commons Attribution - Pas d'Utilisation Commerciale 4.0 International</a>

<a href="https://ko-fi.com/I3I4JVDWX" target="_blank" rel="external nofollow noopener"><img height="36" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Faire un don via ko-fi.com"></a>
