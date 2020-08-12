export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feature => {
    return { type: ADD_FEATURE, payload: feature}
};

export const SUBTRACT_FEATURE = "SUBTRACT_FEATURE";

export const subtractFeature =  feature => {
    return { type: ADD_FEATURE, payload: feature};
};
