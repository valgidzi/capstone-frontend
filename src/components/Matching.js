import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 15px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  background-color: white;
  padding: 10px;
`;

class HandoutView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [],
    };
  }

  render() {

    const words = this.props.data.words.split(',').map(word => {
      return <li>{word}</li>
    });

    const definitions = this.props.data.definitions.split('@').map(def => {
      return <li>{def}</li>
    });

    return(
      <Container>
        <h3>Matching Handout</h3>
          <p>{this.props.data.text}</p>
          <ul>{words}</ul>
          <ul>{definitions}</ul>
      </Container>
    )
  }
}

export default HandoutView;
