export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = (input) => {
    return {
        type: ADD_FEATURE,
        payload: input
    }
}