import { ADD_FEATURE_PRICE, REMOVE_FEATURE_PRICE } from "../actions";

const initialState = {
  additionalPrice: 0
};

const priceReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FEATURE_PRICE: 
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload
      }
    case REMOVE_FEATURE_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload
      };
    default: 
      return state;
  }
}

export default priceReducer;