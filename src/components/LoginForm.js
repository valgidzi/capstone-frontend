import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super();

    this.state = {
      user: '',
      showForm: true,
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
    this.setState({showForm: false})
    this.props.logInUserCallback(user);

  }

  render() {

    return (
      <div>
        {this.state.showForm ? <form
          className="login-form-container"
          id="loginform"
          onSubmit={this.onFormSubmit}>
          <input type="text" className="form-control form-control-lg"
          name="user"
          placeholder="Username"
          value={this.state.user}
          onChange={this.onInputChange} />

          <input
            type="submit"
            className="btn btn-outline-dark btn-lg"
            value="Log In"/>
        </form> : `Welcome, ${this.state.user}! `}
      </div>
    )
  }
}

LoginForm.propTypes = {
  logInUserCallback: PropTypes.func,
}

export default LoginForm;
