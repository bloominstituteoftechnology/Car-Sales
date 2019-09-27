export const addingFeatures = feature => {
    return {
        type: 'ADD_FEATURES',
        payload: feature,
    }
}

export const removeingFeatures = feature => {
    return {
        type: 'REMOVE_FEATURES',
        payload: feature,
    }
}
