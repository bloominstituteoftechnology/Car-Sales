import { ADD_FEATURE, REMOVE_FEATURE } from "../Actions/actions"

const initialState ={
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
            additionalPrice: state.additionalPrice + action.payload, price,// pulls additional price which is 0 and adds the car price which is the 26k
            car:{
                ...state.car,
                feature: [...state.car.features, action.payload],
            }
        
        }
        case REMOVE_FEATURE:
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload,price,
                car:{
                    ...state.car,
                    features:[
                        ...state.car.features.filter(
                            (carData) => carData.id === action.payload.id
                        )
                    ]
                }
            }
            default:
            return state; //returning back to original state
    }
}

export default carSalesReducer;