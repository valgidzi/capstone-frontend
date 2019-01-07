import React, { Component } from 'react';
import NewTextForm from './components/NewTextForm'
import MaterialList from './components/MaterialList'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
        <Route exact path="/textscore"
          render={(props) => (
            <NewTextForm getScoreCallback={this.getScore} />
          )}/>
        <Route path="/search" component={MaterialList} />
      </div>
    );
  }
}

export default App;
