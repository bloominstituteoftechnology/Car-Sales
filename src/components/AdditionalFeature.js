import React from 'react';
import { connect } from 'react-redux'

import { addFeatureAction } from '../actions/addFeatureAction'

const AdditionalFeature = props => {
  // console.log('AdditionalFeature.js: ', props.feature)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => { props.addFeatureAction(props.feature) }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeatureAction })(AdditionalFeature);
