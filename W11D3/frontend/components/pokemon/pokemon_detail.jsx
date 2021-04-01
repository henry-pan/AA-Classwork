import React from "react";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    
    return (
      <div className="pokemon-detail">
        <figure>
          <img src={this.props.pokemon.imageUrl}/>
        </figure>
        <ul>
          <li><h2>{this.props.pokemon.name}</h2></li>
          <li>Type: {this.props.pokemon.pokeType}</li>
          <li>Attack: {this.props.pokemon.attack}</li>
          <li>Defense: {this.props.pokemon.defense}</li>
          <li>Moves: {this.props.moves}</li>
        </ul>
      </div>
    );
  }

}

export default PokemonDetail;