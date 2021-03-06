import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUser(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    const display = (this.props.formType === "signup") ? (
      <Link className="btn" to="/login">Already have an account? Log In!</Link>
    ) : (
      <Link className="btn" to="/signup">New user? Sign Up!</Link>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input onChange={this.handleUser} type="text" value={this.state.username}/>
          </label>
          <label>Password:
            <input onChange={this.handlePassword} type="password" value={this.state.password}/>
          </label>
          <button>{this.props.formType}</button>
        </form>
        {display}
      </div>
    );
  
  }
}

export default SessionForm;
