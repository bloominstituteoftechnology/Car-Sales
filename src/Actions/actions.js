export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE ="REMOVE_FEATURE"

export const addNewFeature = (carData) =>{
    return {
        type:ADD_FEATURE,
        payload:carData
    }
}

export const removeAddedFeature = (carData) =>{
    return {
        type:ADD_FEATURE,
        payload:carData
    }
}