import * as types from './actionTypes';

export function buyItem(item) {
  return {
    type: types.BUY_ITEM,
    payload: {
      item: item,
    },
  };
}

export function removeFeature(featureId) {
    return {
      type: types.REMOVE_FEATURE,
      payload: {
        featureId: featureId,
      },
    };
  }