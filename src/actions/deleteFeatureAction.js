export const deleteFeatureAction = removeFeature => {
    return { type: "DELETE_FEATURE", payload: removeFeature };
  };
  
  //payload should be the ID of the feature
  