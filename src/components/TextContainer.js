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
      text: '',
      definitions: [],
      selections: [],
    }
  }

  textScore = (textScore) => {
    console.log(textScore);
    this.setState({text: textScore.text, score: textScore.score})
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
        <NewTextForm textScoreCallback={this.textScore}/>
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
