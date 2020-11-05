import React from 'react';
import { connect } from 'react-redux';
import { removeAdditionalFeature } from '../actions';




const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      onClick={() => props.removeAdditionalFeature(props.feature, props.feature.price)} 
      className="button"
      >
      X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeAdditionalFeature })(AddedFeature);
