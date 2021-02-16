import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            // action.payload = {id: 1, name: 'V-6 engine', price: 1500}
            if (!state.car.features.includes(action.payload)) {
                return ({
                    ...state,
                    additionalPrice: (state.additionalPrice + action.payload.price),
                    car: {
                        ...state.car,
                        features: [...state.car.features, action.payload]
                    }
                });
            } else {
                return state;
            }
        case REMOVE_FEATURE:
            // action.payload = { id: 1, name: 'V-6 engine', price: 1500 }
            const { id, price } = action.payload;
            return ({
                ...state,
                additionalPrice: (state.additionalPrice - price),
                car: {
                    ...state.car,
                    features: state.car.features.filter(feature => feature.id !== id)
                }
            })
        default:
            return state;
    }
}

export default reducer;