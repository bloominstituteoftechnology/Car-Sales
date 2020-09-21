import React from 'react';

import { connect } from "react-redux"
import { addNewFeature } from '../Actions/actions'


const AdditionalFeature = props => {

  addHandler = (e) =>{
    e.preventDefault();
    props.addNewFeature(props.feature)

  } 

  return (
    <li>
      
      <button className="button" onClick ={addHandler}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addNewFeature}) (AdditionalFeature);
