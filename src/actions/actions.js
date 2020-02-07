export const ADD_ITEM = 'ADD_ITEM';

export function addItem(item) {
  console.log("ADD_ITEMEMEMEME", item);
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export const REMOVE_ITEM = 'REMOVE_ITEM';

export function removeItem(item) {
  console.log("REMOVE_ITEMEMEMEME", item);
  return {
    type: REMOVE_ITEM,
    payload: item
  }
}