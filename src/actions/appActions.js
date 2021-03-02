export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE"


export const removeFeature = (features) => {
    return {type: REMOVE_FEATURE, payload: features}
}

export const addFeature = (features) => {
    return {type: ADD_FEATURE, payload: features}
}