import React from 'react';
import { connect } from "react-redux";

import { addFeature } from '../actions/carActions';

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addFeature(props.carFeatures)} className="button">Add</button>
      {props.carFeatureName} (+{props.carFeaturePrice});
    </li>
  );
};

const mapStateToProps = state => {
  // console.log('featureSState', state);
  return {
    carFeatures: state.car.features,
    carFeatureName: state.car.features.name,
    carFeaturePrice: state.car.features.price
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);