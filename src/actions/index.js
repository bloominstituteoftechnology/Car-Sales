	export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
  
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}