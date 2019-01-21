import React, { Component } from 'react';
import TextContainer from './components/TextContainer'
import SearchContainer from './components/SearchContainer'
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
    };
  }

  render() {

    const logoutClick = () => {
      this.setState({user: ""})
    };

    const logInUser = (user) => {
      this.setState({user: user})
    }

    const loggedInUserMenu =
            <ul className="nav-menu">
              <Link to="/">
                <h1>teachers corner</h1>
              </Link>
              <Link to="/">
                <button className="btn btn-secondary btn-lg" type="button" onClick={logoutClick}>Log Out</button>
              </Link>
              <Link to="/textscore">
                <button className="btn btn-secondary btn-lg" type="button">Create</button>
              </Link>
              <Link to="/search">
                <button type="button" className="btn btn-secondary btn-lg">Search</button>
              </Link>
            </ul>

    const loggedOutUserMenu =
            <ul className="nav-menu">
              <Link to="/">
                <h1>teachers corner</h1>
              </Link>
              <Link to="/login">
                <button className="btn btn-secondary btn-lg" type="button">Log In</button>
              </Link>
            </ul>

    const navMenuDisplay = this.state.user === '' ? loggedOutUserMenu : loggedInUserMenu

    return (
      <div>
        {navMenuDisplay}

        <Route exact path="/login" render={(props) => (
          <LoginForm logInUserCallback={logInUser} />
        )}/>
        <Route exact path="/textscore" render={(props) => (
            <TextContainer user={this.state.user} />
          )}/>
        <Route path="/search" component={SearchContainer} />
      </div>
    );
  }
}

export default App;
