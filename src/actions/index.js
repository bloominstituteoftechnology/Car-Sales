// export const ADD_FEATURES = 'ADD_FEATURES';
// export const REMOVE_FEATURES = 'REMOVE_FEATURES';

export const removeFeature = newFeature => {
    return { 
        type: 'REMOVE_FEATURES',
        payload: newFeature
    };
};
  
export const addFeature = newFeature => {
    return {
        type: 'ADD_FEATURES',
        payload: newFeature
    };
};
  