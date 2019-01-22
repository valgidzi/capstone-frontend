import React from 'react';

const SuggestedWord = (props) => {

  const onSuggestedWordClick = () => {
    console.log(props.word);
    props.onSuggestedWordClickCallback(props.word)
  }

  return (

    <div>
      <button onClick={onSuggestedWordClick}>
        {props.word}
      </button>
    </div>
  )
}


export default SuggestedWord;
