import {ADD_FEATURE, REMOVE_FEATURE} from './../actions'

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
    };

export const carReducer = (state=initialState, action) => {
    console.log(state.additionalFeatures)
    switch(action.type){
        case ADD_FEATURE:
            const data = state.additionalFeatures.filter((item) => item.id === action.payload
            )[0];
            return{
                ...state,
                car:{...state.car,
                    features: [...state.car.features,data],
                },
                additionalPrice: state.additionalPrice + data.price,
                }
        case REMOVE_FEATURE:
            const removed = state.car.features.filter((i) => i.id ===action.payload
            )[0];
            const newPrice = state.additionalPrice - removed.price
            const featuresEdit = state.car.features.filter((i) => i.id !== action.payload)
            return{
                ...state,
                car:{
                    ...state.car,
                    features: featuresEdit,
                },
                additionalPrice: newPrice
            }
            

        default:
         return state
    } 
}