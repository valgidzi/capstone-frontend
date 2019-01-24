import React from 'react';
import './Selection.css'

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
      <div className='selection-text'>
        {props.word}: {props.def}
      </div>




    </div>
  )
}


export default Selection;
