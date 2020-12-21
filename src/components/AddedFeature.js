import React from "react";
import store from "../store";
import * as actions from "./actions/actions";

const AddedFeature = (props) => {
  const item = props.feature;
  console.log(item);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          store.dispatch({
            type: actions.REMOVE_OPTION,
            payload: item,
          });
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
