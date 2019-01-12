import React from 'react';
import Column from './Column'

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
      column: {
        'column-1': {
          id: 'column-1',
          title: 'Words',
          wordIds: {wordIds},
        },
      },
      columnOrder: ['column-1'],
    };
  }
  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.column[columnId];

      return <Column key={column.id} column={column} words={this.state.words.words} />
    });
  }
};

export default GenerateHandouts;
