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
      return <p key={i}>{word}</p>
    });

    const defs = this.props.data.definitions

    const parsedDefString = defs.slice(0, defs.length - 1)

    const goodDefs = [];

    const trimmedDefs = parsedDefString.split('@').forEach((el) => {
      let def = el[0] === "," ? el.slice(1) : el
      goodDefs.push(def)
    })

    const definitions = goodDefs.map((def, i) => {
      return <p key={i}>{def}</p>
    });

    return(
      <Container>
        <h3>{this.props.data.title}</h3>
          <div>{ ReactHtmlParser(html)}</div>
          <p>Match the words with the correct definitions.</p>
          <Flex>
            <List>
              {words}
            </List>
            <List>
              {definitions}
            </List>
          </Flex>
      </Container>
    )
  }
}

export default Matching;
