import * as actions from "../actions/actions";

const initState = {
  additionalPrice: 500,
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

// const addPrice = state.additionalFeatures.filter((n) => n.id === 2);
// const test = parseInt(addPrice.map((item) => {return item.price}), 10)
// console.log(typeof(test));

// const getName = addPrice.map((item) => {return item.name}).toString();
// console.log(getName)

// const newState = { ...state, additionalPrice: state.additionalPrice + test, car: {...state.car, features: [...state.car.features, getName]} };

// console.log(newState);

// const removeItems = {...newState, additionalPrice: newState.additionalPrice - test, car: {...newState.car, features: [ newState.car.features.filter(feature => feature !== "Racing detail package")]}}

// console.log(removeItems)

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.ADD_OPTION:
      return {
        ...state,
        additionalPrice: action.payload.price + state.additionalPrice,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload.item],
        },
      };
    case actions.REMOVE_OPTION:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (feature) => feature.name !== action.payload.name
          ),
        },
      };
    default:
      return state;
  }
}
