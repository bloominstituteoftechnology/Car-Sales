
//actions

export const buyCarPart = item => {
    return{
        type: "BUY_PART",
        payload: item,
    };
};

export const removeCarPart = item => {
    return{
        type: 'REMOVE_PART',
        payload: item,
    };   
};