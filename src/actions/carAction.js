export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";
export const TOGGLE_FEATURE = "TOGGLE_FEATURE";
export const REMOVE_NEW_FEATURE = "REMOVE_NEW_FEATURE";

export const addNewFeature = (newFeatureName) => {
  return {
    type: ADD_NEW_FEATURE,
    payload: newFeatureName,
  };
};

export const toggleFeatures = () => {
  return {
    type: TOGGLE_FEATURE,
  };
};

export const removeNewFeature = () => {
  return {
    type: REMOVE_NEW_FEATURE,
    payload: "",
  };
};
