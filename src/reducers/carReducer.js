import {ADD_FEATURE, REMOVE_FEATURE} from '../actions/carActions';

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
        { id: 4, name: 'Rear spoiler', price: 250 },
        { id: 5, name: 'Cup Holder', price: 10000000},
        { id: 6, name: 'Holo Graphic Display', price: 52453365 },
        { id: 7, name: 'JetBooster', price: 256548},
        { id: 8, name: 'Disco Ball', price: 5468799 },
        { id: 9, name: 'Transformer', price: 549888789}
    ]
}

export const carReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FEATURE:
            return{
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                },
                additionalFeatures: state.additionalFeatures.filter(item => item.id !== action.payload.id)
            }
        case REMOVE_FEATURE:
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload.id)
                },
                additionalFeatures: [
                    ...state.additionalFeatures,
                    action.payload
                ]
            }
        default:
            return state;
    }
}