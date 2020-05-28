import React from 'react';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';


const RemoveFeature = props => {
console.log(props)
  const dispatch = useDispatch();

  const removeFeature = useCallback(
    () => dispatch({
      type: "REMOVE_FEATURE",
      payload: {
        index: props.index,
        feature: props.feature
      }
    }),
    [dispatch, props.feature, props.index],
  )

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={removeFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};



export default  RemoveFeature;
