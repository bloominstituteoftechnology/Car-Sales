
export const addFeature = item => {
    console.log('from actions: addFeature', item);
    return { type: 'ADD_FEATURE', payload: item }
};

export const removeFeature = item => {
    console.log('from actions:removeFeature', item);
    return { type: 'REMOVE_FEATURE', payload: item }
};