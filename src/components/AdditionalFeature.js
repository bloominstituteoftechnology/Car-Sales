import React from "react";
import { connect } from "react-redux";

import { addFeature } from "../actions";
import { addFeaturePrice } from "../actions";

const AdditionalFeature = props => {
  const addFeature = e => {
    e.preventDefault();
    props.addFeature(props.feature);
    props.addFeaturePrice(props.feature.price);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { addFeature, addFeaturePrice }
)(AdditionalFeature);
