import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../actions";
import { removeFeaturePrice } from "../actions";

const AddedFeature = props => {
  const removeFeature = e => {
    e.preventDefault();
    props.removeFeature(props.feature.id);
    props.removeFeaturePrice(props.feature.price);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeFeature} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeFeature, removeFeaturePrice }
)(AddedFeature);
