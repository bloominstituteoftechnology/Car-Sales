import React from 'react';
import { removeFeature } from "../actions/index"
import {connect} from "react-redux"

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}

      <button className="button" onClick={(() =>{
        props.removeFeature(props.feature)
      })} >X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {//selecting car from store 
  return {
    car: state.car
  }
}
export default connect(mapStateToProps, {removeFeature})(AddedFeature);
