import React from 'react';

const GenerateHandouts = (props) => {

  return (
    <div className="genhands">
      <h1>Generate Handouts</h1>
      <ul>
        <li>{props.text}</li>
         {props.selections.map(select =>
           <li key={select[0]}>{select[0]}: {select[1]}</li>
        )}

      </ul>
    </div>
  );
};

export default GenerateHandouts;
