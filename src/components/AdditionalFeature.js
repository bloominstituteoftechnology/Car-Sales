import React from "react";
import { connect } from "react-redux";

import { addFeature } from "../actions";
import { updateAdditionalPrice } from "../actions";

const AdditionalFeature = props => {
  const addFeature = e => {
    e.preventDefault();
    props.addFeature(props.feature);
    props.updateAdditionalPrice();
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
  { addFeature, updateAdditionalPrice }
)(AdditionalFeature);
