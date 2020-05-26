export const ADD_NEWFEATURE = "ADD_NEWFEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addNewFeature = (item) => {
    return {
        type: ADD_NEWFEATURE,
        payload: {item}
    };
}

export const removeFeature = (item) => {
    return {
        type: REMOVE_FEATURE,
        payload: {item}
    }
}