import React from 'react';
import {connect } from "react-redux"
import { addFeatures} from "./actions"

const AdditionalFeature = props => {
  const  onClick = () =>{
    props.addFeatures(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={onClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null,{addFeatures})(AdditionalFeature);
