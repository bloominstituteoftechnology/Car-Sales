export const ADD_FEATURES = "ADD_FEATURES"; //action type
export const REMOVE_FEATURES = "REMOVE_FEATURES";

export function addFeatures (feature) { //action creator 
    return {
        type: ADD_FEATURES, payload: feature //action object + payload
    }
}

export function removeFeatures (feature) { 
    return {
        type: REMOVE_FEATURES, payload: feature
    }
}