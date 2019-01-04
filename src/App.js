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

  getDetail = () => {
    axios.get('http://127.0.0.1:8000/materials/2/')
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
        <button
          onClick={this.getDetail}>
          Material Detail
        </button>
      </div>
    );
  }
}

export default App;
