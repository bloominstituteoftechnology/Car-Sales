import React from 'react';
import { addFeature, addFeaturePrice } from "../actions";
import {connect} from 'react-redux';

const AdditionalFeature = props => {

  const addFeatureHandler = feature => {
    feature.preventDefault();
    props.addFeature(props.feature);
    props.addFeaturePrice(props.feature.price);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeatureHandler} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature, addFeaturePrice })(AdditionalFeature);