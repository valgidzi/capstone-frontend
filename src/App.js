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

    let location = this.props.location.pathname

    const logoutClick = () => {
      this.setState({user: ""})
    };

    const logInUser = (user) => {
      this.setState({user: user})
    }

    const title = "teachers' corner"

    const loggedInUserMenu =
            <ul className="nav-menu" data-html2canvas-ignore="true">
              <Link to="/">
                <h1 className="title">{title}</h1>
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
            <ul className="nav-menu" data-html2canvas-ignore="true">
              <Link to="/">
                <h1 className="title">{title}</h1>
              </Link>
              <LoginForm logInUserCallback={logInUser} />
            </ul>

    const navMenuDisplay = this.state.user === '' ? loggedOutUserMenu : loggedInUserMenu
    const welcomeText = "Welcome to the teachers' corner..."
    return (
      <div>
        {navMenuDisplay}

        <Route exact path="/textscore" render={(props) => (
            <TextContainer user={this.state.user} />
          )}/>
        <Route exact path="/search" render={(props) => (
            <SearchContainer user={this.state.user} />
          )}/>

        {location==='/' ? <div className="splash-container">
          <img src="https://images.pexels.com/photos/1166657/pexels-photo-1166657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="books" />
          <h1 className="intro-heading">{welcomeText}</h1>
          <h1 className="intro-more">... your space for creating, editing, and saving teaching materials.</h1>
        </div> : ''}
      </div>
    );
  }
}

export default App;
