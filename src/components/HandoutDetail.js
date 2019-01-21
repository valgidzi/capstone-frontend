import React from 'react';

const HandoutDetail = (props) => {

  const onHandoutDetailClick = () => {
    console.log(props.id);
    props.onHandoutDetailClickCallback(props.id)
  }

  return (


    <div className="card width">
      {props.title}
      {props.score}
      {props.user}
      <button onClick={onHandoutDetailClick}>
        View
      </button>
    </div>
  )
}


export default HandoutDetail;
