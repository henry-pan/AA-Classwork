import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestSinglePokemon } from './actions/pokemon_actions';
import { selectPokemonMoveNames } from './reducers/selectors';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.requestSinglePokemon = requestSinglePokemon;
  window.selectPokemonMoveNames = selectPokemonMoveNames;
  ReactDOM.render(<Root store={store} />, rootEl)
})