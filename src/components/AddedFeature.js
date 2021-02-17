import React from 'react';
import {connect} from 'react-redux'
import {clearFeature} from '../actions'

const AddedFeature = props => {

  const handleRemove = () => {
    props.clearFeature(props.feature.id)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick= {handleRemove}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {clearFeature})(AddedFeature);
