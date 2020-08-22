import { ADD_F, REMOVE_F } from "../actions";

export const initialState = {
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

export function theReducer(state = initialState, action) {
  // return {
  //   msg: "This is from my reducer",
  // };
  if (action.type === ADD_F) {
    // case ADD_F:
    if (!state.car.features.includes(action.payload)) {
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
      };
    } else {
      return state;
    }
  }

  if (action.type === REMOVE_F) {
    const { price, id } = action.payload;
    return {
      ...state,
      additionalPrice: (state.additionalPrice -= price),
      car: {
        ...state.car,
        features: state.car.features.filter((feature) => feature.id !== id),
      },
    };
  }
  return state;
}
