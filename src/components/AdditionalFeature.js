import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

const AdditionalFeature = props => {

  const dispatch = useDispatch();

  const addFeature = useCallback(
    () => dispatch({
      type: "ADD_FEATURE",
      payload: {
        index: props.index,
        feature: props.feature
      }
    }),
    [dispatch, props.index, props.feature]
  )


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
