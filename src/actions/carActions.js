export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (addNewFeature) => {
  return {
    type: ADD_FEATURE,
    payload: addNewFeature,
  };
};

export const NEW_PRICE = "NEW_PRICE";

export const newPrice = () => {
  return {
    type: NEW_PRICE,
    payload: "hello",
  };
};
