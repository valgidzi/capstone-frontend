import React from 'react';

const HandoutDetail = (props) => {

  const onHandoutDetailClick = () => {
    console.log(props.id);
    props.onHandoutDetailClickCallback(props.id)
  }

  return (


    <div className="card width">
      <ul>
        <li>Title: {props.title}</li>
        <li>Level: {props.score}</li>
        <li>Author: {props.user}</li>
      </ul>
      <button onClick={onHandoutDetailClick}>
        View
      </button>
    </div>
  )
}


export default HandoutDetail;
