import React from 'react';

const AddedFeature = props => {

  const removeFeature = event => {
    event.preventDefault()
    props.removeFeatures(props.feature)
    // dispatch an action here to remove an item
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
