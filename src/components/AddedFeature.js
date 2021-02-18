import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/appActions'

const AddedFeature = props => {
  const {feature, removeFeature } = props;
  const handleRemoveFeature = () => {
    removeFeature(feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemoveFeature} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
