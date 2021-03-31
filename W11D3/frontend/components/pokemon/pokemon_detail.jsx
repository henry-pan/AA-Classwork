import React from "react";

const PokemonDetail = (props) => {

  return (
    <div className="pokemon-detail">
      <figure>
        <img src={props.pokemon.imageUrl}/>
      </figure>
      <ul>
        <li>
          {props.pokemon.name}
        </li>
        <li>Type: {props.pokemon.pokeType}</li>
        <li>Attack: {props.pokemon.attack}</li>
        <li>Defense: {props.pokemon.defense}</li>
      </ul>
    </div>
  );

}

export default PokemonDetail;