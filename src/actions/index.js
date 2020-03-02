export const removeItem = item => {
  return { type: "REMOVE_ITEM", payload: { id: item.id, price: item.price } };
};

export const addItem = item => {
  return {
    type: "BUY_ITEM",
    payload: { id: item.id, name: item.name, price: item.price }
  };
};
