import React from 'react';
import axios from 'axios';
import Column from './Column'
import TextBox from './TextBox'
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  display: flex;
`;


class GenerateHandouts extends React.Component {
  constructor(props) {
    super(props);

    const arrayToObject = (arr, keyField) => Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})))

    this.state = {
      words: arrayToObject(props.words, 'id'),
      defs: arrayToObject(props.defs, 'id'),
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'Words',
          wordIds: [],
        },
        'column-2': {
          id: 'column-2',
          title: 'Definitions',
          wordIds: [],
        },
      },
      columnOrder: ['column-1', 'column-2'],
    };

    let i;
    for (i=0; i < Object.keys(this.state.words).length; i++) {
      this.state.columns['column-1'].wordIds.push(`word-${i + 1}`)
    }

    let j;
    for (j=0; j < Object.keys(this.state.defs).length; j++) {
      this.state.columns['column-2'].wordIds.push(`def-${j + 1}`)
    }


  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    console.log(destination);
    console.log(source);
    console.log(draggableId);
    console.log(this.state.words);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type=== 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newWordIds = Array.from(column.wordIds);
    newWordIds.splice(source.index, 1);
    newWordIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      wordIds: newWordIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render() {

    const onSaveClick = (text) => {
      // const parsedWords = this.props.words.map(word => word.id.split('-')[1] + '@' + word.content)
      const words = this.state.columns['column-1'].wordIds.map(wordId => this.state.words[wordId].content);
      // const parsedDefs = this.props.defs.map(def => def.id.split('-')[1] + '@' + def.content)
      const defs = this.state.columns['column-2'].wordIds.map(wordId => this.state.defs[wordId].content + '@');

      const handoutData = {
        text: text,
        words: words.toString(),
        word_order: this.state.columns['column-1'].wordIds.toString(),
        definitions: defs.toString(),
        definitions_order: this.state.columns['column-2'].wordIds.toString()
      }
      console.log(handoutData);

      axios.post('http://127.0.0.1:8000/handouts/', handoutData)
        .then((response) => {
          console.log(response.data);
          this.props.viewHandoutCallback(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        })

    }

    return (
      <React.Fragment>
        <TextBox text={this.props.text} onSaveClickCallback={onSaveClick}/>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <Container
                {...provided.droppableProps}
                ref={provided.innerRef}
                >
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId];
                  const textType = column.title === "Words" ? this.state.words : this.state.defs
                  const words = column.wordIds.map(wordId => textType[wordId]);

                  return <Column key={column.id} column={column} words={words} index={index}/>
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </React.Fragment>
    );
  }
};

export default GenerateHandouts;
