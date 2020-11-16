import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from "../actions/itemActions"

const AddedFeature = props => {
  return (
    <li>

      <button className="button" onClick={() => props.removeItem(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps, {removeItem})  (AddedFeature);

      {/* Add an onClick to run a function to remove a feature */}