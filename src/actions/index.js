export const ADD_FEATURE = "ADD_FEATURE";
export const SUBTRACT_FEATURE = "SUBTRACT_FEATURE";

export const addFeature = (featureName) => {
  return {
    type: ADD_FEATURE,
    payload: featureName,
  };
};

export const subtractFeature = (featureName) => {
  return {
    type: SUBTRACT_FEATURE,
    payload: featureName,
  };
};
