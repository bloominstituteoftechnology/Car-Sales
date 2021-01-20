import React from "react";
import { removeFeature } from "../actions/carSaleActions";
import { useDispatch } from "react-redux";
const AddedFeature = (props) => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          dispatch(removeFeature(props.feature))
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};


export default AddedFeature;
