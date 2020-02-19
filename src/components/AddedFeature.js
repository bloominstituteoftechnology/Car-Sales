import React from 'react';

const AddedFeature = props => {
  console.log('addedfeature', props);
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature()}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
