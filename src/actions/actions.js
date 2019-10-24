export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addItem = feature => {
    return { type: ADD_FEATURE, payload: feature };
}

export const removeItem = feature => {
    return { type: REMOVE_FEATURE, payload: feature };
}

