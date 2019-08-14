
//actions

export const buyCarPart = item => {
    return{
        type: "BUY_PART",
        payload: item,
    };
};

export const removeCarPart = feature => {
    return{
        type: 'REMOVE_PART',
        payload: feature,
    };   
};