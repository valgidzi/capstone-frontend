import React, { Component } from 'react';
import axios from 'axios';
import NewTextForm from './NewTextForm';
import VocabForm from './VocabForm';
import GenerateHandouts from './GenerateHandouts';
import HandoutView from './HandoutView';
import './TextContainer.css'

class TextContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      score: '',
      text: '',
      definitions: [],
      selections: [],
      generate: false,
      textForm: true,
      view: false,
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

  viewHandout = (data) => {
    this.setState({generate: false, textForm: false, view: true, handout: data});
  }

  saveHandout = (handoutData) => {
    handoutData['user'] = this.state.user;
    handoutData['score'] = this.state.score;
    console.log(handoutData);
    axios.post('https://teachers-corner-api.herokuapp.com/handouts/', handoutData)
      .then((response) => {
        console.log(response.data);
        this.viewHandout(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  render() {

    const textForm = this.state.textForm ? <NewTextForm textScoreCallback={this.textScore}/> : ''

    const displayScore = this.state.score === "" ? "" : `Score: ${this.state.score}`

    const displayVocab = this.state.textForm && this.state.score !== "" ? <VocabForm selectedDefCallback={this.selectedDef}/> : ""

    const selections = this.state.selections.map((select) => {
      return <li key={select[0]}>{select[0]}: {select[1]}</li>
    });

    const words = this.state.selections.map((select, i) => {
      return {id: `word-${i + 1}`, content: select[0]}
    })

    const defs = this.state.selections.map((select, i) => {
      return {id: `def-${i + 1}`, content: select[1]}
    })

    const taggedText = '<p>' + this.state.text + '</p>'

    const generate = this.state.generate ? <GenerateHandouts text={taggedText} words={words} defs={defs} viewHandoutCallback={this.viewHandout} saveHandoutCallback={this.saveHandout}/> : ''

    const buttonText = this.state.generate ? 'Edit Text' : 'Generate Handouts'

    const view = this.state.view ? <HandoutView data={this.state.handout} /> : ''

    return (
      <div>
        {textForm}
        {displayScore}
        {displayVocab}
        <ul>
          {this.state.textForm && this.state.score !== "" ? selections : ''}
        </ul>

        <button type="button" className="btn btn-secondary btn-lg" onClick={this.toggleGenerate}>{buttonText}</button>
        {generate}

        {view}
      </div>
    )
  }
}

export default TextContainer;
