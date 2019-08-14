export const REMOVE_ITEM = "REMOVE_ITEM";
export const BUY_ITEM = "BUY_ITEM";

export const buyItem = item => {
  return {
    type: "BUY_ITEM",
    payload: item
  };
};

export const removeFeature = item => {
  console.log(item);
  return { type: "REMOVE_FEATURE", payload: item };
};