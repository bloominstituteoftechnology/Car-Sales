import React from 'react';
import { addFeature } from '../actions/featuresActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    additionalFeatures: state.additionalFeatures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFeature: feature => dispatch(addFeature(feature))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
