export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const UPDATE_TOTAL = "UPDATE_TOTAL"
export const UPDATE_ADDITIONAL = "UPDATE_ADDITIONAL"

export const addFeature = (featureObj) => {
  return { type: ADD_FEATURE, payload: featureObj };
}
export const removeFeature = (featureObj) => {
  return {type: REMOVE_FEATURE, payload: featureObj };
}
export const updateAdditional = car => {
    //console.log("car from updateAdditional: ", car)
    return { type: UPDATE_ADDITIONAL, payload: car }
}