import * as types from './actionTypes'; 
export function addFeature(data) {
    return {
        type: types.ADD_FEATURE, 
        payload: data
    }
}; 

export function removeFeature(data) {
    return {
        type: types.REMOVE_FEATURE, 
        payload: data 
    }
}