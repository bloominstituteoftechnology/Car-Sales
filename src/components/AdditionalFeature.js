import React from 'react';

const AdditionalFeature = props => {

  const handleAddButton = e => {
    e.preventDefault();
    props.buyItem(props.feature)
    console.log(props.buyItem)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAddButton} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
