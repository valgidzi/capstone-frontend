import React from 'react';

const Selection = (props) => {

  const onDeleteClick = () => {
    console.log(props.word);
    props.onDeleteClickCallback(props.word)
  }

  return (


    <div className='selection-container'>

      <button onClick={onDeleteClick} className="btn btn-small">
        X
      </button>
      {props.word}: {props.def}

    </div>
  )
}


export default Selection;
