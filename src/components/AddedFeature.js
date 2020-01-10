import React from 'react';
import {useDispatch} from 'react-redux';

import {removeFeature} from '../actions/carActions';

const AddedFeature = props => {
  const dispatch = useDispatch();

  const handleRemoveFeature = () => {
    dispatch(removeFeature(props.feature));
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};


export default AddedFeature;