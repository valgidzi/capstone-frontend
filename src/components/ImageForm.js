import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageForm extends Component {
  constructor(props) {
    super();

    this.state = {
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  onImageFormSubmit = (event) => {
    event.preventDefault();
    this.props.addImageUrlCallback(this.state.imageUrl)
    this.setState({imageUrl: ''})
  }

  render() {

    return (

      <form id="imageform" onSubmit={this.onImageFormSubmit}>
        <input type="text" className="form-control"
        name="imageUrl"
        placeholder="Image URL"
        value={this.state.imageUrl}
        onChange={this.onInputChange} />
        <input type="submit" className="btn btn-outline-success" value="Add Image" />
      </form>

    )
  }
}

ImageForm.propTypes = {
  logInUserCallback: PropTypes.func,
}

export default ImageForm;
