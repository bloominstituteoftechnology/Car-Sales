import { ADD_FEATURE, DELETE_FEATURE } from "../actions/actions";

const intialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    fixedPrice: 26395,
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

function reducer(state = intialState, action) {
  console.log(state.car);
  switch (action.type) {
    case ADD_FEATURE:
      const id = state.additionalFeatures.findIndex(
        feature => feature.id === Number(action.payload)
      );
      return {
        car: {
          ...state.car,
          price: state.car.price + state.additionalFeatures[id].price,
          features: [
            ...state.car.features,
            {
              feature: state.additionalFeatures[id].name,
              id: Date.now(),
              price: state.additionalFeatures[id].price
            }
          ]
        },
        additionalFeatures: [...state.additionalFeatures]
      };
    case DELETE_FEATURE:
      const delId = state.car.features.findIndex(
        feature => feature.id === Number(action.payload)
      );
      return {
        car: {
          ...state.car,
          price: state.car.price - state.car.features[delId].price,
          features: state.car.features.filter(
            feature => feature.id !== Number(action.payload)
          )
        },
        additionalFeatures: [...state.additionalFeatures]
      };
    default:
      return state;
  }
}

export default reducer;