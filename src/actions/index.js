export function addFeature(newFeature) {
    return {
        type: 'ADD_FEATURE',
        payload: newFeature
    };
}

export function removeFeature(removeFeature) {
    // console.log('this guy', removeFeature)
    return {
        type: 'REMOVE_FEATURE',
        payload: removeFeature
    };
};

