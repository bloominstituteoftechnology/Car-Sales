import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => props.removeFeature(props.feature)}className="button">X</button>
      <h1>{props.feature.name}</h1>
    </li>
  );
};

export default AddedFeature;
