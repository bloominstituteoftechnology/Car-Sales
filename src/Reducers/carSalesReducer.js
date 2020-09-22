import { ADD_FEATURE, REMOVE_FEATURE } from "../Actions/actions"

const initialState ={//reinstated state from app.js
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
}

export const carSalesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_FEATURE:
            return{
                ...state,
            additionalPrice: state.additionalPrice + action.payload.price,// pulls additional price which is 0 and adds the car price which is the 26k
            car:{
                ...state.car,
                features: [...state.car.features, action.payload],//printing added feature to screen
            }
           
        
        }
        case REMOVE_FEATURE:
            return{
                ...state,
                additionalPrice:(state.additionalPrice -= action.payload.price),//takes the price that was added to the original price and subtracts the added feature
                car:{
                    ...state.car,
                    price: state.car.price - action.payload.price,//takes price of that car and subtracts it from the additional features price
                    features: state.car.features.filter(
                        (feature) => feature.id !== action.payload.id//targets the additional features inside "features" array and 
                    ),
                 },
                
            }
            default: return state; //returning back to original state
    }
}

export default carSalesReducer;