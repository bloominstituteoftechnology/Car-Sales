// export const buyItem =  'ADD_FEATURE';

export const buyItem = item => {
    console.log('Buy item: ', item);
    return {
        type: 'ADD_FEATURE', 
        payload: item
    }; 
};
