import React from 'react';
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd';

class GenerateHandouts extends React.Component {
  constructor(props) {
    super(props);

    const words = props.selections.map((select, i) => {
      return {id: `word-${i + 1}`, content: select[0]}
    });

    const wordIds = [];
    let i;
    for (i=0; i < words.length; i++) {
      wordIds.push(`word-${i + 1}`)
    }


    this.state = {
      words: {words},
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'Words',
          wordIds: {wordIds},
        },
      },
      columnOrder: ['column-1'],
    };
  }

  onDragEnd = (result) => {
    // TODO: reorder words
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
        const column = this.state.columns[columnId];

        return <Column key={column.id} column={column} words={this.state.words.words} />
        })}
      </DragDropContext>
    );
  }
};

export default GenerateHandouts;
