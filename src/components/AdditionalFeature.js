import React from 'react';
import { connect } from 'react-redux';
import { AddFeature } from '../actions/index';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log('MSTP', state);
//   return {
//     name: state.feature.name,
//     price: state.feature.price
//   }
// }

export default AdditionalFeature;
// connect(
//   mapStateToProps, 
//   { AddFeature }
// )(AdditionalFeature);
