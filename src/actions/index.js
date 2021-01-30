export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (featureName, featurePrice) => {
  return {
    type: ADD_FEATURE,
    payload: featureName,
  };
};
