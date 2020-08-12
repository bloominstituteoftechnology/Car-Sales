import React from 'react';
import { connect } from 'react-redux';
import { toggleFeature } from '../actions/featureActions.js'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.toggleFeature(props.feature.text)}
      >Add</button>
      {props.feature.text} (+{props.feature.cost})
    </li>
  );
};

export default connect(() => {},{ toggleFeature })(AdditionalFeature);
