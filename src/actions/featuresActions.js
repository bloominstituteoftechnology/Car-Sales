
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = featureObj => {
  return { type: ADD_FEATURE, payload: featureObj };
}
export const removeFeature = featureObj => {
  return {type: REMOVE_FEATURE, payload: featureObj };
}