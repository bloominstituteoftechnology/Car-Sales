import React from "react";
import { addFeature } from "../actions/carSaleActions";
import { connect } from "react-redux";
const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          props.addFeature(props.feature);
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
    car: state.car,
  };
};
export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
