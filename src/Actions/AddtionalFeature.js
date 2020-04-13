export const ADD_FEATURE = "ADD_FEATURE"

export const addFeature = newFeature =>{
    return{
        type: ADD_FEATURE,
        payload: newFeature
    }
}