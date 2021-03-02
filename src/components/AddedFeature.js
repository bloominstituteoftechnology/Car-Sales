import React from 'react';
import { connect } from 'react-redux'

import { removeFeature } from '../actions/appActions'

const AddedFeature = props => {
  console.log(props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      //connected removeFeature and passed feature[0]. Each feature had and index of [0].
      onClick={() => props.removeFeature(props.feature)}
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};


// const mapStateToProps = (state) => {
//   console.log(state.car.features)
//   return{
  
//     features: state.car.features
//   }
  
// }

//only needed mapDispatchToProps because there was functionality needed for this component. Other parts of state were passed through props.
const mapDispatchToProps = (dispatch) => {
  return{
    removeFeature: (feature) => dispatch(removeFeature(feature))
  }
}

export default connect(null, mapDispatchToProps)(AddedFeature);
