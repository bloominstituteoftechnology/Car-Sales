import React from 'react';
import {subtractFeature} from '../actions/rootActions'; 
import {connect} from 'react-redux'; 

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> props.subtractFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null,{subtractFeature})(AddedFeature);
