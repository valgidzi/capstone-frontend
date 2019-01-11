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
      words: [],
      definitions: [],
      selections: [],
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

  selectedDef = (selection) => {
    console.log(selection);
    // this.setState({selections: [selection.word, selection.definition]})
    this.setState(prevState => ({
      selections: [...prevState.selections, [selection.word, selection.definition]]
    }))
    // this.setState(prevState => ({
    //   definitions: [...prevState.definitions, selection.definition]
    // }))
  }



  render() {

    const displayScore = this.state.score === "" ? "" : `Score: ${this.state.score}`

    const displayVocab = this.state.score === "" ? "" : <VocabForm selectedDefCallback={this.selectedDef}/>

    return (
      <div>
        <NewTextForm getScoreCallback={this.getScore} />
        {displayScore}
        {displayVocab}
        <ul>
          {this.state.selections.map(select => (
            <li key={select[0]}>{select[0]}: {select[1]}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TextContainer;
