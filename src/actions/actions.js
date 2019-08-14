
  export const buyItem = add => {
    console.log('addFeatures was invoked');
    return {
        type: 'ADD_FEATURES',
        payload: add
    };
  };

  export const removeItem = remove => {
    console.log('addFeatures was invoked');
    return {
        type: 'REMOVE_FEATURES',
        payload: remove
    };
  };