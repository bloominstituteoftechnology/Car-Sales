
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = store => {
  console.log(store);
  return { store: REMOVE_FEATURE, payload: store };
}

export const ADD_FEATURE = 'ADD_FEATURE';
