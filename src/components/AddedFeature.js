import React from 'react';
import { connect } from 'react-redux'

import { addFeature } from '../actions/appActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      onClick={() => props.addFeature()}
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};


const mapStateToProps = (state) => {
  return{
  
    feature: state.feature
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return{
    addFeature: (feature) => dispatch(addFeature(feature))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
