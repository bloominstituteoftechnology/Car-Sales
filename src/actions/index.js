//actions for add features

export const ADD_FEATURES = "ADD_FEATURES"

export const addFeatures = (id) => dispatch => {
    dispatch({type: ADD_FEATURES, payload: id})
}

//actions for remove feature

export const REMOVE_FEATURES = "REMOVE_FEATURES"

export const removeFeatures = (id) => dispatch => {
    dispatch({type: REMOVE_FEATURES, payload: id})
}