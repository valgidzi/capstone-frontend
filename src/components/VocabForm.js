import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SuggestedWord from './SuggestedWord'
import './VocabForm.css'

class VocabForm extends Component {
  constructor(props) {
    super();

    this.state = {
      word: '',
      definitions: [],
      selectedDef: '',
      suggestedWords: [],
      highlight: false,
    }
  }

  componentDidMount() {
    const text = {
      text: this.props.text
    }
    console.log(text);
    axios.post('http://teachers-corner-api.us-west-2.elasticbeanstalk.com/difficultwords/', text)
      .then((response) => {
        console.log(response.data);
        const uniqueWords = response.data.words.filter((word, index, array) => array.indexOf(word) === index);
        this.setState({suggestedWords: uniqueWords})
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  getDefinitions = (words) => {
    const defEP = `http://teachers-corner-api.us-west-2.elasticbeanstalk.com/definitions/?word=${words.word}`
    axios.get(defEP)
      .then((response) => {
        console.log(defEP);
        console.log(response.data.definitions);
        this.setState({definitions: response.data.definitions, highlight: true })
      })
      .catch((error) => {
        this.setState({errors: error.message})
      })
  }

  setClickedWord = (word) => {
    this.setState({word: word})
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const words = {
      word: this.state.word,
    };

    this.getDefinitions(words);

  }

  onDefSelection = (event) => {
    event.preventDefault();

    const selection = {
      word: this.state.word,
      definition: this.state.selectedDef
    }

    this.props.selectedDefCallback(selection)

    this.setState({word: '', definitions: [], selectedDef: '', highlight: false})
  }

  render() {

    const defSelections = this.state.definitions.map((definition, i) => {
      return <option
        key={i}
        value={definition}>
        {definition}
      </option>
    })

    const suggestedWords = this.state.suggestedWords.map((word, i) => {
      return <SuggestedWord key={i} word={word} onSuggestedWordClickCallback={this.setClickedWord}/>
    });

    return (
      <div>
        <h4>Suggested Words</h4>
        <div className='suggested-words-container'>
          {suggestedWords}
        </div>
        <form
          className="vocab-form-container"
          id="vocabform"
          onSubmit={this.onFormSubmit}>
          <input type="text" className="form-control form-control-lg"
          name="word"
          value={this.state.word}
          onChange={this.onInputChange} />

          <input
            type="submit"
            className="btn btn-outline-dark btn-lg"
            value="Get Definition"/>
        </form>

        <form
          className="definition-form-container"
          id="definitionform"
          onSubmit={this.onDefSelection}>
          <select
            name="selectedDef"
            value={this.state.selectedDef}
            onChange={this.onInputChange}
            className={this.state.highlight ? 'form-control highlight' : 'form-control'}>
            <option
              key="blank"
              value='Select a definition'>
              Select a definition
            </option>
            {defSelections}
          </select>
          <input
            type="submit"
            className="btn btn-outline-dark btn-lg"
            value="Select Definition"/>
        </form>

      </div>
    )
  }
}

VocabForm.propTypes = {
  selectedDefCallback: PropTypes.func,
}

export default VocabForm;
