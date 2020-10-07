export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (feature) => {
  // action object
  return { type: ADD_FEATURE, payload: feature };
};

export const SUBTRACT_FEATURE = "SUBTRACT_FEATURE";

export const subtractFeature = (feature) => {
  // action object
  return { type: SUBTRACT_FEATURE, payload: feature };
};
