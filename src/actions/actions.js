//Action Suite
//1 - action types
//2 - action creators
//3 - action objects

//1
export const ADD_FEATURE = 'ADD_FEATURE'

//2 - action creators are just functions that create(return) actions
export const addFeature = (e) => {
  console.log('action creator called')
  return { type: ADD_FEATURE, payload: e.target.additionalFeatures };
}
