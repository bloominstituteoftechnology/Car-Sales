import React from 'react';
import { buyItem } from '../actions';

const AdditionalFeature = props => {
  const handleClick = () => {
    props.buyItem(props.feature);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={buyItem}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
