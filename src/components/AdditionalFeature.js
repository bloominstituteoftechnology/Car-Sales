import React from 'react';

import { connect } from 'react-redux';
import { addFeature, addPrice } from './actions/featureActions';

const AdditionalFeature = props => {
  console.log('from AdditionalFeature', props);
  const handleChanges = (e => {
    e.preventDefault();
    addFeature(props.feature);
    addPrice()
  })
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
        onClick={(e) => handleChanges(e)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    AdditionalFeatures: state.AdditionalFeatures
  }
}

export default connect(
  mapStateToProps, {
  addFeature,
  addPrice
}
)(AdditionalFeature);
