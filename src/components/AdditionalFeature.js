import React from 'react';
import { addFeature } from '../actions/rootActions';
import { connect } from 'react-redux'


const AdditionalFeature = props => {
  console.log(props)
  return (
    <div>
      <p> {props.feature.name} </p>
      
    </div>
  )
}



export default AdditionalFeature;
