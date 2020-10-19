import React from 'react';
import {addFeature} from './actions/featureAction'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
