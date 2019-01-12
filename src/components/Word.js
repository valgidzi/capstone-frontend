import React from 'react';
import './Word.css'
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

export default class Word extends React.Component {
  render() {
    return (
      <Draggable key={this.props.word.id} draggableId={this.props.word.id} index={this.props.index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {this.props.word.content}
          {provided.placeholder}
        </Container>
      )}
      </Draggable>
    )

  }
}
