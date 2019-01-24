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
      showVocabButton: false,
      showResetButton: false,
      errors: '',
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
    axios.post('http://localhost:8000/textscore/', newText)
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

    if (this.props.user === '') {
      this.setState({errors: 'You must be logged in to do that.'})
    } else {
            const newText = {
        text: this.state.text,
      };
      console.log(newText);
      this.getScore(newText);
      this.setState({showVocabButton: true, showResetButton: true})
    }



    // this.setState({
    //   text: '',
    // });

  }

  onResetButtonClick = () => {
    this.setState({
      text: '',
      score: '',
      showVocabButton: false,
      showResetButton: false,
    })
    this.props.startOverCallback();
  }

  render() {

    const vocabButton = <button className='btn btn-secondary btn-lg' onClick={this.props.displayVocabFormCallback}>Explore Vocabulary</button>

    const resetButton = <button className='btn btn-secondary btn-lg' onClick={this.onResetButtonClick}>Start Over</button>

    const scoreButtonText = this.state.score ? `Learner Level: ${this.state.score}` : 'Get Learner Level'

    return (
      <section>
        <div className='errors-container'>
          {this.state.errors}
        </div>
        <div className='text-nav'>
          <button type='button' className='btn btn-secondary btn-lg' onClick={this.onFormSubmit}>{scoreButtonText}</button>
          {this.state.showVocabButton ? vocabButton : ''}
          {this.state.showResetButton ? resetButton : ''}
        </div>

        <form className="text-form-container"
          id="newtextform"
          onSubmit={this.onFormSubmit}>

          <textarea className="form-control" rows="8"
            name="text"
            form="newtextform"
            placeholder="Type or paste the text you want to work with"
            value={this.state.text}
            onChange={this.onInputChange}/>
        </form>

      </section>
    )
  }
}

NewTextForm.propTypes = {
  getScoreCallback: PropTypes.func,
}

export default NewTextForm;
