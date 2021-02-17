export const ADD_FEATURES = 'ADD_FEATURES'
export const DELETE_FEATURE = 'DELETE_FEATURE'

export const addFeature = feature => {
    return({
        type: ADD_FEATURES,
        payload: feature
    })
}

export const deleteFeature = feature => {
    return {type: DELETE_FEATURE, payload: feature}
}