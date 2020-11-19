import React from 'react';
// using redux hooks
import { useSelector, useDispatch } from 'react-redux'

const AddedFeature = props => {
  // dispatch returns a reference to the dispatch function from the Redux store
  // Feature from store
  const dispatch = useDispatch()
  const carFeature = useSelector(state => state.car.features[props.feature.id])

  const removeFeature = (feature) => {
    removeFeature(feature)

  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        dispatch({ type: 'REMOVE_FEATURE', payload: props.feature })
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
