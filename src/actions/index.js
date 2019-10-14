export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export const addFeature = (feature) => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = (feature) => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const updateTotal = (total) => {
    return {
        type: UPDATE_TOTAL,
        payload: total
    }
}