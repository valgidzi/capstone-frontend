import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 15px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  background-color: white;
  padding: 10px;
`;

export default class TextBox extends React.Component {
  render() {
    return (
      <Container>
        {this.props.text}
      </Container>
    )

  }
}
