import React from 'react';
import { connect } from "react-redux";
import { addFeature, addFeaturePrice } from "../actions";

const AdditionalFeature = props => {
  const addFeatureHandler = feature => {
    feature.preventDefault();
    props.addFeature(props.feature);
    props.addFeaturePrice(props.feature.price);
  }
  return (
    <li>
      <button
        onClick={addFeatureHandler}
        className="button"
      >
        Add
      </button>

      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature, addFeaturePrice })(AdditionalFeature);
