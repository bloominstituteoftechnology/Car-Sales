import { ADD_FEATURE, REMOVE_FEATURE } from '../reducers/AppReducer';

export const removeFeature = feature => {
    return { type: REMOVE_FEATURE, payload: feature}
}

export const purchaseItem = feature => {
    return { type: ADD_FEATURE, payload: feature}
}