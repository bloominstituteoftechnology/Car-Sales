export const ADD_NEW_FEATURE = 'ADD_NEW_FEATURE'



export const addNewFeature = (newAddedFeature) => {
  return {
    type: "ADD_NEW_FEATURE",
    payload: newAddedFeature,
  }
}
