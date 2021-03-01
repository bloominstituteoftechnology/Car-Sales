import React from 'react';
import { connect } from 'react-redux'

import { removeFeature } from '../actions/appActions'

const AddedFeature = props => {
  console.log(props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      onClick={() => props.removeFeature(props.feature[0])}
      className="button">X</button>
      {props.feature[0].name}
    </li>
  );
};


// const mapStateToProps = (state) => {
//   console.log(state.car.features)
//   return{
  
//     features: state.car.features
//   }
  
// }

const mapDispatchToProps = (dispatch) => {
  return{
    removeFeature: (feature) => dispatch(removeFeature(feature))
  }
}

export default connect(null, mapDispatchToProps)(AddedFeature);
