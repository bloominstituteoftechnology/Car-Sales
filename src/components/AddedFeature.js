import React from 'react';
import { connect } from 'react-redux'

import { deleteFeatureAction } from '../actions/deleteFeatureAction'

const AddedFeature = props => {
  // console.log('Added feature props: ', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => { props.deleteFeatureAction(props.feature) }}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps, { deleteFeatureAction })(AddedFeature);
