import React from 'react';

import { removeAddedFeature } from "../Actions/actions"
import { connect } from "react-redux"

const AddedFeature = (props) => {
  return (
    <li>
      
      <button className="button" onClick={() =>{props.removeAddedFeature(props.feature)}} >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps,{removeAddedFeature}) (AddedFeature);
