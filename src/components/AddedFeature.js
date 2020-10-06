import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/FeatureReducer";

const AddedFeature = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => dispatch({ type: "UPDATE_FEATURE", payload: "" })}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
