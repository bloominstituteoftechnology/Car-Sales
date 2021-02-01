import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/carSaleAction';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = { ()=>{props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return {state}
}
export default connect (mapStateToProps, {addFeature}) (AdditionalFeature);
