import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from '../actions/carActions';


const AddedFeature = props => {

  const filtered = props.carStore.filter(item => item.id !== props.feature.id);

  return (
    <li>
      <button onClick={() => props.removeFeature(filtered)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    carFeature: state.car.features,
    carFeatureName: state.car.features.name,
    carStore: state.store
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
