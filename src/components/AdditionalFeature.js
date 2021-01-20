import React from 'react';
import { connect } from "react-redux";
import { toggleAdditionalFeature } from "../actions/additionalFeatureAction";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onCLick={
        () => this.props.toggleAdditionalfeature
      }>Add</button>
      {props.additionalfeature.name} (+{props.additionalfeature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  const featureCount = state.additionalfeature.length;
  return {
    areYouThere: true,
    additionalFeatures: state.additionalFeatures,
    featureCount: featureCount,
  };
};

export default connect(mapStateToProps, { toggleAdditionalFeature }) (AdditionalFeature);
