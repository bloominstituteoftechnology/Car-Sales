import React from 'react';
import { connect } from "react-redux";

const AdditionalFeature = props => {

  const addItem = () => {
    return {
      
    }
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
