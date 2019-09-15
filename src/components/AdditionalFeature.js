import React from 'react';

import {useDispatch} from 'react-redux';
import { ADDCAR_FEATURE } from '../actions/carActions';

const AdditionalFeature = props => {

const dispatch = useDispatch();

const addFeature = (e) => {
  e.preventDefault();
  dispatch({ type: ADDCAR_FEATURE, payload: props.feature})
}

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
