import React, { Component } from 'react';
import axios from 'axios';
import NewTextForm from './NewTextForm';
import VocabForm from './VocabForm';
import './TextContainer.css'

class TextContainer extends Component {
  constructor() {
    super();

    this.state = {
      score: '',
      definitions: [],
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
    const defEP = `http://localhost:8000/definitions/?word=${words.word}`
    axios.get(defEP)
      .then((response) => {
        console.log(defEP);
        this.setState(prevState => ({
          definitions: [...prevState.definitions, `${words.word}: ${response.data.definition}\n`]
        }))

      })
      .catch((error) => {
        this.setState({errors: error.message})
      })
  }

  render() {

    const displayScore = this.state.score === "" ? "" : `Score: ${this.state.score}`

    const displayVocab = this.state.score === "" ? "" : <VocabForm getDefinitionsCallback={this.getDefinitions} />

    return (
      <div>
        <NewTextForm getScoreCallback={this.getScore} />
        {displayScore}
        {displayVocab}
        <ul>
          {this.state.definitions.map(def => (
            <li key={def}>{def}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TextContainer;
