import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions'

const AddedFeature = props => {
  console.log(props.feature.id)
  const handleClear = () => {
    props.removeFeature(props.feature.id)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {handleClear}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null,{removeFeature})(AddedFeature);
