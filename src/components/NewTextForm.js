import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './NewTextForm.css';

class NewTextForm extends Component {
  constructor(props) {
    super();

    this.state = {
      text: '',
      score: '',
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
    axios.post('http://teachers-corner-api.us-west-2.elasticbeanstalk.com/textscore/', newText)
      .then((response) => {
        console.log(response.data.score);
        this.setState({text: response.data.text, score: response.data.score})

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
      text: this.state.text,
    };
    console.log(newText);
    this.getScore(newText);



    // this.setState({
    //   text: '',
    // });

  }

  render() {



    return (
      <div>
        <button onClick={this.onFormSubmit}>Get Score</button>

        <button onClick={this.props.displayVocabFormCallback}>Get Vocab</button>
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
        </form>

      </div>
    )
  }
}

NewTextForm.propTypes = {
  getScoreCallback: PropTypes.func,
}

export default NewTextForm;
