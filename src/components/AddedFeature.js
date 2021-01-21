import React from 'react';
import {removePrice,removeFeat} from "../components/actions.js"
import { connect} from "react-redux"
// import { removeFeat } from "./actions"




const AddedFeature = props => {

const onClick =()=>{
  // removePrice(price)
  removeFeat(props.feature)

 

}
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={onClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null)(AddedFeature)
