export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE"

export const addFeature = (newFeature) => {
    return {
        type: ADD_NEW_FEATURE,
        payload: newFeature,
    }
}
export const removeFeature = (feature) => {
    return {
      type: 'REMOVE_FEATURE',
      payload: feature
    }
}