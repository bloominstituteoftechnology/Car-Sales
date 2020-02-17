//import actions for reducer and declare initial state
import { ADD_FEATURE, REMOVE_FEATURE, ADD_TOTAL } from '../actions'

//setup initial state
const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
}, 

additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }  
    ]
}

//setup reducer
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return{
                ...state,
            car: {
                ...state.car,
            features: state.car.features.includes(action.payload) ? 
            [...state.car.features] : [...state.car.features, action.payload]
            }
        };
        case REMOVE_FEATURE: 
            return{
                ...state,
            car: {
                ...state.car,
            features: state.car.features.filter(car => car.id !==action.payload.id)
            }
        };
        case ADD_TOTAL: 
            return{
                ...state,
                additionalPrice: state.additionalPrice + action.payload
            }
        default:
            return state;
    }
}