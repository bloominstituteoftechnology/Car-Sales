import React from 'react';
import { removeFeature } from '../actions/featuresActions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  // console.log('added feature', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  // console.log('removeFeature state', state)
  return {
    ...state,
    features: state.car.features
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: feature => dispatch(removeFeature(feature))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
