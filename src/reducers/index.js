import {ADD_FEATURE, REMOVE_FEATURE} from '../actions';

export let initialState = [{

    "additionalPrice": 0, 
        "car": { 
            "price": 26395, 
            "name": "2019 Ford Mustang", 
            "image": "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg", 
            "miles": 68543, 
            "type": "Hardcoded for MVP Tasks", 
            "features": [] 
        }, 
        "additionalFeatures": [
            { 
                "id": 1, 
                "name": "V-6 engine", 
                "price": 1500 
            }, 
            { 
                "id": 2, 
                "name": "Racing detail package", 
                "price": 1500 
            }, 
            { 
                "id": 3, 
                "name": "Premium sound system", 
                "price": 500 
            }, 
            { 
                "id": 4, 
                "name": "Rear spoiler", 
                "price": 250 


}]
}]

 function carReducer(state = initialState, action) {

    switch (action.type){

        case ADD_FEATURE:
        return state.map((carState) => {
            if(carState === state[action.payload.index]) {
                return {
                    ...carState,
                    car: {
                        ...carState.car,
                        features: [...carState.car.features, action.payload.feature]
                    },
                    additionalPrice: carState.additionalPrice + action.payload.feature.price,
                    additionalFeatures: carState.additionalFeatures.filter(feature => feature !== action.payload.feature)
                }
            }
            return carState;  
            });

        
        case REMOVE_FEATURE:
            return state.map((carState) => {
                if (carState === state[action.payload.index]) {
                    return {
                        ...carState,
                        car: {
                            ...carState.car,
                            features: carState.car.features.filter(feature => feature !== action.payload.feature)
                        },
                        additionalPrice: carState.additionalPrice - action.payload.feature.price,
                        additionalFeatures: [...carState.additionalFeatures, action.payload.feature]
                    }
                }
                return carState;
            });
            case "ADD_CARS_DATA":
            initialState = [...initialState, action.payload];
            return [...state, action.payload];

        default:
            return state;
    }

}

export default carReducer;