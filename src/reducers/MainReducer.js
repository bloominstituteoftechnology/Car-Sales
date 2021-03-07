
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


const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            const newCarFeatures = [...state.car.features, action.payload]
            return {
                ...state, car: {
                    ...state.car,
                    features: newCarFeatures
                },
                additionalPrice: state.additionalPrice+action.payload.price
            }
        case "DELETE":
            const newCarFeaturesEdit = state.car.features.filter(f => f.id != action.payload.id)
            return {
                ...state, car: {
                    ...state.car,
                    features: newCarFeaturesEdit
                },
                additionalPrice: state.additionalPrice-action.payload.price
            }
        default:
            return {...state}
    }
}


export default MainReducer;