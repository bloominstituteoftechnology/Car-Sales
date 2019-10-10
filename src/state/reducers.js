import * as types from "./actionType";

// added initialState to initial value for our slice! 

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


// reducer here

export function carReducer( state = initialState, action) {
    switch (action.type) {
        case types.ADD_FEATURE:
            return {
                ...state,
                additionalPrice: action.payload.price,
                car: {
                ...state.car,
                  price: state.car.price + state.additionalPrice,
                  features: [ ...state.car.features, {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price
                  }]
                }
              };
        case types.DELETE_FEATURE:
                return {
                    ...state,
                    additionalPrice: - action.payload.price,
                    car: {
                      ...state.car,
                      price: state.car.price + state.additionalPrice,
                      features: state.car.features.filter(item => item.id !== action.payload.id)
                    }
                };
        default:
            return state;
    }
}
