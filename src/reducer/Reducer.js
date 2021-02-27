import { ADD_FEATURE } from '../actions/index'
import { REMOVE_FEATURE } from '../actions/index'

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        {
         id: 0,
         name: 'V-6 engine',
         price: 1500,
        },
        {
         id: 1,
         name: 'Racing detail package',
         price: 1500,
        },
        {
         id: 2,
         name: 'Premium sound system',
         price: 250
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                additionalFeatures: state.additionalFeatures.filter((feature) => feature.id !== action.payload.id),
                car: { ...state.car, price: state.car.price + action.payload.price, features: [...state.car.features, action.payload] }};


            case REMOVE_FEATURE:
                return {
                    ...state,
                    car: { ...state.car, features: state.car.features.filter((feature) => feature.id !== action.payload.id),
                    price: state.car.price - action.payload.id }, additionalFeatures: [...state.additionalFeatures, action.payload] };

                default: 
                    return state;
    }
}

export default reducer;