import React from "react";
import { connect } from "react-redux";
import { removeFeature, updateTotal } from "../reux/actions/carActions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={e => {
          e.preventDefault();
          props.removeFeature(props.id);
          props.updateTotal();
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: id => dispatch(removeFeature(id)),
    updateTotal: () => dispatch(updateTotal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
