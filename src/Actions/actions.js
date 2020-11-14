export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE ="REMOVE_FEATURE"

//add feature
export const addNewFeature = (carData) =>{
    return {
        type:ADD_FEATURE,
        payload:carData
    }
}

//remove feature
export const removeAddedFeature = (feature) =>{
    console.log("removing",feature )
    return {
        
        type:REMOVE_FEATURE,
        payload:feature
        
    }
}