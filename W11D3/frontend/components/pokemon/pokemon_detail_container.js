import {connect} from 'react-redux';
import {requestSinglePokemon} from './../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSinglePokemon: () => dispatch(requestSinglePokemon(ownProps.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);