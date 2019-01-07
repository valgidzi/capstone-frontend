import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NewTextForm.css';

class NewTextForm extends Component {
  constructor() {
    super();

    this.state = {
      original: '',
      score: '',
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

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newText = {
      original: this.state.text,
    };

    this.getScore(newText);

    this.setState({
      original: '',
    });

  }

  render() {

    const displayScore = this.state.score === "" ? "" : `Score: ${this.state.score}`

    return (
      <div>
        <form
          id="newtextform"
          onSubmit={this.onFormSubmit}>

          <label
            htmlFor="text">
            Enter text here.
          </label>
          <textarea
            name="text"
            form="newtextform"
            value={this.state.text}
            onChange={this.onInputChange}/>

          <input
            type="submit"
            value="Get Score"/>

        </form>
        {displayScore}
      </div>
    )
  }
}

NewTextForm.propTypes = {
  getScoreCallback: PropTypes.func,
}

export default NewTextForm;
