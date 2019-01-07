import React, { Component } from 'react';
import NewTextForm from './components/NewTextForm'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      materials: [],
      score: '',
    };
  }

  componentDidMount() {
    const getMaterialsEndpoint = 'http://localhost:8000/materials/'

    axios.get(getMaterialsEndpoint)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  getDetail = () => {
    axios.get('http://localhost:8000/materials/2/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  getScore = (newText) => {
    axios.post('http://localhost:8000/texts/', newText)
      .then((response) => {
        console.log(response.data.score);
        this.setState({score: response.data.score})
      })
      .catch((error) => {
        this.setState({errors: error.message})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>React Frontend</h1>
        <button
          onClick={this.getDetail}>
          Material Detail
        </button>
        <NewTextForm getScoreCallback={this.getScore} />
      </div>
    );
  }
}

export default App;
