import React from 'react';
import Word from './Word';
import './Column.css'
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 50%;
`;

const Title = styled.h3`
  padding: 8px;
`;

const WordList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <WordList
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.words.map((word, index) => (
                <Word key={word.id} word={word} index={index}/>
              ))}
              {provided.placeholder}
            </WordList>
          )}
        </Droppable>
      </Container>
    );
  }
}
