import React from 'react';

const DifficultWord = (props) => {

  const onDifficultWordClick = () => {
    console.log(props.word);
    props.onDifficultWordClickCallback(props.word)
  }

  return (

    <div>
      <button onClick={onDifficultWordClick}>
        {props.word}
      </button>
    </div>
  )
}


export default DifficultWord;
