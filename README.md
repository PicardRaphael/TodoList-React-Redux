# Challenge : Todo-list en React

Encoooore la Todo-list ? C'est la dernière fois, promis…

Challenge : refaire la **Todo-list**, cette fois-ci en utilisant Redux ! :nerd_face:

## Instructions

* Reprenez la correction du [challenge To-do List en React](https://github.com/O-clock-Journey/React-E05-challenge-solo-todolist).
* Installez la librairie `redux`.
* Créez un dossier `src/store` :
  * `src/store/reducer.js`
    + encapsulez chaque mutation du `state` au sein d'une `action` ;
    + créez un reducer pour venir modifier le state en fonction de ces actions.
  * `src/store/index.js` : créez votre store avec la fonction `createStore` de redux.
* Transformez le container racine `App` en simple composant de présentation.
* Branchez le store dans les autres composants qui en ont besoin !
