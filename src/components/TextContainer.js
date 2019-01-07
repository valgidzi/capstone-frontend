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
    this.setState({words : words})
  }

  render() {

    const displayScore = this.state.score === "" ? "" : `Score: ${this.state.score}`

    const displayVocab = this.state.score === "" ? "" : <VocabForm getDefinitionsCallback={this.getDefinitions} />

    return (
      <div>
        <NewTextForm getScoreCallback={this.getScore} />
        {displayScore}
        {displayVocab}
      </div>
    )
  }
}

export default TextContainer;
