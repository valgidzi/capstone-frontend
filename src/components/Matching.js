import React, { Component } from 'react';
import styled from 'styled-components';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Container = styled.div`
  margin: 15px;
  border: 1px solid lightgrey;
  border-radius: 2px;

  background-color: white;
  padding: 10px;
`;

const Flex = styled.div`
  display: flex;
`;

const List = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 50%;
  background-color: white;
`;

class Matching extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [],
    };
  }

  render() {

    const html = this.props.data.text;

    const words = this.props.data.words.split(',').map((word, i) => {
      return <li key={i}>{word}</li>
    });

    const definitions = this.props.data.definitions.split('@').map((def, i) => {
      return <li key={i}>{def}</li>
    });

    return(
      <Container>
        <h3>Matching Handout</h3>
          <div>{ ReactHtmlParser(html)}</div>
          <Flex>
            <List>
              <ul>{words}</ul>
            </List>
            <List>
              <ul>{definitions}</ul>
            </List>
          </Flex>
      </Container>
    )
  }
}

export default Matching;
