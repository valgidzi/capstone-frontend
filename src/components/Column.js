import React from 'react';
import Word from './Word';
import './Column.css'

export default class Column extends React.Component {
  render() {
    return (
      <section className="column-1-container">
        <h2 className="column-1-title">{this.props.column.title}</h2>
        <div className="column-1-words">
          {this.props.words.map(word => <Word key={word.id} word={word} />)}
        </div>
      </section>
    )
  }
}
