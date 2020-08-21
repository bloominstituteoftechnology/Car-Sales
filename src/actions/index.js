export const ADD_F = "ADD_FEATURES";
export const REMOVE_F = "REMOVE_FEATURES";

//Action Creators

export const addFeature = (addedFeature) => {
  console.log("addFeature fn should return action as obj");
  return { type: ADD_F, payload: addedFeature };
};

export const removeFeature = (removedFeature) => {
  console.log("removeFeature fn is called and it is also gonna reuturn obj");
  return { type: REMOVE_F, payload: removedFeature };
};
