export const ADD_FEATURE = "ADD_FEATURE";
export const AddFeature = feature => {
    return { type: ADD_FEATURE, payload: feature.price }
}

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const RemoveFeature = feature => {
    return { type: REMOVE_FEATURE, payload: feature.price }
}