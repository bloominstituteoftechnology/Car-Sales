import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature
      <button className="button">X</button>
      {props.feature.name} */}
    </li>
  );
};

export default AddedFeature;

const mapStateToProps = state => {
  console.log('featurestate', state);
  return {
    carPrice: state.car.price
    // additionalPrice: 
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
