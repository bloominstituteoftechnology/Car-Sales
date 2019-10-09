import * as types from './actionTypes';

export function buyItem(item) {
  return {
    type: types.BUY_ITEM,
    payload: {
      item: item,
    },
  };
}

export function removeFeature(item) {
    return {
      type: types.REMOVE_FEATURE,
      payload: {
        item: item,
      },
    };
  }