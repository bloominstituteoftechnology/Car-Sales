import React from 'react';

const AddedFeature = props => {
  return (
    <li>
     
      <button className="button" onClick={() => props.dispatch({ type: 'REM',id:props.feature.id })}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
