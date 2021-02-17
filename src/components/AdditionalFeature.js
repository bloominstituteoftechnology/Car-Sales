import React from 'react';
import {connect} from "react-redux"
import { addFeature } from "../actions/featureActions"

const AdditionalFeature = props => {

  return (
    <li key={props.id}>
      <button className="button" onClick = {props.addFeature}>Add</button>
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
