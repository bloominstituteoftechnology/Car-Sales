

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeItem = feature => {
    console.log("Feature", feature);
    console.log("Remove Feature", removeItem);
    return { type: REMOVE_FEATURE, payload: feature}
}