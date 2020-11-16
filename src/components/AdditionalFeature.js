import React from 'react';
import { connect } from 'react-redux';
import {addNewCarFeature} from '../actions/newCarFeature'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addNewCarFeature(props.carFeature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    carFeature: state.carFeature
  };
};

export default connect(() => (mapStateToProps), {addNewCarFeature}) (AdditionalFeature);
