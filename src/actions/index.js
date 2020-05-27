export const REMOVE_ITEM = 'REMOVE_ITEM'
export const removeItems = item => {
  return { type: REMOVE_ITEM, payload: item}
};

export const ADD_ITEM = 'ADD_ITEM'
export const addItems = item => {
  return { type: ADD_ITEM, payload: item}
};