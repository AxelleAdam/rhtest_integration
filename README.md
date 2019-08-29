# Montage du projet

## Méthode #1 - Docker

Pré-requis :
- <a href="https://docs.docker.com/engine/installation/" target="_blank">docker</a>
- <a href="https://docs.docker.com/compose/install/" target="_blank">docker-compose</a>

Lancez les commandes suivantes dans un terminal :
- `docker-compose build`
- `docker-compose up`

Le site est désormais accessible à l'adresse `http://localhost:8080`

## Méthode #2 - Fichier Statique

Ouvrez le fichier `index.html` dans votre navigateur

# Développement du projet

Pré-requis :
- <a href="https://nodejs.org/en/" target="_blank">Node.js</a>
- <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>

Compilation des sources :
- Lancez l'installation des dépendances avec la commande `npm install`
- Les commandes suivantes sont ensuite accessibles pour développer : `npm run watch`, `npm run dev`, `npm run production`

Notes diverses :
- Les images nécessaires sont déjà présentes dans le dossier `src/img`
- Un fichier `src/js/main.js` est présent pour placer vos sources Javascript
- Un fichier `src/scss/main.scss` est présent pour placer vos sources SASS
- Les 3 Frameworks proposés sont déjà pré-installés, il vous suffit de dé-commenter celui souhaité pour commencer l'utiliser dans le fichier `src/scss/main.scss`
