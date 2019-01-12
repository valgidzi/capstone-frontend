import React from 'react';
import './Word.css'

export default class Word extends React.Component {
  render() {
    return (
      <div className="word-container">
        {this.props.word.content}
      </div>
    )

  }
}
