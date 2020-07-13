// initial state and reducers, left alone 

import {ADD_ITEM,REMOVE_ITEM , CHANGE_CAR}from "../actions"
import cars from "../data.js"

export const initialState = cars
// }
// export const initialState = [{
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: "2019 Ford Mustang",
//     image:
//       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//     features: []
//   },
//   additionalFeatures: [
//     { id: 1, name: "V-6 engine", price: 1500 },
//     { id: 2, name: "Racing detail package", price: 1500 },
//     { id: 3, name: "Premium sound system", price: 500 },
//     { id: 4, name: "Rear spoiler", price: 250 },
//     { id: 5, name: "Performance Exhaust", price: 800 },
//     { id: 6, name: "Intake Upgrade", price: 500 },
//     { id: 7, name: "Chrome Rims", price: 200 }
//   ]
// }

export const featuresReducer = (state = initialState[0], action) => {
       switch(action.type){
          case ADD_ITEM:
          return{
                additionalPrice:state.additionalPrice + action.payload.price,
                car:{
                    ...state.car, 
                    features:[...state.car.features,action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter(feature => feature !== action.payload)
          }
          case REMOVE_ITEM:
              return{
                additionalPrice:state.additionalPrice-action.payload.price,
                  car:{
                      ...state.car, 
                      features:state.car.features.filter(item=>item !== action.payload)
                  },
                  additionalFeatures: [
                    ...state.additionalFeatures,
                    action.payload
                ]
            }
          case CHANGE_CAR: 
          return  Object.assign(cars[action.payload]) 



            
            
            
          
        default:
            return state
      }
  }

