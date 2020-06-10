import React from 'react';
import { removeFeature } from "../actions"
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      <button 
        className="button"
        onClick={()=> {
          props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect (mapStateToProps, {removeFeature})(AddedFeature);
