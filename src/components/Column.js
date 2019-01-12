import React from 'react';
import Word from './Word';
import './Column.css'
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';

const WordList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <section className="column-1-container">
        <h2 className="column-1-title">{this.props.column.title}</h2>
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
      </section>
    );
  }
}
