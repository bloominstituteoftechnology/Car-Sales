import React from 'react';

import { connect } from 'react-redux'; //access to redux store
import { remove_feature } from '../actions/index';


const AddedFeature = props => {
  console.log(`added props`, props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>props.remove_feature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

// const mapStateToProps = state => {
//   //what props I want available in the component
//   //will need to pass in props above to get access
//   return{
//     name: state.car.name,
//     price: state.car.price,
//     id: state.car.id
//   }
// }

export default connect(
  null,
  { remove_feature }
)(AddedFeature);;