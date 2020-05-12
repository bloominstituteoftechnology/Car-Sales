//Action Suite
//1 - action types
//2 - action creators
//3 - action objects

//1
export const ADD_FEATURE = 'ADD_FEATURE'

//2 - action creators are just functions that create(return) actions
export const addFeature = (feature) => {
  console.log('action creator called')
  return { type: ADD_FEATURE, payload: feature };
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = (e) => {
  return {type: REMOVE_FEATURE, payload: e.id}
}