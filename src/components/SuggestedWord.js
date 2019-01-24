import React from 'react';
import './SuggestedWord.css'

const SuggestedWord = (props) => {

  const onSuggestedWordClick = () => {
    console.log(props.word);
    props.onSuggestedWordClickCallback(props.word)
  }

  return (
    <div className='suggested-word-container'>
      <button type='button' className='btn btn-outline-info' onClick={onSuggestedWordClick}>
        {props.word}
      </button>
    </div>
  )
}


export default SuggestedWord;
