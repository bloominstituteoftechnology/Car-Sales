export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addItem() {
    return {
        type: ADD_ITEM,
        payload: feature
    }
}

export function removeFeature() {
    return {
        type: REMOVE_FEATURE
    }
}