import React from 'react';

import {useDispatch} from 'react-redux'
import {buyFeature} from '../actions/carActions'


const AdditionalFeature = props => {

const dispatch = useDispatch();

const handleAdd = () => {
  buyFeature(props.feature);
  dispatch(buyFeature(props.feature));
};

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        type = 'submit'
        value={props.feature.id}
        onClick={handleAdd}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
