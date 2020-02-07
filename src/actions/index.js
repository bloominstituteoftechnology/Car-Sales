export const ADD_FEATURES = 'ADD_FEATURES';

export const addFeatures = newFeature => {
  console.log('here', ADD_FEATURES)
  return {
    type: 'ADD_FEATURES',
    payload: newFeature
  }
}