export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = item => {
  // dispatch an action here to remove an item
  return {
    type: REMOVE_FEATURE,
    payload: item,
  }
};