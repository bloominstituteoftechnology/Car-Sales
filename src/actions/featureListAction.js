
export const ADD = 'ADD';
export const REMOVE = 'REMOVE'


 export const addNewFeature = (feature) => {
    return {type: ADD, payload: feature}
}

export const removeNewFeature = (oldfeature) => {
    return {type: REMOVE, payload: oldfeature }
}
