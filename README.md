# Lancement du projet

Ouvrez le fichier `index.html` dans votre navigateur

# Développement du projet

Pré-requis :
- <a href="https://nodejs.org/en/" target="_blank">Node.js</a>
- <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>

Compilation des sources :
- Lancez l'installation des dépendances avec la commande `npm install`
- Les commandes suivantes sont ensuite accessibles pour développer :
  - `npm run watch` - Recompile automatiquement les sources lorsqu'un fichier est modifié
  - `npm run dev` - Compile les sources de manière non optimisée
  - `npm run production` - Compile les sources de manière optimisée et minifiée
- Chaque commande copie le fichier compilé résultant dans le dossier `dist`

Notes diverses :
- Les images nécessaires sont déjà présentes dans le dossier `src/img`
- Un fichier `src/js/main.js` est présent pour placer vos sources Javascript
- Un fichier `src/scss/main.scss` est présent pour placer vos sources SASS
- Les 3 Frameworks proposés sont déjà pré-installés, il vous suffit de dé-commenter celui souhaité dans le fichier `src/scss/main.scss` pour commencer à l'utiliser
- La maquette à intégrée est représentée par le fichier `resources/maquette.jpg`
