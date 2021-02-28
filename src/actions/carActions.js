export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = (id) => {
    return {
        type: ADD_FEATURE,
        payload: id

    }
}