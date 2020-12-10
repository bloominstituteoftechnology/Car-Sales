export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeature = additionalFeature => {
    return({type: ADD_FEATURE, payload:additionalFeature})
}

export const removeFeature = feature => {
    return {
        type:'REMOVE_ITEM',
        payload: feature
    }
}