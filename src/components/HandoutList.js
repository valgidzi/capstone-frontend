import React, { Component } from 'react';
import axios from 'axios';
import HandoutDetail from './HandoutDetail';
import LevelForm from './LevelForm'
import './HandoutList.css'

class HandoutList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handouts: [],
      selectedHandout: '',
      levelFilteredHandouts: [],
      selectedLevel: '',
      view: false,
      edit: false,
      filter: false,
    };
  }

  componentDidMount() {
    const getHandoutsEndpoint = 'https://www.teachers-corner-api.com/handouts/'

    axios.get(getHandoutsEndpoint)
    .then((response) => {
      console.log(response.data);
      this.setState({ handouts: response.data });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    });
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
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

  levelFilter = (level) => {
    const levelFilteredHandouts = []
    this.state.handouts.forEach((handout) => {
      if (handout.score === level) {
        levelFilteredHandouts.push(handout);
      };
    });
    return levelFilteredHandouts;
  };

  onSelectLevel = (level) => {
    console.log(this.levelFilter(level));
    this.setState({levelFilteredHandouts: this.levelFilter(level), selectedLevel: level, filter: true})
  }

  clearFilter = () => {
    this.setState({levelFilteredHandouts: [], selectedLevel: '', filter: false})
  }

  // selectedHandout = (id) => {
  //   console.log(id);
  //   this.props.selectedHandoutCallback(id)
  //   // axios.get(`https://www.teachers-corner-api.com/handouts/${id}/`)
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
      return <HandoutDetail key={handout.id} data={handout} onHandoutDetailClickCallback={this.props.selectedHandoutCallback} />
    });

    const filteredHandoutCollection = this.state.levelFilteredHandouts.map((handout) => {
      return <HandoutDetail key={handout.id} data={handout} onHandoutDetailClickCallback={this.props.selectedHandoutCallback} />
    });

    return(
      <section className='handout-list-container'>
        <LevelForm onSelectLevelCallback={this.onSelectLevel} clearFilterCallback={this.clearFilter}/>
        <div className='handout-list'>
          { this.state.filter ? filteredHandoutCollection : handoutCollection }
        </div>
      </section>
    )
  }
}

export default HandoutList;
