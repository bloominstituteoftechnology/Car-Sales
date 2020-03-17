import { ADD_FEATURE, REMOVE_FEATURE, UPDATE_TOTAL } from "../types/carTypes";

export const addFeature = id => {
  return {
    type: ADD_FEATURE,
    payload: id
  };
};
export const removeFeature = id => {
  return {
    type: REMOVE_FEATURE,
    payload: id
  };
};
export const updateTotal = () => {
  return {
    type: UPDATE_TOTAL
  };
};
