import { CarActionTypes } from './carFeaturesTypes';

export const purchaseItem = (feature) => {
  return { type: CarActionTypes.PURCHASE_ITEM, payload: feature}
}

export const removeItem = (feature) => {
  return { type: CarActionTypes.REMOVE_ITEM, payload: feature}
}