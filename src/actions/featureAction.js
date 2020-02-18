export function addFeature(newFeature) {
    return {
        type: 'ADD_FEATURE',
        payload: newFeature
    };
}