import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './VocabForm.css'

class VocabForm extends Component {
  constructor(props) {
    super();

    this.state = {
      word: "",
      definitions: [],
      selectedDef: '',
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  getDefinitions = (words) => {
    const defEP = `https://teachers-corner-api.herokuapp.com/definitions/?word=${words.word}`
    axios.get(defEP)
      .then((response) => {
        console.log(defEP);
        console.log(response.data.definitions);
        this.setState({definitions: response.data.definitions })
      })
      .catch((error) => {
        this.setState({errors: error.message})
      })
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

    this.setState({word: '', definitions: [], selectedDef: ''})
  }

  render() {


    const defSelections = this.state.definitions.map((definition, i) => {
      return <option
        key={i}
        value={definition}>
        {definition}
      </option>
    })

    return (
      <div>
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
          className="definition-form"
          id="definitionform"
          onSubmit={this.onDefSelection}>
          <select
            name="selectedDef"
            value={this.state.selectedDef}
            onChange={this.onInputChange}>
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
