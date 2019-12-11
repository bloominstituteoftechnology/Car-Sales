export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = payload => {
  return { type: "REMOVE_ITEM", payload };
};

export const addItem = payload => {
  return { type: "ADD_ITEM", payload };
};
