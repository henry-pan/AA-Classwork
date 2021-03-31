import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route} from "react-router-dom";
import PokemonDetailContainer from "./pokemon_detail_container";

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.requestAllPokemon()
  }
  
  render(){
    const pokemonItems = this.props.pokemon.map(poke => (
      <PokemonIndexItem key={Math.random()*10000} pokemon={poke} />
    ));

    return (
      <section className="pokedex">
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
        <ul>{pokemonItems}</ul>
      </section>
    );
  }
}
  
  
  
  export default PokemonIndex;