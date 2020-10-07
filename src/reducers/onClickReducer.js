 export const REMOVE_FEATURE = 'REMOVE_FEATURE'
 export const removeFeature = value=>{
    return{
        type:REMOVE_FEATURE,payload:value
    }
}

export const ADD_FEATURE = 'ADD_FEATURE'
export const addFeature = value=>{
    return{
        type:ADD_FEATURE,payload:value
    }
}
