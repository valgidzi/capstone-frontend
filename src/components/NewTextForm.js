import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTextForm.css';

class NewTextForm extends Component {
  constructor(props) {
    super();

    this.state = {
      original: '',
    }
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

    const newText = {
      original: this.state.text,
    };

    this.props.getScoreCallback(newText);

    this.setState({
      original: '',
    });

  }

  render() {

    return (
      <div>
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

          <input
            type="submit"
            value="Get Score"
            className="btn btn-outline-dark btn-lg"/>

        </form>
      </div>
    )
  }
}

NewTextForm.propTypes = {
  getScoreCallback: PropTypes.func,
}

export default NewTextForm;
