import React, { Component } from 'react';
import axios from 'axios';
import NewTextForm from './NewTextForm';
import VocabForm from './VocabForm';
import GenerateHandouts from './GenerateHandouts';
import HandoutView from './HandoutView';
import Selection from './Selection';
import './TextContainer.css'

class TextContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      text: '',
      score: '',
      difficultWords: [],
      definitions: [],
      selections: [],
      showTextForm: true,
      showGenerateHandouts: false,
      showHandoutView: false,
      showVocabForm: false,
    }
  }

  textScore = (textScore) => {
    console.log(textScore);
    this.setState({text: textScore.text, score: textScore.score})
  }

  difficultWords = (array) => {
    console.log(array );
    this.setState({difficultWords: array})
  }

  selectedDef = (selection) => {
    console.log(selection);
    this.setState(prevState => ({
      selections: [...prevState.selections, [selection.word, selection.definition]]
    }))
  }

  deleteSelection = (word) => {
    const selectionList = this.state.selections
    selectionList.forEach((select, i) => {
      if (select[0] === word) {
        selectionList.splice(i, 1)
      }
    });
    this.setState({selections: selectionList})
  }

  saveHandout = (handoutData) => {
    handoutData['user'] = this.state.user;
    handoutData['score'] = this.state.score;
    console.log(handoutData);
    axios.post('http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/', handoutData)
      .then((response) => {
        console.log(response.data);
        this.displayHandoutView(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
  }

  displayVocabForm = () => {
    this.setState({showTextForm: true, showVocabForm: true, showGenerateHandouts: false, showHandoutView: false})
  }

  displayGenerateHandouts = () => {
    this.setState({showGenerateHandouts: true, showTextForm: false, showVocabForm: false, showHandoutView: false})
  }

  displayHandoutView = (data) => {
    this.setState({showGenerateHandouts: false, showTextForm: false, showVocabForm: false, showHandoutView: true, handout: data});
  }

  render() {

    const textForm = this.state.showTextForm ? <NewTextForm textScoreCallback={this.textScore} difficultWordsCallback={this.difficultWords}
        displayVocabFormCallback={this.displayVocabForm}/> : ''

    const vocabForm = this.state.showVocabForm ? <VocabForm selectedDefCallback={this.selectedDef}/> : ""

    const selections = this.state.selections.map((select) => {
      return <Selection key={select[0]} word={select[0]} def={select[1]} onSelectionClickCallback={this.deleteSelection} />
    });

    const difficultWords = this.state.difficultWords.map((word, i) => {
      return <li key={i}>{word}</li>
    });

    const words = this.state.selections.map((select, i) => {
      return {id: `word-${i + 1}`, content: select[0]}
    })

    const defs = this.state.selections.map((select, i) => {
      return {id: `def-${i + 1}`, content: select[1]}
    })

    const taggedText = '<p>' + this.state.text + '</p>'

    const generateHandouts = this.state.showGenerateHandouts ? <GenerateHandouts text={taggedText} words={words} defs={defs}  saveHandoutCallback={this.saveHandout}/> : ''

    const handoutView = this.state.showHandoutView ? <HandoutView data={this.state.handout} /> : ''

    return (
      <section className='text-container-container'>
        {this.state.showVocabForm ? <button type="button" className="btn btn-secondary btn-lg" onClick={this.displayGenerateHandouts}>Generate Handouts</button> : ''}
        <div className='text-container-forms'>
          {textForm}
          {vocabForm}
        </div>
        <div className='text-container-info-display'>
          {this.state.score && this.state.showTextForm ? `Score: ${this.state.score}` : ''}
          <ul>
            {this.state.showTextForm && this.state.score !== "" ? selections : ''}
          </ul>
          <ul>
            {this.state.showTextForm && this.state.difficultWords !== "" ? difficultWords : ''}
          </ul>
        </div>
        <div className='text-container-handouts'>

          {generateHandouts}

          {handoutView}
        </div>
      </section>
    )
  }
}

export default TextContainer;
