import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          id="vocabform"
          onSubmit={this.onFormSubmit}>
          <input type="text"
          name="word"
          value={this.state.word}
          onChange={this.onInputChange} />

          <input
            type="submit"
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
