export const ADD_FEATURE =  'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const buyItem = item => {
    console.log('Buy item: ', item);
    return {
        type: ADD_FEATURE, 
        payload: item
    }; 
};

export const removeItem = item => {
    return {
        type: REMOVE_FEATURE,
        payload: item
    };
};