import { ADD_FEATURE, REMOVE_FEATURE } from '../reducers/carReducer'

export const removeFeature = feature => {
    // dispatch an action here to remove an item
    return { type: REMOVE_FEATURE, payload: feature }
  }

export const buyItem = feature => {
    // dispatch an action here to add an item
    return { type: ADD_FEATURE, payload: feature}
  }