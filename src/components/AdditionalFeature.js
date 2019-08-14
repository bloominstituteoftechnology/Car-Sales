import React from 'react';

const AdditionalFeature = props => {

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={props.addButton(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;