import React, { Component } from 'react';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      materials: [],
    };
  }

  componentDidMount() {
    const getMaterialsEndpoint = 'http://127.0.0.1:8000/materials/'

    axios.get(getMaterialsEndpoint)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>React Frontend</h1>
      </div>
    );
  }
}

export default App;
