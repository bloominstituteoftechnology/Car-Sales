import {ADD_FEATURE, REMOVE_FEATURE} from '../actions';

export let initialState = {

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
}

 function carReducer(state = initialState, action) {

    switch (action.type){

        case ADD_FEATURE:
             return {
                    ...state,
                    car: {
                        ...state.car,
                        features: [...state.car.features, action.payload]
                    },
                    // additionalPrice: state.additionalPrice + action.payload.feature.price,
             }
            
        

        
        case REMOVE_FEATURE:
             
                    return {
                        ...state,
                        car: {
                            ...state.car,
                            features: state.car.features.filter(feature => feature !== action.payload.id)
                        },
                        additionalPrice: state.additionalPrice - action.payload.feature.price,
                        additionalFeatures: [...state.additionalFeatures, action.payload.feature]
                    }
               
            
            case "ADD_CARS_DATA":
            return [...state, action.payload];

        default:
            return state;
    }

}

export default carReducer;