import React, { Component } from 'react';
import axios from 'axios';
import NewTextForm from './NewTextForm';
import VocabForm from './VocabForm';
import GenerateHandouts from './GenerateHandouts';
import './TextContainer.css'

class TextContainer extends Component {
  constructor() {
    super();

    this.state = {
      score: '',
      text: '',
      definitions: [],
      selections: [],
      generate: false,
      textForm: true,
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

  toggleGenerate = () => {
    this.setState({generate: !this.state.generate, textForm: !this.state.textForm})
  }

  render() {

    const textForm = this.state.textForm ? <NewTextForm textScoreCallback={this.textScore}/> : ''

    const displayVocab = this.state.textForm && this.state.score !== "" ? <VocabForm selectedDefCallback={this.selectedDef}/> : ""

    const selections = this.state.selections.map((select) => {
      return <li key={select[0]}>{select[0]}: {select[1]}</li>
    });

    const words = this.state.selections.map((select, i) => {
      return {id: `word-${i + 1}`, content: select[0]}
    })

    const generate = this.state.generate ? <GenerateHandouts text={this.state.text} words={words}/> : ''

    const buttonText = this.state.generate ? 'Edit Text' : 'Generate Handouts'

    return (
      <div>
        {textForm}

        {displayVocab}
        <ul>
          {this.state.textForm && this.state.score !== "" ? selections : ''}
        </ul>

        <button type="button" className="btn btn-secondary btn-lg" onClick={this.toggleGenerate}>{buttonText}</button>
        {generate}
      </div>
    )
  }
}

export default TextContainer;
