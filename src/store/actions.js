export const ADD_ITEM = 'ADD_ITEM'
// export const REMOVE = 'REMOVE_FEATURE'

export const addCar = (item) => {
    return { type: ADD_ITEM, payload: item }
}

// export const remove = (feature) => {
//     return { type: REMOVE, payload: feature }
// }