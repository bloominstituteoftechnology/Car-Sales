export const removeItem = item => {
    return { type: "Delete", payload: { id: item.id, price: item.price } };
  };
  
  export const addItem = item => {
    return {
      type: "Buy",
      payload: { id: item.id, name: item.name, price: item.price }
    };
  };