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
        <Link to="/">
          <h1>teachers corner</h1>
        </Link>
        <Link to="/textscore">
          <button type="button">Create</button>
        </Link>
        <Link to="/search">
          <button type="button">Search</button>
        </Link>
        <Route path="/textscore" component={TextContainer} />
        <Route path="/search" component={MaterialList} />
      </div>
    );
  }
}

export default App;
