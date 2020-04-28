import React from 'react';

const AddedFeature = props => {
  
  const handleClick = e => {
    e.preventDefault();
    console.log(e)
    props.handleClick(props.feature)
  }
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;