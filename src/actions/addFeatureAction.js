export const ADD_FEATURE = 'ADD_FEATURE'

export function addFeatureAction(addFeature) {
  console.log('Add action', addFeature)
  return { type: ADD_FEATURE, payload: addFeature };
}
