import React from 'react';

const AddedFeature = props => {

  const handleClick = () => {

  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick} >X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
