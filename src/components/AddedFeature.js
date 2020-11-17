import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/index";

const AddedFeature = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.removeFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};
const mapStatetoProps = (state) => {
  return {
    addtionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};
export default connect(mapStatetoProps, { removeFeature })(AddedFeature);
