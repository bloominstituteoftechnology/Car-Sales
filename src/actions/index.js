export const ADD_FEATURES = "ADD_FEATURES";
export const DELETE_FEATURES = "DELETE_FEATURES";

export const addFeatures = (feature) => {
    return({
        type: ADD_FEATURES,
        payload: feature
    })
}

export const deleteFeatures = (feature) => {
    return {type: DELETE_FEATURES, payload: feature}
}