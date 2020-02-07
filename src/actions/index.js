export const ADD_FEATURES = 'ADD_FEATURES';

export const addFeatures = newFeature => {
  return {
    features: ADD_FEATURES,
    payload: newFeature
  }
}