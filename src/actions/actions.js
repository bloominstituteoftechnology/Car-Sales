export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const addFeature = (feature) => {
  console.log(feature);

  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

export const removeFeature = (id) => {
  console.log(id);
  return {
    type: REMOVE_FEATURE,
    payload: id,
  };
};

export const updatePrice = (version, price) => {
  return {
    type: UPDATE_PRICE,
    payload: price,
    version: version,
  };
};
