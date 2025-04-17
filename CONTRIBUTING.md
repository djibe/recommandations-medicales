# Contribution

## 🛠️ Utiliser le projet sur votre PC

Le plus simple est de communiquer par mail. Si vous voulez mettre les mains dans le projet, suivez le guide.

<details>
  <summary>Sous Windows</summary>

  1. Sur le PC, aller dans le dossier (au choix) où placer le projet et lancer l'*Invite de commandes* ou le *Terminal* de Windows en mode administrateur (clic droit dans le dossier sous Windows 11)
  2. Entrer les commandes suivantes:
  3. `winget install --id=Git.Git -e && winget install --id=CoreyButler.NVMforWindows -e`
  4. Fermer la commande et la relancer
  5. `git clone https://github.com/djibe/recommandations-medicales.git`
  6. puis placer la *Commande* dans le dossier `/recommandations-medicales`: `cd /recommandations-medicales`
  7. puis `nvm install 18` et `nvm use 18`
  8. puis `npm install`
  9. puis `npm run start:dev`, le site est accessible sur `http://localhost:1313/`

</details>

<details>
  <summary>Sous Linux</summary>

  Désinstaller Hugo si déjà installé et entrer les commandes dans l'ordre:

  1. `sudo apt install wget curl nodejs npm git-all golang-go -y`
  2. `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
  3. Fermer le terminal
  4. Ouvrir le terminal et entrer: `nvm install 18`
  5. Positionner le terminal sur le dossier souhaité
  6. `git clone https://github.com/djibe/recommandations-medicales.git`
  7. `cd recommandations-medicales`
  8. puis `npm install`
  9. puis `npm run start:dev`, le site est accessible sur `http://localhost:1313/`

</details>

[Ouvrir l'éditeur du code source dans le navigateur](https://vscode.dev/github/djibe/recommandations-medicales)

### Créer un nouvel article

Entrer la commande `npm run recommandations:new`.

Le fichier article.md est créé dans le dossier `/content/recommandations/`.

Tous les articles sont au [format Markdown](https://github.com/lifeparticle/Markdown-Cheatsheet) qui permet d'écrire du texte brut avec quelques enrichissements pour se concentrer sur le contenu.

### Faciliter l'édition du contenu

Je recommande l'éditeur de texte gratuit [Visual Studio Code](https://code.visualstudio.com/download) avec les extensions suivantes:

- Bracket Pair Colorizer 2
- Code Spell Checker et French - Code Spell Checker
- Color Highlight
- EditorConfig for VS Code
- Hugo Language and Syntax Support
- Markdown All in One
- **npm-ui**
- Path Intellisense
- TOML Language Support
