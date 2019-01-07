import React, { Component } from 'react';
import axios from 'axios';
import NewTextForm from './NewTextForm';
import VocabForm from './VocabForm';

class TextContainer extends Component {
  constructor() {
    super();

    this.state = {
      score: '',
      words: '',
      definitions: '',
    }
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

  getDefinitions = (words) => {
    const defEP = `http://localhost:8000/definitions/?word=${words.word1}`
    axios.get(defEP)
      .then((response) => {
        console.log(defEP);
        this.setState({definitions: response.data.definition})
      })
      .catch((error) => {
        this.setState({errors: error.message})
      })
  }

  render() {

    const displayScore = this.state.score === "" ? "" : `Score: ${this.state.score}`

    const displayVocab = this.state.score === "" ? "" : <VocabForm getDefinitionsCallback={this.getDefinitions} />

    const displayDef = this.state.definitions === "" ? "" : `${this.state.definitions}`
    return (
      <div>
        <NewTextForm getScoreCallback={this.getScore} />
        {displayScore}
        {displayVocab}
        {displayDef}
      </div>
    )
  }
}

export default TextContainer;
