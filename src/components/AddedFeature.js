import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions'

const AddedFeature = props => {
  const { feature, removeFeature } = props;

  const handleClick = () => {
    removeFeature(feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick} >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
