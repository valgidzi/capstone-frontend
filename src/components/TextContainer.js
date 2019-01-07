import React, { Component } from 'react';
import axios from 'axios';
import NewTextForm from './NewTextForm';

class TextContainer extends Component {
  constructor() {
    super();

    this.state = {
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


  render() {

    const displayScore = this.state.score === "" ? "" : `Score: ${this.state.score}`

    return (
      <div>
        <NewTextForm getScoreCallback={this.getScore} />
        {displayScore}
      </div>
    )
  }
}

export default TextContainer;
