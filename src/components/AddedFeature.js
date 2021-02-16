import React from 'react';
import { connect } from "react-redux"
import { removeFeat} from "./actions"

const AddedFeature = props => {


  const onClick =() =>{
    props.removeFeat(props.feature)
  }
  return (

    
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={onClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null,{removeFeat})(AddedFeature)
