export const addFeature = (newFeature) => {
    console.log("Dispatching ADD_FEATURE action");
    return { type: "ADD_FEATURE", payload: newFeature };
  };
  
  export const removeFeature = (feature) => {
    return {
      type: 'REMOVE_FEATURE',
      payload: feature
    }
  }