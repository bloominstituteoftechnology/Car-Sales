//action creator
export const addFeature = (featureName) => {
  //action object
  return {
    type: "ADD_FEATURE",
    payload: featureName,
  };
};
export const removeFeature = (featureName) => {
  return { type: "REMOVE_FEATURE", payload: featureName };
};
