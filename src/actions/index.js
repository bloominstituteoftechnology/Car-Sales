//actions for add features

export const ADD_FEATURES = "ADD_FEATURES"

export const addFeatures = featureID => dispatch => {
    dispatch({type: ADD_FEATURES, payload: featureID})
}

//actions for remove feature

export const REMOVE_FEATURES = "REMOVE_FEATURES"

export const removeFeatures = featureID => dispatch => {
    dispatch({type: REMOVE_FEATURES, payload: featureID})
}


//actions for price total

export const UPDATE_TOTAL_PRICE = "UPDATE_TOTAL_PRICE"

export const updatePrice = featureID => dispatch => {
    dispatch({type: UPDATE_TOTAL_PRICE, payload: featureID})
}