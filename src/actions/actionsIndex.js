export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeatureAction = (feature) => {
  return {type: ADD_FEATURE, payload: feature}
}

export const removeFeatureAction = (id) => {
  return {type: REMOVE_FEATURE, payload: id}
}