import { connect } from "react-redux";
import { loginUser } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "login"
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
