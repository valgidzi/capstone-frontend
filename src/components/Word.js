import React from 'react';
import './Word.css'
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default class Word extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.word.id} index={this.props.index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {this.props.word.content}
        </Container>
      )}
      </Draggable>
    )

  }
}
