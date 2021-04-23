import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/featureActions";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.addFeature(props.feature.id);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.featuresReducer.additionalFeatures,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeature: (id) => dispatch(addFeature(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
