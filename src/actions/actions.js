// Action Types
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
// Action Creators
export const addFeature = feature => {
    console.log("Add Feature");
    return { type: ADD_FEATURE, payload: feature };
};

export const removeItem = feature => {
    console.log("Remove Feature", feature);
    return { type: REMOVE_FEATURE, payload: feature };
};
