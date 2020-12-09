export const ADD_FEATURE = 'ADD_FEATURE'
export const TOGGLE_FEATURE = 'TOGGLE_FEATURE'

export const addFeature = additionalFeature => {
    return({type: ADD_FEATURE, payload:additionalFeature.id})
}

export const toggleFeature = additionalFeature => {
    return({type: TOGGLE_FEATURE})
}