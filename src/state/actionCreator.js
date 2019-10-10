import { ADD_FEATURE, DELETE_FEATURE } from "./actionType";

// Step 7 - Action creators: We activate our reducers

export function addFeature (item) {
    return { 
        type: ADD_FEATURE,
        payload: {
            id: item.id,
            name: item.name,
            price: item.price
        }
    };
}

export function deleteFeature (item) {
    return {
        type: DELETE_FEATURE, 
        payload: {
            id: item.id,
            price: item.price
        }} ;
}