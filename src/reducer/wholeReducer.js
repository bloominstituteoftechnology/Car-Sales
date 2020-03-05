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
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

const wholeReducer = (state = initialState, action) => {
    console.log("wholeReducer", state, action);

    switch (action.type) {
        case 'REMOVE_FEATURE':

            return {
                ...state,
            }
            case "BUY_ITEM":
                // If the feature ID equals the feature ID that was clicked, it will not be added.
                if(state.car.features.find(feature => feature.id === action.payload.id)) {
                    return state;
                } else {
                    return {
                        // Returns state first
                        ...state,
                        // Our action is just updating the feature so we need to get into features
                        car: {
                            ...state.car,
                            price: state.car.price + action.payload.price,
                            features: [...state.car.features, action.payload]
                        }
                    };
                }
        default:
            return state;
    }
};

export default wholeReducer;