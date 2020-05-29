import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

const AdditionalFeature = props => {
console.log("addFeature", props.index)
  const dispatch = useDispatch();

  // const addFeature = useCallback(
  //   () => 
    
  //   dispatch({
  //     type: "ADD_FEATURE",
  //     payload: {
  //       id: props.feature.id,
  //       name: props.feature.name,
  //       price: props.feature.price
  //     }
  //   }),
  //   [dispatch, props.feature]
  // )

  const addFeature = () => {
console.log("Feature from add feature", props.feature)
    dispatch({
      type: "ADD_FEATURE",
        payload: {
          id: props.feature.id,
          name: props.feature.name,
          price: props.feature.price
        }
    })

  }


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
