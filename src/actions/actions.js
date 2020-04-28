export const BUY_ITEM = "BUY_ITEM"; // export action type BUY_ITEM to the reducer
export const REMOVE_FEATURE = "REMOVE_FEATURE"; // export action type REMOVE_FEATURE to the reducer

// buyItem action creator for buying features to the car
export const buyItem = item => {
    // dispatch an action here to add an item
    return {
        type: BUY_ITEM,
        payload: item
    }
};

// removeFeature action creator for removing features from the car
export const removeFeature = item => {
    // dispatch an action here to remove an item
    return {
        type: REMOVE_FEATURE,
        payload: item
    }
};