import { ADD_ITEM, REMOVE_ITEM } from '../actions/index';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ITEM:

      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.concat(action.payload)
        },
        store: state.store.filter(part => part.id !== action.payload.id),
        additionalPrice: state.additionalPrice + action.payload.price

      }

    case REMOVE_ITEM:

      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(part => part.id !== action.payload.id)
        },
        store: state.store.concat(action.payload),
        additionalPrice: state.additionalPrice - action.payload.price
      }
    
    default:
      return state
  }
}