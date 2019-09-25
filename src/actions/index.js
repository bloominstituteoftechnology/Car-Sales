export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_ADDITIONAL_PRICE = "UPDATE_ADDITIONAL_PRICE";

export const addFeature = feature => {
  return { type: ADD_FEATURE, payload: feature };
};

export const removeFeature = featureIdx => {
  return { type: REMOVE_FEATURE, payload: featureIdx };
};

export const updateAdditionalPrice = () => {
  return { type: UPDATE_ADDITIONAL_PRICE };
};
