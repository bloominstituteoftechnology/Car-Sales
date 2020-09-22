import React from 'react';

import { connect } from "react-redux"
import { addNewFeature } from '../Actions/actions'


const AdditionalFeature = (props) => {

 
  return (
    <li>
      
      <button className="button" onClick ={() =>{
        props.addNewFeature(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
    
  );
  
};
export default connect(null, {addNewFeature}) (AdditionalFeature);
