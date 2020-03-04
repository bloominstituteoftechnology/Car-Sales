export const initialState = {
    additionalPrice = 0,
    car: {
        price: 234,
        name: 'Test',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        {id: 5, name: 'Test-name', price: 567}
    ]
};

export const removeFeature = (state, initialState, action) => {
    console.log("removeFeature", state, action);

    switch(action.type) {
        case 'REMOVE_FEATURE': 

        return {
            ...state,
        }
        default: 
        return state;
    }
};