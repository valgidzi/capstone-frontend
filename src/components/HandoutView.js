import React, { Component } from 'react';
import './HandoutView.css'
import ReactHtmlParser from 'react-html-parser';
import html2canvas from 'html2canvas';

class HandoutView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      materials: [],
      hideView: false,
    };
  }

  takeScreenshot = () => {
    html2canvas(document.body, {useCORS: true}).then(function(canvas) {
      window.open().document.write('<div><img src="'+ canvas.toDataURL() + '" width="'+1000 +'" /></div> ');
    });


  }

  render() {

    const html = this.props.data.text;

    const words = this.props.data.words.split(',').map((word, i) => {
      return <p key={i}>{word}</p>
    });

    const defs = this.props.data.definitions

    const parsedDefString = defs.slice(0, defs.length - 1)

    const goodDefs = [];

    parsedDefString.split('@').forEach((el) => {
      let def = el[0] === "," ? el.slice(1) : el
      goodDefs.push(def)
    })

    const definitions = goodDefs.map((def, i) => {
      return <p key={i}>{def}</p>
    });

    const columnOrder = this.props.data.column_order.split(',')

    const firstColumnClass = () => {
      if ((columnOrder[0] === 'column-1' && !this.props.data.display_words) || (columnOrder[0] === 'column-2' && !this.props.data.display_definitions)) {
        return 'hidden'
      }
      return 'column'
    }

    const secondColumnClass = () => {
      if ((columnOrder[1] === 'column-1' && !this.props.data.display_words) || (columnOrder[1] === 'column-2' && !this.props.data.display_definitions)) {
        return 'hidden'
      }
      return 'column'
    }

    return(
      <div className='handout-view-container'>
        <div>
          <button onClick={this.takeScreenshot} className='btn btn-secondary' data-html2canvas-ignore="true">Print</button>
        </div>
        <h2>{this.props.data.title}</h2>
        <div className='image'>
          <img src={this.props.data.image_url} alt={this.props.data.image_url} />
        </div>
        <h5>{this.props.data.directions}</h5>
        <div className='text-container'>{ ReactHtmlParser(html)}</div>
        <div className='columns-container'>
          <div className={firstColumnClass()}>
            {columnOrder[0] === 'column-1' ? words : definitions}
          </div>
          <div className={secondColumnClass()}>
            {columnOrder[1] === 'column-1' ? words : definitions}
          </div>
        </div>
      </div>
    )
  }
}

export default HandoutView;
