import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './NewTextForm.css';

class NewTextForm extends Component {
  constructor(props) {
    super();

    this.state = {
      original: '',
      score: ''
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  getScore = (newText) => {
    axios.post('http://localhost:8000/texts/', newText)
      .then((response) => {
        console.log(response.data.score);
        this.setState({text: response.data.original, score: response.data.score})

        const textScore = {
          text: this.state.text,
          score: this.state.score,
        }

        this.props.textScoreCallback(textScore)
      })
      .catch((error) => {
        this.setState({errors: error.message})
      })


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
        <form className="text-form-container"
          id="newtextform"
          onSubmit={this.onFormSubmit}>

          <label
            htmlFor="text">
            Enter text here.
          </label>
          <textarea className="form-control" rows="8"
            name="text"
            form="newtextform"
            value={this.state.text}
            onChange={this.onInputChange}/>

          <input
            type="submit"
            value="Get Score"
            className="btn btn-outline-dark btn-lg"/>
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
