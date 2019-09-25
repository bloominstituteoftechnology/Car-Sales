import { combineReducers } from "redux";
import { ADD_FEATURE } from "../actions";
import { REMOVE_FEATURE } from "../actions";
import { ADD_FEATURE_PRICE } from "../actions";
import { REMOVE_FEATURE_PRICE } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.features.filter(
            feature => feature.id !== action.payload
          )
        }
      };
    default:
      return state;
  }
};

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload
      };
    case REMOVE_FEATURE_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  featuresReducer,
  priceReducer
});
