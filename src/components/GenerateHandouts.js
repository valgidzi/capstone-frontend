import React from 'react';
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd';

class GenerateHandouts extends React.Component {
  constructor(props) {
    super(props);

    const arrayToObject = (arr, keyField) => Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})))

    this.state = {
      words: arrayToObject(props.words, 'id'),
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'Words',
          wordIds: [],
        },
      },
      columnOrder: ['column-1'],
    };

    let i;
    for (i=0; i < Object.keys(this.state.words).length; i++) {
      this.state.columns['column-1'].wordIds.push(`word-${i + 1}`)
    }


  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
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
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];
        const words = column.wordIds.map(wordId => this.state.words[wordId]);

        return <Column key={column.id} column={column} words={words} />
        })}
      </DragDropContext>
    );
  }
};

export default GenerateHandouts;
