import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super();

    this.state = {
      user: '',
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const user = this.state.user

    this.props.logInUserCallback(user);

  }

  render() {

    return (
      <div>
        <form
          className="login-form-container"
          id="loginform"
          onSubmit={this.onFormSubmit}>
          <label
            htmlFor="user">
            Username:
          </label>
          <input type="text" className="form-control form-control-lg"
          name="user"
          value={this.state.user}
          onChange={this.onInputChange} />

          <input
            type="submit"
            className="btn btn-outline-dark btn-lg"
            value="Log In"/>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  logInUserCallback: PropTypes.func,
}

export default LoginForm;
