import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {
  // console.log('addedfeatureprops', props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
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
