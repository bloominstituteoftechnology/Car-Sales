import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      <h1 onClick={props.removeFeature}>{props.feature.name}</h1>
    </li>
  );
};

export default AddedFeature;
