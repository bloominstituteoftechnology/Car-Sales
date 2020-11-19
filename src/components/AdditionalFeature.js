import React from 'react';
// using redux hooks
import { useSelector, useDispatch } from 'react-redux'
import { addFeature } from '../actions/actions'

const AdditionalFeature = props => {
  const dispatch = useDispatch()
  const carFeature = useSelector(state => state.car.features[props.feature.id])

  const addCarFeature = (feature) => {
    addFeature(feature)
    console.log('Please add additional feature:', feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {
        dispatch({ type: 'ADD_FEATURE', payload: props.feature })
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
