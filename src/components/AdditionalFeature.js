import React, {useReducer}  from 'react';
import {initialState, featureReducer} from '../reducers/featureReducer'
import {addFeature} from '../actions/addFeatureAction';
import {connect} from 'react-redux';

const AdditionalFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=>props.addFeature(props.feature.id, props.feature.price)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    carInfo: state
  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
