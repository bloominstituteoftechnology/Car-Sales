import React from 'react';
import { connect } from 'react-redux'
import { toggleFeature } from '../actions/featureActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={() => props.toggleFeature(props.feature.text)}
      >X</button>
      {props.feature.text}
    </li>
  );
};

export default connect(() => {}, { toggleFeature })(AddedFeature)
