import React from 'react';
import { addFeature } from "../actions"
import { connect } from "react-redux";

const AdditionalFeature = props => {
  const {feature} = props
  return (
    <li>
      <button 
        className="button"
        onClick={() => {
          props.addFeature(feature)
        }}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect (mapStateToProps, {addFeature})(AdditionalFeature);
