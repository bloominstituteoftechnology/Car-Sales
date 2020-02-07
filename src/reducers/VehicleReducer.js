import { ADD_ITEM } from "../actions/actions.js";
import { REMOVE_ITEM } from "../actions/actions.js";


export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {

  console.log("Reducer");

  switch (action.type) {
    case ADD_ITEM:
      if (!state.car.features.includes(action.payload))//can't add duplicates
        return { ...state, car: { ...state.car, price: totalItems(state.car.features.concat(action.payload)), features: state.car.features.concat(action.payload) } };
      else return state;
    case REMOVE_ITEM:
      console.log("Reducer is removing item with ID ", action.payload.price);
      return {
        ...state, car: {
          ...state.car, price: totalItems(state.car.features) - action.payload.price, features: state.car.features.filter((item) => {
            if (item && item.id === action.payload.id) return false;
            return true;
          })
        }
      };
    default:

      return state;
  }

  function totalItems(items) {
    let total = 0;
    items.forEach((item) => {
      if (item) {
        total += item.price;
        console.log("adding to total ", item.price)
      }
    })
    console.log("total is ", total)
    return total;
  }

}