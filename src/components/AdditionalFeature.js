import React, { useState } from 'react';
import {connect } from 'react-redux';
import {addFeature} from '../actions';

const AdditionalFeature = props => {

   const handleAddFeature = () => {
    props.addFeature(props.feature.id)
  
    }

    const handleDisabled = () => {
      let disabled = false;
      props.features.forEach(item=>{
        if(item.id===props.feature.id){
         disabled = true;
        }
      })
      return disabled;
    }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddFeature} disabled = {handleDisabled()}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.car.features
  }
}
export default connect(mapStateToProps,{addFeature})(AdditionalFeature);
