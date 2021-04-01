import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';


const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_SINGLE_POKEMON:
    const nextState = Object.assign({}, state);
    nextState[action.pokemon.pokemon.id] = action.pokemon.moves;
    return nextState;
    // return Object.assign({}, action.pokemon.moves, state);
  default:
    return state;
  }
}
  
export default movesReducer;
