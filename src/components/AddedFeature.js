import React from 'react';

const AddedFeature = props => {

  const handleRemoveFeature = e => {
    e.preventDefault();
    props.removeFeature(props.feature)
    console.log(props.removeFeature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemoveFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
