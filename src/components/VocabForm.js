import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VocabForm.css'

class VocabForm extends Component {
  constructor(props) {
    super();

    this.state = {
      word: "",
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const words = {
      word: this.state.word,
    };

    this.props.getDefinitionsCallback(words);

    this.setState({
      word: '',
    });

  }

  render() {

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
      </div>
    )
  }
}

VocabForm.propTypes = {
  getDefinitionsCallback: PropTypes.func,
}

export default VocabForm;
