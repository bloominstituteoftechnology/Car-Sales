export const removeFeature = feature => {
    // dispatch an action here to remove an item
    return {
        type: "REMOVE_FEATURE",
        payload: feature
    };
  };

export const addFeature = feature => {
    // dipsatch an action here to add an item
    return {
        type: "ADD_FEATURE",
        payload: feature
    };
  };