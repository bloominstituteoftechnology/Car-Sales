const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      const newFeature = {
        id: Date.now(),
        name: action.payload.name,
        price: action.payload.price
      };
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, newFeature]
        },
        additionalPrice: state.additionalPrice + action.payload.price
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            task => task.id !== action.payload.id
          )
        }
      };
    default:
      return state;
  }
};
