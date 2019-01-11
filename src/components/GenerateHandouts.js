import React from 'react';

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
  return (

      <div className="genhands">
      <h1>Generate Handouts</h1>
      <ul>
      <li>{this.props.text}</li>
      {this.props.selections.map(select =>
        <li key={select[0]}>{select[0]}: {select[1]}</li>
      )}
      <li>{this.wordIds}</li>

      </ul>
      </div>
    )
  }
};

export default GenerateHandouts;
