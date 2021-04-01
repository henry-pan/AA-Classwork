export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}
  
export const selectPokemonMoveNames = (state) => {
  const moves = Object.values(state.entities.moves);
  const moves2 = Object.values(moves[0]).map(move => {
    return move.name
  });
  return moves2;
}