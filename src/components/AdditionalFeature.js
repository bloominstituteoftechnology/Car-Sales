import React from "react";
import { addFeature } from "../actions/carActions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  console.log("additnl feats:", props.features);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
