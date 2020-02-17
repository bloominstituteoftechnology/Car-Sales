//Action for adding feature
export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (feature) => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

//Action for removing feature
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (feature) => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

//Action for adding total
export const ADD_TOTAL = 'ADD_TOTAL'
export const addTotal = (total) => {
    return {
        type: ADD_TOTAL,
        payload: total
    }
}