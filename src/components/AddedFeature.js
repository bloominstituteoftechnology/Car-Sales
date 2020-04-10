import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature.name)}>X {props.feature.name}</button>
    </li>
  );
};

export default AddedFeature;
