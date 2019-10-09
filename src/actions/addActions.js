//Add Feature Action

export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feature => {
    console.log("Feature", feature);
    console.log("Add Feature", addFeature)
    return { type: ADD_FEATURE, payload: feature };
}