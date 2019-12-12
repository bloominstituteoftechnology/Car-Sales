export const ADDSPECIAL = 'ADDSPECIAL';

export const addItem = (feature) => {
    return{
        type: ADDSPECIAL,
        payload: feature
    }
}

export const REMOVESPECIAL = 'REMOVESPECIAL';

export const removeItem = (feature) => {
    return {
        type: REMOVESPECIAL,
        payload: feature
    }
}