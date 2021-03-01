export const ActionTypes = {
    ADD_FEATURE: 'ADD_FEATURE',
    REMOVE_FEATURE: 'REMOVE_FEATURE'
  };
  
  export const addFeature = feature => {
    return {
      type: ActionTypes.ADD_FEATURE,
      payload: feature
    }
  };
  
  export const removeFeature = feature => {
    return {
      type: ActionTypes.REMOVE_FEATURE,
      payload: feature
    }
  };
  