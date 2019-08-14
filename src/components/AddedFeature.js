import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(props.carFeature)} className="button">X</button>
      {props.carFeatureName}
    </li>
  );
};

const mapStateToProps = state => {
  // console.log('featurestate', state);
  return {
    carFeature: state.car.features,
    carFeatureName: state.car.features.name
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
