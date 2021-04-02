import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => ( {
  currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = dispatch => ({
   logout: () => dispatch(logoutUser())
});


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);