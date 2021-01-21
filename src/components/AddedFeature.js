import React from 'react';
import {removePrice,removeFeat} from "../components/actions.js"
import { connect} from "react-redux"





const AddedFeature = props => {

const onClick =(feature)=>{
  // removePrice(price)
  removeFeat(feature)

 

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
