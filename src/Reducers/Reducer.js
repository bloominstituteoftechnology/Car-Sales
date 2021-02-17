export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: []
    },
    additionalFeatures: [
        {id: 0, name: 'V-6 Engine', price: 1500},
        {id: 2, name: "Racing detail package", price: 1500},
        {id: 3, name: "Premium sound system", price: 500},
        {id: 4, name: "Rear spoiler", price: 250},
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case('ADD_FEATURE'):
        if(!state.car.features.includes(action.payload)){
            return ({
                ...state, additionalPrice: (state.additionalPrice + action.payload.price), 
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            })
        }
        else {
            return state
        }
        case('SUBTRACT_FEATURE'):
        const {id, price} = action.payload
        return ({
            ...state, additionalPrice: (state.additionalPrice - price),
            car: {
                ...state.car, features: state.car.features.filter(feature => 
                        feature.id !== id
                    )
            }
        })
        default: return(state)
    }
}
