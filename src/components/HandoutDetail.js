import React from 'react';
import './HandoutDetail.css'

const HandoutDetail = (props) => {

  const onHandoutDetailClick = () => {
    console.log(props.data.id);
    props.onHandoutDetailClickCallback(props.data.id)
  }

  return (


    <div className="card width">
      <div className="handout-card card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text">{props.data.directions}</p>
        <p className="card-text">{props.data.score}</p>
        <p className="card-text">Created by {props.data.user}</p>
        <button onClick={onHandoutDetailClick}>
          View
        </button>
      </div>

    </div>
  )
}


export default HandoutDetail;
