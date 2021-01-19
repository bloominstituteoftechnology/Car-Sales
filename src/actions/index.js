export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = (i) =>{
    return{
        type: REMOVE_FEATURE,
        payload: i
    }
}

export const addFeature = (i)=>{
    return{
        type:ADD_FEATURE,
        payload: i
    }
}