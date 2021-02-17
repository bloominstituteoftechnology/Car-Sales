import React from 'react';
import { connect } from 'react-redux';

import { deleteFeatures } from '../actions/index';

const AddedFeature = props => {

  const handleClick = e => {
    props.deleteFeatures(props.features)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return({
    features: state.car.features
  })
}

export default connect(mapStateToProps, { deleteFeatures })(AddedFeature);
