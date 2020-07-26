
export const addFeature = item => {
    return { type: 'ADD_FEATURE', payload: item }
};

export const removeFeature = (item) => {
    return { type: 'REMOVE_FEATURE', payload: item }
};

export const addPrice = itemPrice => {
    return { type: 'ADD_PRICE', payload: itemPrice }
};

export const removePrice = itemPrice => {
    return { type: 'REMOVE_PRICE', payload: itemPrice }
}