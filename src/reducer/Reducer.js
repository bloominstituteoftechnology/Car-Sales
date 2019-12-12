import {ADDSPECIAL} from '../action/addactions';
import {REMOVESPECIAL} from '../action/addactions';

const InitialState = {
    
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

export const itemReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADDSPECIAL:
            return{
                ...state,

               car: {...state.car,
                features: [...state.car.features, action.payload],
                price: state.car.price += action.payload.price

            }    
        }

        case REMOVESPECIAL:
            return{
                ...state,

                car: {...state.car,
                    features: [...state.car.features.filter(item => (item !== action.payload))],
                    price: state.car.price -= action.payload.price
                }
            }
            default:
                return state;
}

}
