export const TOGGLE_ADDITIONAL_FEATURE = "TOGGLE_ADDITIONAL_FEATURE";
export const toggleAdditionalFeature = (featureId) => {
    return {type: TOGGLE_ADDITIONAL_FEATURE, payload:featureId};
};