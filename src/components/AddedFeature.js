import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actions.js';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.removeFeature(props.feature)}}>Remove</button>
      {props.feature.name}(+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log('mapstatetoprops: ', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
