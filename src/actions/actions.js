export const addFeature = featureInfo => {
    return { type: 'ADD_FEATURE', payload: featureInfo };
}

export const removeFeature = featureInfo => {
    return { type: 'REMOVE_FEATURE', payload: featureInfo};
} 