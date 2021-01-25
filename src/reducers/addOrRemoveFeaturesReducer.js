import {ADD_FEATURE,REMOVE_FEATURE } from '../actions/featuresActions'


// move this object to your reducer, and make it your redux state
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: [
        { id: 5, name: 'fire paint job', price: 1000 },
      ]
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const addOrRemoveFeaturesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                  ...state.car,
                  features: [...state.car.features,
                    { 
                      id: action.payload.id,
                      name: action.payload.name,
                      price: action.payload.price
                    },
                  ], 
                },
                additionalFeatures: state.additionalFeatures.filter(feature => {
                    // only keep features that do not share the payload id
                    return feature.id !== action.payload.id 
                  }),
              };
        case REMOVE_FEATURE:
        return {
            additionalPrice: state.additionalPrice - action.payload.price,
            car: {
            ...state.car,
            features: state.car.features.filter(feature => {
                return feature.id !== action.payload.id
            }),
            
            },
            additionalFeatures: [
            ...state.additionalFeatures,
            { 
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price
            },
            ],
        };
        default:
            return state;
    }
  }