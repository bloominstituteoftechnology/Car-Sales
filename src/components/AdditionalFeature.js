import React from 'react';
import {connect} from "react-redux"
import { addFeature } from "./actions/index"

const AdditionalFeature = props => {
const {feature, addFeature} = props;

const handleClick = () => {
  addFeature(feature)
}

  return (
    <li key={props.id}>
      <button className="button" onClick = {handleClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return({
    state: state
  })
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature)
