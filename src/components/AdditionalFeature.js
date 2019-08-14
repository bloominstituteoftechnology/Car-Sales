import React from 'react';
import { connect } from "react-redux";

import { addFeature } from '../actions/carActions';

console.log('addfeature', addFeature);

const AdditionalFeature = props => {
  console.log('featureSprops', props);
  // console.log('name', props.carFeatureName, 'price', props.carFeaturePrice);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price});
    </li>
  );
};

const mapStateToProps = state => {
  console.log('featureState', state);
  // console.log('name', state.store.name, 'price', state.store.price);
  return {
    carFeatures: state.store,
    carFeatureName: state.store.name,
    carFeaturePrice: state.store.price
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);