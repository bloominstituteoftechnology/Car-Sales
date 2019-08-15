import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from '../actions/carActions';

// console.log('removefeature', removeFeature);

const AddedFeature = props => {
  // console.log('props.feature', props.feature);
  console.log('featureprops', props);
  // console.log('addedfeatureprops', props);
  const filtered = props.carStore.filter(item => item.id !== props.feature.id);
  // console.log('filtered', filtered);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(filtered)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  // console.log('featurestate', state);
  return {
    carFeature: state.car.features,
    carFeatureName: state.car.features.name,
    carStore: state.store
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
