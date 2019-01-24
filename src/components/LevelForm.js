import React, { Component } from 'react';
import './LevelForm.css'

class LevelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLevel: '',
    };
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.selectedLevel);
    this.props.onSelectLevelCallback(this.state.selectedLevel)
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

    const levels = ['Select a learner level', 'A1 - Low', 'A1 - High', 'A2 - Low', 'A2 - High', 'B1 - Low', 'B1 - High', 'B2 - Low', 'B2 - High', 'C1 - Low', 'C1 - High', 'C2 - Low', 'C2 - High']

    const levelSelections = levels.map((level, i) => {
      return <option
        key={i}
        value={level}>
        {level}
      </option>
    })

    return(
      <div>
        <form className='level-form-container' id='levelform' onSubmit={this.onFormSubmit}>
          <select
          name="selectedLevel"
          value={this.state.selectedLevel}
          onChange={this.onInputChange}
          className="form-control level-form">
          {levelSelections}
          </select>
          <input
          type="submit"
          className="btn btn-outline-dark"
          value="Select Level"/>
        <button type="button" className="btn btn-outline-dark" onClick={this.props.clearFilterCallback}>Clear Filter</button>
        </form>
      </div>
    )
  }
}

export default LevelForm;
