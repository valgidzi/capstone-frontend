import React, { Component } from 'react';
import './HandoutView.css'
import ReactHtmlParser from 'react-html-parser';

class HandoutView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [],
    };
  }

  render() {

    const html = this.props.data.text;

    const words = this.props.data.words.split(',').map((word, i) => {
      return <p key={i}>{word}</p>
    });

    const defs = this.props.data.definitions

    const parsedDefString = defs.slice(0, defs.length - 1)

    const goodDefs = [];

    const trimmedDefs = parsedDefString.split('@').forEach((el) => {
      let def = el[0] === "," ? el.slice(1) : el
      goodDefs.push(def)
    })

    const definitions = goodDefs.map((def, i) => {
      return <p key={i}>{def}</p>
    });

    return(
      <div className='handout-view-container'>
        <h3>{this.props.data.title}</h3>
          <div>{ ReactHtmlParser(html)}</div>
          <p>Match the words with the correct definitions.</p>
          <div className='columns-container'>
            <div className='column'>
              {words}
            </div>
            <div className='column'>
              {definitions}
            </div>
          </div>
      </div>
    )
  }
}

export default HandoutView;
