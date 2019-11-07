import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions/actions";
// *** STEP FOUR - add events and event handlers ***

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature); 
// have to add the feature to the connect because it has to dispatch to the reducer, because you are not drilling it down from App
