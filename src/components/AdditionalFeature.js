import React from "react";
import store from "../store";
import * as actions from "./actions/actions"

const AdditionalFeature = (props) => {
  const item = props.feature;
  const price = props.feature.price;



  return (
    <li>
      <button
        className="button"
        onClick={() => {store.dispatch({
          type: actions.ADD_OPTION,
          payload: {
            item: item,
            price: price,
          },
        })}}
      >
        Add
      </button>
      {item.name} (+{price})
    </li>
  );
};

export default AdditionalFeature;
