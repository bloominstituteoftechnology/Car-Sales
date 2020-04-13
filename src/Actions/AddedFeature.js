export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const subtractFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}