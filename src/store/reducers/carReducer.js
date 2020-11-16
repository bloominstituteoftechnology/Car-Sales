// Import the actions
import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

// Setup initial state
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      // Get the data of the additional Feature
      const getFeatureData = state.additionalFeatures.filter(
        (item) => item.id === action.payload
      )[0];

      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, getFeatureData],
        },
        additionalPrice: state.additionalPrice + getFeatureData.price,
      };

    case REMOVE_FEATURE:
      // Get data of additional feature to be removed
      const featureToBeRemoved = state.car.features.filter(
        (item) => item.id === action.payload
      )[0];

      // New additional price
      const newAdditionalPrice =
        state.additionalPrice - featureToBeRemoved.price;

      // The new arrayu to return with the featured item removed
      const editedFeaturesArr = state.car.features.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        car: {
          ...state.car,
          features: editedFeaturesArr,
        },
        additionalPrice: newAdditionalPrice,
      };

    default:
      return state;
  }
};
