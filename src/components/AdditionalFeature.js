import React from 'react'
import {connect} from 'react-redux'
import {addFeature} from '../actions/'

const AdditionalFeature = props => {
  return (
    <li>
      
      <button 
      onClick={(e) => {
          e.preventDefault();
          props.addFeature(props.feature);
        }} 
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);