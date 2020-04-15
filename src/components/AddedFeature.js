import React from 'react';
import { removeFeature } from './actions/actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {removeFeature(props.feature)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return {
    // feature: state.car.features.find(i => i.id === )
  }
}
export default connect(()=>{},{removeFeature})(AddedFeature);
