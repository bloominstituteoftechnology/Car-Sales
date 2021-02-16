import React from 'react';
import {subtractFeature} from './actions';
import {connect} from 'react-redux';

const AddedFeature = props => {
  const {feature, subtractFeature} = props;
  const handleClick = () => {
    subtractFeature(feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick= {handleClick} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, {subtractFeature})(AddedFeature);
