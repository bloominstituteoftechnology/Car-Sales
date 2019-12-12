import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.remove(props.feature)} className="button"><i className="fas fa-times-circle"></i></button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
