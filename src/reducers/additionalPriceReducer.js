import {ActionTypes} from '../actions';

export const additionalPriceReducer = (additionalPrice = 0, action) => {
  switch(action.type){
    case ActionTypes.ADD_FEATURE: {
      return additionalPrice + action.payload.price;
    }
    case ActionTypes.REMOVE_FEATURE: {
      return additionalPrice - action.payload.price;
    }
    default: {
      return additionalPrice;
    }
  }
}