import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFeature } from '../actions/actions';
import { useSelector } from 'react-redux';



const AddedFeature = props => {

  const dispatch = useDispatch()


  return (
    <li>
      <button onClick={() => dispatch(removeFeature(props.feature))} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
