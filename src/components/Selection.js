import React from 'react';

const Selection = (props) => {

  const onSelectionClick = () => {
    console.log(props.word);
    props.onSelectionClickCallback(props.word)
  }

  return (


    <div>
      {props.word}: {props.def}
      <button onClick={onSelectionClick}>
        Delete
      </button>
    </div>
  )
}


export default Selection;
