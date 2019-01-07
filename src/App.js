import React, { Component } from 'react';
import TextContainer from './components/TextContainer'
import MaterialList from './components/MaterialList'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      materials: [],
    };
  }

  render() {
    return (
      <div>
        <ul className="nav-menu">
          <Link to="/">
            <h1>teachers corner</h1>
          </Link>
          <Link to="/textscore">
            <button className="btn btn-secondary btn-lg" type="button">Create</button>
          </Link>
          <Link to="/search">
            <button type="button" className="btn btn-secondary btn-lg">Search</button>
          </Link>
        </ul>

        <Route path="/textscore" component={TextContainer} />
        <Route path="/search" component={MaterialList} />
      </div>
    );
  }
}

export default App;
