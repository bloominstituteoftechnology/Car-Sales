export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

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
