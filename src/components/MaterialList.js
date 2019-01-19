import React, { Component } from 'react';
import axios from 'axios';

class MaterialList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [],
    };
  }

  componentDidMount() {
    const getMaterialsEndpoint = 'https://teachers-corner-api.herokuapp.com/handouts/'

    axios.get(getMaterialsEndpoint)
    .then((response) => {
      console.log(response.data);
      this.setState({ materials: response.data });
    })
    .catch((error) => {
      this.setState({ materials: error.message });
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
    return(
      <div>
        <h1>Working</h1>
        <button
          onClick={this.getDetail}>
          Material Detail
        </button>
      </div>
    )
  }
}

export default MaterialList;
