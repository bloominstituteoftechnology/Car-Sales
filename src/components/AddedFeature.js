import React from "react";
import { connect } from "react-redux";
import { subtractFeature } from "../actions";

const AddedFeature = (props) => {
  const handleSubtractFeature = (e) => {
    e.preventDefault();
    props.subtractFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e) => handleSubtractFeature(e)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps, { subtractFeature })(AddedFeature);
