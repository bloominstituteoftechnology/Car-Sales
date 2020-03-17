import React from "react";
import { connect } from "react-redux";
import { addFeature, updateTotal } from "../reux/actions/carActions";

const AdditionalFeature = props => {
  console.log("^^^^^^", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={e => {
          console.log("clicked");
          e.preventDefault();
          props.addFeature(props.id);
          props.updateTotal();
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeature: state.car.additionalFeatures,
    features: state.car.features
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature: id => dispatch(addFeature(id)),
    updateTotal: () => dispatch(updateTotal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
