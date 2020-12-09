import React from 'react';
import { toggleFeature } from './../actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.toggleFeature()} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
