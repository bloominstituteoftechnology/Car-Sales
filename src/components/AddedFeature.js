import React from 'react';
import { removeFeature } from '../actions'
import { connect } from 'react-redux';

const AddedFeature = props => {
  const handleClick = () => {
    props.removeFeature(props.feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={handleClick}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;
export default connect(null, { removeFeature })(AddedFeature);