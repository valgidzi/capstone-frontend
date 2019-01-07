import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VocabForm extends Component {
  constructor(props) {
    super();

    this.state = {
      word1: "",
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
      word1: this.state.word1,
    };

    this.props.getDefinitionsCallback(words);

    this.setState({
      word1: '',
    });

  }

  render() {

    return (
      <div>
        <form
          id="vocabform"
          onSubmit={this.onFormSubmit}>
          <input type="text"
          name="word1"
          value={this.state.word1}
          onChange={this.onInputChange} />

          <input
            type="submit"
            value="Get Definitions"/>
        </form>
      </div>
    )
  }
}

VocabForm.propTypes = {
  getDefinitionsCallback: PropTypes.func,
}

export default VocabForm;
