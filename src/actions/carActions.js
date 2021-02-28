export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';


export const addFeature = (added) => {
  return({
    type: ADD_FEATURE,
    payload: added
  })
}


export const removeFeature = (removed) => {
  return({
    type: REMOVE_FEATURE,
    payload: removed
  })
}