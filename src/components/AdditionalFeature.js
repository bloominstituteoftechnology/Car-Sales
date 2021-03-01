import React from 'react';

import { connect } from 'react-redux'

import { addFeature } from '../actions/appActions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = (state) => {
  return{
    price: state.price
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFeature: (feature) => dispatch(addFeature(feature))
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(AdditionalFeature);
