export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';



export const initialState = {
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



const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                car: { ...state.car, features: [...state.car.features, action.payload] },
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id),
                additionalPrice: state.additionalPrice + action.payload.price
            };
        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car, features: state.car.features.filter(feature => feature.id !== action.payload.id)
                },
                additionalFeatures: [...state.additionalFeatures, action.payload],
                additionalPrice: state.additionalPrice - action.payload.price
            };
        default:
            return state;
    }
}

export default carReducer;