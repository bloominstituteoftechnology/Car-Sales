export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    AdditionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const addFeatReducer = (state = initialState, action) => {
    console.log('from AFR', state);

    switch (action.type) {
        case 'ADD_FEATURE':
            console.log('from addFeature', action);
            return {
                ...state,
                car: { ...state.car, features: [...state.car.features, action.payload] },
                additionalPrice: state.additionalPrice += action.payload.price,
                AdditionalFeatures: state.AdditionalFeatures.filter((item) =>
                    item.id === action.payload.id ? '' : item)
            };

        case 'REMOVE_FEATURE':
            console.log('from AFR:removeFeature', action);
            return {
                ...state,
                car: {
                    ...state.car, features: [...state.car.features.filter((item) =>
                        item.id !== action.payload.id ? '' : item
                    )]
                },


            }

        default:
            return state;
    }
}