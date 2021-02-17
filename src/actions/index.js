export const ADD_FEATURES = "ADD_FEATURES";
export const DELETE_FEATURES = "DELETE_FEATURES";

export const addFeatures = (id) => {
    return({
        type: ADD_FEATURES,
        payload: id
    })
}

export const deleteFeatures = (id) => {
    return {type: DELETE_FEATURES, payload: id}
}