
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = store => {
  console.log(store);
  return {
    type: REMOVE_FEATURE,
    payload: store
  };
}

export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = store => {
  console.log(store);
  return {
    type: BUY_ITEM,
    payload: store
  };
}
