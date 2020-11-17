import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/index";

const AdditionalFeature = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.addFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStatetoProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};
export default connect(mapStatetoProps, { addFeature })(AdditionalFeature);
