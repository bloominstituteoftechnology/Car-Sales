import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';

const AddedFeature = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
                          onClick={() =>
                            dispatch({ type: 'REMOVE_FEATURE', payload: props.feature.id })
                          }
      
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
