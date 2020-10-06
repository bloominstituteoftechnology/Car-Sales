import React, { useState, useReducer } from "react";
// import { reducer } from "../reducers/FeatureReducer";

export const initialState = {
  item: "",
  added: false,
};

export const reducer = (state, action) => {
  //   const [state, dispatch] = useReducer(reducer, initialState);

  switch (action.type) {
    case "UPDATE_EDITING":
      return {
        ...state,
        editing: !state.editing,
      };
    case "UPDATE_TODO":
      return {
        ...state,
        item: action.payload,
        added: false,
      };
    default:
      return state;
  }
};
