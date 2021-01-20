import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/reducerActions';
const AdditionalFeature = props => {
  const clickHandler = (e) => {
    props.addFeature(e.target.id)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={clickHandler}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return({
    AdditionalFeatures: state.AdditionalFeatures,
    car: state.car,

  })
}
export default connect(mapStateToProps, {addFeature})(AdditionalFeature)
