import * as types from './actionTypes';
// rename the reducer, give it a unique name
// export the reducer
// make sure the reducer is a "pure" function
// NO RANDOMNESS no uuid() no moment.js no Math.random()
// which takes state (slice) and an action
// and returns FRESH NEW STATE (slice)
// we need a default parameter to supply the initial value for the slice
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

export function vehicleReducer(state = initialState, action) {
  switch (action.type) {
    case types.BUY_ITEM:
      debugger
      return {
          ...state,
          car: {
              ...state.car,
              features: state.car.features.concat(action.payload.item)
          },
      };
    case types.REMOVE_FEATURE:
      return {
          ...state,
          car: {
              features: state.car.features.filter(feature => feature.id !== action.payload.id)
          }
      };
    default:
      return state;
  }
}