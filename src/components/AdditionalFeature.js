import React from 'react';
import { connect } from "react-redux";

import { addFeature } from '../actions/carActions';


const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price});
    </li>
  );
};

const mapStateToProps = state => {
  return {
    carFeatures: state.store,
    carFeatureName: state.store.name,
    carFeaturePrice: state.store.price
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);