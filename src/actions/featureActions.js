export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE";
export const addFeature = (newFeatureName) => {
    return { type: ADD_NEW_FEATURE, payload: newFeatureName };
};