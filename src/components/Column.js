import React from 'react';
import Word from './Word';
import './Column.css'
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
  background-color: white;
`;

const Title = styled.h3`
  padding: 8px;
`;

const WordList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }
  render() {

    const hideColumn = () => {
      this.setState({hidden: true})
    }

    return (
      <div className={this.state.hidden ? 'hidden' : 'visible'}>
        <Draggable draggableId={this.props.column.id} index = {this.props.index}>
          {(provided) => (
            <Container
              {...provided.draggableProps}
              ref={provided.innerRef}
              >
              <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
              <Droppable droppableId={this.props.column.id} type="word">
                {provided => (
                  <WordList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                    {this.props.words.map((word, index) => (
                      <Word key={word.id} word={word} index={index}/>
                    ))}
                    <button onClick={hideColumn}>Remove</button>
                    {provided.placeholder}
                  </WordList>
                )}
              </Droppable>
            </Container>
          )}
        </Draggable>
      </div>
    );
  }
}
