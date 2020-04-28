import React from 'react';

const AdditionalFeature = props => {

  const handleClick = e => {
    e.preventDefault();
    props.handleClick(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;