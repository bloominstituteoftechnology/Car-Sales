//actiontypes
import {ADD_FEATURES, REMOVE_FEATURES} from "../actions"


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


  export const carReducer = (state = initialState, action) => {
      switch(action.type) {
          case ADD_FEATURES: {
            const allFeature = [...state.car.features]
            const feature = state.additionalFeatures.map(item => {
                if (item.id === action.payload) {
                    allFeature.push(item)
                }
            })
            const remaining = state.additionalFeatures.filter(item => {
                if (item.id !== action.payload) {
                    return item
                }
            })
            return {
                ...state,
                car: {
                    ...state.car,
                    features: allFeature
                },
                additionalFeatures: remaining
            }
          }
          case REMOVE_FEATURES: {
              const feat = [...state.additionalFeatures]
              const add = state.car.features.filter(item => {
                  if (item.id === action.payload) {
                      feat.push(item)
                  }
              })
              const removed = state.car.features.filter(item => {
                  if (item.id !== action.payload) {
                      return item
                  } 
              })
              return {
                  ...state,
                  car: {
                      ...state.car,
                      features: removed
                  },
                 additionalFeatures: feat

              }

          }
          default:
              return state;
      }
  }



