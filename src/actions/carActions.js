export const removeFeature = item => {
    console.log('removeInvoked', item);
    return {
        type: 'REMOVE_FEATURE',
        payload: item
    }
};

export const addFeature = item => {
    console.log('addInvoked', item);
    return {
        type: 'ADD_FEATURE',
        payload: item
    }
};

console.log(removeFeature);
console.log(addFeature);