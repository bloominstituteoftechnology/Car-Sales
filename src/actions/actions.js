export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE"; 
export const UPDATE_TOTAL = "UPDATE_TOTAL";
// making these variable that way it helps with spelling errors

export const addFeature = item => {
    // features will always be objects
    // return will get dispatched to your reducer
    console.log("coming from actions.js", item);
    return {
        type: ADD_FEATURE,
        payload: item
    }
};

export const removeFeature = item => {
    return {
        type: REMOVE_FEATURE,
        payload: item
    }
};

export const updateTotal = item => {
    return {
        type: UPDATE_TOTAL,
        payload: item
    }
}