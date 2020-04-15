import React from 'react';

const initialState = {
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

const CarReducer = (state = initialState, action) => {
    switch(action.type){
        case "BUY_ITEM":
          console.log("fired")
            const item = state.additionalFeatures.find(i => i.id === action.payload)
            return {
                ...state, car: {...state, additionalPrice: state.additionalPrice + item.price, features: [...state,item] }
            };
        case "REMOVE FEATURE":
            const item2 = state.additionalFeatures.find(i => i.id === action.payload)
            const newFeatures = state.car.features.filter(i => {
                return i.id !== action.payload
            })
            return {...state, car: {...state, additionalPrice: state.additionalPrice - item2.price , features: newFeatures }}
        default:
            return state;
    }
}
 
export default CarReducer;
