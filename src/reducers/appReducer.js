import { REMOVE_FEATURE, ADD_FEATURE } from '../actions/appActions'

// Initial state grabbed from App.js originally, State will be housed here then connected to store.

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

//Reducer for App.js

export const appReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case REMOVE_FEATURE:
            return {
                ...state,
                features: [...state.features, { features: action.payload }]
            };
        case ADD_FEATURE:
            return{
                ...state,
                features: [...state.features, { features: action.payload }]
            }
        default:
            return state;
    };
};