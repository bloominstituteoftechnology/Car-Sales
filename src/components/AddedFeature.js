import React from 'react';
import { connect } from 'react-redux';
import { RemoveFeature } from '../actions/index';

const AddedFeature = props => {

  const removeFeature = props => {
    
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log('MSTP', state);
//   return {
//     name: state.feature.name
//   };
// }

export default AddedFeature;
// connect(
//   mapStateToProps,
//   {  }
// )(AddedFeature);
