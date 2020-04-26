export const addFeature = (features) => {
  return {
    type: "ADD_FEATURE",
    payload: features,
  };
};

export const deleteFeature = (features) => {
  return {
    type: "DELETE_FEATURE",
    payload: features,
  };
};
