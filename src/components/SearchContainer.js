import React, { Component } from 'react';
import axios from 'axios';
import HandoutList from './HandoutList';
import HandoutView from './HandoutView';

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handouts: [],
      selectedHandout: '',
      view: false,
      edit: false
    };
  }

  // componentDidMount() {
  //   const getHandoutsEndpoint = 'http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/'
  //
  //   axios.get(getHandoutsEndpoint)
  //   .then((response) => {
  //     console.log(response.data);
  //     this.setState({ handouts: response.data });
  //   })
  //   .catch((error) => {
  //     this.setState({ error: error.message });
  //   });
  // }

  getDetail = () => {
    axios.get('http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/1/')
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
    axios.get(`http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/${id}/`)
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

    const displayCollection = !this.state.view && !this.state.edit ? <HandoutList selectedHandoutCallback={this.setSelectedHandout}/> : ''

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
