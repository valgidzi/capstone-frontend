import React, { Component } from 'react';
import axios from 'axios';

class HandoutList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handouts: [],
    };
  }

  componentDidMount() {
    const getHandoutsEndpoint = 'https://teachers-corner-api.herokuapp.com/handouts/'

    axios.get(getHandoutsEndpoint)
    .then((response) => {
      console.log(response.data);
      this.setState({ handouts: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  getDetail = () => {
    axios.get('https://teachers-corner-api.herokuapp.com/handouts/1/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    // display list with title, user, score, (created, updated?)
    return(
      <div>
        <h1>Working</h1>
        <button
          onClick={this.getDetail}>
          Handout Detail
        </button>
      </div>
    )
  }
}

export default HandoutList;
