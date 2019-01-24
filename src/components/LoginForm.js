import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super();

    this.state = {
      user: '',
      password: '',
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
    if (this.state.password === '135!b?m@c~') {
      const user = this.state.user
      this.setState({showForm: false})
      this.props.logInUserCallback(user);
    } else {
      this.setState({errors: 'Invalid password.'})
    }

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
        <input type="password" className="form-control form-control-lg"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onInputChange} />
          <input
            type="submit"
            className="btn btn-outline-dark btn-lg"
            value="Log In"/>
        </form> : `Welcome, ${this.state.user}! `}
        {this.state.errors ? this.state.errors : ''}
      </div>
    )
  }
}

LoginForm.propTypes = {
  logInUserCallback: PropTypes.func,
}

export default LoginForm;
