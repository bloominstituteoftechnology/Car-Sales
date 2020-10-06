import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/FeatureReducer";

const AdditionalFeature = (props) => {
  const [newFeature, addNewFeature] = useState(props.feature.price);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() =>
          dispatch({ type: "UPDATE_FEATURE", payload: newFeature })
        }
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
