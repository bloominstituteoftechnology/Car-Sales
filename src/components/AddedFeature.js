import React from 'react';

import { removeAddedFeature } from "../Actions/actions"

const AddedFeature = props => {

  const removeHandler = (e) =>{
    e.preventDefault();
    props.removeAddedFeature(props.feature)
  }
  return (
    <li>
      
      <button className="button" onClick={removeHandler} >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null,{removeAddedFeature}) (AddedFeature);
