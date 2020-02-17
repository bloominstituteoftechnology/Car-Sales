export const BUY_ITEM = 'BUY_ITEM';

export const buyItem = item => {
  // dispatch an action here to add an item
  return {
    type: BUY_ITEM,
    payload: item,
  }
};
