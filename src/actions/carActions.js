/*
    Action Suite
    1. Action Creators - function that creates actions and returns action object out of it
    2. Action Types - variables that contain the action type strings to save us from typos
    3. Action - objects that describe to the render what event has occurred and how it should update state
*/

export const BUY_FEATURE = 'BUY_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const buyFeature = feature => {
    return {
        type: BUY_FEATURE,
        payload: feature
    };
};

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    };
};