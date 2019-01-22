import React, { Component } from 'react';
import axios from 'axios';
import HandoutDetail from './HandoutDetail';

class HandoutList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handouts: [],
      selectedHandout: '',
      view: false,
      edit: false
    };
  }

  componentDidMount() {
    const getHandoutsEndpoint = 'http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/'

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
    axios.get('http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/1/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // selectedHandout = (id) => {
  //   console.log(id);
  //   this.props.selectedHandoutCallback(id)
  //   // axios.get(`http://teachers-corner-api.us-west-2.elasticbeanstalk.com/handouts/${id}/`)
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //     this.setState({selectedHandout: response.data, view: true})
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error.message);
  //   //     this.setState({error: error.message})
  //   //   });
  // }

  render() {
    // display list with title, user, score, (created, updated?)
    const handoutCollection = this.state.handouts.map((handout) => {
      return <li key={handout.id}><HandoutDetail id={handout.id} title={handout.title} user={handout.user} score={handout.score} onHandoutDetailClickCallback={this.props.selectedHandoutCallback} /></li>
    });

    return(
      <section>
        <ul>
          {handoutCollection}
        </ul>
      </section>
    )
  }
}

export default HandoutList;
