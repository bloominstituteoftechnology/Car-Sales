export const ADD_FEATURES = "ADDED_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

export function addFeatures(features) {
  return {
    type: ADD_FEATURES,
    payload: features
  };
}

export function removeFeatures(features) {
  return {
    type: REMOVE_FEATURES,
    payload: features
  };
}
