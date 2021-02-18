export const ADD_NEW_FEATURE = 'ADD_NEW_FEATURE';
export const REMOVE_NEW_FEATURE = 'REMOVE_NEW_FEATURE';

export const addNewFeature = (newFeature) => {
    return {
        type: ADD_NEW_FEATURE,
        payload: newFeature,
    };
};

export const removeNewFeature = (feature) => {
    return{
        type: REMOVE_NEW_FEATURE,
        payload: feature,
    };
};