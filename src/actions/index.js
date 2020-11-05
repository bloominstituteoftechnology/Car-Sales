export const ADD_ADDITIONAL_FEATURE = 'ADD_ADDITIONAL_FEATURE';
export const REMOVE_ADDITIONAL_FEATURE = 'REMOVE_ADDITIONAL_FEATURE'

export function addAdditionalFeature(feature) {
    console.log(feature);
    return {
        type: ADD_ADDITIONAL_FEATURE,
        payload: feature,
        price: feature.price
    };
}

export function removeAdditionalFeature(feature) {
    console.log(feature);
    return {
        type: REMOVE_ADDITIONAL_FEATURE,
        payload: feature,
        price: feature.price
    };
}