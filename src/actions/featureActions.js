export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";
export const addFeature = (newFeatureName) => {
    return { type: ADD_NEW_FEATURE, payload: newFeatureName };
};

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = (removeFeatureName) => {
    return { type: REMOVE_FEATURE, payload: removeFeatureName };
};