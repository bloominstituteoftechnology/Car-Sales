export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export const addFeature = (id, price) => {
    return {type: ADD_NEW_FEATURE, payload: id, price: price}
}

export const deleteFeature = (id, price) => {
    return {type: DELETE_FEATURE, payload: id, price: price}
}