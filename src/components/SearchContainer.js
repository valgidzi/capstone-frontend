import React, { Component } from 'react';
import axios from 'axios';
import HandoutList from './HandoutList';
import HandoutView from './HandoutView';

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      handouts: [],
      selectedHandout: '',
      view: false,
      edit: false
    };
  }

  getDetail = () => {
    axios.get('https://www.teachers-corner-api.com/handouts/1/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  setSelectedHandout = (id) => {
    console.log(id);
    // this.setState({selectedHandout: id})
    axios.get(`https://www.teachers-corner-api.com/handouts/${id}/`)
      .then((response) => {
        console.log(response.data);
        // this.setState({selectedHandout: response.data})
        this.setState({selectedHandout: response.data, view: true})
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({error: error.message})
      });
  }

  render() {

    const displayCollection = !this.state.view && !this.state.edit ? <HandoutList selectedHandoutCallback={this.setSelectedHandout} user={this.state.user}/> : ''

    const displayView = this.state.view ? <HandoutView data={this.state.selectedHandout}/> : ''
    return(
      <section>
        {displayCollection}
        {displayView}
      </section>
    )
  }
}

export default SearchContainer;
