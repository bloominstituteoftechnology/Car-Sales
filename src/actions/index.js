export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE_PRICE = "ADD_FEATURE_PRICE";
export const REMOVE_FEATURE_PRICE = "REMOVE_FEATURE_PRICE";

export const addFeature = feature => {
  return { type: ADD_FEATURE, payload: feature };
};

export const removeFeature = featureId => {
  return { type: REMOVE_FEATURE, payload: featureId };
};

export const addFeaturePrice = price => {
  return { type: ADD_FEATURE_PRICE, payload: price };
};

export const removeFeaturePrice = price => {
  return { type: REMOVE_FEATURE_PRICE, payload: price };
};
