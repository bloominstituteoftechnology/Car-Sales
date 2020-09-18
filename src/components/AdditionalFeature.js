import React from 'react';
import { connect } from "react-redux";
import { addNewFeature } from "../actions/carActions";


const AdditionalFeature = props => {
  
  return (
    
    <li>
      {/* {console.log("props from additionalFeature", props)} */}
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> {props.addNewFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addNewFeature })(AdditionalFeature);
